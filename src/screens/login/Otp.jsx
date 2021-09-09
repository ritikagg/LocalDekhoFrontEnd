import React, { useState } from "react";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtpRequest } from "../../store/auth/actions";
import "./login.less";
import { Form, Input, Button } from "antd";

const Otp = ({ mobile, onBack, isUser }) => {
  console.log(isUser);
  // const [otp, setOtp] = useState("");
  const hashedToken = useSelector((state) => state.auth.hashedToken);
  const dispatch = useDispatch();

  const handleSubmit = (value) => {
    dispatch(verifyOtpRequest(mobile, hashedToken, value.otp, isUser));
    // setIsRequested(true);
  };

  return (
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
      <Form name="basic" onFinish={handleSubmit} layout="vertical">
        <Form.Item
          name="otp"
          rules={[
            {
              required: true,
              message: "Please enter your OTP code!",
            },
            {
              pattern: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,
              message: "Please enter valid OTP code",
            },
            {
              len: 6,
              message: "OTP code must be of 6 digits",
            },
          ]}
          className="label"
        >
          <Input className="input" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="submitbutton"
            // onClick={handleSubmit}
            // loading={auth.loading}
          >
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Otp;
