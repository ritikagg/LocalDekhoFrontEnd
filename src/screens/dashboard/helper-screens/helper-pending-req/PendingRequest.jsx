import React from "react";
import PendingCard from "./atoms/PendingCard";

const PendingRequest = ({ props }) => {
  const available_req = props;
  const request_timeslot = new Date().toLocaleString();

  return (
    <>
      {available_req.length > 0 ? (
        <div>
          <div className="page-header">All Pending Request</div>

          <div className="pr_card__body">
            {available_req.map((item, index) => (
              <PendingCard
                key={index}
                id={item.id}
                status={item.status}
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
          No Pending Request. Please visit in sometime!!
        </div>
      )}
    </>
  );
};

export default PendingRequest;
