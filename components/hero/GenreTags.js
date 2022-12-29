import React, { useEffect } from "react";
import Tag from "./Tag";
import { genres } from "../../constants/genres";

const GenreTags = ({ show }) => {
  return (
    <div
      className={`my-2 flex flex-wrap justify-center gap-2 font-medium ${show && "hidden"}`}
    >
      {genres.map((genre) => {
        return (
          <Tag key={genre.toString()} name={genre.title} value={genre.value} />
        );
      })}
    </div>
  );
};

export default GenreTags;
