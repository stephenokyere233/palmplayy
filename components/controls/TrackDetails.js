import React, { useContext } from "react";
import Image from "next/image";
import Seekbar from "./SeekBar";
import VolumeBar from "./Volume";
import { AppContext } from "../../context/context";

const TrackDetails = ({ isPlaying, isActive, activeSong }) => {
  // const { controlData, setControlData, changeControls } =
  //   useContext(AppContext);
  // const { title, image, description } = controlData;
  return (
    <section className="flex items-center border">
      <Image
        src={activeSong?.images?.coverart}
        width={20}
        height={20}
        alt="profile"
        className={`${
          isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
        } mr-4 hidden h-16 w-16 rounded-full object-cover sm:block`}
      />
      <div>
        {/* ${
            activeSong?.title.length > 20 && "truncate"
          } */}
        <h3
          className={`text-lg font-bold
          `}
        >
          {activeSong?.title}
        </h3>
        {/* ${
            activeSong?.subtitle.length > 20 && "truncate"
          } */}
        <p
          className={`w-[320px]  
          `}
        >
          {activeSong?.subtitle}
        </p>
      </div>
    </section>
  );
};

export default TrackDetails;
