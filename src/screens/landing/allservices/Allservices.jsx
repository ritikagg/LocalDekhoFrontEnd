import React from "react";
import "./allservices.css";

import electricican from "../../../assets/flaticon/electrician.svg";
import food_delivery from "../../../assets/flaticon/food_delivery.svg";
import tuition from "../../../assets/flaticon/tuition.svg";
import mechanic from "../../../assets/flaticon/mechanic.svg";
import laundry from "../../../assets/flaticon/laundry.svg";
import maids from "../../../assets/flaticon/maids.svg";
import carpenter from "../../../assets/flaticon/carpenter.svg";
import cook from "../../../assets/flaticon/cook.svg";

const AllService_card = [
  {
    ServiceName: "Electrician",
    icon: electricican,
  },
  {
    ServiceName: "Food Service",
    icon: food_delivery,
  },
  {
    ServiceName: "Tuition",
    icon: tuition,
  },
  {
    ServiceName: "Mechanic",
    icon: mechanic,
  },
  {
    ServiceName: "Carpenter",
    icon: carpenter,
  },
  {
    ServiceName: "Maids",
    icon: maids,
  },
  {
    ServiceName: "Laundry",
    icon: laundry,
  },
  {
    ServiceName: "Cook",
    icon: cook,
  },
];

const Allservices = () => {
  return (
    <div className="allservice__root">
      <div className="allservice__root-header">Frequest Services Near You</div>
      <div className="allservice__root-cards">
        {AllService_card.map((item, index) => {
          return (
            <div className="allservice__root-card" key={index}>
              <img
                src={item.icon}
                alt="Mechanic"
                className="allservice_card_image"
              />
              <div className="allserivce_card_head">{item.ServiceName}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allservices;
