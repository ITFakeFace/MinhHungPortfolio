"use client";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./StrategicPartnerSection.module.scss";
import StategicTextVN from "@/assets/home-page/text/StategicPartnerTextVN-1.png";
import StategicTextEN from "@/assets/home-page/text/StategicPartnerTextEN-1.png";
import SharingExpTextVN from "@/assets/home-page/text/ShareExpTextVN-1.png";
import SharingExpTextEN from "@/assets/home-page/text/ShareExpTextEN-1.png";
import PartnersLogoImage from "@/assets/home-page/logo/PartnersLogo-1.png";
import MsHungImage from "@/assets/home-page/assets/MsHung-4.png";
import Image from "next/image";
import ContactForm from "./contact-form/ContactForm";

const StrategicPartnerSection = () => {
  const { lang } = useLanguage();
  return (
    <div id="partners" className={`${styles.container}`}>
      <Image
        src={lang == "Viet" ? StategicTextVN : StategicTextEN}
        alt="title text"
        className="w-4/5 md:w-3/5 mx-auto mb-10 mt-10 md:mt-20"
      />
      <div className="w-9/10! bg-white p-3 md:p-5 rounded-4xl h-fit mx-auto">
        <Image
          src={PartnersLogoImage}
          alt="title text"
          className="w-full mx-auto h-auto"
        />
      </div>
      <div className="relative flex flex-col md:flex-row pt-20 pb-0 md:py-20 w-full">
        <div className="absolute w-1/2 bottom-0 right-0 md:static md:w-1/2! md:m-10">
          <Image
            src={MsHungImage}
            alt="title text"
            className="w-full mx-auto h-auto"
          />
        </div>
        <div className="w-full md:w-1/2! px-10">
          <ContactForm lang={lang} />
        </div>
      </div>
    </div>
  );
};

export default StrategicPartnerSection;
