import React, { useState, useEffect } from "react";
import ServiceCard from "./atoms/ServiceCard";
import FloatingActionButtons from "../../../components/fab/Fab";
import AddService from "./AddServiceForm";
import { Modal, notification } from "antd";
import useGeolocation from "react-hook-geolocation";
import { useDispatch } from "react-redux";
import { reqServiceActions } from "../../../store/reqService/reqService-slice";

const AllServices = ({ props }) => {
  const availale_service = props;

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const geolocation = useGeolocation();
  const lat = geolocation.latitude;
  const lng = geolocation.longitude;
  useEffect(() => {
    if (!geolocation.error) {
      dispatch(
        reqServiceActions.UPDATE_LATLNG({
          latitude: lat,
          longitude: lng,
        })
      );
    } else {
      notification.error({
        message: "Unable to access location",
        description: "Please provide location access to serve better.",
      });
    }
  }, [dispatch, lat, lng, geolocation.error]);

  return (
    <div>
      <h2 className="page-header">All Services</h2>

      {/* <div className="col-12">
          <div className="card"> */}
      <div className="card__body">
        {availale_service.map((item, index) => (
          <ServiceCard
            key={index}
            service_name={item.service_name}
            service_type=""
            location={item.address}
            mobile="9958937359"
            charges={item.avg_charges}
          />
        ))}
      </div>
      {/* </div>
        </div> */}

      <FloatingActionButtons handle={setVisible} />
      <Modal
        // title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
      >
        <AddService onClose={onClose} />
      </Modal>
    </div>
  );
};

export default AllServices;
