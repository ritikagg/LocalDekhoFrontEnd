import React from "react";
import { Link } from "react-router-dom";
import "./groupedcard.css";

const GroupedCard = (props) => {
  return (
    <>
      <div
        className={
          props.cardType === "accepted"
            ? "s_service-card s_service-card--accepted"
            : "s_service-card s_service-card--pending"
        }
      >
        {props.count > 0 && (
          <div className="s_service-card__counter">{props.count}</div>
        )}
        <div className="s_service-card__header">
          <div className="s_service-icon">
            <i className="bx bx-rocket"></i>
          </div>
          <div className="s_service-card__service-status">{props.status}</div>
        </div>
        <div className="s_service-card__info">
          <div className="s_info__service-name">{props.service_name}</div>
          {/* <div>
            <div className="s_info__detail">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </div>
          </div> */}
          <div className="s_service-card__control">
            {props.cardType === "accepted" ? (
              <Link
                to={"/dashboard/accepted/" + props.service_name}
                className="s_service-card__action"
              >
                View all helpers
              </Link>
            ) : (
              <div className="s_service-card__action">Waiting for Helpers</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default GroupedCard;
