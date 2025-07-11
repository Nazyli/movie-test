import { FaPlay, FaCheck, FaChevronDown } from "react-icons/fa";

const MovieCard = ({ movie, onDetailClick }) => {
  if (!Array.isArray(movie.Images) || movie.Images.length === 0) return null;

  return (
    <div className="relative group w-[240px] h-[360px] flex-shrink-0 rounded overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
      <img
        src={movie.Images[0]}
        alt={movie.Title}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 px-3 pt-4 pb-5">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-3">
            <button className="bg-white text-black p-2 rounded-full text-sm hover:bg-gray-200">
              <FaPlay />
            </button>
            <button className="text-white p-2 border border-white rounded-full hover:border-gray-300 hover:text-gray-300">
              <FaCheck />
            </button>
          </div>
          <button
            onClick={onDetailClick}
            className="text-white p-2 border border-white rounded-full hover:border-gray-300 hover:text-gray-300"
          >
            <FaChevronDown />
          </button>
        </div>
        <div className="flex items-center gap-2 text-white text-sm font-semibold">
          <div className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
            13+
          </div>
          <p className="text-sm">{movie.Runtime || "Durasi tidak tersedia"}</p>
        </div>
        <p className="text-gray-300 text-xs mt-1">
          {movie.Genre || "Genre tidak tersedia"}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
