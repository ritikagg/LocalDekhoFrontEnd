import React, { useState } from "react";
import "./pendingcard.css";

const PendingCard = (props) => {
  const [isAccepted, setIsAccepted] = useState(false);
  // const [isDeclined, setIsDeclined] = useState(false);
  const acceptHandle = () => {
    setIsAccepted(true);
  };

  let control = (
    <div className="pr_service-card__control">
      <div className="pr_service-card__accept" onClick={acceptHandle}>
        Accept
      </div>
      <div className="pr_service-card__decline">Decline</div>
    </div>
  );

  if (isAccepted) {
    control = (
      <div className="pr_service-card__control">
        <div className="pr_service-card__accept">Waiting for Confirmation</div>
      </div>
    );
  }

  return (
    <div className="pr_service-card">
      <div className="pr_service-card__header">
        <i className="bx bx-rocket pr_service-icon"></i>
        {/* <div>{props.service_name}</div> */}
        <div className="pr_service-card__service-type">
          {props.service_name}
        </div>
      </div>
      <div className="pr_service-card__info">
        <div className="pr_info__service-name">{props.user_name}</div>
        <div>
          <div className="pr_info__detail">
            <i className="bx bx-map"></i>
            <div className="pr_info__deatil-item">{props.location}</div>
          </div>
          <div className="pr_info__detail">
            <i className="bx bx-phone-call"></i>
            <div className="pr_info__deatil-item">+91 - {props.mobile}</div>
          </div>
          <div className="pr_info__detail">
            <i className="bx bxs-calendar"></i>
            <div className="pr_info__deatil-item">{props.request_timeslot}</div>
          </div>
        </div>

        {control}
      </div>
    </div>
  );
};

export default PendingCard;
