import React from "react";
import ContactUsForm from "./ContactUsForm";
import ContactUsContent from "./ContactUsContent";
import { useTranslations } from "next-intl";

interface Props {
  lang: string;
}

const ContactUsWrapper = ({ lang }: Props) => {
  const t = useTranslations("ContactUsPage");

  const tContactUs = {
    have_question: `${t("have-question")}`,
    lets_talk: `${t("lets-talk")}`,
    help_you: `${t("help-you")}`,
    info_one: `${t("info-one")}`,
    info_two: `${t("info-two")}`,
    info_three: `${t("info-three")}`,
    full_name: `${t("full-name")}`,
    full_name_holder: `${t("full-name-holder")}`,
    phone_number: `${t("phone-number")}`,
    phone_number_holder: `${t("phone-number-holder")}`,
    email: `${t("email")}`,
    email_holder: `${t("email-holder")}`,
    your_message: `${t("your-message")}`,
    your_message_holder: `${t("your-message-holder")}`,
    how_to_help: `${t("how-to-help")}`,
    get_prices: `${t("get-prices")}`,
    arrange_meeting: `${t("arrange-meeting")}`,
    know_more: `${t("know-more")}`,
    others: `${t("others")}`,
    submit: `${t("submit")}`,
    contact_message: `${t("contact-us-message")}`,
  };

  return (
    <div className="md:flex justify-center relative w-full h-full overflow-hidden">
      <ContactUsContent tContactUs={tContactUs} />
      <ContactUsForm lang={lang} tContactUs={tContactUs} />
    </div>
  );
};

export default ContactUsWrapper;
