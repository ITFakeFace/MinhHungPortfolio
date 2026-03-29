"use client";
import MsHungImage from "@/assets/home-page/assets/MsHung-2.png";
import QuoteEndText from "@/assets/home-page/text/QuoteEndText-2.png";
import CoreValueTextVN from "@/assets/home-page/text/CoreValueText-1.png";
import CoreValueTextEN from "@/assets/home-page/text/CoreValueTextEN-1.png";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import { Button } from "primereact/button";
import styles from "./CoreValueSection.module.scss";
import ImageFilmTrip from "@/components/general/ImageFilmTrip";
import CoreValueScrollImage1 from "@/assets/home-page/assets/CoreValueScroll-1.png";
import CoreValueScrollImage2 from "@/assets/home-page/assets/CoreValueScroll-2.png";
import CoreValueScrollImage3 from "@/assets/home-page/assets/CoreValueScroll-3.png";
import CoreValueScrollImage4 from "@/assets/home-page/assets/CoreValueScroll-4.png";
import CoreValueScrollImage5 from "@/assets/home-page/assets/CoreValueScroll-5.png";
import CoreValueScrollImage6 from "@/assets/home-page/assets/CoreValueScroll-6.png";
interface CoreValueItem {
  index: string;
  title: string;
  description: string;
}

interface CoreValueData {
  Viet: CoreValueItem;
  Eng: CoreValueItem;
}

const CoreValueSection = () => {
  const { lang } = useLanguage();
  const coreValues: CoreValueData[] = [
    {
      Viet: {
        index: "01",
        title: "TRAINER",
        description:
          "Đào tạo thực chiến Sales Management, đặc biệt chuyên sâu Modern Trade, Ecommerce, International Business và Multi - Distribution",
      },
      Eng: {
        index: "01",
        title: "TRAINER",
        description:
          "Practical training in Sales Management, with a particular focus on Modern Trade, E-commerce, International Business, and Multi-Distribution.",
      },
    },
    {
      Viet: {
        index: "02",
        title: "COACH",
        description:
          "Khai vấn lãnh đạo cho sự nghiệp cá nhân và vận hành, phát triển doanh nghiệp",
      },
      Eng: {
        index: "02",
        title: "COACH",
        description:
          "Leadership coaching for personal career paths, business operations, and enterprise development.",
      },
    },
    {
      Viet: {
        index: "03",
        title: "MENTOR & INSPIRER",
        description:
          "Cố vấn sự nghiệp cá nhân và xây dựng hệ thống Sale & Marketing cho SMEs trong nước và Quốc tế.",
      },
      Eng: {
        index: "03",
        title: "MENTOR & INSPIRER",
        description:
          "Personal career mentoring and building Sales & Marketing systems for domestic and international SMEs.",
      },
    },
    {
      Viet: {
        index: "04",
        title: "SPEAKER",
        description:
          "Diễn giả truyền cảm hứng về phát triển sự nghiệp và tăng trưởng kinh doanh đa kênh",
      },
      Eng: {
        index: "04",
        title: "SPEAKER",
        description:
          "Inspirational speaker on career development and multi-channel business growth.",
      },
    },
    {
      Viet: {
        index: "05",
        title: "CONSULTANT",
        description:
          "Cố vấn chiến lược cho doanh nghiệp Việt Nam và Quốc tế trong Market Entry và Business Model",
      },
      Eng: {
        index: "05",
        title: "CONSULTANT",
        description:
          "Strategic consultant for Vietnamese and international enterprises in Market Entry and Business Models.",
      },
    },
    {
      Viet: {
        index: "06",
        title: "FOUNDER",
        description:
          "Nhà sáng lập SHE Global Community, Vietnam Partner Global, Business & Leadership Consulting Hub",
      },
      Eng: {
        index: "06",
        title: "FOUNDER",
        description:
          "Founder of SHE Global Community, Vietnam Partner Global, and Business & Leadership Consulting Hub.",
      },
    },
  ];
  const films = [
    CoreValueScrollImage1,
    CoreValueScrollImage2,
    CoreValueScrollImage3,
    CoreValueScrollImage4,
    CoreValueScrollImage5,
  ];

  const renderCoreValueItem = (item: CoreValueData) => {
    return (
      <div
        key={item[lang].index}
        className="flex flex-row w-full gap-4 px-20 md:px-0"
      >
        <div className="max-w-30">
          <div
            className={`${styles.numberCircle} text-white text-2xl md:text-4xl font-bold aspect-square flex justify-center items-center text-center`}
          >
            {item[lang].index}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-2xl md:text-4xl text-white font-semibold">
            {item[lang].title}
          </div>
          <div className="text-lg md:text-2xl text-white ">
            {item[lang].description}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <div
        className={`w-full flex flex-col md:flex-row bg-linear-to-b from-[#828c15] to-[#000000]/60 gap-5 pb-10 ${styles.container}`}
      >
        <div className="w-full md:w-7/15 mt-20 md:mt-0 md:min-h-250 flex flex-col-reverse md:flex-col relative">
          <Image
            src={MsHungImage}
            alt="Ms Hung"
            className="w-full h-auto md:absolute static"
          />
          <div className="w-full flex flex-col absolute bottom-0 items-center">
            <Image
              src={QuoteEndText}
              alt="Quote End Text"
              className="w-4/5 md:w-full h-auto mx-auto mt-10 md:mt-0"
            />
            <Button
              unstyled
              label={
                lang == "Viet" ? "Trao đổi trực tiếp" : "One-on-one discussion"
              }
              className="hidden md:block bg-linear-to-r from-[#757e13] to-[#1c1e04] text-white text-4xl font-bold rounded-2xl w-fit px-10 py-3 cursor-pointer hover:scale-110 transition-all duration-300"
            />
          </div>
        </div>
        <div className="w-full md:w-8/15 flex flex-col mt-0 md:mt-5 gap-5 md:gap-10 justify-center items-center md:items-start">
          <Image
            src={lang == "Viet" ? CoreValueTextVN : CoreValueTextEN}
            alt="Core Value Text"
            className="w-4/5"
          />
          {coreValues.map((item, index) => {
            return renderCoreValueItem(item);
          })}
        </div>
        <Button
          unstyled
          label={
            lang == "Viet" ? "Trao đổi trực tiếp" : "One-on-one discussion"
          }
          className="md:hidden block bg-linear-to-r from-[#757e13] to-[#1c1e04] text-white text-4xl font-bold rounded-2xl w-fit px-10 py-3 cursor-pointer hover:scale-110 transition-all duration-300 mx-auto border-2 border-[#f4ff88]"
        />
      </div>
      <ImageFilmTrip images={films} speed="120s" />
    </div>
  );
};

export default CoreValueSection;
