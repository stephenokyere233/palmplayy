import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Controller from "../controls/Controller";
import Searchbar from "../searchbar/Searchbar";
import Sidebar from "../sidebar/Sidebar";
// import { add } from "react-hot-toast";
// import toast, { Toaster } from "react-hot-toast";
// import { useRouter } from "next/router";
// import NotFound from "../../pages/_error";

const Layout = ({ children}) => {
  const router=useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggle=()=>{
    console.log('toggle')
    setMobileMenuOpen(prev=>!prev)
  }

  // const router=useRouter()
  // const [isOnline, setIsOnline] = useState(initialIsOnline);

  // useEffect(() => {
  //   function handleOnlineStatusChange() {
  //     setIsOnline(navigator.onLine);
  //     // add(`You are now ${navigator.onLine ? "online" : "offline"}.`);
  //   }

  //   window.addEventListener("online", handleOnlineStatusChange);
  //   window.addEventListener("offline", handleOnlineStatusChange);

  //   return () => {
  //     window.removeEventListener("online", handleOnlineStatusChange);
  //     window.removeEventListener("offline", handleOnlineStatusChange);
  //   };
  // }, [isOnline]);
  // isOnline ? toast.success(`You're online!`): toast.error(`You're offline`)
    useEffect(() => {
      // This effect will be called whenever the route changes
      setMobileMenuOpen(false);
    }, [router]);
  const styles = {
    container:
      "grid h-screen w-full select-none scrollbar-hide overflow-hidden grid-cols-5 bg-[#4A0D67] text-white",
    glass:
      "bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60  bg-[#5564DF] ",
  };
  const background = {
    backgroundColor: `#242222`,
    backgroundImage: `linear-gradient(225deg, #242222 0%, #784BA0 33%, #0983da 66%, #0e0d0d 100%)`,
  };

  return (
    <div className={styles.container}>
      <Sidebar mobileMenuOpen={mobileMenuOpen} onClick={toggle} />
      <div className="col-span-5  flex grid-flow-col flex-col lg:col-span-4 ">
        <Searchbar />
        {/* ${mobileMenuOpen ? "opacity-50" : ""} */}
        <div className={`h-[88vh] overflow-y-scroll pb-20 scrollbar-hide`}>
          {children}
        </div>
      </div>
      <Controller />
    </div>
  );
};

export default Layout;


