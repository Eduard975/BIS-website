import React from "react";

// 1. Define the possible sizes
type ButtonSize = "small" | "normal" | "large" | "mobile";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The text or content inside the button */
  children: React.ReactNode;
  /** * Controls the size and padding.
   * - 'small': Compact (good for cards/tables)
   * - 'normal': Standard (good for forms)
   * - 'large': Prominent (good for Hero Headers)
   * - 'mobile': Chunky and touch-friendly
   */
  size?: ButtonSize;
  /** If true, the button stretches to 100% width of its container */
  fullWidth?: boolean;
  /** * Optional: Overrides for background/text color.
   * Default is 'bg-primary hover:bg-teal-600 text-white'
   */
  className?: string;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  size = "normal",
  fullWidth = false,
  className = "",
  ...props // Captures onClick, type, disabled, etc.
}) => {
  // 2. Define Size Logic
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    normal: "px-6 py-2.5 text-base",
    large: "px-8 py-3 text-lg md:text-xl font-bold", // perfect for Header
    mobile: "px-6 py-3.5 text-lg font-semibold", // larger touch target
  };

  // 3. Define Base Colors (Can be overridden by className)
  // We use a default, but if you pass 'bg-red-500' in className, it applies alongside.
  // Note: For perfect overriding without conflicts, 'tailwind-merge' is recommended,
  // but this standard string interpolation works for 99% of cases.
  const baseColor = "bg-primary hover:bg-teal-600 text-white";

  return (
    <button
      className={`
        rounded-full 
        transition-all 
        duration-300 
        shadow-md 
        hover:shadow-lg 
        active:scale-95 
        disabled:opacity-50 
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
