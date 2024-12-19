import React, { useState } from "react";
import { FaOpencart } from "react-icons/fa6";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../CustomHooks/useOnlineStatus";
import { CiWifiOn } from "react-icons/ci";
import { CiWifiOff } from "react-icons/ci";
import { useSelector } from "react-redux";

const Header = () => {
  const itemsCartCount = useSelector((state) => state.cart.items);

  const onlineStatus = useOnlineStatus();
  return (
    <div className="bg-yellow-50  w-full">
      <header className="flex items-center justify-between  fixed top-0 left-0 right-0 bg-slate-600 p-4  shadow-lg z-50">
        <div>
          <img alt="logo" src={LOGO_URL} className="h-12" />
        </div>
        <nav>
          <ul className="flex items-center space-x-8">
            <li className="text-white font-semibold hover:text-gray-300">
              {onlineStatus ? <CiWifiOn size={40} /> : <CiWifiOff size={40} />}
            </li>
            <li className="text-white font-semibold hover:text-gray-300 cursor-pointer">
              <Link to="/">Home</Link>
            </li>

            <li className="text-white font-semibold hover:text-gray-300 cursor-pointer">
              <Link to="/about">About Us</Link>
            </li>
            <li className="text-white font-semibold hover:text-gray-300 cursor-pointer">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="text-white font-semibold hover:text-gray-300 cursor-pointer flex items-center space-x-2">
              <Link to="/checkout">
                <span>Cart-({itemsCartCount.length})</span>
              </Link>

              <span>
                <FaOpencart />
              </span>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
