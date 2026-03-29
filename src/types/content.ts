export type TimelineContentElement =
  | { type: "text"; value: string } // Đoạn văn bản
  | { type: "image"; src: string; alt?: string; caption?: string }; // Hình ảnh

export interface TimelineEventItem {
  icon?: string;
  color?: string;
  title?: string;
  duration: string;
  desc: TimelineContentElement[]; // Giữ nguyên cấu trúc lai (text/image)
}

export interface ITranslation {
  nav: {
    about: string;
    experience: string;
    project: string;
    method: string;
    partner: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  about: {
    title: string;
    content: string;
  };
  experience: TimelineEventItem[];
  // Thêm các section khác tại đây...
}

export type Language = "Eng" | "Viet";
