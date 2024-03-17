import React from "react";
import Image from "next/image";

const MainSection = () => {
  return (
    <div className="my-5">
      <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">About</p>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            We are here to provide Comprehensive 24/7 Security Services Ensuring Safety and Compliance
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            We offer comprehensive security services around the clock, 24 hours a day, with full compliance with service
            requirements and standards. We guarantee that our security services provide a safe environment for all our
            employees and valued visitors through a strong presence and high efficiency. The aim of our security
            services is to prevent harm and risks, whether physical injuries or thefts, and to control the movement of
            entry and exit from any facility.
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <Image
            width={500}
            height={500}
            className="w-full rounded"
            src="/images/sample.jpeg"
            alt="people discussing on board"
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
