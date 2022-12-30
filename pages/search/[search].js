import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useGetSongsBySearchQuery } from "../../store/services/shazamCore";
import { useRouter } from "next/router";
import Card from "../../components/card/Card";
import HeroLayout from "../../components/layout/HeroLayout";

const Search = () => {
  const router = useRouter();
  const query = router.query;
  const searchTerm = query.search;

  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);
  const songs = data?.tracks?.hits;
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isFetching) return <div>{`Searching ${searchTerm}...`}</div>;
  if (error) return <div>Song not found</div>;

  return (
    <HeroLayout error={error} title={`Search results for ${searchTerm} `}>
      {songs.map((song, i) => {
        const { title, subtitle } = song.track;
        console.log(song.track);
        return (
          <Card
            title={title}
            coverart={song.images?.coverart}
            subtitle={subtitle}
            key={song.key}
            song={song.track}
            isPlaying={isPlaying}
            activeSong={activeSong}
            // data={data}
            i={i}
          />
        );
      })}
    </HeroLayout>
  );
};

export default Search;
