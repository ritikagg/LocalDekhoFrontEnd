import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";

const ScheduledRequest = () => {
  const availale_service = useSelector((state) => state.user.scheduledRequest);
  return (
    <div>
      <div className="page-header">All Scheduled Services</div>
      <div className="services__container">
        {availale_service.map((item, index) => (
          <Card
            key={index}
            id={item.id}
            helper_name={item.helper_name}
            service_name={item.service_name}
            service_type={item.ServiceType}
            location={item.Location}
            mobile={item.contact_number}
            charges={item.average_charges}
          />
        ))}
      </div>
    </div>
  );
};

export default ScheduledRequest;
