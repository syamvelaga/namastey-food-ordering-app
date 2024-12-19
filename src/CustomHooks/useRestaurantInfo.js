import axios from "axios";
import { useEffect, useState } from "react";

const useRestaurantInfo = (resId) => {
  const [itemCategoryList, setItemCategoryList] = useState([]);

  const fetchRestaurantInfo = async () => {
    const responseData = await axios.get(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.360589&lng=78.4740613&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const AccordionList =
      responseData?.data?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR
        ?.cards;

    const filterItemCatogory = AccordionList.filter(
      (each) =>
        each?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    setItemCategoryList(filterItemCatogory);
  };

  useEffect(() => {
    fetchRestaurantInfo();
  }, []);
  return itemCategoryList;
};

export default useRestaurantInfo;
