"use client";
import { Lora } from "next/font/google";
import Link from "next/link";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

type Tab = {
  header: string;
  subheading: string;
};

interface Props {
  tAboutUs: any;
  lang: string;
}

const OurServices = ({ tAboutUs, lang }: Props) => {
  const tabs: Tab[] = [
    {
      header: `${tAboutUs.service_1_title}`,
      subheading: `${tAboutUs.service_1_desc}`,
    },
    {
      header: `${tAboutUs.service_2_title}`,
      subheading: `${tAboutUs.service_2_desc}`,
    },
    {
      header: `${tAboutUs.service_3_title}`,
      subheading: `${tAboutUs.service_3_desc}`,
    },
    {
      header: `${tAboutUs.service_4_title}`,
      subheading: `${tAboutUs.service_4_desc}`,
    },
    {
      header: `${tAboutUs.service_5_title}`,
      subheading: `${tAboutUs.service_5_desc}`,
    },
    {
      header: `${tAboutUs.service_6_title}`,
      subheading: `${tAboutUs.service_6_desc}`,
    },
  ];
  return (
    <div className="mt-10 mb-5">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">{tAboutUs.our_services}</div>
        <div className="grid md:grid-cols-2 gap-4 xl:gap-6 mt-8 md:px-16 xl:px-0  mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div key={index} className="w-full">
              <Link href={`/${lang}/contact-us`} legacyBehavior passHref>
                <div className="flex flex-col align-center">
                  <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer text-sm">
                    {tAboutUs.request}{" "}
                    {lang === "en" ? (
                      <PiArrowRight className="ml-3 text-sm" />
                    ) : (
                      <PiArrowLeft className="ms-3 text-sm" />
                    )}
                  </div>
                  <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5  mt-2 ">{tab.header}</p>
                </div>
              </Link>
              <p className="font-normal text-base leading-6 text-gray-300 mt-6">{tab.subheading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
