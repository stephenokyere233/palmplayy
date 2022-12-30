import { useRouter } from "next/router";
import React from "react";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";

const PlayPause = ({ play, pause, showPlay }) => {
  const router = useRouter();
  const styles = {
    icon: `text-4xl lg:text-5xl mx-2 text-green-600 bg-white rounded-full overflow-hidden`,
    playOverlay: `inset-0 border ${
      router.pathname === "/topartists" ? "hidden" : ""
    } absolute animate-slideUp flex h-[70%] w-full items-end justify-end  p-2`,
  };
  return (
    <div className={`${styles.playOverlay} ${showPlay && "hidden"}`}>
      {!play ? (
        <BsPlayCircleFill onClick={pause} className={styles.icon} />
      ) : (
        <BsPauseCircleFill onClick={pause} className={styles.icon} />
      )}
    </div>
  );
};
export default PlayPause;
