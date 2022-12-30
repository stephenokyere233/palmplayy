import React, { useContext, useState } from "react";
import Image from "next/image";
import { FaSearch, FaTwitter } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
// import DropDown from "./DropDown";
import { FaUser, FaDownload } from "react-icons/fa";
import Link from "next/link";
import User from "../user/User";
// import { useRouter } from "next/router";
// import { useNavigate } from "re";
import { useRouter } from "next/router";
import { AppContext } from "../../context/context";

const Searchbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  // const { searchTerm, setSearchTerm, changeSearchTerm } =
  //   useContext(AppContext);

    const [searchTerm,setSearchTerm]=useState("")
    console.log(searchTerm)

  const [options, setOptions] = useState(true);
  const toggle = () => {
    setOptions((prev) => !prev);
  };
  // const [searchTerm, setSearchTerm] = useState("");
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

      {session ? (
        <Image
          onClick={toggle}
          className="flex h-14 w-14 items-center justify-center rounded-full object-contain"
          src={session.user.image}
          width={160}
          height={160}
          alt="avatar"
          priority
        />
      ) : (
        <button
          onClick={() => signIn()}
          className="w-20 rounded-2xl border-2 p-2 "
        >
          Sign in
        </button>
      )}
      <div
        className={`absolute right-0 top-20 ${
          options && "hidden"
        } mx-2 rounded-lg bg-[#111221]`}
      >
        <User />
      </div>
    </div>
  );
};

export default Searchbar;
