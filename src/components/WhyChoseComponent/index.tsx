import React from "react";
import WhyChooseCards from "./WhyChooseCard";
import { BsFillBriefcaseFill, BsGraphUpArrow } from "react-icons/bs";
import { FaAward, FaWhmcs } from "react-icons/fa6";
import HeadingComponent from "../HeadingComponent";

const whyChooseCards = {
	title: "Why Choose Us",
	cards: [
		{
			title: "Expertise",
			subtitle:
				"Our team of designers, developers, and strategists collaborate to ensure your website's success",
			icon: <FaAward className={`w-full h-full`} />,
		},
		{
			title: "Efficiency",
			subtitle:
				"With all services under one roof, communication is streamlined, leading to quicker results.",
			icon: <BsFillBriefcaseFill className={`w-full h-full`} />,
		},
		{
			title: "Customization",
			subtitle:
				"We tailor our solutions to your unique needs, ensuring your website reflects your brand identity.",
			icon: <FaWhmcs className={`w-full h-full`} />,
		},
		{
			title: "Results-Driven",
			subtitle:
				"Our focus is on creating web solutions that drive engagement, conversions, and growth.",
			icon: <BsGraphUpArrow className={`w-full h-full`} />,
		},
	],
};

const WhyChoseComponent = () => {
	return (
		<div className={`container h-auto max-sm:px-5 my-5`}>
			<HeadingComponent title="Why choose us" />
			<div
				className={`grid grid-cols-4 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5 mt-5`}
			>
				{whyChooseCards?.cards?.map((items: any, index: number) => (
					<WhyChooseCards
						key={items.title + "-" + index}
						icons={items.icon}
						title={items.title}
						subtitle={items.subtitle}
					/>
				))}
			</div>
		</div>
	);
};

export default WhyChoseComponent;
