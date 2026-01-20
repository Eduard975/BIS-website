import { useState, useEffect } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-md border-b border-gray-200/50 shadow-sm"
          : "bg-white border-b border-transparent"
      }`}
    >
      {/* 1. The Main Navbar Content */}
      <div className="h-[60px] flex items-center">
        <div className="w-full max-w-[1200px] mx-auto px-5 flex justify-between items-center">
          {/* Logo */}
          <img
            src="src/assets/logos/bis_logo.png"
            alt="BEST Iasi Symposium Logo"
            className="h-10 w-auto"
          />

          {/* Desktop Links (Hidden on mobile) */}
          <div className="hidden md:flex gap-8">
            <NavLink to="/" className={navLinkClasses}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClasses}>
              About
            </NavLink>
            <NavLink to="/partners" className={navLinkClasses}>
              Partners
            </NavLink>
            <NavLink to="/conference" className={navLinkClasses}>
              Conference
            </NavLink>
          </div>

          {/* Burger Button */}
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
      </div>

      {/* 2. The Mobile Menu (Now seamlessly part of the same glass block) */}
      <div
        className={`grid transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col p-6 gap-4 border-t border-gray-200/20">
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
            <NavLink
              to="/partners"
              onClick={() => setIsOpen(false)}
              className={navLinkClasses}
            >
              Partners
            </NavLink>
            <NavLink
              to="/conference"
              onClick={() => setIsOpen(false)}
              className={navLinkClasses}
            >
              Conference
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
