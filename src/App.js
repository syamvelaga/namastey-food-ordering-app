import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import PageNotFound from "./components/PageNotFound";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import useOnlineStatus from "./CustomHooks/useOnlineStatus";
import { OFFLINE_MODE } from "./utils/constant";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const RestaurantInfo = lazy(() => {
  return import("./components/RestaurantInfo");
});
const App = () => {
  const onlineStatus = useOnlineStatus();
  return onlineStatus ? (
    <Provider store={store}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  ) : (
    <div>{OFFLINE_MODE}</div>
  );
};
const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Body /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <ContactUs /> },
        {
          path: "/restaurant/:resId",
          element: (
            <Suspense>
              <RestaurantInfo />
            </Suspense>
          ),
        },
        {
          path: "/checkout",
          element: <Cart />,
        },
      ],
      errorElement: <PageNotFound />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  </Provider>
);
