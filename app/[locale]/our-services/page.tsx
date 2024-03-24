import React from "react";
import OurServicesWrapper from "@/components/our-services/OurServicesWrapper";

export const metadata = {
  title: "Services",
  description:
    "777 Guards offer top-notch security solutions provided by experienced professionals, including event security, armed guards, secure transportation, surveillance systems, and tailored services for VIPs and special events. Our comprehensive offerings encompass everything from securing facilities to safeguarding valuable assets, ensuring peace of mind for our clients at all times.",
};

interface Props {
  params: { locale: string };
}

export default function OurServicesPage({ params: { locale } }: Props) {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <OurServicesWrapper lang={locale} />
    </div>
  );
}
