import Image from "next/image";
import {
  PiFacebookLogoFill,
  PiEnvelopeSimple,
  PiInstagramLogoFill,
  PiLinkedinLogoFill,
  PiTwitterLogoFill,
  PiYoutubeLogoFill,
} from "react-icons/pi";
import LocationMap from "./locationMap";
import Link from "next/link";
import { LiaMobileAltSolid } from "react-icons/lia";
import { MdAlternateEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { GiRotaryPhone } from "react-icons/gi";

const Footer = () => {
  const social = [
    {
      id: 1,
      path: "https://www.facebook.com/",
      image: "/assets/social/facebook.svg",
      name: "facebook",
      width: 20,
      height: 20,
    },
    {
      id: 2,
      path: "https://twitter.com/",
      image: "/assets/social/twitter.svg",
      name: "twitter",
      width: 20,
      height: 20,
    },
    {
      id: 3,
      path: "https://www.instagram.com/",
      image: "/assets/social/instagram.svg",
      name: "instagram",
      width: 20,
      height: 20,
    },
    {
      id: 4,
      path: "https://www.youtube.com/",
      image: "/assets/social/youtube.svg",
      name: "youtube",
      width: 20,
      height: 20,
    },
  ];

  return (
    <div className="border-t border-gray-200 mt-10">
      <div className="container my-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 md:px-0">
          {/* MAP */}
          <div className="lg:col-span-8">
            <div className="lg:grid lg:grid-cols-12">
              <div className="lg:col-span-8">
                <LocationMap />
              </div>
              {/* LOGO */}
              <div className="lg:col-span-4 pt-4 flex items-center justify-center lg:justify-center lg:items-center">
                <div className="flex flex-col items-center space-x-2">
                  <Link href="/">
                    <Image
                      src="/logos/777-guards-logo.jpeg"
                      width={150}
                      height={150}
                      alt="logo"
                      className="w-18 pb-3"
                    />
                  </Link>
                  {/* <div className="flex space-x-2">
                    <PiInstagramLogoFill className="text-2xl text-gray-500" />
                    <PiTwitterLogoFill className="text-2xl text-gray-500" />
                    <PiFacebookLogoFill className="text-2xl text-gray-500" />
                    <PiYoutubeLogoFill className="text-2xl text-gray-500" />
                    <PiLinkedinLogoFill className="text-2xl text-gray-500" />
                  </div> */}

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
          <div className="lg:col-span-4">
            <div className="lg:grid lg:grid-cols-12">
              <div className="lg:col-span-6 space-y-6 mt-8 lg:mt-0">
                <div className="text-lg  xl:text-[18px] xl:leading-6 font-bold">Call us</div>
                <div className="font-light space-y-4 text-sm">
                  <div className="flex items-center">
                    <MdAlternateEmail className="text-2xl text-gray-500" />
                    <span className="ml-2">test@mail.com</span>
                  </div>
                  <div className="flex items-center">
                    <FiPhone className="text-2xl text-gray-500" />
                    <span className="ml-2">01069963165</span>
                  </div>
                  <div className="flex items-center">
                    <LiaMobileAltSolid className="text-2xl text-gray-500" />
                    <span className="ml-2">01069963165</span>
                  </div>
                  <div className="flex items-center">
                    <GiRotaryPhone className="text-2xl text-gray-500" />
                    <span className="ml-2">01069963165</span>
                  </div>
                </div>
              </div>
              {/* FAST ACCESS */}
              <div className="lg:col-span-6 space-y-6 mt-8 lg:mt-0">
                <div className="text-lg xl:text-[18px] xl:leading-6 font-bold">FAST ACCESS</div>
                <div className="font-light space-y-4 text-sm">
                  <div className="flex items-center">
                    <span className="ml-2">Home</span>
                  </div>
                  <div className="flex items-center">
                    <span className="ml-2">About 777-guards</span>
                  </div>
                  <div className="flex items-center">
                    <span className="ml-2">News</span>
                  </div>
                  <div className="flex items-center">
                    <span className="ml-2">Our companies</span>
                  </div>
                  <div className="flex items-center">
                    <span className="ml-2">Jobs</span>
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
