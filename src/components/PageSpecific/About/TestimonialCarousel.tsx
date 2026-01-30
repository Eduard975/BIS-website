import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// Flags sourced from 'flag-icons' (MIT License)
// https://github.com/lipis/flag-icons
import siFlag from "../../../assets/flags/si.svg";
import trFlag from "../../../assets/flags/tr.svg";
import esFlag from "../../../assets/flags/es.svg";

const flagMap: Record<string, string> = {
  si: siFlag,
  tr: trFlag,
  es: esFlag,
};

export interface TestimonialItem {
  id: string | number;
  name: string;
  location: string;
  countryCode?: string; // e.g., "si", "tr", "es"
  paragraphs: string[];
}

interface TestimonialCarouselProps {
  data: TestimonialItem[];
}

const TestimonialCarousel = memo(({ data }: TestimonialCarouselProps) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full relative testimonial-container px-4 md:px-20 select-none">
      {/* Navigation Buttons */}
      <button
        className="custom-prev-btn absolute left-0 top-[45%] 
        -translate-y-1/2 z-30 hover:scale-110 active:scale-95
         transition-all hidden md:block cursor-pointer"
        style={{ color: "var(--color-primary)" }}
        aria-label="Previous testimonial"
      >
        <HiChevronLeft size={64} />
      </button>

      <button
        className="custom-next-btn absolute right-0 top-[45%]
          -translate-y-1/2 z-30 hover:scale-110 active:scale-95
           transition-all hidden md:block cursor-pointer"
        style={{ color: "var(--color-primary)" }}
        aria-label="Next testimonial"
      >
        <HiChevronRight size={64} />
      </button>

      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        speed={800}
        grabCursor={true}
        threshold={10}
        navigation={{
          prevEl: ".custom-prev-btn",
          nextEl: ".custom-next-btn",
        }}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        className="overflow-hidden"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id} className="flex justify-center py-4">
            <div
              className="
              relative w-full md:max-w-5xl min-h-[30vh] mx-auto
              flex flex-col justify-center

              py-8 px-10 md:py-10 md:px-16 
              rounded-[3rem] md:rounded-[4rem]
              shadow-[0_20px_40px_-15px_rgba(22,162,150,0.15)]
              overflow-hidden bg-secondary/15
            "
            >
              <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
                <div className="flex flex-col gap-1 mb-4 md:mb-6 w-full">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <h3 className="text-xl md:text-3xl font-[--font-title] text-[--color-darkTxt] uppercase tracking-wide">
                      {item.name}
                    </h3>

                    {item.countryCode && flagMap[item.countryCode] && (
                      <img
                        src={flagMap[item.countryCode]}
                        alt={`${item.countryCode} flag`}
                        className="w-8 h-auto shadow-sm rounded-sm object-cover"
                      />
                    )}
                  </div>

                  <p className="text-lg md:text-2xl font-[--font-subtitle] text-[--color-primary] italic">
                    {item.location}
                  </p>
                </div>

                <div className="space-y-4 max-w-4xl">
                  {item.paragraphs.map((para, i) => (
                    <p
                      key={i}
                      className="text-base md:text-xl text-gray-600 
                      leading-relaxed font-light italic text-justify"
                    >
                      "{para}"
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Container */}
      <div className="custom-pagination flex justify-center items-center gap-4 mt-2" />

      <style>{`
        .custom-pagination .swiper-pagination-bullet {
          background: transparent;
          border: 2px solid var(--color-darkTxt);
          opacity: 0.6;
          width: 12px;
          height: 12px;
          margin: 0 !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }
        .custom-pagination .swiper-pagination-bullet-active {
          background-color: var(--color-primary);
          border-color: var(--color-primary);
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
});

TestimonialCarousel.displayName = "TestimonialCarousel";
export default TestimonialCarousel;
