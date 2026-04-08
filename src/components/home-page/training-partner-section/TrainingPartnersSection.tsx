"use client";
import { Carousel } from "primereact/carousel";
import styles from "./TrainingPartnersSection.module.scss";
import { useLanguage } from "@/context/LanguageContext";
import Image, { StaticImageData } from "next/image";
import Partner1Image from "@/assets/home-page/assets/partner-1.png";
import Partner2Image from "@/assets/home-page/assets/partner-2.png";
import Partner3Image from "@/assets/home-page/assets/partner-3.png";
import Partner4Image from "@/assets/home-page/assets/partner-4.jpg";
import Partner5Image from "@/assets/home-page/assets/partner-5.png";
import { Button } from "primereact/button";
import { useContactForm } from "@/context/ContactContext";
interface TrainingPartnerItem {
  title: string;
  partnerName: string;
  position: string;
  programContent: string;
  partnerImage: string | StaticImageData;
}

interface TrainingPartnerData {
  Viet: TrainingPartnerItem;
  Eng: TrainingPartnerItem;
}

const TrainingPartnersSection = () => {
  const { lang } = useLanguage();
  const { openContactForm } = useContactForm();
  const partners: TrainingPartnerData[] = [
    {
      Viet: {
        title: "WORKSHOP: ĐÒN BẨY MỐI QUAN HỆ - BIẾN NETWORK THÀNH TÀI SẢN",
        partnerName: "PDCA",
        position: "Speaker",
        programContent:
          "Xây dựng mối quan hệ thành nguồn lực hỗ trợ trong công việc và kinh doanh bền lâu.",
        partnerImage: Partner1Image,
      },
      Eng: {
        title:
          "WORKSHOP: LEVERAGING RELATIONSHIPS - TURNING NETWORKS INTO ASSETS",
        partnerName: "PDCA",
        position: "Speaker",
        programContent:
          "Building relationships as a strategic resource to support long-term career growth and business success.",
        partnerImage: Partner1Image,
      },
    },
    {
      Viet: {
        title: "SME FORUM 2026",
        partnerName: "NEWING",
        position: "Inspirer",
        programContent:
          "Diễn đàn chia sẻ kinh nghiệm thực chiến của gần 1000 CEO công ty quy mô vừa và nhỏ tại Việt Nam, từ đó chia sẻ tầm nhìn và khơi mở nhiều cơ hội hợp tác mới mẻ.",
        partnerImage: Partner2Image,
      },
      Eng: {
        title: "SME FORUM 2026",
        partnerName: "NEWING",
        position: "Inspirer",
        programContent:
          "A sharing forum on business experience for over 1,000 SME business owners in Vietnam, creating opportunities for connection and collaboration.",
        partnerImage: Partner2Image,
      },
    },
    {
      Viet: {
        title: "FREELANCE & MENTORING: A NEW WAY OF WORKING FOR PROFESSIONALS",
        partnerName: "Vietnam Supply Chain Vibe",
        position: "Speaker",
        programContent:
          "Đưa kinh nghiệm được chuyển hóa thành cơ hội nghề nghiệp và thu nhập linh hoạt, đồng thời cung cấp giá trị bền vững cho cộng đồng thông qua phương pháp Mentoring",
        partnerImage: Partner3Image,
      },
      Eng: {
        title: "FREELANCE & MENTORING: A NEW WAY OF WORKING FOR PROFESSIONALS",
        partnerName: "Vietnam Supply Chain Vibe",
        position: "Speaker",
        programContent:
          "Sharing hands-on experience in transitioning careers to flexible income models, while contributing to the community through mentoring.",
        partnerImage: Partner3Image,
      },
    },
    {
      Viet: {
        title: "THE ART OF NETWORKINGS",
        partnerName: "LinkedIn Blue Ocean",
        position: "Speaker",
        programContent:
          "Xây dựng tư duy và kỹ năng networking trong thời đại số, phát triển thương hiệu và sự nghiệp cá nhân bền vững.",
        partnerImage: Partner4Image,
      },
      Eng: {
        title: "THE ART OF NETWORKING",
        partnerName: "LinkedIn Blue Ocean",
        position: "Speaker",
        programContent:
          "Building networking mindset and strategies to create sustainable career and business growth.",
        partnerImage: Partner4Image,
      },
    },
    {
      Viet: {
        title:
          "COACHING THỰC CHIẾN DÀNH CHO QUẢN LÝ: GIAO VIỆC, PHÁT TRIỂN, GIỮ NGƯỜI ",
        partnerName: "Mind Coach Global",
        position: "Coach",
        programContent:
          "Ứng dụng Coaching vào công tác giao việc, phát triển thông qua sự tin tưởng và khám phá mô hình giữ người hiệu quả.",
        partnerImage: Partner5Image,
      },
      Eng: {
        title:
          "PRACTICAL COACHING FOR MANAGERS: DELEGATION, DEVELOPMENT, RETENTION",
        partnerName: "Mind Coach Global",
        position: "Coach",
        programContent:
          " Applying coaching in daily work to promote innovation and develop effective people management models.",
        partnerImage: Partner5Image,
      },
    },
  ];

  const renderPartnerItem = (item: TrainingPartnerData) => {
    return (
      <div className="w-4/5 md:w-full h-full flex flex-col gap-5 md:flex-row md:gap-10 md:items-stretch mx-auto my-auto px-2">
        <div className="w-full md:w-3/5! flex-none flex items-center justify-center h-fit">
          <Image
            src={item[lang].partnerImage}
            alt="Partner Image"
            className="w-full h-auto object-cover object-center scale-110 md:scale-100 "
          />
        </div>

        <div className="w-full md:flex-1 flex flex-col items-start gap-3 md:gap-10 my-auto">
          <div className="w-full text-xl md:text-4xl font-bold leading-snug">
            {item[lang].title}
          </div>

          <div className="flex flex-col gap-2 md:gap-3 text-justify md:mr-2">
            <div className="text-xl md:text-2xl leading-relaxed">
              <span className="text-xl md:text-2xl font-semibold text-left">
                {lang == "Viet" ? "Đơn vị hợp tác: " : "Partner: "}
              </span>
              {item[lang].partnerName}
            </div>

            <div className="text-xl md:text-2xl leading-relaxed">
              <span className="text-xl md:text-2xl font-semibold text-left">
                {lang == "Viet" ? "Vai trò hợp tác: " : "Role: "}
              </span>
              {item[lang].position}
            </div>

            <div className="text-xl md:text-2xl leading-relaxed text-left">
              <span className="text-xl md:text-2xl font-semibold ">
                {lang == "Viet"
                  ? "Nội dung chương trình: "
                  : "Program overview: "}
              </span>
              {item[lang].programContent}
            </div>

            <div className="pt-10 w-full flex items-center">
              <Button
                unstyled
                label={
                  lang == "Viet" ? "Liên hệ tư vấn" : "Contact for Consultation"
                }
                // Bỏ mx-auto nếu muốn nút căn trái cùng text
                className="block bg-linear-to-r from-[#757e13] to-[#1c1e04]/80 text-white text-xl sm:text-4xl font-bold rounded-2xl w-fit px-10 py-3 cursor-pointer hover:scale-110 transition-all duration-300 mx-auto"
                onClick={openContactForm}
              />
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full bg-[#feffd4]">
      <div className="mt-15 sm:mt-20 md:mt-22 uppercase bg-linear-to-r from-[#505809] to-[#c1c969] bg-clip-text text-transparent font-bold text-2xl sm:text-5xl md:text-7xl text-center mb-2 md:mb-12! p-3">
        {lang == "Viet"
          ? "ĐỐI TÁC HỢP TÁC ĐÀO TẠO"
          : "TRAINING COLLABORATION PARTNERS"}
      </div>
      <div className={`${styles.carouselWrapper} w-full`}>
        <div className="">
          {/* Mobile Carousel: 1 item để ảnh to rõ */}
          <Carousel
            value={partners} // Đã sửa Harvard đúng chính tả
            itemTemplate={renderPartnerItem}
            numVisible={1}
            numScroll={1}
            circular
            autoplayInterval={8000}
            prevIcon={<i className="pi pi-chevron-left text-lg" />}
            nextIcon={<i className="pi pi-chevron-right text-lg" />}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default TrainingPartnersSection;
