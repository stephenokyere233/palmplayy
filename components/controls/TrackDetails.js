import React, { useContext } from "react";
import Image from "next/image";
import Seekbar from "./SeekBar";
import VolumeBar from "./Volume";
import { AppContext } from "../../context/context";

const TrackDetails = () => {
  const { controlData, setControlData, changeControls } =
    useContext(AppContext);
  const { title, image, description } = controlData;
  return (
    <section className="flex items-center border">
      <Image
        src={image}
        width={20}
        height={20}
        alt="profile"
        className="mr-4 h-16 w-16 rounded-full object-cover"
      />
      <div>
        <h3 className={`text-lg font-bold ${title.length > 20 && "truncate"}`}>
          {title}
        </h3>
        <p className={`w-[320px]  ${description.length > 20 && "truncate"}`}>{description}</p>
      </div>
    </section>
  );
};

export default TrackDetails;
