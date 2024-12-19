import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", (event) => {
      setIsOnline(true);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setIsOnline(false);
    });
  }, []);
  return isOnline;
};

export default useOnlineStatus;
