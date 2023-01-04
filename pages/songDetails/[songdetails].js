import Image from "next/image";
import { useRouter } from "next/router";
// import { clearConfigCache } from "prettier";
import React, { useContext } from "react";
import RelatedSongs from "../../components/layout/RelatedSongs";
import Load from "../../components/loader/Load";
import { lyrics } from "../../constants/lyrics";
import { AppContext } from "../../context/context";
import { useGetSongDetailsQuery } from "../../store/services/shazamCore";

const SongDetails = () => {
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl  `;
  const router = useRouter();
  const query = router.query;
  const songId = query.songdetails;

  // const { songId, setSongId, changeSongId } = useContext(AppContext);
  //   setSongId(query.songdetails);
  console.log(`song id from songdeets is ${songId}`);
  const { data, isFetching, error } = useGetSongDetailsQuery(`${songId}`);

  if (isFetching) return <Load />;
  if (error) return <div>Not found</div>;

  console.log(data);
  const { title, subtitle, releasedate } = data;

  // if (error)
  // function matchBrackets(string) {
  //   const pattern = /Dreamers\s*\(([^()]*)\)/;
  //   const match = string.match(pattern);
  //   if (match) {
  //     return match[1];
  //   }
  //   return null;
  // }
  // function matchBrackets(string) {
  //   const pattern = /.*\s*\(([^()]*)\)/;
  //   const match = string.match(pattern);
  //   if (match) {
  //     // console.log(match[0])
  //     string = match[1];
  //     console.log(`match 0 is ${match[0]}`)
  //     console.log(`match ${match}`)
  //     return match[1];
  //   }
  //   return null;
  // }
    function matchBrackets(string) {
      const pattern = /(.*)\s*\(([^()]*)\)/;
      const match = string.match(pattern);
      if (match) {
        const firstPart = match[1];
        const insideBrackets = match[2];
        return string=firstPart
      }
      else{
        string=string
        return string
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
            {/* {title} */}
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
            {/* {JSON.stringify(data)} */}

            {lyrics.map((line) => {
              return <p key={crypto.randomUUID()}>{line}</p>;
            })}
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
