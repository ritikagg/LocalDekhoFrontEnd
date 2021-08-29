import React from "react";
import StatusCard from "./components/status-card/StatusCard";

const items = [
  {
    icon: "bx bx-user-pin",
    count: "12",
    title: "All Services",
  },
  {
    icon: "bx bx-notification",
    count: "16",
    title: "Pending Requests",
  },
  {
    icon: "bx bx-time",
    count: "4",
    title: "Scheduled Request",
  },
  {
    icon: "bx bx-task",
    count: "64",
    title: "Total Completed",
  },
];

function HelperHome() {
  return (
    <>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-12">
          <div className="row">
            {items.map((item, index) => (
              <div className="col-6" key={index}>
                <StatusCard
                  icon={item.icon}
                  count={item.count}
                  title={item.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default HelperHome;
