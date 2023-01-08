import Hero from "../components/hero/Hero";
import { useGetTopChartsQuery } from "../store/services/shazamCore";

const TopArtists = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();

  return (
    <>
      <Hero discover={data} isFetching={isFetching} error={error} />
    </>
  );
};

export default TopArtists;
