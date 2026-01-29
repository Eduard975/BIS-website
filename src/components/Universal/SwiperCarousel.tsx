import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export interface CarouselItem {
  id: string | number;
  imageSrc: string;
  altText: string;
  redirectUrl: string;
}

interface SwiperCarouselProps {
  data: CarouselItem[];
  mobileSlidesPerView?: number;
  desktopSlidesPerView?: number;
  aspect?: string;
}

const SwiperCarousel = ({
  data,
  mobileSlidesPerView = 1,
  desktopSlidesPerView = 3,
  aspect = "aspect-[4/5] md:aspect-video",
}: SwiperCarouselProps) => {
  const navigate = useNavigate();

  if (!data || data.length === 0) return null;

  return (
    <div className="w-full py-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 2500, // Slowed down slightly for better UX
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: mobileSlidesPerView,
            centeredSlides: true,
          },
          768: {
            slidesPerView: desktopSlidesPerView,
            centeredSlides: false,
          },
        }}
        // REMOVED: h-[250px]
        className="w-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={`
                relative w-full 
                ${aspect}
                bg-white rounded-2xl overflow-hidden 
                border border-gray-100 shadow-md 
                cursor-pointer 
                hover:shadow-lg transition-all duration-300
              `}
              onClick={() => navigate(item.redirectUrl)}
            >
              <div className="absolute inset-0 p-6 flex items-center justify-center">
                <img
                  src={item.imageSrc}
                  alt={item.altText}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
