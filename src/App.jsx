// src/App.jsx
import React, { Suspense, lazy } from "react";
import { useTranslation } from "react-i18next";

const Road = lazy(() => import("./components/Road"));

export default function App() {
  const { t } = useTranslation();

  return (
    <div className="road">
      <Suspense fallback={<div className="road-loading">{t("loading")}</div>}>
        <Road />
      </Suspense>

      <footer className="road-foot">
        <p>
          {t("hero.description1")} {t("hero.description2")}
          <a href="https://github.com/jam3scampbell/ai-timeline">
            {t("hero.githubLink")}
          </a>
          {t("hero.description3")}
          <a href="https://forms.gle/SgW7LYM6pjajUTxw8">{t("hero.formLink")}</a>
          {t("hero.description4")}
        </p>
        <p className="road-authors">
          {t("footer.createdBy", { year: new Date().getFullYear() })}{" "}
          <a href="https://x.com/jam3scampbell">James Campbell</a>{" "}
          {t("footer.and")}{" "}
          <a href="https://x.com/Emiliano_GLopez">Emiliano Garcia-Lopez</a>
        </p>
        <p className="road-credits">
          {t("footer.contributors")}{" "}
          <a href="https://x.com/suntzoogway">suntzoogway</a>,{" "}
          <a href="https://github.com/puravparab">puravparab</a>,{" "}
          <a href="https://github.com/jamesms36">jamesms36</a>, Max Kieffer,{" "}
          <a href="https://github.com/jtalmi">Jonathan Talmi</a>
        </p>
      </footer>
    </div>
  );
}
