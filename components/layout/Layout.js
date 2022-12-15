import React from "react";
import Searchbar from "../searchbar/Searchbar";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  const styles = {
    container:
      "grid min-h-screen w-screen grid-cols-4 lg:grid-cols-5 bg-[#5564DF] text-white",
    glass:
      "bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60  bg-[#5564DF] ",
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <Searchbar/>
      {children}
    </div>
  );
};

export default Layout;
