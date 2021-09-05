import React from "react";
import "./acceptedservice.css";
import star from "../../../../assets/boxicons-2.0.7/icons/star.svg";

// const star = star;
// Props - service_name, service_type, location, mobile, charges

const AcceptedServiceCard = (props) => {
  return (
    <div className="acc_service-card">
      <div className="acc_service-card__header">
        <i className="bx bx-rocket acc_service-icon"></i>
        {/* <div>{props.service_name}</div> */}
        <div className="acc_service-card__service-type">
          {props.service_type}
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
          <div>
            <img src={star} className="filter" alt="rating" />
            <img src={star} className="filter" alt="rating" />
            <img src={star} className="filter" alt="rating" />
          </div>
        </div>
        <div className="acc_service-card__control">
          <div className="acc_service-card__accept">Accept Service</div>
          <div className="acc_service-card__decline">Decline Service</div>
        </div>
        <div className="acc_service_loc">
          <div className="acc_service_loc__">Share Location</div>
        </div>
      </div>
    </div>
  );
};

export default AcceptedServiceCard;
