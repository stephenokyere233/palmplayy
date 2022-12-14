import React from "react";
import { FaPlay } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className=" hidden bg-[#111221] lg:block">
      <h2 className="flex h-20 items-center justify-center text-2xl  font-semibold">
        <FaPlay className="m-2  text-3xl" />
        PALMPLAYY
      </h2>
    </div>
  );
};

export default Sidebar;
