import React from "react";
import Header from "./Header";
import { useTranslations } from "next-intl";

interface Props {
  lang: string;
}

const HeaderWrapper = ({ lang }: Props) => {
  const t = useTranslations("Menu");

  const tMenu = {
    home: `${t("home")}`,
    about_us: `${t("about-us")}`,
    our_services: `${t("our-services")}`,
    jobs: `${t("jobs")}`,
    contact_us: `${t("contact-us")}`,
    our_companies: `${t("our-companies")}`,
  };

  return (
    <>
      <Header lang={lang} tMenu={tMenu} />
    </>
  );
};

export default HeaderWrapper;
