import React from "react";
import { Form, Input, Button } from "antd";
// import { useForm } from "react-hook-form";

const AddServiceForm = (props) => {
  const submitHandler = () => {
    props.onClose();
  };
  return (
    <>
      <h2>New Service Details</h2>
      <h3>Hello, Help us with more deatils to onboard you</h3>
      <Form>
        <Form.Item label="Service Category"></Form.Item>
        <Input placeholder="input placeholder" />
        <Form.Item label="Service Type"></Form.Item>
        <Input placeholder="input placeholder" />
        <Form.Item label="Location"></Form.Item>
        <Input placeholder="input placeholder" />
        <Form.Item label="Charges"></Form.Item>
        <Input placeholder="input placeholder" />
        <Form.Item label="Additional Details"></Form.Item>
        <Input placeholder="input placeholder" />
        <Button type="primary" onClick={submitHandler}>
          Submit
        </Button>
        <Button type="primary">Clear</Button>
      </Form>
    </>
  );
};

export default AddServiceForm;
