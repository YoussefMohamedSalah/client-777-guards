"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { PiBookOpenTextLight, PiFileThin, PiSparkleLight, PiTargetLight } from "react-icons/pi";
import { getDirection } from "@/utils/getDirection";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description: "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description: "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description: "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

interface Props {
  tMenu: any;
  lang: string;
}

export const Menu = ({ tMenu, lang }: Props) => {
  return (
    <NavigationMenu className="hidden lg:flex" dir={getDirection(lang)}>
      <NavigationMenuList>
        {/* Start */}
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>{tMenu.home}</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Normal */}

        <NavigationMenuItem>
          <Link href="/our-services" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>{tMenu.our_services}</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/about-us" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>{tMenu.about_us}</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* With children */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>{tMenu.our_companies}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="flex bg-[#181818]">
              <div>
                <ul className="grid p-2 md:w-[400px] lg:w-[300px] hover:cursor-pointer border-r">
                  <Link target="_blank" href="https://www.facebook.com/mohamed.albaag.9?mibextid=ZbWKwL">
                    <div className="flex items-center gap-1 hover:bg-gray-400/10 py-4 px-2 rounded-sm">
                      <div>
                        <a className="">{lang === "en" ? "Al Manal hight service" : "المنال هاي سيرفيس"}</a>
                      </div>
                    </div>
                  </Link>

                  <div className="flex items-center gap-1 hover:bg-gray-400/10 py-4 px-2 rounded-sm">
                    <div>
                      <Link href="contact-us" className="">
                        {lang === "en"
                          ? "Design of security systems and surveillance cameras"
                          : "تصميم انظمة الأمن وكاميرات المراقبة"}
                      </Link>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/* children end */}

        <NavigationMenuItem>
          <Link href="/jobs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>{tMenu.jobs}</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        {/* Normal */}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}>
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
