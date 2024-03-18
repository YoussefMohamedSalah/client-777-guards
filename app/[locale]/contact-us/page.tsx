import ContactUsWrapper from "@/components/contact-us/ContactUsWrapper";


interface Props {
  params: { locale: string };
}

const ContactUsPage = ({ params: { locale } }: Props) => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <ContactUsWrapper lang={locale} />
    </div>
  );
};
export default ContactUsPage;
