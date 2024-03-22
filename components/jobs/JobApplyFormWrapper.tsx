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
        have_question: `${t("have-question")}`,
        lets_talk: `${t("lets-talk")}`,
        help_you: `${t("help-you")}`,
        info_one: `${t("info-one")}`,
        info_two: `${t("info-two")}`,
        info_three: `${t("info-three")}`,
        full_name: `${t("full-name")}`,
        email: `${t("email")}`,
        how_to_help: `${t("how-to-help")}`,
        get_prices: `${t("get-prices")}`,
        arrange_meeting: `${t("arrange-meeting")}`,
        know_more: `${t("know-more")}`,
        others: `${t("others")}`,
        your_message: `${t("your-message")}`,
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