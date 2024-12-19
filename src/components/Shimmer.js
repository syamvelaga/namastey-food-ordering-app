import React from "react";

const Shimmer = () => {
  return (
    <div className="pl-16 pr-16 pt-32 z-0">
      <div className="flex  justify-between">
        <button className="ml-[50px] w-[200px] rounded border-spacing-y-12 font-light text-xl font-[Gilroy] bg-gray-400 p-3 border-gray-500 mb-5 shimmer-card"></button>
        <div>
          <input
            type="text"
            className="w-[400px] ml-[100px] rounded border-spacing-y-12 font-light text-xl font-[Gilroy] bg-gray-400 p-3 border-gray-500 mb-5 shimmer-card"
          />
          <button className="w-[100px] ml-[50px] mr-0 h-[30px] rounded border-spacing-y-12 font-light text-xl font-[Gilroy] bg-gray-400 p-3 border-gray-500 mb-5 shimmer-card"></button>
        </div>
      </div>
      <h1 className="ml-[50px] w-[300px] h-[80px] font-[Gilroy] font-extrabold text-xl bg-gray-400 shimmer-card"></h1>
      <ul className="list-none flex flex-wrap pl-10 pr-15">
        {Array(12)
          .fill("")
          .map((_, index) => (
            <li
              key={index}
              className="w-[300px] h-[320px] bg-gray-400 animate-pulse rounded-md shadow m-2 shimmer-card"
            ></li>
          ))}
      </ul>
    </div>
  );
};

export default Shimmer;
