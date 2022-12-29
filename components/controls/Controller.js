import React, { useContext } from "react";
import Image from "next/image";
import Seekbar from "./SeekBar";
import VolumeBar from "./Volume";
import { AppContext } from "../../context/context";
import Player from "./Player";
import TrackDetails from "./TrackDetails";

const Controller = () => {
  const {
    controlData,
    setControlData,
    changeControls,
    showControls,
    setShowControls,
  } = useContext(AppContext);
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 bg-[#251749] bg-gray-300 `;
  const styles = {
    wrapper: ` ${
      showControls ? "block" : "hidden"
    } animate-slideUp center fixed bottom-0 z-10 grid grid-cols-2 lg:grid-cols-3 lg:gap-4 h-20  w-full justify-between border-t border-gray-700 bg-[#251749] px-2 lg:px-6 py-2`,
  };
  return (
    <div className={[glass, styles.wrapper]}>
      <TrackDetails />
      <Player currentSong={controlData?.audio} />
      <VolumeBar />
    </div>
  );
};

export default Controller;
