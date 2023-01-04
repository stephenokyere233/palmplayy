import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import RelatedSongs from "../../components/layout/RelatedSongs";
import Load from "../../components/loader/Load";
import { AppContext } from "../../context/context";
import { useGetSongDetailsQuery } from "../../store/services/shazamCore";
import NotFound from "../_error";

const SongDetails = () => {
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl  `;
  const router = useRouter();
  const query = router.query;
  const songId = query.songdetails;
  const { data, isFetching, error } = useGetSongDetailsQuery(`${songId}`);

  if (isFetching) return <Load />;
  if (error) return <NotFound />;

  console.log(data);
  const { title, subtitle, releasedate } = data;
  const tabname = data.sections?.[1].tabname;
  const sectionLength = data.sections?.length;
  const lyrics = data.sections?.[1].text;


  function matchBrackets(string) {
    const pattern = /(.*)\s*\(([^()]*)\)/;
    const match = string.match(pattern);
    if (match) {
      const firstPart = match[1];
      const insideBrackets = match[2];
      return (string = firstPart);
    } else {
      string = string;
      return (string = string);
    }
  }
  console.log(matchBrackets(title));

  return (
    <div>
      <header
        className={`flex min-h-[15em] items-center bg-gray-200   bg-opacity-20 p-4 capitalize ${glass} `}
      >
        <div className="">
          <Image
            src={data.images.coverart}
            width={200}
            height={200}
            alt=""
            className="w-32 rounded-md md:w-[180px]"
          />
        </div>
        <div className=" mx-4 flex h-full flex-col justify-end">
          <p className="font-medium uppercase">{data.genres.primary}</p>
          <h1 className=" w-full text-[2.5em] font-bold leading-tight md:text-[4em]  lg:text-[5.5em]">
            {matchBrackets(title)}
          </h1>
          <div className="flex">
            <p>
              <span>{subtitle}</span>
            </p>
            <p className="ml-1">
              • <span>{releasedate}</span> •
            </p>
          </div>
        </div>
      </header>
      <section
        className={`${glass} flex min-h-screen flex-col bg-black bg-opacity-40 lg:flex-row`}
      >
        <div className={`lg:w-[60%] `}>
          {" "}
          <h2 className="p-4 text-3xl font-bold ">Lyrics:</h2>
          <div className="px-4 pb-6 text-lg">
            {sectionLength >= 4 && tabname === "Lyrics" ? (
              lyrics.map((line) => {
                return <p key={crypto.randomUUID()}>{line}</p>;
              })
            ) : (
              <h2 className="text-2xl font-semibold">
                No lyrics found for this track{" "}
              </h2>
            )}
          </div>
        </div>
        <div className="px-4 lg:w-[40%]">
          <h2 className=" p-4 text-2xl font-medium ">More by Lil Donald</h2>
          <RelatedSongs />
        </div>
      </section>
    </div>
  );
};

export default SongDetails;
