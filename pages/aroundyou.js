import axios from "axios";
import React, { useState, useEffect } from "react";
import Hero from "../components/hero/Hero";
import { useGetSongsByCountryQuery } from "../store/services/shazamCore";

const AroundYou = () => {
  const [country, setCountry] = useState("");
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);
  const [loading, setLoading] = useState(isFetching);

  useEffect(() => {
    // axios
    //   .get(
    //     `https://geo.ipify.org/api/v2/country?apiKey=at_w3FTstwuqa6A9UBxcyaWJSM6zkxml`,
    //   )
    //   .then((res) => setCountry(res?.data?.location.country))
    //   .catch((err) => console.log(err))
    //   .finally(() => setLoading(false));

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

    // return () => {
    //   second
    // }
  }, [country]);

  return (
    <div>
      <Hero isFetching={isFetching} error={error} discover={data} />
    </div>
  );
};

export default AroundYou;
