import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/context";
import Controller from "../controls/Controller";
import Searchbar from "../searchbar/Searchbar";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  const router = useRouter();
  const { mobileMenuOpen, setMobileMenuOpen, toggleMobileMenu,isOnTopArtistsPage } =
    useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [router, setMobileMenuOpen]);

    // const router = useRouter();
    router.pathname === "/topartists" && isOnTopArtistsPage();

  return (
    <div className={styles.container}>
      <Sidebar mobileMenuOpen={mobileMenuOpen} onClick={toggleMobileMenu} />
      <div className={styles.heroWrap}>
        <Searchbar />
        <div className={styles.childrenCon}>{children}</div>
      </div>
      <Controller />
    </div>
  );
};
const styles = {
  container:
    "grid h-screen w-full select-none scrollbar-hide overflow-hidden grid-cols-5 bg-[#4A0D67] text-white",
  glass:
    "bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60  bg-[#5564DF] ",
  heroWrap: "col-span-5  flex grid-flow-col flex-col lg:col-span-4 ",
  childrenCon: `h-[88vh] overflow-y-scroll pb-20 scrollbar-hide`,
};
// const background = {
//   backgroundColor: `#242222`,
//   backgroundImage: `linear-gradient(225deg, #242222 0%, #784BA0 33%, #0983da 66%, #0e0d0d 100%)`,
// };

export default Layout;
