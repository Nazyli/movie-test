import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import ContinueWatching from "../components/ContinueWatching";
import HeroBanner from "../components/HeroBanner";
import heroesBg from "../assets/heroes.jpg";

const Beranda = () => {
  const [movies, setMovies] = useState([]);

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
      <Navbar />
      <HeroBanner
        genres={genres}
        backgroundImage={heroesBg}
        title="The Avengers"
        description="Ketika musuh yang kuat mengancam keamanan global..."
      />
      <ContinueWatching title="Melanjutkan Tonton Film" data={watchedMovies} />
      <Carousel title="Top Rating Film dan Series Hari Ini" data={topRating} />
      <Carousel title="Film Trending" data={trendingMovies} />
      <Carousel title="Rilis Baru" data={newSeries} />
      <Footer genres={genres} />
    </div>
  );
};

export default Beranda;
