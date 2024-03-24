'use client'

import Image from "next/image";
import React from "react";

interface IProps {
	image: any;
	title: string;
	description: string;
}

const TechnologyCard = ({ image, title, description }: IProps) => {
	return (
		<div
			className={`h-auto p-4 rounded bg-secondary-bg hover:shadow-lg hover:shadow-slate-700/10 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer flex justify-start items-start gap-2 flex-col`}
		>
			<img src={image} className={` w-16 h-16 max-md:w-12 max-md:h-12 object-contain`} alt="Technology-Card" />
			<h3 className={`text-base font-bold text-primary-fg`}>{title}</h3>
			<h5 className={`text-xs text-secondary-fg`}>{description}</h5>
		</div>
	);
};

export default TechnologyCard;
