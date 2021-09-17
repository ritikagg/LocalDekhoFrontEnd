import React from "react";

const Card = (props) => {
  return (
    <div className="acc_service-card">
      <div className="acc_service-card__header">
        <i className="bx bx-rocket s_service-icon"></i>
        <div className="acc_service-card__service-type">
          {props.service_name}
        </div>
      </div>
      <div className="acc_service-card__info">
        <div className="acc_info__service-name">{props.helper_name}</div>
        <div>
          <div className="acc_info__detail">
            <i className="bx bx-rupee"></i>
            <div className="acc_info__deatil-item">{props.charges}</div>
          </div>
          <div className="acc_info__detail">
            <i className="bx bx-phone-call"></i>
            <div className="acc_info__deatil-item">+91 - {props.mobile}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
