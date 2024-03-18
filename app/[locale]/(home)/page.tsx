import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import SixthSection from "./sixth-section";
import SeventhSection from "./seventh-section";
import GetStartedFree from "./eighth-section";
import AboutUsSection from "./about-us-section";
import MainCarousel from "../../../components/home/MainCarousel";
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
