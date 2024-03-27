import React from 'react'
import { GiRotaryPhone } from "react-icons/gi";
import { MdAlternateEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { LiaMobileAltSolid } from "react-icons/lia";

interface Props {
    data: any;
}

const TopHeader = ({ data }: Props) => {

    const navbarClasses = `
    flex items-center justify-between space-x-10 h-14
    sticky top-0 z-50 border-b border-gray-600 bg-black`;

    return (
        <div className={navbarClasses}>
            <div className="container flex justify-between items-center">
                <ul className="md:flex flex items-center justify-center gap-2">
                    {data.ar_address && (
                        <div className="flex items-center">
                            <IoLocationSharp className="text-2xl me-1 text-yellow-500" />
                            <span className="ml-1">
                                <span>{data.ar_address}</span>
                            </span>
                        </div>
                    )}
                    <div className="font-thin md:flex flex items-center hidden ml-1">|</div>
                    {data.phone_number_1 && (
                        <li className="flex items-center">
                            <LiaMobileAltSolid className="text-2xl me-1 text-yellow-500" />
                            <span className="ml-1">
                                <a href={`tel:${data.phone_number_1}`}>{data.phone_number_1}</a>
                            </span>
                        </li>
                    )}                </ul>
                <ul className="flex items-between justify-center gap-2">
                    {data.email && (
                        <div className="flex items-center">
                            <MdAlternateEmail className="text-2xl me-1 text-yellow-500" />
                            <span className="ml-1">
                                <a href={`mailto:${data.email}`}>{data.email}</a>
                            </span>
                        </div>
                    )}
                    <div className="font-thin md:flex flex items-center hidden ml-1">|</div>
                    {data.land_line && (
                        <li className="flex items-center">
                            <GiRotaryPhone className="text-2xl me-1 text-yellow-500" />
                            <span className="ml-1">
                                <a href={`tel:${data.land_line}`}>{data.land_line}</a>
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default TopHeader
