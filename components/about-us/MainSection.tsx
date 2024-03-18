import React from "react";
import Image from "next/image";

interface Props {
  tAboutUs: any;
}

const MainSection = ({ tAboutUs }: Props) => {
  return (
    <div className="my-5">
      <p className="font-normal text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer">{tAboutUs.about}</p>
      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
        <div className="w-full lg:w-6/12">
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">
            {tAboutUs.main_section_title}
          </h2>
          <p className="font-normal text-base leading-6 text-gray-600 mt-6">
            {tAboutUs.main_section_description}
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
