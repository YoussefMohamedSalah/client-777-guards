"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { usePathname, useRouter } from "../../../app/navigation";


interface Props {
    lang: string;
}

const LangSwitcher = ({ lang }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const handleChange = (lang: string) => {
        router.push(pathname, { locale: lang });
    };


    return (
        <div className="flex space-x-4 items-center md:pr-2">
            <div style={{ zIndex: 99999 }}>
                {lang === "ar" ? (
                    <Button
                        variant={"outline"}
                        className="flex items-center border-none text-md fz16 gap-1 bg-accent"
                        onClick={() => handleChange("en")}>
                        <Image width={14} height={14} src="/assets/en.png" className="flag-icon img-fluid" alt="English" />
                        <span className="hidden">
                            English
                        </span>
                        <span className="md:hidden">
                            EN
                        </span>
                    </Button>
                ) : (
                    <Button
                        variant={"outline"}
                        className="flex items-center border-none text-md fz16 gap-1 bg-accent"
                        onClick={() => handleChange("ar")}>
                        <Image width={14} height={14} src="/assets/ar.png" className="flag-icon img-fluid" alt="Arabic" />
                        <span className="hidden">
                            العربية
                        </span>
                        <span className="md:hidden">
                            AR
                        </span>
                    </Button>
                )}
            </div>
        </div>
    )
}

export default LangSwitcher
