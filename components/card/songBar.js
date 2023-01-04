import Image from "next/image";
import PlayPause from "../controls/PlayPause";

const SongBar = ({ src, subtitle, title }) => {
  const glass = `bg-clip-padding backdrop-filter backdrop-blur-2xl hover:bg-opacity-30  bg-opacity-20 bg-gray-300 `;
  return (
    <div className={`${glass} flex h-20 w-full items-center rounded-lg px-2`}>
      <Image
        alt=""
        src={src ? src : "/assets/cover.jpg"}
        width={70}
        height={70}
        className="mr-2 rounded-full object-contain"
      />
      <div className="flex-1">
        <h2 className="text-xl font-semibold tracking-wide">{title}</h2>
        <p className="text-gray-400">{subtitle}</p>
      </div>
      <div className="w-16"></div>
    </div>
  );
};

export default SongBar;
