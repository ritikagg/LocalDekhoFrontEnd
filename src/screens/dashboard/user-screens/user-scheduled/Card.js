import { message } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { updateRequestStatusAPI } from "../../../../store/users/user-slice";

const Card = (props) => {
  const dispatch = useDispatch();

  const id = props.id;
  const completeHandle = () => {
    const action = `completed`;
    dispatch(updateRequestStatusAPI(id, action));

    message.success({ content: "Request Completed" });
  };

  return (
    <div className="acc_service-card">
      <div className="acc_service-card__header">
        <i className="bx bx-rocket acc_service-icon"></i>
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
      <div className="pr_service-card__control">
        <div className="pr_service-card__accept" onClick={completeHandle}>
          Mark As Done
        </div>
      </div>
    </div>
  );
};

export default Card;
