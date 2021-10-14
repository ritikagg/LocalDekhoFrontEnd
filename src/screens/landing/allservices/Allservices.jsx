import React, { useState } from "react";
import "./allservices.css";

import electrician from "../../../assets/flaticon/electrician.svg";
import food_delivery from "../../../assets/flaticon/food_delivery.svg";
import tuition from "../../../assets/flaticon/tuition.svg";
import mechanic from "../../../assets/flaticon/mechanic.svg";
import laundry from "../../../assets/flaticon/laundry.svg";
import maids from "../../../assets/flaticon/maids.svg";
import carpenter from "../../../assets/flaticon/carpenter.svg";
import cook from "../../../assets/flaticon/cook.svg";

import useGeolocation from "react-hook-geolocation";

import RequestForm from "../../requestpage/RequestForm";

import { useDispatch, useSelector } from "react-redux";
import { reqServiceActions } from "../../../store/reqService/reqService-slice";
import AllServices from "../../../assets/JsonData/available-services.json";

import { Modal, notification } from "antd";

const AllService_card = [
  {
    ServiceName: "Electrician",
    icon: electrician,
  },
  {
    ServiceName: "Tiffin Service",
    icon: food_delivery,
  },
  {
    ServiceName: "Tuition",
    icon: tuition,
  },
  {
    ServiceName: "Mechanic",
    icon: mechanic,
  },
  {
    ServiceName: "Carpenter",
    icon: carpenter,
  },
  {
    ServiceName: "Maids",
    icon: maids,
  },
  {
    ServiceName: "Laundry",
    icon: laundry,
  },
  {
    ServiceName: "Cook",
    icon: cook,
  },
];

const Allservices = () => {
  const geolocation = useGeolocation();
  const ServiceDetails = useSelector((state) => state.reqService);
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const visibilityHandle = (e) => {
    const serviceName = e.currentTarget.id;
    const selectedService = AllServices.filter(
      (i) => i.ServiceName === serviceName
    );
    if (!geolocation.error) {
      dispatch(
        reqServiceActions.UPDATE_DETAILS({
          ...ServiceDetails,
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
          requestedService: e.currentTarget.id,
          service_id: selectedService[0].id,
        })
      );
      setVisible(true);
    } else {
      notification.error({
        message: "Unable to access location",
        description: "Please provide location access to serve better.",
        key: "location",
      });
    }
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="allservice__root">
        <div className="allservice__root-header">
          Frequest Services Near You
        </div>
        <div className="allservice__root-cards">
          {AllService_card.map((item, index) => {
            return (
              <div
                className="allservice__root-card"
                key={index}
                id={item.ServiceName}
                onClick={visibilityHandle}
              >
                <img
                  src={item.icon}
                  alt={item.ServiceName}
                  className="allservice_card_image"
                />
                <div className="allserivce_card_head">{item.ServiceName}</div>
              </div>
            );
          })}
        </div>
      </div>

      <Modal
        // title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
        footer={null}
      >
        <RequestForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default Allservices;
