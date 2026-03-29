"use client";
import NewstEventTextImage from "@/assets/home-page/text/NewestEventText-1.png";
import NewstEventTextImageEN from "@/assets/home-page/text/NewestEventTextEN-1.png";
import SheLogo from "@/assets/home-page/logo/SheLogo-1.png";
import { useLanguage } from "@/context/LanguageContext";
import Image, { StaticImageData } from "next/image";
import styles from "./NewCoursesSection.module.scss";
import EventMain1Image from "@/assets/home-page/assets/event-6.png";
import EventSub1Image from "@/assets/home-page/assets/event-7.png";
import EventSub2Image from "@/assets/home-page/assets/event-8.png";
import { Button } from "primereact/button";

const NewCoursesSection = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      className={`bg-[#feffd4] w-full relative overflow-hidden ${styles.sectionContainer} pb-60`}
    >
      <div className="mt-7 mb-5">
        <Image
          src={lang == "Viet" ? NewstEventTextImage : NewstEventTextImageEN}
          alt="Newest Course Text"
          className=" w-7/10 mx-auto"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-5 md:gap-15">
        <Image
          src={EventMain1Image}
          alt="Newest Course Text"
          className="w-4/5 h-auto mx-auto"
        />
        <Button
          unstyled
          className="bg-linear-to-r from-[#4c5409] to-[#afb165] text-white px-10 py-2 md:py-3 text-3xl md:text-6xl font-bold rounded-3xl"
          label={lang == "Viet" ? "TÌM HIỂU NGAY" : "DISCOVER NOW"}
        />
      </div>
      <div className="w-6/10 flex flex-col md:flex-row mx-auto gap-30 mt-20">
        <div className="w-full md:w-1/2! flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col gap-1">
            <Image
              src={EventSub1Image}
              alt="Newest Course Text"
              className="w-full h-auto max-h-137.5 mx-auto"
            />
            <div className="bg-[#7f8b1f] text-white w-full text-center text-xl font-semibold rounded-md p-2">
              THE YEAR AHEAD - VELOCITY 2026
            </div>
            <div className="bg-linear-to-b from-[#7f8b1f] to-[#040501]/70 rounded-md p-2 text-white text-lg">
              <div className="text-center">
                {lang == "Viet" ? "Thời gian: " : "Time: "}10/04/2026
              </div>
              <div className="text-center">
                {lang == "Viet" ? "Địa điểm: " : "Location: "}Thisky Hall, Sala,
                HCMC
              </div>
            </div>
          </div>
          <Button
            unstyled
            className="bg-linear-to-r from-[#4c5409] to-[#afb165] text-white px-5 py-2 text-4xl font-bold rounded-xl w-fit mx-auto cursor-pointer"
            label={lang == "Viet" ? "XEM THÊM >>>" : "SEE MORE >>>"}
          />
        </div>
        <div className="w-full md:w-1/2! flex flex-col justify-center items-center gap-3">
          <div className="flex flex-col gap-1">
            <Image
              src={EventSub2Image}
              alt="Newest Course Text"
              className="w-full h-auto max-h-137.5 mx-auto"
            />
            <div className="bg-[#7f8b1f] text-white w-full text-center text-2xl font-semibold rounded-md p-2">
              AI REVOLUTION SUMMIT VIETNAM
            </div>
            <div className="bg-linear-to-b from-[#7f8b1f] to-[#040501]/70 rounded-md p-2">
              <div className="text-white text-xl text-center">
                {lang == "Viet" ? "Thời gian: " : "Time: "}24/04/2026
              </div>
              <div className="text-white text-xl text-center">
                {lang == "Viet" ? "Địa điểm: " : "Location: "}Holiday Inn &
                Suites, TPHCM
              </div>
            </div>
          </div>
          <Button
            unstyled
            className="bg-linear-to-r from-[#4c5409] to-[#afb165] text-white px-5 py-2 text-4xl font-bold rounded-xl w-fit mx-auto cursor-pointer"
            label={lang == "Viet" ? "XEM THÊM >>>" : "SEE MORE >>>"}
          />
        </div>
      </div>
    </div>
  );
};

export default NewCoursesSection;
