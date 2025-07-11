import React, { useRef } from "react";

import logo from "../assets/Logo.png";
import profilePic from "../assets/user.png";
import heroesBg from "../assets/heroes.jpg";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import ContinueWatching from "../components/ContinueWatching";
import HeroBanner from "../components/HeroBanner";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Beranda = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const stored = localStorage.getItem("movies");

    if (stored) {
      setMovies(JSON.parse(stored));
    } else {
      fetch("/film.json")
        .then((res) => res.json())
        .then((data) => {
          setMovies(data);
          localStorage.setItem("movies", JSON.stringify(data));
        });
    }
  }, []);

  const topRating = movies.filter((m) => Number(m.imdbRating) >= 8);
  const trendingMovies = movies.filter((m) => m.Type === "movie");
  const newSeries = movies.filter((m) => m.Type === "series");
  const watchedMovies = movies
    .filter((m) => Array.isArray(m.Images) && m.Images.length > 0)
    .slice(0, 10);
  const genres = Array.from(
    new Set(
      movies
        .flatMap((movie) => movie.Genre?.split(",").map((g) => g.trim()))
        .filter(Boolean)
    )
  );

  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <nav className="flex items-center justify-between px-10 py-5 bg-[#181A1CE6]">
        <div className="flex items-center gap-8">
          <img src={logo} alt="Logo" className="h-10" />
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:underline">
              Seris
            </a>
            <a href="#" className="hover:underline">
              Film
            </a>
            <a href="#" className="hover:underline">
              Daftar Saya
            </a>
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowDropdown((prev) => !prev)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <img
              src={profilePic}
              alt="User"
              className="w-9 h-9 rounded-full border-2 border-white object-cover"
            />
            <FaChevronDown className="text-white text-xs" />
          </button>

          {showDropdown && (
            <div className="absolute right-0 mt-2 w-40 bg-neutral-800  text-white rounded-md shadow-lg z-50">
              <ul className="py-2 text-sm">
                <li
                  className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                  onClick={() => navigate("/movie")}
                >
                  Movie
                </li>
                <li
                  className="px-4 py-2 hover:bg-white/10  cursor-pointer"
                  onClick={() => navigate("/")}
                >
                  Keluar
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>

      <HeroBanner
        genres={genres}
        backgroundImage={heroesBg}
        title="The Avengers"
        description="Ketika musuh yang kuat mengancam keamanan global, Nick Fury, direktur S.H.I.E.L.D., membentuk tim pahlawan super termasuk Iron Man, Captain America, Thor, Hulk, Black Widow, dan Hawkeye untuk menyelamatkan dunia dari kehancuran besar."
      />
      <ContinueWatching title="Melanjutkan Tonton Film" data={watchedMovies} />

      <Carousel title="Top Rating Film dan Series Hari Ini" data={topRating} />
      <Carousel title="Film Trending" data={trendingMovies} />
      <Carousel title="Rilis Baru" data={newSeries} />

      <footer className="border-t border-white/20 py-10 px-6 md:px-16 bg-[#181A1C]">
        <div className="flex flex-wrap justify-between gap-10">
          <div>
            <img src={logo} alt="Logo" className="w-36 mb-3" />
            <p className="text-sm text-gray-400">
              &copy; 2025 Chill All Rights Reserved.
            </p>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2">Genre</h4>
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 text-sm text-gray-400">
              {[
                "Aksi",
                "Anak-anak",
                "Anime",
                "Britania",
                "Drama",
                "Fantasi Ilmiah",
                "Kejahatan",
                "KDrama",
                "Komedi",
                "Petualangan",
                "Perang",
                "Romantis",
                "Sains & alam",
                "Thriller",
              ].map((genre, i) => (
                <li key={i} className="hover:text-white cursor-pointer">
                  {genre}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-base font-semibold mb-2">Bantuan</h4>
            <ul className="text-sm text-gray-400">
              {[
                "Bantuan",
                "FAQ",
                "Kontak kami",
                "Privasi",
                "Syarat & Ketentuan",
              ].map((item, i) => (
                <li key={i} className="hover:text-white cursor-pointer mb-1">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Beranda;
