import { createSlice } from "@reduxjs/toolkit";
import {
  addNewHelperService,
  getHelpersDetails,
} from "../../services/helperService";
import { wait } from "../helper";

const helperSlice = createSlice({
  name: "helper",
  initialState: {
    allServices: [],
    allRequest: [],
    loading: true,
    // allServices: [
    //   {
    //     id: 1,
    //     helper_id: "1",
    //     service_id: "2",
    //     service_name: "Food Delivery",
    //     address: "Paschim Vihar, New Delhi",
    //     avg_charges: 500.0,
    //     additional_deatils: "",
    //   },
    //   {
    //     id: 3,
    //     helper_id: "1",
    //     service_id: "3",
    //     service_name: "Tuition",
    //     address: "Paschim Vihar, New Delhi",
    //     avg_charges: 500.0,
    //     additional_deatils: "",
    //   },
    //   {
    //     id: 4,
    //     helper_id: "1",
    //     service_id: "7",
    //     service_name: "Laundry",
    //     address: "Paschim Vihar, New Delhi",
    //     avg_charges: 500.0,
    //     additional_deatils: "",
    //   },
    //   {
    //     id: 10,
    //     helper_id: "1",
    //     service_id: "8",
    //     service_name: "Cook",
    //     address: "Paschim Vihar, New Delhi",
    //     avg_charges: 500.0,
    //     additional_deatils: "",
    //   },
    // ],
    // allRequest: [
    //   {
    //     status: "pending",
    //     id: 1,
    //     helper_id: 1,
    //     service_id: 2,
    //     service_name: "Food Delivery",
    //     user_id: 1,
    //     user_name: "John",
    //     user_mobile: "9958936359",
    //     user_address: "Paschim Vihar, New Delhi",
    //     request_timeslot: "Sep 12, 2021 - 12:00 PM",
    //   },
    //   {
    //     status: "pending",
    //     id: 2,
    //     helper_id: 1,
    //     service_id: 3,
    //     service_name: "Electrician",
    //     user_id: 10,
    //     user_name: "Johnny",
    //     user_mobile: "9958936359",
    //     user_address: "Paschim Vihar, New Delhi",
    //     request_timeslot: "Sep 12, 2021 - 12:00 PM",
    //   },
    //   {
    //     status: "scheduled",
    //     id: 3,
    //     helper_id: 1,
    //     service_id: 3,
    //     service_name: "Electrician",
    //     user_id: 10,
    //     user_name: "Johnny",
    //     user_mobile: "9958936359",
    //     user_address: "Paschim Vihar, New Delhi",
    //     request_timeslot: "Sep 12, 2021 - 12:00 PM",
    //   },
    //   {
    //     status: "completed",
    //     id: 4,
    //     helper_id: 1,
    //     service_id: 3,
    //     service_name: "Electrician",
    //     user_id: 10,
    //     user_name: "Johnny",
    //     user_mobile: "9958936359",
    //     user_address: "Paschim Vihar, New Delhi",
    //     request_timeslot: "Sep 12, 2020 - 12:00 PM",
    //   },
    // ],
  },

  reducers: {
    UPDATE_HELPER_DETAILS(state, action) {
      // console.log(action.payload);
      // state = action.payload;
      state.allServices = action.payload.allServices;
      state.allRequest = action.payload.allRequest;
      state.loading = false;
    },
  },
});

export const getHelpersDetailsAPI = (helper_id) => {
  console.log(helper_id);
  return async (dispatch) => {
    const getDetails = async () => {
      await wait(2000);
      const res = await getHelpersDetails(helper_id);
      return res;
    };
    const res = await getDetails();
    console.log(res);
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

export const addNewHelperServiceAPI = (formData) => {
  return async () => {
    const addService = async () => {
      const res = await addNewHelperService(formData);
      return res;
    };
    const res = await addService();
    console.log(res);
  };
};

export const helperActions = helperSlice.actions;

export default helperSlice;
