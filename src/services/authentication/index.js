import axios from "axios";

// const domainURL = `https://dry-dusk-06044.herokuapp.com`;
const domainURL = `https://localdekhobackend.herokuapp.com`;
// const domainURL = `http://localhost:5000`;

export const LoginOtpGenaration = async (mobile) => {
  try {
    const uri = domainURL;
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

export const LoginOtpVerification = async (
  mobile,
  hashedToken,
  otp,
  isUser
) => {
  try {
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
    return response.data;
  } catch (error) {
    throw error;
  }
};
