"use client"
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"

interface Props {
  tAboutUs: any;
}

const MainWord = ({ tAboutUs }: Props) => {
  return (

    <div className="my-5">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex justify-center items-center pb-6">
        <div className="w-full lg:w-7/12 bg-white rounded-lg shadow-lg p-6">
          <p className="font-normal text-lg font-bold leading-3 text-yellow-500	hover:text-yellow-600 cursor-pointer pb-4">
            {tAboutUs.head_word_title}
          </p>
          <h2 className="font-bold lg:text-4xl text-3xl text-black lg:leading-10 leading-9">{tAboutUs.mohamed}</h2>
          <p className="font-normal lg:text-2xl leading-3 text-black mt-4">{tAboutUs.head_word}</p>
          <div className="my-2 flex justify-start items-end" dir="ltr">
            {/* Signature Title */}
            <Image src="/logos/logopng.png" alt="logo" width={200} height={200} className="w-16 me-4" />
            <div>
              <Image width={105} height={80} src="/assets/signature.png" alt="Signature" className="w-auto mr-4"
                quality={100}
                loading="eager"
              />
              <p className="font-bold text-lg text-black">Mohamed Atef Al ba'ag, <span className="text-yellow-500"> Ceo & Co Founder</span></p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* second section */}

      <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -50 }}>
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

          <div className="w-full lg:w-6/12  pt-12 lg:pt-0">
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
      </motion.div>

    </div >
  );
};

export default MainWord;
