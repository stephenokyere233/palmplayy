import React, { useContext } from "react";
import { AppContext } from "../../context/context";

const Tag = ({ name, value }) => {
  const { newGenreQuery, hideGenreTags } = useContext(AppContext);

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
