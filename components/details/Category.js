import React from "react";

const Category = ({ children, name }) => {
  return (
    <div className="flex flex-col overflow-hidden py-2 ">
      <h2 className="font-medium px-6 py-2 text-2xl capitalize">{name}</h2>
      <div className="overflow-y-hidden overflow-x-scroll scrollbar-hide">
        {children}
      </div>
    </div>
  );
};

export default Category;
