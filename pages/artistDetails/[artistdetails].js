import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import ArtistCard from "../../components/card/ArtistCard";
import Category from "../../components/details/Category";
import DetailCard from "../../components/details/DetailCard";
import Load from "../../components/loader/Load";

import { useGetArtistDetailsQuery } from "../../store/services/shazamCore";

const ArtistDetails = () => {
  const [length, setLength] = useState(false);
  const router = useRouter();
  const query = router.query;
  const artistId = query.artistdetails;
  const { data, isFetching, error } = useGetArtistDetailsQuery(artistId);
  if (isFetching) return <Load />;
  const artistData = data?.data[0];
  const topSongs = artistData?.views?.["top-songs"].data;
  const topVideos = artistData?.views?.["top-music-videos"].data;
  const similarArtists = artistData?.views?.["similar-artists"]?.data;

  const { attributes } = artistData;
  const { artistBio, artwork, genreNames, name } = attributes;
  const { url } = artwork;

  const styles = {
    glass: `bg-clip-padding backdrop-filter backdrop-blur-2xl  bg-opacity-20  `,
    header: "flex h-[15em] items-center bg-black px-4",
    wrapper: "w-full overflow-hidden",
    image: "h-[180px] w-32 rounded-lg object-cover md:w-[180px]",
    name: "w-full  text-[2.5em] font-bold leading-tight md:text-[4em] lg:text-[5.5em]",
    btn: "my-2 rounded-md bg-green-500 p-2 font-medium capitalize text-black",
    overflow: "flex min-w-[180vw] gap-4 px-4",
    genre: "px-2 text-xl",
  };

  const checkLength = () => {
    setLength((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <header className={[styles.glass, styles.header]}>
        <Image
          src={url}
          height={400}
          width={400}
          alt=""
          className={styles.image}
        />
        <div className="pl-4">
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.genre}>{genreNames[0]}</p>
        </div>
      </header>
      <div className="p-4">
        <h2 className={`text-2xl font-medium`}>Biography</h2>

        <div
          className={!length && "truncate"}
          dangerouslySetInnerHTML={{ __html: artistBio }}
        />
        <button onClick={checkLength} className={styles.btn}>
          read more
        </button>
      </div>
      <Category name="top songs">
        <div className={styles.overflow}>
          {topSongs.map((card, index) => {
            const {
              artistName,
              name,
              albumName,
              genreNames,
              releaseDate,
              previews,
            } = card.attributes;
            const audioTrack = previews[0].url;
            const { url, textColor2 } = card.attributes.artwork;
            return (
              <DetailCard
                key={url}
                borderColor={textColor2}
                genre={genreNames[0]}
                imageUrl={url}
                songTitle={name}
                albumName={albumName}
                artistName={artistName}
                releaseDate={releaseDate}
              />
            );
          })}
        </div>
      </Category>
      <Category name="top videos">
        <div className={styles.overflow}>
          {topVideos.map((video) => {
            const {
              artistName,
              name,
              albumName,
              genreNames,
              releaseDate,
              previews,
            } = video.attributes;
            // const audioTrack = previews.url;
            const { url, bgColor, textColor2 } = video.attributes.artwork;
            return (
              <DetailCard
                key={video.id}
                borderColor={textColor2}
                genre={genreNames[0]}
                imageUrl={url}
                songTitle={name}
                albumName={albumName}
                artistName={artistName}
                releaseDate={releaseDate}
              />
            );
          })}
        </div>
      </Category>
      <Category name="Similar artists">
        <div className={styles.overflow}>
          {similarArtists.map((artist) => {
            const { id } = artist;
            const { name, genreNames, bornOrFormed } = artist.attributes;
            const { url } = artist.attributes.artwork;
            return (
              <ArtistCard
                key={id}
                id={id}
                imageUrl={url}
                artistName={name}
                genre={genreNames[0]}
                formed={bornOrFormed}
              />
            );
          })}
        </div>
      </Category>
    </div>
  );
};

export default ArtistDetails;
