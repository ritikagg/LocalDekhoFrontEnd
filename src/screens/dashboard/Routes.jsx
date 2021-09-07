import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import AcceptedRequest from "./user-accepted/AcceptedRequest";
import AllServices from "./helper-all-services/AllServices";
import useAuth from "../../hooks/useAuth";
import { useSelector } from "react-redux";
import PendingRequest from "./helper-pending-req/PendingRequest";
import ScheduledService from "./helper-scheduled/ScheduledService";
import CompletedRequest from "./helper-completed/CompletedRequest";

const Routes = () => {
  const { isUser } = useAuth();
  const HelperDetails = useSelector((state) => state.helper);

  return (
    <Switch>
      <Route
        path="/dashboard"
        exact
        render={() => <Home props={isUser ? HelperDetails : HelperDetails} />}
      />
      {isUser && (
        <Route
          path="/dashboard/accepted"
          exact
          render={(props) => <AcceptedRequest {...props} />}
        />
      )}
      {!isUser && (
        <>
          <Route
            path="/dashboard/allservices"
            exact
            render={() => <AllServices props={HelperDetails.allServices} />}
          />
          <Route
            path="/dashboard/rq/pending"
            exact
            render={() => (
              <PendingRequest
                props={HelperDetails.allRequest.filter((item) => {
                  return item.status === "pending";
                })}
              />
            )}
          />
          <Route
            path="/dashboard/services/scheduled"
            exact
            render={() => (
              <ScheduledService
                props={HelperDetails.allRequest.filter((item) => {
                  return item.status === "scheduled";
                })}
              />
            )}
          />
          <Route
            path="/dashboard/completed"
            exact
            render={() => (
              <CompletedRequest
                props={HelperDetails.allRequest.filter((item) => {
                  return item.status === "completed";
                })}
              />
            )}
          />
        </>
        // <Route path="/dashboard/allservices" exact component={AllServices} />
      )}
      <Route
        render={() => <h3>Confidential Place. You are not allowed here!</h3>}
      />
    </Switch>
  );
};

export default Routes;
