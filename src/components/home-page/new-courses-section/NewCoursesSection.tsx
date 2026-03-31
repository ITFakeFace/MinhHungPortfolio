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
import EventSub3Image from "@/assets/home-page/assets/event-9.jpg";
import { Button } from "primereact/button";

const NewCoursesSection = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div
      id="latest-events"
      className={`bg-[#feffd4] w-full relative overflow-hidden ${styles.sectionContainer} pb-60`}
    >
      <div className="mt-7 mb-5">
        <Image
          src={lang == "Viet" ? NewstEventTextImage : NewstEventTextImageEN}
          alt="Newest Course Text"
          className="w-4/5 md:w-7/10 mx-auto"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-5 md:gap-15">
        <Image
          src={EventMain1Image}
          alt="Newest Course Text"
          className="w-4/5 h-auto mx-auto animate-light-heartbeat"
        />
        <a
          href="https://vioapp.vn/vi-vn/event/linkedin-networking-7-your-life-with-linkedin-ai#tickets"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            unstyled
            className="bg-linear-to-r from-[#4c5409] to-[#afb165] text-white px-10 py-2 md:py-3 text-xl sm:text-3xl md:text-6xl font-bold rounded-3xl hover:scale-110 transition-all duration-300"
            label={lang == "Viet" ? "TÌM HIỂU NGAY" : "DISCOVER NOW"}
          />
        </a>
      </div>
      <div className="w-7/10 md:w-8/10 flex flex-col md:flex-row items-center justify-between mx-auto gap-20 md:gap-30 mt-10 sm:mt-20!">
        <div className="w-full md:w-1/3! flex flex-col justify-between items-center gap-13">
          <div className="flex flex-col gap-1">
            <Image
              src={EventSub1Image}
              alt="Newest Course Text"
              className="w-full h-auto max-h-137.5 mx-auto"
            />
            <div className="bg-[#7f8b1f] text-white w-full text-center text-lg sm:text-2xl font-semibold rounded-md p-2">
              THE YEAR AHEAD - VELOCITY 2026
            </div>
            <div className="bg-linear-to-b from-[#7f8b1f] to-[#040501]/70 rounded-md p-2 text-white text-md sm:text-lg md:text-xl md:min-h-[9rem]! xl:min-h-[7.6rem] flex flex-col justify-center">
              <div className="text-center">
                {lang == "Viet" ? "Thời gian: " : "Time: "}10/04/2026
              </div>
              <div className="text-center">
                {lang == "Viet" ? "Địa điểm: " : "Location: "}Thisky Hall, Sala,
                HCMC
              </div>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/posts/minh-hung-le-2a76111a9_theyearahead2026-velocity-tya26-activity-7439960254752382976-DGMy?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD1t6NcB8uGFvBjMG1iEdjvS794c0SIPOq0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              unstyled
              className="bg-linear-to-r from-[#4c5409] to-[#afb165] text-white px-5 py-2 text-2xl md:text-2xl! lg:text-3xl! 2xl:text-4xl! font-bold rounded-xl w-fit mx-auto cursor-pointer hover:scale-110 transition-all duration-300"
              label={lang == "Viet" ? "XEM THÊM >>>" : "SEE MORE >>>"}
            />
          </a>
        </div>
        <div className="w-full md:w-1/3! flex flex-col justify-between items-center gap-13">
          <div className="flex flex-col gap-1">
            <Image
              src={EventSub2Image}
              alt="Newest Course Text"
              className="w-full h-auto max-h-137.5 mx-auto"
            />
            <div className="bg-[#7f8b1f] text-white w-full text-center text-lg sm:text-2xl font-semibold rounded-md p-2">
              AI REVOLUTION SUMMIT VIETNAM
            </div>
            <div className="bg-linear-to-b from-[#7f8b1f] to-[#040501]/70 rounded-md p-2 text-md sm:text-lg md:text-xl md:min-h-[9rem]! xl:min-h-[7.6rem] flex flex-col justify-center">
              <div className="text-white text-center">
                {lang == "Viet" ? "Thời gian: " : "Time: "}24/04/2026
              </div>
              <div className="text-white text-center">
                {lang == "Viet" ? "Địa điểm: " : "Location: "}Holiday Inn &
                Suites, TPHCM
              </div>
            </div>
          </div>
          <a
            href="https://www.linkedin.com/posts/she-global-community_traicon-yupi-retailtech-activity-7437308984887504896-CYfU?utm_source=share&utm_medium=member_android&rcm=ACoAADCtsV8BMtTLz9Wo3-UW9wOjRF5jyiz85VE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              unstyled
              className="bg-linear-to-r from-[#4c5409] to-[#afb165] text-white px-5 py-2 text-2xl md:text-2xl! lg:text-3xl! 2xl:text-4xl! font-bold rounded-xl w-fit mx-auto cursor-pointer hover:scale-110 transition-all duration-300"
              label={lang == "Viet" ? "XEM THÊM >>>" : "SEE MORE >>>"}
            />
          </a>
        </div>
        <div className="w-full md:w-1/3! flex flex-col justify-between items-center gap-13">
          <div className="flex flex-col gap-1">
            <Image
              src={EventSub3Image}
              alt="Newest Course Text"
              className="w-full h-auto max-h-137.5 mx-auto"
            />
            <div className="bg-[#7f8b1f] text-white w-full text-center text-lg sm:text-2xl font-semibold rounded-md p-2">
              AI REVOLUTION SUMMIT VIETNAM
            </div>
            <div className="bg-linear-to-b from-[#7f8b1f] to-[#040501]/70 rounded-md p-2 text-md sm:text-lg md:text-xl md:min-h-[9rem]! xl:min-h-[7.6rem] flex flex-col justify-center">
              <div className="text-white text-center">
                {lang == "Viet" ? "Thời gian: " : "Time: "}17:30 | 31.03.2026
              </div>
              <div className="text-white text-center">
                {lang == "Viet"
                  ? "Địa điểm: ZumWhere, 219 Nguyễn Trãi, TPHCM Suites, TPHCM"
                  : "Location: ZumWhere, 219 Nguyen Trai Street, TPHCM Suites, Ho Chi Minh City"}
              </div>
            </div>
          </div>
          <a
            href="https://csmovietnam.com/csmo-new-year-meet-up-2026-from-pressure-to-power/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              unstyled
              className="bg-linear-to-r from-[#4c5409] to-[#afb165] text-white px-5 py-2 text-2xl md:text-2xl! lg:text-3xl! 2xl:text-4xl! font-bold rounded-xl w-fit mx-auto cursor-pointer hover:scale-110 transition-all duration-300"
              label={lang == "Viet" ? "XEM THÊM >>>" : "SEE MORE >>>"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewCoursesSection;
