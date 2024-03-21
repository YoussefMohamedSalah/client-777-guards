import { getDirection } from '@/utils/getDirection';
import React from 'react'

interface Props {
    job: any;
    lang: string;
    tJob: any;
}

const JobCard = ({ job, lang, tJob }: Props) => {




    // const tJob = {
    //     our_services: `${t("our-services-contain")}`,
    //     available: `${t("available")}`,
    //     closed: `${t("closed")}`,
    //     experience: `${t("experience")}`,
    //     salary: `${t("salary")}`,
    //     location: `${t("location")}`,
    //     shift: `${t("shift")}`,
    //     education: `${t("education")}`,
    //     skills: `${t("skills")}`,
    //     duration: `${t("duration")}`,
    //     count: `${t("duration")}`,
    // };



    return (
        <div className="w-[100%] group mx-2 mt-10 grid grid-cols-12 space-x-0 sm:space-x-8 overflow-hidden rounded-lg border py-8 text-white bg-gray-800 shadow transition hover:shadow-lg sm:mx-auto">
            <div className="col-span-12 sm:col-span-12 flex flex-col sm:pl-4">
                <h3 className="text-sm text-green-400 pr-7">{tJob.available}</h3>
                <a href="#" className="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl pt-2">{job.title}</a>
                <p className="overflow-hidden pr-7 text-sm">{job.description}</p>

                <div className="mt-5 flex flex-col space-y-3 text-sm font-medium sm:flex-row  sm:space-y-0 sm:space-x-2 gap-1  pr-7 pt-2" >
                    {job.experience && <div className="w-full sm:w-auto">{tJob.experience}:<span className="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900">{job.experience}</span></div>}
                    {job.salary && <div className="w-full sm:w-auto">{tJob.salary}:<span className="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">{job.salary}</span></div>}
                    {job.location && <div className="w-full sm:w-auto">{tJob.location}:<span className="ml-2 mr-3 rounded-full bg-yellow-100 px-2 py-0.5 text-yellow-900">{job.location}</span></div>}
                    {job.shift && <div className="w-full sm:w-auto">{tJob.shift}:<span className="ml-2 mr-3 rounded-full bg-purple-100 px-2 py-0.5 text-purple-900">{job.shift}</span></div>}
                    {job.education && <div className="w-full sm:w-auto">{tJob.education}:<span className="ml-2 mr-3 rounded-full bg-red-100 px-2 py-0.5 text-red-900">{job.education}</span></div>}
                    {job.skills && <div className="w-full sm:w-auto">{tJob.skills}:<span className="ml-2 mr-3 rounded-full bg-indigo-100 px-2 py-0.5 text-indigo-900">{job.skills}</span></div>}
                    {job.duration && <div className="w-full sm:w-auto">{tJob.duration}:<span className="ml-2 mr-3 rounded-full bg-pink-100 px-2 py-0.5 text-pink-900">{job.duration} {tJob.month}</span></div>}
                    {job.count && <div className="w-full sm:w-auto">{tJob.count}:<span className="ml-2 mr-3 rounded-full bg-cyan-100 px-2 py-0.5 text-cyan-900">{job.count}</span></div>}
                </div>
            </div>
        </div>
    )
}

export default JobCard
