"use client";
import { useRef, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import UpperFooterScrollImage1 from "@/assets/home-page/assets/UpperFooterScroll-1.png";
import UpperFooterScrollImage2 from "@/assets/home-page/assets/UpperFooterScroll-2.png";
import UpperFooterScrollImage3 from "@/assets/home-page/assets/UpperFooterScroll-3.png";
import UpperFooterScrollImage4 from "@/assets/home-page/assets/UpperFooterScroll-4.png";
// import UpperFooterScrollImage5 from "@/assets/home-page/assets/UpperFooterScroll-5.png";
import UpperFooterScrollImage6 from "@/assets/home-page/assets/UpperFooterScroll-6.png";
// import UpperFooterScrollImage7 from "@/assets/home-page/assets/UpperFooterScroll-7.png";
import UpperFooterScrollImage8 from "@/assets/home-page/assets/UpperFooterScroll-8.png";
import UpperFooterScrollImage9 from "@/assets/home-page/assets/UpperFooterScroll-14.jpg";
import UpperFooterScrollImage10 from "@/assets/home-page/assets/UpperFooterScroll-13.jpg";
import UpperFooterScrollImage11 from "@/assets/home-page/assets/UpperFooterScroll-11.png";
import UpperFooterScrollImage12 from "@/assets/home-page/assets/UpperFooterScroll-12.jpg";
import FooterScrollImage1 from "@/assets/home-page/assets/FooterFilm-1.jpg";
import FooterScrollImage2 from "@/assets/home-page/assets/FooterFilm-13.jpg";
import FooterScrollImage3 from "@/assets/home-page/assets/FooterFilm-3.jpg";
import FooterScrollImage4 from "@/assets/home-page/assets/FooterFilm-4.jpg";
import FooterScrollImage5 from "@/assets/home-page/assets/FooterFilm-5.jpg";
import FooterScrollImage6 from "@/assets/home-page/assets/FooterFilm-6.jpg";
import FooterScrollImage7 from "@/assets/home-page/assets/FooterFilm-7.jpg";
import FooterScrollImage8 from "@/assets/home-page/assets/FooterFilm-8.jpg";
import FooterScrollImage9 from "@/assets/home-page/assets/FooterFilm-9.jpg";
import FooterScrollImage10 from "@/assets/home-page/assets/FooterFilm-10.jpg";
import FooterScrollImage11 from "@/assets/home-page/assets/FooterFilm-11.jpg";
import FooterScrollImage12 from "@/assets/home-page/assets/FooterFilm-12.jpg";
import ImageFilmTrip from "@/components/general/ImageFilmTrip";

const VideoSection = () => {
  const { lang } = useLanguage();
  const films = [
    UpperFooterScrollImage1,
    UpperFooterScrollImage2,
    UpperFooterScrollImage3,
    UpperFooterScrollImage4,
    UpperFooterScrollImage6,
    UpperFooterScrollImage8,
    UpperFooterScrollImage9,
    UpperFooterScrollImage10,
    UpperFooterScrollImage11,
    FooterScrollImage1,
    FooterScrollImage2,
    FooterScrollImage3,
    FooterScrollImage4,
    FooterScrollImage5,
    FooterScrollImage6,
    FooterScrollImage7,
    FooterScrollImage8,
    FooterScrollImage9,
    FooterScrollImage10,
    FooterScrollImage11,
    FooterScrollImage12,
    UpperFooterScrollImage12,
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
      <ImageFilmTrip images={films} direction="left" speed="60s" />

      {/* Container Video */}
      <div className="relative w-full group overflow-hidden bg-black">
        <video
          ref={videoRef}
          className="w-full h-auto max-h-[80vh] object-contain"
          controls={hasStarted} // Chỉ hiện controls sau khi đã bấm Play
          playsInline
          onPlay={() => setHasStarted(true)} // Đảm bảo đồng bộ nếu dùng phím tắt
          onPause={() => {
            // Tùy chọn: Hiện lại nút Play nếu bạn muốn khi video dừng
            // setHasStarted(false);
          }}
        >
          <source
            src={`https://res.cloudinary.com/dxlwfzhnt/video/upload/v1774783282/FinalVideo-1_ususqu.mp4`}
            type="video/mp4"
          />
        </video>

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
      <ImageFilmTrip images={films} direction="right" speed="60s" />
    </div>
  );
};

export default VideoSection;
