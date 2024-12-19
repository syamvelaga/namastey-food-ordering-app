import { IoStar } from "react-icons/io5";
import { FOOD_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  incrementCount,
  decrementCount,
  removeCartItem,
} from "../Redux/cartSlice";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ItemsList = ({ item, mode }) => {
  const { name, price, ratings, imageId, isVeg, description, defaultPrice } =
    item;

  const { rating } = ratings?.aggregatedRating;

  const cartItemsList = useSelector((state) => state?.cart?.items) || [];
  const addToCart = useSelector((state) => state?.cart?.addToCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItem = cartItemsList.find((cartItem) => cartItem.id === item.id);
  const count = cartItem ? cartItem.count : 0;

  function handleAddCart(cartItem) {
    dispatch(addItems(cartItem));
  }

  function handleGotoCart() {
    navigate("/checkout");
  }

  function handleCountIncrement(id) {
    dispatch(incrementCount(id));
  }

  function handleCountDecrement(id) {
    dispatch(decrementCount(id));
  }

  function handleRemoveCartItem(id) {
    console.log(id);
    dispatch(removeCartItem(id));
  }

  return (
    <div className="shadow-lg flex items-center p-2 hover:bg-white rounded mt-1">
      <div className="w-9/12 p-3">
        {isVeg ? "VEG 🌿" : "NON VEG 🍗"}
        <h1 className="font-bold my-1">{name}</h1>
        <p className="font-semibold">₹ {price / 100 || defaultPrice / 100}</p>
        <div className="flex items-center my-2">
          {rating ? (
            <>
              <span>
                <IoStar color="green" />
              </span>
              <span>{rating}</span>
            </>
          ) : (
            <span>No Rating Available</span>
          )}
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="p-3 w-3/12 relative">
        {mode === "Cart" ? (
          <>
            <button
              onClick={() => handleRemoveCartItem(item.id)}
              className="rounded absolute w-28 bg-red-500 px-3 py-2 my-1 text-white bottom-3 left-1/2 transform -translate-x-1/2"
            >
              Remove
            </button>
            <div className="flex items-center justify-center  mb-3  border-solid shadow-2xl">
              <button
                onClick={() => handleCountDecrement(item.id)}
                className="rounded  border-solid bg-slate-400  px-3 text-slate-950 "
              >
                -
              </button>
              <span className="mx-2 font-bold">{count}</span>
              <button
                onClick={() => handleCountIncrement(item.id)}
                className="rounded  border-solid bg-slate-400  px-3 text-slate-950 "
              >
                +
              </button>
            </div>
          </>
        ) : addToCart[item.id] ? (
          <button
            onClick={handleGotoCart}
            className="rounded absolute w-28 bg-green-700 px-3 py-2 my-1 text-white bottom-3 left-1/2 transform -translate-x-1/2"
          >
            Go to Cart
          </button>
        ) : (
          <button
            onClick={() => handleAddCart(item)}
            className="rounded absolute w-28 bg-slate-700 hover:bg-green-700 px-3 py-2 my-1 text-white bottom-3 left-1/2 transform -translate-x-1/2"
          >
            + Add
          </button>
        )}

        {imageId ? (
          <img className="rounded-lg" src={FOOD_URL + imageId} alt={name} />
        ) : (
          <img
            className="rounded-lg w-[220px] h-[130px]"
            src="https://via.placeholder.com/150?text=Dish+Image"
            alt="dummy"
          />
        )}
      </div>
    </div>
  );
};

export default React.memo(ItemsList);
