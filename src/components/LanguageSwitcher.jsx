import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={(event) => i18n.changeLanguage(event.target.value)}
      aria-label="Language"
      className="lang"
    >
      <option value="en">EN</option>
      <option value="zh">中文</option>
    </select>
  );
}
