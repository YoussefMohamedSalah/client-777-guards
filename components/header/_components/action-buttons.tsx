"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { X, AlignJustify } from "lucide-react";
import Link from "next/link";
import DropdownMenu from "./drop-down-menu";
import { usePathname, useRouter } from "../../../app/navigation";

interface Props {
  lang: string;
  tContactUs: string;
  tMenu: any;
  social: any[];
}

const ActionButtons = ({ lang, tContactUs, tMenu, social }: Props) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = () => {
    setDropdownVisible(false);
  };

  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (lang: string) => {
    router.push(pathname, { locale: lang });
  };

  return (
    <div className="md:pr-2">
      <div className=" items-center justify-center flex ">
        <div className="flex lg:space-x-4 items-center">
          <Link href={"/contact-us"} className="lg:flex items-center hidden">
            <Button variant={"outline"} className="lg:flex items-center hidden border-none bg-accent text-md gap-1">
              {tContactUs}
            </Button>
          </Link>
        </div>
        <div className="font-thin lg:flex items-center hidden">|</div>
        <div className="flex lg:space-x-4 items-center px-4">
          <ul className="md:flex hidden flex-wrap md:mx-0 gap-3 ">
            {social?.map((item) => (
              <li className="transition hover:opacity-80" key={`social-list--key${item.id}`}>
                <Link href={item.path ? item.path : "/#"} target="_blank" rel="noreferrer">
                  <Image
                    src={item.image}
                    alt={item.name}
                    height={item.height}
                    width={item.width}
                    className="transform scale-85 md:scale-100"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="font-thin lg:flex items-center hidden">|</div>
        <div className="flex lg:space-x-4 items-center pr-2">
          <div style={{ zIndex: 99999 }}>
            {lang === "ar" ? (
              <Button
                variant={"outline"}
                className="lg:flex items-center hidden border-none text-md fz16 gap-1 bg-accent"
                onClick={() => handleChange("en")}>
                <Image width={14} height={14} src="/assets/en.png" className="flag-icon img-fluid" alt="English" />
                English
              </Button>
            ) : (
              <Button
                variant={"outline"}
                className="lg:flex items-center hidden border-none text-md fz16 gap-1 bg-accent"
                onClick={() => handleChange("ar")}>
                <Image width={14} height={14} src="/assets/ar.png" className="flag-icon img-fluid" alt="Arabic" />
                العربية
              </Button>
            )}
          </div>
        </div>
      </div>

      {isDropdownVisible && (
        <div
          onClick={toggleDropdown}
          className="
            rounded-full
            xl:hidden
            ">
          <X className="h-5 w-5  items-center justify-center rounded-full" />
        </div>
      )}
      {!isDropdownVisible && (
        <div onClick={toggleDropdown} className="flex lg:hidden">
          <AlignJustify className="h-6 w-6 items-center justify-center mr-2" />
        </div>
      )}

      {isDropdownVisible && <DropdownMenu onClose={closeDropdown} tMenu={tMenu} lang={lang} social={social} />}
    </div>
  );
};

export default ActionButtons;
