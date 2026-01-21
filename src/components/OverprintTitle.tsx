interface OverprintTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

export default function OverprintTitle({
  title,
  subtitle,
  className = "",
}: OverprintTitleProps) {
  return (
    // 1. Grid with 'items-end'
    // This creates a stack where everything aligns to the BOTTOM.
    // The container height = Tallest Element (Subtitle + its offset).
    // The bottom of the container = Bottom of the Title.
    <div
      className={`grid grid-cols-1 grid-rows-1 items-end justify-items-start w-fit ${className}`}
    >
      {/* Subtitle (Background) */}
      <span
        className="
          col-start-1 row-start-1
          text-4xl md:text-[3rem]
          font-subtitle
          text-primary/20 
          whitespace-nowrap 
          z-0 
          select-none 
          uppercase 
          tracking-widest
          leading-none
          
          /* 2. Lift Logic:
            Since we are aligned to the bottom ('items-end'), this margin 
            pushes the subtitle UP relative to the Title.
            The container grows UPWARDS to accommodate this, keeping the bottom clean.
          */
          mb-1 md:mb-3
          
        "
      >
        {subtitle}
      </span>

      {/* Title (Foreground) */}
      <h2
        className="
          col-start-1 row-start-1
          z-10 
          text-2xl md:text-[1.6rem]
          font-title
          text-darkTxt 
          uppercase 
          tracking-wide 
          leading-none
        "
      >
        {title}
      </h2>
    </div>
  );
}
