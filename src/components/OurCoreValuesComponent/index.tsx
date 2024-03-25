import React from "react";
import HeadingComponent from "../HeadingComponent";

import { FaHandshake, FaUsers, FaAward } from "react-icons/fa";
import { PiBinocularsFill } from "react-icons/pi";
import { MdOutlineSecurity } from "react-icons/md";
import { HiLightBulb } from "react-icons/hi";
import CoreValueCards from "./CoreValueCard";

const coreValues = {
	cards: [
		{
			title: "Integrity Properties",
			subtitle:
				"The firm's 4,000 professionals help clients optimize their businesses, improve their operations and risk profile.",
			icons: <FaHandshake className={`w-full h-full`} />,
		},
		{
			title: "Long-Sightedness",
			subtitle:
				"ConsultingWP's thought leadership is evident in our agenda-setting books, white papers, research reports in the business press.",
			icons: <PiBinocularsFill className={`w-full h-full`} />,
		},
		{
			title: "Challenging Staff",
			subtitle:
				"Institute connects the firm with prominent leaders of the academic community for joint research on frontier issues.",
			icons: <FaUsers className={`w-full h-full`} />,
		},
		{
			title: "Privacy and Safety",
			subtitle:
				"Our capabilities and intellectual capital are enhanced by our deep industry expertise and hands-on, collaborative approach.",
			icons: <MdOutlineSecurity className={`w-full h-full`} />,
		},
		{
			title: "Quality Services",
			subtitle:
				"Our professionals see what others don't, challenge conventional thinking, and consistently deliver innovative solutions.",
			icons: <FaAward className={`w-full h-full`} />,
		},
		{
			title: "Innovation Solutions",
			subtitle:
				"We work side by side with senior executives to accelerate execution through a blend of analytical and management approaches.",
			icons: <HiLightBulb className={`w-full h-full`} />,
		},
	],
};

const OurCoreValueComponent = () => {
	return (
		<div className={`container h-auto max-sm:px-5 my-10`}>
			<HeadingComponent title="Our Core Values" />
			<div
				className={`w-full my-5 grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5`}
			>
				{coreValues?.cards?.map((items: any, index: number) => (
					<CoreValueCards
						key={items.title + "" + index}
						title={items.title}
						subtitle={items.subtitle}
						icons={items.icons}
					/>
				))}
			</div>
		</div>
	);
};

export default OurCoreValueComponent;
