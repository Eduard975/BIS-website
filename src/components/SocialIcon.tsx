import React from "react";
import type { IconType } from "react-icons";

interface SocialIconProps {
  Icon: IconType;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group">
      <div className="w-6 h-6 md:w-8 md:h-8 flex items-center justify-center bg-lightTxt rounded-full transition-transform duration-200 hover:scale-110 shadow-sm">
        <Icon className="text-primary text-l md:text-xl group-hover:opacity-80" />
      </div>
    </a>
  );
};

export default SocialIcon;
