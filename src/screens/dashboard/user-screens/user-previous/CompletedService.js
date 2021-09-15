import React from "react";
import { useLocation } from "react-router-dom";

import Card from "./Card";

const CompletedService = ({ props }) => {
  const { search } = useLocation();

  const searchParam = new URLSearchParams(search);

  const availale_service = props;
  const q = searchParam.get("q");
  const filtered = availale_service.filter((item) => {
    return q
      ? item.service_name.toLowerCase().indexOf(q.toLowerCase()) >= 0
      : true;
  });

  return (
    <>
      {availale_service.length > 0 ? (
        <div>
          <div className="page-header">All Completed Services</div>
          <div className="services__container">
            {q && filtered.length === 0 && <h1>No results found</h1>}
            {filtered.map((item, index) => (
              <Card
                key={index}
                helper_name={item.helper_name}
                service_name={item.service_name}
                service_type={item.ServiceType}
                // location={item.Location}
                mobile={item.contact_number}
                charges={item.average_charges}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="page-header"> No request completed yet!</div>
      )}
    </>
  );
};

export default CompletedService;
