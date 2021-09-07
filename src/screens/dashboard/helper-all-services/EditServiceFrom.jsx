import React, { useState, useRef } from "react";
import { Form, Input, Button } from "antd";
import AllServices from "../../../assets/JsonData/available-services.json";
import "./addserviceform.css";
import { useSelector, useDispatch } from "react-redux";
import { getAddressLine } from "../../../store/reqService/reqService-slice";
import { HelperProfile } from "../../../util/helperUtil";
import { addNewHelperServiceAPI } from "../../../store/helpers/helpers-slice";

const EditServiceForm = ({ onClose, props }) => {
  const dispatch = useDispatch();
  const ServiceDetails = useSelector((state) => state.reqService);
  const helper_id = HelperProfile.getHelperId();
  const mobile = useSelector((state) => state.auth.mobile);

  console.log(props);
  const [formData, setFormData] = useState({
    helper_id: helper_id,
    service_id: "",
    contact_number: mobile,
    address: props.address,
    average_charges: props.charges,
    additional_details: "",
  });

  const ServiceRef = useRef();
  const AddressRef = useRef();
  const ChargesRef = useRef();
  const AddDeatilsRef = useRef();
  const ServiceChangeHandler = () => {
    setFormData({
      ...formData,
      service_id: ServiceRef.current.value,
    });
  };

  const addressChangeHandler = () => {
    setFormData({
      ...formData,
      address: AddressRef.current.state.value,
    });
  };

  const onLocation = () => {
    dispatch(getAddressLine(ServiceDetails.latitude, ServiceDetails.longitude));
  };

  const chargesChangeHandler = () => {
    setFormData({
      ...formData,
      average_charges: ChargesRef.current.state.value,
    });
  };

  const addDeatilsChangeHandler = () => {
    setFormData({
      ...formData,
      additional_details: AddDeatilsRef.current.state.value,
    });
  };

  const submitHandler = () => {
    dispatch(addNewHelperServiceAPI(formData));
    props.onClose();
  };

  return (
    <>
      <Form className="addservice__form_container">
        <div className="addservice-container">
          <div className="addservice-container__items">
            <Form.Item className="addservice-form__label">
              Service Catogory
            </Form.Item>
            <select
              className="addservice-category__list_option"
              onChange={ServiceChangeHandler}
            >
              <option value="default">
                {" "}
                {/*key="0">*/}
                Category
              </option>
              {AllServices.map((service, index) => {
                return (
                  <option value={service.id} key={index} ref={ServiceRef}>
                    {service.ServiceName}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <Form.Item className="addservice-form__label">
              Mobile Number
            </Form.Item>
            <Input
              className="addservice_header__input"
              value={mobile}
              disabled
            />
          </div>
        </div>

        <Form.Item className="addservice-form__label">Working Area</Form.Item>
        <div className="addservice__location">
          <Input
            className="addservice__input__location"
            value={formData.address}
            onChange={addressChangeHandler}
            ref={AddressRef}
          ></Input>
          <button className="addservice__search__location" onClick={onLocation}>
            <i className="bx bx-map "></i>
          </button>
        </div>

        <Form.Item className="addservice-form__label">Charges</Form.Item>
        <Input
          className="addservice__input"
          type="number"
          onChange={chargesChangeHandler}
          //   value={formData.average_charges}
          ref={ChargesRef}
        />
        <Form.Item className="addservice-form__label">
          Additional Details
        </Form.Item>
        <Input
          className="addservice__input"
          onChange={addDeatilsChangeHandler}
          value={formData.additional_details}
          ref={AddDeatilsRef}
        />
        <Button
          type="primary"
          className="addservcie__submit-btn"
          onClick={submitHandler}
        >
          Update
        </Button>
      </Form>
    </>
  );
};

export default EditServiceForm;
