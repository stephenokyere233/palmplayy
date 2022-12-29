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

const Hero = ({ discover, isFetching, error}) => {


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
      <header className={styles.wrapper}>
        {session ? (
          <h2 className={`capitalize`}>{`${welcomeText} , ${username}!`}</h2>
        ) : (
          <h2 className="">Welcome, have a good time 😉</h2>
        )}
      </header>
      <section className="px-2">
        {isFetching ? <Load /> : <CardContainer data={discover} />}
      </section>
    </div>
  );
};

const styles={
  wrapper:`flex justify-between p-2 px-4 text-xl font-semibold`
}

export default Hero;

Hero.getInitialProps = async () => {
  return { initialIsOnline: false };
};
