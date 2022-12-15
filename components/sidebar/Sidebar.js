import React from "react";
import { FaPlay } from "react-icons/fa";
import { genres } from "../../constants/genres";
import Link from "next/link";

const Sidebar = () => {
  console.log(genres);
  return (
    <div className=" hidden overflow-y-scroll bg-[#111221] md:block">
      <h2 className="flex h-20 items-center justify-center text-2xl  font-semibold">
        <FaPlay className="m-2  text-3xl" />
        PALMPLAYY
      </h2>
      <nav>
        <div>
          <span className={styles.title}>title</span>
          <section>
            <Link href={"/discover"}>
              <p>Discover</p>
            </Link>
            <Link href={"/discover"}>
              <p>around you</p>
            </Link>{" "}
            <Link href={"/discover"}>
              <p>top artists</p>
            </Link>
            <Link href={"/discover"}>
              <p>top charts</p>
            </Link>
          </section>
          <section>
            <span className={styles.title}>title</span>
            {genres.map((genre) => (
              <Link key={genre.toString()} href={genre.value}>
                <p className="border">{genre.title}</p>
              </Link>
            ))}
          </section>
        </div>
      </nav>
    </div>
  );
};
const styles = {
  title: "uppercase text-gray-500 leading-10 tracking-widest",
  navLink: "border",
};

export default Sidebar;
