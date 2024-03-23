import React from "react";
import { useTranslations } from "next-intl";

interface Props {
    jobData: any;
    lang: string;
}

const SingleJobWrapper = ({ jobData, lang }: Props) => {
    const t = useTranslations("JobsPage");

    const tJob = {
        experience: `${t("experience")}`,
        salary: `${t("salary")}`,
        location: `${t("location")}`,
        shift: `${t("shift")}`,
        education: `${t("education")}`,
        skills: `${t("skills")}`,
        duration: `${t("duration")}`,
        count: `${t("count")}`,
        month: `${t("month")}`,
        join_us: `${t("join-us")}`,
        not_specified: `${t("not-specified")}`,
    };


    return (
        <div className="w-full">
            <div className="text-5xl font-medium w-2/3">{jobData.title}</div>
            <div className="py-4 text-gray-300">
                {tJob.join_us}
            </div>

            <div className="bg-[#181818] md:w-4/5 space-y-6 p-4 rounded-lg my-4">
                <div className="flex gap-4 border-b">
                    {tJob.experience}
                    <div className=" font-normal pb-4 w-80">
                        {jobData.experience ? jobData.experience : tJob.not_specified}
                    </div>
                </div>

                <div className="flex gap-4 border-b">
                    {tJob.salary}
                    <div className=" font-normal pb-4 w-80">
                        {jobData.salary ? jobData.salary : tJob.not_specified}
                    </div>
                </div>

                <div className="flex gap-4 border-b">
                    {tJob.location}
                    <div className=" font-normal pb-4 w-80">
                        {jobData.location ? jobData.location : tJob.not_specified}
                    </div>
                </div>

                <div className="flex gap-4 border-b">
                    {tJob.shift}
                    <div className=" font-normal pb-4 w-80">
                        {jobData.shift ? jobData.shift : tJob.not_specified}
                    </div>
                </div>

                <div className="flex gap-4 border-b">
                    {tJob.education}
                    <div className=" font-normal pb-4 w-80">
                        {jobData.education ? jobData.education : tJob.not_specified}
                    </div>
                </div>

                <div className="flex gap-4 border-b">
                    {tJob.skills}
                    <div className=" font-normal pb-4 w-80">
                        {jobData.skills ? jobData.skills : tJob.not_specified}
                    </div>
                </div>

                <div className="flex gap-4 border-b">
                    {tJob.duration}
                    <div className=" font-normal pb-4 w-80">
                        {jobData.duration ? jobData.duration : tJob.not_specified}
                    </div>
                </div>

                <div className="flex gap-4">
                    {tJob.count}
                    <div className=" font-normal w-80">
                        {jobData.count ? jobData.count : tJob.not_specified}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleJobWrapper;
