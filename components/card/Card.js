import React, { useState } from "react";
import Image from "next/image";
import { BsPlayCircleFill, BsPauseCircleFill } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Card = ({ coverart, title, subtitle, onClick }) => {
  // const desc = `lorem lorem loremlorem lorem loremlorem lorem lorem`;
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-30  bg-opacity-20 bg-gray-300 `;
  const [hoverPlay, setHoverPlay] = useState(true);
  const [play, setPlay] = useState(false);
  const showPlay = () => {
    console.log("showingpaly");
    setHoverPlay(false);
  };
  const pause = () => {
    // console.log("paused");
    setPlay(prev=>!prev);
  };
  return (
    <>
      <section>
        <div
          onMouseOver={showPlay}
          className={`${glass} flex w-[180px] flex-col items-center justify-center rounded-lg p-3 md:w-[200px] `}
        >
          <div className="">
            {" "}
            <div className={`absolute flex h-[170px] w-[170px] items-end border p-2 ${hoverPlay&&'hover:hidden'}`}>
              {/* <ToastContainer/> */}
              {!play ? (
                <BsPlayCircleFill onClick={pause} className="text-4xl" />
              ) : (
                <BsPauseCircleFill onClick={pause} className="text-4xl" />
              )}
            </div>
            <Image
              src={coverart ? coverart : "/assets/cover.jpg"}
              width={200}
              height={200}
              alt={title}
              priority
              className=" h-[170px] w-full  rounded-lg bg-cover"
            />
            {/* <p className="absolute top-36 text-2xl font-semibold border-l-4 border-blue-800 left-3 capitalize">&nbsp;genre</p> */}
          </div>
          <div className="w-full items-start justify-start p-2 ">
            <h2 className={`font-semibold ${title.length > 18 && "truncate"}`}>
              {title}
            </h2>
            {/* ${desc.length > 25 && "truncate" */}
            <p
              className={`text-gray-400 ${subtitle.length > 20 && "truncate"}`}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
