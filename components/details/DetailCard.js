import Image from "next/image";
import React, { useState } from "react";

const DetailCard = ({
  imageUrl,
  songTitle,
  artistName,
  albumName,
  releaseDate,
  genre,
  borderColor,
  albumColor
}) => {

  const styles = {
    glass: `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-30  bg-opacity-20 bg-black `,
  };

  return (
    <div className={` w-[200px] rounded-md ${styles.glass}`}>
      <div className="">
        <div className="relative p-3">
          <Image
            src={imageUrl}
            height={400}
            width={400}
            alt=""
            style={{ borderBottom: `5px solid #${borderColor}` }}
            className="h-[180px] w-full overflow-hidden rounded-md object-cover"
          />
          <div className="absolute  top-3 right-3 m-2 rounded-full bg-gray-600 px-2 text-sm text-white">
            {releaseDate}
          </div>
          <div
            style={{ borderLeft: `5px solid #${borderColor}` }}
            className="absolute bottom-4 mb-3"
          >
            <p className="ml-3 text-lg  font-medium">{genre}</p>
          </div>
        </div>
      </div>
      <div className="px-2 pb-4">
        <h2
          className={`${
            songTitle.length > 10 && "truncate"
          } w-[180px] pb-1 text-lg font-medium `}
        >
          {songTitle}
        </h2>
        <div className="text-md leading-tight text-gray-400">
          <p className={`w-[190px]  ${artistName?.length > 10 && "truncate"}`}>
            {artistName}
          </p>
          <p className={`w-[190px] ${albumName?.length > 10 && "truncate"}`}>
            {albumName}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
