import React from 'react'
import { useTranslations } from "next-intl";
import Footer from './Footer';

interface Props {
    lang: string;
}

const FooterWrapper = ({ lang }: Props) => {
    const t = useTranslations("Menu");

    const tMenu = {
        home: `${t("home")}`,
        about_us: `${t("about-us")}`,
        our_services: `${t("our-services")}`,
        jobs: `${t("jobs")}`,
        contact_us: `${t("contact-us")}`,
        news: `${t("news")}`,
        contacts: `${t("contacts")}`,
        fast_access: `${t("fast-access")}`,
    };

    return (
        <>
            <Footer tMenu={tMenu} lang={lang} />
        </>
    )
}

export default FooterWrapper