"use client";
import MsHungImage from "@/assets/home-page/assets/MsHungAbout-1.png";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./AboutSection.module.scss";

const AboutSection = () => {
  const { lang } = useLanguage();

  return (
    <div id="about" className={`w-full ${styles.container}`}>
      <div className={`relative w-full flex flex-row md:mt-5`}>
        <Image
          src={MsHungImage}
          alt={"HungImage"}
          priority
          className={
            "absolute z-10 bottom-0 left-0 " +
            "h-auto object-contain object-bottom " +
            "md:block hidden " +
            // 🔥 CHIÊU THỨ NHẤT: Giới hạn chiều rộng ảnh tối đa là 35% hoặc 40% màn hình
            "md:w-[35%] lg:w-[40%] " +
            // 🔥 CHIÊU THỨ HAI: Đảm bảo ảnh không bao giờ cao quá container
            "max-h-full"
          }
        />
        <div
          className={`${styles.aboutBox} w-full md:w-7/10! h-fit md:ml-auto m-5 md:m-20 md:mr-10 md:pl-30 lg:pl-40! text-white block md:flex flex-col md:gap-3 leading-relaxed md:p-10`}
        >
          <div
            className={
              "text-xl sm:text-4xl md:text-5xl font-semibold mb-2 mt-5 sm:mt-12.5 ml-5 mr-5 sm:mr-0 sm:ml-12.5 md:mt-0 md:ml-0"
            }
          >
            {lang == "Viet"
              ? "Chào bạn, tôi là Minh Hưng (Helena),"
              : "Hello, I’m Minh Hưng (Helena),"}
          </div>
          <div className="whitespace-pre-line flex flex-col gap-5 text-sm sm:text-md md:text-xl mb-2 ml-5 mr-5 sm:mr-0 sm:ml-12.5 md:ml-0 leading-relaxed ">
            {lang == "Viet"
              ? "Tôi là một nhà commercial leader với hơn 18 năm kinh nghiệm thực chiến trong việc thúc đẩy tăng trưởng và xây dựng các đội ngũ hiệu suất cao trong ngành FMCG & Bán lẻ tại Việt Nam. Chuyên môn của tôi trải dài từ hoạch định chiến lược thương mại, tối ưu hóa hệ thống phân phối, phát triển thương hiệu đa kênh cho đến mở rộng kinh doanh dựa trên nền tảng số."
              : "I am a commercial leader with over 18 years of hands-on experience in driving growth and building high-performance teams within the FMCG and Retail sectors in Vietnam. My expertise spans commercial strategy development, distribution optimization, omnichannel brand building, and digital-driven business expansion."}
          </div>
          <div className="whitespace-pre-line flex flex-col gap-5 text-sm sm:text-md md:text-xl mb-2 ml-5 mr-5 sm:mr-0 sm:ml-12.5 md:ml-0 leading-relaxed">
            {lang == "Viet"
              ? "Trên hành trình lãnh đạo của mình tại Tân Hiệp Phát, Coca-Cola, Nestlé Waters và Mesa Group, tôi đã liên tục tạo ra những kết quả kinh doanh đột phá thông qua các chiến lược sắc bén, sự thấu hiểu thị trường sâu sắc và một tinh thần thực thi đầy kỷ luật."
              : "Throughout my leadership journey at Tân Hiệp Phát, Coca-Cola, Nestlé Waters, and Mesa Group, I have consistently delivered breakthrough business results through sharp strategic thinking, deep market insights, and disciplined execution."}
          </div>

          <div className="whitespace-pre-line flex flex-col gap-5 text-sm sm:text-md md:text-xl mb-2 ml-5 mr-5 sm:mr-0 sm:ml-12.5 md:ml-0 leading-relaxed">
            {lang == "Viet"
              ? "Ngoài vai trò lãnh đạo tại các tập đoàn, tôi còn là một Market & Business Consultant, đồng hành cùng các doanh nghiệp và nhà đầu tư trong việc thâm nhập thị trường, thẩm định thương mại, thiết kế kênh phân phối và hoạch định chiến lược tăng trưởng."
              : "Beyond my corporate leadership roles, I also serve as a Market & Business Consultant, partnering with companies and investors on market entry, commercial due diligence, distribution design, and growth strategy development."}
          </div>
          {/* Khối chứa ảnh và text cuối */}
          <div className="relative">
            {/* ẢNH MOBILE: Đưa lên trước đoạn text muốn đẩy */}
            <Image
              src={MsHungImage}
              alt={"HungImage"}
              className="hidden sm:block md:hidden float-right w-1/2 h-auto object-contain ml-4 mb-2 [shape-outside:inset(0)]"
              /* shape-outside giúp trình duyệt hiểu khối bao quanh ảnh để đẩy chữ */
            />
            <div className="whitespace-pre-line flex flex-col gap-5 md:mb-5 text-sm sm:text-md md:text-xl mb-2 ml-5 mr-5 sm:mr-0 sm:ml-12.5 md:ml-0 text-justify leading-relaxed">
              {lang == "Viet"
                ? "Tôi cũng là Nhà sáng lập cộng đồng SHE Global Community, Leadership & Business Coach tại Mind Coach Global, người tổ chức chuỗi sự kiện LinkedIn Networking Vietnam, đồng thời là một Mentor, Diễn giả và Giám khảo tích cực cho các cộng đồng về Sales, Marketing, FMCG & Bán lẻ."
                : "I am the Founder of SHE Global Community, a Leadership & Business Coach at Mind Coach Global, the organizer of LinkedIn Networking Vietnam events, and an active Mentor, Speaker, and Judge within Sales, Marketing, FMCG, and Retail communities."}
            </div>
            <div className="whitespace-pre-line flex flex-col gap-5 text-sm sm:text-md md:text-xl mb-5 md:mb-0 ml-5 mr-5 sm:mr-0 sm:ml-12.5 md:ml-0 text-justify leading-relaxed">
              {lang == "Viet"
                ? "Đam mê lớn nhất của tôi là chinh phục thị trường, phát triển con người và tạo ra những tác động kinh doanh bền vững thông qua chiến lược xuất sắc và một tinh thần quyết liệt."
                : "My greatest passion lies in conquering markets, developing people, and creating sustainable business impact through strategic excellence and a strong results-driven mindset."}
            </div>
            {/* Clear float để không ảnh hưởng section sau */}
            <div className="clear-both"></div>
          </div>
        </div>
      </div>
      <Image
        src={MsHungImage}
        alt={"HungImage"}
        className="sm:hidden float-right w-full h-auto object-contain ml-4 [shape-outside:inset(0)]"
        /* shape-outside giúp trình duyệt hiểu khối bao quanh ảnh để đẩy chữ */
      />
    </div>
  );
};

export default AboutSection;
