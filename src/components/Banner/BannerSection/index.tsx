import React, { useEffect } from "react";
import idea from "../../../assets/ideas.jpg";
import empowering from "../../../assets/empowering.jpg";
import solution from "../../../assets/solution.jpg";
import vission from "../../../assets/vission.jpg";
import Image, { StaticImageData } from "next/image";

interface IProps {
	align: "left" | "right";
	index: number;
	title: string;
	subtitle: string;
}

const BannerSection = ({ align, index, title, subtitle }: IProps) => {
	const images: StaticImageData[] = [idea, empowering, solution, vission];

	return (
		<div
			className={`w-full min-w-full h-full flex justify-center items-center relative`}
		>
			<Image
				src={images[index]}
				alt="Banner image"
				className={`w-full h-full object-cover absolute left-0`}
			/>
			<div
				className={`w-[100%] h-full absolute left-0 top-0 ${
					align === "left" ? "bg-gradient-to-r" : "bg-gradient-to-l"
				} from-slate-950 via-slate-950/80 to-transparent`}
			></div>
			<div
				className={`container relative z-10 flex justify-center max-sm:px-5 ${
					align === "left" ? "items-start" : "items-end"
				} flex-col gap-3`}
			>
				<h1
					className={`text-5xl max-lg:text-3xl text-slate-300 w-[70%] max-lg:w-[80%] max-md:w-full ${
						align === "left" ? "text-left" : "text-right"
					}`}
				>
					{title}
				</h1>
				<div
					className={`w-32 h-[6px] relative -top-2 rounded bg-green-600`}
				/>
				<span
					className={`text-xl max-lg:text-base max-sm:text-sm text-slate-300 w-[90%] max-lg:w-[90%] max-md:w-full ${
						align === "left" ? "text-left" : "text-right"
					}`}
				>
					{subtitle}
				</span>
				<button
					className={`px-5 py-2 rounded border-2 border-slate-100 text-slate-100 font-bold hover:border-slate-200 hover:bg-slate-200 transition-all duration-300 hover:text-slate-900`}
				>
					Contact Us
				</button>
			</div>
		</div>
	);
};

export default BannerSection;
