import React from 'react'
import OurPartnersCarousel from './OurPartnersCarousel';

interface Props {
    lang: string;
    ourPartners: string;
    partnersTabs: any[];
}

const OurPartners = ({ lang, ourPartners, partnersTabs }: Props) => {
    return (
        <div className="mt-10 mb-5">
            <div className="flex flex-col items-center justify-center">
                <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">{ourPartners}</div>
                <OurPartnersCarousel lang={lang} partnersTabs={partnersTabs} />
            </div>
        </div>
    )
}

export default OurPartners
