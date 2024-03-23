import React from "react";
import MainCarousel from "./MainCarousel";
import OurServices from "./OurServices";
import { useTranslations } from "next-intl";

interface Props {
	lang: string;
}

const HomeWrapper = ({ lang }: Props) => {
	const t = useTranslations("HomePage");

	const tServices = {
		our_services: `${t("our-services-contain")}`,
		service_1: `${t("service-1")}`,
		service_2: `${t("service-2")}`,
		service_3: `${t("service-3")}`,
		service_4: `${t("service-4")}`,
		service_5: `${t("service-5")}`,
		service_6: `${t("service-6")}`,
		service_7: `${t("service-7")}`,
		service_8: `${t("service-8")}`,
		service_9: `${t("service-9")}`,
	};

	const servicesTabs = [
		{
			id: 1,
			name: `${tServices.service_1}`,
			image: "/images/sample.jpeg",
		},
		{
			id: 2,
			name: `${tServices.service_2}`,
			image: "/images/sample3.jpeg",
		},
		{
			id: 3,
			name: `${tServices.service_3}`,
			image: "/images/sample4.jpeg",
		},
		{
			id: 4,
			name: `${tServices.service_4}`,
			image: "/images/sample3.jpeg",
		},
		{
			id: 5,
			name: `${tServices.service_5}`,
			image: "/images/sample.jpeg",
		},
		{
			id: 6,
			name: `${tServices.service_6}`,
			image: "/images/sample3.jpeg",
		},
		{
			id: 7,
			name: `${tServices.service_7}`,
			image: "/images/sample.jpeg",
		},
		{
			id: 8,
			name: `${tServices.service_8}`,
			image: "/images/sample4.jpeg",
		},
		{
			id: 9,
			name: `${tServices.service_9}`,
			image: "/images/sample4.jpeg",
		},
	];

	return (
		<section>
			<MainCarousel />
			<OurServices lang={lang} tServices={tServices} servicesTabs={servicesTabs} />
		</section>
	);
};

export default HomeWrapper;
