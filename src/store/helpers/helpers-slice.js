import { createSlice } from "@reduxjs/toolkit";
// import { notification } from "antd";

const helperSlice = createSlice({
  name: "helper",
  initialState: {
    allServices: [
      {
        id: 1,
        helper_id: "1",
        service_id: "2",
        service_name: "Food Delivery",
        address: "Paschim Vihar, New Delhi",
        avg_charges: 500.0,
        additional_deatils: "",
      },
      {
        id: 3,
        helper_id: "1",
        service_id: "3",
        service_name: "Tuition",
        address: "Paschim Vihar, New Delhi",
        avg_charges: 500.0,
        additional_deatils: "",
      },
      {
        id: 4,
        helper_id: "1",
        service_id: "7",
        service_name: "Laundry",
        address: "Paschim Vihar, New Delhi",
        avg_charges: 500.0,
        additional_deatils: "",
      },
      {
        id: 10,
        helper_id: "1",
        service_id: "8",
        service_name: "Cook",
        address: "Paschim Vihar, New Delhi",
        avg_charges: 500.0,
        additional_deatils: "",
      },
    ],
    allRequest: [
      {
        status: "pending",
        id: 1,
        helper_id: 1,
        service_id: 2,
        service_name: "Food Delivery",
        user_id: 1,
        user_name: "John",
        user_mobile: "9958936359",
        user_address: "Paschim Vihar, New Delhi",
        request_timeslot: "Sep 12, 2021 - 12:00 PM",
      },
      {
        status: "pending",
        id: 2,
        helper_id: 1,
        service_id: 3,
        service_name: "Electrician",
        user_id: 10,
        user_name: "Johnny",
        user_mobile: "9958936359",
        user_address: "Paschim Vihar, New Delhi",
        request_timeslot: "Sep 12, 2021 - 12:00 PM",
      },
      {
        status: "scheduled",
        id: 3,
        helper_id: 1,
        service_id: 3,
        service_name: "Electrician",
        user_id: 10,
        user_name: "Johnny",
        user_mobile: "9958936359",
        user_address: "Paschim Vihar, New Delhi",
        request_timeslot: "Sep 12, 2021 - 12:00 PM",
      },
      {
        status: "completed",
        id: 4,
        helper_id: 1,
        service_id: 3,
        service_name: "Electrician",
        user_id: 10,
        user_name: "Johnny",
        user_mobile: "9958936359",
        user_address: "Paschim Vihar, New Delhi",
        request_timeslot: "Sep 12, 2020 - 12:00 PM",
      },
    ],
  },

  reducers: {
    // [actions.LOGOUT]: (state) => {
    //   Authenticator.removeToken();
    //   state.isAuth = false;
    //   state.mobile = "";
    //   state.hashedToken = "";
    //   state.isUser = null;
    // },
    // [actionRequest(actions.SEND_OTP)]: (state, action) => {
    //   state.loading = true;
    //   state.hashedToken = "";
    // },
    // [actionSuccess(actions.SEND_OTP)]: (state, action) => {
    //   state.hashedToken = action.payload.hash;
    //   state.mobile = action.payload.mobile;
    //   state.loading = false;
    // },
    // [actionFailed(actions.SEND_OTP)]: (state, action) => {
    //   state.loading = false;
    //   notification.error({ message: "Error in sending OTP!" });
    // },
    // [actionSuccess(actions.VERIFY_OTP)]: (state, action) => {
    //   state.isAuth = true;
    //   // state.hashedToken = action.payload.token;
    //   // state.mobile = action.payload.mobile;
    //   // state.isUser = action.payload.isUser;
    //   // state.profile = action.payload.profile;
    //   Authenticator.setToken(action.payload.token);
    //   Authenticator.setMobile(action.payload.mobile);
    //   Authenticator.setIsUser(action.payload.isUser);
    //   HelperProfile.setHelperId(action.payload.userData.helper_id);
    // },
  },
});

export const helperActions = helperSlice.actions;

export default helperSlice;
