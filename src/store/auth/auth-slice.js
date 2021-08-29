import { createSlice } from "@reduxjs/toolkit";
import { actions } from "./actions";
// import { LoginOtpGenaration } from "../../services/authentication/index";
import { actionFailed, actionRequest, actionSuccess } from "../helper";
import { notification } from "antd";
import { Authenticator } from "../../util/authUtil";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isUser: null,
    isAuth: Authenticator.isLoggedIn(),
    loading: false,
    hashedToken: "",
    profile: null,
    otpGenerated: undefined,
    mobile: "",
  },
  reducers: {
    [actions.LOGOUT]: (state) => {
      Authenticator.removeToken();
      state.isAuth = false;
      state.isUser = null;
    },
    [actionRequest(actions.SEND_OTP)]: (state, action) => {
      state.loading = true;
      state.hashedToken = "";
    },
    [actionSuccess(actions.SEND_OTP)]: (state, action) => {
      state.hashedToken = action.payload.hash;
      state.mobile = action.payload.mobile;
      state.loading = false;
    },
    [actionFailed(actions.SEND_OTP)]: (state, action) => {
      state.loading = false;
      notification.error({ message: "Error in sending OTP!" });
    },
    [actionSuccess(actions.VERIFY_OTP)]: (state, action) => {
      state.isAuth = true;
      state.hashedToken = "";
      state.mobile = "";
      state.isUser = action.payload.isUser;
      state.profile = action.payload.profile;
      Authenticator.setToken(action.payload.token);
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
