import { IoIosArrowDropdown } from "react-icons/io";
import { IoIosArrowDropup } from "react-icons/io";

import ItemsList from "./ItemsList";
import { useState } from "react";

const AccordionUsage = ({ recomendType, showItems, setShowIndex }) => {
  const title = recomendType?.card?.card?.title;
  const itemCards = recomendType?.card?.card?.itemCards;
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div>
      <div className="shadow-lg px-3 bg-gray-100 hover:bg-gray-300  py-3 my-2  rounded-lg m-auto w-7/12 border-gray-500">
        <div
          onClick={handleClick}
          className="flex items-center justify-between cursor-pointer"
        >
          <div>
            <span className="font-bold">
              {title} ({itemCards.length})
            </span>
          </div>
          <div>
            {showItems ? (
              <IoIosArrowDropup className="size-9 font-light" />
            ) : (
              <IoIosArrowDropdown className="size-9" />
            )}
          </div>
        </div>

        <div>
          {showItems &&
            itemCards.map((item) => (
              <ItemsList
                mode="add"
                key={item?.card?.info?.id}
                item={item?.card?.info}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionUsage;
