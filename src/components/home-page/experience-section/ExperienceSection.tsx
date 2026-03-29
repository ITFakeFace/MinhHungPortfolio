"use client";
import Image, { StaticImageData } from "next/image";
import { Timeline } from "primereact/timeline";
import styles from "./ExperienceSection.module.scss";
import RealtimeExperienceText from "@/assets/RealtimeExperienceText.png";
import { useLanguage } from "@/context/LanguageContext";
import YupiLogo from "@/assets/home-page/logo/YupiLogo-1.png";
import ThpLogo from "@/assets/home-page/logo/THPGroupLogo-1.png";
import SheLogo from "@/assets/home-page/logo/SheLogo-1.png";
import LogoLine from "@/assets/home-page/logo/LogoLine-1.png";
import CocaColaLogo from "@/assets/home-page/logo/CocaColaLogo-1.png";
import NestleWatersLogo from "@/assets/home-page/logo/NestleWatersLogo-1.png";
import LogoLine2 from "@/assets/home-page/logo/LogoLine-2.png";
import QuoteEndText from "@/assets/QuoteEndText-1.png";
import ExpScrollImage1 from "@/assets/home-page/assets/ExpScroll-1.png";
import ExpScrollImage2 from "@/assets/home-page/assets/ExpScroll-2.png";
import ExpScrollImage3 from "@/assets/home-page/assets/ExpScroll-3.png";
import ExpScrollImage4 from "@/assets/home-page/assets/ExpScroll-4.png";
import ExpScrollImage5 from "@/assets/home-page/assets/ExpScroll-5.png";
import ImageFilmTrip from "@/components/general/ImageFilmTrip";

