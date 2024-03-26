import React from "react";
import { useTranslations } from "next-intl";
import JobsContent from "./JobsContent";

interface Props {
  lang: string;
}

const JobsWrapper = ({ lang }: Props) => {
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
      <JobsContent tJob={tJob} lang={lang} />
    </section>
  );
};

export default JobsWrapper;
