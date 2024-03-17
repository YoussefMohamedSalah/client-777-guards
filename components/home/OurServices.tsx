"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const tabs = [
	{
		id: 1,
		name: "Facility protection.",
		image: "/images/sample.jpeg",
	},
	{
		id: 2,
		name: "Personal protection.",
		image: "/images/sample.jpeg",
	},
	{
		id: 3,
		name: "Support, intervention and security consultations.",
		image: "/images/sample.jpeg",
	},
	{
		id: 4,
		name: "Industrial security.",
		image: "/images/sample.jpeg",
	},
	{
		id: 5,
		name: "Public event security.",
		image: "/images/sample.jpeg",
	},
	{
		id: 6,
		name: "Women's security.",
		image: "/images/sample.jpeg",
	},
	{
		id: 7,
		name: "Guard dogs.",
		image: "/images/sample.jpeg",
	},
	{
		id: 8,
		name: "Training in safety and occupational health.",
		image: "/images/sample.jpeg",
	},
];

const OurServices = () => {
	const ref = useRef(null);
	const [activeTab, setActiveTab] = useState(tabs[0]);
	const isSmallScreen = useMediaQuery({ maxWidth: 767 });

	return (
		<div className="md:items-center flex container">
			{isSmallScreen ? (
				<div className="xl:px-8">
					<div className="flex flex-col md:row-span-1 gap-2 xl:gap-6 mt-8 xl:px-0">
						<p className="text-2xl pt-4 text-start mx-auto">Our services contain.</p>
						{tabs.map((tab, index: number) => (
							<motion.div
								key={index}
								className={`flex p-1 md:p-8 cursor-pointer
                ${activeTab.id === tab.id
										? "rounded-md md:rounded-xl bg-[#f6f5f4] md:bg-white border-gray-200 md:border"
										: "md:bg-[#f6f5f4] rounded-md xl:rounded-xl items-start justify-start hover:bg-[#eae7e7] "
									} `}
								onClick={() => setActiveTab(tab)}>
								<div className="flex flex-col items-start md:justify-start">
									<div className="font-medium text-sm xl:text-lg">{tab.name}</div>
								</div>
							</motion.div>
						))}
					</div>

					{/* Display content based on the active tab */}
					<div className="pt-6 md:py-10 lg:px-16 xl:px-0 md:px-16 w-full ">
						{activeTab && (
							<div className=" flex justify-center items-center flex-col  ">
								<Image
									className="w-full border rounded-xl"
									src={activeTab.image}
									width={1025}
									height={500}
									alt="logo"
								/>
							</div>
						)}
					</div>
				</div>
			) : (
				<div className="flex flex-col xl:space-x-4 items-start justify-between hover:cursor-pointer gap-4 w-4/5 xl:w-3/4 2xl:w-[55%]">
					<p className="text-2xl pt-4 text-start mx-auto">Our services contain.</p>
					{tabs.map((tab, index: number) => (
						<motion.div
							key={index}
							className={`xl:flex justify-start space-x-4 xl:mt-4 sm:my-10 xl:my-0 ${activeTab === tab ? "text-[#001b96]" : "text-black m"}`}
							onMouseEnter={() => setActiveTab(tab)}
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 1,
								delay: index * 0.1,
							}}>
							<div className="px-4">
								<motion.div
									className="flex flex-col text-sm"
									initial={{ x: 0 }}
									animate={{ x: activeTab === tab ? 25 : 10 }}
									transition={{ duration: 0.2 }}>
									<div>
										{/* Only animate the name */}
										<motion.div
											initial={{ opacity: 0, x: 10 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ duration: 0.3 }}>
											{tab.name}
										</motion.div>
									</div>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			)}

			{/* Display content based on the active tab */}
			<div className="hidden md:flex py-10 px-8 md:px-0 lg:w-3/4 2xl:w-[55%]">
				{activeTab && (
					<div className=" md:flex  items-center justify-center space-x-6 hover:cursor-pointer w-full">
						<Image
							className="w-full shadow-md rounded-xl bg-[#f6f5f4]"
							src={activeTab.image}
							width={500}
							height={500}
							alt="logo"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default OurServices;
