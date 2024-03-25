import React from "react";
import Link from "next/link";
interface Props {
  job: any;
  lang: string;
  tJob: any;
}

const JobCard = ({ job, lang, tJob }: Props) => {
  return (
    <div className="w-[100%] group mt-10 grid grid-cols-12 space-x-0 sm:space-x-8 overflow-hidden rounded-lg border py-8 text-white bg-gray-800 shadow transition hover:shadow-lg sm:mx-auto">
      <div className="col-span-12 sm:col-span-12 flex flex-col sm:pl-4">
        <h2 className="text-sm text-green-400 px-4 md:px-7 text-center">{tJob.available}</h2>
        <Link
          href={`/${lang}/jobs/${job.id}`}
          className="mb-3 overflow-hidden px-7 md:px-7 md:text-xxl font-semibold text-xl pt-2 text-center">
          {job.title}
        </Link>
        <p dir="rtl" className="overflow-hidden px-4 py-2 md:py-3 md:px-7 text-sm">
          {job.description}
        </p>

        <div
          className="mt-5 flex flex-col space-y-3 text-sm font-medium sm:flex-row sm:space-y-0 sm:space-x-2 gap-1 pr-7 pt-2"
          dir="rtl">
          {job.experience && (
            <div className="w-full sm:w-auto">
              {tJob.experience}
              <span className="ml-2 mr-2 rounded-full bg-green-100 px-3 py-1 text-green-900 p-1" dir="rtl">
                {job.experience}
              </span>
            </div>
          )}
          {job.salary && (
            <div className="w-full sm:w-auto">
              {tJob.salary}
              <span className="ml-2 mr-2 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900 p-1" dir="rtl">
                {job.salary}
              </span>
            </div>
          )}
          {job.location && (
            <div className="w-full sm:w-auto">
              {tJob.location}
              <span className="ml-2 mr-2 rounded-full bg-yellow-100 px-2 py-0.5 text-yellow-900 p-1" dir="rtl">
                {job.location}
              </span>
            </div>
          )}
          {job.shift && (
            <div className="w-full sm:w-auto">
              {tJob.shift}
              <span className="ml-2 mr-2 rounded-full bg-purple-100 px-2 py-0.5 text-purple-900 p-1" dir="rtl">
                {job.shift}
              </span>
            </div>
          )}
          {job.education && (
            <div className="w-full sm:w-auto">
              {tJob.education}
              <span className="ml-2 mr-2 rounded-full bg-red-100 px-2 py-0.5 text-red-900 p-1" dir="rtl">
                {job.education}
              </span>
            </div>
          )}
          {job.skills && (
            <div className="w-full sm:w-auto">
              {tJob.skills}
              <span className="ml-2 mr-2 rounded-full bg-indigo-100 px-2 py-0.5 text-indigo-900 p-1" dir="rtl">
                {job.skills}
              </span>
            </div>
          )}
          {job.duration && (
            <div className="w-full sm:w-auto">
              {tJob.duration}
              <span className="ml-2 mr-2 rounded-full bg-pink-100 px-2 py-0.5 text-pink-900 p-1" dir="rtl">
                {job.duration} {tJob.month}
              </span>
            </div>
          )}
          {/* {job.count && (
            <div className="w-full sm:w-auto">
              {tJob.count}
              <span className="ml-2 mr-2 rounded-full bg-cyan-100 px-2 py-0.5 text-cyan-900 p-1" dir="rtl">{job.count}</span>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
