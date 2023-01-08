import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../../store/features/playerSlice";
import PlayPause from "../controls/PlayPause";

const SongBar = ({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  data
  // handlePauseClick,
  // handlePlayClick,
}) => {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  const [showPlay, setShowPlay] = useState(true);
  const [play, setPlay] = useState(false);
  const hoverEffect = () => {
    console.log("showingpaly");
    setShowPlay(false);
  };
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-30  bg-opacity-20 bg-gray-300 `;
  return (
    <div
      className={`${glass} mb-6 flex h-20 w-full items-center rounded-lg px-2`}
    >
      <Image
        alt=""
        src={
          song?.images?.coverart ? song?.images?.coverart : "/assets/cover.jpg"
        }
        width={70}
        height={70}
        className="mr-2 rounded-full object-contain"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold tracking-wide">{song?.title}</h2>
        <p className="text-gray-400">{song?.subtitle}</p>
      </div>
      <div className="">
        <PlayPause
          showPlay={showPlay}
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
        {/* <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        /> */}
      </div>
    </div>
  );
};

export default SongBar;
