import React from "react";
import StatusCard from "./components/status-card/StatusCard";

let items = [
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
    count: "40",
    title: "Scheduled Request",
  },
  {
    icon: "bx bx-task",
    count: "64",
    title: "Total Completed",
  },
];

const HelperHome = ({ props }) => {
  items.map((item) => {
    if (item.title === "All Services") {
      item.count = props.allServices.length;
    }
    return item;
  });

  let pendingReq = props.allRequest.filter((item) => {
    return item.status === "pending" || item.status === "helper_accepted";
  });

  items.map((item) => {
    if (item.title === "Pending Requests") {
      item.count = pendingReq.length;
    }
    return item;
  });

  let scheduledReq = props.allRequest.filter((item) => {
    return item.status === "scheduled";
  });

  items.map((item) => {
    if (item.title === "Scheduled Request") {
      item.count = scheduledReq.length;
    }
    return item;
  });

  let completedReq = props.allRequest.filter((item) => {
    return item.status === "completed";
  });

  items.map((item) => {
    if (item.title === "Total Completed") {
      item.count = completedReq.length;
    }
    return item;
  });

  return (
    <>
      <div className="home_container">
        {items.map((item, index) => (
          <div key={index}>
            <StatusCard
              icon={item.icon}
              count={item.count}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default HelperHome;
