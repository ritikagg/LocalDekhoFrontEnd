import React, { useEffect } from "react";
import { Form, Input, Button, message } from "antd";
import AllServices from "../../../../../assets/JsonData/available-services.json";
import "./addserviceform.less";
import { useSelector, useDispatch } from "react-redux";
// import { getAddressLine } from "../../../../../store/reqService/reqService-slice";
import { HelperProfile } from "../../../../../util/helperUtil";
import {
  addNewHelperServiceAPI,
  getHelpersDetailsAPI,
} from "../../../../../store/helpers/helpers-slice";
// import { message, Button } from "antd";

const AddServiceForm = (props) => {
  const dispatch = useDispatch();
  // const ServiceDetails = useSelector((state) => state.reqService);
  const helper_id = HelperProfile.getHelperId();
  const mobile = useSelector((state) => state.auth.mobile);

  const isLoading = useSelector((state) => state.addserviceloading);

  // const [formData, setFormData] = useState({
  //   helper_id: helper_id,
  //   name: "",
  //   service_id: "",
  //   contact_number: mobile,
  //   address: "",
  //   average_charges: "",
  //   additional_details: "",
  // });

  // const ServiceRef = useRef();
  // const NameRef = useRef();
  // const AddressRef = useRef();
  // const ChargesRef = useRef();
  // const AddDeatilsRef = useRef();
  // const ServiceChangeHandler = () => {
  //   setFormData({
  //     ...formData,
  //     service_id: ServiceRef.current.value,
  //   });
  // };

  // const addressChangeHandler = (e) => {
  //   setFormData({
  //     ...formData,
  //     address: e.target.value,
  //   });
  // };

  // useEffect(() => {
  //   setFormData({
  //     address: ServiceDetails.location,
  //   });
  // }, [ServiceDetails.location]);

  // const nameChangeHandler = () => {
  //   setFormData({
  //     ...formData,
  //     additional_details: AddDeatilsRef.current.state.value,
  //   });
  // };

  // const chargesChangeHandler = () => {
  //   setFormData({
  //     ...formData,
  //     average_charges: ChargesRef.current.state.value,
  //   });
  // };

  // const addDeatilsChangeHandler = () => {
  //   setFormData({
  //     ...formData,
  //     additional_details: AddDeatilsRef.current.state.value,
  //   });
  // };

  const submitHandler = (values) => {
    const data = {
      formData: {
        helper_id: helper_id,
        // name: values.name,
        service_id: values.category,
        contact_number: values.mobile,
        address: values.location,
        average_charges: values.charges,
        additional_details: values.addDetails,
      },
    };

    dispatch(addNewHelperServiceAPI(data, values.name));

    props.onClose();
    const key = "updatable";

    message.loading({ content: "Hold tight...", key });
    setTimeout(() => {
      message.success({ content: "Service Added!!", key, duration: 3 });
    }, 3000);
  };

  useEffect(() => {
    if (!isLoading) {
      dispatch(getHelpersDetailsAPI(helper_id));
    }
  }, [dispatch, helper_id, isLoading]);

  // const onLocation = () => {
  //   dispatch(getAddressLine(ServiceDetails.latitude, ServiceDetails.longitude));
  // };

  return (
    <>
      <Form
        className="addservice__form_container"
        layout="vertical"
        initialValues={{ mobile: mobile }}
        onFinish={submitHandler}
      >
        <div className="addservice-container">
          <div className="addservice-container__items">
            <Form.Item
              label="Service Catogory"
              name="category"
              className="addservice-form__label"
            >
              <select
                className="addservice-category__list_option"
                // onChange={ServiceChangeHandler}
              >
                <option value="default"> Category</option>
                {AllServices.map((service, index) => {
                  return (
                    <option value={service.id} key={index}>
                      {service.ServiceName}
                    </option>
                  );
                })}
              </select>
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

        <Form.Item
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
        </Form.Item>

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
          <Input
            // onChange={chargesChangeHandler}
            className="input"
          />
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
            ADD SERVICE
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default AddServiceForm;
