import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";

const Tag = ({ name, value }) => {
  const { genreQuery, setGenreQuery, newGenreQuery } = useContext(AppContext);

  const setValue = () => {
    newGenreQuery(value);
  };
//   useEffect(() => {
//     setValue();
//   }, [value]);
  return (
    <button className="rounded-md border p-2" onClick={setValue}>
      {name}
    </button>
  );
};

export default Tag;
