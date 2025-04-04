import Logo from "../../assets/Logo.png";
import { useState } from "react";

const navbarLinks = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Nosotros",
    link: "/nosotros",
  },
  {
    id: 3,
    title: "Contacto",
    link: "/contacto",
  },
  {
    id: 4,
    title: "Soporte",
    link: "/soporte",
  },
];
const navbarRedes = [
  {
    id: 1,
    title: "Instagram",
    link: "https://www.instagram.com/lllit_3",
    icono: "bi bi-instagram",
  },
  {
    id: 2,
    title: "Bandcamp",
    link: "https://lllit3.bandcamp.com/",
    icono: "bi bi-cassette",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 bg-[#120d1754] w-full backdrop-blur-md z-50">
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        {/* Logo Navbar */}
        <div>
          <img
            src={Logo}
            alt="Logo Principal"
            className="w-[50px] sm:w-[50px] rounded-full shadow-md"
          />
        </div>

        {/* Boton para movil */}
        <button
          className="text-white cursor-pointer md:hidden"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navegacion desktop */}
        <div className="hidden md:block">
          <ul className="flex sm:space-x-10 space-x-4">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className=" sm:text-lg text-sm hover:text-sky-200 transition-transform hover:scale-110 transform inline-block duration-200"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarRedes.map((redes) => (
              <li key={redes.id}>
                <a
                  href={redes.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                >
                  <i
                    className={`${redes.icono} sm:text-2xl text-lg text-white hover:text-sky-200 transition-all duration-300`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu para mobile */}
      <div
        className={`md:hidden absolute w-full bg-[#1f122cf7] backdrop-blur-md transition-all duration-200 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {navbarLinks.map((link) => (
            <li key={link.id} className="py-2 text-center">
              <a
                onClick={() => setIsOpen(false)}
                href={link.link}
                className="text-white hover:text-sky-200"
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* Links RRSS mobile */}
        <ul className="flex space-x-4 px-4 py-2 border-t border-purple-700 justify-center">
          {navbarRedes.map((redes) => (
            <li key={redes.id}>
              <a
                onClick={() => setIsOpen(false)}
                href={redes.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <i
                  className={`${redes.icono} text-lg text-white hover:text-sky-200 `}
                ></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
