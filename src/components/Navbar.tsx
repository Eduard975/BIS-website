import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import CustomContainer from "./CustomContainer";
import bisLogo from "../assets/logos/bis_logo.png";
import { useWindowSize } from "../hooks/useWindowSize"; // Adjust path as needed

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Partners", path: "/partners" },
  { name: "Conference", path: "/conference" },
];

export default function Navbar() {
  const { isMobile } = useWindowSize();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-close menu if window resizes to desktop
  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }
  }, [isMobile]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-secondary font-semibold"
        : "text-gray-800 hover:text-secondary active:text-secondary"
    }`;

  // Calculate background classes
  // If Open: Solid white (so menu isn't transparent over text)
  // If Scrolled: Translucent + Blur
  // Default: Solid white (or transparent if you prefer that at top)
  const navBackgroundClass = isOpen
    ? "bg-white shadow-lg border-gray-200"
    : isScrolled
      ? "bg-white/70 backdrop-blur-md border-gray-200/50 shadow-sm"
      : "bg-white border-transparent";

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[1000] transition-all duration-300 border-b ${navBackgroundClass}`}
    >
      <div className="relative z-50">
        <CustomContainer
          width="wide"
          paddingX="none"
          className="flex justify-between items-center h-[60px] px-4 md:px-8"
        >
          {/* LOGO */}
          <img
            src={bisLogo}
            alt="Logo"
            className="h-8 md:h-10 w-auto max-w-[120px] md:max-w-[200px] object-contain select-none"
          />

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={getNavLinkClass}
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* BURGER BUTTON */}
          {/* BURGER BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-800 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            {/* Container: w-6 (24px) x h-5 (20px) */}
            <div className="relative w-6 h-5">
              {/* Top Line: Moves from top-0 to center (top-2.5) and rotates */}
              <span
                className={`absolute left-0 block w-full h-0.5 bg-current transition-all duration-300 ease-in-out transform ${
                  isOpen ? "top-2.5 rotate-45" : "top-0"
                }`}
              />

              {/* Middle Line: Fades out */}
              <span
                className={`absolute left-0 block w-full h-0.5 bg-current transition-all duration-300 ease-in-out top-2.5 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Bottom Line: Moves from top-5 to center (top-2.5) and rotates */}
              <span
                className={`absolute left-0 block w-full h-0.5 bg-current transition-all duration-300 ease-in-out transform ${
                  isOpen ? "top-2.5 -rotate-45" : "top-5"
                }`}
              />
            </div>
          </button>
        </CustomContainer>
      </div>

      {/* MOBILE MENU (Unified Wrapper) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <CustomContainer
          paddingX="none"
          className="px-4 border-t border-gray-100"
        >
          <div className="flex flex-col py-6 gap-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-lg py-2 ${
                    isActive
                      ? "text-secondary font-semibold pl-2 border-l-4 border-secondary"
                      : "text-gray-600 hover:text-gray-900"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </CustomContainer>
      </div>
    </nav>
  );
}
