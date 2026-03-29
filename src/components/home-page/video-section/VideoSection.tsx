"use client";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import UpperFooterScrollImage1 from "@/assets/home-page/assets/UpperFooterScroll-1.png";
import UpperFooterScrollImage2 from "@/assets/home-page/assets/UpperFooterScroll-2.png";
import UpperFooterScrollImage3 from "@/assets/home-page/assets/UpperFooterScroll-3.png";
import UpperFooterScrollImage4 from "@/assets/home-page/assets/UpperFooterScroll-4.png";
import UpperFooterScrollImage5 from "@/assets/home-page/assets/UpperFooterScroll-5.png";
import UpperFooterScrollImage6 from "@/assets/home-page/assets/UpperFooterScroll-6.png";
import UpperFooterScrollImage7 from "@/assets/home-page/assets/UpperFooterScroll-7.png";
import UpperFooterScrollImage8 from "@/assets/home-page/assets/UpperFooterScroll-8.png";
import UpperFooterScrollImage9 from "@/assets/home-page/assets/UpperFooterScroll-9.png";
import UpperFooterScrollImage10 from "@/assets/home-page/assets/UpperFooterScroll-10.png";
import UpperFooterScrollImage11 from "@/assets/home-page/assets/UpperFooterScroll-11.png";
import ImageFilmTrip from "@/components/general/ImageFilmTrip";

const VideoSection = () => {
  const { lang } = useLanguage();
  const films = [
    UpperFooterScrollImage1,
    UpperFooterScrollImage2,
    UpperFooterScrollImage3,
    UpperFooterScrollImage4,
    UpperFooterScrollImage5,
    UpperFooterScrollImage6,
    UpperFooterScrollImage7,
    UpperFooterScrollImage8,
    UpperFooterScrollImage9,
    UpperFooterScrollImage10,
    UpperFooterScrollImage11,
  ];

  const basePath =
    process.env.NODE_ENV == "production" ? "/MinhHungPorfolio" : "";

  // Ref để điều khiển video
  const videoRef = useRef<HTMLVideoElement>(null);
  // State để ẩn/hiện nút Play lớn ở giữa
  const [hasStarted, setHasStarted] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setHasStarted(true); // Ẩn nút Play sau khi bấm
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* FilmStrip trên */}
      <ImageFilmTrip images={films} direction="left" speed="120s" />

      {/* Container Video */}
      <div className="relative w-full group overflow-hidden bg-black">
        <video
          ref={videoRef}
          src={`/MinhHungPortfolio/videos/FinalVideo-1.mp4`}
          className="w-full h-auto max-h-[80vh] object-contain"
          controls={hasStarted} // Chỉ hiện controls sau khi đã bấm Play
          playsInline
          onPlay={() => setHasStarted(true)} // Đảm bảo đồng bộ nếu dùng phím tắt
          onPause={() => {
            // Tùy chọn: Hiện lại nút Play nếu bạn muốn khi video dừng
            // setHasStarted(false);
          }}
        />

        {/* Nút Play lớn giữa màn hình (Chỉ hiện khi chưa chạy) */}
        {!hasStarted && (
          <div
            className="absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300 cursor-pointer"
            onClick={handlePlayVideo}
          >
            <button className="w-24 h-24 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:scale-110 hover:bg-white/30 transition-all group/btn">
              {/* Icon Play tam giác */}
              <div className="w-0 h-0 border-t-[18px] border-t-transparent border-l-[30px] border-l-white border-b-[18px] border-b-transparent ml-2" />
            </button>
          </div>
        )}
      </div>

      {/* FilmStrip dưới */}
      <ImageFilmTrip images={films} direction="right" speed="120s" />
    </div>
  );
};

export default VideoSection;
