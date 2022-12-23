import React from "react";
import Hero from "../components/hero/Hero";
import { useGetTopChartsQuery } from "../store/services/shazamCore";

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  return (
    <>
      <Hero discover={data} error={error} isFetching={isFetching} />
    </>
  );
};

export default TopCharts;
