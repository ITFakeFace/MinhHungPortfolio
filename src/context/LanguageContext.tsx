"use client";
import React, { createContext, useContext, useState } from "react";
import { TRANSLATIONS } from "@/data/content";
import { Language } from "@/types/content";
import { LanguageContextType } from "@/types/LanguageContextType";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [lang, setLang] = useState<Language>("Viet");

  // Hàm lấy nội dung theo key (ví dụ: t('hero.title'))
  const t = (path: string): string => {
    const keys = path.split(".");

    // Bắt đầu từ Object ngôn ngữ hiện tại
    let result: unknown = TRANSLATIONS[lang as Language];

    for (const key of keys) {
      // Kiểm tra result có phải là Object và có chứa key đó không
      if (result && typeof result === "object" && key in result) {
        // Ép kiểu tạm thời sang Record để truy cập thuộc tính kế tiếp
        result = (result as Record<string, unknown>)[key];
      } else {
        return path; // Trả về chính path nếu không tìm thấy nội dung
      }
    }

    // Cuối cùng, chỉ trả về nếu result thực sự là một chuỗi
    return typeof result === "string" ? result : path;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  // Nếu context là undefined, chương trình sẽ dừng tại đây và báo lỗi
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  // Sau dòng này, TS tự hiểu context chắc chắn là LanguageContextType (không còn undefined)
  return context;
};
