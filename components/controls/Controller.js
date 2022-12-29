import React, { useContext } from "react";
import Image from "next/image";
import Seekbar from "./SeekBar";
import VolumeBar from "./Volume";
import { AppContext } from "../../context/context";
import Player from "./Player";
import TrackDetails from "./TrackDetails";

const Controller = () => {
  const { controlData, setControlData, changeControls } =
    useContext(AppContext);
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 bg-[#251749] bg-gray-300 `;
  return (
    <div
      className={`${glass} items center fixed bottom-0 z-10 grid grid-cols-3 gap-4 h-20  w-full justify-between border-t border-gray-700 bg-[#251749] px-6 py-2`}
    >
      <TrackDetails />
        <Player currentSong={controlData?.audio} />
      <section className=" hidden items-center md:flex">
        <VolumeBar />
      </section>
    </div>
  );
};

export default Controller;
