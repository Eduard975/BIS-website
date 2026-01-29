import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { BiCopyright } from "react-icons/bi";
import { NavLink } from "react-router";
import SocialLinks from "./SocialLinks";
import CustomContainer from "./CustomContainer";
import gyroscopImg from "../../assets/svgs/gyroscop.svg";
import sigla_best_alba from "../../assets/logos/Sigla_BEST_alba.png";

const SITE_MAP = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Partners", to: "/partners" },
  { name: "Conference", to: "/conference" },
];

const LEGAL_LINKS = [
  { name: "GDPR BIS 2026", to: "/gdpr" },
  { name: "Cookies Policy", to: "/cookies" },
];

const CONTACT_INFO = {
  address: (
    <>
      Cămin T19, et.3, cam. 16A
      <br />
      Aleea Prof. Vasile Petrescu nr. 1A,
      <br />
      Cod 700560, Iași, România
    </>
  ),
  email: "contact@bestis.ro",
  phone: "+40 754 665 038",
  phoneLink: "+40754665038",
  redirectLink: "https://redirectioneaza.ro/best-iasi/",
};

// --- 2. Sub-components with Proper Types ---

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-semibold mb-4 text-lightTxt text-left">
    {children}
  </h3>
);

const ContactItem = ({
  Icon,
  children,
}: {
  // FIX: Proper typing instead of 'any'
  Icon: React.ElementType;
  children: React.ReactNode;
}) => (
  <div className="flex items-start gap-3 group text-lightTxt text-left">
    <Icon className="text-2xl mt-1 flex-shrink-0 transition-colors" />
    <div className="text-sm md:text-base leading-relaxed">{children}</div>
  </div>
);

export default function Footer() {
  return (
    <footer className="w-full bg-primary py-12 border-t border-gray-200/20 text-lightTxt relative overflow-hidden">
      {/* UPDATED: Added explicit props to delimit left/right space 
         matching the standard layout (1200px width, px-8 padding) 
      */}
      <CustomContainer
        width="standard"
        paddingX="normal"
        className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-12 relative z-10"
      >
        {/* --- Left Column (Logo, CTA) --- */}
        <div className="w-full max-w-70 flex flex-col justify-between items-center md:items-start">
          <div className="flex flex-col gap-6 items-center md:items-start">
            <img
              src={sigla_best_alba}
              alt="BEST Iași Logo"
              className="w-full h-auto " // Added max-width safety
              loading="lazy"
            />
            <SocialLinks />
          </div>

          <div className="mt-8 md:mt-4 flex flex-col gap-8 text-lightTxt items-center md:items-start">
            {/* FIX: Removed text-justify for better readability on mobile */}
            <p className="text-lg text-center md:text-left max-w-sm">
              Invest 3.5% of your tax in BEST Iași. It's free, fast, and fuels
              engineering talent.
            </p>

            {/* FIX: Changed button to <a> for SEO and Accessibility */}
            <a
              href={CONTACT_INFO.redirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary px-6 py-2.5 rounded-full font-semibold shadow-md transition-all hover:scale-105 active:scale-95 text-lightTxt text-center"
            >
              Invest Here
            </a>
          </div>
        </div>

        {/* --- Middle Column (Contact, Legal) --- */}
        <div className="w-full max-w-xs mx-auto md:max-w-none md:mx-0 md:w-auto flex flex-col gap-8 items-start">
          <div className="flex flex-col gap-8 text-left w-full">
            <section>
              <FooterHeading>Contact</FooterHeading>

              <div className="flex flex-col gap-4">
                <ContactItem Icon={HiOutlineLocationMarker}>
                  {CONTACT_INFO.address}
                </ContactItem>

                <ContactItem Icon={HiOutlineMail}>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="hover:underline transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </ContactItem>

                <ContactItem Icon={HiOutlinePhone}>
                  <a
                    href={`tel:${CONTACT_INFO.phoneLink}`}
                    className="hover:underline transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </ContactItem>
              </div>
            </section>

            <section>
              <FooterHeading>Legal info</FooterHeading>
              <nav className="flex flex-col gap-2 text-sm md:text-base text-lightTxt">
                {LEGAL_LINKS.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    className="hover:underline w-fit"
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
            </section>
          </div>
          {/* Copyright */}
          <div className="flex items-center justify-center md:justify-start gap-2 md:mt-auto pt-4 md:pt-0 text-lightTxt w-full">
            <BiCopyright className="text-lg" />
            <p className="text-sm md:text-base font-medium">2026 BEST Iași</p>
          </div>
        </div>

        {/* --- Right Column (Site Map) - HIDDEN ON MOBILE --- */}
        <section className="hidden md:block min-w-[150px] w-full md:w-auto">
          <FooterHeading>Site Map</FooterHeading>
          <nav className="flex flex-col gap-1 text-sm md:text-base text-lightTxt">
            {SITE_MAP.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="hover:underline transition-colors w-fit"
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </section>
      </CustomContainer>

      {/* Background Image - Optimized */}
      <img
        src={gyroscopImg}
        alt="" // Empty alt is correct for decorative images
        loading="lazy" // Performance Optimization
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
