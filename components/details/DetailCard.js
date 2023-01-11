import Image from "next/image";

const DetailCard = ({
  imageUrl,
  songTitle,
  artistName,
  albumName,
  releaseDate,
  genre,
  borderColor,
}) => {
  const styles = {
    glass: `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-30  bg-opacity-20 bg-black `,
    image: "h-[180px] w-full overflow-hidden rounded-md object-cover",
    releaseDate:
      "absolute  top-3 right-3 m-2 rounded-full bg-gray-600 px-2 text-sm text-white",
    genreWrap: "absolute bottom-4 mb-3",
    genre: "ml-3 text-lg font-medium",
    border: `5px solid #${borderColor}`,
    artistName: `w-[190px]  ${artistName?.length > 10 && "truncate"}`,
    albumName: `w-[190px] ${albumName?.length > 10 && "truncate"}`,
    textWrap: "text-md leading-tight text-gray-400",
    songTitle: `${
      songTitle.length > 10 && "truncate"
    } w-[180px] pb-1 text-lg font-medium `,
  };

  return (
    <div className={` w-[200px] rounded-md ${styles.glass}`}>
      {/* <div className=""> */}
      <div className="relative p-3">
        <Image
          src={imageUrl}
          height={400}
          width={400}
          alt=""
          style={{ borderBottom: `${styles.border}` }}
          className={styles.image}
        />
        <div className={styles.releaseDate}>{releaseDate}</div>
        <div
          style={{ borderLeft: `${styles.border}` }}
          className={styles.genreWrap}
        >
          <p className={styles.genre}>{genre}</p>
        </div>
      </div>
      {/* </div> */}
      <div className="px-2 pb-4">
        <h2 className={styles.songTitle}>{songTitle}</h2>
        <div className={styles.textWrap}>
          <p className={styles.artistName}>{artistName}</p>
          <p className={styles.albumName}>{albumName}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
