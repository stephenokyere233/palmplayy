import Head from "next/head";
import React from "react";
import Hero from "../components/hero/Hero";
import Load from "../components/loader/Load";
import { useGetTopChartsQuery } from "../store/services/shazamCore";

export default function Home() {
  const { data, isFetching, error } = useGetTopChartsQuery();

  return (
    <div>
      <Hero discover={data} isFetching={isFetching} error={error}/>
    </div>
  );
}
