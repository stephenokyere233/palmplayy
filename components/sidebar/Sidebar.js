import React, { useState, useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import Link from "next/link";
import {
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineHashtag,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { BsMusicNoteList } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

const Sidebar = ({ mobileMenuOpen, onClick }) => {
  const glass =
    "bg-clip-padding backdrop-filter backdrop-blur-2xl  bg-opacity-20 bg-[#473198]";
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
          !mobileMenuOpen
            ? "hidden animate-slideRight"
            : "absolute z-30 w-[300px] animate-slideLeft"
        }  h-[100vh] overflow-y-scroll ${glass} scrollbar-hide lg:block`}
      >
        <Link href="/" className={styles.logo}>
          <FaPlay className="m-2  text-3xl" />
          PALMPLAYY
        </Link>
        <nav className="px-8 pb-20">
          <div>
            <span className={styles.title}>menu</span>
            <section>
              {links.map((genre) => (
                <Link key={genre.name} className={styles.link} href={genre.to}>
                  <genre.icon className="mr-2" />
                  <p>{genre.name}</p>
                </Link>
              ))}
            </section>
          </div>
        </nav>
      </div>

      {/* mobile */}
      {!mobileMenuOpen ? (
        <BsMusicNoteList onClick={onClick} className={styles.mobileIcon} />
      ) : (
        <FaTimes onClick={onClick} className={styles.mobileIcon} />
      )}
    </>
  );
};
const styles = {
  title: "uppercase text-gray-500 leading-10 tracking-widest",
  link: "flex py-2 items-center text-lg",
  mobileIcon: "absolute right-2 top-[3.8em] z-20 text-2xl lg:hidden",
  logo: "flex h-20 items-center justify-center text-2xl  font-semibold",
};

export default Sidebar;
