"use client";
import TopicImageEN from "@/assets/home-page/text/TopicTextEN-1.png";
import TopicImage2EN from "@/assets/home-page/text/TopicTextEN-2.png";
import TopicImage3EN from "@/assets/home-page/text/TopicTextEN-3.png";
import TopicImageVN from "@/assets/home-page/text/TopicText-1.png";
import TopicImage2VN from "@/assets/home-page/text/TopicText-2.png";
import TopicImage3VN from "@/assets/home-page/text/TopicText-3.png";
import QuoteVN from "@/assets/home-page/text/Quote-3.png";
import Event1Image from "@/assets/home-page/assets/event-1.png";
import Event2Image from "@/assets/home-page/assets/TopicEvent-1.jpg";
import Event3Image from "@/assets/home-page/assets/event-3.jpg";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./SHESection.module.scss";
import Image from "next/image";
import { useRef, useState } from "react";

const SHESection = () => {
  const { lang } = useLanguage();
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
  const MoreInfoButton = () => (
    <a
      href="https://www.linkedin.com/company/she-global-community/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="group relative w-full max-w-[500px] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-100 mx-auto md:mx-0 mt-10">
        {/* Lớp nền Gradient */}
        <div
          className="flex items-center justify-center border-1 border-white rounded-[15px] md:rounded-[20px] h-[60px] md:h-[90px] w-full shadow-lg"
          style={{
            backgroundImage:
              "linear-gradient(90.04deg, rgb(118, 127, 19) 0%, rgb(0, 0, 0) 134.48%)",
          }}
        >
          {/* Text được căn giữa tự nhiên bằng Flexbox, không dùng absolute px */}
          <span className="text-white font-bold text-2xl sm:text-4xl md:text-[36px] lg:text-[40px]! leading-none uppercase tracking-wider px-4 text-center">
            {lang === "Viet" ? "Tìm hiểu thêm" : "Learn More"}
          </span>
        </div>
      </div>
    </a>
  );
  return (
    <div
      className={`bg-linear-to-b from-[#828c15] to-[#000000]/10 ${styles.container}`}
    >
      <div id="she-project">
        <Image
          src={lang == "Viet" ? TopicImage2VN : TopicImage2EN}
          alt="text"
          className={`w-4/5 ${lang == "Viet" ? "md:7/10" : "md:w-1/2"} mx-auto md:mx-5 mb-10 hidden md:block`}
        />
        <Image
          src={lang == "Viet" ? TopicImage3VN : TopicImage3EN}
          alt="text"
          className="w-9/10 md:w-3/5 mx-auto md:mx-5 mb-10 md:hidden block"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-5 md:gap-10">
        {/* Container bọc ngoài giữ tỉ lệ */}
        <div className="w-19/20 sm:w-4/5 md:w-1/2 mx-auto bg-black md:ml-10! md:mr-0! overflow-hidden relative aspect-video md:aspect-9/5">
          {/* Container Video nội bộ - Quan trọng: Phải full height/width */}
          <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls={hasStarted}
              playsInline
              onPlay={() => setHasStarted(true)}
            >
              <source
                src="https://res.cloudinary.com/dxlwfzhnt/video/upload/v1774820644/SHEVideo-1_nrnwt7.mp4"
                type="video/mp4"
              />
            </video>

            {/* Nút Play lớn */}
            {!hasStarted && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-black/40 z-10 cursor-pointer"
                onClick={handlePlayVideo}
              >
                <button className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:scale-110 transition-all">
                  <div className="w-0 h-0 border-t-[15px] md:border-t-[18px] border-t-transparent border-l-[25px] md:border-l-[30px] border-l-white border-b-[15px] md:border-b-[18px] border-b-transparent ml-2" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="w-4/5 md:w-1/2 mx-auto md:ml-0! md:mr-10! text-justify">
          <Image src={QuoteVN} alt="text" className="w-full mx-auto" />
          <div className="text-xl md:text-3xl 2xl:text-3xl! 4xl:text-5xl! text-white leading-relaxed">
            {lang == "Viet"
              ? "SHE Global Community là một hệ sinh thái toàn diện dành cho phụ nữ – nơi mỗi người phụ nữ được kết nối, được truyền cảm hứng và được nâng đỡ trên hành trình phát triển bản thân, sự nghiệp và tài chính. Chúng tôi tin rằng, khi một người phụ nữ được trao quyền, cô ấy không chỉ thay đổi cuộc đời mình mà còn lan tỏa những ảnh hưởng tích cực đến gia đình, cộng đồng và cả xã hội."
              : "SHE Global Community is a comprehensive ecosystem for women—where every woman is connected, inspired, and empowered on her journey of personal, career, and financial development. We believe that when a woman is empowered, she not only transforms her own life but also creates a positive impact on her family, community, and society."}
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full gap-10 mb-5 justify-center items-center">
        <div className="w-2/3 sm:w-1/2 md:ml-10 flex flex-col gap-0 sm:gap-10 ">
          <Image
            src={lang == "Viet" ? TopicImage3VN : TopicImage3EN}
            alt="text"
            className="w-full hidden md:block"
          />
          <MoreInfoButton />
        </div>
        <div className="w-1/2 hidden md:flex flex-row gap-2">
          <div className="my-auto w-3/5">
            <Image src={Event1Image} alt="text" className="w-full mx-auto" />
          </div>
          <div className="flex flex-col gap-2 w-2/5">
            <Image src={Event2Image} alt="text" className="w-full mx-auto" />
            <Image src={Event3Image} alt="text" className="w-full mx-auto" />
          </div>
          <div className="text-3xl text-white leading-relaxed"></div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-row relative md:hidden">
        <Image
          src={Event1Image}
          alt="text"
          className="w-1/3 mx-auto rotate-12 scale-125 hover:z-20 hover:scale-150 transition-all duration-300"
        />
        <Image
          src={Event2Image}
          alt="text"
          className="w-1/3 mx-auto -rotate-12 scale-125 z-10 hover:z-20 hover:scale-150 transition-all duration-300"
        />
        <Image
          src={Event3Image}
          alt="text"
          className="w-1/3 h-auto mx-auto rotate-12 scale-125 hover:z-20 hover:scale-150 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default SHESection;
