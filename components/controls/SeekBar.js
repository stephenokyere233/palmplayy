// import React from "react";

// const SeekBar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
//   // converts the time to format 0:00
//   const getTime = (time) =>
//     `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

//   return (
//     <div className="hidden flex-row items-center sm:flex">

//       <p className="text-white">{value === 0 ? "0:00" : getTime(value)}</p>
//       <input
//         type="range"
//         step="any"
//         value={value}
//         min={min}
//         max={max}
//         onInput={onInput}
//         className="mx-4 h-1 w-24 rounded-lg md:block md:w-56 2xl:mx-6 2xl:w-96"
//       />
//       <p className="text-white">{max === 0 ? "0:00" : getTime(max)}</p>
//     </div>
//   );
// };

// export default SeekBar;

import React from "react";

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="hidden flex-row items-center sm:flex">
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className="hidden text-white lg:mr-4 lg:block"
      >
        -
      </button>
      <p className="text-white">{value === 0 ? "0:00" : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="mx-4 h-1 w-24 rounded-lg md:block md:w-56 2xl:mx-6 2xl:w-96"
      />
      <p className="text-white">{max === 0 ? "0:00" : getTime(max)}</p>
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className="hidden text-white lg:ml-4 lg:block"
      >
        +
      </button>
    </div>
  );
};

export default Seekbar;
