import { useRouter } from "next/router";
import React, { useContext } from "react";
// import { AppContext } from "../../context/context";
import { useGetSongRelatedQuery } from "../../store/services/shazamCore";
import Card from "../card/Card";
import SongBar from "../card/songBar";

const RelatedSongs = ({data}) => {
  // const router = useRouter();
  // const query = router.query;
  // const songId = query.songdetails;
  // // const { songId } = useContext(AppContext);
  // const { data, isFetching, error } = useGetSongRelatedQuery(songId);
  // if (isFetching) return <div>Loading...</div>;
  // if (error) return <div>No related tracks</div>;
  // console.log(query);
  // console.log(data);

  return (
    <div className="flex w-full  flex-wrap items-center justify-center gap-6 pb-6">
      {data.map((track) => {
        const image = track?.images?.coverarthq;
        const { title, subtitle } = track;
        <SongBar src={image} title={track.title} subtitle={track.subtitle} />;
      })}
      {/* <div>found related tracks</div> */}
    </div>
  );
};

export default RelatedSongs;
