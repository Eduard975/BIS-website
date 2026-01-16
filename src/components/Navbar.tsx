import { useState, useEffect } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Detectăm scroll-ul pentru a schimba aspectul barei
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-best-teal font-semibold"
        : "text-gray-800 hover:text-best-teal"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[60px] z-[1000] flex items-center transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[1200px] mx-auto px-5 flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl text-gray-900">
          BEST <span className="text-best-teal font-black">Symposium</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/ood" className={navLinkClasses}>
            OOD
          </NavLink>
          <NavLink to="/partners" className={navLinkClasses}>
            Partners
          </NavLink>
        </div>

        {/* Burger (Mobile) - neschimbat, dar adaptat la fundal */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-gray-800 transition-all ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-[60px] left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-200 flex flex-col p-6 gap-4 md:hidden">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={navLinkClasses}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsOpen(false)}
            className={navLinkClasses}
          >
            About
          </NavLink>
          {/* ... restul link-urilor */}
        </div>
      )}
    </nav>
  );
}
