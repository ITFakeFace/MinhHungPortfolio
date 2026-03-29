"use client";
import React, { useState } from "react";
import { SelectButton, SelectButtonChangeEvent } from "primereact/selectbutton";
import { useLanguage } from "@/context/LanguageContext"; // Đảm bảo đúng đường dẫn
import { Language } from "@/types/content"; // Đảm bảo đúng đường dẫn
import styles from "./NavBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Sidebar } from "primereact/sidebar";

const Navbar = () => {
  // Sử dụng context thay vì useState nội bộ
  const { lang, setLang, t } = useLanguage();
  const [visible, setVisible] = useState(false);

  const options = [
    { label: "Eng", value: "Eng" },
    { label: "Viet", value: "Viet" },
  ];

  // Cấu trúc menu lấy từ t() để tự động dịch
  const menuItems = [
    { key: "about", id: "about" },
    { key: "experience", id: "experience" },
    { key: "method", id: "method" },
    { key: "partner", id: "partners" },
    { key: "project", id: "she-project" },
  ];

  const handleLangChange = (e: SelectButtonChangeEvent) => {
    if (e.value) {
      setLang(e.value as Language);
    }
  };

  return (
    <header className="w-full bg-gradient-to-r from-[#4c5409] from-[60%] to-[#101010] to-[100%] shadow-lg py-2 px-5">
      <div className="w-full flex items-center justify-between mx-auto">
        <button
          onClick={() => setVisible(true)}
          className="md:hidden text-white text-2xl p-2 active:scale-90 transition-transform"
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {/* LOGO BÊN TRÁI */}
        <div className="text-white text-2xl md:text-3xl font-bold tracking-tighter shrink-0 md:static">
          HELENA LE.
        </div>

        {/* MENU Ở GIỮA */}
        <nav className="hidden md:flex items-center gap-8 mx-4">
          {menuItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.id}`}
              className="text-white font-bold uppercase text-md hover:opacity-70 transition-opacity whitespace-nowrap"
            >
              {t(`nav.${item.key}`)}{" "}
              {/* Hàm t() sẽ tìm trong nav.about, nav.experience... */}
            </a>
          ))}
        </nav>

        {/* SELECT BUTTON BÊN PHẢI */}
        <div className="shrink-0">
          <div
            className={`bg-black rounded-full p-[2px] flex items-center overflow-hidden border border-gray-800`}
          >
            <SelectButton
              value={lang}
              onChange={handleLangChange}
              options={options}
              unselectable={false}
              className={styles.customPillButton}
            />
          </div>
        </div>

        {/* 5. SIDEBAR PRIMEREACT (Menu bên trái) */}
        {/* 5. SIDEBAR PRIMEREACT */}
        <Sidebar
          visible={visible}
          onHide={() => setVisible(false)}
          // 2/ Nền đen mờ ảo (backdrop-blur)
          style={{
            background: "rgba(0, 0, 0, 0.3)",
            backdropFilter: "blur(10px)",
            width: "350px",
          }}
          // Tùy chỉnh icon đóng (X) sang màu trắng
          icons={
            <button className="text-white outline-none">
              {/* PrimeReact tự render nút X, ở đây ta chỉ style nếu cần */}
            </button>
          }
          header={
            <div className="font-bold text-2xl text-[#b5bc4f] tracking-widest pl-4">
              HELENA LE.
            </div>
          }
        >
          {/* 1/ Các Navigation xếp dọc */}
          <div className="flex flex-col gap-3 mt-8 px-2">
            {menuItems.map((item) => (
              <a
                key={item.key}
                href={`#${item.id}`}
                onClick={() => setVisible(false)}
                className="group relative overflow-hidden bg-[#4c5409]/80 hover:bg-[#b5bc4f] text-white font-bold uppercase text-xl py-2 px-4 transition-all duration-300 shadow-md"
                style={{}}
              >
                <div className="relative z-10 flex justify-between items-center">
                  {t(`nav.${item.key}`)}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {/* Optional: Thêm Social Icons dưới menu cho giống ảnh mẫu */}
          <div className="flex gap-5 justify-center mt-12 opacity-70">
            {/* Thêm các icon Facebook, LinkedIn, Youtube của bạn vào đây */}
          </div>
        </Sidebar>
      </div>
    </header>
  );
};

export default Navbar;
