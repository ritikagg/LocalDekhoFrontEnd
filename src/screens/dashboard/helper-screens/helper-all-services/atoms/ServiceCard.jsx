import React, { useState } from "react";
import { Modal } from "antd";
// import { useDispatch } from "react-redux";
import EditServiceForm from "../molecule/EditServiceFrom";
import "./servicecard.css";

// Props - service_name, service_type, location, mobile, charges
const ServiceCard = (props) => {
  // const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const handle = () => {
    setVisible(true);
  };

  return (
    <>
      <div className="service-card">
        <div className="acc_service-card__header">
          <i className="bx bx-rocket pr_service-icon"></i>
          {/* <div>{props.service_name}</div> */}
          <div className="service-card__service-type">{props.service_name}</div>
        </div>

        <div className="service-card__info">
          <div>
            <div className="info__detail">
              <i className="bx bx-map"></i>
              <div className="info__deatil-item">{props.location}</div>
            </div>
            <div className="info__detail">
              <i className="bx bx-phone-call"></i>
              <div className="info__deatil-item">+91 - {props.mobile}</div>
            </div>
            <div className="info__detail">
              <i className="bx bx-rupee"></i>
              <div className="service_card_info__service-name">
                Avg Charges: {props.charges}
              </div>
            </div>
          </div>
          <div className="service-card__edit" onClick={handle}>
            Edit Service
          </div>
        </div>
      </div>
      <Modal
        // title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
      >
        <EditServiceForm props={props} onClose={onClose} />
      </Modal>
    </>
  );
};

export default ServiceCard;
