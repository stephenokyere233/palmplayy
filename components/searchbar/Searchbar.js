import React, { useContext, useState } from "react";
import Image from "next/image";
import { FaSearch, FaTwitter } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";
// import DropDown from "./DropDown";
import { FaUser, FaDownload } from "react-icons/fa";
import Link from "next/link";
// import { useRouter } from "next/router";

const Searchbar = () => {
  const { data: session } = useSession();

  const [options, setOptions] = useState(true);
  const toggle = () => {
    setOptions((prev) => !prev);
  };

  return (
    <div className="sticky top-0 flex h-20 w-full items-center justify-between  px-4">
      <div className=" flex items-center">
        <FaSearch className="text-xl text-white " />{" "}
        <input
          type="search"
          placeholder="Search"
          className="h-10 w-[60vw] bg-transparent indent-2 outline-none"
        />
      </div>

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
        <nav>
          <Link href={"/profile"}>
            <p className="flex cursor-pointer items-center border-b-2 border-gray-700 px-6 py-2">
              <FaUser className="m-2" /> Profile
            </p>
          </Link>
          <p
            className="flex cursor-pointer items-center  px-6 py-2"
            onClick={() => (options && setOptions(false), signOut())}
          >
            <FaDownload className="m-2" />
            Sign Out
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Searchbar;
