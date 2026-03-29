import Image, { StaticImageData } from "next/image";
import React from "react";

// 1. Định nghĩa Interface đầy đủ
interface ImageFilmTripProps {
  images: StaticImageData[];
  direction?: "left" | "right";
  speed?: string; // Ví dụ: "30s", "60s"
}

const ImageFilmTrip = ({
  images,
  direction = "left",
  speed = "30s",
}: ImageFilmTripProps) => {
  // Xác định animation dựa trên direction
  const animationClass =
    direction === "right" ? "animate-marquee-reverse" : "animate-marquee";

  return (
    <div
      className="relative w-full overflow-hidden py-0 bg-black/5 backdrop-blur-sm group"
      aria-hidden
    >
      {/* Container chính - Sử dụng CSS Variable để truyền speed động */}
      <div
        className={`flex w-max ${animationClass} hover:[animation-play-state:paused]`}
        style={{ animationDuration: speed }}
      >
        {/* Track 1 */}
        <div className="flex gap-0">
          {[
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
            ...images,
          ].map((img, index) => (
            <div key={`track1-${index}`} className="flex-shrink-0">
              <div className="relative overflow-hidden rounded-none shadow-lg border border-white/10 hover:scale-105 transition-transform duration-300">
                <Image
                  src={img}
                  alt={`Gallery ${index}`}
                  className="h-24 sm:h-40 md:h-64 w-auto object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hiệu ứng Fade 2 đầu (Tùy chọn) */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-10"></div>
    </div>
  );
};

export default ImageFilmTrip;
