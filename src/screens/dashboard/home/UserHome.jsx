import React from "react";
import StatusCard from "./components/status-card/StatusCard";
import "./home.css";

let items = [
  {
    icon: "bx bx-user-pin",
    count: "12",
    title: "Accepted Request",
  },
  {
    icon: "bx bx-time",
    count: "1",
    title: "Scheduled Request",
  },
  {
    icon: "bx bx-task",
    count: "64",
    title: "Previous Services",
  },
];

const UserHome = ({ props }) => {
  let pendingReq = props.allRequest.filter((item) => {
    return item.status === "accepted";
  });

  items.map((item) => {
    if (item.title === "Accepted Request") {
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
    if (item.title === "Previous Services") {
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

export default UserHome;
