import React, { useEffect, useState } from "react";
import Otp from "./Otp";

import { useDispatch, useSelector } from "react-redux";
import { sendOtpRequest } from "../../store/auth/actions";
import useAuth from "../../hooks/useAuth";
import { Redirect, useLocation } from "react-router-dom";

import User from "../../assets/flaticon/user.svg";
import Helper from "../../assets/flaticon/helper.svg";
import "antd/dist/antd.css";

import "./login.less";
import { Form, Input, Button } from "antd";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const location = useLocation();

  const auth = useSelector((state) => state.auth);

  const [mobile, setMobile] = useState(auth.mobile);
  const [isRequested, setIsRequested] = useState(false);

  useEffect(() => {
    if (auth.hashedToken) {
      setIsRequested(true);
    }
  }, [auth.hashedToken]);

  const handleSubmit = (value) => {
    setMobile(value.mobile);
    dispatch(sendOtpRequest(mobile));
  };

  const [isUser, setIsUser] = useState(true);

  const onChange = (value) => {
    setIsUser(value);
  };

  if (isAuth)
    return (
      <Redirect
        to={{
          pathname: location.state
            ? location.state.from.pathname || "/dashboard"
            : "/dashboard",
        }}
      />
    );

  const form = (
    <div className="login__root">
      <div className="title-group__header">LOGIN AS</div>
      <div className="input-group__user">
        <div
          className={
            isUser
              ? "input-group__user_catrgory__active"
              : "input-group__user_catrgory"
          }
          onClick={() => {
            onChange(true);
          }}
        >
          <div className="input-group__user_radio">
            <img src={User} style={{ height: "64px" }} alt="User" />
          </div>
          <div className="input-group__user_head">USER</div>
          <div className="input-group__user_desc">I want to avail</div>
          <div className="input-group__user_desc">service</div>
        </div>
        <div
          className={
            isUser
              ? "input-group__user_catrgory"
              : "input-group__user_catrgory__active"
          }
          onClick={() => {
            onChange(false);
          }}
        >
          <div className="input-group__user_radio">
            <img src={Helper} style={{ height: "64px" }} alt="helper" />
          </div>
          <div className="input-group__user_head">HELPER</div>
          <div className="input-group__user_desc">I want to list</div>
          <div className="input-group__user_desc">service</div>
        </div>
      </div>
      <div className="flex">
        <Form
          name="basic"
          onFinish={handleSubmit}
          handleSubmit
          layout="vertical"
        >
          <Form.Item
            label="Mobile Number"
            name="mobile"
            rules={[
              {
                required: true,
                message: "Please input your Mobile Number!",
              },
              {
                pattern: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,
                message: "Please enter valid mobile number",
              },
              {
                len: 10,
                message: "Mobile number must be of 10 digits",
              },
            ]}
            className="label"
          >
            <Input className="input" placeholder="9306871479" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="submitbutton"
              loading={auth.loading}
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );

  return (
    <>
      {isRequested ? (
        <Otp
          onBack={() => {
            setIsRequested(false);
          }}
          mobile={mobile}
          isUser={isUser}
        />
      ) : (
        form
      )}
    </>
  );
};

export default Login;
