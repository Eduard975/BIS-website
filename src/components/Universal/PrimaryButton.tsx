import React from "react";
import ReactGA from "react-ga4";
import { useNavigate } from "react-router"; //

type ButtonSize = "small" | "normal" | "large" | "mobile";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  /** Label for GA4 event tracking */
  analyticsLabel?: string;
  /** The URL to navigate to (could be internal path or external link) */
  href?: string;
  /** If true, uses React Router navigate. Default: false (opens in new tab) */
}
export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  size = "normal",
  fullWidth = false,
  className = "",
  analyticsLabel,
  href,
  onClick,
  ...props
}) => {
  const navigate = useNavigate();

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    normal: "px-6 py-2.5 text-base",
    large: "px-8 py-3 text-lg md:text-xl font-bold",
    mobile: "px-6 py-3.5 text-lg font-semibold",
  };

  // 1. Logic: Only use default colors if the user hasn't provided their own bg- class
  const hasCustomBg = className.includes("bg-");
  const baseColor = hasCustomBg
    ? ""
    : "bg-primary hover:bg-primary-dark text-white";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (analyticsLabel) {
      const pagePath =
        window.location.pathname === "/"
          ? "Home"
          : window.location.pathname.substring(1);
      const pageCategory = pagePath.charAt(0).toUpperCase() + pagePath.slice(1);

      ReactGA.event({
        category: `Page: ${pageCategory}`,
        action: `Click: ${analyticsLabel}`,
        label: `URL: ${window.location.pathname}${window.location.hash}`,
      });
    }

    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={`
        rounded-full transition-all duration-300 shadow-md 
        hover:shadow-lg active:scale-95 disabled:opacity-50 
        disabled:cursor-not-allowed
        ${sizeClasses[size]}
        ${fullWidth ? "w-full" : "w-fit"}
        ${baseColor} 
        ${className} 
      `}
      {...props}
    >
      {children}
    </button>
  );
};
