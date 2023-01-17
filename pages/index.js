import Head from "next/head";
import React, { useContext } from "react";
import Hero from "../components/hero/Hero";
import { AppContext } from "../context/context";
import { useGetSongsByGenreQuery } from "../store/services/shazamCore";

export default function Home() {
  const { genreQuery } = useContext(AppContext);

  const { data, isFetching, error } = useGetSongsByGenreQuery(genreQuery);
  return (
    <>
      <Hero discover={data} isFetching={isFetching} error={error} />
    </>
  );
}
