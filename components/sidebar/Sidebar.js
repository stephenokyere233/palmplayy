import React from "react";
import { FaPlay } from "react-icons/fa";
import { genres } from "../../constants/genres";
import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineHashtag,
  HiOutlineUserGroup,
} from "react-icons/hi";

const Sidebar = () => {
  console.log(genres);
  const links = [
    { name: "Discover", to: "/", icon: HiOutlineHome },
    { name: "Around You", to: "/around-you", icon: HiOutlinePhotograph },
    { name: "Top Artists", to: "/top-artists", icon: HiOutlineUserGroup },
    { name: "Top Charts", to: "/top-charts", icon: HiOutlineHashtag },
  ];
  return (
    <div className="hidden h-[100vh] overflow-y-scroll bg-[#251749] scrollbar-hide md:block">
      <h2 className="flex h-20 items-center justify-center text-2xl  font-semibold">
        <FaPlay className="m-2  text-3xl" />
        PALMPLAYY
      </h2>
      <nav className="px-8 pb-20">
        <div>
          <span className={styles.title}>title</span>
          <section>
            {links.map((genre) => (
              <Link
                key={genre.toString}
                className={styles.link}
                href={genre.to}
              >
                <genre.icon className="mr-2" />
                <p>{genre.name}</p>
              </Link>
            ))}
          </section>
          <section>
            <span className={styles.title}>title</span>
            {genres.map((genre) => (
              <Link
                key={genre.toString()}
                className={styles.link}
                href={genre.value}
              >
                <genre.icon className="mr-2" />
                <p>{genre.title}</p>
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
  // navLink: "border py-2 text-lg",
  link: "flex py-2 items-center text-lg",
};

export default Sidebar;
