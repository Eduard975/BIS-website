import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router"; // Added useLocation & useNavigate
import CustomContainer from "./CustomContainer";
import bisLogo from "../../assets/logos/bis.svg";
import { useWindowSize } from "../../hooks/useWindowSize";
import { HiOutlineArrowLeft } from "react-icons/hi"; // Using an arrow icon

const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Partners", path: "/partners" },
  { name: "Conference", path: "/conference" },
];

export default function Navbar() {
  const { isMobile } = useWindowSize();
  const { pathname } = useLocation(); // Detect current page
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

  // Sync scroll lock with menu state
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // STYLING LOGIC: Conference Link with Outline
  const getNavLinkClass = ({
    isActive,
    name,
  }: {
    isActive: boolean;
    name: string;
  }) => {
    const isConf = name === "Conference";

    // Base styles
    let classes =
      "transition-all duration-300 text-[1.1vw] tracking-wide px-4 py-1.5 rounded-full ";

    if (isConf) {
      // The "Invest Button" style: Blue outline
      classes += isActive
        ? "bg-secondary text-white border-2 border-secondary "
        : "border-2 border-secondary text-darkTxt hover:bg-secondary hover:text-white ";
    } else {
      // Standard links
      classes += isActive
        ? "text-secondary font-semibold "
        : "text-gray-800 hover:text-secondary ";
    }

    return classes;
  };

  const navBackgroundClass = isMenuOpen
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
          className="flex justify-between items-center h-[--navbar-height] px-[2vw]"
        >
          {/* LOGO (Links to Home) */}
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img
              src={bisLogo}
              alt="Logo"
              className="w-[20vw] md:w-[8vw] max-w-[150px] md:max-w-none p-[3vh] md:p-[2vh] object-contain select-none transition-all duration-300"
            />
          </NavLink>

          {/* DESKTOP CONTENT */}
          <div className="hidden md:flex items-center gap-[1.5vw]">
            {isConferencePage ? (
              /* BACK BUTTON: Only shown on Conference Page */
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 text-secondary font-bold text-[1.1vw] hover:translate-x-[-5px] transition-transform duration-300 cursor-pointer"
              >
                <HiOutlineArrowLeft className="text-xl" />
                Back to Home
              </button>
            ) : (
              /* STANDARD MENU: Shown on all other pages */
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

          {/* BURGER BUTTON (Conditional Logic) */}
          {!isConferencePage && (
            <button
              onClick={toggleMenu}
              className="md:hidden p-[1vh] text-gray-800 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {/* ... (Burger Icon Spans) ... */}
              <div className="relative w-[6vw] h-[5vw] max-w-[30px] max-h-[24px]">
                <span
                  className={`absolute left-0 block w-full h-[0.5vh] max-h-[3px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "top-[2.2vw] rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 block w-full h-[0.5vh] max-h-[3px] bg-current rounded-full transition-all duration-300 top-[2.2vw] ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute left-0 block w-full h-[0.5vh] max-h-[3px] bg-current rounded-full transition-all duration-300 ${isMenuOpen ? "top-[2.2vw] -rotate-45" : "top-[4.4vw]"}`}
                />
              </div>
            </button>
          )}

          {/* MOBILE BACK BUTTON (Shown instead of burger on Conference page) */}
          {isConferencePage && isMobile && (
            <button
              onClick={() => navigate("/")}
              className="md:hidden flex items-center gap-2 text-secondary font-bold text-lg"
            >
              <HiOutlineArrowLeft />
              Home
            </button>
          )}
        </CustomContainer>
      </div>

      {/* MOBILE MENU (Stays as is) */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}
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
                  `text-[4.5vw] py-[1vh] ${isActive ? "text-secondary font-semibold border-l-[1vw] border-secondary pl-2" : "text-gray-600"}`
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
