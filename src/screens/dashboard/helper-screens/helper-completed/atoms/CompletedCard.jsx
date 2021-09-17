import React from "react";
import "./completedcard.css";

const CompletedCard = (props) => {
  return (
    <div className="cr_service-card">
      <div className="cr_service-card__header">
        <i className="bx bx-rocket s_service-icon"></i>
        {/* <div>{props.service_name}</div> */}
        <div className="cr_service-card__service-type">
          {props.service_name}
        </div>
      </div>
      <div className="cr_service-card__info">
        <div className="cr_info__service-name">{props.user_name}</div>
        <div>
          <div className="cr_info__detail">
            <i className="bx bx-map"></i>
            <div className="cr_info__deatil-item">{props.location}</div>
          </div>
          <div className="cr_info__detail">
            <i className="bx bx-phone-call"></i>
            <div className="cr_info__deatil-item">+91 - {props.mobile}</div>
          </div>
          <div className="cr_info__detail">
            <i className="bx bxs-calendar"></i>
            <div className="cr_info__deatil-item">{props.request_timeslot}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedCard;
