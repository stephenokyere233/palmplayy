import React from "react";
import Image from "next/image";
import Link from "next/link";

const ArtistCard = ({ imageUrl, artistName, id }) => {

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
    glass: `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-30  bg-opacity-20 bg-black `,
    image: `h-[180px] rounded-full w-full overflow-hidden object-cover`,
    wrapper: `w-[200px] rounded-md`,
    tag: `capitalize text-gray-400`,
    artistName: `${
      artistName?.length > 10 && "truncate"
    } w-[180px] pb-1 text-lg font-medium `,
    imageCon: "relative p-3",
  };

  return (
    <Link href={`/artistDetails/${id}`} className={[styles.wrapper,styles.glass]}>
      <div className="">
        <div className={styles.imageCon}>
          <Image
            src={imageUrl}
            height={400}
            width={400}
            alt=""
            className={styles.image}
          />
        </div>
      </div>
      <div className="px-2 pb-4">
        <h2 className={styles.artistName}>{matchBrackets(artistName)}</h2>
        <p className={styles.tag}>artist</p>
      </div>
    </Link>
  );
};

export default ArtistCard;
