"use client";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./SharingExpSection.module.scss";
import StategicTextVN from "@/assets/home-page/text/StategicPartnerTextVN-1.png";
import StategicTextEN from "@/assets/home-page/text/StategicPartnerTextEN-1.png";
import SharingExpTextVN from "@/assets/home-page/text/ShareExpTextVN-1.png";
import SharingExpTextEN from "@/assets/home-page/text/ShareExpTextEN-1.png";
import PartnersLogoImage from "@/assets/home-page/logo/PartnersLogo-1.png";
import MsHungImage from "@/assets/home-page/assets/MsHung-4.png";
import Exp1Image from "@/assets/home-page/assets/event-4.png";
import Exp2Image from "@/assets/home-page/assets/event-5.png";
import Image, { StaticImageData } from "next/image";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";

interface ExpsItem {
  title: string;
  source: string;
  content: string;
  image: string | StaticImageData;
}

interface ExpsData {
  Viet: ExpsItem;
  Eng: ExpsItem;
}

const SharingExpSection = () => {
  const { lang } = useLanguage();

  const exps: ExpsData[] = [
    {
      Viet: {
        title:
          "Đâu là cách giúp ứng viên nhận diện môi trường làm việc lý tưởng dựa trên văn hóa doanh nghiệp?",
        source: "Advertising Vietnam",
        content:
          "Với tôi văn hóa là “cách doanh nghiệp sống mỗi ngày” - Đó là “DNA” của tổ chức, là \“không khí\” mà chúng ta hít thở mỗi ngày khi đi làm",
        image: Exp1Image,
      },
      Eng: {
        title:
          "What is the best way to help candidates identify an ideal working environment based on corporate culture?",
        source: "Advertising Vietnam",
        content:
          "To me, corporate culture is “how a company lives every day” — it is the “DNA” of an organization, the “air” we breathe every day at work.",
        image: Exp1Image,
      },
    },
    {
      Viet: {
        title: "Từ “giỏi” đến “vĩ đại”: Ai sẽ chiếu sáng điểm mù của bạn?",
        source: "Báo Doanh nhân Sài Gòn",
        content:
          "Khi thành công ngày hôm qua có thể là rào cản của ngày mai, người dẫn dắt bạn đi xa hơn không phải là người khen bạn, mà là người đặt đúng câu hỏi khiến bạn… giật mình.",
        image: Exp2Image,
      },
      Eng: {
        title: "From “Good” to “Great”: Who Will Illuminate Your Blind Spots?",
        source: "Saigon Business Magazine",
        content:
          "Yesterday's success can become tomorrow's barrier. The person who takes you further is not someone who praises you, but someone who asks the right questions that make you pause and reflect.",
        image: Exp2Image,
      },
    },
  ];

  const renderExpsItem = (item: ExpsData) => {
    return (
      <div className="w-4/5 md:w-full flex flex-col md:flex-row md:gap-10 md:items-stretch mx-auto">
        <div className="w-full md:w-3/5! flex-none flex items-center justify-center overflow-hidden">
          <Image
            src={item[lang].image}
            alt="Partner Image"
            className="w-full h-auto object-cover object-center"
          />
        </div>

        <div className="w-full md:flex-1 flex flex-col items-start gap-3 md:gap-10 my-5">
          <div>
            <div className="w-full text-2xl md:text-5xl font-bold leading-snug text-[#4c5409]">
              {item[lang].title}
            </div>
            <div>
              {lang == "Viet" ? `(Theo ` : "(Source "}
              <span className="font-bold">{item[lang].source}</span>
              {")"}
            </div>
          </div>

          <div className="text-xl md:text-2xl leading-relaxed">
            {item[lang].content}
          </div>
          <div className="pt-10 w-full flex">
            <Button
              unstyled
              label={lang == "Viet" ? "Xem bài viết" : "Read more"}
              // Bỏ mx-auto nếu muốn nút căn trái cùng text
              className="bg-linear-to-r from-[#757e13] to-[#1c1e04]/80 text-white text-2xl md:text-4xl font-bold rounded-2xl w-fit px-10 py-3 cursor-pointer hover:scale-110 transition-all duration-300 mx-auto"
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={`${styles.container} bg-[#ffffe1]`}>
      <div>
        <Image
          src={lang == "Viet" ? SharingExpTextVN : SharingExpTextEN}
          alt="title text"
          className="w-4/5 md:w-3/5 mx-auto mb-10 mt-20"
        />
      </div>
      <div className={`${styles.carouselWrapper} w-full`}>
        <div className="">
          {/* Mobile Carousel: 1 item để ảnh to rõ */}
          <Carousel
            value={exps} // Đã sửa Harvard đúng chính tả
            itemTemplate={renderExpsItem}
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

export default SharingExpSection;
