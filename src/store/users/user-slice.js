import { createSlice } from "@reduxjs/toolkit";
import {
  getUserDetails,
  updateServiceStatus,
  requestNewService,
} from "../../services/userService";
import { wait } from "../helper";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: true,
    allRequest: [],
    updateStatusLoading: true,
  },

  reducers: {
    UPDATE_USER_DETAILS(state, action) {
      state.allRequest = action.payload.allRequest;
      state.loading = false;
    },
    UPDATE_SERVICE_STATUS(state, action) {
      state.updateStatusLoading = false;
    },
  },
});

export const getUsersDetailsAPI = (user_id) => {
  return async (dispatch) => {
    const getDetails = async () => {
      await wait(1000);
      const res = await getUserDetails(user_id);
      return res;
    };
    const res = await getDetails();
    if (res.success) {
      dispatch(
        userActions.UPDATE_USER_DETAILS({
          allRequest: res.allrequests,
        })
      );
    }
  };
};

export const updateRequestStatusAPI = (id, action, service_id, user_id) => {
  return async (dispatch) => {
    const updateStatus = async () => {
      const res = await updateServiceStatus(id, action, service_id, user_id);
      return res;
    };
    const res = await updateStatus();
    if (res.data.success) {
      dispatch(userActions.UPDATE_SERVICE_STATUS);
    }
  };
};

export const requestNewServiceAPI = (
  user_id,
  service_id,
  user_name,
  location,
  postal_code
) => {
  return async (dispatch) => {
    const requestService = async () => {
      const res = await requestNewService(
        user_id,
        service_id,
        user_name,
        location,
        postal_code
      );
      return res;
    };
    const res = await requestService();
    if (res.data.success) {
      dispatch(userActions.UPDATE_SERVICE_STATUS);
    }
  };
};

export const userActions = userSlice.actions;

export default userSlice;
