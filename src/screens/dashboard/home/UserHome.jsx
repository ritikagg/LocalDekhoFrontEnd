import React from "react";
import StatusCard from "./components/status-card/StatusCard";
import "./home.css";

function UserHome() {
  return (
    <>
      <div className="home_container">
        <div className="home_col-6">
          <StatusCard
            icon="bx bx-user-pin"
            count="12"
            title="Accepted Request"
          />
        </div>
        <div className="home_col-6">
          <StatusCard icon="bx bx-task" count="8" title="Previous Services" />
        </div>
      </div>
    </>
  );
}

export default UserHome;
