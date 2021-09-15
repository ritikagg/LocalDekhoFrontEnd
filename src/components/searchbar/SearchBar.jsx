import React, { useEffect, useState, useRef } from "react";
import useGeolocation from "react-hook-geolocation";
import "./searchbar.scss";
import RequestForm from "../../screens/requestpage/RequestForm";
import { useDispatch, useSelector } from "react-redux";
import { Modal, notification } from "antd";
import { reqServiceActions } from "../../store/reqService/reqService-slice";
import { getAddressLine } from "../../store/reqService/reqService-slice";
import AllServices from "../../assets/JsonData/available-services.json";

const SearchBar = () => {
  const ServiceDetails = useSelector((state) => state.reqService);
  const [location, setLocation] = useState("");
  const AddressRef = useRef("");

  let isLoading = ServiceDetails.loading;
  const [disabled, setDisabled] = useState(false);

  const addressChangeHandler = (e) => {
    setLocation(e.target.value);
  };
  const geolocation = useGeolocation();

  const onLocation = () => {
    setDisabled(true);
    dispatch(getAddressLine(geolocation.latitude, geolocation.longitude));
  };

  useEffect(() => {
    setDisabled(false);
  }, [isLoading]);

  useEffect(() => {
    setLocation(ServiceDetails.location);
  }, [ServiceDetails.location]);

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const visibilityHandle = () => {
    if (!geolocation.error) {
      dispatch(
        reqServiceActions.UPDATE_DETAILS({
          ...ServiceDetails,
          requestedService: selectedCategory,
          service_id: selectedCategoryID,
        })
      );
      dispatch(
        reqServiceActions.UPDATE_LOCATION({
          ...ServiceDetails,
          location: location,
        })
      );
      setVisible(true);
    } else {
      notification.error({
        message: "Unable to access location",
        description: "Please provide location access to serve better.",
      });
    }
  };

  const onClose = () => {
    setVisible(false);
  };

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryID, setSelectedCategoryID] = useState("");

  const handleChange = (e) => {
    const serviceName = e.target.value;
    const selectedService = AllServices.filter(
      (i) => i.ServiceName === serviceName
    );
    setSelectedCategory(e.target.value);
    setSelectedCategoryID(selectedService[0].id);
  };

  return (
    <>
      <div className="wrap">
        <div className="search">
          <div className="category__list">
            <select className="category__list-option" onChange={handleChange}>
              <option value="default" key="0">
                Category
              </option>
              {AllServices.map((service, index) => {
                return (
                  <option
                    value={service.ServiceName}
                    service_id={service.id}
                    key={index}
                  >
                    {service.ServiceName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="category__list-option">
            <input
              type="text"
              className="searchTerm"
              placeholder="Enter your location.."
              value={location}
              onChange={addressChangeHandler}
              ref={AddressRef}
            />
          </div>
          <div className="search_locate_btn">
            <button
              onClick={onLocation}
              className="search__location"
              disabled={!isLoading}
            >
              {!disabled && (
                <>
                  <i className="bx bx-current-location"></i>
                  {!geolocation.latitude && <div>Loading...</div>}
                  {geolocation.latitude && <div>Locate me</div>}{" "}
                </>
              )}
              {disabled && (
                <>
                  <i className="bx bx-current-location"></i>
                  <div>Locating...</div>
                </>
              )}
            </button>
          </div>
          <div onClick={visibilityHandle}>
            <button
              type="submit"
              className="search__btn"
              // onClick={searchButtonHandler(latlng)}
            >
              <div>Search for Service</div>
            </button>
          </div>
        </div>
      </div>
      <Modal
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
        footer={null}
      >
        <RequestForm onClose={onClose} />
      </Modal>
    </>
  );
};

export default SearchBar;
