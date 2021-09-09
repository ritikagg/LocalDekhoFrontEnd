import React from "react";
import ScheduledCard from "./atoms/ScheduledCard";

const ScheduledService = ({ props }) => {
  const scheduled_service = props;
  return (
    <>
      {scheduled_service.length > 0 ? (
        <div>
          <h2 className="page-header">All Scheduled Service</h2>
          <div className="pr_card__body">
            {scheduled_service.map((item, index) => (
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
      ) : (
        <h2> No service scheduled. Please accept request!!</h2>
      )}
    </>
  );
};

export default ScheduledService;
