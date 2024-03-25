"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  tServices: any;
  lang: string;
  servicesTabs: any[];
}

const OurServices = ({ tServices, servicesTabs, lang }: Props) => {
  const [activeTab, setActiveTab] = useState(servicesTabs[0]);

  return (
    <section className="md:items-center flex container pt-5 w-full">
      {/* mobile view */}
      <div className="xl:px-8 block md:hidden w-full">
        <p className="text-2xl pt-4 text-start mx-auto">{tServices.our_services}</p>
        <div className="flex flex-col md:row-span-1 gap-2 xl:gap-6 mt-8 xl:px-0">
          {servicesTabs.map((tab, index: number) => (
            <motion.div
              key={index}
              className={`flex p-1 md:p-8 cursor-pointer ${activeTab.id === tab.id
                ? "rounded-md md:rounded-xl border-gray-200 md:border"
                : "rounded-md xl:rounded-xl items-start justify-start"
                } `}
              onClick={() => setActiveTab(tab)}>
              <div className="flex flex-col items-start md:justify-start">
                <div className="font-medium text-sm xl:text-lg">{tab.name}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Display content based on the active tab */}
        <div className="pt-6 md:py-10 lg:px-16 xl:px-0 md:px-16 w-full">
          {activeTab && (
            <div className="flex justify-center items-center flex-col">
              <Image className="w-full border rounded-xl" src={activeTab.image} width={1025} height={500} alt="logo" />
            </div>
          )}
        </div>
      </div>

      {/* web view */}
      <div className="hidden md:flex flex-col xl:space-x-4 items-start justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
        <p className="text-3xl pt-5 text-start mx-auto">{tServices.our_services}</p>
        {servicesTabs.map((tab, index: number) => (
          <motion.div
            key={index}
            className={`xl:flex justify-start space-x-4 xl:mt-4 xl:my-0 ${activeTab === tab ? "text-indigo-600" : ""}`}
            onMouseEnter={() => setActiveTab(tab)}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: index * 0.1,
            }}>
            <div className="px-4 flex justify-center align-center gap-2">
              <svg
                width="16px"
                height="16px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7839.000000)" fill="#e7e7e7">
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M298,7689 C298,7688.448 298.448,7688 299,7688 L299.91,7688 C299.486,7685.493 297.507,7683.514 295,7683.09 L295,7684 C295,7684.552 294.552,7685 294,7685 C293.448,7685 293,7684.552 293,7684 L293,7683.09 C290.493,7683.514 288.514,7685.493 288.09,7688 L289,7688 C289.552,7688 290,7688.448 290,7689 C290,7689.552 289.552,7690 289,7690 L288.09,7690 C288.514,7692.507 290.493,7694.486 293,7694.91 L293,7694 C293,7693.448 293.448,7693 294,7693 C294.552,7693 295,7693.448 295,7694 L295,7694.91 C297.507,7694.486 299.486,7692.507 299.91,7690 L299,7690 C298.448,7690 298,7689.552 298,7689 M304,7689 C304,7689.552 303.552,7690 303,7690 L301.931,7690 C301.479,7693.617 298.617,7696.479 295,7696.931 L295,7698 C295,7698.552 294.552,7699 294,7699 C293.448,7699 293,7698.552 293,7698 L293,7696.931 C289.383,7696.479 286.521,7693.617 286.069,7690 L285,7690 C284.448,7690 284,7689.552 284,7689 C284,7688.448 284.448,7688 285,7688 L286.069,7688 C286.521,7684.383 289.383,7681.521 293,7681.069 L293,7680 C293,7679.448 293.448,7679 294,7679 C294.552,7679 295,7679.448 295,7680 L295,7681.069 C298.617,7681.521 301.479,7684.383 301.931,7688 L303,7688 C303.552,7688 304,7688.448 304,7689 M297,7689 C297,7689.552 296.552,7690 296,7690 L295,7690 L295,7691 C295,7691.552 294.552,7692 294,7692 C293.448,7692 293,7691.552 293,7691 L293,7690 L292,7690 C291.448,7690 291,7689.552 291,7689 C291,7688.448 291.448,7688 292,7688 L293,7688 L293,7687 C293,7686.448 293.448,7686 294,7686 C294.552,7686 295,7686.448 295,7687 L295,7688 L296,7688 C296.552,7688 297,7688.448 297,7689"
                        id="target-[#81]"></path>
                    </g>
                  </g>
                </g>
              </svg>
              <motion.div
                className="flex flex-col text-sm"
                initial={{ x: 0 }}
                animate={{ x: activeTab === tab ? (lang === "ar" ? -25 : 25) : lang === "ar" ? -10 : 10 }}
                transition={{ duration: 0.2 }}>
                <div>
                  {/* Only animate the name */}
                  <motion.div
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}>
                    <p className="text-xl">{tab.name}</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Display content based on the active tab */}
      <div className="hidden md:flex py-10 px-8 md:px-0 lg:w-3/4 2xl:w-[55%]">
        {activeTab && (
          <div className=" md:flex  items-center justify-center space-x-6 hover:cursor-pointer w-full">
            <Image
              className="w-full shadow-md rounded-xl bg-[#f6f5f4] md:max-h-[570px]"
              src={activeTab.image}
              width={500}
              height={500}
              alt="logo"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServices;
