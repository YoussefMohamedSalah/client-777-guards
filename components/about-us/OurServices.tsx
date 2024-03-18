"use client";
import { Lora } from "next/font/google";

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
}

const OurServices = ({ tAboutUs }: Props) => {
  const tabs = [
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
  ];
  return (
    <div className="mt-10 mb-5">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">{tAboutUs.our_services}</div>
        <div className="grid md:grid-cols-2 gap-4 xl:gap-6 mt-8 px-8 md:px-16 xl:px-0  mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div key={index} className="w-full">
              <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 mt-6">
                {tab.header}
              </p>
              <p className="font-normal text-base leading-6 text-gray-600 mt-6">{tab.subheading}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
