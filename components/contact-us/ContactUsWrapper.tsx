import React from "react";
import ContactUsForm from "./ContactUsForm";
import ContactUsContent from "./ContactUsContent";

const ContactUsWrapper = () => {
  return (
    <div className="md:flex justify-center relative w-full h-full overflow-hidden">
      <ContactUsContent />
      <ContactUsForm />
    </div>
  );
};

export default ContactUsWrapper;
