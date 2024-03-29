"use client"
import React from "react";
import { motion } from "framer-motion";

interface Props {
  tAboutUs: any;
}

const OurMission = ({ tAboutUs }: Props) => {
  return (
    <div className="mt-10 mb-5">
      <motion.div className="flex lg:flex-row flex-col md:gap-14 gap-16 justify-between"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <div className="w-full lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">{tAboutUs.founded}</h2>
          <p className="font-normal text-base leading-6 text-gray-300 w-full lg:w-10/12 xl:w-11/12 mt-5">
            {tAboutUs.founded_message}
          </p>
        </div>
        <div className="w-full lg:w-6/12">
          <h2 className="font-bold lg:text-4xl text-3xl lg:leading-9 leading-7">{tAboutUs.our_mission}</h2>
          <p className="font-normal text-base leading-6 text-gray-300 w-full lg:w-10/12 xl:w-11/12 mt-5">
            {tAboutUs.our_mission_message}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default OurMission;
