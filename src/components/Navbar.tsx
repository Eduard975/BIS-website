import { useState, useEffect } from "react";
import { NavLink } from "react-router";
import CustomContainer from "./CustomContainer";
import bisLogo from "../assets/logos/bis_logo.png";
import { useWindowSize } from "../hooks/useWindowSize";

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
    `transition-colors duration-200 text-[1.1vw] tracking-wide ${
      isActive
        ? "text-secondary font-semibold"
        : "text-gray-800 hover:text-secondary active:text-secondary"
    }`;

  // Calculate background classes
  const navBackgroundClass = isOpen
    ? "bg-white shadow-lg border-gray-200"
    : isScrolled
      ? "bg-white/70 backdrop-blur-md border-gray-200/50 shadow-sm"
      : "bg-white border-transparent shadow-sm";

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-[1000] transition-all duration-300 border-b ${navBackgroundClass}`}
    >
      <div className="relative z-50">
        <CustomContainer
          width="wide"
          paddingX="none"
          // UPDATED: Now uses the consistent CSS variable for height
          className="flex justify-between items-center h-[--navbar-height] px-[2vw]"
        >
          {/* LOGO */}
          <img
            src={bisLogo}
            alt="Logo"
            className="
            w-[25vw] md:w-[8vw] max-w-[150px] 
            md:max-w-none p-[2vh] object-contain 
            select-none transition-all duration-300"
          />

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-[2.5vw]">
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-[1vh] text-gray-800 focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={isOpen}
          >
            <div className="relative w-[6vw] h-[5vw] max-w-[30px] max-h-[24px]">
              <span
                className={`absolute left-0 block w-full h-[0.5vh] max-h-[3px] bg-current rounded-full transition-all duration-300 ease-in-out transform ${
                  isOpen ? "top-[2.2vw] rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block w-full h-[0.5vh] max-h-[3px] bg-current rounded-full transition-all duration-300 ease-in-out top-[2.2vw] ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 block w-full h-[0.5vh] max-h-[3px] bg-current rounded-full transition-all duration-300 ease-in-out transform ${
                  isOpen ? "top-[2.2vw] -rotate-45" : "top-[4.4vw]"
                }`}
              />
            </div>
          </button>
        </CustomContainer>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <CustomContainer
          paddingX="none"
          className="px-[4vw] border-t border-gray-100"
        >
          <div className="flex flex-col py-[3vh] gap-[3vh]">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-[4.5vw] py-[1vh] ${
                    isActive
                      ? "text-secondary font-semibold pl-[2vw] border-l-[1vw] border-secondary"
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
