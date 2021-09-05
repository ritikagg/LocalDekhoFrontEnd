import { createAction } from "@reduxjs/toolkit";
import {
  LoginOtpGenaration,
  LoginOtpVerification,
} from "../../services/authentication/index";
import { apiHandler } from "../helper";

export const actions = {
  LOGOUT: "LOGOUT",
  SEND_OTP: "SEND_OTP",
  VERIFY_OTP: "VERIFY_OTP",
};

// prop - { type, handler, errorHandler? }

export const sendOtpRequest = (mobile) => {
  return apiHandler({
    action: "auth/" + actions.SEND_OTP,
    // handler: async () => {
    //   await wait(500);
    //   const res = LoginOtpGenaration(mobile);
    //   return res;
    // },
    handler: () => LoginOtpGenaration(mobile),
  });
};

export const verifyOtpRequest = (mobile, hashedToken, otp, isUser) => {
  return apiHandler({
    action: "auth/" + actions.VERIFY_OTP,
    handler: () => LoginOtpVerification(mobile, hashedToken, otp, isUser),
    // handler: () => ({
    //   token: hashedToken,
    //   isUser: isUser,
    //   mobile: mobile,
    // }), //LoginOtpVerification(mobile, hashedToken, otp),
  });
};

export const logout = createAction("auth/" + actions.LOGOUT);
