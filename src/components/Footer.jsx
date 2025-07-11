import logo from "../assets/Logo.png";

const Footer = ({ genres = [] }) => {
  const helpLinks = [
    "Bantuan",
    "FAQ",
    "Kontak kami",
    "Privasi",
    "Syarat & Ketentuan",
  ];

  return (
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
          <ul className="grid grid-cols-3 sm:grid-cols-4 gap-y-3 text-sm text-gray-400">
            {genres.map((genre, i) => (
              <li key={i} className="hover:text-white cursor-pointer">
                {genre}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-base font-semibold mb-2">Bantuan</h4>
          <ul className="text-sm text-gray-400">
            {helpLinks.map((item, i) => (
              <li key={i} className="hover:text-white cursor-pointer mb-1">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
