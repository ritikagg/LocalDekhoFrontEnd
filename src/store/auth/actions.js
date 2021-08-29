// import { createAction } from "@reduxjs/toolkit";

// export const sendOtpRequest = createAction(SEND_OTP_REQUEST);

// // export const getProfileRequest = createAction(GET_PROFILE_REQUEST);

// // export const resendOtpRequest = createAction(RESEND_OTP_REQUEST);

// export const validateAndLoginRequest = createAction(VALIDATE_AND_LOGIN_REQUEST);

// export const logOutRequest = createAction(LOGOUT_REQUEST);

import { createAction } from "@reduxjs/toolkit";
// import {
//   LoginOtpGenaration,
//   LoginOtpVerification,
// } from "../../services/authentication/index";
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
    // handler: async () => {
    //   await wait(2000);
    //   return { mobile: mobile, hash: "asaffa" };
    // }, //LoginOtpGenaration(mobile)
    handler: async () => {
      await wait(500);
      return { hash: "afas", mobile: "9560401880" }; //LoginOtpGenaration(mobile);
    },
    // handler: () => LoginOtpGenaration(mobile),
  });
};

export const verifyOtpRequest = (mobile, hashedToken, otp, isUser) => {
  return apiHandler({
    action: "auth/" + actions.VERIFY_OTP,
    handler: () => ({
      token: "faskfaskj",
      isUser,
      profile: {
        name: "Ritik Aggarwal",
        phone: "9560401880",
      },
    }), //LoginOtpVerification(mobile, hashedToken, otp),
  });
};

export const logout = createAction("auth/" + actions.LOGOUT);
