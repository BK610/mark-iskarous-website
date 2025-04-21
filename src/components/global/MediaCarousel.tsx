import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface MediaItem {
  _type: "researchImage" | "youtubeVideo";
  image?: string;
  youtubeUrl?: string;
}

interface MediaCarouselProps {
  items: MediaItem[];
}

export default function MediaCarousel({ items }: MediaCarouselProps) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      className="w-full h-full"
    >
      {items.map((item, index) => (
        <SwiperSlide key={index} className="flex items-center justify-center">
          {item._type === "researchImage" && item.image && (
            <img
              src={item.image}
              alt="Research image"
              className="w-full h-full object-contain rounded-md"
            />
          )}
          {item._type === "youtubeVideo" && item.youtubeUrl && (
            <iframe
              src={item.youtubeUrl}
              className="w-full aspect-video rounded-md"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
