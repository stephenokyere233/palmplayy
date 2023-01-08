const Span = ({ delay, color }) => {
  return (
    <span
      style={{ animationDelay: delay }}
      className={`${styles.loading} ${color}`}
    ></span>
  );
};
const styles = {
  loading: `mr-2 w-[36px] animate-loading rounded-md`,
};

export default Span;
