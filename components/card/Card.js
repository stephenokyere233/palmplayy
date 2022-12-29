import React, { useContext, useState } from "react";
import Image from "next/image";
import PlayPause from "../controls/PlayPause";
import { AppContext } from "../../context/context";
import { useRouter } from "next/router";
import Link from "next/link";

const Card = ({ coverart, title, subtitle,audio, onClick }) => {
  // const [hoverPlay, setHoverPlay] = useState(true);
  // const { showPlay, setShowPlay, play, setPlay ,hoverEffect,showHover,pause} = useContext(AppContext);
  const {
    controlData,
    setControlData,
    hideController,
    setShowControl,
    changeControls,
    isOnTopArtistsPage,
    onTopArtistsPage,
  } = useContext(AppContext);
  const [showPlay, setShowPlay] = useState(true);
  const [play, setPlay] = useState(false);
  const hoverEffect = () => {
    console.log("showingpaly");
    setShowPlay(false);
  };
  const showHover = () => {
    setShowPlay(true);
  };
  const pause = () => {
    setPlay((prev) => !prev);
  };
  const router = useRouter();
  const styles = {
    glass: `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-30  bg-opacity-20 bg-gray-300 `,
    textArea: `w-full items-start justify-start p-2 `,
    image: ` h-[170px] w-full  rounded-lg bg-cover`,
    // title: `font-semibold ${title.length > 18 && "truncate"}`,
    subtitle: ``,
    card: `flex w-[180px] bg-black ${
      !showPlay && "bg-gray-400"
    } flex-col items-center justify-center rounded-lg p-3 md:w-[200px] `,
  };
  // const changeRoute = () => {
  //   router.push("/artistsdetails");
  // };
  const getData = () => {
    const data = {
      title: subtitle,
      image: coverart,
      description: title,
      audio:audio
    };
    setShowControl(true)
    changeControls(data);
    console.log(data);
  };
  return (
    <>
      <div
        onMouseOver={hoverEffect}
        onMouseLeave={showHover}
        onClick={
          router.pathname !== "/topartists"
            ? // !isOnTopArtistsPage
              getData
            : () => {
                console.log("click");
              }
        }
        // onClick={router.pathname === "/topartists" && changeRoute}
        className={[styles.glass, styles.card]}
      >
        <div>
          <PlayPause showPlay={showPlay} pause={pause} play={play} />
          <Image
            src={coverart ? coverart : "/assets/cover.jpg"}
            width={200}
            height={200}
            alt={title}
            priority
            className={styles.image}
          />
        </div>
        <section className={styles.textArea}>
          <h2
            className={`font-semibold ${
              router.pathname === "/topartists" && "hidden"
            } ${title.length > 18 && "truncate"}`}
          >
            {title}
          </h2>
          <p
            className={`text-gray-400${
              router.pathname === "/topartists" && "text-lg font-bold uppercase"
            }  ${subtitle.length > 20 && "truncate"}`}
          >
            {subtitle}
          </p>
        </section>
      </div>
    </>
  );
};

export default Card;
