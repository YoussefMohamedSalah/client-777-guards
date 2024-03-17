"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

import { TbSwitch3 } from "react-icons/tb";
import { PiEyeLight, PiPaletteLight } from "react-icons/pi";
import { Lora } from "next/font/google";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const tabs = [
  {
    header: "Security Systems Services",
    subheading:
      "Electronic Surveillance (Cameras) and Early Fire Alarm Systems, X-ray Detection Devices, Indoor Access Control Systems, Perimeter Protection Devices, and various integrated security solutions, The company comprises a team of competent engineers and skilled technicians experienced in various security technologies.",
  },
  {
    header: "Security and Surveillance Services",
    subheading:
      "Comprehensive Security and Management Services for Public Institutions, Private Enterprises, Malls, Hospitals, Clubs, Tourist Villages, Banks, and Hotels, both interior and exterior, including towers and warehouses.",
  },
  {
    header: "Security Consulting Services",
    subheading:
      "Our security consulting services help our valued clients by providing clear insight into security developments in the region and developing appropriate security plans. This assists in pre-planning for business expansion and reducing security risks with proper prior planning. It includes risk analysis, evaluation, and preventive measures to mitigate security risks.",
  },
  {
    header: "Events and VIP Personal Services",
    subheading:
      "We provide comprehensive event planning and management services for both public and private occasions, We also offer special protection for high-profile individuals and provide secure car convoys. Our company delivers this service with specifically trained personnel, ensuring high standards of security. Our team includes former officers with expertise in convoy management.",
  },
  {
    header: "Specialized K9 Security Services",
    subheading:
      "This service provides trained and specialized dogs for inspection purposes. These dogs undergo training by a specialized team following guidelines set by the Ministry of Interior and other relevant authorities. These dogs are tailored to meet client requirements, adhering to specific instructions for explosive detection, drug detection, riot control, and search and rescue operations.",
  },
];
type Tab = {
  header: string;
  subheading: string;
};

const OurServices = () => {
  return (
    <div className="mt-10 mb-5">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">Our services</div>
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
