import OverprintTitle from "./OverprintTitle";
import { PrimaryButton } from "./PrimaryButton";

interface SectionContentProps {
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
  buttonText?: string;
  onButtonClick?: () => void;
  className?: string;
}

export const SectionContent = ({
  title,
  subtitle,
  children,
  buttonText,
  onButtonClick,
  className = "flex-1 min-w-[300px]",
}: SectionContentProps) => {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {title && subtitle && (
        <OverprintTitle title={title} subtitle={subtitle} />
      )}

      {children && (
        <div className="text-justify w-full text-darkTxt space-y-4 leading-relaxed">
          {children}
        </div>
      )}

      {buttonText && onButtonClick && (
        <div className="pt-2">
          <PrimaryButton size="normal" onClick={onButtonClick}>
            {buttonText}
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};
