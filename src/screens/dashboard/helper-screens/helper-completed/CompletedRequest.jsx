import React from "react";
import CompletedCard from "./atoms/CompletedCard";

const CompletedRequest = ({ props }) => {
  const completed_service = props;
  const request_timeslot = new Date().toLocaleString();

  return (
    <>
      {completed_service.length > 0 ? (
        <div>
          <div className="page-header">All Completed Request</div>
          <div className="pr_card__body">
            {completed_service.map((item, index) => (
              <CompletedCard
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
        <div className="page-header">Please Accept and Serve Request!</div>
      )}
    </>
  );
};

export default CompletedRequest;
