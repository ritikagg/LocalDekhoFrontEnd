import React, { useState } from "react";
import useGeolocation from "react-hook-geolocation";
import "./searchbar.scss";
import RequestForm from "../../screens/requestpage/RequestForm";
import { useDispatch, useSelector } from "react-redux";
import { Drawer, notification } from "antd";
import { reqServiceActions } from "../../store/reqService/reqService-slice";

const AllServices = [
  {
    content: "Electrician",
  },
  {
    content: "Machanic",
  },
  {
    content: "Carpenter",
  },
  {
    content: "Tuition",
  },
  {
    content: "Laundry",
  },
  {
    content: "Tiffin Service",
  },
  {
    content: "Maid",
  },
  {
    content: "Cook",
  },
];

const SearchBar = () => {
  const ServiceDetails = useSelector((state) => state.reqService);

  const [latlng, setlatlng] = useState({
    lat: null,
    lng: null,
  });

  const geolocation = useGeolocation();

  const onLocation = () => {
    setlatlng({
      lat: geolocation.latitude,
      lng: geolocation.longitude,
    });
  };

  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const visibilityHandle = (e) => {
    if (!geolocation.error) {
      dispatch(
        reqServiceActions.UPDATE_DETAILS({
          ...ServiceDetails,
          requestedService: selectedCategory,
          latitude: latlng.lat,
          longitude: latlng.lng,
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

  const handleChange = (e) => {
    // console.log(e.target.value);
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
                  <option value={service.content} key={index}>
                    {service.content}
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
            />
          </div>
          <div className="search_locate_btn">
            <button onClick={onLocation} className="search__location">
              <i className="bx bx-current-location"></i>
              <div>Locate me</div>
            </button>
          </div>
          <div onClick={visibilityHandle}>
            <button type="submit" className="search__btn">
              <i className="bx bx-search"></i>
            </button>
          </div>
        </div>
      </div>
      <Drawer
        width={720}
        onClose={onClose}
        visible={visible}
        bodyStyle={{ paddingBottom: 80 }}
      >
        <RequestForm onClose={onClose} />
      </Drawer>
    </>
  );
};

export default SearchBar;
