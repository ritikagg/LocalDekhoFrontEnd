import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import useAuth from "../../hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";
import AcceptedRequest from "./user-screens/user-accepted/AcceptedRequest";
import AllServices from "./helper-screens/helper-all-services/AllServices";
import PendingRequest from "./helper-screens/helper-pending-req/PendingRequest";
import ScheduledService from "./helper-screens/helper-scheduled/ScheduledService";
import CompletedRequest from "./helper-screens/helper-completed/CompletedRequest";
import { getHelpersDetailsAPI } from "../../store/helpers/helpers-slice";
import { HelperProfile } from "../../util/helperUtil";
import { UserProfile } from "../../util/userUtil";
import loader2 from "../../assets/lottie/loader2.json";
import Lottie from "react-lottie";

const Routes = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loader2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { isUser } = useAuth();
  const dispatch = useDispatch();
  const helper_id = HelperProfile.getHelperId();
  const user_id = UserProfile.getUserId();

  useEffect(() => {
    if (!isUser) {
      dispatch(getHelpersDetailsAPI(helper_id));
    }
  }, [dispatch, helper_id, isUser]);

  useEffect(() => {
    if (isUser) {
      //dispatch(getUserDetailsAPI(user_id));
    }
  }, [dispatch, helper_id, isUser]);

  let isLoading = true;
  let AllDetails = [];

  const AllHeleprsDetails = useSelector((state) => state.helper);
  const AllUsersDetails = useSelector((state) => state.user);

  if (!isUser) {
    AllDetails = AllHeleprsDetails;
  } else {
    AllDetails = AllUsersDetails;
  }

  isLoading = AllDetails.loading;
  console.log(AllDetails);

  return (
    <>
      {!isLoading && (
        <Switch>
          <Route
            path="/dashboard"
            exact
            render={() => <Home props={isUser ? AllDetails : AllDetails} />}
          />

          {isUser && (
            <>
              <Route
                path="/dashboard/accepted"
                exact
                render={() => (
                  <AcceptedRequest
                    props={AllDetails.allRequest.filter((item) => {
                      return item.status === "accepted";
                    })}
                  />
                )}
              />
              <Route
                path="/dashboard/scheduled"
                exact
                render={() => (
                  <AcceptedRequest
                    props={AllDetails.allRequest.filter((item) => {
                      return item.status === "scheduled";
                    })}
                  />
                )}
              />
              <Route
                path="/dashboard/previous"
                exact
                render={() => (
                  <AcceptedRequest
                    props={AllDetails.allRequest.filter((item) => {
                      return item.status === "completed";
                    })}
                  />
                )}
              />
            </>
          )}

          {!isUser && (
            <>
              <Route
                path="/dashboard/allservices"
                render={() => <AllServices props={AllDetails.allServices} />}
              />
              <Route
                path="/dashboard/rq/pending"
                exact
                render={() => (
                  <PendingRequest
                    props={AllDetails.allRequest.filter((item) => {
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
                    props={AllDetails.allRequest.filter((item) => {
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
                    props={AllDetails.allRequest.filter((item) => {
                      return item.status === "completed";
                    })}
                  />
                )}
              />
            </>
            // <Route path="/dashboard/allservices" exact component={AllServices} />
          )}
          <Route
            render={() => (
              <h3>Confidential Place. You are not allowed here!</h3>
            )}
          />
        </Switch>
      )}
      {isLoading && (
        <Lottie options={defaultOptions} height={400} width={400} />
      )}
    </>
  );
};

export default Routes;
