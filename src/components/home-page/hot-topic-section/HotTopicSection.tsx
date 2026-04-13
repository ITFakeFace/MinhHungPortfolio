"use client";
import MsHungImage from "@/assets/home-page/assets/MsHung-3.png";
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
import Image from "next/image";
import styles from "./HotTopicSection.module.scss";
import { useRef, useState } from "react";
import { useContactForm } from "@/context/ContactContext";

interface TopicItem {
  index: string;
  title: string;
  description: string;
}

interface TopicData {
  Viet: TopicItem;
  Eng: TopicItem;
}

const HotTopicSection = () => {
  const { lang } = useLanguage();
  const { openContactForm } = useContactForm();
  const topics: TopicData[] = [
    {
      Viet: {
        index: "01",
        title: "KHAI VẤN LÃNH ĐẠO",
        description:
          "Nâng cao năng lực lãnh đạo, quản trị sự thay đổi, xây dựng đội ngũ kế thừa",
      },
      Eng: {
        index: "01",
        title: "LEADERSHIP COACHING",
        description:
          "Enhancing leadership capabilities, managing change, and developing succession planning.",
      },
    },
    {
      Viet: {
        index: "02",
        title: "NGÀNH BÁN LẺ VÀ FMCG",
        description:
          "Phân tích góc nhìn tương lai, từ đó xây dựng môi trường làm việc hiệu quả.",
      },
      Eng: {
        index: "02",
        title: "RETAIL & FMCG INDUSTRY",
        description:
          "Analyzing future perspectives to build a highly effective working environment.",
      },
    },
    {
      Viet: {
        index: "03",
        title: "THƯƠNG HIỆU CÁ NHÂN",
        description:
          "Xây dựng và phát triển thông qua các nền tảng kỷ nguyên số như LinkedIn",
      },
      Eng: {
        index: "03",
        title: "PERSONAL BRANDING",
        description:
          "Building and developing personal brands through digital era platforms such as LinkedIn.",
      },
    },
    {
      Viet: {
        index: "04",
        title: "VĂN HÓA DOANH NGHIỆP",
        description:
          "Từ Đa quốc gia đến Công ty Việt: So sánh chân thực và sâu sắc về điểm mạnh, điểm yếu của hai mô hình văn hoá và bài học thực tiễn",
      },
      Eng: {
        index: "04",
        title: "CORPORATE CULTURE",
        description:
          "From Multinationals to Vietnamese Companies: An authentic and deep comparison of strengths, weaknesses, and practical lessons from both cultural models.",
      },
    },
    {
      Viet: {
        index: "05",
        title: "XU HƯỚNG VIỆC LÀM",
        description:
          "Chia sẻ câu chuyện nghề nghiệp, kỹ năng cần thiết và cách tạo sự khác biệt trong mắt nhà tuyển dụng",
      },
      Eng: {
        index: "05",
        title: "EMPLOYMENT TRENDS",
        description:
          "Sharing career journeys, essential skills, and strategies to stand out in the eyes of recruiters.",
      },
    },
  ];

  const renderLeftColItem = (item: TopicData) => {
    return (
      <div
        className="w-19/20 sm:w-9/10 flex flex-row gap-3 md:gap-5 self-end items-start lg:mt-20"
        key={item[lang].index}
      >
        <div className="flex flex-col">
          <div className="text-white w-full text-right md:text-left border-b-2 md:border-b-3 border-white text-xl md:text-3xl 2xl:text-4xl! 4xl:text-5xl! font-bold pb-1 md:pb-2">
            {item[lang].title}
          </div>
          <div className="text-white w-full text-right md:text-left mt-2 md:mt-3 font-semibold text-lg md:text-2xl 2xl:text-3xl 4xl:text-4xl!">
            {item[lang].description}
          </div>
        </div>
        <div
          className={`${styles.numberCircle} w-[60px] md:w-[75px]! 2xl:w-[100px]! shrink-0 text-white text-2xl md:text-4xl! 2xl:text-5xl! font-bold aspect-square! flex justify-center items-center text-center`}
        >
          {item[lang].index}
        </div>
      </div>
    );
  };

  const renderRightColItem = (item: TopicData) => {
    return (
      <div
        className="w-19/20 sm:w-9/10 flex flex-row gap-3 md:gap-5 self-start items-start"
        key={item[lang].index}
      >
        <div
          className={`${styles.numberCircle} w-[60px] md:w-[75px]! 2xl:w-[100px]! shrink-0 text-white text-2xl md:text-4xl! 2xl:text-5xl! font-bold aspect-square flex justify-center items-center text-center`}
        >
          {item[lang].index}
        </div>
        <div className="flex flex-col ">
          <div className="text-white w-full text-left border-b-2 md:border-b-3 border-white text-xl md:text-3xl 2xl:text-4xl! 4xl:text-5xl! font-bold pb-2">
            {item[lang].title}
          </div>
          <div className="text-white w-full mt-3 font-semibold text-lg md:text-2xl 2xl:text-3xl! 4xl:text-4xl!">
            {item[lang].description}
          </div>
        </div>
      </div>
    );
  };

  const BaseButton = ({ label }: { label: string }) => {
    return (
      <div className="group relative w-full max-w-[500px] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-100 mx-auto md:mx-auto! -mt-10">
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
            {label}
          </span>
        </div>
      </div>
    );
  };

  // Sử dụng lại:
  const ConsultationButton = () => (
    <button
      className="group relative block w-full max-w-[500px] 2xl:max-w-[700px]! mx-auto md:-mt-10 transition-all duration-300 hover:scale-105 active:scale-100 no-underline -translate-y-2 md:translate-y-0"
      onClick={openContactForm}
    >
      {/* Lớp nền Gradient */}
      <div
        className="flex items-center justify-center border border-white rounded-[15px] md:rounded-[20px] h-[60px] md:h-[90px] 4xl:h-[125px] w-full shadow-lg overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(90.04deg, rgb(118, 127, 19) 0%, rgb(0, 0, 0) 134.48%)",
        }}
      >
        {/* Nội dung Text */}
        <span className="text-white font-bold text-2xl sm:text-4xl md:text-4xl lg:text-5xl 4xl:text-7xl! leading-none uppercase tracking-wider px-3 md:px-6 text-center">
          {lang === "Viet" ? "Liên hệ tư vấn" : "Book a Consultation"}
        </span>
      </div>
    </button>
  );

  const HotTopicBlock = () => {
    return (
      <>
        <div className="hidden md:block">
          <HotTopicBlockDesktop />
        </div>
        <div className="block md:hidden">
          <HotTopicBlockMobile />
        </div>
      </>
    );
  };

  const HotTopicBlockDesktop = () => (
    <div className="w-full flex-row items-center flex">
      {/* Phần bên trái: Chiếm 1 phần diện tích còn lại (3.5/10) */}
      <div className="flex-1 min-w-0 flex flex-col gap-20 2xl:gap-40! items-end">
        {topics
          .filter((item) => parseInt(item.Viet.index) % 2 !== 0)
          .map((item) => renderLeftColItem(item))}
      </div>

      {/* Phần ở giữa: Chiếm chính xác 3/10 (30%) */}
      <div className="w-[30%] flex flex-col justify-center shrink-0">
        <Image src={MsHungImage} alt="Miss Hung" className="w-full h-auto" />
        <ConsultationButton />
      </div>

      {/* Phần bên phải: Chiếm 1 phần diện tích còn lại (3.5/10) */}
      <div className="flex-1 min-w-0 flex flex-col gap-30 2xl:gap-40! items-start">
        {topics
          .filter((item) => parseInt(item[lang].index) % 2 === 0)
          .map((item) => renderRightColItem(item))}
      </div>
    </div>
  );
  const HotTopicBlockMobile = () => (
    <div>
      <div className="flex flex-col mt-10 gap-10 sm:gap-20 mx-5 sm:mx-10">
        {topics.map((item) =>
          parseInt(item[lang].index) % 2 == 0
            ? renderRightColItem(item)
            : renderLeftColItem(item),
        )}
      </div>
      <div className="w-3/5 flex flex-col justify-center mx-auto mt-10">
        <Image src={MsHungImage} alt="Miss Hung" className="w-full h-auto" />
        <ConsultationButton />
      </div>
    </div>
  );

  return (
    <div
      className={`bg-linear-to-b from-[#828c15] to-[#000000]/10 pt-10 ${styles.container} pb-10`}
    >
      <div>
        <Image
          src={lang == "Viet" ? TopicImageVN : TopicImageEN}
          alt="text"
          className="w-4/5 md:w-3/5 mx-auto"
        />
      </div>
      <HotTopicBlock />
    </div>
  );
};

export default HotTopicSection;
