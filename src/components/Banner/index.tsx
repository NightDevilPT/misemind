"use client";

import React, { useEffect, useState } from "react";
import BannerSection from "./BannerSection";
import { useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";

const BannerFrame = () => {
	const [currentIndex, setCurrentIndex] = useState<number>(0);
	const { data } = useAppSelector((state: RootState) => state.changeLanguage);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	const updateSlider = () => {
		const newPosition = -currentIndex * 100 + "%";
		return { transform: `translateX(${newPosition})` };
	};
	return (
		<div className="w-full h-auto relative">
			<section
				className={`w-full h-[700px] flex transition-all duration-500`}
				style={updateSlider()}
			>
				{data?.banner?.map((items: any, index: number) => {
					return (
						<BannerSection
							key={items.title + "-" + index}
							index={index}
							title={items.title}
							subtitle={items.subtitle}
							align={index % 2 === 0 ? "left" : "right"}
						/>
					);
				})}
			</section>
			<div
				className={`absolute left-0 bottom-0 h-3 w-full z-40 gradient-bg`}
			></div>
		</div>
	);
};

export default BannerFrame;
