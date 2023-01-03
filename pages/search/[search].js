import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useGetSongsBySearchQuery } from "../../store/services/shazamCore";
import { useRouter } from "next/router";
import Card from "../../components/card/Card";
import HeroLayout from "../../components/layout/HeroLayout";
import Load from "../../components/loader/Load";
import NotFound from "../_error";

const Search = () => {
  const router = useRouter();
  const query = router.query;
  const searchTerm = query.search;

  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);
  const songs = data?.tracks?.hits;
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isFetching) return <Load />;
  if (error) return <NotFound />;

  return (
    <HeroLayout error={error} title={`Search results for ${searchTerm} `}>
      {songs.map((song, i) => {
        const { title, subtitle } = song.track;
        return (
          <Card
            title={title}
            coverart={song.images?.coverart}
            subtitle={subtitle}
            key={song.url}
            song={song.track}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        );
      })}
    </HeroLayout>
  );
};

export default Search;
