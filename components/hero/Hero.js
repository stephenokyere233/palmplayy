import React, { useContext, useEffect, useState } from "react";
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
import GenreTags from "./GenreTags";
import { AppContext } from "../../context/context";
import { useRouter } from "next/router";
// import { Toast } from "react-toastify/dist/components";

const Hero = ({ discover, isFetching, error }) => {
  const router = useRouter();
  const { showGenre, setShowGenre, hideGenreTags } = useContext(AppContext);

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
        <div className="flex justify-between">
          {session ? (
            <h2 className={`capitalize`}>{`${welcomeText} , ${username}!`}</h2>
          ) : (
            <h2 className="">Welcome, have a good time 😉</h2>
          )}

          <button
            className={`mx-6 rounded-md border p-1 text-lg ${
              router.pathname === "/" ? "" : "hidden"
            }`}
            onClick={hideGenreTags}
          >
            {showGenre ? "Show Genres" : "Hide Genres"}
          </button>
        </div>
        <GenreTags show={showGenre} />
      </header>
      <section className="px-2">
        {isFetching ? <Load /> : <CardContainer data={discover} />}
      </section>
    </div>
  );
};

const styles = {
  wrapper: `flex sticky flex-col top-0 bg-black z-10 justify-between bg-[#4A0D67] p-2 px-4 text-xl font-semibold`,
};

export default Hero;
