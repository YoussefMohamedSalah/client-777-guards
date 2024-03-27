import React from 'react'
import { useTranslations } from "next-intl";
import OurCustomers from './OurCustomers';

interface Props {
  lang: string;
}

const OurCustomersWrapper = ({ lang }: Props) => {
  const t = useTranslations("HomePage");

  const tServices = {
    our_customers: `${t("our-customers")}`,
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

  const customersTabs = [
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
    <div>
      <OurCustomers ourCustomers={tServices.our_customers} customersTabs={customersTabs} />
    </div>
  )
}

export default OurCustomersWrapper
