import Link from "next/link";
import React, { useState } from "react";
import { genres } from "../../constants/genres";
import { BsMusicNoteList } from "react-icons/bs";

const Dropdown = () => {
  const [menu, setMenu] = useState(true);
  const toggle=()=>{
    setMenu(prev=>!prev)
  }
  //   console.log(genres);
  const glass = `bg-clip-padding z-10 backdrop-filter backdrop-blur-2xl bg-opacity-10 bg-gray-300 `;
  return (
    <div className="rounded-lg md:hidden ">
      <button
      onClick={toggle}
        className={`${glass} flex items-center rounded-lg bg-[#111221] p-2 px-4 text-lg`}
      >
        <BsMusicNoteList />
      </button>

      <section
        className={`${glass} ${
          menu && "hidden"
        } top-31 absolute right-2 mx-auto w-[180px] rounded-[12px] p-3 text-[#fff]`}
      >
        {genres.map((genre) => (
          <Link key={genre.toString()} href={genre.value} className="w-24 ">
            <p>{genre.title}</p>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Dropdown;
