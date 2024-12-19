export const LOGO_URL =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png";

export const FOOD_URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

export const OFFLINE_MODE = (
  <div className="pl-16 pr-16 py-2 z-0">
    <div className="text-center  p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 className="text-xl text-white font-bold">You are in offline mode.</h2>
      <p className="text-gray-300 mt-2">
        Please check your internet connection.
      </p>
    </div>
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
