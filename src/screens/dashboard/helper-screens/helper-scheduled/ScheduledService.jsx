import React from "react";
import ScheduledCard from "./atoms/ScheduledCard";

const ScheduledService = ({ props }) => {
  const scheduled_service = props;
  const request_timeslot = new Date().toLocaleString();

  return (
    <>
      {scheduled_service.length > 0 ? (
        <div>
          <div className="page-header">All Scheduled Service</div>
          <div className="pr_card__body">
            {scheduled_service.map((item, index) => (
              <ScheduledCard
                key={index}
                user_name={item.user_name}
                service_name={item.service_name}
                location={item.address_json}
                mobile={item.contact_number}
                request_timeslot={request_timeslot}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="page-header">
          {" "}
          No service scheduled. Please Accept Request!
        </div>
      )}
    </>
  );
};

export default ScheduledService;
