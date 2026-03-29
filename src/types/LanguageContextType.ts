import {Language} from "@/types/content";

export interface LanguageContextType {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (path: string) => string;
}