import React from 'react'
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";


const PlayPause = ({play,pause,showPlay}) => {
  return (
    <div className={`${styles.playOverlay} ${showPlay && 'hidden'}`}>
      {!play ? (
        <BsPlayCircleFill onClick={pause} className={styles.icon} />
      ) : (
        <BsPauseCircleFill onClick={pause} className={styles.icon} />
      )}
    </div>
  );
}
const styles = {
  icon: `text-4xl lg:text-5xl mx-2 text-green-600 bg-white rounded-full overflow-hidden`,
  playOverlay: `inset-0 border absolute animate-slideUp flex h-[70%] w-full items-end justify-end  p-2`,
};
export default PlayPause
