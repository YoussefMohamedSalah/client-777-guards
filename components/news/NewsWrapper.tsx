import React from "react";
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface Props {
    lang: string;
}

const NewsWrapper = ({ lang }: Props) => {
    const t = useTranslations("JobsPage");

    const tJob = {
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
        back: `${t("back-to-home")}`,
        no_jobs_title: `${t("no-jobs-title")}`,
        no_jobs_desc: `${t("no-jobs-desc")}`,
    };

    return (
        <section>
            <div className="md:items-center flex flex-col container pt-5">
                <div className="md:items-center flex flex-col container pt-5 h-[58vh]">
                    <div className="py-20 xl:py-20 flex justify-center items-center flex-col">
                        <Link href={`/${lang}`} legacyBehavior passHref>
                            <Image src="/logos/logopng.png" alt="hero image" width={1000} height={1000} className="w-40 pb-10" />
                        </Link>
                        <div className="text-4xl xl:text-5xl font-medium  text-center">{tJob.no_jobs_title}</div>
                        <div className="py-4 xl:w-2/3  text-center px-10">{tJob.no_jobs_desc}</div>
                        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
                            {tJob.back}{" "}
                            {lang === "en" ? <PiArrowRight className="ml-3 text-sm" /> : <PiArrowLeft className="ms-3 text-sm" />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsWrapper;
