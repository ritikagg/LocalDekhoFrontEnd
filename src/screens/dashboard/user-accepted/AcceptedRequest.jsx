import React from "react";
import AcceptedServiceCard from "./atoms/AcceptedServiceCard";
// import ServiceCard from "../helper-all-services/atoms/ServiceCard";
// Props - service_name, service_type, location, mobile, charges
import "./acceptedservice.css";
const availale_service = [
  {
    HelperName: "Leonard Morris",
    ServiceName: "Electrician",
    ServiceType: "Repairing",
    Location: "Karol Bagh, Delhi",
    Mobile: "999999999",
    AvgCharges: "500",
    Rating: 4,
  },
  {
    HelperName: "Micheal Olson",
    ServiceName: "Food Service",
    ServiceType: "Tiffin Delivary",
    Location: "Karol Bagh, Delhi",
    Mobile: "999999999",
    AvgCharges: "120",
    Rating: 5,
  },
  {
    HelperName: "Shawn Payne",
    ServiceName: "Tuition",
    ServiceType: "Home Tuition",
    Location: "Connaught place, Delhi",
    Mobile: "999999999",
    AvgCharges: "4500",
    Rating: 5,
  },
  {
    HelperName: "Guy Parker",
    ServiceName: "Mechanic",
    ServiceType: "Service and Repairing",
    Location: "Greater Kailash, Delhi",
    Mobile: "999999999",
    AvgCharges: "1000",
    Rating: 3,
  },
];

const AcceptedRequest = () => {
  return (
    <div>
      <h2 className="page-header">All Services</h2>
      {/* <div className="row">
        <div className="col-12"> */}
      {/* <div className="card"> */}
      <div className="services__container">
        {availale_service.map((item, index) => (
          <AcceptedServiceCard
            key={index}
            helper_name={item.HelperName}
            service_name={item.ServiceName}
            service_type={item.ServiceType}
            // location={item.Location}
            mobile={item.Mobile}
            charges={item.AvgCharges}
            rating={item.Rating}
          />
        ))}
        {/* </div> */}
      </div>
    </div>
    //   </div>
    // </div>
  );
};

export default AcceptedRequest;
