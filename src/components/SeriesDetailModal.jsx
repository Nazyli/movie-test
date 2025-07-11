import { FaPlus, FaVolumeMute } from "react-icons/fa";

const SeriesDetailModal = ({ movie, onClose, onDetailClick }) => {
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
                <span>{movie.totalSeasons} Episode</span>
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
            <h3 className="text-xl font-semibold mb-4">Episode</h3>
            <div className="space-y-4">
              {Array.from({ length: Number(movie.totalSeasons) }).map(
                (_, i) => {
                  const imageIndex = i % movie.Images.length;
                  return (
                    <div
                      key={i}
                      className="flex items-start gap-4 bg-white/5 p-4 rounded-md"
                    >
                      <div className="w-6 flex items-center justify-center text-lg font-bold text-gray-300">
                        {i + 1}
                      </div>

                      <div
                        className="flex-shrink-0 w-24 h-16 bg-cover bg-center rounded"
                        style={{
                          backgroundImage: `url(${movie.Images[imageIndex]})`,
                        }}
                      ></div>

                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {movie.Title} - Episode {i + 1}
                        </h4>
                        <p className="text-sm text-gray-300">
                          Ini adalah deskripsi singkat episode {i + 1}.
                          Kontennya bisa diisi dari database nanti.
                        </p>
                      </div>

                      <div className="text-sm text-gray-400 whitespace-nowrap mt-1">
                        25m
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeriesDetailModal;
