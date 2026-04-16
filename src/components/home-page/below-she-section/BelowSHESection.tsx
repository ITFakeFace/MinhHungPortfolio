"use client";
import { div } from "framer-motion/client";
import styles from "./BelowSHESection.module.scss";
import BelowSheText from "@/assets/home-page/text/BelowSheText-1.png";
import BelowSheImage from "@/assets/home-page/assets/BelowSheImage-1.png";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "primereact/button";
import { useContactForm } from "@/context/ContactContext";

const BelowSHESection = () => {
  const { lang } = useLanguage();
  const { openContactForm } = useContactForm();
  const customStyles: Record<string, string> = {
    listUl: "list-inside list-disc pl-5 lg:pl-10 leading-loose",
    listTitle:
      "text-[clamp(0.8rem,1.25rem+0.5vw,2.25rem)] lg:text-[clamp(0.8rem,5vw,2.25rem)] font-semibold mt-5 lg:mt-10 mb-3",
    listItem: "text-[clamp(0.8rem,1.25rem+0.5vw,2rem)]",
  };
  return (
    <div className={styles.container}>
      <div
        className={`mt-15 lg:mt-0 text-[clamp(1rem,10vw,1.5rem)] text-center italic text-white`}
      >
        {lang == "Viet"
          ? "Bắt đầu trở thành mảnh ghép vô giá trong hệ sinh thái ALUMNI SHE"
          : "Start becoming an invaluable piece of the SHE Alumni ecosystem"}
      </div>
      <div
        className={`text-[#CA8607] bg-black/85 border-4 border-[#8D7234] rounded-4xl lg:rounded-[130px] w-19/20 mx-auto flex flex-col pt-5 lg:pt-10! mt-10 text-white  max-w-[1920px] mx-auto pt-10 lg:pt-20!`}
      >
        <Image
          src={BelowSheText}
          alt="Below SHE Text"
          className={`w-9/10 mx-auto`}
        />
        <div
          className={`text-white text-center italic text-[clamp(0.75rem,4vw,1rem)] lg:text-[clamp(0.5rem,5vw,1.5rem)] lg:mt-3`}
        >
          {lang == "Viet"
            ? "Một khóa học từ SHE Global Community"
            : "A course by SHE Global Community"}
        </div>

        <div
          className={`flex flex-col lg:flex-row lg:px-[clamp(100px,10vw,200px)] lg:mt-15 gap-10 lg:gap-0`}
        >
          <div className={`w-full lg:w-6/10 px-5 lg:px-0`}>
            <div className={`${customStyles.listTitle}`}>
              {lang == "Viet" ? "Kết quả đạt được:" : "Learning Outcomes:"}
            </div>
            <ul className={`${customStyles.listUl}`}>
              <li className={`${customStyles.listItem}`}>
                {lang == "Viet"
                  ? "Lộ trình 06 module giúp tạo ra 06 giá trị đắt giá."
                  : " 6-module roadmap delivering 6 high-impact personal value"}
              </li>
              <li className={`${customStyles.listItem}`}>
                {lang == "Viet"
                  ? "Bài tập nâng cao, ứng dụng thực chiến."
                  : "Advanced exercises with hands-on, real-world application"}
              </li>
              <li className={`${customStyles.listItem}`}>
                {lang == "Viet"
                  ? "Nhận feedback trực tiếp 1:1."
                  : "Direct 1:1 feedback"}
              </li>
            </ul>
          </div>
          <div
            className={`w-full lg:w-4/10 px-5 lg:px-0 flex flex-col gap-3 lg:gap-5 grow justify-center items-center`}
          >
            <a
              href="/MinhHungPortfolio/documents/.pdf"
              download=""
              target="_blank"
            >
              <Button
                unstyled
                className={`bg-[linear-gradient(to_right,rgba(76,84,9,0.5)_0%,rgba(76,84,9,0.5)_74%,rgba(176,178,102,0.5)_100%)] border-white border-1 py-1 lg:py-3 px-3 lg:px-15! rounded-4xl text-white text-[clamp(1.125rem,3vw,1.65rem)] font-bold hover:cursor-pointer transition-all duration-300 hover:scale-110`}
                label={lang == "Viet" ? "TÌM HIỂU THÊM" : "LEARN MORE"}
              />
            </a>
            <Button
              onClick={openContactForm}
              unstyled
              className={`bg-[linear-gradient(to_right,#4C5409_0%,#4C5409_74%,#B0B266_100%)] py-1 lg:py-3 px-3 lg:px-15! rounded-4xl text-white text-[clamp(1.25rem,4vw,2rem)] font-bold hover:cursor-pointer transition-all duration-300 hover:scale-110`}
              label={lang == "Viet" ? "THAM GIA KHÓA HỌC" : "JOIN THE COURSE"}
            />
          </div>
        </div>
        <Image
          src={BelowSheImage}
          alt="Below SHE Image"
          className={`w-full mx-auto mt-5 lg:mt-10!`}
        />
      </div>
    </div>
  );
};

export default BelowSHESection;
