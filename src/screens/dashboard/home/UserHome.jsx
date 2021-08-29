import React from "react";
import StatusCard from "./components/status-card/StatusCard";

function UserHome() {
  return (
    <>
      <h2 className="page-header">Dashboard</h2>
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-6">
              <StatusCard
                icon="bx bx-user-pin"
                count="12"
                title="Accepted Request"
              />
            </div>
            <div className="col-6">
              <StatusCard
                icon="bx bx-task"
                count="8"
                title="Previous Services"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHome;
