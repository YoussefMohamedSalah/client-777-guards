import React from "react";
import MainSection from "@/components/about-us/MainSection";
import OurServices from "@/components/about-us/OurServices";
import OurMission from "@/components/about-us/OurMission";
import Border from "../ui/border";
import { useTranslations } from "next-intl";
import MainWord from "./MainWord";

const AboutUsWrapper = () => {
  const t = useTranslations("AboutUsPage");

  const tAboutUs = {
    about: `${t("about")}`,
    main_section_title: `${t("main-section-title")}`,
    main_section_description: `${t("main-section-description")}`,
    our_services: `${t("our-services")}`,
    main_services: `${t("main-services")}`,
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
    founded: `${t("founded")}`,
    founded_message: `${t("founded-message")}`,
    our_mission: `${t("our-mission")}`,
    our_mission_message: `${t("our-mission-message")}`,

    head_word_title: `${t("head-word-title")}`,
    mohamed: `${t("mohamed")}`,
    head_word: `${t("head-word")}`,

    gm_title: `${t("gm-title")}`,
    edrees: `${t("edrees")}`,
    gm_1: `${t("gm-1")}`,
    gm_2: `${t("gm-2")}`,
    gm_3: `${t("gm-3")}`,
    gm_4: `${t("gm-4")}`,
    gm_5: `${t("gm-5")}`,
    gm_6: `${t("gm-6")}`,

    manager_title: `${t("manager-title")}`,
    kareem: `${t("kareem")}`,
    manager_1: `${t("manager-1")}`,
    manager_2: `${t("manager-2")}`,
    manager_3: `${t("manager-3")}`,
    manager_4: `${t("manager-4")}`,
    manager_5: `${t("manager-5")}`,
  };

  return (
    <>
      <MainWord tAboutUs={tAboutUs} />
      <Border />
      <OurMission tAboutUs={tAboutUs} />
      <Border />
      <MainSection tAboutUs={tAboutUs} />
      <Border />
      <OurServices tAboutUs={tAboutUs} />
    </>
  );
};

export default AboutUsWrapper;
