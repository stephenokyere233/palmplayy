import Link from "next/link";
import React from "react";
import { genres } from "../../constants/genres";
import { BsMusicNoteList } from "react-icons/bs";

const Dropdown = () => {
  console.log(genres);
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10 bg-gray-300 `;
  return (
    <div className="rounded-lg md:hidden ">
      <button className={` bg-[#111221] p-2 px-4 flex items-center rounded-lg text-lg`}>
        <BsMusicNoteList />
      </button>

      <section
        className={`${glass} top-31 absolute right-2 mx-auto w-[180px] rounded-[12px] p-3 text-[#fff]`}
      >
        {genres.map((genre) => (
          <Link key={genre.toString()} href={genre.value} className="w-24 ">
            <p>{genre.title}</p>
          </Link>
        ))}
      </section>
      {/* <select className="border-none  outline-none  ">
        {genres.map((genre) => (
          <option key={genre.toString()} className="w-24 p-4">
            <Link href={genre.value}>
              {genre.title}
            </Link>
          </option>
        ))}
      </select> */}
    </div>
  );
};

export default Dropdown;
