import React, { useEffect, useState } from "react";
import "./login.css";
import Otp from "./Otp";
import { Button, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { sendOtpRequest } from "../../store/auth/actions";
import useAuth from "../../hooks/useAuth";
import { Redirect } from "react-router-dom";

import User from "../../assets/flaticon/user.svg";
import Helper from "../../assets/flaticon/helper.svg";

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth } = useAuth();
  const auth = useSelector((state) => state.auth);
  //   console.log(auth);

  const [mobile, setMobile] = useState(auth.mobile);
  const [isRequested, setIsRequested] = useState(false);

  useEffect(() => {
    if (auth.hashedToken) {
      setIsRequested(true);
    }
  }, [auth.hashedToken]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(sendOtpRequest(mobile));
  };

  const handleChange = (e) => {
    setMobile(e.target.value);
  };

  const [isUser, setIsUser] = useState(true);

  const onChange = (e) => {
    setIsUser(e.target.value);
  };

  if (isAuth) return <Redirect to="/dashboard" />;

  const form = (
    <div className="login_body">
      <div className="login__root">
        <div className="title-group__header">LOGIN AS</div>
        <Radio.Group onChange={onChange} value={isUser}>
          <div className="input-group__user">
            <div className="input-group__user_catrgory">
              <div className="input-group__user_radio">
                <img src={User} style={{ height: "64px" }} alt="User" />
                <Radio value={true}></Radio>
              </div>
              <div className="input-group__user_head">USER</div>
              <div className="input-group__user_desc">I want to avail</div>
              <div className="input-group__user_desc">service</div>
            </div>
            <div className="input-group__user_catrgory">
              <div className="input-group__user_radio">
                <img src={Helper} style={{ height: "64px" }} alt="helper" />
                <Radio value={false}></Radio>
              </div>
              <div className="input-group__user_head">HELPER</div>
              <div className="input-group__user_desc">I want to list</div>
              <div className="input-group__user_desc">service</div>
            </div>
          </div>
        </Radio.Group>
        <form className="form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              value={mobile}
              type="tel"
              name="mobile"
              placeholder="9306871479"
              size="10"
              pattern="^(?:\(\d{3}\)|\d{3})[- ]?\d{3}[- ]?\d{4}$"
              onChange={handleChange}
              required
            />
            <div className="button__head">
              <Button
                onClick={handleSubmit}
                loading={auth.loading}
                type="primary"
              >
                Request OTP
              </Button>
            </div>
          </div>
        </form>
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
