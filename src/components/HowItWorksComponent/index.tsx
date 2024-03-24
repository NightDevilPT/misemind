"use client";

import { useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";
import React from "react";

import { MdContactMail } from "react-icons/md";
import HowItWorkCard from "./HowItWorkCard";
import HeadingComponent from "../HeadingComponent";

const HowItWorksComponent = () => {
	const { data } = useAppSelector((state: RootState) => state.changeLanguage);
	return (
		<section className={`w-full h-auto py-5 mt-5 font-mont`}>
			<div className=" container max-sm:px-5 h-auto flex justify-center items-center flex-col py-1">
				<HeadingComponent
					title={data?.howwework.title}
					subtitle={data?.howwework?.subTitle}
				/>
				<div
					className={`w-full h-auto relative mt-8 grid grid-cols-2 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5`}
				>
					{data?.howwework?.card?.map((items: any, index: number) => (
						<HowItWorkCard
							key={items.title + "-" + index}
							title={items.title}
							subtitle={items.description}
							align={index % 2 === 0 ? "right" : "left"}
							index={index + 1}
							last={index + 1 === data?.howwework?.card.length}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default HowItWorksComponent;
