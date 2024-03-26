"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

interface IProps {
	image: any;
	title: string;
	description: string;
}

const TechnologyCard = ({ image, title, description }: IProps) => {

	return (
		<div
			className={`relative h-auto p-4 rounded bg-secondary-bg hover:shadow-lg hover:shadow-slate-700/10 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer flex justify-start items-center gap-2 max-sm:justify-center max-sm:item-center`}
		>
			<img
				src={image}
				className={` w-10 h-10 object-contain`}
				alt="Technology-Card"
			/>
			<h3 className={`text-base font-bold max-sm:hidden text-primary-fg font-mont`}>{title}</h3>
		</div>
	);
};

export default TechnologyCard;
