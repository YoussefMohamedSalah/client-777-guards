"use client"
import React from 'react'
import { motion } from "framer-motion";

interface Props {
    ourCustomers: string;
    customersTabs: any[];
}


const OurCustomers = ({ ourCustomers, customersTabs }: Props) => {
    return (
        <div className="mt-10 mb-5">
            <div className="flex flex-col items-center justify-center">
                <div className="text-3xl xl:text-5xl font-medium justify-center items-center flex">{ourCustomers}</div>
                <div className="py-16 px-4">
                    <div className="">
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                            {customersTabs.map((customer, index) => (
                                <motion.li key={customer.name}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}>
                                    <div className="flex items-center gap-x-6">
                                        <img className="h-20 w-20 rounded-full" src={customer.url} alt="" />
                                        <div>
                                            <h3 className="text-base font-semibold leading-7 tracking-tight">{customer.name}</h3>
                                            <p className="text-sm font-semibold leading-6 text-indigo-600">{customer.location}</p>
                                        </div>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurCustomers
