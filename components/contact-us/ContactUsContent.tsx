import React from "react";
import { PiCheckLight } from "react-icons/pi";

const ContactUsContent = () => {
  return (
    <div className="w-full">
      <div className="text-5xl font-medium w-2/3">Have A Question?</div>
      <div className="py-4 text-gray-500">
        Let&apos;s talk about how 777-Guards can <span className="text-[#051fb3] text-2xl">Guard</span> you.
      </div>

      <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-lg my-4">
        <div className="flex gap-4 border-b ">
          <PiCheckLight className="text-2xl " />

          <div className=" font-normal pb-4 w-80">
            Trained security personnel equipped with the latest technology to ensure safety and protection for your
            premises.
          </div>
        </div>

        <div className="flex gap-4 border-b ">
          <PiCheckLight className="text-2xl " />

          <div className=" font-normal pb-4 w-80">
            Comprehensive security solutions tailored to meet the specific needs and requirements of your organization.
          </div>
        </div>

        <div className="flex gap-4  ">
          <PiCheckLight className="text-2xl " />

          <div className=" font-normal pb-4 w-80">
            Round-the-clock surveillance and monitoring services provided by our experienced team of security
            professionals.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsContent;
