"use client";
import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const Whatsapp = () => {
  return (
    <FloatingWhatsApp
      accountName="777 Guards"
      phoneNumber="01000131662"
      avatar="/logos/logopng.png"
      chatMessage="Welcome to 777 Guards"
      darkMode={true}
    />
  );
};

export default Whatsapp;
