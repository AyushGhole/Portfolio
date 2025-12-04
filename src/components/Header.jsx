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
          ? "backdrop-blur-2xl bg-[#020617]/80 shadow-[0_0_40px_rgba(79,70,229,0.45)] border-b border-white/10"
          : "backdrop-blur-xl bg-transparent"
      }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-400 shadow-lg shadow-indigo-900/40" /> */}
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-widest text-indigo-100 drop-shadow-md">
            AYUSH GHOLE
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-indigo-200 font-medium text-sm">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className={`relative px-2 py-1 rounded-full transition-all duration-300 group ${
                active === sec
                  ? "text-white bg-white/10 shadow-[0_0_20px_rgba(79,70,229,0.6)]"
                  : "text-indigo-200/80 hover:text-white hover:bg-white/5"
              }`}>
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
              <span
                className={`absolute left-2 right-2 -bottom-1 h-0.5 bg-gradient-to-r from-indigo-400 via-sky-400 to-pink-400 rounded-full transition-all duration-300 ${
                  active === sec
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-indigo-100 text-3xl hover:text-white transition-colors duration-300 drop-shadow-md"
            aria-label="Toggle Menu">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } bg-gradient-to-b from-black via-[#020617] to-black`}>
        {sections.map((sec) => (
          <a
            key={sec}
            href={`#${sec}`}
            className={`text-3xl font-bold transition-colors duration-300 drop-shadow-lg ${
              active === sec
                ? "text-indigo-300"
                : "text-white hover:text-indigo-300"
            }`}
            onClick={closeMenu}>
            {sec.charAt(0).toUpperCase() + sec.slice(1)}
          </a>
        ))}
      </div>
    </header>
  );
}
