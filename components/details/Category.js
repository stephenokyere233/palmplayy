import React, { useState } from "react";
import DetailCard from "./DetailCard";

const Category = ({ children, name }) => {
  const [isLong, setisLong] = useState(false);
  const truncate = (str) => {
    if (str.length > 12) {
      setisLong(true);
    } else {
      setisLong(false);
    }
  };
  return (
    <div className="flex flex-col overflow-hidden py-2 ">
      <h2 className="text-medium px-4 text-2xl capitalize">{name}</h2>
      <div className="overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
};

export default Category;
