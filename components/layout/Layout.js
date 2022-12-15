import React from "react";
import Controller from "../controls/Controller";
import Searchbar from "../searchbar/Searchbar";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  const styles = {
    container:
      "grid h-screen w-full scrollbar-hide overflow-hidden grid-cols-4 lg:grid-cols-5 bg-[#5564DF] text-white",
    glass:
      "bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60  bg-[#5564DF] ",
  };
  const background = {
    backgroundColor: `#242222`,
    backgroundImage: `linear-gradient(225deg, #242222 0%, #784BA0 33%, #11476f 66%, #0e0d0d 100%)`,
  };

  return (
    <div style={background} className={styles.container}>
      <Sidebar />
      <div className="col-span-5 flex grid-flow-col  flex-col md:col-span-3 lg:col-span-4 ">
        <Searchbar />
        <div className="h-[88vh] overflow-y-scroll pb-20 scrollbar-hide">
          {children}
        </div>
      </div>
      <Controller />
    </div>
  );
};

export default Layout;
