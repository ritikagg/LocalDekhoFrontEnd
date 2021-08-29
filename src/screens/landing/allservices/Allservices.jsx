import React from "react";
import "./allservices.css";

// import ima from "../../assets/images/services/"
// const all_services = [
//   {
//     display_name: "Mechanic",
//     img: "../../assets/images/services/mechanic.jpeg",
//   },
// ];

const Allservices = () => {
  return (
    <div className="allservice__root">
      <div className="allservice__root-header">Frequest Services Near You</div>
      <div className="allservice__root-cards">
        <div className="allservice__root-card">
          <div>logo / icon / img</div>
          <div>Home Cleaning</div>
          {/* <img
            className="allservice_card_image"
            src="../../assets/images/services/mechanic.jpeg"
          /> */}
        </div>
        <div className="allservice__root-card">
          <div>logo / icon / img</div>
          <div>Home Cleaning</div>
        </div>
        <div className="allservice__root-card">
          <div>logo / icon / img</div>
          <div>Home Cleaning</div>
        </div>
        <div className="allservice__root-card">
          <div>logo / icon / img</div>
          <div>Home Cleaning</div>
        </div>
        <div className="allservice__root-card">
          <div>logo / icon / img</div>
          <div>Home Cleaning</div>
        </div>
        <div className="allservice__root-card">
          <div>logo / icon / img</div>
          <div>Home Cleaning</div>
        </div>
      </div>
    </div>
  );
};

export default Allservices;
