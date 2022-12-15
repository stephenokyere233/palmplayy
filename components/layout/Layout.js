import React from "react";
import Searchbar from "../searchbar/Searchbar";
import Sidebar from "../sidebar/Sidebar";

const Layout = ({ children }) => {
  const styles = {
    container:
      "grid h-screen w-full scrollbar-hide overflow-hidden grid-cols-4 lg:grid-cols-5 bg-[#5564DF] text-white",
    glass:
      "bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60  bg-[#5564DF] ",
  };

  return (
    <div className={styles.container}>
      <Sidebar />
      <div className="col-span-5 md:col-span-3 lg:col-span-4  flex grid-flow-col flex-col ">
        <Searchbar />
        <div className=" border-red-500 flex-1 scroll-mb-[3em] overflow-y-scroll border">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
