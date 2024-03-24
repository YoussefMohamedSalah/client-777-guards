"use client";
import { Lora } from "next/font/google";
import Link from "next/link";

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
    },
    {
      header: `${tAboutUs.service_2_title}`,
    },
    {
      header: `${tAboutUs.service_3_title}`,
    },
    {
      header: `${tAboutUs.service_4_title}`,
    },
    {
      header: `${tAboutUs.service_5_title}`,
    },
    {
      header: `${tAboutUs.service_6_title}`,
    },
  ];
  return (
    <div className="mt-10 mb-5">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">
          {tAboutUs.main_services}
        </div>
        <div className="grid md:grid-cols-2 gap-4 xl:gap-6 mt-8 px-8 md:px-16 xl:px-0  mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div key={index} className="w-full">
              <Link href="contact-us">
                <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-3 hover:text-indigo-600">
                  {tab.header}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
