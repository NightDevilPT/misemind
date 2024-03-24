import React from "react";

interface IProps {
	align: string;
	title: string;
	subtitle: string;
	index: number;
	last: boolean;
}

const HowItWorkCard = ({ align, title, subtitle, index, last }: IProps) => {
	return (
		<div
			className={`w-full h-auto grid grid-cols-1 bg-secondary-bg text-primary-fg rounded-md p-4 cursor-pointer hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300`}
		>
			<div className={`h-auto text-4xl font-bold font-mont text-[#16a34a]`}>0{index}</div>
			<span className={`w-11 h-1 rounded bg-red-500`}></span>
			<div className={`flex-1 h-auto grid grid-cols-1 mt-2`}>
				<h1 className={`text-2xl font-mont text-[#16a34a] font-bold`}>{title}</h1>
				<span className={`text-sm font-mont line-clamp-5`}>{subtitle}</span>
			</div>
		</div>
	);
};

export default HowItWorkCard;
