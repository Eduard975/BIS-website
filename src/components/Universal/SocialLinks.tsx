import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import SocialIcon from "./SocialIcon";
import React from "react";

export default function SocialLinks() {
  const socials = [
    { icon: FaFacebookF, link: "https://www.facebook.com/bestiasi" },
    { icon: FaInstagram, link: "https://www.instagram.com/bestiasi" },
    { icon: FaLinkedinIn, link: "https://www.linkedin.com/company/best-iasi" },
    { icon: FaYoutube, link: "https://www.youtube.com/@BESTIasi" },
    { icon: FaTiktok, link: "https://www.tiktok.com/@best.iasi" },
  ];

  return (
    <div className="flex justify-between items-center w-full">
      {socials.map((social, index) => (
        <React.Fragment key={index}>
          <SocialIcon Icon={social.icon} href={social.link} />
        </React.Fragment>
      ))}
    </div>
  );
}
