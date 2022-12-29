import Span from "./Span";

const Load = () => {
  return (
    <div className={styles.container}>
      <Span delay=".2s" color="bg-[#3A0CA3]" />
      <Span delay=".4s" color="bg-teal-500" />
      <Span delay=".6s" color=" bg-blue-600" />
      <Span delay=".8s" color="bg-red-600" />
      <Span delay="1s" color="bg-[#3A0CA3]" />
    </div>
  );
};
const styles = {
  container: `flex h-[65vh] rotate-180 items-center justify-center`,
};

export default Load;
