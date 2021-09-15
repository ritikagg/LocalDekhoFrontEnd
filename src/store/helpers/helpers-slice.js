import { createSlice } from "@reduxjs/toolkit";
import {
  addNewHelperService,
  getHelpersDetails,
  updateServiceStatus,
  editHelperService,
} from "../../services/helperService";

const helperSlice = createSlice({
  name: "helper",
  initialState: {
    allServices: [],
    allRequest: [],
    loading: true,
    addserviceloading: true,
    updateStatusLoading: true,
  },

  reducers: {
    UPDATE_HELPER_DETAILS(state, action) {
      state.allServices = action.payload.allServices;
      state.allRequest = action.payload.allRequest;
      state.loading = false;
    },

    UPDATE_ADD_SERVICE(state, action) {
      state.addserviceloading = false;
    },

    UPDATE_SERVICE_STATUS(state, action) {
      state.updateStatusLoading = false;
    },
  },
});

export const getHelpersDetailsAPI = (helper_id) => {
  return async (dispatch) => {
    const getDetails = async () => {
      // await wait(2000);
      const res = await getHelpersDetails(helper_id);
      return res;
    };
    const res = await getDetails();
    if (res.success) {
      dispatch(
        helperActions.UPDATE_HELPER_DETAILS({
          allServices: res.allservices,
          allRequest: res.allrequests,
        })
      );
    }
  };
};

export const addNewHelperServiceAPI = (data, name) => {
  return async (dispatch) => {
    const addService = async () => {
      const res = await addNewHelperService(data, name);
      return res;
    };
    const res = await addService();
    if (res.data.success) {
      dispatch(helperActions.UPDATE_ADD_SERVICE);
    }
  };
};

export const editHelperServiceAPI = (data, helper_id, service_id) => {
  return async (dispatch) => {
    const editService = async () => {
      const res = await editHelperService(data, helper_id, service_id);
      return res;
    };
    const res = await editService();
    if (res.data.success) {
      dispatch(helperActions.UPDATE_ADD_SERVICE);
    }
  };
};

export const updateRequestStatusAPI = (id, action) => {
  return async (dispatch) => {
    const updateStatus = async () => {
      const res = await updateServiceStatus(id, action);
      return res;
    };
    const res = await updateStatus();
    if (res.data.success) {
      dispatch(helperActions.UPDATE_SERVICE_STATUS);
    }
  };
};

export const helperActions = helperSlice.actions;

export default helperSlice;
