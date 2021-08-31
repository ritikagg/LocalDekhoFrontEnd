import React, { useState } from "react";
import "./allservices.css";

import electricican from "../../../assets/flaticon/electrician.svg";
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

import { Drawer, notification } from "antd";
// import "antd/dist/antd.css";

const AllService_card = [
  {
    ServiceName: "Electrician",
    icon: electricican,
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
    if (!geolocation.error) {
      dispatch(
        reqServiceActions.UPDATE_DETAILS({
          ...ServiceDetails,
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
          requestedService: e.currentTarget.id,
        })
      );
      setVisible(true);
    } else {
      notification.error({
        message: "Unable to access location",
        description: "Please provide location access to serve better.",
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
      <Drawer
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <RequestForm onClose={onClose} />
      </Drawer>
    </>
  );
};

export default Allservices;
