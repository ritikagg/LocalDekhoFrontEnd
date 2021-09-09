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

function UserHome({ props }) {
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
}

export default UserHome;
