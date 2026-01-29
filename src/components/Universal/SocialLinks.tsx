import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  LINKEDIN_LINK,
  TIKTOK_LINK,
  YOUTUBE_LINK,
} from "../../data/Links";

import SocialIcon from "./SocialIcon";
import React from "react";

export default function SocialLinks() {
  const socials = [
    { icon: FaFacebookF, link: FACEBOOK_LINK },
    { icon: FaInstagram, link: INSTAGRAM_LINK },
    { icon: FaLinkedinIn, link: LINKEDIN_LINK },
    { icon: FaYoutube, link: YOUTUBE_LINK },
    { icon: FaTiktok, link: TIKTOK_LINK },
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
