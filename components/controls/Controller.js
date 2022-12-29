import React, { useContext } from "react";
import Image from "next/image";
import Seekbar from "./SeekBar";
import VolumeBar from "./Volume";
import { AppContext } from "../../context/context";
import Player from "./Player";

const Controller = () => {
  const { controlData, setControlData, changeControls } =
    useContext(AppContext);
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 bg-[#251749] bg-gray-300 `;
  return (
    <div
      className={`${glass} items center fixed bottom-0 z-10 flex h-20  w-full justify-between border-t border-gray-700 bg-[#251749] px-6 py-2`}
    >
      <section className="flex items-center">
        <Image
          src={controlData.image}
          width={20}
          height={20}
          alt="profile"
          className="mr-4 h-16 w-16 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-bold">{controlData.title}</h3>
          <p>{controlData.description}</p>
        </div>
      </section>
      <section className="flex items-center">
      <Player currentSong={controlData?.audio}/>
      </section>
      <section className=" hidden items-center md:flex">
        <VolumeBar />
      </section>
    </div>
  );
};

export default Controller;
