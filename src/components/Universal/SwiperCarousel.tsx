import { useNavigate } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ReactGA from "react-ga4";

import "swiper/css";

export interface CarouselItem {
  id: string | number;
  imageSrc: string;
  altText: string;
  Url: string;
  isRedirect?: boolean;
}

interface SwiperCarouselProps {
  data: CarouselItem[];
  mobileSlidesPerView?: number;
  desktopSlidesPerView?: number;
  aspect?: string;
  carouselName?: string;
}

const SwiperCarousel = ({
  data,
  mobileSlidesPerView = 1,
  desktopSlidesPerView = 3,
  aspect = "aspect-[4/5] md:aspect-video",
  carouselName = "General",
}: SwiperCarouselProps) => {
  const navigate = useNavigate();

  const handleItemClick = (item: CarouselItem) => {
    const pagePath =
      window.location.pathname === "/"
        ? "Home"
        : window.location.pathname.substring(1);
    const pageCategory = pagePath.charAt(0).toUpperCase() + pagePath.slice(1);

    ReactGA.event({
      category: `Page: ${pageCategory}`,
      action: `Carousel (${carouselName}): ${item.altText}`,
      label: `Target: ${item.Url}`,
    });

    // 2. NAVIGATION
    if (item.isRedirect) {
      navigate(item.Url);
    } else {
      window.open(item.Url, "_blank", "noopener,noreferrer");
    }
  };

  if (!data || data.length === 0) return null;

  return (
    <div className="w-full py-4">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: mobileSlidesPerView, centeredSlides: true },
          768: { slidesPerView: desktopSlidesPerView, centeredSlides: false },
        }}
        className="w-full"
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={`
                relative w-full ${aspect}
                bg-white rounded-2xl overflow-hidden 
                border border-gray-100 shadow-md 
                cursor-pointer hover:shadow-lg transition-all duration-300
              `}
              onClick={() => handleItemClick(item)}
            >
              <div className="absolute inset-0 p-6 flex items-center justify-center">
                <img
                  src={item.imageSrc}
                  alt={item.altText}
                  className="max-w-full max-h-full object-contain"
                  loading="lazy"
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
