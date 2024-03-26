import React from "react";
import OurCustomersCarousel from "./OurCustomersCarousel";

interface Props {
  lang: string;
  ourCustomers: string;
  customersTabs: any[];
}

const OurCustomers = ({ lang, ourCustomers, customersTabs }: Props) => {
  return (
    <div className="mt-10 mb-5">
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">{ourCustomers}</div>
        <OurCustomersCarousel lang={lang} customersTabs={customersTabs} />
      </div>
    </div>
  );
};

export default OurCustomers;
