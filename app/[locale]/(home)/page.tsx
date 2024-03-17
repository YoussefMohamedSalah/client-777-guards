import HeroSection from "./hero-section";
import SecondSection from "./second-section";
import ThirdSection from "./third-section";
import FourthSection from "./fourth-section";
import FifthSection from "./fifth-section";
import SixthSection from "./sixth-section";
import SeventhSection from "./seventh-section";
import GetStartedFree from "./eighth-section";
import AboutUsSection from "./about-us-section";
import MainCarousel from "./main-carousel";

const LandingPage = () => {
  return (
    <div className="">
      {/* <HeroSection /> */}
      <MainCarousel />
      <AboutUsSection />
      {/*  */}
      {/* <SecondSection />
			<ThirdSection />
			<FourthSection />
			<FifthSection />
			<SixthSection />
			<SeventhSection />
			<GetStartedFree /> */}
    </div>
  );
};
export default LandingPage;
