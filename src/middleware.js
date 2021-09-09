import axios from "axios";

export const SendLoginOtpSMS = async (mobile) => {
  try {
    const uri = "http://localhost:5000";
    const response = await axios.get(uri + `/sendOTP`, {
      params: {
        mobile: mobile,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const VerifyLoginOtp = async (mobile, hashedToken, otp) => {
  try {
    const uri = "http://localhost:5000";
    const response = await axios.post(uri + `/verifyOTP`, {
      mobile: mobile,
      hash: hashedToken,
      otp: otp,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
