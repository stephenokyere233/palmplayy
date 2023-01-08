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
          className={styles.image}
          src={session.user.image}
          width={160}
          height={160}
          alt="avatar"
          priority
        />
      ) : (
        <button onClick={() => signIn()} className={styles.signInBtn}>
          Sign in
        </button>
      )}
      <div
        className={`absolute right-0 top-20 z-40 ${
          options && "hidden"
        } mx-2 rounded-lg bg-[#111221]`}
      >
        <Link href={"/profile"}>
          <p className={styles.profileBtn}>
            <FaUser className="m-2" /> Profile
          </p>
        </Link>
        <p
          className={styles.signOutBtn}
          onClick={() => (options && setOptions(false), signOut())}
        >
          <FaDownload className="m-2" />
          Sign Out
        </p>
      </div>
    </>
  );
};
const styles = {
  image:
    "flex h-14 w-14 items-center justify-center rounded-full object-contain",
  signInBtn: "w-20 rounded-2xl border-2 p-2 ",
  profileBtn:
    "flex cursor-pointer items-center border-b-2 border-gray-700 px-6 py-2",
  signOutBtn: "flex cursor-pointer items-center  px-6 py-2",
};

export default User;
