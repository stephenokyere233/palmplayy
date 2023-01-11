import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import React from "react";

const PlayPause = ({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
  showIcon
}) => {
  const styles = {
    icon: `text-4xl lg:text-5xl bg-black rounded-full  text-green-400 mx-2 overflow-hidden`,
    playOverlay: `inset-0 absolute animate-slideUp flex h-[70%] w-full items-end justify-end  p-2`,
  };
  return (
    <div className={showIcon?"block":"hidden"}>
      {isPlaying && activeSong?.title === song.title ? (
        <BsPauseCircleFill onClick={handlePause} className={styles.icon} />
      ) : (
        <BsPlayCircleFill onClick={handlePlay} className={styles.icon} />
      )}
     </div>
  );
};

export default PlayPause;
