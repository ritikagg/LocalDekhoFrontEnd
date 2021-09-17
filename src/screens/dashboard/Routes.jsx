import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./home/Home";
import useAuth from "../../hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";

import AcceptedRequest from "./user-screens/user-accepted/AcceptedRequest";
import ScheduledRequest from "./user-screens/user-scheduled/ScheduledRequest";
import SpecificAccepted from "./user-screens/user-accepted/SpecificAccepted";
import CompletedService from "./user-screens/user-previous/CompletedService";

import AllServices from "./helper-screens/helper-all-services/AllServices";
import PendingRequest from "./helper-screens/helper-pending-req/PendingRequest";
import ScheduledService from "./helper-screens/helper-scheduled/ScheduledService";
import CompletedRequest from "./helper-screens/helper-completed/CompletedRequest";

import { getHelpersDetailsAPI } from "../../store/helpers/helpers-slice";
import {
  getUsersDetailsAPI,
  requestNewServiceAPI,
} from "../../store/users/user-slice";

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
  const [interval, setInterval] = useState(false);
  const reqService = useSelector((state) => state.reqService);

  useEffect(() => {
    if (reqService.requestedService !== undefined) {
      dispatch(
        requestNewServiceAPI(
          user_id,
          reqService.service_id,
          reqService.name,
          reqService.location,
          reqService.postal_code
        )
      );
    }
  }, [dispatch, reqService, user_id]);

  useEffect(() => {
    if (!isUser) {
      dispatch(getHelpersDetailsAPI(helper_id));
    }
  }, [dispatch, helper_id, isUser]);

  useEffect(() => {
    if (isUser) {
      dispatch(getUsersDetailsAPI(user_id));
    }
  }, [dispatch, user_id, isUser]);

  //Long poling after every 3 sec

  useEffect(() => {
    if (!isUser) {
      const timeout = setTimeout(() => {
        setInterval(true);
        dispatch(getHelpersDetailsAPI(helper_id));
      }, 3000);
      return () => {
        clearTimeout(timeout);
        setInterval(false);
      };
    }

    if (isUser) {
      const timeout = setTimeout(() => {
        setInterval(true);
        dispatch(getUsersDetailsAPI(user_id));
      }, 3000);
      return () => {
        clearTimeout(timeout);
        setInterval(false);
      };
    }
    // }, [dispatch, helper_id, isUser, user_id]);
  }, [dispatch, helper_id, isUser, interval, user_id]);

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
                component={AcceptedRequest}
              />
              <Route
                path="/dashboard/accepted/:cat"
                exact
                component={SpecificAccepted}
              />
              <Route
                path="/dashboard/scheduled"
                exact
                component={ScheduledRequest}
              />
              <Route
                path="/dashboard/previous"
                exact
                component={CompletedService}
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
                      return (
                        item.status === "helper_accepted" ||
                        item.status === "pending"
                      );
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
