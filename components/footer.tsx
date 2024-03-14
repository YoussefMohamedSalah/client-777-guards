import Image from "next/image";
import { PiFacebookLogoFill, PiInstagramLogo, PiInstagramLogoFill, PiLinkedinLogoFill, PiTwitterLogoFill, PiYoutubeLogoFill } from "react-icons/pi";
import LocationMap from "./locationMap";
import Link from "next/link"

const Footer = () => {
  return (
    <div className="border-t border-gray-200">
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
                  <div className="flex space-x-2">
                    <PiInstagramLogoFill className="text-2xl text-gray-500" />
                    <PiTwitterLogoFill className="text-2xl text-gray-500" />
                    <PiFacebookLogoFill className="text-2xl text-gray-500" />
                    <PiYoutubeLogoFill className="text-2xl text-gray-500" />
                    <PiLinkedinLogoFill className="text-2xl text-gray-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="lg:grid lg:grid-cols-12">
              <div className="lg:col-span-6 space-y-6 mt-8 lg:mt-0">
                <div className="font-medium">Call us</div>
                <div className="font-light space-y-4 text-sm">
                  <div>email</div>
                  <div>phone</div>
                  <div>mobile</div>
                  <div>land line</div>
                </div>
              </div>
              {/* FAST ACCESS */}
              <div className="lg:col-span-6 space-y-6 mt-8 lg:mt-0">
                <div className="font-medium">FAST ACCESS</div>
                <div className="font-light space-y-4 text-sm">
                  <div>Home</div>
                  <div>About 777-guards</div>
                  <div>News</div>
                  <div>Our companies</div>
                  <div>Jobs</div>
                </div>
              </div>
            </div>
          </div>
          {/* END */}
        </div>
      </div>
    </div>
  );
}

export default Footer;