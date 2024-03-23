import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import {
  BarChart,
  Building2,
  Code,
  Code2Icon,
  DollarSign,
  Download,
  GraduationCap,
  Headphones,
  Home,
  Newspaper,
  PaintBucket,
  Settings,
  Smile,
  Sparkles,
  ScreenShare,
  Users,
  UserPlus,
  ArrowRight,
} from "lucide-react";

interface DropDownMenuProps {
  onClose: () => void;
  tMenu: any;
}

const DropdownMenu: React.FC<DropDownMenuProps> = ({ onClose, tMenu }) => {
  const handleLinkClick = () => {
    onClose();
  };

  const social = [
    {
      id: 1,
      path: "https://www.facebook.com/profile.php?id=61556189053260&mibextid=ibOpuV",
      image: "/assets/social/facebook.svg",
      name: "facebook",
      width: 20,
      height: 20,
    },
    {
      id: 2,
      path: "https://www.tiktok.com/@777guards.securit?_t=8khOS9cHtIM&_r=1",
      image: "/assets/social/tiktok.svg",
      name: "tiktok",
      width: 20,
      height: 20,
    },
    {
      id: 3,
      path: "https://www.instagram.com/777.guards/?igsh=aGI5ZjJpMDc5ZXA4&utm_source=qr",
      image: "/assets/social/instagram.svg",
      name: "instagram",
      width: 20,
      height: 20,
    }
  ];

  return (
    <div className="w-screen h-screen bg-accent px-4 items-center justify-center absolute right-0 xl:hidden mt-4">
      <Accordion
        defaultValue="item-1"
        className="pl-2"
        type="single"
        collapsible>
        <AccordionItem className="mt-6 border-b" value="item-1">
          <AccordionTrigger className="">{tMenu.our_services}</AccordionTrigger>
          {/* <AccordionContent defaultValue="item-1" className="space-y-2">
            <Link href={"/team-alignment"} className="flex" onClick={handleLinkClick}>
              <div>
                <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
              </div>
              <div>Team alignment</div>
            </Link>
            <Link href={"/sales"} className="flex" onClick={handleLinkClick}>
              <div>
                <DollarSign className="h-6 w-6 mr-4 text-green-400" />
              </div>

              <div>Sales</div>
            </Link>
            <Link href={"/engineering"} className="flex" onClick={handleLinkClick}>
              <div>
                <Code className="h-6 w-6 mr-4 text-indigo-400" />
              </div>

              <div>Engineering</div>
            </Link>
            <Link href={"/design"} className="flex" onClick={handleLinkClick}>
              <div>
                <PaintBucket className="h-6 w-6 mr-4 text-blue-400" />
              </div>

              <div>Design</div>
            </Link>
            <Link href={"/marketing"} className="flex " onClick={handleLinkClick}>
              <div>
                <BarChart className="h-6 w-6 mr-4 text-rose-400" />
              </div>
              white
              <div>Marketing</div>
            </Link>
            <Link href={"/product-management"} className="flex" onClick={handleLinkClick}>
              <div>
                <Settings className="h-6 w-6 mr-4 text-grey-400" />
              </div>

              <div>Product Management</div>
            </Link>
            <Link href={"/support"} className="flex " onClick={handleLinkClick}>
              <div>
                <Headphones className="h-6 w-6 mr-4 text-amber-400" />
              </div>

              <div>Support</div>
            </Link>
          </AccordionContent> */}
        </AccordionItem>
        {/* <AccordionItem className=" border-b" value="item-2">
          <AccordionTrigger>For Business</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link href={"/team-alignment"} className="flex" onClick={handleLinkClick}>
              <div>
                <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
              </div>
              <div>Team alignment</div>
            </Link>
            <Link href={"/sales"} className="flex" onClick={handleLinkClick}>
              <div>
                <DollarSign className="h-6 w-6 mr-4 text-green-400" />
              </div>

              <div>Sales</div>
            </Link>
            <Link href={"/engineering"} className="flex" onClick={handleLinkClick}>
              <div>
                <Code className="h-6 w-6 mr-4 text-indigo-400" />
              </div>

              <div>Engineering</div>
            </Link>
            <Link href={"/design"} className="flex" onClick={handleLinkClick}>
              <div>
                <PaintBucket className="h-6 w-6 mr-4 text-blue-400" />
              </div>

              <div>Design</div>
            </Link>
            <Link href={"/marketing"} className="flex " onClick={handleLinkClick}>
              <div>
                <BarChart className="h-6 w-6 mr-4 text-rose-400" />
              </div>

              <div>Marketing</div>
            </Link>
            <Link href={"/product-management"} className="flex" onClick={handleLinkClick}>
              <div>
                <Settings className="h-6 w-6 mr-4 text-grey-400" />
              </div>

              <div>Product Management</div>
            </Link>
            <Link href={"/support"} className="flex " onClick={handleLinkClick}>
              <div>
                <Headphones className="h-6 w-6 mr-4 text-amber-400" />
              </div>

              <div>Support</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className=" border-b" value="item-3">
          <AccordionTrigger>Resources</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link href={"/team-alignment"} className="flex" onClick={handleLinkClick}>
              <div>
                <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
              </div>
              <div>Team alignment</div>
            </Link>
            <Link href={"/sales"} className="flex" onClick={handleLinkClick}>
              <div>
                <DollarSign className="h-6 w-6 mr-4 text-green-400" />
              </div>

              <div>Sales</div>
            </Link>
            <Link href={"/engineering"} className="flex" onClick={handleLinkClick}>
              <div>
                <Code className="h-6 w-6 mr-4 text-indigo-400" />
              </div>

              <div>Engineering</div>
            </Link>
            <Link href={"/design"} className="flex" onClick={handleLinkClick}>
              <div>
                <PaintBucket className="h-6 w-6 mr-4 text-blue-400" />
              </div>

              <div>Design</div>
            </Link>
            <Link href={"/marketing"} className="flex " onClick={handleLinkClick}>
              <div>
                <BarChart className="h-6 w-6 mr-4 text-rose-400" />
              </div>

              <div>Marketing</div>
            </Link>
            <Link href={"/product-management"} className="flex" onClick={handleLinkClick}>
              <div>
                <Settings className="h-6 w-6 mr-4 text-grey-400" />
              </div>

              <div>Product Management</div>
            </Link>
            <Link href={"/support"} className="flex " onClick={handleLinkClick}>
              <div>
                <Headphones className="h-6 w-6 mr-4 text-amber-400" />
              </div>

              <div>Support</div>
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem className=" border-b" value="item-4">
          <AccordionTrigger>Company</AccordionTrigger>
          <AccordionContent className="space-y-2">
            <Link href={"/team-alignment"} className="flex" onClick={handleLinkClick}>
              <div>
                <UserPlus className="h-6 w-6 mr-4 text-orange-400" />
              </div>
              <div>Team alignment</div>
            </Link>
            <Link href={"/sales"} className="flex" onClick={handleLinkClick}>
              <div>
                <DollarSign className="h-6 w-6 mr-4 text-green-400" />
              </div>

              <div>Sales</div>
            </Link>
            <Link href={"/engineering"} className="flex" onClick={handleLinkClick}>
              <div>
                <Code className="h-6 w-6 mr-4 text-indigo-400" />
              </div>

              <div>Engineering</div>
            </Link>
            <Link href={"/design"} className="flex" onClick={handleLinkClick}>
              <div>
                <PaintBucket className="h-6 w-6 mr-4 text-blue-400" />
              </div>

              <div>Design</div>
            </Link>
            <Link href={"/marketing"} className="flex " onClick={handleLinkClick}>
              <div>
                <BarChart className="h-6 w-6 mr-4 text-rose-400" />
              </div>

              <div>Marketing</div>
            </Link>
            <Link href={"/product-management"} className="flex" onClick={handleLinkClick}>
              <div>
                <Settings className="h-6 w-6 mr-4 text-grey-400" />
              </div>

              <div>Product Management</div>
            </Link>
            <Link href={"/support"} className="flex " onClick={handleLinkClick}>
              <div>
                <Headphones className="h-6 w-6 mr-4 text-amber-400" />
              </div>

              <div>Support</div>
            </Link>
          </AccordionContent>
        </AccordionItem> */}

        <Link
          href={"/"}
          className="flex flex-1 items-center justify-between py-4 border-b ">
          {tMenu.home}
        </Link>
        <Link
          href={"/about-us"}
          className="flex flex-1 items-center justify-between py-4 border-b ">
          {tMenu.about_us}
        </Link>
        <Link
          href={"/jobs"}
          className="flex flex-1 items-center justify-between py-4 border-b ">
          {tMenu.jobs}
        </Link>

      </Accordion>

      <div className="pt-12">
        <div className="space-y-4 flex flex-col px-4">

          <Link href={"/contact-us"}>
            <Button variant={"outline"} className="w-full">
              Contact us
            </Button>
          </Link>

          <div className="flex lg:space-x-4 justify-center items-center px-4">
            <ul className="flex justify-center items-center md:mx-0 gap-3">
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

        </div>
      </div>
    </div>
  );
};

export default DropdownMenu;
