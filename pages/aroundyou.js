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
      try {
        setLoading(true);
        const res = await axios.get(
          `https://geo.ipify.org/api/v2/country?apiKey=at_w3FTstwuqa6A9UBxcyaWJSM6zkxml`,
        );
        setCountry(res?.data?.location.country);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
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
