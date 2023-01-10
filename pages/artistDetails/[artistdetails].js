import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import ArtistCard from "../../components/card/ArtistCard";
import Category from "../../components/details/Category";
import DetailCard from "../../components/details/DetailCard";
import Load from "../../components/loader/Load";

import { useGetArtistDetailsQuery } from "../../store/services/shazamCore";

const ArtistDetails = () => {
  const router = useRouter();
  const query = router.query;
  const artistId = query.artistdetails;
  const { data, isFetching, error } = useGetArtistDetailsQuery(artistId);
  if (isFetching) return <Load />;
  const artistData = data?.data[0];
  const topSongs = artistData?.views?.["top-songs"].data;
  const topVideos = artistData?.views?.["top-music-videos"].data;
  const similarArtists = artistData?.views?.["similar-artists"]?.data;

  const { attributes, href, id, meta, relationships, type, views } = artistData;
  const { artistBio, artwork, genreNames, name, origin, bornOrFormed } =
    attributes;
  const { bgColor, textColor1, textColor2, url, textColor3, textColor4 } =
    artwork;

      const styles = {
        glass: `bg-clip-padding backdrop-filter backdrop-blur-2xl  bg-opacity-20  `,
      };

  console.log(artistData);
  return (
    <div className="w-full overflow-hidden">
      <header
        // style={{ background: `#${bgColor}`, color: `#${textColor1}` }}
        className={`${styles.glass} flex h-[15em] items-center bg-black px-4 `}
      >
        {/* sfjsbfsj{" "} */}
        <Image
          src={url}
          height={400}
          width={400}
          alt=""
          className="h-[180px] w-[200px] overflow-hidden rounded-lg object-cover"
        />
        <div className="border pl-4">
          <h2 className="text-7xl font-bold ">{name}</h2>
          <p>{genreNames[0]}</p>
        </div>
      </header>
      <div className="p-4">
        <h2 className="text-2xl font-medium">Biography</h2>

        <div
          dangerouslySetInnerHTML={{ __html: artistBio }}
          style={{ color: `#${textColor2}` }}
        />
      </div>
      <Category name="top songs">
        <div className="flex min-w-[180vw] gap-4 px-4">
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
                key={index}
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
        <div className="flex min-w-[180vw] gap-4 px-4">
          {topVideos.map((video, index) => {
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
        <div className="flex min-w-[180vw] gap-4 px-4">
          {similarArtists.map((artist, index) => {
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
