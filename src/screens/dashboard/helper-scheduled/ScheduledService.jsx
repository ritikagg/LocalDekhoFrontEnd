import React from "react";
import ScheduledCard from "./atoms/ScheduledCard";

const ScheduledService = ({ props }) => {
  const availale_service = props;
  return (
    <div>
      <h2 className="page-header">All Services</h2>
      <div className="pr_card__body">
        {availale_service.map((item, index) => (
          <ScheduledCard
            key={index}
            user_name={item.user_name}
            service_name={item.service_name}
            location={item.user_address}
            mobile={item.user_mobile}
            request_timeslot={item.request_timeslot}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduledService;
