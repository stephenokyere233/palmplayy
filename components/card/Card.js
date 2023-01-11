import React, { useContext, useState } from "react";
import Image from "next/image";
import PlayPause from "../controls/PlayPause";
import { AppContext } from "../../context/context";
import { useRouter } from "next/router";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../../store/features/playerSlice";

const Card = ({ song, isPlaying, activeSong, data, i }) => {
  const {
    setShowControl,
    isOnTopArtistsPage,
    onTopArtistsPage,
  } = useContext(AppContext);
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
    setShowControl(true);
  };
  const [showPlay, setShowPlay] = useState(false);
  const showPlayIcon = () => {
    setShowPlay(true);
  };
  const hidePlayIcon = () => {
    setShowPlay(false);
  };

  const router = useRouter();
  const styles = {
    glass: `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-10 hover:bg-white bg-opacity-20 bg-black`,
    textArea: `w-full overflow-hidden items-start justify-start p-2 `,
    image: ` h-[170px] w-full  rounded-lg bg-cover`,
    playOverlay: `inset-0 absolute animate-slideUp flex h-[70%] w-full items-end justify-end  p-2`,

    card: `flex w-[180px]  ${
      !showPlay && "bg-black"
    } flex-col items-center justify-center rounded-lg p-3 md:w-[200px] `,
  };

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

  return (
    <>
      <div
        onMouseOver={showPlayIcon}
        onMouseLeave={hidePlayIcon}
        onClick={
          router.pathname === "/topartists"
            ? () => router.push(`/artistDetails/${song?.artists[0]?.adamid}`)
            : () => console.log("none")
        }
        className={[styles.glass, styles.card]}
      >
        <div>
          <div
            className={`${router.pathname === "/topartists" && "hidden"} ${
              styles.playOverlay
            }`}
          >
            <PlayPause
              showIcon={showPlay}
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          </div>
          <Image
            src={
              song.images?.coverart
                ? song.images?.coverart
                : "/assets/cover.jpg"
            }
            width={200}
            height={200}
            alt="song_img"
            priority
            className={styles.image}
          />
        </div>
        <section className={styles.textArea}>
          <h2
            className={`font-semibold flex flex-nowrap ${song?.title.length>10?"truncate":""} ${
              router.pathname === "/topartists" && "hidden"
            } `}
          >
            <Link href={`/songDetails/${song?.key}`}>
              {matchBrackets(song.title)}
            </Link>
          </h2>
          <p
            className={`text-gray-400 ${
              song.subtitle.length > 12 && "truncate"
            } ${
              router.pathname === "/topartists" &&
              "cursor-pointer text-lg font-bold text-white uppercase"
            } `}
          >
            {song.subtitle}
          </p>
        </section>
      </div>
    </>
  );
};

export default Card;
