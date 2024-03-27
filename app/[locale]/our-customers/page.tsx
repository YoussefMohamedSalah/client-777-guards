import HomeWrapper from "@/components/home/HomeWrapper";
import Head from 'next/head';
import { useTranslations } from "next-intl";
import OurCustomersWrapper from "@/components/our-customers/OurCustomersWrapper";

interface Props {
    params: { locale: string };
}

const LandingPage = ({ params: { locale } }: Props) => {
    const t = useTranslations("HomePage");

    return (
        <>
            <Head>
                <title>{t("home-title")}</title>
                <meta name="description" content={t('home-desc')} />
            </Head>

            <main>
                <OurCustomersWrapper lang={locale} />
            </main>
        </>
    );
};
export default LandingPage;
