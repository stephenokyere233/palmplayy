import React, { useContext, useState } from "react";
import Image from "next/image";
import PlayPause from "../controls/PlayPause";
import { AppContext } from "../../context/context";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../../store/features/playerSlice";

const ArtistCard = ({
  imageUrl,
  songTitle,
  artistName,
  albumName,
  formed,
  genre,
  borderColor,
  albumColor,
  id,
}) => {
  const router = useRouter();

  function matchBrackets(string) {
    const pattern = /(.*)\s*\(([^()]*)\)/;
    const match = string.match(pattern);
    if (match) {
      const firstPart = match[1];
      const insideBrackets = match[2];
      return (string = firstPart);
    } else {
      string = string;
      return (string = string);
    }
  }

  const styles = {
    glass: `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-30  bg-opacity-20 bg-black `,
  };

  return (
    <Link href={`/artistDetails/${id}`} className={` w-[200px] rounded-md ${styles.glass}`}>
      <div className="">
        <div className="relative p-3">
          <Image
            src={imageUrl}
            height={400}
            width={400}
            alt=""
            className="h-[180px] rounded-full w-full overflow-hidden object-cover"
          />
          {/* <div className="absolute  top-3 right-3 m-2 rounded-full bg-gray-600 px-2 text-sm text-white">
            {formed}
          </div> */}
          {/* <div
            style={{ borderLeft: `5px solid #${borderColor}` }}
            className="absolute bottom-4 mb-3"
          >
            <p className="ml-3 text-lg  font-medium">{genre}</p>
          </div> */}
        </div>
      </div>
      <div className="px-2 pb-4">
        <h2
          className={`${
            artistName?.length > 10 && "truncate"
          } w-[180px] pb-1 text-lg font-medium `}
        >
          {artistName}
        </h2>

        <p className={`text-gray-400 capitalize`}>
          artist
        </p>
      </div>
    </Link>
  );
};

export default ArtistCard;
