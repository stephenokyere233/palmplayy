import React, { useContext, useEffect } from "react";
import { AppContext } from "../../context/context";

const Tag = ({ name, value }) => {
  const { genreQuery, setGenreQuery, newGenreQuery, hideGenreTags } =
    useContext(AppContext);

  const setValue = () => {
    newGenreQuery(value);
    hideGenreTags();
  };
  return (
    <button className="rounded-md border p-2" onClick={setValue}>
      {name}
    </button>
  );
};

export default Tag;
