// import { SendLoginOtpSMS, VerifyLoginOtp } from "../../middleware";
import axios from "axios";

export const LoginOtpGenaration = async (mobile) => {
  try {
    const uri = "http://localhost:5000";
    const response = await axios.get(uri + `/sendOTP`, {
      params: {
        mobile: mobile,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const domainURL = `http://localhost:5000`;

export const LoginOtpVerification = async (
  mobile,
  hashedToken,
  otp,
  isUser
) => {
  try {
    console.log(isUser);
    let uri = "";
    if (isUser) {
      uri = domainURL + `/api/users`;
    } else {
      uri = domainURL + `/api/helpers`;
    }
    const response = await axios.post(uri + `/verifyOTP`, {
      mobile: mobile,
      hash: hashedToken,
      otp: otp,
      isUser: isUser,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
