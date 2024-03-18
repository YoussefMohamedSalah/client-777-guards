import React from "react";
import MainSection from "@/components/about-us/MainSection";
import OurServices from "@/components/about-us/OurServices";
import OurMission from "@/components/about-us/OurMission";
import Border from "../ui/border";
import { useTranslations } from "next-intl";


const AboutUsWrapper = () => {
  const t = useTranslations("AboutUsPage");

  const tAboutUs = {
    about: `${t("about")}`,
    main_section_title: `${t("main-section-title")}`,
    main_section_description: `${t("main-section-description")}`,
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

    founded: `${t("founded")}`,
    founded_message: `${t("founded-message")}`,
    our_mission: `${t("our-mission")}`,
    our_mission_message: `${t("our-mission-message")}`,

  };


  return (
    <>
      <MainSection tAboutUs={tAboutUs} />
      <Border />
      <OurServices tAboutUs={tAboutUs} />
      <Border />
      <OurMission tAboutUs={tAboutUs} />
    </>
  );
};

export default AboutUsWrapper;
