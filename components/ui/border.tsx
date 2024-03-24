import React from "react";
import Image from "next/image";

const Border = () => {
  return (
    <div className="flex w-full align-center justify-center">
      <div className="border-b border-gray-600 flex-grow self-center" style={{ flex: "1" }}></div>
      <div className="flex items-center justify-center px-2">
        <Image src="/logos/logopng.png" alt="logo" width={150} height={150} className="w-12" />
      </div>
      <div className="border-b border-gray-600 flex-grow self-center" style={{ flex: "1" }}></div>
    </div>
  );
};

export default Border;
