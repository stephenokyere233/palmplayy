import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showPlay, setShowPlay] = useState(true);
  const [showControls, setShowControl] = useState(false);
  const [playPause, setPlayPause] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showGenre, setShowGenre] = useState(true);
  const [genreQuery, setGenreQuery] = useState("WORLDWIDE");
  const [searchTerm, setSearchTerm] = useState("");

  const changeSearchTerm = (value) => {
    setSearchTerm(value);
    console.log(value);
  };

  const handlePlay = () => {
    // console.log(event.target)
    // event.target
    setPlayPause(true);
    // setPlayPause(prev=>~prev);
    console.log("palying");
  };
  const handlePause = () => {
    // setPlayPause((prev) => ~prev);
    setPlayPause(false);
    console.log("paused");
  };
  const [controlData, setControlData] = useState({
    image: "",
    title: "",
    description: "",
    audio: "",
    play: handlePause,
    pause: handlePlay,
  });

  const [onTopArtistsPage, setOnTopArtistsPage] = useState(false);

  const hideController = () => {
    setShowControl(true);
  };

  const isOnTopArtistsPage = () => {
    setOnTopArtistsPage(true);
    console.log("is on artist page test");
  };

  const changeControls = (value) => {
    setControlData((prev) => ({
      ...prev,
      image: value.image,
      title: value.title,
      description: value.description,
      audio: value.audio,
    }));
  };

  const hideGenreTags = () => {
    setShowGenre((prev) => !prev);
  };

  const newGenreQuery = (value) => {
    setGenreQuery(value);
    console.log(value);
  };

  const hoverEffect = () => {
    console.log("showingpaly");
    setShowPlay(false);
  };
  const showHover = () => {
    setShowPlay(true);
  };

  // const pause = () => {
  //   setPlay((prev) => !prev);
  // };
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        showPlay,
        setShowPlay,
        handlePause,
        handlePlay,
        playPause,
        setPlayPause,
        // play,
        // setPlay,
        mobileMenuOpen,
        setMobileMenuOpen,
        toggleMobileMenu,
        hoverEffect,
        showHover,
        // pause,
        setShowGenre,
        showGenre,
        hideGenreTags,
        genreQuery,
        setGenreQuery,
        newGenreQuery,
        controlData,
        setControlData,
        changeControls,
        isOnTopArtistsPage,
        setOnTopArtistsPage,
        onTopArtistsPage,
        showControls,
        setShowControl,
        hideController,
        searchTerm,
        setSearchTerm,
        changeSearchTerm
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
