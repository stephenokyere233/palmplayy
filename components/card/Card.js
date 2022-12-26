import React, { useState } from "react";
import Image from "next/image";
import PlayPause from "../controls/PlayPause";
const Card = ({ coverart, title, subtitle, onClick }) => {
  // const [hoverPlay, setHoverPlay] = useState(true);
  const [showPlay, setShowPlay] = useState(true);
  const [play, setPlay] = useState(false);
  const hoverEffect = () => {
    console.log("showingpaly");
    setShowPlay(false);
  };
  const showHover=()=>{
    setShowPlay(true)
  }
  const pause = () => {
    setPlay((prev) => !prev);
  };
  const styles = {
    glass: `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-30  bg-opacity-20 bg-gray-300 `,
    textArea: `w-full items-start justify-start p-2 `,
    image: ` h-[170px] w-full  rounded-lg bg-cover`,
    // title: `font-semibold ${title.length > 18 && "truncate"}`,
    subtitle: ``,
    card: `flex w-[180px] bg-black ${!showPlay&&'bg-gray-400'} flex-col items-center justify-center rounded-lg p-3 md:w-[200px] `,
  };
  return (
    <>
      <div onMouseOver={hoverEffect} onMouseLeave={showHover} className={[styles.glass, styles.card]}>
        <div>
          <PlayPause showPlay={showPlay} pause={pause} play={play}/>
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
          <h2 className={`font-semibold ${title.length > 18 && "truncate"}`}>
            {title}
          </h2>
          <p className={`text-gray-400 ${subtitle.length > 20 && "truncate"}`}>
            {subtitle}
          </p>
        </section>
      </div>
    </>
  );
};


export default Card;
