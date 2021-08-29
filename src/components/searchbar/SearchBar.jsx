import React from "react";
// import { Link } from "react-router-dom";
import useGeolocation from "react-hook-geolocation";
import "./searchbar.scss";

// const curr_user = {
// 	display_name: "Helper",
// };

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
    content: "Food",
  },
  {
    content: "Maid",
  },
  {
    content: "Cook / Chefs",
  },
  {
    content: "Packers and Movers",
  },
];

// const renderUserToggle = (user) => (
// 	<div className="topnav__right-user">
// 		<div className="topnav__right-user__image">
// 			{/* <img src={user.image} alt="" /> */}
// 		</div>
// 		<div className="topnav__right-user__name">{user.display_name}</div>
// 	</div>
// );

// const renderUserMenu = (item, index) => (
// 	<Link to="/" key={index}>
// 		<div className="notification-item">
// 			<i className={item.icon}></i>
// 			<span>{item.content}</span>
// 		</div>
// 	</Link>
// );

const SearchBar = () => {
  const geolocation = useGeolocation();

  const onLocation = () => {
    console.log(geolocation.error);
    console.log(geolocation);
  };
  return (
    <div className="wrap">
      <div className="search">
        <div className="category__list">
          <select className="category__list-option">
            {AllServices.map((service, index) => {
              return <option value={index}>{service.content}</option>;
            })}
          </select>
        </div>
        <div className="category__list-option">
          <input
            type="text"
            className="searchTerm"
            placeholder="What are you looking for?"
          />
        </div>
        <div>
          <button onClick={onLocation} class="search__location">
            <i className="bx bx-map"></i>
          </button>
        </div>
        <div>
          <button type="submit" class="search__btn">
            <i className="bx bx-search"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
