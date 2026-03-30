"use client";
import styles from "./HeroSection.module.scss";
import MsHungImage from "@/assets/home-page/assets/MsHungBanner-1.png";
import ExpButtonImage from "@/assets/home-page/assets/ExpBox-1.png";
import FacebookButtonImage from "@/assets/home-page/assets/FacebookButton-1.png";
import LinkedInButtonImage from "@/assets/home-page/assets/LinkedInButton-1.png";
import YoutubeButtonImage from "@/assets/home-page/assets/YoutubeButton-1.png";
import ConsultingNowButtonImage from "@/assets/home-page/assets/ConsultingNowButton-1.png";
import ConsultingNowButtonImageEN from "@/assets/home-page/assets/ConsultingNowButtonEN-1.png";
import NewestEventButtonImage from "@/assets/home-page/assets/NewestEventButton-1.png";
import NewestEventButtonImageEN from "@/assets/home-page/assets/NewestEventButtonEN-1.png";
import QuoteText from "@/assets/home-page/text/BannerQuoteText-1.png";
import NameTextVN from "@/assets/home-page/text/MsHungNameText-1.png";
import NameTextEN from "@/assets/home-page/text/MsHungNameTextEN-1.png";
import NameTextVNMobile from "@/assets/home-page/text/MsHungNameTextMobile-1.png";
import NameTextENMobile from "@/assets/home-page/text/MsHungNameTextMobileEN-1.png";
import RoleText from "@/assets/home-page/text/BannerRoleText-1.png";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Button } from "primereact/button";

const ExpButton = ({ className }: { className?: string }) => {
  const { lang } = useLanguage();
  return (
    <div className={className}>
      <div
        className={`w-full aspect-9/5 bg-[linear-gradient(135deg,rgba(55,73,25,0.5)_0%,rgba(36,40,4,0.5)_50%,rgba(55,73,25,0.5)_100%)] p-2 border-3 md:border-5! border-[#454d09] text-white rounded-2xl md:rounded-4xl flex flex-col items-center justify-center gap-2`}
      >
        <div
          className={`${lang == "Viet" ? "text-2xl" : "text-xl"} sm:text-5xl md:text-5xl lg:text-6xl xl:text-[75px]! animate-blink-resize text-center font-bold`}
        >
          +18 {lang == "Viet" ? "năm" : "years"}
        </div>
        <div className="w-9/10 text-center text-[10px] sm:text-lg md:text-xl lg:text-2xl font-semibold">
          {lang == "Viet"
            ? "Lãnh đạo và quản lý ngành FMCG và Bán lẻ"
            : "FMCG and Retail Leadership & Management"}
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const { lang } = useLanguage();

  return (
    <div
      className={`${styles.container} w-full overflow-hidden flex flex-col items-center justify-center`}
    >
      <div className="max-w-480 md:aspect-[384/210]">
        <div className="w-full flex relative flex-row mx-auto h-full">
          <div className="md:w-1/3 hidden md:block">
            <ExpButton className="w-7/10 md:13/20 mt-[30%] ml-[20%]" />
          </div>
          <div className="w-4/5 md:w-1/3 mt-5 md:mt-0 mb-20 md:mb-0 justify-end">
            <Image
              src={MsHungImage}
              alt="Exp Button"
              className="h-full w-auto md:mx-auto"
            />
          </div>
          <div className="w-2/5 md:w-1/3 relative flex flex-col md:pr-10 md:p-5 md:mt-20 gap-3 sm:gap-5 md:gap-7! z-10 items-center mt-20 sm:mt-20 mr-3">
            <Image
              src={QuoteText}
              alt="Exp Button"
              className=" md:h-auto w-full md:mx-auto right-15 scale-115 sm:scale-100"
            />
            <div className="flex md:mt-0 flex-col md:flex-row! gap-0 md:gap-2 items-center justify-center w-full">
              <ExpButton className="block md:hidden" />
              <a
                href="https://www.facebook.com/khungtroi.binhyen.7"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={FacebookButtonImage}
                  alt="Exp Button"
                  className="md:h-auto w-15! sm:w-24! md:w-32! md:mx-auto "
                />
              </a>
              <a
                href="https://www.linkedin.com/in/minh-hung-le-2a76111a9/details/experience/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={LinkedInButtonImage}
                  alt="Exp Button"
                  className="md:h-auto w-15! sm:w-24! md:w-32! md:mx-auto "
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={YoutubeButtonImage}
                  alt="Exp Button"
                  className="md:h-auto w-15! sm:w-24! md:w-32! md:mx-auto "
                />
              </a>
            </div>
            <div className="w-full md:flex flex-col gap-3 items-center justify-center hidden">
              <Button
                unstyled
                className="cursor-pointer hover:scale-110 transition-all duration-300 mx-auto w-9/10"
              >
                <a href="#consultation-form">
                  <Image
                    src={
                      lang == "Viet"
                        ? ConsultingNowButtonImage
                        : ConsultingNowButtonImageEN
                    }
                    alt="Exp Button"
                    className="md:h-auto w-full md:mx-auto animate-heartbeat"
                  />
                </a>
              </Button>
              <Button
                unstyled
                className="cursor-pointer hover:scale-110 transition-all duration-300 mx-auto w-3/4"
              >
                <a href="#latest-events">
                  <Image
                    src={
                      lang == "Viet"
                        ? NewestEventButtonImage
                        : NewestEventButtonImageEN
                    }
                    alt="Exp Button"
                    className="md:h-auto w-full md:mx-auto "
                  />
                </a>
              </Button>
            </div>
          </div>
          <div className="absolute bottom-0 w-full mx-auto">
            <div className="relative flex flex-col items-center justify-center gap-2">
              <Image
                src={lang == "Viet" ? NameTextVN : NameTextEN}
                alt="Exp Button"
                className="hidden md:block md:w-full md:h-auto md:mx-auto"
              />
              <Image
                src={lang == "Viet" ? NameTextVNMobile : NameTextENMobile}
                alt="Exp Button"
                className="md:hidden md:w-full md:h-auto md:mx-auto pb-2"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full flex flex-col gap-2 items-center justify-center mt-2 sm:mt-5 mb-10 sm:mb-3">
          <Button
            unstyled
            className="cursor-pointer hover:scale-110 transition-all duration-300 mx-auto w-3/5"
          >
            <a href="#consultation-form">
              <Image
                src={
                  lang == "Viet"
                    ? ConsultingNowButtonImage
                    : ConsultingNowButtonImageEN
                }
                alt="Exp Button"
                className="md:h-auto w-full md:mx-auto animate-heartbeat"
              />
            </a>
          </Button>
          <Button
            unstyled
            className="cursor-pointer hover:scale-110 transition-all duration-300 mx-auto w-2/4"
          >
            <a href="#latest-events">
              <Image
                src={
                  lang == "Viet"
                    ? NewestEventButtonImage
                    : NewestEventButtonImageEN
                }
                alt="Exp Button"
                className="md:h-auto w-full md:mx-auto "
              />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
