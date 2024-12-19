import { useParams } from "react-router-dom";

import AccordionUsage from "./Accordion";

import useRestaurantInfo from "../CustomHooks/useRestaurantInfo";
import { useState } from "react";

const RestaurantInfo = () => {
  const { resId } = useParams();
  const itemCategoryList = useRestaurantInfo(resId);

  const [showIndex, setShowIndex] = useState(0);

  const toggleIndex = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="pl-16 pr-16 pt-28 z-0">
      {itemCategoryList.map((recomendType, index) => {
        return (
          <AccordionUsage
            key={recomendType?.card?.card?.title}
            recomendType={recomendType}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => toggleIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantInfo;
