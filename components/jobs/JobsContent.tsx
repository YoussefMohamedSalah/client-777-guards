"use client"

import React, { useEffect, useState } from 'react'
import { PiArrowLeft, PiArrowRight } from "react-icons/pi";
import Image from "next/image";
import JobCard from "./JobCard";
import Link from "next/link";

interface Props {
    tJob: any;
    lang: string;
}

const JobsContent = ({ tJob, lang }: Props) => {
    const [jobs, setJobs] = useState<any[]>();

    useEffect(() => {
        fetchJobs()
    }, [])

    const fetchJobs = async () => {
        try {
            let res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/api/jobs/open/`);
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            let data = await res.json();
            if (data) {
                setJobs(data);
            }
            // You can further process the data here as needed
        } catch (error) {
            console.log("Error fetching website data:", error);
        }
    };

    return (
        <>
            <div className="md:items-center flex flex-col container pt-5">
                {jobs && jobs.length > 0 ? (
                    jobs?.map((job, index: number) => {
                        return (
                            <div key={index} className="w-full">
                                <JobCard job={job} tJob={tJob} lang={lang} />
                            </div>
                        );
                    })
                ) : (
                    <section>
                        <div className="md:items-center flex flex-col container">
                            <div className="md:items-center flex flex-col pt-5 min-h-[58vh]">
                                <div className="py-10 xl:py-20 flex justify-center items-center flex-col">
                                    <Link href={`/${lang}`} legacyBehavior passHref>
                                        <Image
                                            src="/logos/logopng.png"
                                            alt="hero image"
                                            width={1000}
                                            height={1000}
                                            className="w-40 pb-10"
                                        />
                                    </Link>
                                    <div className="text-4xl xl:text-5xl font-medium  text-center">{tJob.no_jobs_title}</div>
                                    <div className="py-4 xl:w-2/3  text-center px-3">{tJob.no_jobs_desc}</div>
                                    <Link href={`/${lang}`} legacyBehavior passHref>
                                        <div className="text-sky-500 flex items-center hover:underline hover:cursor-pointer">
                                            {tJob.back}{" "}
                                            {lang === "en" ? (
                                                <PiArrowRight className="ml-3 text-sm" />
                                            ) : (
                                                <PiArrowLeft className="ms-3 text-sm" />
                                            )}
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </>
    )
}

export default JobsContent
