"use client";

import { useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";
import React from "react";
import ServiceComponents from "./ServiceComp";

const ServiceComponent = () => {
	const { data } = useAppSelector((state: RootState) => state.changeLanguage);
	return (
		<section className={`w-full h-auto py-5 font-mont`}>
			<div className=" container max-sm:px-5 h-auto flex justify-center items-center flex-col py-1">
				<h1
					className={`h-auto font-bold text-4xl max-md:text-3xl text-center text-primary-fg`}
				>
					{data?.service.heading}
				</h1>
				<h4
					className={`text-base font-bold text-center max-md:text-sm text-green-600`}
				>
					{data?.service?.subHeading}
				</h4>
				<div className="w-full h-auto mt-7 grid grid-cols-[repeat(auto-fit,_minmax(380px,1fr))] max-lg:grid-cols-[repeat(auto-fit,_minmax(360px,1fr))] gap-5">
					{data?.service?.card.map((items: any, index: number) => (
						<ServiceComponents
							subTitle={items.subtitle}
							title={items.title}
							index={index}
							description={items.description}
							key={items.title + "_" + index}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceComponent;
