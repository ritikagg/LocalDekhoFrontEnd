import React, { useEffect, useState } from "react";
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

  useEffect(() => {}, []);
  const geolocation = useGeolocation();

  const onLocation = () => {
    dispatch(getAddressLine(geolocation.latitude, geolocation.longitude));
  };

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const visibilityHandle = () => {
    if (!geolocation.error) {
      dispatch(
        reqServiceActions.UPDATE_DETAILS({
          ...ServiceDetails,
          requestedService: selectedCategory,
          latitude: geolocation.latitude,
          longitude: geolocation.longitude,
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

  // const searchButtonHandler = (latlng) => {};

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
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
                  <option value={service.id} key={index}>
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
              value={ServiceDetails.location}
            />
          </div>
          <div className="search_locate_btn">
            <button onClick={onLocation} className="search__location">
              <i className="bx bx-current-location"></i>
              {!geolocation.latitude && <div>Loading...</div>}
              {geolocation.latitude && <div>Locate me</div>}
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
        // title="Modal 1000px width"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
      >
        <RequestForm onClose={onClose} />
      </Modal>
      {/* <Drawer
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <RequestForm onClose={onClose} />
      </Drawer> */}
    </>
  );
};

export default SearchBar;
