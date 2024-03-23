import HomeWrapper from "@/components/home/HomeWrapper";

interface Props {
  params: { locale: string };
}

const LandingPage = ({ params: { locale } }: Props) => {
  return (
    <div className="">
      <HomeWrapper lang={locale} />
    </div>
  );
};
export default LandingPage;
