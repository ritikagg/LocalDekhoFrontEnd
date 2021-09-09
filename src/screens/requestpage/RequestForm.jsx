import React, { useState, useEffect } from "react";
import moment from "moment";
import { Form, Input, Button, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { reqServiceActions } from "../../store/reqService/reqService-slice";
import { Redirect } from "react-router-dom";
import "antd/dist/antd.css";
import "./requestform.less";

const RequestForm = () => {
  const ServiceDetails = useSelector((state) => state.reqService);
  const [location, setLocation] = useState("");
  const [redirect, setRedirect] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(ServiceDetails.location);
    setLocation(ServiceDetails.location);
  }, []);

  const submitHandler = (values) => {
    dispatch(
      reqServiceActions.UPDATE_DETAILS({
        ...ServiceDetails,
        location: location,
        datetimeSlot: moment(values.datetimeSlot).format(),
        requestedService: ServiceDetails.requestedService,
      })
    );
    setRedirect(true);
  };

  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  function disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  }

  function disabledDateTime() {
    return {
      disabledHours: () => range(0, 24).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }

  const addressChangeHandle = (e) => {
    setLocation(e.target.value);
  };

  const form = (
    <>
      <div className="reqForm__header">
        <div className="title">Request Details</div>
        <div className="description">
          Hello, Help us with more deatils to serve you
        </div>
      </div>
      <Form
        name="basic"
        onFinish={submitHandler}
        layout="vertical"
        className="requestService__form_container"
      >
        <div className="flex">
          <div className="flexbox_inner">
            <Form.Item className="label" label="Service Category">
              <Input
                value={ServiceDetails.requestedService}
                disabled
                className="input"
              />
            </Form.Item>
          </div>
          <div className="flexbox_inner">
            <Form.Item
              label="Mobile"
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
              <Input value={ServiceDetails.mobile} className="input" />
            </Form.Item>
          </div>
        </div>
        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: "Please input your location for service!",
            },
          ]}
          className="label"
        >
          <Input
            value={location}
            onChange={addressChangeHandle}
            className="input"
          />
        </Form.Item>

        <Form.Item
          label="Date and Time Slot"
          name="datetimeSlot"
          rules={[
            {
              required: true,
              message: "Please input your datetime slot for service!",
            },
          ]}
          className="label"
        >
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDate}
            disabledTime={disabledDateTime}
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
            className="input"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submitbutton">
            REQUEST
          </Button>
        </Form.Item>
      </Form>
    </>
  );

  return <>{!redirect ? form : <Redirect to="/dashboard/accepted" />}</>;
};

export default RequestForm;
