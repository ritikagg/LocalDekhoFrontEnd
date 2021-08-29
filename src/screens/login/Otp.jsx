import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtpRequest } from "../../store/auth/actions";
import "./login.css";
import { Button } from "antd";

const Otp = ({ mobile, onBack, isUser }) => {
  const [otp, setOtp] = useState("");
  const hashedToken = useSelector((state) => state.auth.hashedToken);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setOtp(e.target.value);
  };
  const handleSubmit = (event) => {
    dispatch(verifyOtpRequest(mobile, hashedToken, otp, isUser));
    // setIsRequested(true);
  };

  return (
    <div className="login_body">
      <div className="login__root">
        <div className="title-group__header">OTP</div>
        <div className="title-group_otp_header">Verification Code</div>
        <div className="title-group_otp_info">
          We have sent the code verification to
        </div>
        <div className="edit-button">
          <div className="title-group_mobile">{mobile}</div>
          <div onClick={onBack}>
            <EditIcon />
          </div>
        </div>
        <form className="form">
          <div className="input-group">
            <input
              value={otp}
              type="tel"
              name="otp"
              size="6"
              onChange={handleChange}
              required
              // ref={enteredOtp}
            />

            <div className="button__head">
              <Button onClick={handleSubmit} type="primary">
                Submit
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Otp;
