import { useRef, useState } from "react";
import { FaPlay, FaCheck, FaChevronDown } from "react-icons/fa";
import SeriesDetailModal from "./SeriesDetailModal";
import MovieDetailModal from "./MovieDetailModal";
import MovieCard from "./MovieCard";

const scrollByRef = (ref, direction) => {
  if (ref.current) {
    const scrollAmount = ref.current.offsetWidth;
    ref.current.scrollBy({
      left: direction * scrollAmount,
      behavior: "smooth",
    });
  }
};

const Carousel = ({ title, data }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const scrollRef = useRef();

  return (
    <section className="py-10 px-6 md:px-16">
      <h2 className="text-white text-2xl md:text-3xl lg:text-4xl mb-4 font-semibold">
        {title}
      </h2>
      <div className="relative">
        <button
          onClick={() => scrollByRef(scrollRef, -1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl rounded-full px-3 z-10"
        >
          &#8249;
        </button>

        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth pr-6 md:pr-10"
        >
          {data
            .filter(
              (item) => Array.isArray(item.Images) && item.Images.length > 0
            )
            .map((movie, i) => (
              <MovieCard
                key={i}
                movie={movie}
                onDetailClick={() => setSelectedMovie(movie)}
              />
            ))}
        </div>

        <button
          onClick={() => scrollByRef(scrollRef, 1)}
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

export default Carousel;
