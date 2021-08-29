import React from "react";
import "./servicecard.css";
// Props - service_name, service_type, location, mobile, charges
const ServiceCard = (props) => {
  return (
    <div className="service-card">
      <div className="service-card__header">
        <i className="bx bx-rocket service-icon"></i>
        {/* <div>{props.service_name}</div> */}
        <div className="service-card__service-type">{props.service_type}</div>
      </div>
      <div className="service-card__info">
        <div className="info__service-name">{props.service_name}</div>
        <div>
          <div className="info__detail">
            <i className="bx bx-map"></i>
            <div className="info__deatil-item">{props.location}</div>
          </div>
          <div className="info__detail">
            <i className="bx bx-phone-call"></i>
            <div className="info__deatil-item">+91 - {props.mobile}</div>
          </div>
        </div>
        <div className="service-card__edit">Edit Service</div>
      </div>
    </div>
  );
};

export default ServiceCard;
