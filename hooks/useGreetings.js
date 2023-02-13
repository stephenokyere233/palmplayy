/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

const useGreetings = () => {
  const [greeting, setGreeting] = useState();
  const date = new Date();
  const hours = date.getHours();
  useEffect(() => {
    if (hours < 12) {
      setGreeting(`good morning`);
    } else if (hours >= 12 && hours <= 16) {
      setGreeting("good afternoon");
    } else if (hours > 16) {
      setGreeting("good evening");
    }
  }, [hours]);

  return { greeting };
};

export default useGreetings;
