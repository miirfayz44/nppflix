import { useState } from "react";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-[18px] h-[18px]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
  </svg>
);

const navLinks = [
  { label: "О КОМПАНИИ", href: "#" },
  { label: "ПРОДУКЦИЯ", href: "#" },
  { label: "УСЛУГИ", href: "#" },
  { label: "СТАТЬИ", href: "#" },
  { label: "КОНТАКТЫ", href: "#" },
];

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("О КОМПАНИИ");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="h-max bg-[#0c0c0c] text-white">

      <header className="w-full h-[120px] bg-[#0f0f0f] border-b border-[#1f1f1f]">
        <div className="max-w-[1320px] mx-auto h-full px-[40px] flex items-center justify-between">

          <div className="w-[220px] h-[80px] flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="hidden md:flex items-center gap-[60px] text-[15px]">
            <a
              href="tel:+74950080812"
              className="text-[#ff6a00] font-semibold hover:opacity-80 transition"
            >
              +7 (495) 008 08 12
            </a>

            <a
              href="mailto:info@nppfliks.ru"
              className="text-[#ff6a00] hover:opacity-80 transition"
            >
              info@nppfliks.ru
            </a>
          </div>

          <div className="flex items-center w-[260px] h-[38px] bg-white border-2 border-[#ff6a00] rounded-full px-[18px]">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Поиск..."
              className="flex-1 bg-transparent text-black text-[14px] outline-none placeholder-gray-400"
            />
            <button className="text-[#ff6a00]">
              <SearchIcon />
            </button>
          </div>
        </div>
      </header>

      <nav className="w-full h-[70px] bg-[#0f0f0f] border-b border-[#1f1f1f]">
        <div className="max-w-[1320px] mx-auto h-full px-[40px] flex items-center">
          <div className="flex items-center gap-[6px] mr-[40px] gap-[-2px]">
            <img src="/1.png" alt="" />
            <img src="/2.png" alt="" />
            <img src="/3.png" alt="" />
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveNav(link.label)}
              className={`relative px-[32px] h-full flex items-center text-[15px] font-bold tracking-[2px] transition duration-200
                ${activeNav === link.label
                  ? "text-[#ff6a00]"
                  : "text-[#cfcfcf] hover:text-white"
                }`}
            >
              {link.label}

              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-[#ff6a00] transition-all duration-300
                ${activeNav === link.label
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                  }`}
              />
            </a>
          ))}
        </div>
      </nav>

    </div>
  );
}