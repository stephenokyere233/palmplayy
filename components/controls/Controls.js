import React from "react";
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from "react-icons/bs";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
const Controls = ({ play }) => {
  return (
    <div className="flex items-center justify-center border text-2xl">
      <BsArrowRepeat />
      <MdSkipPrevious className="text-4xl" />
      {play ? (
        <BsFillPauseFill className="text-4xl" />
      ) : (
        <BsFillPlayFill className="text-4xl" />
      )}
      <MdSkipNext className="text-4xl" />
      <BsShuffle />
    </div>
  );
};

export default Controls;
