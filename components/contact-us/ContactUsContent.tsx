"use client"
import { motion } from "framer-motion";

import React from "react";
import { PiCheckLight } from "react-icons/pi";

interface Props {
  tContactUs: any;
}

const ContactUsContent = ({ tContactUs }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="text-5xl font-medium w-2/3">{tContactUs.have_question}</div>
      <div className="py-4 text-gray-300">
        {tContactUs.lets_talk} 777 <span className="text-[#051fb3] text-2xl">GUARD</span>s {tContactUs.help_you}.
      </div>

      <div className="bg-[#181818] md:w-4/5 space-y-6 p-4 rounded-lg my-4">
        <div className="flex gap-4 border-b">
          <PiCheckLight className="text-2xl" />

          <div className=" font-normal pb-4 w-80">{tContactUs.info_one}</div>
        </div>

        <div className="flex gap-4 border-b">
          <PiCheckLight className="text-2xl" />

          <div className=" font-normal pb-4 w-80">{tContactUs.info_two}</div>
        </div>

        <div className="flex gap-4">
          <PiCheckLight className="text-2xl" />

          <div className=" font-normal pb-4 w-80">{tContactUs.info_three}</div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUsContent;
