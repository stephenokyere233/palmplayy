import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

const useOnlineStatus = () => {
  const [online, setOnline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setOnline(true);
      toast.success("Connection is back");
    };
    const handleOffline = () => {
      setOnline(false);
      toast.error("You Lost Internet Connection");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return online;
};

export default useOnlineStatus;
