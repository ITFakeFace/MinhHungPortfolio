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
import Event2Image from "@/assets/home-page/assets/event-2.png";
import Event3Image from "@/assets/home-page/assets/event-3.png";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";
import styles from "./HotTopicSection.module.scss";
import { useRef, useState } from "react";

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
  const topics: TopicData[] = [
    {
      Viet: {
        index: "01",
        title: "LEADERSHIP COACHING",
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
        className="w-19/20 sm:w-9/10 flex flex-row gap-3 md:gap-5 self-end"
        key={item[lang].index}
      >
        <div className="flex flex-col">
          <div className="text-white w-full text-right md:text-left border-b-2 md:border-b-3 border-white text-xl md:text-3xl font-bold pb-1 md:pb-2">
            {item[lang].title}
          </div>
          <div className="text-white w-full text-right md:text-left mt-2 md:mt-3 font-semibold text-lg md:text-2xl">
            {item[lang].description}
          </div>
        </div>
        <div
          className={`${styles.numberCircle} text-white text-2xl md:text-4xl font-bold aspect-square flex justify-center items-center text-center`}
        >
          {item[lang].index}
        </div>
      </div>
    );
  };

  const renderRightColItem = (item: TopicData) => {
    return (
      <div
        className="w-19/20 sm:w-9/10 flex flex-row gap-3 md:gap-5 self-start"
        key={item[lang].index}
      >
        <div
          className={`${styles.numberCircle} text-white text-2xl md:text-4xl font-bold aspect-square flex justify-center items-center text-center`}
        >
          {item[lang].index}
        </div>
        <div className="flex flex-col ">
          <div className="text-white w-full text-left border-b-2 md:border-b-3 border-white text-xl md:text-3xl font-bold pb-2">
            {item[lang].title}
          </div>
          <div className="text-white w-full mt-3 font-semibold text-lg md:text-2xl">
            {item[lang].description}
          </div>
        </div>
      </div>
    );
  };

  const BaseButton = ({ label }: { label: string }) => {
    return (
      <div className="group relative w-full max-w-[500px] cursor-pointer transition-all duration-300 hover:scale-105 active:scale-100 mx-auto md:mx-0 -mt-10">
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
    <a href="#consultation-form">
      <BaseButton
        label={lang === "Viet" ? "Liên hệ tư vấn" : "Book a Consultation"}
      />
    </a>
  );

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
      <div className="flex-1 min-w-0 flex flex-col gap-20 items-end">
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
      <div className="flex-1 min-w-0 flex flex-col gap-30 items-start">
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
    <div
      className={`bg-linear-to-b from-[#828c15] to-[#000000]/10 pt-10 ${styles.container}`}
    >
      <div>
        <Image
          src={lang == "Viet" ? TopicImageVN : TopicImageEN}
          alt="text"
          className="w-4/5 md:w-3/5 mx-auto"
        />
      </div>
      <HotTopicBlock />
      <div id="she-project">
        <Image
          src={lang == "Viet" ? TopicImage2VN : TopicImage2EN}
          alt="text"
          className="w-4/5 md:w-7/10 mx-auto md:mx-5 mb-10 mt-20 hidden md:block"
        />
        <Image
          src={lang == "Viet" ? TopicImage3VN : TopicImage3EN}
          alt="text"
          className="w-9/10 md:w-3/5 mx-auto md:mx-5 mb-10 mt-20 md:hidden block"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-5 md:gap-10">
        {/* Container bọc ngoài giữ tỉ lệ */}
        <div className="w-19/20 sm:w-4/5 md:w-1/2 mx-auto bg-black md:ml-10! md:mr-0! overflow-hidden relative aspect-video md:aspect-9/5">
          {/* Container Video nội bộ - Quan trọng: Phải full height/width */}
          <div className="absolute inset-0 w-full h-full bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              src="/MinhHungPortfolio/videos/SHEVideo-1.mp4"
              // SỬA Ở ĐÂY: h-full và object-cover (hoặc object-contain nếu muốn hiện hết toàn bộ nội dung video)
              className="w-full h-full object-cover"
              controls={hasStarted}
              playsInline
              onPlay={() => setHasStarted(true)}
            />

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
          <div className="text-xl md:text-3xl text-white leading-relaxed">
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
        <div className="w-1/2 mr-10 hidden md:flex flex-row gap-2">
          <div className="my-auto">
            <Image src={Event1Image} alt="text" className="w-full mx-auto" />
          </div>
          <div className="flex flex-col gap-2">
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
          className="w-1/3 mx-auto rotate-12 scale-125 hover:z-20 hover:scale-150 transition-all duration-300"
        />
      </div>
    </div>
  );
};

export default HotTopicSection;
