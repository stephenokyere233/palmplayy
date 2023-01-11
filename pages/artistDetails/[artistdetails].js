import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
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
  console.log(topVideos);
  console.log(topSongs);
  console.log(artistData);
  const { attributes, href, id, meta, relationships, type, views } = artistData;
  const { artistBio, artwork, genreNames, name, origin, url, bornOrFormed } =
    attributes;
  const { bgColor, textColor1, textColor2, textColor3, textColor4 } = artwork;
  console.log(bgColor);

  return (
    <div className="w-full overflow-hidden">
      <header
        style={{ background: `#${bgColor}`, color: `#${textColor1}` }}
        className={`h-[15em] border `}
      >
        {/* sfjsbfsj{" "} */}
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: artistBio }}
        style={{ color: `#${textColor2}` }}
      />
      <Category name="top songs">
        <div className="px-4 flex min-w-[180vw] gap-4">
          {topSongs.map((card, index) => {
            const {
              artistName,
              name,
              albumName,
              genreNames,
              releaseDate,
              previews,
            } = card.attributes;
            const audioTrack = previews.url;
            const { url, bgColor,textColor2} = card.attributes.artwork;
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
    </div>
  );
};

export default ArtistDetails;
