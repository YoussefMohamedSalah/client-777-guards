import React from 'react'
import { GiRotaryPhone } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { LiaMobileAltSolid } from "react-icons/lia";

interface Props {
    data: any;
}

const TopHeader = ({ data }: Props) => {
    return (
        <div className="bg-black md:sticky top-0 z-50 border-b border-gray-600">
            <div className="container flex flex-col md:flex-row justify-between items-center p-4">
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-2">
                    {data.ar_address && (
                        <div className="flex items-center mb-2 md:mb-0">
                            <IoLocationSharp className="text-2xl me-1 text-yellow-500" />
                            <span className="text-center">{data.ar_address}</span>
                        </div>
                    )}
                    {data.phone_number_1 && (
                        <div className="flex items-center">
                            <LiaMobileAltSolid className="text-2xl me-1 text-yellow-500" />
                            <a href={`tel:${data.phone_number_1}`}>{data.phone_number_1}</a>
                        </div>
                    )}
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center md:gap-2">
                    {data.email && (
                        <div className="flex items-center mb-2 md:mb-0">
                            <MdAlternateEmail className="text-2xl me-1 text-yellow-500" />
                            <a href={`mailto:${data.email}`}>{data.email}</a>
                        </div>
                    )}
                    {data.land_line && (
                        <div className="flex items-center">
                            <GiRotaryPhone className="text-2xl me-1 text-yellow-500" />
                            <a href={`tel:${data.land_line}`}>{data.land_line}</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopHeader
