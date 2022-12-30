import React, { useContext } from "react";
import Hero from "../../components/hero/Hero";
import { useSelector } from "react-redux";
import { useGetSongsBySearchQuery } from "../../store/services/shazamCore";
import { useRouter } from "next/router";
import Card from "../../components/card/Card";
import { AppContext } from "../../context/context";
import HeroLayout from "../../components/layout/HeroLayout";

const Search = () => {
  const router = useRouter();
  //   const searchTerm= router.query;
  const { searchTerm, setSearchTerm, changeSearchTerm } =
    useContext(AppContext);
  console.log(`search is ${searchTerm}`);
  //   const query = router.query;
  //   const queryParam = query.myParam;
  //   console.log(queryParam);
  const { data, isFetching, error } = useGetSongsBySearchQuery(searchTerm);
  const songs = data?.tracks?.hits;
  console.log(songs);
// console.log(data)
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  // console.log(data);
  if (isFetching) return <div>{`Searching ${searchTerm}...`}</div>;
  if (error) return <div>Song not found</div>;

  return (
    <HeroLayout error={error} title={`Search results for ${searchTerm} `}>
      {songs.map((song, i) => {
        const { title, subtitle } = song.track;
        console.log(song.track)
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
      {/* <Hero error={error} isFetching={isFetching} discover={songs}/> */}
    </HeroLayout>
  );
};

export default Search;
