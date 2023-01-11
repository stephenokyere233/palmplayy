import React from "react";
import Card from "../card/Card";
import { useSelector } from "react-redux";

const CardContainer = ({ data }) => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  return (
    <div className={styles.wrapper}>
      {data.map((song, i) => {
        const { title, subtitle, url } = song;
        return (
          <Card
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
            key={url}
            title={title}
            subtitle={subtitle}
            coverart={song.images?.coverart}
          />
        );
      })}
    </div>
  );
};
const styles = {
  wrapper: `grid grid-cols-2 place-items-center gap-6 px-2 md:grid-cols-3  md:gap-6 lg:grid-cols-4 lg:gap-10`,
};

export default CardContainer;
