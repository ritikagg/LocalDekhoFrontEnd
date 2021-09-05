import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HelperProfile } from "../../../util/helperUtil";
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
  const dispatch = useDispatch();

  useEffect(() => {
    const helper_id = HelperProfile.getHelperId();
  }, [dispatch]);
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

export default HelperHome;
