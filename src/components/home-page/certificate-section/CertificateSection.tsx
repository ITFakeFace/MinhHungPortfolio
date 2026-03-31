"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { Carousel } from "primereact/carousel";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./CertificateSection.module.scss";
import SheLogo from "@/assets/home-page/logo/SheLogo-1.png";
import Certificate1 from "@/assets/home-page/assets/certificate-1.png";
import Certificate2 from "@/assets/home-page/assets/certificate-2.png";
import Certificate3 from "@/assets/home-page/assets/certificate-3.png";
import MindCoachGlobalLogo from "@/assets/home-page/logo/MindCoachGlobalLogo-1.png";
import SuccessLogo from "@/assets/home-page/logo/SuccessLogo-1.png";
import FavikonLogo from "@/assets/home-page/logo/FavikonLogo-1.png";
import PTILogo from "@/assets/home-page/logo/PTILogo-1.png";

// Giả sử bạn có data mẫu như thế này
interface CertItem {
  id: number;
  title: string;
  unitName: string;
  description: string;
  logoImage: string | StaticImageData;
}

interface CertData {
  Viet: CertItem;
  Eng: CertItem;
}

interface HavardCertItem {
  id: number;
  image: string | StaticImageData;
}

const CertificationSection = () => {
  const { lang } = useLanguage();
  const certs: CertData[] = [
    {
      Viet: {
        id: 1,
        title: "TRAINER PRO - NHÀ ĐÀO TẠO CHUYÊN NGHIỆP",
        unitName: "SUCCESS TRAINING & COACHING",
        description:
          "Nhà đào tạo đạt mức độ thành thạo và kỹ năng cao nhất thông qua chương trình thử thách 4 tuần, tập trung thực hành và áp dụng thiết kế cũng như triển khai khóa đào tạo trong nhóm học tập – làm việc và tại môi trường tổ chức.",
        logoImage: SuccessLogo,
      },
      Eng: {
        id: 1,
        title: "PROFESSIONALS TRAINER",
        unitName: "SUCCESS TRAINING & COACHING",
        description:
          "A highly proficient trainer certified through a 4-week challenge-based program, specializing in hands-on training design and delivery across learning and organizational settings.",
        logoImage: SuccessLogo,
      },
    },
    {
      Viet: {
        id: 2,
        title: "PROFESSIONAL COACHING FOUNDATION",
        unitName: "MIND COACH GLOBAL",
        description:
          "Nhà khai vấn chuyên nghiệp trải qua 03 tháng đào tạo với các phiên Coach 1 - 1 giúp khai phóng và phát triển nhiều lãnh đạo tiềm năng.",
        logoImage: MindCoachGlobalLogo,
      },
      Eng: {
        id: 2,
        title: "PROFESSIONAL COACHING FOUNDATION",
        unitName: "MIND COACH GLOBAL",
        description:
          "A professional coach with 3 months of intensive training, specializing in 1:1 coaching to unlock and develop high-potential leaders.",
        logoImage: MindCoachGlobalLogo,
      },
    },
    {
      Viet: {
        id: 3,
        title: "CEO 100 - GIÁM ĐỐC ĐIỀU HÀNH CHUYÊN NGHIỆP",
        unitName: "PTI BUSINESS SCHOOL",
        description:
          "Khóa học chứng nhận cho năng lực quản trị toàn diện của một Giám đốc chuyên nghiệp, bao quát từ chiến lược, nhân sự, marketing, tài chính đến xây dựng văn hóa và thương hiệu doanh nghiệp.",
        logoImage: PTILogo,
      },
      Eng: {
        id: 3,
        title: "CEO 100 - PROFESSIONAL CEO",
        unitName: "PTI BUSINESS SCHOOL",
        description:
          "A certification program for holistic executive leadership, encompassing strategy, HR, marketing, finance, and corporate culture & brand development.",
        logoImage: PTILogo,
      },
    },
    {
      Viet: {
        id: 4,
        title: "TOP 50 NHÀ SÁNG TẠO NỘI DUNG",
        unitName: "FAVIKON",
        description:
          "Nằm trong danh sách 200 nhà sáng tạo nội dung tiêu biểu về ngành Sales trên nền tảng LinkedIn tại Việt Nam với số điểm 85/100",
        logoImage: FavikonLogo,
      },
      Eng: {
        id: 4,
        title: "TOP 50 CREATORS",
        unitName: "FAVIKON",
        description:
          "Recognized as one of the Top 200 Sales content creators on LinkedIn in Vietnam, achieving a score of 85/100.",
        logoImage: FavikonLogo,
      },
    },
  ];

  const havardCertificates: HavardCertItem[] = [
    { id: 1, image: Certificate1 },
    { id: 2, image: Certificate2 },
    { id: 3, image: Certificate3 },
  ];

  // Render cho Desktop: Logo bên trái, Chứng chỉ bên phải
  const renderDesktop = (item: CertData) => {
    return (
      <div className="flex flex-row items-start w-full max-w-5xl mx-auto gap-3 py-6">
        {/* CỘT LOGO: Cố định độ rộng hoặc dùng flex-basis */}
        <div className="w-1/4 2xl:w-1/4! flex-shrink-0 flex justify-center">
          <Image
            src={item[lang].logoImage}
            alt="Logo"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* CỘT TEXT: Chiếm phần còn lại */}
        <div className="flex-1 flex flex-col gap-3 text-[#4c5409] mr-5">
          {/* Tiêu đề chính: Đậm và lớn nhất */}
          <h2 className="text-3xl 2xl:text-3xl! font-extrabold uppercase leading-tight tracking-tight">
            {item[lang].title}
          </h2>

          {/* Tên đơn vị: Nhạt hơn hoặc kích thước vừa phải */}
          <h3 className="text-xl 2xl:text-2xl! font-bold uppercase tracking-wide opacity-90">
            {item[lang].unitName}
          </h3>

          {/* Mô tả: Căn đều hoặc căn trái tùy ý */}
          <p className="text-lg 2xl:text-xl! leading-relaxed text-justify md:text-left">
            {item[lang].description}
          </p>
        </div>
      </div>
    );
  };

  // Render cho Mobile: Logo và Cert có thể xếp chồng hoặc thu nhỏ
  const renderMobile = (item: CertData) => {
    return (
      <div className="flex flex-col items-center gap-4 w-full px-10 h-full my-auto">
        <div className="h-64 bg-transparent flex items-center justify-center text-xs">
          <Image
            src={item[lang].logoImage}
            alt="Cert Image"
            className="h-full w-auto aspect-square object-contain mx-auto my-auto"
          />
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="text-xl text-center font-bold uppercase">
            {item[lang].title}
          </div>
          <div className="text-xl text-center font-semibold uppercase">
            {item[lang].unitName}
          </div>
          <div className="text-lg mx-5 text-justify">
            {item[lang].description}
          </div>
        </div>
      </div>
    );
  };

  const renderHavardCertificateItem = (item: HavardCertItem) => {
    return (
      <div className="mx-auto w-full">
        <Image
          src={item.image}
          alt="Certificate Image"
          className="w-4/5 mx-auto border-black border-2"
        />
      </div>
    );
  };

  return (
    <section className="bg-[#272a06] pt-20 relative overflow-hidden">
      {/* Box vòm màu vàng */}
      <div className={`${styles.vaultBox} w-full`}>
        <div className=" mx-auto ">
          {/* Header */}
          <div className="text-center mb-10 ">
            <h2
              className={`bg-gradient-to-r  from-[#4c5409] to-[#b0b266] bg-clip-text text-transparent w-3/4 mx-auto ${lang == "Viet" ? "text-5xl" : "text-4xl"} md:text-7xl font-bold uppercase leading-tight `}
            >
              {lang === "Viet"
                ? "Chứng nhận kỹ năng"
                : "PROFESSIONALS SKILLS CERTIFICATION"}
            </h2>
            <p className="text-[#61652f] font-semibold mt-2 uppercase tracking-widest text-md md:text-3xl">
              {lang === "Viet"
                ? "QUẢN LÝ, ĐÀO TẠO VÀ HUẤN LUYỆN"
                : "MANAGEMENT, COACHING AND TRAINING"}
            </p>
          </div>

          {/* Carousel Wrapper */}
          <div className="mx-auto w-9/10">
            <div className={`${styles.carouselWrapper} w-full`}>
              {/* Desktop Carousel */}
              <div className="hidden! md:block!">
                <Carousel
                  value={certs}
                  itemTemplate={renderDesktop}
                  numVisible={2}
                  numScroll={2}
                  circular
                  prevIcon={<i className="pi pi-chevron-left text-xl" />}
                  nextIcon={<i className="pi pi-chevron-right text-xl" />}
                  className="w-full"
                />
              </div>

              {/* Mobile Carousel */}
              <div className="block! md:hidden!">
                <Carousel
                  value={certs}
                  itemTemplate={renderMobile}
                  numVisible={1}
                  numScroll={1}
                  circular
                  prevIcon={<i className="pi pi-chevron-left text-lg" />}
                  nextIcon={<i className="pi pi-chevron-right text-lg" />}
                  className="w-full"
                />
              </div>
            </div>
          </div>

          {/* Footer Logo Section (Havard part) */}
          <div className="mt-16 text-center">
            <h3 className="bg-gradient-to-r from-[#b0b266] to-[#4c5409] bg-clip-text text-transparent text-4xl md:text-6xl font-bold uppercase md:py-2">
              {lang === "Viet"
                ? "CHỨNG NHẬN BỞI HARVARD"
                : "CERTIFIED BY HAVARD UNIVERSITY"}
            </h3>
            <p className="text-[#61652f] text-lg! md:text-4xl! mb-4 md:mb-8">
              MANAGE MENTOR
            </p>
            <div className="hidden md:flex flex-row  gap-4 w-9/10 mx-auto px-4">
              <Image
                src={Certificate1}
                alt="Havard Certificate"
                className="w-1/3 border-2 border-black h-auto"
              />
              <Image
                src={Certificate2}
                alt="Havard Certificate"
                className="w-1/3 border-2 border-black h-auto"
              />
              <Image
                src={Certificate3}
                alt="Havard Certificate"
                className="w-1/3 border-2 border-black h-auto"
              />
            </div>
            <div className={`${styles.carouselWrapper} w-full`}>
              <div className="block md:hidden">
                {/* Mobile Carousel: 1 item để ảnh to rõ */}
                <Carousel
                  value={havardCertificates} // Đã sửa Harvard đúng chính tả
                  itemTemplate={renderHavardCertificateItem}
                  numVisible={1}
                  numScroll={1}
                  autoplayInterval={10000}
                  circular
                  prevIcon={<i className="pi pi-chevron-left text-lg" />}
                  nextIcon={<i className="pi pi-chevron-right text-lg" />}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationSection;
