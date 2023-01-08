// import React, { useContext } from "react";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import React from "react";

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  const styles = {
    icon: `text-4xl lg:text-5xl mx-2 text-green-600 bg-white rounded-full overflow-hidden`,
    playOverlay: `inset-0 absolute animate-slideUp flex h-[70%] w-full items-end justify-end  p-2`,
  };
  return (
    // <div className={styles.playOverlay}>
    <>
      {isPlaying && activeSong?.title === song.title ? (
        <BsPauseCircleFill onClick={handlePause} className={styles.icon} />
      ) : (
        <BsPlayCircleFill onClick={handlePlay} className={styles.icon} />
      )}
     </>
  );
};

export default PlayPause;
