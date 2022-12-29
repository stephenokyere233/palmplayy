import React, { useEffect, useState } from "react";

import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [showPlay, setShowPlay] = useState(true);
  const [play, setPlay] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
