import React, { useEffect, useState } from "react";

import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showPlay, setShowPlay] = useState(true);
  const [play, setPlay] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showGenre, setShowGenre] = useState(true);
  const [genreQuery, setGenreQuery] = useState("WORLDWIDE");

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
  const pause = () => {
    setPlay((prev) => !prev);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        showPlay,
        setShowPlay,
        play,
        setPlay,
        mobileMenuOpen,
        setMobileMenuOpen,
        toggleMobileMenu,
        hoverEffect,
        showHover,
        pause,
        setShowGenre,
        showGenre,
        hideGenreTags,
        genreQuery,
        setGenreQuery,
        newGenreQuery,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
