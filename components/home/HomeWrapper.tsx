import React from "react";
import MainCarousel from "./MainCarousel";
import OurServices from "./OurServices";
import { useTranslations } from "next-intl";
import Border from "../ui/border";
import OurPartners from "./OurPartners";

interface Props {
  lang: string;
}

const HomeWrapper = ({ lang }: Props) => {
  const t = useTranslations("HomePage");

  const tServices = {
    our_services: `${t("our-services-contain")}`,
    service_1: `${t("service-1")}`,
    service_2: `${t("service-2")}`,
    service_3: `${t("service-3")}`,
    service_4: `${t("service-4")}`,
    service_5: `${t("service-5")}`,
    service_6: `${t("service-6")}`,
    service_7: `${t("service-7")}`,
    service_8: `${t("service-8")}`,
    service_9: `${t("service-9")}`,
    service_10: `${t("service-10")}`,
    our_partners: `${t("our-partners")}`,
    partner_1: `${t("partner-1")}`,
    partner_2: `${t("partner-2")}`,
    partner_3: `${t("partner-3")}`,
    partner_4: `${t("partner-4")}`,
    partner_5: `${t("partner-5")}`,
    partner_6: `${t("partner-6")}`,
    partner_7: `${t("partner-7")}`,
    partner_8: `${t("partner-8")}`,
    partner_9: `${t("partner-9")}`,
    partner_10: `${t("partner-10")}`,
    partner_1_location: `${t("partner-1-location")}`,
    partner_2_location: `${t("partner-2-location")}`,
    partner_3_location: `${t("partner-3-location")}`,
    partner_4_location: `${t("partner-4-location")}`,
    partner_5_location: `${t("partner-5-location")}`,
    partner_6_location: `${t("partner-6-location")}`,
    partner_7_location: `${t("partner-7-location")}`,
    partner_8_location: `${t("partner-8-location")}`,
    partner_9_location: `${t("partner-9-location")}`,
    partner_10_location: `${t("partner-10-location")}`,
  };

  const servicesTabs = [
    {
      id: 1,
      name: `${tServices.service_1}`,
      image: "/images/facilites.jpeg",
    },
    {
      id: 2,
      name: `${tServices.service_2}`,
      image: "/images/vip.jpeg",
    },
    {
      id: 3,
      name: `${tServices.service_3}`,
      image: "/images/design.jpeg",
    },
    {
      id: 4,
      name: `${tServices.service_4}`,
      image: "/images/sample3.jpeg",
    },
    {
      id: 5,
      name: `${tServices.service_5}`,
      image: "/images/party.jpeg",
    },
    {
      id: 6,
      name: `${tServices.service_6}`,
      image: "/images/sec_systems.jpeg",
    },
    {
      id: 7,
      name: `${tServices.service_7}`,
      image: "/images/factor.jpeg",
    },
    {
      id: 8,
      name: `${tServices.service_8}`,
      image: "/images/girl.png",
    },
    {
      id: 9,
      name: `${tServices.service_9}`,
      image: "/images/dogs.jpeg",
    },
    {
      id: 10,
      name: `${tServices.service_10}`,
      image: "/images/safty.jpeg",
    },
  ];

  const partnersTabs = [
    {
      url: "/assets/partners/a.jpg",
      location: tServices.partner_1_location,
      name: tServices.partner_1,
    },
    {
      url: "/assets/partners/b.png",
      location: tServices.partner_2_location,
      name: tServices.partner_2,
    },
    {
      url: "/assets/partners/c.jpg",
      location: tServices.partner_3_location,
      name: tServices.partner_3,
    },
    {
      url: "/assets/partners/d.jpg",
      location: tServices.partner_4_location,
      name: tServices.partner_4,
    },
    {
      url: "/assets/partners/e.png",
      location: tServices.partner_5_location,
      name: tServices.partner_5,
    },
    {
      url: "/assets/partners/f.png",
      location: tServices.partner_6_location,
      name: tServices.partner_6,
    },
    {
      url: "/assets/partners/g.jpg",
      location: tServices.partner_7_location,
      name: tServices.partner_7,
    },
    {
      url: "/assets/partners/h.jpg",
      location: tServices.partner_8_location,
      name: tServices.partner_8,
    },
    {
      url: "/assets/partners/i.png",
      location: tServices.partner_9_location,
      name: tServices.partner_9,
    },
    {
      url: "/assets/partners/j.jpg",
      location: tServices.partner_10_location,
      name: tServices.partner_10,
    },
  ];

  return (
    <section>
      <MainCarousel />
      <OurServices lang={lang} tServices={tServices} servicesTabs={servicesTabs} />
      <Border />
      <OurPartners lang={lang} ourPartners={tServices.our_partners} partnersTabs={partnersTabs} />
    </section>
  );
};

export default HomeWrapper;
