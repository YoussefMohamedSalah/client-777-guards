import React from "react";
import AboutUsWrapper from "@/components/about-us/AboutUsWrapper";
import Head from 'next/head';
import { useTranslations } from "next-intl";

interface Props {
  params: { locale: string };
}

export default function AboutUsPage({ params: { locale } }: Props) {
  const t = useTranslations("AboutUsPage");

  return (
    <>
      <Head>
        <title>{t("about-title")}</title>
        <meta name="description" content={t('about-desc')} />
      </Head>

      <main>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <AboutUsWrapper lang={locale} />
        </div>
      </main>
    </>

  );
}
