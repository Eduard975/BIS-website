import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { HiOutlineArrowLeft, HiBars3, HiXMark } from "react-icons/hi2";
import CustomContainer from "./CustomContainer";
import bisLogo from "../../assets/logos/bis.svg";
import { useWindowSize } from "../../hooks/useWindowSize";

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Partners", path: "/partners" },
  { name: "Conference", path: "/conference" },
];

export default function Navbar() {
  const { isMobile } = useWindowSize();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isConferencePage = pathname === "/conference";
  const isMenuOpen = isMobile && isOpen;

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const getNavLinkClass = ({
    isActive,
    name,
  }: {
    isActive: boolean;
    name: string;
  }) => {
    const isConf = name === "Conference";

    let classes =
      "transition-all duration-300 text-sm md:text-base tracking-wide px-4 py-2 rounded-full whitespace-nowrap ";

    if (isConf) {
      classes += isActive
        ? "bg-secondary text-white border-2 border-secondary "
        : "bg-secondary text-white hover:bg-white hover:text-secondary hover:border-2 hover:border-secondary";
    } else {
      classes += isActive
        ? "text-secondary font-semibold "
        : "text-gray-800 hover:text-secondary ";
    }
    return classes;
  };

  const navBackgroundClass = isMenuOpen
    ? "bg-white" // Removed shadow here so the dropdown shadow takes precedence
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
          className="flex justify-between items-center px-4 md:px-8 h-[var(--navbar-mobile-height)] md:h-[var(--navbar-height)]"
        >
          {/* LOGO */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="h-full flex items-center shrink-0"
          >
            <img
              src={bisLogo}
              alt="Logo"
              className="h-[60%] md:h-[70%] w-auto object-contain select-none transition-all duration-300"
            />
          </NavLink>

          {/* DESKTOP MENU - Compact Gap */}
          <div className="hidden md:flex items-center gap-5">
            {isConferencePage ? (
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-secondary font-bold hover:translate-x-[-5px] transition-transform duration-300 cursor-pointer text-base"
              >
                <HiOutlineArrowLeft className="text-xl" />
                Back to Home
              </button>
            ) : (
              NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    getNavLinkClass({ isActive, name: item.name })
                  }
                >
                  {item.name}
                </NavLink>
              ))
            )}
          </div>

          {/* MOBILE CONTROLS */}
          <div className="md:hidden flex items-center">
            {isConferencePage ? (
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-secondary font-bold text-sm"
              >
                <HiOutlineArrowLeft className="text-lg" />
                Home
              </button>
            ) : (
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-800 focus:outline-none"
                aria-label="Toggle Menu"
              >
                {isOpen ? (
                  <HiXMark className="w-8 h-8" />
                ) : (
                  <HiBars3 className="w-8 h-8" />
                )}
              </button>
            )}
          </div>
        </CustomContainer>
      </div>

      {/* MOBILE MENU DROPDOWN - Auto Height + Shadow */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white shadow-xl ${
          isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <CustomContainer
          paddingX="none"
          // Removed 'h-screen' logic. Now it's just padding vertical (py-6)
          className="px-6 border-t border-gray-100"
        >
          <div className="flex flex-col py-6 gap-6">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `text-xl py-2 ${
                    isActive
                      ? "text-secondary font-semibold border-l-4 border-secondary pl-3"
                      : "text-gray-600 pl-4"
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
