import React from "react";
import Image from "next/image";
import Seekbar from "./Seekbar";
import VolumeBar from "./Volume";

const Controller = () => {
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 bg-[#251749] bg-gray-300 `;
  return (
    <div
      className={`${glass} items center fixed bottom-0 z-10 flex h-20  w-full justify-between border-t border-gray-700 bg-[#251749] px-6 py-2`}
    >
      <section className="flex items-center">
        <Image
          src="/vercel.svg"
          width={20}
          height={20}
          alt="profile"
          className="mr-4 h-16 w-16 rounded-full border-2 object-contain"
        />
        <div>
          <h3 className="text-lg font-bold">Title</h3>
          <p>Description</p>
        </div>
      </section>
      <section className="flex items-center">
        <Seekbar />
      </section>
      <section className=" items-center hidden md:flex">
        <VolumeBar />
      </section>
    </div>
  );
};

export default Controller;
