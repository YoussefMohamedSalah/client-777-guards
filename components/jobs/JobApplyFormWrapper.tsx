import React from 'react'
import JobApplyForm from './JobApplyForm'
import { useTranslations } from "next-intl";

interface Props {
    lang: string;
    jobId: string;
}

const JobApplyFormWrapper = ({ lang, jobId }: Props) => {
    const t = useTranslations("ContactUsPage");

    const tContactUs = {
        full_name: `${t("full-name")}`,
        email: `${t("email")}`,
        submit: `${t("submit")}`,
        contact_message: `${t("contact-us-message")}`,
        birthday: `${t("birthday")}`,
        phone_number: `${t("phone-number")}`,
        start_date: `${t("start-date")}`,
        address: `${t("address")}`,
        apply_message: `${t("apply-message")}`
    };

    return (
        <>
            <JobApplyForm tContactUs={tContactUs} lang={lang} jobId={jobId} />
        </>
    )
}

export default JobApplyFormWrapper