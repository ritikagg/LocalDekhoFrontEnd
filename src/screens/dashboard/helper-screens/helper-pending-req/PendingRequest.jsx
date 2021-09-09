import React from "react";
import PendingCard from "./atoms/PendingCard";

const PendingRequest = ({ props }) => {
  const availale_req = props;
  return (
    <>
      {availale_req.length > 0 ? (
        <div>
          <h2 className="page-header">All Pending Request</h2>

          <div className="pr_card__body">
            {availale_req.map((item, index) => (
              <PendingCard
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
        <h2>No Pending Request. Please visit in sometime...</h2>
      )}
    </>
  );
};

export default PendingRequest;
