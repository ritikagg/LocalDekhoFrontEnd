import React from "react";
import { Form, Input, Button, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { HelperProfile } from "../../../../../util/helperUtil";
import { editHelperServiceAPI } from "../../../../../store/helpers/helpers-slice";
import AllAvailableServices from "../../../../../assets/JsonData/available-services.json";

const EditServiceForm = ({ onClose, props }) => {
  const dispatch = useDispatch();
  const helper_id = HelperProfile.getHelperId();
  const mobile = useSelector((state) => state.auth.mobile);

  const submitHandler = (values) => {
    const data = {
      formData: {
        address: values.location,
        average_charges: values.charges,
        additional_details: "",
      },
    };

    const serviceIdObj = AllAvailableServices.filter(
      (e) => e.ServiceName === values.category
    );

    const service_id = serviceIdObj[0].id;

    dispatch(editHelperServiceAPI(data, helper_id, service_id));

    onClose();
    const key = "updatable";

    message.loading({ content: "Hold tight...", key });
    setTimeout(() => {
      message.success({ content: "Service Updated!!", key, duration: 3 });
    }, 3000);
  };

  return (
    <>
      <Form
        className="addservice__form_container"
        layout="vertical"
        initialValues={{
          mobile: props.mobile,
          location: props.location,
          charges: Number(props.charges),
          category: props.service_name,
        }}
        onFinish={submitHandler}
      >
        <div className="addservice-container">
          <div className="addservice-container__items">
            <Form.Item
              label="Service Catogory"
              name="category"
              className="addservice-form__label"
            >
              <Input className="input" disabled />
            </Form.Item>
          </div>

          <div>
            <Form.Item
              label="Mobile Number"
              name="mobile"
              className="addservice-form__label"
            >
              <Input
                className="addservice_header__input"
                value={mobile}
                disabled
              />
            </Form.Item>
          </div>
        </div>

        {/* <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name!",
            },
          ]}
          className="label"
        >
          <Input
            // onChange={nameChangeHandler}
            className="input"
          />
        </Form.Item> */}

        <Form.Item
          label="Working Location"
          name="location"
          rules={[
            {
              required: true,
              message: "Please input your Working Location!",
            },
          ]}
          className="label"
        >
          <Input
            // onChange={addressChangeHandler}
            className="input"
          />
          {/* <button className="addservice__search__location" onClick={onLocation}>
            <i className="bx bx-map "></i>
          </button> */}
        </Form.Item>

        <Form.Item
          label="Average Charges"
          name="charges"
          rules={[
            {
              required: true,
              message: "Please input your Average Charges!",
            },
            {
              pattern: /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/,
              message: "Please enter valid charges",
            },
            {
              max: 4,
              message: "Charges must not be greater then 9999",
            },
          ]}
          className="label"
        >
          <Input name="charges" className="input" />
        </Form.Item>

        <Form.Item
          label="Additional Details"
          name="addDetails"
          className="label"
        >
          <Input
            // onChange={addDeatilsChangeHandler}
            className="input"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="submitbutton">
            UPDATE SERVICE
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default EditServiceForm;
