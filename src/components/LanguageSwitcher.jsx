import React from "react";
import { useTranslation } from "react-i18next";

const CHEVRON =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6' fill='none'%3E%3Cpath d='M1 1l4 4 4-4' stroke='rgba(255,255,255,0.55)' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      value={i18n.language}
      onChange={handleLanguageChange}
      aria-label="Language"
      className="appearance-none bg-white/10 hover:bg-white/20 text-white/90 text-sm font-sans pl-3 pr-7 py-1 rounded cursor-pointer transition focus-visible:outline focus-visible:outline-1 focus-visible:outline-white/50"
      style={{
        backgroundImage: CHEVRON,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right 0.6rem center",
      }}
    >
      <option value="en" className="bg-[#0a0a0f]">
        English
      </option>
      <option value="zh" className="bg-[#0a0a0f]">
        中文
      </option>
    </select>
  );
}
