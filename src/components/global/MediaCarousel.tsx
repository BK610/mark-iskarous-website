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
    <div className="relative w-full" style={{ paddingBottom: "66.67%" }}>
      <div className="absolute inset-0">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={0}
          slidesPerView={1}
          className="w-full h-full"
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              {item._type === "researchImage" && item.image && (
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={item.image}
                    alt="Research image"
                    className="max-w-full max-h-full object-contain rounded-md"
                  />
                </div>
              )}
              {item._type === "youtubeVideo" && item.youtubeUrl && (
                <div className="w-full h-full flex">
                  <iframe
                    src={item.youtubeUrl}
                    // Set max height to 90% to leave space for the pagination,
                    //   so it doesn't overlap with the YouTube controls.
                    className="w-full h-full max-h-[90%] rounded-md"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
