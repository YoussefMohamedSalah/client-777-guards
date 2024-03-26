import ContactUsWrapper from "@/components/contact-us/ContactUsWrapper";
import Head from 'next/head';
import { useTranslations } from "next-intl";

interface Props {
  params: { locale: string };
}

export default function ContactUsPage({ params: { locale } }: Props) {
  const t = useTranslations("ContactUsPage");

  return (
    <>
      <Head>
        <title>{t("contact-title")}</title>
        <meta name="description" content={t('contact-desc')} />
      </Head>

      <main>
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
          <ContactUsWrapper lang={locale} />
        </div>
      </main>
    </>

  );
}
