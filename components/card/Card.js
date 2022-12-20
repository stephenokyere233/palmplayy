import React from "react";
import Image from "next/image";

const Card = ({ coverart, title, subtitle }) => {
  // const desc = `lorem lorem loremlorem lorem loremlorem lorem lorem`;
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-30  bg-opacity-20 bg-gray-300 `;
  return (
    <>
      <section>
        <div
          className={`${glass} flex w-[180px] md:w-[200px] flex-col items-center justify-center rounded-lg p-3 `}
        >
          <div className="">
            {" "}
            <Image
              src={coverart?coverart:"/assets/cover.jpg"}
              width={200}
              height={200}
              alt={title}
              priority
              className=" h-[170px] w-full  rounded-lg bg-cover"
            />
            {/* <p className="absolute top-36 text-2xl font-semibold border-l-4 border-blue-800 left-3 capitalize">&nbsp;genre</p> */}
          </div>
          <div className="w-full items-start justify-start p-2 ">
            <h2 className={`font-semibold ${title.length > 18 && "truncate"}`}>
              {title}
            </h2>
            {/* ${desc.length > 25 && "truncate" */}
            <p
              className={`text-gray-400 ${subtitle.length > 20 && "truncate"}`}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
