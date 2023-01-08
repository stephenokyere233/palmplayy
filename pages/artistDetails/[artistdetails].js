import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
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
  console.log(topVideos)
  console.log(topSongs);
  console.log(artistData);
  const { attributes, href, id, meta, relationships, type, views } = artistData;
  const { artistBio, artwork, genreNames, name, origin, url, bornOrFormed } =
    attributes;
  const { bgColor, textColor1, textColor2, textColor3, textColor4 } = artwork;
  console.log(bgColor);

  return (
    <div>
      <header
        style={{ background: `#${bgColor}`, color: `#${textColor1}` }}
        className={`h-[15em] border `}
      >
        sfjsbfsj{" "}
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: artistBio }}
        style={{ color: `#${textColor2}` }}
      />
      <div>
        <h2>Top songs</h2>
        {topSongs.map((song) => {
          const { artistName, name, albumName, releaseDate, previews } =
            song.attributes;
          const audioTrack = previews.url;
          const { url } = song.attributes.artwork;
          return (
            <div key={song.id} className="m-4 border-2">
              <Image src={url} height={100} width={100} alt="pic" />
              <h2>{name}</h2>
              <h2>{artistName}</h2>
              <h2>{albumName}</h2>
              <h2>{releaseDate}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ArtistDetails;
