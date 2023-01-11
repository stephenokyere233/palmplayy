import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import User from "../user/User";
import { useRouter } from "next/router";

const Searchbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    router.push(`/search/${searchTerm}`);
  };

  const styles = {
    wrapper: "sticky top-0 flex h-20 w-full items-center justify-between  px-4",
    input: "h-10 w-[60vw] bg-transparent indent-2 outline-none",
    searchIcon: "text-xl text-white ",
    search: "flex items-center",
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="search-field" className="sr-only">
          Search all files
        </label>
        <div className={styles.search}>
          <FaSearch aria-hidden="true" className={styles.searchIcon} />
          <input
            type="search"
            autoComplete="off"
            name="search-field"
            value={searchTerm}
            id="search-field"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className={styles.input}
          />
        </div>
      </form>
      <User />
    </div>
  );
};

export default Searchbar;
