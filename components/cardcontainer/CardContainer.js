import React from "react";
import Card from "../card/Card";
import Load from "../loader/Load";
import { selectGenreListId } from "../../store/features/playerSlice";
import { useDispatch, useSelector } from "react-redux";

const CardContainer = ({ data }) => {
  const dispatch = useDispatch();
  // const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  return (
    <div className={styles.wrapper}>
      {data.map((song, i) => {
        const { title, subtitle, url } = song;
        return (
          // <>
          <Card
            // onClick={() => check()}
            // key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
            key={url}
            title={title}
            subtitle={subtitle}
            // audio={card.hub?.actions[1]?.uri}
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
