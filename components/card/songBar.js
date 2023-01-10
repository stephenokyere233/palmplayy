import Image from "next/image";
import { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { AppContext } from "../../context/context";
import { playPause, setActiveSong } from "../../store/features/playerSlice";
import PlayPause from "../controls/PlayPause";

const SongBar = ({
  song,
  i,
  artistId,
  isPlaying,
  activeSong,
  data,
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
  const [showPlayIcon, setShowPlayIcon] = useState(true);

  const { setShowControl, showControl } = useContext(AppContext);
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

  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-30  bg-opacity-20 bg-gray-300 `;
  return (
    <div
      onClick={() => setShowControl(true)}
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
        <h2 className="text-xl font-semibold tracking-wide">
          {matchBrackets(song?.title)}
        </h2>
        <p className="text-gray-400">{song?.subtitle}</p>
      </div>
      <div onClick={() => setShowControl(true)}>
        <PlayPause
          showIcon={showPlayIcon}
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
        />
      </div>
    </div>
  );
};

export default SongBar;
