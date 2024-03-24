import React from "react";
import Image from "next/image";

interface Props {
  tAboutUs: any;
}

const MainWord = ({ tAboutUs }: Props) => {
  return (
    <div className="my-5">
      <p className="font-normal text-md leading-3 text-indigo-400 hover:text-indigo-600 cursor-pointer pb-2">
        {tAboutUs.head_word_title}
      </p>
      <div className="w-full lg:w-12/12">
        <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">{tAboutUs.mohamed}</h2>
        <p className="font-normal text-lg leading-6 text-gray-300 mt-4">{tAboutUs.head_word}</p>
      </div>

      {/* second section */}

      <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 pt-12">
        <div className="w-full lg:w-6/12">
          <p className="font-normal text-md leading-3 text-indigo-400 hover:text-indigo-600 cursor-pointer pb-2">
            {tAboutUs.gm_title}
          </p>
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">{tAboutUs.edrees}</h2>
          <p className="font-normal text-md leading-6 text-gray-200 mt-3">{tAboutUs.gm_1}</p>
          <p className="font-normal text-md leading-6 text-gray-200 mt-3">{tAboutUs.gm_2}</p>
          <p className="font-normal text-md leading-6 text-gray-200 mt-3">{tAboutUs.gm_3}</p>
          <p className="font-normal text-md leading-6 text-gray-200 mt-3">{tAboutUs.gm_4}</p>
          <p className="font-normal text-md leading-6 text-gray-200 mt-3">{tAboutUs.gm_5}</p>
          <p className="font-normal text-md leading-6 text-gray-200 mt-3">{tAboutUs.gm_6}</p>
        </div>

        <div className="w-full lg:w-6/12">
          <p className="font-normal text-md leading-3 text-indigo-400 hover:text-indigo-600 cursor-pointer pb-2">
            {tAboutUs.manager_title}
          </p>
          <h2 className="w-full font-bold lg:text-4xl text-3xl lg:leading-10 leading-9">{tAboutUs.kareem}</h2>
          <p className="font-normal text-md leading-6 text-gray-200 mt-3">{tAboutUs.manager_1}</p>
          <p className="font-normal text-md leading-6 text-gray-200 mt-3">{tAboutUs.manager_2}</p>
          <p className="font-normal text-md leading-6 text-gray-200 mt-3">{tAboutUs.manager_3}</p>
          <p className="font-normal text-md leading-6 text-gray-200 mt-3">{tAboutUs.manager_4}</p>
          <p className="font-normal text-md leading-6 text-gray-200 mt-3">{tAboutUs.manager_5}</p>
        </div>
      </div>
    </div>
  );
};

export default MainWord;
