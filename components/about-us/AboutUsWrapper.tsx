import React from "react";
import MainSection from "@/components/about-us/MainSection";
import OurServices from "@/components/about-us/OurServices";
import OurMission from "@/components/about-us/OurMission";
import Border from "../ui/border";

const AboutUsWrapper = () => {
	return (
		<>
			<MainSection />
			<Border />
			<OurServices />
			<Border />
			<OurMission />
		</>
	);
};

export default AboutUsWrapper;
