import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-[75vh] flex-col items-center justify-center">
      <Image
        className=""
        src={"/assets/error.png"}
        alt="error"
        width={380}
        height={200}
        priority
      />
      <p className="text-xl font-semibold tracking-wider">
        Go to
        <Link className="text-green-400" href={"/"}>
          {" "}
          Discover Page
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
