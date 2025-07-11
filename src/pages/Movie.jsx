import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const defaultForm = {
  Title: "",
  Year: "",
  Rated: "",
  Runtime: "",
  Genre: "",
  Director: "",
  Actors: "",
  Plot: "",
  Type: "",
  imdbRating: "",
  totalSeasons: "",
  Images: [""],
};

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState(defaultForm);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("movies");
    if (stored && stored !== "[]") {
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

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (index, value) => {
    const updatedImages = [...form.Images];
    updatedImages[index] = value;
    setForm({ ...form, Images: updatedImages });
  };

  const addImageField = () => {
    setForm({ ...form, Images: [...form.Images, ""] });
  };

  const handleSubmit = () => {
    if (!form.Title || !form.Year) return;

    if (editIndex !== null) {
      const updated = [...movies];
      updated[editIndex] = form;
      setMovies(updated);
      setEditIndex(null);
    } else {
      setMovies([...movies, form]);
    }

    setForm(defaultForm);
  };

  const handleDelete = (index) => {
    const filtered = movies.filter((_, i) => i !== index);
    setMovies(filtered);
  };

  const handleEdit = (index) => {
    setForm(movies[index]);
    setEditIndex(index);
  };
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

      <div className="p-6 text-white min-h-screen bg-[#181A1C]">
        <h2 className="text-2xl font-bold mb-4">Manajemen Film Lengkap</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <input
            name="Title"
            placeholder="Judul"
            value={form.Title}
            onChange={handleChange}
            className="px-3 py-2 rounded text-black w-full"
          />
          <input
            name="Year"
            placeholder="Tahun"
            value={form.Year}
            onChange={handleChange}
            className="px-3 py-2 rounded text-black w-full"
          />
          <input
            name="Rated"
            placeholder="Rating (PG-13)"
            value={form.Rated}
            onChange={handleChange}
            className="px-3 py-2 rounded text-black w-full"
          />
          <input
            name="Runtime"
            placeholder="Durasi (contoh: 120 min)"
            value={form.Runtime}
            onChange={handleChange}
            className="px-3 py-2 rounded text-black w-full"
          />
          <input
            name="Genre"
            placeholder="Genre"
            value={form.Genre}
            onChange={handleChange}
            className="px-3 py-2 rounded text-black w-full"
          />
          <input
            name="Director"
            placeholder="Sutradara"
            value={form.Director}
            onChange={handleChange}
            className="px-3 py-2 rounded text-black w-full"
          />
          <input
            name="Actors"
            placeholder="Pemeran"
            value={form.Actors}
            onChange={handleChange}
            className="px-3 py-2 rounded text-black w-full"
          />
          <textarea
            name="Plot"
            placeholder="Deskripsi / Plot"
            value={form.Plot}
            onChange={handleChange}
            className="px-3 py-2 rounded text-black w-full"
          />
          <select
            name="Type"
            value={form.Type}
            onChange={handleChange}
            className="px-3 py-2 rounded text-black w-full"
          >
            <option value="">Pilih Tipe</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>

          {form.Type === "series" && (
            <input
              name="totalSeasons"
              placeholder="Total Seasons"
              value={form.totalSeasons}
              onChange={handleChange}
              className="px-3 py-2 rounded text-black w-full"
            />
          )}

          <input
            name="imdbRating"
            placeholder="IMDb Rating"
            value={form.imdbRating}
            onChange={handleChange}
            className="px-3 py-2 rounded text-black w-full"
          />
        </div>

        <div className="mb-6">
          <label className="block mb-2 text-sm text-white font-semibold">
            Link Gambar (boleh lebih dari 1):
          </label>
          {form.Images.map((img, index) => (
            <input
              key={index}
              value={img}
              onChange={(e) => handleImageChange(index, e.target.value)}
              placeholder={`Gambar #${index + 1}`}
              className="px-3 py-2 rounded text-black w-full mb-2"
            />
          ))}
          <button
            onClick={addImageField}
            className="text-sm bg-gray-600 px-3 py-1 rounded hover:bg-gray-500"
          >
            Tambah Gambar
          </button>
        </div>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 px-4 py-2 rounded mb-6"
        >
          {editIndex !== null ? "Update" : "Tambah"}
        </button>

        {movies.length === 0 ? (
          <p className="text-gray-400">Belum ada data film.</p>
        ) : (
          <ul className="space-y-4">
            {movies.map((movie, i) => (
              <li
                key={i}
                className="bg-white/10 px-4 py-3 rounded flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
              >
                <div>
                  <p className="font-semibold text-lg">{movie.Title}</p>
                  <p className="text-sm text-gray-300">
                    {movie.Type} | {movie.Genre} | {movie.Year} |{" "}
                    {movie.Runtime}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(i)}
                    className="text-yellow-400 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-red-400 text-sm"
                  >
                    Hapus
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Footer genres={genres} />
    </div>
  );
};

export default Movie;
