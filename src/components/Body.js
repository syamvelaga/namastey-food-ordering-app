import React, { Suspense } from "react";
import Shimmer from "./Shimmer";
import useFetchRestaurants from "../CustomHooks/useFetchRestaurants";
import { withPromotedRestaurantCard } from "./RestaurantCard";
const RestaurantCard = React.lazy(() => import("./RestaurantCard"));

const PromotedRestaurantCard = withPromotedRestaurantCard(RestaurantCard);

const Body = () => {
  const {
    restaurantList,
    filteredRestaurant,
    searchRestaurant,
    setfilteredRestaurant,
    setSearchRestaurant,
    place,
  } = useFetchRestaurants();

  if (restaurantList.length === 0) {
    Array.from(12);
    return <Shimmer />;
  }
  return (
    <>
      <div className="pl-16 pr-16 pt-28 z-0">
        <div className="flex  justify-between">
          <button
            onClick={() => {
              let filterTopRatedRestaurants = restaurantList
                .filter((item) => item?.info?.avgRating >= 4.3)
                .sort((a, b) => b.info.avgRating - a.info.avgRating);
              setfilteredRestaurant(filterTopRatedRestaurants);
            }}
            className="ml-[50px] rounded border-spacing-y-12 font-light text-xl font-[Gilroy] bg-orange-500 p-3 border-gray-500 mb-5"
          >
            Top Rated Restaurants
          </button>
          <div>
            <input
              type="text"
              value={searchRestaurant}
              placeholder="Search for a restaurant"
              className="w-[400px] ml-[100px] rounded border-spacing-y-12 font-light text-xl font-[Gilroy] bg-slate-300 p-3 border-gray-500 mb-5"
              onChange={(e) => {
                let SearchRestaurantValue = e.target.value;
                setSearchRestaurant(SearchRestaurantValue);
              }}
            />
            <button
              onClick={() => {
                let filterSearchRestaurants =
                  restaurantList.filter((item) =>
                    item?.info?.name
                      .toLowerCase()
                      .includes(searchRestaurant.toLowerCase())
                  ) || [];

                setfilteredRestaurant(filterSearchRestaurants);
                setSearchRestaurant("");
              }}
              className="w-[100px] ml-[50px] mr-0 rounded border-spacing-y-12 font-light text-xl font-[Gilroy] bg-orange-500 p-3 border-gray-500 mb-5"
            >
              Search
            </button>
          </div>
        </div>

        <h1 className="ml-[50px] font-[Gilroy] font-extrabold text-xl">
          {place}
        </h1>
        <Suspense fallback={<Shimmer />}>
          {filteredRestaurant.length > 0 ? (
            <ul className="list-none flex flex-wrap pl-10 pr-15">
              {filteredRestaurant.map((restaurant) => {
                return restaurant.info.promoted ? (
                  <PromotedRestaurantCard
                    key={restaurant.info.id}
                    restaurant={restaurant}
                    id={restaurant.info.id}
                  />
                ) : (
                  <RestaurantCard
                    key={restaurant.info.id}
                    restaurant={restaurant}
                    id={restaurant.info.id}
                  />
                );
              })}
            </ul>
          ) : (
            <div className="flex flex-col justify-center align-middle ">
              <h2 className="text-center mt-[20px] mb-9 h-3.5 text-xl font-[Gilroy] text-gray-500">
                No Restaurants Found
              </h2>
              <div className="text-center flex  justify-center align-middle">
                <img
                  src="https://res.cloudinary.com/dz99zrns4/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1733562882/61389b1a-1b4f-4db8-997e-51a9904775dd_ajs7hu.webp"
                  alt="No Restaurants Found"
                  className="w-[400px] h-[300px] object-contain"
                />
              </div>
            </div>
          )}
        </Suspense>
      </div>
    </>
  );
};

export default Body;
