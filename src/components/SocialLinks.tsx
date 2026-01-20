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
    { icon: FaFacebookF, link: "https://facebook.com" },
    { icon: FaInstagram, link: "https://instagram.com" },
    { icon: FaLinkedinIn, link: "https://linkedin.com" },
    { icon: FaYoutube, link: "https://youtube.com" },
    { icon: FaTiktok, link: "https://tiktok.com" },
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
