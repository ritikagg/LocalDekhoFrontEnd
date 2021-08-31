import React from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { Form, Input, Button, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { reqServiceActions } from "../../store/reqService/reqService-slice";
import { Redirect } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

const RequestForm = () => {
  const ServiceDetails = useSelector((state) => state.reqService);

  const dispatch = useDispatch();

  const { isAuth } = useAuth();

  const submitHandler = (values) => {
    dispatch(
      reqServiceActions.UPDATE_DETAILS({
        ...ServiceDetails,
        location: values.location,
        datetimeSlot: values.datetimeSlot,
        requestedService: ServiceDetails.requestedService,
      })
    );
    if (isAuth) return <Redirect to="/dashboard" />;
  };

  // const ServiceDetails = useSelector((state) => state.reqService);

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

  return (
    <>
      <h2>Request Details</h2>
      <h3>Hello, Help us with more deatils to serve you</h3>
      <Form name="basic" onFinish={submitHandler}>
        <Form.Item label="Service Category">
          <Input value={ServiceDetails.requestedService} disabled />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              message: "Please input your location for service!",
            },
          ]}
        >
          <Input placeholder="input placeholder" />
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
        >
          <DatePicker
            format="YYYY-MM-DD HH:mm:ss"
            disabledDate={disabledDate}
            disabledTime={disabledDateTime}
            showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" onClick={submitHandler}>
            Request for Service
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RequestForm;
