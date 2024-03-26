import JobsWrapper from "@/components/jobs/JobsWrapper";
import React from "react";
import Head from 'next/head';
import { useTranslations } from "next-intl";

interface Props {
  params: { locale: string };
}

export default function JobsPage({ params: { locale } }: Props) {
  const t = useTranslations("JobsPage");

  return (
    <>
      <Head>
        <title>{t("jobs-title")}</title>
        <meta name="description" content={t('jobs-desc')} />
      </Head>

      <main>
        <JobsWrapper lang={locale} />
      </main>
    </>
  );
}
