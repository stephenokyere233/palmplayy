import React from "react";
import {
  BsFillVolumeUpFill,
  BsVolumeDownFill,
  BsFillVolumeMuteFill,
} from "react-icons/bs";

const VolumeBar = ({ value, min, max, onChange, setVolume }) => (
  <section className={styles.container}>
    <div className={styles.volume}>
      {value <= 1 && value > 0.5 && (
        <BsFillVolumeUpFill
          size={25}
          color="#FFF"
          onClick={() => setVolume(0)}
        />
      )}
      {value <= 0.5 && value > 0 && (
        <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />
      )}
      {value === 0 && (
        <BsFillVolumeMuteFill
          size={25}
          color="#FFF"
          onClick={() => setVolume(1)}
        />
      )}
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className="ml-2 h-1 w-40 "
      />
    </div>
  </section>
);

const styles = {
  container: "hidden h-full w-full md:justify-center md:items-center md:flex",
  volume: "flex-1 w-full flex justify-center items-center",
};
export default VolumeBar;
