import React from "react";
import PendingCard from "./atoms/PendingCard";
import { useLocation } from "react-router-dom";

const PendingRequest = ({ props }) => {
  const available_req = props;
  const { search } = useLocation();
  const searchParam = new URLSearchParams(search);
  const request_timeslot = new Date().toLocaleString();

  const q = searchParam.get("q");
  const filtered = available_req.filter((item) => {
    return q
      ? item.service_name.toLowerCase().indexOf(q.toLowerCase()) >= 0
      : true;
  });

  return (
    <>
      {available_req.length > 0 ? (
        <div>
          <div className="page-header">All Pending Request</div>

          <div className="pr_card__body">
            {q && filtered.length === 0 && <h1>No results found</h1>}
            {filtered.map((item, index) => (
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
