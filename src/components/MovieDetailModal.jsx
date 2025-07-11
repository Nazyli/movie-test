import { FaPlus, FaVolumeMute } from "react-icons/fa";
import MovieCard from "./MovieCard";

const MovieDetailModal = ({ movies, movie, onClose, onDetailClick }) => {
  const formatRuntime = (runtimeStr) => {
    if (!runtimeStr) return "-";

    const minutes = parseInt(runtimeStr);
    if (isNaN(minutes)) return runtimeStr;

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours > 0 ? `${hours}j ` : ""}${mins}m`;
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 overflow-y-auto scrollbar-hide">
      <div className="min-h-full flex items-center justify-center px-4 py-8">
        <div className="bg-[#1f1f1f] text-white max-w-4xl w-full rounded-lg overflow-hidden relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white text-2xl z-50 hover:text-gray-300"
          >
            &times;
          </button>

          <div
            className="relative h-64 md:h-80 bg-cover bg-center flex flex-col justify-end"
            style={{
              backgroundImage: `url(${movie.Images?.[0]})`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>

            <div className="relative z-10 flex items-end justify-between p-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {movie.Title}
                </h2>
                <div className="flex gap-4">
                  <button className="bg-[#0F1E93] px-6 py-2 rounded-full text-sm text-white">
                    Mulai
                  </button>
                  <button className="text-white p-2 border border-white rounded-full hover:border-gray-300 hover:text-gray-300">
                    <FaPlus />
                  </button>
                </div>
              </div>

              <button className="text-white p-2 border border-white rounded-full hover:border-gray-300 hover:text-gray-300">
                <FaVolumeMute />
              </button>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3 flex-wrap text-sm text-gray-300 mb-4">
                <span>{movie.Year}</span>
                <span>{formatRuntime(movie.Runtime)}</span>
                <span className="border border-gray-400 px-2 py-1 rounded text-white text-xs">
                  PG-13
                </span>
              </div>
              <p className="text-base leading-relaxed">{movie.Plot}</p>
            </div>

            <div className="text-sm text-gray-300 space-y-2">
              <div className="grid grid-cols-[120px_10px_1fr] items-start gap-2">
                <span className="font-semibold text-white text-left">Cast</span>
                <span className="text-right">:</span>
                <span>{movie.Actors}</span>
              </div>
              <div className="grid grid-cols-[120px_10px_1fr] items-start gap-2">
                <span className="font-semibold text-white text-left">
                  Genre
                </span>
                <span className="text-right">:</span>
                <span>{movie.Genre}</span>
              </div>
              <div className="grid grid-cols-[120px_10px_1fr] items-start gap-2">
                <span className="font-semibold text-white text-left">
                  Pembuat Film
                </span>
                <span className="text-right">:</span>
                <span>{movie.Director}</span>
              </div>
            </div>
          </div>

          <div className="px-6 pb-6">
            <h3 className="text-xl font-semibold mb-4">Rekomendasi Serupa</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {movies
                .filter((m) => m.imdbID !== movie.imdbID)
                .slice(0, 3)
                .map((item, i) => (
                  <MovieCard
                    key={i}
                    movie={item}
                    onDetailClick={() => onDetailClick(item)}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
