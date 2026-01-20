import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";
import { NavLink } from "react-router";
import SocialLinks from "./SocialLinks";
import gyroscopImg from "../assets/images/gyroscop.png";
import sigla_best_alba from "../assets/logos/Sigla_BEST_alba.png";

const SITE_MAP = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Partners", to: "/partners" },
  { name: "Conference", to: "/conference" },
];

const LEGAL_LINKS = [
  { name: "GDPR BIS 2026", to: "#" },
  { name: "Cookies Policy?", to: "#" },
];

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-semibold mb-4 text-lightTxt text-left">
    {children}
  </h3>
);

const ContactItem = ({
  Icon,
  children,
}: {
  Icon: any;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3 group text-lightTxt text-left">
    <Icon className="text-2xl mt-1 flex-shrink-0 transition-colors" />
    <div className="text-sm md:text-base">{children}</div>
  </div>
);

export default function Footer() {
  return (
    <footer className="w-full bg-primary py-12 border-t border-gray-200/20 text-lightTxt relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between items-center md:items-stretch gap-12 relative z-10">
        {/* Left Column (Logo, CTA) */}
        <div className="w-full max-w-60 flex flex-col justify-between items-center md:items-start">
          <div className="flex flex-col gap-6 items-center md:items-start">
            <img
              src={sigla_best_alba}
              alt="BEST Logo"
              className="w-full h-auto"
            />
            <SocialLinks />
          </div>

          <div className="mt-8 md:mt-4 flex flex-col gap-8 text-lightTxt">
            <p className="text-lg text-justify md:text-left text-center">
              Invest 3.5% of your tax in BEST Iași. It's free, fast, and fuels
              engineering talent.
            </p>

            <button
              className="mx-auto md:mx-0 md:-ml-2 w-fit cursor-pointer bg-secondary px-6 py-2.5 rounded-full font-semibold shadow-md transition-all hover:scale-105 active:scale-95 text-lightTxt"
              onClick={() =>
                window.open("https://redirectioneaza.ro/best-iasi/")
              }
            >
              Invest Here
            </button>
          </div>
        </div>

        {/* Middle Column (Contact, Legal) */}
        <div className="flex flex-col gap-8 w-full md:w-auto items-center md:items-start">
          <div className="w-fit flex flex-col gap-8 text-left">
            <section>
              <FooterHeading>Contact</FooterHeading>

              <div className="flex flex-col gap-3">
                <ContactItem Icon={HiOutlineLocationMarker}>
                  Cămin T19, et.3, cam. 16A
                  <br />
                  Aleea Prof. Vasile Petrescu nr. 1A,
                  <br />
                  Cod 700560, Iași, România
                </ContactItem>

                <ContactItem Icon={HiOutlineMail}>
                  <a
                    href="mailto:contact@bestis.ro"
                    className="hover:underline transition-colors text-lightTxt"
                  >
                    contact@bestis.ro
                  </a>
                </ContactItem>

                <ContactItem Icon={HiOutlinePhone}>
                  <a
                    href="tel:+40754665038"
                    className="hover:underline transition-colors text-lightTxt"
                  >
                    +40 754 665 038
                  </a>
                </ContactItem>
              </div>
            </section>

            <section>
              <FooterHeading>Legal info</FooterHeading>

              <nav className="flex flex-col gap-1 text-sm md:text-base text-lightTxt">
                {LEGAL_LINKS.map((link) => (
                  <a key={link.name} href={link.to} className="hover:underline">
                    {link.name}
                  </a>
                ))}
              </nav>
            </section>
          </div>

          {/* Copyright - Stays centered on mobile, moves left on desktop */}
          <div className="flex items-center justify-center md:justify-start gap-2 md:mt-auto pt-4 md:pt-0 text-lightTxt w-full">
            <BiCopyright className="text-lg" />
            <p className="text-xl font-medium">2026 BEST Iași</p>
          </div>
        </div>

        {/* Right Column (Site Map) - HIDDEN ON MOBILE */}
        <section className="hidden md:block min-w-[150px] w-full md:w-auto">
          <FooterHeading>Site Map</FooterHeading>

          <nav className="flex flex-col gap-1.5 text-sm md:text-base text-lightTxt">
            {SITE_MAP.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="hover:underline transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </section>
      </div>

      {/* Background Image - HIDDEN ON MOBILE */}
      <img
        src={gyroscopImg}
        alt=""
        className="
          absolute
          bottom-0
          right-0
          top-53
          h-auto
          rotate-12
          w-[50%]
          max-w-[600px]
          opacity-40
          brightness-[0.3]
          pointer-events-none
          hidden md:block
        "
      />
    </footer>
  );
}
