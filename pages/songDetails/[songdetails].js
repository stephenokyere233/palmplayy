import Image from "next/image";
import { useRouter } from "next/router";
import Load from "../../components/loader/Load";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../../store/services/shazamCore";
import NotFound from "../_error";
import SongBar from "../../components/card/songBar";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

const SongDetails = () => {
  const { activeSong, isPlaying } = useSelector((state) => state.player);

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
      return (string = firstPart);
    } else {
      string = string;
      return (string = string);
    }
  }
  const styles = {
    glass: `bg-clip-padding backdrop-filter backdrop-blur-2xl`,
    header:
      "flex min-h-[15em] items-center bg-gray-200 bg-opacity-20 p-4 capitalize ",
    image: "w-32 rounded-md md:w-[180px]",
    textSec: "mx-4 flex h-full flex-col justify-end",
    genre: "font-medium uppercase",
    title:
      "w-full text-[2.5em] font-bold leading-tight md:text-[4em] lg:text-[5.5em]",
    container: `flex flex-col bg-black bg-opacity-40 pb-6 lg:flex-row`,
    lyrics: "px-4 pb-6 text-lg",
    noLyrics: "text-center text-2xl font-semibold",
    h2: "p-4 text-3xl font-bold",
    related:
      "w-full place-items-center px-2 md:grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-1",
    relatedCon: "flex w-full flex-wrap items-center",
  };

  return (
    <div>
      <header className={[styles.glass, styles.header]}>
        <div className="">
          <Image
            src={data.images.coverart}
            width={200}
            height={200}
            alt=""
            className={styles.image}
          />
        </div>
        <div className={styles.textSec}>
          <p className={styles.genre}>{data.genres.primary}</p>
          <h1 className={styles.title}>{matchBrackets(title)}</h1>
          <div className="flex">
            <Link
              className="hover:underline"
              href={`/artistDetails/${data?.artists[0]?.adamid}`}
            >
              <p>
                <span>{subtitle}</span>
              </p>
            </Link>
            <p className="ml-1">
              • <span>{releasedate}</span> •
            </p>
          </div>
        </div>
      </header>
      <section className={styles.container}>
        <div className={`lg:w-[55%]`}>
          <h2 className={styles.h2}>Lyrics:</h2>
          <div className={styles.lyrics}>
            {sectionLength >= 4 && tabname === "Lyrics" ? (
              lyrics.map((line, index) => {
                return <p key={index}>{line}</p>;
              })
            ) : (
              <h2 className={styles.noLyrics}>lyrics unavailable</h2>
            )}
          </div>
        </div>
        <div className="px-4 lg:w-[45%]">
          <h2 className={styles.h2}>Related Songs</h2>
          <div className={styles.relatedCon}>
            {isLoading ? (
              <div>Finding Related Songs...</div>
            ) : notfound ? (
              <div>No related tracks</div>
            ) : (
              <div className={styles.related}>
                {Related.map((track, i) => {
                  const image = track?.images?.coverart;
                  const { title, subtitle, url } = track;
                  return (
                    <SongBar
                      key={url}
                      src={image}
                      song={track}
                      i={i}
                      title={matchBrackets(title)}
                      subtitle={subtitle}
                      isPlaying={isPlaying}
                      activeSong={activeSong}
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
