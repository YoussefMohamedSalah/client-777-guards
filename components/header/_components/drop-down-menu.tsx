import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface DropDownMenuProps {
  onClose: () => void;
  tMenu: any;
  lang: string;
  social: any[];
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose, tMenu, lang, social }) => {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <div className="w-screen h-screen bg-accent px-4 items-center justify-center absolute right-0 xl:hidden mt-4 z-9999">
      <Accordion defaultValue="item-1" className="pl-2" type="single" collapsible>
        <Link
          onClick={handleLinkClick}
          href={`/${lang}`}
          className="flex flex-1 items-center justify-between py-3 pt-5 border-b">
          {tMenu.home}
        </Link>
        <Link
          onClick={handleLinkClick}
          href={`/${lang}/our-services`}
          className="flex flex-1 items-center justify-between py-3 border-b">
          {tMenu.our_services}
        </Link>
        <AccordionItem className="py-1 border-b" value="item-1">
          <AccordionTrigger className="">{tMenu.our_companies}</AccordionTrigger>
          <AccordionContent defaultValue="item-1" className="space-y-2">
            <Link
              onClick={handleLinkClick}
              href="https://www.facebook.com/mohamed.albaag.9?mibextid=ZbWKwL"
              target="_blank"
              className="flex">
              <div className="ps-3 text-blue-500 pb-2">
                {lang === "en" ? "Al Manal hight service" : "المنال هاي سيرفيس"}
              </div>
            </Link>
            <Link onClick={handleLinkClick} href={`/${lang}/contact-us`} className="flex">
              <div className="ps-3 text-blue-500">
                {lang === "en"
                  ? "Design of security systems and surveillance cameras"
                  : "تصميم انظمة الأمن وكاميرات المراقبة"}
              </div>
            </Link>
          </AccordionContent>
        </AccordionItem>
        <Link
          onClick={handleLinkClick}
          href={`/${lang}/about-us`}
          className="flex flex-1 items-center justify-between py-3 border-b">
          {tMenu.about_us}
        </Link>
        <Link
          onClick={handleLinkClick}
          href={`/${lang}/jobs`}
          className="flex flex-1 items-center justify-between py-3 border-b">
          {tMenu.jobs}
        </Link>
      </Accordion>

      <div className="pt-12">
        <div className="space-y-4 flex flex-col px-4">
          <Link onClick={handleLinkClick} href={`/${lang}/contact-us`}>
            <Button variant={"outline"} className="w-full bg-[#ffff] text-black">
              {lang === "en" ? "Contact us" : "تواصل معنا"}
            </Button>
          </Link>

          <div className="flex lg:space-x-4 justify-center items-center px-4">
            <ul className="flex justify-center items-center md:mx-0 gap-3">
              {social?.map((item, index: number) => (
                <li className="transition hover:opacity-80" key={`social-list--key${index}`}>
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
        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
