import HomeWrapper from "@/components/home/HomeWrapper";

interface Props {
  params: { locale: string };
}

export const metadata = {
  title: "Home",
  description:
    "Welcome to 777 Guards, where we offer top-notch security solutions provided by experienced professionals, including event security, armed guards, secure transportation, surveillance systems, and tailored services for VIPs and special events. Our comprehensive offerings encompass everything from securing facilities to safeguarding valuable assets, ensuring peace of mind for our clients at all times.",
};

const LandingPage = ({ params: { locale } }: Props) => {
  return (
    <main>
      <HomeWrapper lang={locale} />
    </main>
  );
};
export default LandingPage;
