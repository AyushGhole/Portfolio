// src/components/Header.jsx
import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Scroll effect for shadow and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "experience",
        "contact",
      ];
      let current = "home";
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 80) {
          current = section;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["about", "projects", "skills", "experience", "contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-dark/20 shadow-lg ring-1 ring-indigo-400/30"
          : "backdrop-blur-md bg-blue/30"
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest text-indigo-400 drop-shadow-md">
          AYUSH GHOLE
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-indigo-400 font-semibold">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`relative group transition-colors duration-300 ${
                active === sec ? "text-indigo-300" : "text-indigo"
              }`}>
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-400 rounded-full transition-all duration-300 ${
                  active === sec ? "w-full" : "w-0 group-hover:w-full"
                }`}></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-indigo-400 text-3xl hover:text-indigo-300 transition-colors duration-300 drop-shadow-md"
            aria-label="Toggle Menu">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen z-50 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ backgroundColor: "rgba(0,0,0,0.95)" }} // Fully dark background
      >
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className="text-white text-3xl font-bold hover:text-indigo-300 transition-colors duration-300 drop-shadow-lg"
            onClick={closeMenu}>
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
      </div>
    </header>
  );
}
