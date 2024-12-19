import { FcRating } from "react-icons/fc";
import React from "react";
import { FOOD_URL } from "../utils/constant";
import { AddtoCartStyle } from "../utils/AddtoCartStyle";

import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { restaurant, searchRestaurant, id } = props;
  const { info } = restaurant;

  return (
    <li className="w-[300px] bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 m-2 hue-rotate-15  hover:scale-105 hover:bg-gray-50 transition-all duration-300 cursor-pointer">
      <Link to={`/restaurant/${id}`}>
        <div className="p-4">
          {/* Image */}
          <img
            src={`${FOOD_URL}${info?.cloudinaryImageId}`}
            alt={info?.name}
            className="w-full h-32 object-cover rounded-md"
            loading="lazy"
          />

          {/* Title */}
          <h1 className="text-lg font-semibold mt-2">{info?.name}</h1>

          {/* Rating */}
          <h2 className="flex items-center text-sm text-gray-600 mt-1">
            <FcRating className="text-green-500 mr-1" />
            <b>
              {info?.avgRating} • {info?.sla?.slaString}
            </b>
          </h2>

          {/* cuisines */}

          <p className="text-gray-500 text-sm mt-1">
            {info?.cuisines.join(", ")}
          </p>

          {/* Area Name */}
          <p className="text-gray-500 text-sm mt-1">{info.areaName}</p>

          {/* Cost for Two */}
          <p className="text-gray-700 text-sm font-medium mt-2">
            {info.costForTwo}
          </p>
        </div>
      </Link>
    </li>
  );
};

export const withPromotedRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black rounded-lg p-2 m-2 z-50 text-white">
          Above 4.5 rated
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default React.memo(RestaurantCard);
