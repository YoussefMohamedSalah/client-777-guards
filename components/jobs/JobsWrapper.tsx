import React from "react";
// import MainCarousel from "./MainCarousel";
// import OurServices from "./OurServices";
import { useTranslations } from "next-intl";
import JobCard from "./JobCard";

interface Props {
    jobsData: any[];
    lang: string;
}

const JobsWrapper = ({ jobsData, lang }: Props) => {
    const t = useTranslations("JobsPage");

    const tJob = {
        our_services: `${t("our-services-contain")}`,
        available: `${t("available")}`,
        closed: `${t("closed")}`,
        experience: `${t("experience")}`,
        salary: `${t("salary")}`,
        location: `${t("location")}`,
        shift: `${t("shift")}`,
        education: `${t("education")}`,
        skills: `${t("skills")}`,
        duration: `${t("duration")}`,
        count: `${t("count")}`,
        month: `${t("month")}`,
    };


    return (
        <section>
            <div className="md:items-center flex flex-col container pt-5">
                {jobsData && jobsData?.map((job, index: number) => {
                    return (
                        <div key={index} className="w-full m-5">
                            <JobCard job={job} tJob={tJob} lang={lang} />
                        </div>
                    )
                })}
            </div>
            {/* <MainCarousel />
			<OurServices lang={lang} tServices={tServices} servicesTabs={servicesTabs} /> */}
        </section>
    );
};

export default JobsWrapper;
