import React from "react";
import OurServices from "@/components/our-services/OurServices";
import { useTranslations } from "next-intl";

interface Props {
  lang: string;
}

const OurServicesWrapper = ({ lang }: Props) => {
  const t = useTranslations("AboutUsPage");

  const tAboutUs = {
    our_services: `${t("our-services")}`,
    service_1_title: `${t("service-1-title")}`,
    service_1_desc: `${t("service-1-desc")}`,
    service_2_title: `${t("service-2-title")}`,
    service_2_desc: `${t("service-2-desc")}`,
    service_3_title: `${t("service-3-title")}`,
    service_3_desc: `${t("service-3-desc")}`,
    service_4_title: `${t("service-4-title")}`,
    service_4_desc: `${t("service-4-desc")}`,
    service_5_title: `${t("service-5-title")}`,
    service_5_desc: `${t("service-5-desc")}`,
    service_6_title: `${t("service-6-title")}`,
    service_6_desc: `${t("service-6-desc")}`,
    request: `${t("request")}`,
  };

  return <OurServices tAboutUs={tAboutUs} lang={lang} />;
};

export default OurServicesWrapper;
