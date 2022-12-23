import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Dropdown from "../dropdown/Dropdown";
import CardContainer from "../cardcontainer/CardContainer";
// import { useGetTopChartsQuery } from "../../store/services/shazamCore";
import Load from "../loader/Load";
import NotFound from "../../pages/_error";
import { BsMusicNoteList } from "react-icons/bs";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import useOnlineStatus from "../../hooks/useOnlineStatus";
// import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Toast } from "react-toastify/dist/components";

const Hero = ({ discover, isFetching, error,initialIsOnline}) => {
  // // const isOnline=useOnlineStatus(initialIsOnline)
  // const [isOnline, setIsOnline] = useState(initialIsOnline);

  // useEffect(() => {
  //   function handleOnlineStatusChange() {
  //     setIsOnline(navigator.onLine);
  //     navigator.onLine
  //       ? toast.success(`You're online!`)
  //       : toast.error(`You're offline`);
  //     // add(`You are now ${navigator.onLine ? "online" : "offline"}.`);
  //   }

  //   window.addEventListener("online", handleOnlineStatusChange());
  //   window.addEventListener("offline", handleOnlineStatusChange());

  //   return () => {
  //     window.removeEventListener("online", handleOnlineStatusChange());
  //     window.removeEventListener("offline", handleOnlineStatusChange());
  //   };
  // }, []);
  // isOnline ? toast.success(`You're online!`) : toast.error(`You're offline`);

  // isOnline ? console.log("online") : console.log("offline");
  // toast(isOnline ? "online" : "offline");

  const { data: session } = useSession();
  let username = "";
  if (session) {
    const { user } = session;
    if (user) {
      const { name } = user;
      username = name;
    }
  }

  const date = new Date();
  const hours = date.getHours();
  let welcomeText;
  if (hours < 12) {
    welcomeText = `good morning`;
  } else if (hours >= 12 && hours <= 16) {
    welcomeText = "good afternoon";
  } else if (hours > 16) {
    welcomeText = "good evening";
  }
  if (error) return <NotFound />;
  return (
    <div className="">
      <header className="flex justify-between p-2 px-4 text-xl font-semibold">
        {session ? (
          <h2 className={`capitalize`}>{`${welcomeText} , ${username}!`}</h2>
        ) : (
          <h2 className="">Welcome, have a good time 😉</h2>
        )}
        {/* <Dropdown /> */}

      </header>
      <section className="px-2">
        {/* <ToastContainer /> */}
        {isFetching ? <Load /> : <CardContainer data={discover} />}
      </section>
    </div>
  );
};

export default Hero;

Hero.getInitialProps = async () => {
  // This code will only be run on the server-side
  return { initialIsOnline: false };
};
