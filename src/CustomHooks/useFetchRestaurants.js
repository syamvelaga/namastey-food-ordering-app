import axios from "axios";
import { useEffect, useState } from "react";

const useFetchRestaurants = () => {
  let [restaurantList, setRestaurantList] = useState([]);
  let [filteredRestaurant, setfilteredRestaurant] = useState([]);
  let [searchRestaurant, setSearchRestaurant] = useState("");
  const [place, setPlace] = useState();
  const fetchRestaurants = async () => {
    try {
      const response = await axios.get(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      setRestaurantList(
        response?.data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setfilteredRestaurant(
        response?.data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle
          ?.restaurants || []
      );
      setPlace(response?.data?.data?.cards[1]?.card?.card?.header?.title);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return {
    restaurantList,
    filteredRestaurant,
    searchRestaurant,
    setRestaurantList,
    setfilteredRestaurant,
    setSearchRestaurant,
    place,
    setPlace,
  };
};

export default useFetchRestaurants;
