import React, { useEffect } from "react";
import { message } from "antd";
import AcceptedServiceCard from "./atoms/AcceptedServiceCard";
import "./acceptedservice.css";

const AcceptedRequest = (props) => {
  const available_service = props.acceptedSer;
  let IsNotify = props.IsConfirm;

  useEffect(() => {
    const key = "updatable";
    if (IsNotify) {
      message.loading({ content: "Hold tight...", key });
      setTimeout(() => {
        message.success({ content: "Request Sent!!", key, duration: 10 });
      }, 10000);
    }
  }, [IsNotify]);

  return (
    <>
      {available_service.length > 0 ? (
        <div>
          <div className="page-header">All Services</div>
          <div className="services__container">
            {available_service.map((item, index) => (
              <AcceptedServiceCard
                key={index}
                id={item.id}
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
        <div className="page-header">
          No Request Accepted yet. Please visit in sometime!!
        </div>
      )}
    </>
  );
};

export default AcceptedRequest;
