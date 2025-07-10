import React, { useRef } from "react";
import { useMediaQuery } from "react-responsive";

import logo from '../assets/Logo.png';
import profilePic from '../assets/user.png';
import movieImage from '../assets/movie.png';
import filmImage from '../assets/film.png';
import trendingImage from '../assets/tranding.png';
import rilisImage from '../assets/rilis.png';
import heroesBg from '../assets/heroes.jpg';

const scrollByRef = (ref, direction) => {
    if (ref.current) {
        const scrollAmount = ref.current.offsetWidth;
        ref.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
    }
};

const Beranda = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const refCarousel = useRef(null);
    const refTopRating = useRef(null);
    const refTrending = useRef(null);
    const refNewRelease = useRef(null);

    const MovieCard = ({ src, title, rating }) => (
        <div className="relative w-[250px] h-[140px] flex-shrink-0 rounded overflow-hidden">
            <img src={src} alt={title} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black text-sm text-white flex justify-between">
                <span>{title}</span>
                <span>{rating}</span>
            </div>
        </div>
    );

    const SimpleCarousel = ({ title, images, refEl }) => (
        <section className="py-10 px-6 md:px-16">
            <h2 className="text-white text-xl mb-4">{title}</h2>
            <div className="relative">
                <button
                    onClick={() => scrollByRef(refEl, -1)}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl rounded-full px-3 z-10"
                >
                    &#8249;
                </button>
                <div
                    ref={refEl}
                    className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth"
                >
                    {images.map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={title + i}
                            className="w-[180px] h-[260px] object-cover rounded flex-shrink-0"
                        />
                    ))}
                </div>
                <button
                    onClick={() => scrollByRef(refEl, 1)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl rounded-full px-3 z-10"
                >
                    &#8250;
                </button>
            </div>
        </section>
    );

    return (
        <div className="bg-[#181A1C] text-white min-h-screen">
            <nav className="flex items-center justify-between px-10 py-5 bg-[#181A1CE6]">
                <div className="flex items-center gap-8">
                    <img src={logo} alt="Logo" className="h-10" />
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="hover:underline">Seris</a>
                        <a href="#" className="hover:underline">Film</a>
                        <a href="#" className="hover:underline">Daftar Saya</a>
                    </div>
                </div>
                <img src={profilePic} alt="User" className="w-9 h-9 rounded-full border-2 border-white object-cover" />
            </nav>

            <section
                className="relative bg-cover bg-center min-h-[50vh] px-6 md:px-16 py-24"
                style={{ backgroundImage: `url(${heroesBg})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#181A1C66] to-black z-0" />
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl font-bold mb-4">The Avengers</h1>
                    <p className="text-base leading-relaxed mb-5">
                        Ketika musuh yang kuat mengancam keamanan global, Nick Fury, direktur S.H.I.E.L.D., membentuk tim pahlawan super
                        termasuk Iron Man, Captain America, Thor, Hulk, Black Widow, dan Hawkeye untuk menyelamatkan dunia dari kehancuran besar.
                    </p>

                    <div className="flex items-center gap-4 flex-wrap">
                        <button className="bg-[#0F1E93] px-6 py-2 rounded-full text-sm">Mulai</button>
                        <button className="bg-white/20 px-6 py-2 rounded-full text-sm">Selengkapnya</button>
                        <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center text-sm font-bold">
                            18+
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-10 px-6 md:px-16">
                <h2 className="text-white text-xl mb-4">Melanjutkan Tonton Film</h2>
                <div className="relative">
                    <button onClick={() => scrollByRef(refCarousel, -1)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl rounded-full px-3 z-10">
                        &#8249;
                    </button>
                    <div ref={refCarousel} className="flex gap-5 overflow-x-auto scrollbar-hide scroll-smooth">
                        {[...Array(7)].map((_, i) => (
                            <MovieCard key={i} src={movieImage} title="Duty After School" rating="⭐ 4.5/5" />
                        ))}
                    </div>
                    <button onClick={() => scrollByRef(refCarousel, 1)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white text-2xl rounded-full px-3 z-10">
                        &#8250;
                    </button>
                </div>
            </section>

            <SimpleCarousel title="Top Rating Film dan Series Hari Ini" images={Array(10).fill(filmImage)} refEl={refTopRating} />
            <SimpleCarousel title="Film Tranding" images={Array(10).fill(trendingImage)} refEl={refTrending} />
            <SimpleCarousel title="Rilis Baru" images={Array(10).fill(rilisImage)} refEl={refNewRelease} />

            <footer className="border-t border-white/20 py-10 px-6 md:px-16 bg-[#181A1C]">
                <div className="flex flex-wrap justify-between gap-10">
                    <div>
                        <img src={logo} alt="Logo" className="w-36 mb-3" />
                        <p className="text-sm text-gray-400">&copy; 2025 Chill All Rights Reserved.</p>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold mb-2">Genre</h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-y-2 text-sm text-gray-400">
                            {['Aksi', 'Anak-anak', 'Anime', 'Britania', 'Drama', 'Fantasi Ilmiah', 'Kejahatan', 'KDrama', 'Komedi', 'Petualangan', 'Perang', 'Romantis', 'Sains & alam', 'Thriller'].map((genre, i) => (
                                <li key={i} className="hover:text-white cursor-pointer">{genre}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold mb-2">Bantuan</h4>
                        <ul className="text-sm text-gray-400">
                            {['Bantuan', 'FAQ', 'Kontak kami', 'Privasi', 'Syarat & Ketentuan'].map((item, i) => (
                                <li key={i} className="hover:text-white cursor-pointer mb-1">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Beranda;
