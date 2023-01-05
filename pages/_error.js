import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.wrapper}>
      <Image
        className=""
        src={"/assets/error.png"}
        alt="error"
        width={380}
        height={200}
        priority
      />
      <p className={styles.redirect}>
        Go to
        <Link className="text-green-400" href={"/"}>
          Discover Page
        </Link>
      </p>
    </div>
  );
};

const styles = {
  wrapper: `flex h-[75vh] flex-col items-center justify-center`,
  redirect: `text-xl font-semibold tracking-wider`,
};

export default NotFound;
