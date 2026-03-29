"use client";
import MethodDesktop1 from "@/assets/home-page/assets/method-1.png";
import MethodDesktop2 from "@/assets/home-page/assets/method-2.png";
import MethodDesktop1EN from "@/assets/home-page/assets/methodEN-1.png";
import MethodDesktop2EN from "@/assets/home-page/assets/methodEN-2.png";
import MethodText1 from "@/assets/home-page/text/MethodText-1.png";
import MethodMobile1 from "@/assets/home-page/assets/method-3.png";
import MethodMobile2 from "@/assets/home-page/assets/method-4.png";
import MethodMobile3 from "@/assets/home-page/assets/method-5.png";
import MethodMobile2EN from "@/assets/home-page/assets/methodEN-4.png";
import MethodMobile3EN from "@/assets/home-page/assets/methodEN-5.png";
import Image from "next/image";
import styles from "./EducationMethodSection.module.scss";
import { useLanguage } from "@/context/LanguageContext";

const EducationMethodSection = () => {
  const { lang } = useLanguage();
  return (
    <div id="method" className="w-full">
      <div
        className={`hidden! md:block! ${styles.generalBox} ${styles.desktopBox}`}
      >
        <div className="flex flex-col w-4/5 mx-auto items-center justify-center">
          <Image
            src={lang == "Viet" ? MethodDesktop1 : MethodDesktop1EN}
            alt="Title"
            className=" mx-auto"
          />
          <div className="text-7xl text-center text-white font-semibold my-8">
            {lang == "Viet"
              ? "CUNG CẤP GIẢI PHÁP THÔNG QUA HÌNH THỨC ĐÀO TẠO THỰC CHIẾN"
              : "PROVIDING SOLUTIONS THROUGH PRACTICAL, HANDS-ON TRAINING"}
          </div>
          <Image
            src={lang == "Viet" ? MethodDesktop2 : MethodDesktop2EN}
            alt="Title"
            className="mx-auto"
          />
        </div>
      </div>
      <div
        className={`block! md:hidden! ${styles.generalBox} ${styles.mobileBox}`}
      >
        <div className="flex flex-col w-4/5 mx-auto items-center justify-center mt-5">
          <Image src={MethodText1} alt="Title" className=" mx-auto" />
          <Image src={MethodMobile1} alt="Title" className=" mx-auto" />
          <div className="text-3xl text-center text-white font-semibold mt-5 mb-5">
            {lang == "Viet"
              ? "CUNG CẤP GIẢI PHÁP THÔNG QUA HÌNH THỨC ĐÀO TẠO THỰC CHIẾN"
              : "PROVIDING SOLUTIONS THROUGH PRACTICAL, HANDS-ON TRAINING"}
          </div>
          <Image
            src={lang == "Viet" ? MethodMobile2 : MethodMobile2EN}
            alt="Title"
            className="mx-auto w-4/5 mb-3"
          />
          <Image
            src={lang == "Viet" ? MethodMobile3 : MethodMobile3EN}
            alt="Title"
            className="mx-auto w-4/5"
          />
        </div>
      </div>
    </div>
  );
};

export default EducationMethodSection;
