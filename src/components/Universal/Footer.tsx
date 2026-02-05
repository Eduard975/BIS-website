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
import sigla_best_alba from "../../assets/logos/best.svg";
import {
  VOLUNTEER_FORM_URL,
  GDPR_BIS_LINK,
  GDPR_OOD_LINK,
  GDPR_BEST_LINK,
} from "../../data/Links";
import { PrimaryButton } from "./PrimaryButton";

const SITE_MAP = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Partners", to: "/partners" },
  { name: "Conference", to: "/conference" },
];

const LEGAL_LINKS = [
  { name: "GDPR BIS 2026", to: GDPR_BIS_LINK },
  { name: "GDPR OOD 2026", to: GDPR_OOD_LINK },
  { name: "GDPR BEST Iasi", to: GDPR_BEST_LINK },
];

const CONTACT_INFO = {
  address: (
    <>
      Cămin T19, et.1, cam. 16A
      <br />
      Aleea Prof. Vasile Petrescu nr. 1A,
      <br />
      Cod 700560, Iași, România
    </>
  ),
  addressLink: "https://maps.app.goo.gl/VYWU1uaq9msnWYFY8",
  email: "contact@bestis.ro",
  phone: "+40 754 665 038",
  phoneLink: "+40754665038",
  redirectLink: VOLUNTEER_FORM_URL,
};

const FooterHeading = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-2xl font-semibold mb-4 text-lightTxt text-left">
    {children}
  </h3>
);

const ContactItem = ({
  Icon,
  children,
}: {
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
      <CustomContainer
        width="standard"
        paddingX="normal"
        className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-12 relative z-10"
      >
        {/* --- Left Column (Logo, CTA) --- */}
        <div className="w-full max-w-[220px] md:max-w-[280px] flex flex-col justify-between items-center md:items-start">
          <div className="flex flex-col gap-6 items-center md:items-start w-full">
            {/* Added Link to Logo */}
            <a
              href="https://bestis.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full transition-opacity hover:opacity-80"
            >
              <img
                src={sigla_best_alba}
                alt="BEST Iași Logo"
                className="w-full h-auto"
                loading="lazy"
              />
            </a>
            <SocialLinks />
          </div>

          <div className="mt-8 md:mt-4 flex flex-col gap-8 text-lightTxt items-center md:items-start">
            <p className="text-md text-justify max-w-sm leading-relaxed">
              <strong className="text-white">
                Are you employed in Romania?
              </strong>{" "}
              You can choose to{" "}
              <strong className="text-white">
                redirect 3.5% of your income tax
              </strong>{" "}
              to BEST Iași and help us empower the next generation of engineers.
              This <strong className="text-white">process</strong> is{" "}
              <strong className="text-white">entirely free</strong> and ensures
              your taxes support a cause you value.
            </p>

            <PrimaryButton
              analyticsLabel="Invest 3.5% Tax"
              className="bg-secondary hover:bg-secondary-dark"
              href={CONTACT_INFO.redirectLink}
            >
              Redirect 3.5% to BEST
            </PrimaryButton>
          </div>
        </div>

        {/* --- Middle Column (Contact, Legal) --- */}
        <div className="w-full max-w-xs mx-auto md:max-w-none md:mx-0 md:w-auto flex flex-col gap-8 items-start">
          <div className="flex flex-col gap-8 text-left w-full">
            <section>
              <FooterHeading>Contact</FooterHeading>

              <div className="flex flex-col gap-4">
                <ContactItem Icon={HiOutlineLocationMarker}>
                  {/* Added Link to Address */}
                  <a
                    href={CONTACT_INFO.addressLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline transition-colors"
                  >
                    {CONTACT_INFO.address}
                  </a>
                </ContactItem>

                <ContactItem Icon={HiOutlineMail}>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline transition-colors"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </ContactItem>

                <ContactItem Icon={HiOutlinePhone}>
                  <a
                    href={`tel:${CONTACT_INFO.phoneLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  <a
                    key={link.name}
                    href={link.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline w-fit"
                  >
                    {link.name}
                  </a>
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

        {/* --- Right Column (Site Map) --- */}
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
        alt=""
        loading="lazy"
        className="absolute bottom-0 right-0 top-53 h-auto rotate-12 w-[50%] max-w-[600px] opacity-40 brightness-[0.3] pointer-events-none hidden md:block"
      />
    </footer>
  );
}
