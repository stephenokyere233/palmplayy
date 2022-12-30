import { useRouter } from "next/router";
import React, { useContext } from "react";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
// import { AppContext } from "../../context/context";

const PlayPause = ({
  // play,
  // pause,
  showPlay,
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) => {
  // const { playPause, setPlayPause, handlePlay, handlePause } =
  //   useContext(AppContext);
  const router = useRouter();
  const styles = {
    icon: `text-4xl lg:text-5xl mx-2 text-green-600 bg-white rounded-full overflow-hidden`,
    playOverlay: `inset-0 ${
      router.pathname === "/topartists" ? "hidden" : ""
    } absolute animate-slideUp flex h-[70%] w-full items-end justify-end  p-2`,
  };
  return (
    <div className={`${styles.playOverlay} ${showPlay && "hidden"}`}>
      {isPlaying && activeSong?.title === song.title ? (
        <BsPauseCircleFill onClick={handlePlay} className={styles.icon} />
        ) : (
        <BsPlayCircleFill onClick={handlePause} className={styles.icon} />
      )}
    </div>
  );
};
export default PlayPause;
