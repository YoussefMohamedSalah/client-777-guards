import JobsWrapper from "@/components/jobs/JobsWrapper";
import React from "react";

interface Props {
  params: { locale: string };
}

export const metadata = {
  title: "Jobs",
  description: "Jobs Page"
};

async function getAllJobs() {
  try {
    let res = await fetch('http://localhost:8080/api/jobs/');
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error)
  }
};

export default async function BlogsPage({ params: { locale } }: Props) {
  const jobsData = await getAllJobs();
  return (
    <main>
      <JobsWrapper jobsData={jobsData! || []} lang={locale} />
    </main>
  );
}
