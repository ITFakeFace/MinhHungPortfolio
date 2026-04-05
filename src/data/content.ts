import { ITranslation, Language } from "../types/content";

export const TRANSLATIONS: Record<Language, ITranslation> = {
  Viet: {
    nav: {
      about: "GIỚI THIỆU",
      courses: "KHÓA HỌC",
      experience: "KINH NGHIỆM",
      method: "PHƯƠNG PHÁP",
      partner: "ĐỐI TÁC",
    },
    hero: {
      title: "MINH HƯNG",
      subtitle: "Lập trình viên Fullstack",
    },
    about: {
      title: "Chào bạn, tôi là Minh Hưng (Helena)\n",
      content:
        "Tôi là một nhà commercial leader với hơn 18 năm kinh nghiệm thực chiến trong việc thúc đẩy tăng trưởng và xây dựng các đội ngũ hiệu suất cao trong ngành FMCG & Bán lẻ tại Việt Nam. Chuyên môn của tôi trải dài từ hoạch định chiến lược thương mại, tối ưu hóa hệ thống phân phối, phát triển thương hiệu đa kênh cho đến mở rộng kinh doanh dựa trên nền tảng số.\n" +
        "Trên hành trình lãnh đạo của mình tại Tân Hiệp Phát, Coca-Cola, Nestlé Waters và Mesa Group, tôi đã liên tục tạo ra những kết quả kinh doanh đột phá thông qua các chiến lược sắc bén, sự thấu hiểu thị trường sâu sắc và một tinh thần thực thi đầy kỷ luật.\n" +
        "Ngoài vai trò lãnh đạo tại các tập đoàn, tôi còn là một Market & Business Consultant, đồng hành cùng các doanh nghiệp và nhà đầu tư trong việc thâm nhập thị trường, thẩm định thương mại, thiết kế kênh phân phối và hoạch định chiến lược tăng trưởng.\n" +
        "Tôi cũng là Nhà sáng lập cộng đồng SHE Global Community, Leadership & Business Coach tại Mind Coach Global, người tổ chức chuỗi sự kiện LinkedIn Networking Vietnam, đồng thời là một Mentor, Diễn giả và Giám khảo tích cực cho các cộng đồng về Sales, Marketing, FMCG & Bán lẻ.\n" +
        "Đam mê lớn nhất của tôi là chinh phục thị trường, phát triển con người và tạo ra những tác động kinh doanh bền vững thông qua chiến lược xuất sắc và một tinh thần quyết liệt.",
    },
    experience: [
      {
        duration: "2025 - hiện tại",
        desc: [
          { type: "text", value: "Giám đốc Quốc gia Việt Nam tại YUPI Group" },
          { type: "image", src: "/home-page/logo/YupiLogo-1.png" },
        ],
      },
      {
        duration: "2024 - 2025",
        desc: [
          {
            type: "text",
            value:
              "Giám đốc Kinh doanh Quốc tế, Kênh MT & Thương mại Điện tử & SA tại Tân Hiệp Phát",
          },
          { type: "image", src: "/home-page/logo/THPGroupLogo-1.png" },
          { type: "text", value: "CEO/Nhà sáng lập SHE Global Community" },
          { type: "image", src: "/home-page/logo/SheLogo-1.png" },
          { type: "text", value: "CEO/Nhà sáng lập SHE Global Community" },
          { type: "image", src: "/home-page/logo/SheLogo-1.png" },
        ],
      },
    ],
  },
  Eng: {
    nav: {
      about: "ABOUT",
      courses: "COURSES",
      experience: "EXPERIENCE",
      method: "METHOD",
      partner: "PARTNERS",
    },
    hero: {
      title: "MINH HUNG",
      subtitle: "Fullstack Developer",
    },
    about: {
      title: "",
      content:
        "Tôi là một nhà commercial leader với hơn 18 năm kinh nghiệm thực chiến trong việc thúc đẩy tăng trưởng và xây dựng các đội ngũ hiệu suất cao trong ngành FMCG & Bán lẻ tại Việt Nam. Chuyên môn của tôi trải dài từ hoạch định chiến lược thương mại, tối ưu hóa hệ thống phân phối, phát triển thương hiệu đa kênh cho đến mở rộng kinh doanh dựa trên nền tảng số.\n" +
        "Trên hành trình lãnh đạo của mình tại Tân Hiệp Phát, Coca-Cola, Nestlé Waters và Mesa Group, tôi đã liên tục tạo ra những kết quả kinh doanh đột phá thông qua các chiến lược sắc bén, sự thấu hiểu thị trường sâu sắc và một tinh thần thực thi đầy kỷ luật.\n" +
        "Ngoài vai trò lãnh đạo tại các tập đoàn, tôi còn là một Market & Business Consultant, đồng hành cùng các doanh nghiệp và nhà đầu tư trong việc thâm nhập thị trường, thẩm định thương mại, thiết kế kênh phân phối và hoạch định chiến lược tăng trưởng.\n" +
        "Tôi cũng là Nhà sáng lập cộng đồng SHE Global Community, Leadership & Business Coach tại Mind Coach Global, người tổ chức chuỗi sự kiện LinkedIn Networking Vietnam, đồng thời là một Mentor, Diễn giả và Giám khảo tích cực cho các cộng đồng về Sales, Marketing, FMCG & Bán lẻ.\n" +
        "Đam mê lớn nhất của tôi là chinh phục thị trường, phát triển con người và tạo ra những tác động kinh doanh bền vững thông qua chiến lược xuất sắc và một tinh thần quyết liệt.",
    },
    experience: [
      {
        duration: "2022 - Present",
        desc: [
          { type: "text", value: "Empowering women leaders." },
          { type: "image", src: "/images/she.jpg" },
        ],
      },
    ],
  },
};
