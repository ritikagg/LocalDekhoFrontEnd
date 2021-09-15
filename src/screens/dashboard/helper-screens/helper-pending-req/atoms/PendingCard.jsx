import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { message } from "antd";
import { updateRequestStatusAPI } from "../../../../../store/helpers/helpers-slice";
import "./pendingcard.css";

const PendingCard = (props) => {
  const initialState = props.status === "helper_accepted" ? true : false;

  const [isAccepted, setIsAccepted] = useState(initialState);

  const dispatch = useDispatch();

  const id = props.id;
  // const [isDeclined, setIsDeclined] = useState(false);
  const acceptHandle = () => {
    const action = `helper_accepted`;
    setIsAccepted(true);
    const key = "updatable";

    message.loading({ content: "Hold tight...", key });
    setTimeout(() => {
      message.success({
        content: "Service Accepted. Wait for customer to accept!!",
        key,
        duration: 3,
      });
    }, 3000);

    dispatch(updateRequestStatusAPI(id, action));
  };

  const declineHandle = () => {
    const action = `helper_declined`;
    setIsAccepted(true);
    const key = "updatable";

    message.loading({ content: "Hold tight...", key });
    setTimeout(() => {
      message.warning({
        content: "Service Declined.",
        key,
        duration: 3,
      });
    }, 3000);

    dispatch(updateRequestStatusAPI(id, action));
  };

  let control = (
    <div className="pr_service-card__control">
      <div className="pr_service-card__accept" onClick={acceptHandle}>
        Accept
      </div>
      <div className="pr_service-card__decline" onClick={declineHandle}>
        Decline
      </div>
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
