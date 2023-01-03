import React from "react";
import Card from "../card/Card";
import SongBar from "../card/songBar";

const RelatedSongs = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-6 pb-6">
      <SongBar />
      <SongBar />
      <SongBar />
      <SongBar />
      <SongBar />
      <SongBar />
      <SongBar />
    </div>
  );
};

export default RelatedSongs;
