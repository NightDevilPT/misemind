"use client";

import { useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";
import React from "react";
import ServiceComponents from "./ServiceComp";
import HeadingComponent from "../HeadingComponent";

interface IProps {
	showTitle?: boolean;
}

const ServiceComponent = ({ showTitle = false }: IProps) => {
	const { data } = useAppSelector((state: RootState) => state.changeLanguage);
	return (
		<section className={`w-full h-auto py-5`}>
			<div className="container max-sm:px-5 h-auto flex justify-center items-center flex-col py-1">
				{showTitle && (
					<HeadingComponent
						title={data?.service.heading}
						subtitle={data?.service?.subHeading}
					/>
				)}
				<div className="w-full h-auto mt-7 grid grid-cols-3 max-xl:grid-cols-2 max-md:grid-cols-1 gap-5">
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
