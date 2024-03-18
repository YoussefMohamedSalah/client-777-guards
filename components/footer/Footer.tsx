import Image from "next/image";
import LocationMap from "./locationMap";
import Link from "next/link";
import { LiaMobileAltSolid } from "react-icons/lia";
import { MdAlternateEmail } from "react-icons/md";
import { GiRotaryPhone } from "react-icons/gi";

interface Props {
	tMenu: any;
	lang: string;
}

const Footer = ({ tMenu, lang }: Props) => {

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
								<div className="text-lg  xl:text-[18px] xl:leading-6 font-bold" >{tMenu.contacts}</div>
								<div className="font-light space-y-4 text-sm">
									<div className="flex items-center">
										<MdAlternateEmail className="text-2xl me-1 text-gray-500" />
										<span className="ml-2">
											<a href="mailto:threesevensguards777@gmail.com">threesevensguards777</a>
										</span>
									</div>
									<div className="flex items-center">
										<LiaMobileAltSolid className="text-2xl me-1 text-gray-500" />
										<span className="ml-2">
											<a href="tel:01098884593">01098884593</a>
										</span>
									</div>
									<div className="flex items-center">
										<LiaMobileAltSolid className="text-2xl me-1 text-gray-500" />
										<span className="ml-2">
											<a href="tel:01000131662">01000131662</a>
										</span>
									</div>
									<div className="flex items-center">
										<GiRotaryPhone className="text-2xl me-1 text-gray-500" />
										<span className="ml-2">
											<a href="tel:0223820622">0223820622</a>
										</span>
									</div>
								</div>
							</div>
							{/* FAST ACCESS */}
							<div className="lg:col-span-6 space-y-6 mt-8 lg:mt-0">
								<div className="text-lg xl:text-[18px] xl:leading-6 font-bold">{tMenu.fast_access}</div>
								<div className="font-light space-y-4 text-sm">
									<div className="flex items-center">
										<Link href="/">
											<span className="ml-2">{tMenu.home}</span>
										</Link>
									</div>
									<div className="flex items-center">
										<Link href="/about-us">
											<span className="ml-2">{tMenu.about_us}</span>
										</Link>
									</div>
									<div className="flex items-center">
										<Link href="/news">
											<span className="ml-2">{tMenu.news}</span>
										</Link>
									</div>
									<div className="flex items-center">
										<Link href="/our-companies">
											<span className="ml-2">{tMenu.our_services}</span>
										</Link>
									</div>
									<div className="flex items-center">
										<Link href="/jobs">
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
