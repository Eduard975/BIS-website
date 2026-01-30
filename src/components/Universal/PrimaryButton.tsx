/* src/components/Universal/PrimaryButton.tsx */

import React from "react";
import ReactGA from "react-ga4";

type ButtonSize = "small" | "normal" | "large" | "mobile";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  /** Label for GA4 event tracking */
  analyticsLabel?: string;
  /** The URL to navigate to. If present, renders an <a> tag. */
  href?: string;
  /** Optional target for the link (e.g., "_blank") */
  target?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  size = "normal",
  fullWidth = false,
  className = "",
  analyticsLabel,
  href,
  target,
  onClick,
  ...props
}) => {
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    normal: "px-6 py-2.5 text-base",
    large: "px-8 py-3 text-lg md:text-xl font-bold",
    mobile: "px-6 py-3.5 text-lg font-semibold",
  };

  const hasCustomBg = className.includes("bg-");
  const baseColor = hasCustomBg
    ? ""
    : "bg-primary hover:bg-primary-dark text-white";

  // Shared logic for classes
  const classes = `
    rounded-full transition-all duration-300 shadow-md 
    hover:shadow-lg active:scale-95 disabled:opacity-50 
    disabled:cursor-not-allowed
    inline-flex items-center justify-center
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : "w-fit"}
    ${baseColor} 
    ${className} 
  `;

  // Combined Click Handler (Handles both Analytics + optional onClick prop)
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
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

    if (onClick) {
      onClick(e as React.MouseEvent<HTMLButtonElement>);
    }
  };

  if (href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={classes}
        target={target || (href.startsWith("http") ? "_blank" : undefined)}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button onClick={handleClick} className={classes} {...props}>
      {children}
    </button>
  );
};
