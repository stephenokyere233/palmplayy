import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import SeekBar from "./SeekBar";
import VolumeBar from "./Volume";
import Player from "./Player";
import TrackDetails from "./TrackDetails";
import Controls from "./Controls";
import { AppContext } from "../../context/context";
import {
  nextSong,
  prevSong,
  playPause,
} from "../../store/features/playerSlice";


const Controller = () => {
  const { showControls } = useContext(AppContext);
  const { activeSong, currentSongs, currentIndex, isActive, isPlaying } =
    useSelector((state) => state.player);
  const [duration, setDuration] = useState(0);
  const [seekTime, setSeekTime] = useState(0);
  const [appTime, setAppTime] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const [repeat, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentSongs?.length) dispatch(playPause(true));
  }, []);

  const handlePlayPause = () => {
    if (!isActive) return;

    if (isPlaying) {
      dispatch(playPause(false));
    } else {
      dispatch(playPause(true));
    }
  };

  const handleNextSong = () => {
    dispatch(playPause(true));

    if (!shuffle) {
      dispatch(nextSong((currentIndex + 1) % currentSongs?.length));
    } else {
      dispatch(nextSong(Math.floor(Math.random() * currentSongs?.length)));
    }
  };

  const handlePrevSong = () => {
    if (currentIndex === 0) {
      dispatch(prevSong(currentSongs.length - 1));
    } else if (shuffle) {
      dispatch(prevSong(Math.floor(Math.random() * currentSongs.length)));
    } else {
      dispatch(prevSong(currentIndex - 1));
    }
  };
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-30 bg-[#251749] bg-gray-300 `;
  const styles = {
    wrapper: ` ${
      showControls ? "block" : "hidden"
    } animate-slideUp center fixed bottom-0 z-10 grid grid-cols-2 lg:grid-cols-3 lg:gap-4 h-20  w-full justify-between border-t border-gray-700 bg-[#251749] px-2 lg:px-6 py-2`,
    controls: "flex flex-1 flex-col items-center justify-center",
  };

  return (
    <div className={[glass, styles.wrapper]}>
      <TrackDetails
        isPlaying={isPlaying}
        isActive={isActive}
        activeSong={activeSong}
      />
      <div className={styles.controls}>
        <Controls
          isPlaying={isPlaying}
          isActive={isActive}
          repeat={repeat}
          setRepeat={setRepeat}
          shuffle={shuffle}
          setShuffle={setShuffle}
          currentSongs={currentSongs}
          handlePlayPause={handlePlayPause}
          handlePrevSong={handlePrevSong}
          handleNextSong={handleNextSong}
        />
        <SeekBar
          value={appTime}
          min="0"
          max={duration}
          onInput={(event) => setSeekTime(event.target.value)}
          setSeekTime={setSeekTime}
          appTime={appTime}
        />
        <Player
          activeSong={activeSong}
          volume={volume}
          isPlaying={isPlaying}
          seekTime={seekTime}
          repeat={repeat}
          currentIndex={currentIndex}
          onEnded={handleNextSong}
          onTimeUpdate={(event) => setAppTime(event.target.currentTime)}
          onLoadedData={(event) => setDuration(event.target.duration)}
        />
      </div>
      <VolumeBar
        value={volume}
        min="0"
        max="1"
        onChange={(event) => setVolume(event.target.value)}
        setVolume={setVolume}
      />
    </div>
  );
};

export default Controller;
