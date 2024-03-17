"use client";

import React, { useState, useEffect } from "react";
import ActionButtons from "./_components/action-buttons";
import Logo from "./_components/logo";
import { Menu } from "./_components/menu";

interface Props {
  lang: string;
}

const Navbar = ({ lang }: Props) => {
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
    flex items-center justify-between space-x-10 bg-white  h-14
    sticky top-0 z-50 border-b border-gray-200
  `;

  return (
    <div className={navbarClasses}>
      <div className="container flex items-center justify-between">
        <div className="flex items-center justify-center gap-2">
          <Logo />
          <Menu />
        </div>
        <ActionButtons lang={lang} />
      </div>
    </div>
  );
};

export default Navbar;
