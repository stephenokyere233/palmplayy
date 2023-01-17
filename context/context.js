import React, { useState } from "react";

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
  const [songId, setSongId] = useState("");

  const changeSearchTerm = (value) => {
    setSearchTerm(value);
    console.log(value);
  };

  const changeSongId = (value) => {
    setSongId(value);
    console.log(value);
  };

  const [onTopArtistsPage, setOnTopArtistsPage] = useState(false);

  const hideController = () => {
    setShowControl(true);
  };

  const isOnTopArtistsPage = () => {
    setOnTopArtistsPage(true);
    console.log("is on artist page test");
  };

  const hideGenreTags = () => {
    setShowGenre((prev) => !prev);
  };

  const newGenreQuery = (value) => {
    setGenreQuery(value);
    console.log(value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider
      value={{
        showPlay,
        setShowPlay,
        playPause,
        setPlayPause,
        mobileMenuOpen,
        setMobileMenuOpen,
        toggleMobileMenu,
        setShowGenre,
        showGenre,
        hideGenreTags,
        genreQuery,
        setGenreQuery,
        newGenreQuery,
        isOnTopArtistsPage,
        setOnTopArtistsPage,
        onTopArtistsPage,
        showControls,
        setShowControl,
        hideController,
        searchTerm,
        setSearchTerm,
        changeSearchTerm,
        changeSongId,
        songId,
        setSongId,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
