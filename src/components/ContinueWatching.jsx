import { useRef, useState } from "react";
import { FaPlay, FaCheck, FaChevronDown } from "react-icons/fa";
import SeriesDetailModal from "./SeriesDetailModal";
import MovieDetailModal from "./MovieDetailModal";

const scrollByRef = (ref, direction) => {
  if (ref.current) {
    const scrollAmount = ref.current.offsetWidth;
    ref.current.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  }
};

const ContinueWatching = ({ title, data }) => {
  const refCarousel = useRef();
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <section className="py-10 px-6 md:px-16">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold">
        {title}
      </h2>

      <div className="relative">
        <button
          onClick={() => scrollByRef(refCarousel, -1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl rounded-full px-3 z-10"
        >
          &#8249;
        </button>

        <div
          ref={refCarousel}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pr-6"
        >
          {data.map((movie, i) => (
            <div
              key={i}
              className="relative group w-[320px] h-[180px] flex-shrink-0 rounded overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
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
                    onClick={() => setSelectedMovie(movie)}
                    className="text-white p-2 border border-white rounded-full hover:border-gray-300 hover:text-gray-300"
                  >
                    <FaChevronDown />
                  </button>
                </div>
                <div className="flex items-center gap-2 text-white text-sm font-semibold">
                  <div className="bg-white/20 text-white text-xs px-2 py-0.5 rounded-full">
                    13+
                  </div>
                  <p className="text-sm">
                    {movie.Runtime || "Durasi tidak tersedia"}
                  </p>
                </div>
                <p className="text-gray-300 text-xs mt-1">
                  {movie.Genre || "Genre tidak tersedia"}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scrollByRef(refCarousel, 1)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl rounded-full px-3 z-10"
        >
          &#8250;
        </button>
      </div>

      {selectedMovie?.Type === "movie" && (
        <MovieDetailModal
          movies={data}
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onDetailClick={setSelectedMovie}
        />
      )}

      {selectedMovie?.Type === "series" && (
        <SeriesDetailModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          onDetailClick={setSelectedMovie}
        />
      )}
    </section>
  );
};

export default ContinueWatching;
