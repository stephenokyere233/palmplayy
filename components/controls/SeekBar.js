const SeekBar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className={styles.btn}
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
        className={styles.input}
      />
      <p className="text-white">{max === 0 ? "0:00" : getTime(max)}</p>
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className={styles.btn}
      >
        +
      </button>
    </div>
  );
};

const styles = {
  wrapper: "hidden flex-row items-center sm:flex",
  btn: "hidden text-white lg:mr-4 lg:block",
  input: "mx-4 h-1 w-24 rounded-lg md:block md:w-56 2xl:mx-6 2xl:w-96",
};

export default SeekBar;
