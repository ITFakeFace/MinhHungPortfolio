"use client";
import styles from "./HeroSection.module.scss";
import MsHungImage from "@/assets/home-page/assets/MsHungBanner-1.png";
import ExpButtonImage from "@/assets/home-page/assets/ExpBox-1.png";
import FacebookButtonImage from "@/assets/home-page/assets/FacebookButton-1.png";
import LinkedInButtonImage from "@/assets/home-page/assets/LinkedInButton-1.png";
import YoutubeButtonImage from "@/assets/home-page/assets/YoutubeButton-1.png";
import ConsultingNowButtonImage from "@/assets/home-page/assets/ConsultingNowButton-1.png";
import NewestEventButtonImage from "@/assets/home-page/assets/NewestCourseButton-1.png";
import QuoteText from "@/assets/home-page/text/BannerQuoteText-1.png";
import NameTextVN from "@/assets/home-page/text/BannerNameTextVN-1.png";
import NameTextVNMobile from "@/assets/home-page/text/BannerNameTextVNMobile-1.png";
import NameTextEN from "@/assets/home-page/text/BannerNameTextEN-1.png";
import RoleText from "@/assets/home-page/text/BannerRoleText-1.png";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { Button } from "primereact/button";

const HeroSection = () => {
  const { lang } = useLanguage();
  return (
    <div
      className={`${styles.container} w-full overflow-hidden flex-flex-col items-center justify-center`}
    >
      <div className="max-w-480 md:aspect-384/222">
        <div className="w-full flex relative flex-row mx-auto">
          <div className="md:w-1/3 hidden md:block">
            <Image
              src={ExpButtonImage}
              alt="Exp Button"
              className="md:w-3/5 md:mx-auto md:mt-20"
            />
          </div>
          <div className="w-3/5 md:w-1/3">
            <Image
              src={MsHungImage}
              alt="Exp Button"
              className="md:h-full w-auto md:mx-auto"
            />
          </div>
          <div className="w-2/5 md:w-1/3 relative flex flex-col md:pr-10 md:p-5 md:mt-30 gap-5 md:gap-12! z-10 items-center mt-20 mr-3">
            <Image
              src={QuoteText}
              alt="Exp Button"
              className=" md:h-auto w-full md:mx-auto right-15"
            />
            <div className="flex md:mt-0 flex-col md:flex-row gap-0 md:gap-2 items-center justify-center w-full">
              <Image
                src={ExpButtonImage}
                alt="Exp Button"
                className="block md:hidden w-4/5 md:w-3/5 md:mx-auto md:mt-20"
              />
              <a
                href="https://www.facebook.com/khungtroi.binhyen.7"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:scale-110 transition-all duration-300"
              >
                <Image
                  src={FacebookButtonImage}
                  alt="Exp Button"
                  className="md:h-auto w-24 md:w-32 md:mx-auto "
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
                  className="md:h-auto w-24 md:w-32 md:mx-auto "
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
                  className="md:h-auto w-24 md:w-32 md:mx-auto "
                />
              </a>
            </div>
            <div className="w-full md:flex flex-col gap-3 items-center justify-center hidden">
              <Button
                unstyled
                className="cursor-pointer hover:scale-110 transition-all duration-300 mx-auto w-3/4"
              >
                <Image
                  src={
                    lang == "Viet"
                      ? ConsultingNowButtonImage
                      : ConsultingNowButtonImage
                  }
                  alt="Exp Button"
                  className="md:h-auto w-full md:mx-auto"
                />
              </Button>
              <Button
                unstyled
                className="cursor-pointer hover:scale-110 transition-all duration-300 mx-auto w-3/4"
              >
                <Image
                  src={
                    lang == "Viet"
                      ? NewestEventButtonImage
                      : NewestEventButtonImage
                  }
                  alt="Exp Button"
                  className="md:h-auto w-full md:mx-auto "
                />
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
                src={lang == "Viet" ? NameTextVNMobile : NameTextVNMobile}
                alt="Exp Button"
                className="md:hidden md:w-full md:h-auto md:mx-auto pb-2"
              />
              <Image
                src={RoleText}
                alt="Exp Button"
                className="absolute bottom-0 w-9/10 md:w-3/5 md:h-auto md:mx-auto"
              />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full flex flex-col gap-2 items-center justify-center mt-5 mb-3">
          <Button
            unstyled
            className="cursor-pointer hover:scale-110 transition-all duration-300 mx-auto w-3/5"
          >
            <Image
              src={
                lang == "Viet"
                  ? ConsultingNowButtonImage
                  : ConsultingNowButtonImage
              }
              alt="Exp Button"
              className="md:h-auto w-full md:mx-auto"
            />
          </Button>
          <Button
            unstyled
            className="cursor-pointer hover:scale-110 transition-all duration-300 mx-auto w-2/4"
          >
            <Image
              src={
                lang == "Viet" ? NewestEventButtonImage : NewestEventButtonImage
              }
              alt="Exp Button"
              className="md:h-auto w-full md:mx-auto "
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
