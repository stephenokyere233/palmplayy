import Head from "next/head";
import React from "react";
import Hero from "../components/hero/Hero";
import Load from "../components/loader/Load";
import { useGetSongsByGenreQuery} from "../store/services/shazamCore";

export default function Home() {
  const { data, isFetching, error } = useGetSongsByGenreQuery("WORLDWIDE");

  return (
    <>
      <Hero discover={data} isFetching={isFetching} error={error}/>
    </>
  );
}
