"use client";
import Image from "next/image";
import LocationMap from "./locationMap";
import Link from "next/link";
import { LiaMobileAltSolid } from "react-icons/lia";
import { MdAlternateEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";
import { useState, useEffect } from "react";
import { IoLocationSharp } from "react-icons/io5";

interface Props {
  tMenu: any;
  lang: string;
}

const Footer = ({ tMenu, lang }: Props) => {
  const [social, setSocial] = useState<any[]>([]);
  const [email, setEmail] = useState<string | null>(null);
  const [phoneNumber1, setPhoneNumber1] = useState<string | null>(null);
  const [phoneNumber2, setPhoneNumber2] = useState<string | null>(null);
  const [landLine, setLandLine] = useState<string | null>(null);
  const [arAddress, setArAddress] = useState<string | null>(null);
  const [enAddress, setEnAddress] = useState<string | null>(null);


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

      if (data.email) setEmail(data.email);
      if (data.phone_number_1) setPhoneNumber1(data.phone_number_1);
      if (data.phone_number_2) setPhoneNumber2(data.phone_number_2);
      if (data.email) setEmail(data.email);
      if (data.land_line) setLandLine(data.land_line);
      if (data.ar_address) setArAddress(data.ar_address);
      if (data.en_address) setEnAddress(data.en_address);


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

  return (
    <div className="border-t border-gray-600 mt-10">
      <div className="container my-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 md:px-0">
          {/* MAP */}
          <div className="lg:col-span-7">
            <div className="lg:grid lg:grid-cols-12">
              <div className="lg:col-span-8">
                <LocationMap />
              </div>
              {/* LOGO */}
              <div className="lg:col-span-4 pt-4 flex items-center justify-center lg:justify-center lg:items-center">
                <div className="flex flex-col items-center space-x-2">
                  <Link href={`/${lang}`} legacyBehavior passHref>
                    <Image src="/logos/logopng.png" width={150} height={150} alt="logo" className="w-18 pb-3" />
                  </Link>
                  <ul className="flex flex-wrap space-s-4 md:space-s-5 mx-auto md:mx-0 gap-3 pt-2">
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
          <div className="lg:col-span-5">
            <div className="lg:grid lg:grid-cols-12 ">
              <div className="lg:col-span-7 space-y-6 mt-8 lg:mt-0 flex flex-col">
                <div className="text-lg  xl:text-[18px] xl:leading-6 font-bold self-center">{tMenu.contacts}</div>
                <div className="font-light space-y-4 text-md md:text-sm">
                  {email && (
                    <div className="flex items-center">
                      <MdAlternateEmail className="text-2xl me-1 text-gray-500" />
                      <span className="ml-2">
                        <a href={`mailto:${email}`}>{email}</a>
                      </span>
                    </div>
                  )}
                  {phoneNumber1 && (
                    <div className="flex items-center">
                      <LiaMobileAltSolid className="text-2xl me-1 text-gray-500" />
                      <span className="ml-2">
                        <a href={`tel:${phoneNumber1}`}>{phoneNumber1}</a>
                      </span>
                    </div>
                  )}
                  {phoneNumber2 && (
                    <div className="flex items-center">
                      <LiaMobileAltSolid className="text-2xl me-1 text-gray-500" />
                      <span className="ml-2">
                        <a href={`tel:${phoneNumber2}`}>{phoneNumber2}</a>
                      </span>
                    </div>
                  )}
                  {landLine && (
                    <div className="flex items-center">
                      <GiRotaryPhone className="text-2xl me-1 text-gray-500" />
                      <span className="ml-2">
                        <a href={`tel:${landLine}`}>{landLine}</a>
                      </span>
                    </div>
                  )}
                  {arAddress || enAddress && (
                    <div className="flex items-center">
                      <IoLocationSharp className="text-2xl me-1 text-gray-500" />
                      <span className="ml-2">
                        <span>{lang === "ar" ? arAddress : enAddress}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {/* FAST ACCESS */}
              <div className="lg:col-span-5 space-y-6 mt-8 lg:mt-0 flex flex-col">
                <div className="text-lg xl:text-[18px] xl:leading-6 font-bold self-center">{tMenu.fast_access}</div>
                <div className="font-light space-y-4 text-md md:text-sm">
                  <div className="flex items-center">
                    <Link href={`/${lang}`}>
                      <span className="ml-2">{tMenu.home}</span>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link href={`/${lang}/our-services`}>
                      <span className="ml-2">{tMenu.our_services}</span>
                    </Link>
                  </div>
                  <div className="flex items-center">
                    <Link href={`/${lang}/about-us`}>
                      <span className="ml-2">{tMenu.about_us}</span>
                    </Link>
                  </div>
                  {/* <div className="flex items-center">
                    <Link href={`/${lang}/news`}>
                      <span className="ml-2">{tMenu.news}</span>
                    </Link>
                  </div> */}
                  <div className="flex items-center">
                    <Link href={`/${lang}/jobs`}>
                      <span className="ml-2">{tMenu.jobs}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
