import ContactUsWrapper from "@/components/contact-us/ContactUsWrapper";

export const metadata = {
  title: "Contacts",
  description: "Contact us The best security company in Egypt where, we offer top-notch security solutions provided by experienced professionals, including event security, armed guards, secure transportation, surveillance systems, and tailored services for VIPs and special events. Our comprehensive offerings encompass everything from securing facilities to safeguarding valuable assets, ensuring peace of mind for our clients at all times."
};

interface Props {
  params: { locale: string };
}

export default function ContactUsPage({ params: { locale } }: Props) {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <ContactUsWrapper lang={locale} />
    </div>
  );
};
