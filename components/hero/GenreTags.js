import Tag from "./Tag";
import { genres } from "../../constants/genres";

const GenreTags = ({ show }) => {
  return (
    <div
      className={`my-2 flex flex-wrap justify-center gap-2 font-medium ${
        show ? "animate-slideUp hidden" : "animate-slideDown"
      }`}
    >
      {genres.map((genre) => {
        return (
          <Tag key={genre.value} name={genre.title} value={genre.value} />
        );
      })}
    </div>
  );
};

export default GenreTags;
