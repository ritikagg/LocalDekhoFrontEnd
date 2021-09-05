import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import AcceptedRequest from "./user-accepted/AcceptedRequest";
import AllServices from "./helper-all-services/AllServices";
import useAuth from "../../hooks/useAuth";
import { useDispatch, useSelector } from "react-redux";
import { HelperProfile } from "../../util/helperUtil";

const Routes = () => {
  const { isUser } = useAuth();
  const dispatch = useDispatch();
  const HelperDetails = useSelector((state) => state.helper);

  useEffect(() => {
    const helper_id = HelperProfile.getHelperId();
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/dashboard" exact component={Home} />
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
              <AllServices
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
              <AllServices
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
              <AllServices
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
