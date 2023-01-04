import Image from "next/image";
import { useRouter } from "next/router";
import Load from "../../components/loader/Load";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../../store/services/shazamCore";
import NotFound from "../_error";
import SongBar from "../../components/card/songBar";

const SongDetails = () => {
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl  `;
  const router = useRouter();
  const query = router.query;
  const songId = query.songdetails;
  const { data, isFetching, error } = useGetSongDetailsQuery(`${songId}`);
  const {
    data: Related,
    isFetching: isLoading,
    error: notfound,
  } = useGetSongRelatedQuery(songId);

  if (isFetching) return <Load />;
  if (error) return <NotFound />;

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
        className={`${glass} flex flex-col bg-black bg-opacity-40 pb-6 lg:flex-row`}
      >
        <div className={`lg:w-[55%] `}>
          <h2 className="p-4 text-3xl font-bold ">Lyrics:</h2>
          <div className="px-4 pb-6 text-lg">
            {sectionLength >= 4 && tabname === "Lyrics" ? (
              lyrics.map((line) => {
                return <p key={crypto.randomUUID()}>{line}</p>;
              })
            ) : (
              <h2 className="text-center text-2xl font-semibold">
                No lyrics found for this track
              </h2>
            )}
          </div>
        </div>
        <div className="px-4 lg:w-[45%]">
          <h2 className=" p-4 text-3xl font-bold ">Related Songs</h2>
          <div className="flex w-full flex-wrap items-center">
            {isLoading ? (
              <div>Loading...</div>
            ) : notfound ? (
              <div>No related tracks</div>
            ) : (
              <div className="w-full gap-6 md:grid md:grid-cols-2 lg:grid-cols-1">
                {Related.map((track) => {
                  const image = track?.images?.coverart;
                  const { title, subtitle, url } = track;
                  return (
                    <SongBar
                      key={url}
                      src={image}
                      title={matchBrackets(title)}
                      subtitle={subtitle}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SongDetails;
