import Image from "next/image";
import styles from "./Footer.module.scss";
import FooterQuotes from "@/assets/home-page/text/FooterQuotes-1.png";
import FacebookButtonImage from "@/assets/home-page/assets/FacebookButton-3.png";
import LinkedInButtonImage from "@/assets/home-page/assets/LinkedInButton-2.png";
import YoutubeButtonImage from "@/assets/home-page/assets/YoutubeButton-2.png";
import { Button } from "primereact/button";

const Footer = () => {
  return (
    <div
      className={`${styles.container} flex flex-col-reverse gap-10 md:gap-0 md:flex-row py-20`}
    >
      <div className="w-4/5 md:w-1/2 md:pl-20 mx-auto">
        <Image
          src={FooterQuotes}
          alt="Footer Quotes"
          className="w-full h-auto mx-auto"
        />
      </div>
      <div className="md:w-2/5 flex flex-col gap-5 md:ml-0 md:mr-20 mx-auto">
        <div className="w-full flex flex-row gap-5 justify-center items-center mx-auto">
          <a
            href="https://www.facebook.com/khungtroi.binhyen.7"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <Image
              src={FacebookButtonImage}
              alt="Facebook Button"
              className="w-24 md:w-auto!"
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
              alt="LinkedIn Button"
              className="w-24 md:w-auto!"
            />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer hover:scale-110 transition-all duration-300"
          >
            <Image
              src={YoutubeButtonImage}
              alt="Youtube Button"
              className="w-24 md:w-auto!"
            />
          </a>
        </div>
        <div className="w-full flex items-center">
          <a
            href="/documents/my-portfolio.pdf" // Đường dẫn file trong thư mục public
            download="My_Portfolio.pdf" // Tên file khi tải về máy
            className="mx-auto" // Căn giữa thẻ a
          >
            <Button
              unstyled
              className="bg-linear-to-r from-[#868e30] to-[#1f2105] text-6xl md:text-7xl border-white border-2 rounded-3xl py-3 px-10 text-white font-bold cursor-pointer hover:brightness-110 active:scale-95 transition-all duration-300"
              label="PORTFOLIO"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
