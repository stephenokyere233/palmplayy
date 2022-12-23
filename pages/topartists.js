import React from "react";

// import { ArtistCard, Error, Loader } from "../components";
import Hero from "../components/hero/Hero";
import { useGetTopChartsQuery } from "../store/services/shazamCore";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  //   if (isFetching) return <Loader title="Loading artists..." />;

  //   if (error) return <Error />;

  return (
    <>
      {/* <div className="flex flex-wrap justify-center gap-8 sm:justify-start"> */}
      <Hero discover={data} isFetching={isFetching} error={error} />
    </>
    // </div>
  );
};

export default TopArtists;
