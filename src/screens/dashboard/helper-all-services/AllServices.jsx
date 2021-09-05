import React, { useState } from "react";
import ServiceCard from "./atoms/ServiceCard";
import FloatingActionButtons from "../../../components/fab/Fab";
import AddService from "./AddServiceForm";
import { Drawer } from "antd";

// const availale_service = [
//   {
//     ServiceName: "Electrician",
//     ServiceType: "Repairing",
//     Location: "Karol Bagh, Delhi",
//     Mobile: "999999999",
//     AvgCharges: "Rs 500",
//   },
//   {
//     ServiceName: "Food Service",
//     ServiceType: "Tiffin Delivary",
//     Location: "Karol Bagh, Delhi",
//     Mobile: "999999999",
//     AvgCharges: "Rs 120",
//   },
//   {
//     ServiceName: "Tuition",
//     ServiceType: "Home Tuition",
//     Location: "Connaught place, Delhi",
//     Mobile: "999999999",
//     AvgCharges: "Rs 4500",
//   },
//   {
//     ServiceName: "Mechanic",
//     ServiceType: "Service and Repairing",
//     Location: "Greater Kailash, Delhi",
//     Mobile: "999999999",
//     AvgCharges: "Rs --",
//   },
//   {
//     ServiceName: "Cleaning",
//     ServiceType: "House Cleaning",
//     Location: "Karol Bagh, Delhi",
//     Mobile: "999999999",
//     AvgCharges: "Rs 500",
//   },
//   {
//     ServiceName: "Housekeeping",
//     ServiceType: "Maids",
//     Location: "Karol Bagh, Delhi",
//     Mobile: "999999999",
//     AvgCharges: "Rs 5500",
//   },
//   {
//     ServiceName: "Housekeeping",
//     ServiceType: "Cooks / Chefs",
//     Location: "Karol Bagh, Delhi",
//     Mobile: "999999999",
//     AvgCharges: "Rs 4500",
//   },
//   {
//     ServiceName: "Electrician",
//     ServiceType: "Repairing",
//     Location: "Karol Bagh, Delhi",
//     Mobile: "999999999",
//     AvgCharges: "Rs 500",
//   },
// ];

// Props - service_name, service_type, location, mobile, charges
const AllServices = ({ props }) => {
  const availale_service = props;

  const [visible, setVisible] = useState(false);

  console.log(visible);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div>
      <h2 className="page-header">All Services</h2>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card__body">
              {availale_service.map((item, index) => (
                <ServiceCard
                  service_name={item.service_name}
                  service_type=""
                  location={item.address}
                  mobile="9958937359"
                  charges={item.avg_charges}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <FloatingActionButtons handle={setVisible} />
      <Drawer
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <AddService onClose={onClose} />
      </Drawer>
    </div>
  );
};

export default AllServices;
