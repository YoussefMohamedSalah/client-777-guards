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
  const [social, setSocial] = useState<any[]>([]);

  useEffect(() => {
    fetchWebsiteData();
  }, []);

  const fetchWebsiteData = async () => {
    try {
      let res = await fetch(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/api/website/777-guards`);
      if (!res.ok) {
        throw new Error("Network response was not ok");
      }
      let data = await res.json();
      let socialData = [];
      if (data.facebook) {
        socialData.push({
          id: 1,
          path: `${data.facebook}`,
          image: "/assets/social/facebook.svg",
          name: "facebook",
          width: 20,
          height: 20,
        });
      }
      if (data.tiktok) {
        socialData.push({
          id: 2,
          path: `${data.tiktok}`,
          image: "/assets/social/linkedin.svg",
          name: "linkedin",
          width: 20,
          height: 20,
        });
      }
      if (data.instagram) {
        socialData.push({
          id: 2,
          path: `${data.instagram}`,
          image: "/assets/social/instagram.svg",
          name: "instagram",
          width: 20,
          height: 20,
        });
      }
      setSocial(socialData);
      // You can further process the data here as needed
    } catch (error) {
      console.log("Error fetching website data:", error);
    }
  };

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
        <ActionButtons lang={lang} tContactUs={tMenu.contact_us} tMenu={tMenu} social={social} />
      </div>
    </div>
  );
};

export default Header;