const ExperienceSection = () => {
  const { lang, setLang, t } = useLanguage();

  const durationClass =
    "text-4xl md:text-7xl font-black text-white tracking-tighter transition-all";
  const contentTextClass =
    "text-xl md:text-3xl text-white font-semibold leading-snug";
  // Giả sử đây là mảng dữ liệu của bạn
  const events = [
    { id: "yupi_group", color: "#4c5409", icon: "pi pi-users" },
    { id: "thp_she", color: "#4c5409", icon: "pi pi-users" },
    { id: "coca_cola", color: "#4c5409", icon: "pi pi-briefcase" },
    { id: "nestle_waters", color: "#4c5409", icon: "pi pi-chart-line" },
    { id: "nestle_locknlock", color: "#4c5409", icon: "pi pi-chart-line" },
  ];

  const customizedMarker = (item: any) => (
    <span className={styles.customMarker} style={{ backgroundColor: "white" }}>
      <i className={item.icon}></i>
    </span>
  );

  const YupiContent = () => {
    // Xác định text thời gian dựa trên ngôn ngữ
    const durationText = lang === "Viet" ? "2025 - hiện tại" : "2025 - present";
    const text1 =
      lang === "Viet"
        ? "Giám đốc Quốc gia Việt Nam tại YUPI Group"
        : "Country Head of Viet Nam at YUPI Group";
    return (
      <div className="flex flex-col gap-3">
        <div className={durationClass}>{durationText}</div>
        <div className={contentTextClass}>{text1}</div>
        <div className="flex justify-center items-center w-full mt-2">
          <Image
            src={YupiLogo}
            alt="Yupi"
            className="h-20 md:h-30 w-auto object-contain"
          />
        </div>
      </div>
    );
  };

  const ThpSheContent = () => {
    // Xác định text thời gian dựa trên ngôn ngữ
    const durationText = "2024 - 2025";
    const text1 =
      lang === "Viet"
        ? "Giám đốc Kinh doanh Quốc tế, Kênh MT & Thương mại Điện tử & SA tại Tân Hiệp Phát"
        : "Head of Sales International Business, Modern Trade & E-Commerce & SA at Tan Hiep Phat";
    const text2 =
      lang === "Viet"
        ? "CEO/Nhà sáng lập SHE Global Community"
        : "CEO/ Founder at SHE Community";
    const text3 =
      lang === "Viet"
        ? "Cố vấn – Diễn giả – Giảng viên tại Đúng Người Đúng Việc, AIESEC, NEWING, Rise Your Future, Mind Coach Global"
        : "Mentor - Speaker - Trainer at Dung nguoi dung viec, AIESEC, NEWING, Rise your future, Mind Coach Global";

    return (
      <div className="flex flex-col gap-3">
        {/* Thời gian */}
        <div className={durationClass}>{durationText}</div>
        <div>
          <div className={contentTextClass + " text-center"}>{text1}</div>
        </div>
        {/* Logo */}
        <div className="flex justify-center items-center w-full">
          <Image src={ThpLogo} alt="Tân Hiệp Phát" className="h-30 w-auto" />
        </div>
        <div>
          <div className={contentTextClass + " text-center"}>{text2}</div>
        </div>
        {/* Logo */}
        <div className="flex justify-center items-center w-full">
          <Image
            src={SheLogo}
            alt="SHE Global Community"
            className="h-30 w-auto"
          />
        </div>
        <div>
          <div className={contentTextClass + " text-center"}>{text3}</div>
        </div>
        {/* Logo */}
        <div className="flex justify-center items-center w-full">
          <Image src={LogoLine} alt="Logo Line" className="h-30 w-auto" />
        </div>
      </div>
    );
  };

  const CocaColaContent = () => {
    // Logic đa ngôn ngữ
    const durationText = "2021 - 2023";
    const text1 =
      lang === "Viet"
        ? "Quản lý Kinh doanh Toàn quốc Cấp cao (Kênh MT) tại Coca-Cola"
        : "Senior National Business Manager in MT Channel at Coca Cola";
    return (
      <div className="flex flex-col gap-3">
        {/* Thời gian */}
        <div className={durationClass}>{durationText}</div>
        <div>
          <div className={contentTextClass}>{text1}</div>
        </div>
        {/* Logo */}
        <div className="flex justify-center items-center w-full">
          <Image src={CocaColaLogo} alt="Coca-Cola" className="h-40 w-auto" />
        </div>
      </div>
    );
  };

  const NestleWaterContent = () => {
    // Logic đa ngôn ngữ
    const durationText = "2019 - 2021";
    const text1 =
      lang === "Viet"
        ? "Trưởng bộ phận Kênh Bán lẻ Hiện đại tại Nestlé Waters"
        : "Head of Modern Trade at Nestle Waters";
    return (
      <div className="flex flex-col gap-3">
        {/* Thời gian */}
        <div className={durationClass}>{durationText}</div>
        <div>
          <div className={contentTextClass}>{text1}</div>
        </div>
        {/* Logo */}
        <div className="flex justify-center items-center w-full">
          <Image
            src={NestleWatersLogo}
            alt="Nestlé Waters"
            className="h-50 w-auto"
          />
        </div>
      </div>
    );
  };

  const NestleLockNLockContent = () => {
    // Logic đa ngôn ngữ
    const durationText = "2009 - 2019";
    const text1 =
      lang === "Viet"
        ? "Giám đốc Kinh doanh Toàn quốc tại MESA Group; phụ trách các thương hiệu Nescafé, Nestlé, Lock&Lock, HAIHACO"
        : "National Sales Manager at MESA Group, Nescafe, Nestle, Lock&Lock, HAIHACO";
    return (
      <div className="flex flex-col gap-3">
        {/* Thời gian */}
        <div className={durationClass}>{durationText}</div>
        <div>
          <div className={contentTextClass}>{text1}</div>
        </div>
        {/* Logo */}
        <div className="flex justify-center items-center w-full">
          <Image
            src={LogoLine2}
            alt="Nestlé Waters"
            className="md:w-full md:h-auto h-50 w-auto object-contain"
          />
        </div>
      </div>
    );
  };

  const DefaultContent = () => (
    <div>
      <h2 className="text-4xl font-black text-white mb-2 tracking-tighter">
        2024 - 2025
      </h2>

      {/* Part 1: THP */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-100">
          {t("timeline.thp.title")}
        </h3>
        <div className="flex gap-4 mt-2 justify-inherit">
          <img
            src="/logos/thp.png"
            className="h-8 brightness-0 invert"
            alt="THP"
          />
        </div>
      </div>

      {/* Part 2: SHE Community */}
      <div className="mb-6 pt-4 border-t border-white/5">
        <h3 className="text-lg font-bold text-gray-100">
          CEO/ Founder SHE Global Community
        </h3>
        <div className="flex gap-4 mt-2 justify-inherit">
          <img
            src="/logos/she.png"
            className="h-8 brightness-0 invert"
            alt="SHE"
          />
        </div>
      </div>

      {/* Part 3: Mentoring/Coaching - Nhiều logo nhỏ */}
      <div className="flex flex-wrap gap-4 pt-2 opacity-60">
        <img src="/logos/aiesec.png" className="h-6 brightness-0 invert" />
        <img src="/logos/newing.png" className="h-6 brightness-0 invert" />
        <img src="/logos/ryf.png" className="h-6 brightness-0 invert" />
      </div>
    </div>
  );
  const renderEventContent = (item: any, index: number) => {
    const isLeft = index % 2 === 0;

    // 1. Hàm chọn nội dung dựa trên ID (hoặc duration)
    const renderInnerContent = () => {
      switch (item.id) {
        case "yupi_group":
          return <YupiContent />;
        case "thp_she":
          return <ThpSheContent />;
        case "coca_cola":
          return <CocaColaContent />;
        case "nestle_waters":
          return <NestleWaterContent />;
        case "nestle_locknlock":
          return <NestleLockNLockContent />;
        default:
          return <DefaultContent />;
      }
    };

    return (
      <div
        className={`flex w-full mb-12 ${isLeft ? "p-4 md:p-10" : "p-4 md:p-10"}`}
      >
        {/* max-w-[750px] nhưng w-full để nó co lại trên mobile */}
        <div className="relative group w-full max-w-[90vw] md:max-w-[750px]">
          <div
            className={`
                p-6 md:p-8 rounded-[30px] md:rounded-[40px] 
                bg-linear-to-br from-[#7c822b]/80 via-[#5a5f1f]/50 to-[#4c5409]/30
                border-2 border-[#b5bc4f]/30
                shadow-[0_0_30px_15px_rgba(181,188,79,0.2)]
                backdrop-blur-xl
                hover:scale-105 hover:border-[#7c822b]/50
                transition-all duration-500
                ${isLeft ? "text-left" : "text-right"}
            `}
          >
            {renderInnerContent()}
          </div>
        </div>
      </div>
    );
  };
  const films = [
    ExpScrollImage1,
    ExpScrollImage2,
    ExpScrollImage3,
    ExpScrollImage4,
    ExpScrollImage5,
  ];

  return (
    <div id="experience" className={`${styles.container} relative pt-32 pb-20`}>
      {/* Background Text */}
      <div className="absolute top-30 left-0 w-1/2 pointer-events-none">
        <Image
          src={RealtimeExperienceText}
          alt="Realtime Experience"
          className="w-9/10 h-auto mx-auto"
        />
      </div>

      {/* Timeline Container */}
      <div className={`${styles.timelineWrapper}`}>
        <Timeline
          value={events}
          align="alternate"
          className={`${styles.customTimeline} text-lg max-w-[1920px] mx-auto`}
          marker={customizedMarker}
          content={renderEventContent}
        />
      </div>
      <div className="w-full pointer-events-none">
        <Image
          src={QuoteEndText}
          alt="Realtime Experience"
          className="w-5/10 h-auto mx-auto"
        />
      </div>
      <div>
        <ImageFilmTrip images={films} speed="120s" />
      </div>
    </div>
  );
};

export default ExperienceSection;
