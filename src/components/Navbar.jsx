import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";
import profilePic from "../assets/user.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  return (
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
          <div className="absolute right-0 mt-2 w-40 bg-neutral-800 text-white rounded-md shadow-lg z-50">
            <ul className="py-2 text-sm">
              <li
                className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                onClick={() => navigate("/movie")}
              >
                Movie
              </li>
              <li
                className="px-4 py-2 hover:bg-white/10 cursor-pointer"
                onClick={() => navigate("/")}
              >
                Keluar
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
