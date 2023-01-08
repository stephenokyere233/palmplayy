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

  return (
    <div className="sticky top-0 flex h-20 w-full items-center justify-between  px-4">
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="search-field" className="sr-only">
          Search all files
        </label>
        <div className=" flex items-center">
          <FaSearch aria-hidden="true" className="text-xl text-white " />{" "}
          <input
            type="search"
            autoComplete="off"
            name="search-field"
            value={searchTerm}
            id="search-field"
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search"
            className="h-10 w-[60vw] bg-transparent indent-2 outline-none"
          />
        </div>
      </form>

      <User />
    </div>
  );
};

export default Searchbar;
