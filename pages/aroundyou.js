import axios from "axios";
import React, { useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import { useGetSongsByCountryQuery } from "../store/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCountry = async () => {
      let response;
      try {
        setLoading(true);
        response = await axios.get(
          `https://geo.ipify.org/api/v2/country?apiKey=${process.env.NEXT_PUBLIC_GET_LOCATION}`,
        );
        console.log(response);
        localStorage.setItem("location", response?.data?.location.country);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
        const location = localStorage.getItem("location");
        setCountry(location);
      }
    };
    return getCountry;
  }, [country]);

  return (
    <div>
      <Hero isFetching={isFetching} error={error} discover={data} />
    </div>
  );
};

export default AroundYou;
