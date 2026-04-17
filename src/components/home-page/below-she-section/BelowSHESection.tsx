"use client";
import { div } from "framer-motion/client";
import styles from "./BelowSHESection.module.scss";
import BelowSheText from "@/assets/home-page/text/BelowSheText-1.png";
import BelowSheImage from "@/assets/home-page/assets/BelowSheImage-2.png";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "primereact/button";
import { useContactForm } from "@/context/ContactContext";

const BelowSHESection = () => {
  const { lang } = useLanguage();
  const { openContactForm } = useContactForm();
  const customStyles: Record<string, string> = {
    listUl:
      "list-inside list-disc pl-5 lg:pl-10 leading-relaxed lg:leading-relaxed",
    listTitle:
      "text-[clamp(0.8rem,1.25rem+0.5vw,1.1rem)] lg:text-[clamp(1.65rem,1.5vw+0.5rem,2rem)] font-semibold mt-5 lg:mt-10 mb-3 lg:leading-tight",
    listItem:
      "text-[clamp(0.7rem,1.25rem+0.5vw,1rem)] lg:text-[clamp(1.5rem,1.5vw+0.5rem,1.85rem)]",
  };
  return (
    <div className={styles.container}>
      <div className={`max-w-[1920px]`}>
        <div
          className={`mt-15 lg:mt-0 text-[clamp(0.5rem,10vw,1.15rem)] lg:text-[clamp(1rem,10vw,2rem)] text-center italic text-white text-balance`}
        >
          {lang == "Viet"
            ? "Bắt đầu trở thành mảnh ghép vô giá trong hệ sinh thái ALUMNI SHE"
            : "Start becoming an invaluable piece of the SHE Alumni ecosystem"}
        </div>
        <Image
          src={BelowSheText}
          alt="Below SHE Text"
          className={`w-9/10 mx-auto mt-2 lg:mt-0`}
        />
        <div
          className={`text-white text-center italic text-[clamp(0.75rem,4vw,1rem)] lg:text-[clamp(0.5rem,5vw,1.5rem)] mt-2 lg:mt-3`}
        >
          {lang == "Viet"
            ? "Một khóa học từ SHE Global Community & Top Creator LinkedIn Vietnam"
            : "A course by SHE Global Community & Top Creator LinkedIn Vietnam"}
        </div>

        <div
          className={`flex flex-col lg:flex-row justify-center items-center w-full lg:px-10 lg:mt-5 gap-5 lg:gap-0 text-white`}
        >
          <div
            className={`lg:flex-6 bg-black/85 border-4 border-[#8D7234] rounded-4xl lg:rounded-[80px] mt-0 mx-2 lg:mx-auto px-3 lg:px-10! py-4 lg:py-7! `}
          >
            <div className={`${customStyles.listItem}`}>
              <span className={`${customStyles.listTitle}`}>
                {lang == "Viet" ? "Thời lượng: " : "Duration: "}
              </span>
              {lang == "Viet"
                ? "06 tuần (Hybrid: Online + 01 Offline Networking SHE Style)"
                : "06 weeks (Hybrid: Online + 01 Offline Networking – SHE Style)"}
            </div>
            <div className={`${customStyles.listTitle}`}>
              {lang == "Viet" ? "Kết quả đạt được:" : "Learning Outcomes:"}
            </div>
            <ul className={`${customStyles.listUl}`}>
              <li className={`${customStyles.listItem}`}>
                {lang == "Viet"
                  ? "Lộ trình 06 module giúp tạo ra 06 giá trị đắt giá."
                  : "A 06-module roadmap delivering 06 high-value outcomes"}
              </li>
              <li className={`${customStyles.listItem}`}>
                {lang == "Viet"
                  ? "Bài tập nâng cao, ứng dụng thực chiến."
                  : "Advanced assignments with practical, real-world application"}
              </li>
              <li className={`${customStyles.listItem}`}>
                {lang == "Viet"
                  ? "Nhận feedback trực tiếp 1:1."
                  : "Direct 1:1 feedback"}
              </li>
            </ul>
          </div>
          <div
            className={`lg:flex-4 px-5 lg:px-0 flex flex-col gap-3 lg:gap-5`}
          >
            <a
              href="/MinhHungPortfolio/documents/SHEDoc.pdf"
              download="SHE PLAN 2026.pdf"
              target="_blank"
              className={`mx-auto`}
            >
              <Button
                unstyled
                className={`bg-[linear-gradient(to_right,rgba(76,84,9,0.5)_0%,rgba(76,84,9,0.5)_74%,rgba(176,178,102,0.5)_100%)] border-white border-1 py-1 lg:py-3 px-3 lg:px-15! rounded-4xl text-white text-[clamp(1.125rem,3vw,2rem)] font-bold mx-auto hover:cursor-pointer transition-all duration-300 hover:scale-110`}
                label={lang == "Viet" ? "TÌM HIỂU THÊM" : "LEARN MORE"}
              />
            </a>
            <Button
              onClick={openContactForm}
              unstyled
              className={`bg-[linear-gradient(to_right,#4C5409_0%,#4C5409_74%,#B0B266_100%)] py-1 lg:py-3 px-3 lg:px-15! rounded-4xl text-white text-[clamp(1.25rem,4vw,2.15rem)] font-bold hover:cursor-pointer transition-all duration-300 hover:scale-110 mx-auto animate-heartbeat`}
              label={lang == "Viet" ? "THAM GIA KHÓA HỌC" : "JOIN THE COURSE"}
            />
          </div>
        </div>
      </div>
      <Image
        src={BelowSheImage}
        alt="Below SHE Image"
        className={`w-full mx-auto mt-5 lg:mt-3!`}
      />
    </div>
  );
};

export default BelowSHESection;
