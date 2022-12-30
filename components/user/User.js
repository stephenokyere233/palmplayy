import React from "react";
import Link from "next/link";
import { FaDownload, FaUser } from "react-icons/fa";

const User = () => {
  return (
    <div>
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
    </div>
  );
};

export default User;
