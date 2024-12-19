import { useRouteError } from "react-router-dom";

const PageNotFound = () => {
  const use = useRouteError();
  return (
    <div className="pl-16 pr-16 pt-28 z-0">
      <h1> Page Not Found</h1>
      <h2>
        {use.status} : {use.statusText}
      </h2>
      <h2>{use.data}</h2>
    </div>
  );
};

export default PageNotFound;
