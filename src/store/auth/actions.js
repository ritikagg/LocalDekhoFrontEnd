import { createAction } from "@reduxjs/toolkit";
import {
  LoginOtpGenaration,
  LoginOtpVerification,
} from "../../services/authentication/index";
import { apiHandler, wait } from "../helper";

export const actions = {
  LOGOUT: "LOGOUT",
  SEND_OTP: "SEND_OTP",
  VERIFY_OTP: "VERIFY_OTP",
};

// prop - { type, handler, errorHandler? }

export const sendOtpRequest = (mobile) => {
  return apiHandler({
    action: "auth/" + actions.SEND_OTP,
    handler: async () => {
      await wait(1000);
      const res = LoginOtpGenaration(mobile);
      return res;
    },
    // handler: () => LoginOtpGenaration(mobile),
  });
};

export const verifyOtpRequest = (mobile, hashedToken, otp, isUser) => {
  return apiHandler({
    action: "auth/" + actions.VERIFY_OTP,
    handler: () => LoginOtpVerification(mobile, hashedToken, otp, isUser),
    // handler: () => ({
    //   token: "wfef",
    //   isUser: isUser,
    //   mobile: mobile,
    //   userData: {
    //     user_id: 1,
    //     helper_id: 1,
    //   },
    // }), //LoginOtpVerification(mobile, hashedToken, otp),
  });
};

export const logout = createAction("auth/" + actions.LOGOUT);
