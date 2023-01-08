// import React, { useContext } from "react";
// import Image from "next/image";
// import Seekbar from "./SeekBar";
// import VolumeBar from "./Volume";
// import { AppContext } from "../../context/context";

// const TrackDetails = ({ isPlaying, isActive, activeSong }) => {
//   // const { controlData, setControlData, changeControls } =
//   //   useContext(AppContext);
//   // const { title, image, description } = controlData;
//   return (
//     <section className="flex items-center border">
//       <Image
//         src={activeSong?.images?.coverart}
//         width={20}
//         height={20}
//         alt="profile"
//         className={`${
//           isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
//         } mr-4 hidden h-16 w-16 rounded-full object-cover sm:block`}
//       />
//       <div>
//         {/* ${
//             activeSong?.title.length > 20 && "truncate"
//           } */}
//         <h3
//           className={`text-lg font-bold
//           `}
//         >
//           {activeSong?.title}
//         </h3>
//         {/* ${
//             activeSong?.subtitle.length > 20 && "truncate"
//           } */}
//         <p
//           className={`w-[320px]
//           `}
//         >
//           {activeSong?.subtitle}
//         </p>
//       </div>
//     </section>
//   );
// };

// export default TrackDetails;
import Image from "next/image";
import React from "react";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex flex-1 items-center justify-start">
    <div
      className={`${
        isPlaying && isActive ? "animate-[spin_3s_linear_infinite]" : ""
      } mr-4 hidden h-16 w-16 sm:block`}
    >
      <Image
        width={100}
        height={100}
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="rounded-full"
      />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-lg font-bold text-white">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
      </p>
    </div>
  </div>
);

export default Track;
