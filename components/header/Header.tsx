"use client";

import React, { useState, useEffect } from "react";
import ActionButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import { Menu } from "./_components/menu";
import LangSwitcher from "./_components/LangSwitcher";

interface Props {
  lang: string;
  tMenu: any;
}

const Header = ({ lang, tMenu }: Props) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `
    flex items-center justify-between space-x-10 bg-secondary h-14
    sticky top-0 z-50 border-b border-gray-600
  `;

  return (
    <div className={navbarClasses}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <div className="hidden md:block">
            <Logo />
          </div>
          <div className="md:hidden">
            <LangSwitcher lang={lang} />
          </div>
          <Menu tMenu={tMenu} lang={lang} />
        </div>
        <div className="self-center md:hidden">
          <Logo />
        </div>
        <ActionButtons lang={lang} tContactUs={tMenu.contact_us} tMenu={tMenu} />
      </div>
    </div>
  );
};

export default Header;
