import React, { useState } from "react";
import Link from "next/link";
import { FaDownload, FaUser } from "react-icons/fa";
import { useSession, signIn, signOut } from "next-auth/react";

import Image from "next/image";

const User = () => {
  const [options, setOptions] = useState(true);
  const { data: session } = useSession();
  const toggle = () => {
    setOptions((prev) => !prev);
  };

  return (
    <>
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
        className={`absolute right-0 z-40 top-20 ${
          options && "hidden"
        } mx-2 rounded-lg bg-[#111221]`}
      >
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
    </>
  );
};

export default User;
