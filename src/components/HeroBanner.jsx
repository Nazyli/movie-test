import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const HeroBanner = ({ backgroundImage, title, description, genres = [] }) => {
  const [selectedGenre, setSelectedGenre] = useState("Genre");

  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center min-h-[80vh] px-6 md:px-16 py-24 flex flex-col justify-end"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-black to-transparent z-0" />

      <div className="absolute top-6 left-6 md:left-16 z-10">
        <div className="relative">
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="bg-white/20 text-white text-base font-medium px-5 py-2 rounded-full flex items-center gap-2 hover:bg-white/30 transition"
          >
            {selectedGenre}
            <FaChevronDown size={16} />
          </button>

          {open && (
            <ul className="absolute mt-2 grid grid-cols-2 gap-x-4 bg-neutral-800 text-white text-base font-medium rounded shadow-md z-20 p-2 w-max">
              {genres.map((genre, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSelectedGenre(genre);
                    setOpen(false);
                  }}
                  className="px-3 py-2 hover:bg-white/10 cursor-pointer rounded whitespace-nowrap"
                >
                  {genre}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl font-bold mb-4 text-white">{title}</h1>
        <p className="text-base leading-relaxed mb-6 text-white">
          {description}
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <button className="bg-[#0F1E93] px-6 py-2 rounded-full text-sm text-white">
            Mulai
          </button>
          <button className="bg-white/20 px-6 py-2 rounded-full text-sm text-white">
            Selengkapnya
          </button>
          <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-sm font-bold text-white">
            18+
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
