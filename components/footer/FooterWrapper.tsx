import React from "react";
import { useTranslations } from "next-intl";
import Footer from "./Footer";

interface Props {
  lang: string;
}

const FooterWrapper = ({ lang }: Props) => {
  const t = useTranslations("Menu");

  const tMenu = {
    home: `${t("home")}`,
    about_us: `${t("about-us")}`,
    our_services: `${t("our-services")}`,
    jobs: `${t("jobs")}`,
    contact_us: `${t("contact-us")}`,
    news: `${t("news")}`,
    our_customers: `${t("our-customers")}`,
    contacts: `${t("contacts")}`,
    fast_access: `${t("fast-access")}`,

    news_letter_sign_up: `${t("news-letter-sign-up")}`,
    news_letter_holder: `${t("news-letter-holder")}`,
    news_letter_subscribe: `${t("news-letter-subscribe")}`,

  };



  return (
    <div className="bg-secondary pb-[120px] md:pb-7">
      <Footer tMenu={tMenu} lang={lang} />
    </div>
  );
};

export default FooterWrapper;
