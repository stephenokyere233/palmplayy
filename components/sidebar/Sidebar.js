import React, { useState,useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { genres } from "../../constants/genres";
import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineHashtag,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { BsMusicNoteList } from "react-icons/bs";
import {FaTimes} from 'react-icons/fa'
// import { useRouter } from "next/router";


const Sidebar = ({mobileMenuOpen,onClick}) => {
  // const router = useRouter();

  // console.log(genres);
  // bg-[#5564DF]
  // bg-[#473198]
  const glass =
    // bg-[#473198]
    "bg-clip-padding backdrop-filter backdrop-blur-2xl  bg-opacity-20 bg-[#473198]  ";
  const links = [
    { name: "Discover", to: "/", icon: HiOutlineHome },
    { name: "Around You", to: "/aroundyou", icon: HiOutlinePhotograph },
    { name: "Top Artists", to: "/topartists", icon: HiOutlineUserGroup },
    { name: "Top Charts", to: "/topcharts", icon: HiOutlineHashtag },
  ];
    

  return (
    <>
      <div
        className={`${
          !mobileMenuOpen ? "hidden" : "z-10 w-[300px] absolute"
        }  h-[100vh] overflow-y-scroll ${glass} scrollbar-hide lg:block`}
      >
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

      {/* mobile */}
      {!mobileMenuOpen ? (
        <BsMusicNoteList
          onClick={onClick}
          className="absolute right-2 top-[3.8em] text-2xl lg:hidden"
        />
      ) : (
        <FaTimes
          onClick={onClick}
          className="absolute right-2 top-[3.8em] text-2xl lg:hidden"
        />
      )}
    </>
  );
};
const styles = {
  title: "uppercase text-gray-500 leading-10 tracking-widest",
  // navLink: "border py-2 text-lg",
  link: "flex py-2 items-center text-lg",
};

export default Sidebar;
