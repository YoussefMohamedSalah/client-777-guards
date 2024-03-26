import React from "react";
import OurServicesWrapper from "@/components/our-services/OurServicesWrapper";
import Head from 'next/head';
import { useTranslations } from "next-intl";

interface Props {
  params: { locale: string };
}

export default function OurServicesPage({ params: { locale } }: Props) {
  const t = useTranslations("AboutUsPage");

  return (
    <>
      <Head>
        <title>{t("services-title")}</title>
        <meta name="description" content={t('services-desc')} />
      </Head>

      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
        <OurServicesWrapper lang={locale} />
      </div>
    </>

  );
}
