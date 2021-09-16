import React, { useState } from "react";
import "./acceptedservice.css";
import { message } from "antd";
import star from "../../../../../assets/boxicons-2.0.7/icons/star.svg";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateRequestStatusAPI } from "../../../../../store/users/user-slice";

const AcceptedServiceCard = (props) => {
  const [isAccepted, setIsAccepted] = useState(false);
  // const [isDeclined, setIsDeclined] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const id = props.id;
  const service_id = props.service_id;
  const user_id = props.user_id;
  const key = "updatable";

  const acceptHandle = () => {
    const action = `scheduled`;
    setIsAccepted(true);
    dispatch(updateRequestStatusAPI(id, action, service_id, user_id));
    message.loading({ content: "Hold tight...", key });
    setTimeout(() => {
      message.success({ content: "Service Scheduled!!", key, duration: 3 });
    }, 3000);

    history.push({
      pathname: "/dashboard/scheduled",
    });
  };

  const declineHandle = () => {
    const action = `user_declined`;
    dispatch(updateRequestStatusAPI(id, action));
    message.error({ content: "Service Declined" });
    // setIsDeclined(true);
  };

  return (
    <>
      {!isAccepted && (
        <div className="acc_service-card">
          <div className="acc_service-card__header">
            <i className="bx bx-rocket acc_service-icon"></i>
            {/* <div>{props.service_name}</div> */}
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
                <div className="acc_info__deatil-item">
                  +91 - {props.mobile}
                </div>
              </div>
              <div className="acc_info__detail">
                <img src={star} className="filter" alt="rating" />
                <img src={star} className="filter" alt="rating" />
                <img src={star} className="filter" alt="rating" />
                <img src={star} className="filter" alt="rating" />
              </div>
            </div>
            <div className="pr_service-card__control">
              <div className="pr_service-card__accept" onClick={acceptHandle}>
                Accept
              </div>
              <div className="pr_service-card__decline" onClick={declineHandle}>
                Decline
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AcceptedServiceCard;
