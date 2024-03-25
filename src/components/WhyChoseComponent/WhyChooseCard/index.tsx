import React from "react";

interface IProps {
	title: string;
	subtitle: string;
	icons: any;
}

const WhyChooseCards = ({ title, subtitle, icons }: IProps) => {
	return (
		<div
			className={`w-full h-auto p-5 rounded bg-secondary-bg text-primary-fg flex justify-start items-start gap-3 hover:shadow-md hover:shadow-slate-950/20 transition-all duration-300 flex-col`}
		>
			<div
				className={`w-12 min-w-12 h-auto p-3 rounded-full bg-[#22c55e] flex justify-center items-center text-slate-950`}
			>
				{icons}
			</div>
			<div className={`w-auto h-auto grid grid-cols-1 gap-1`}>
				<h1
					className={`text-xl font-mont font-bold relative after:w-14 after:h-1 after:content-[''] after:absolute after:rounded-full after:bg-red-500 after:left-0 after:-bottom-[4px]`}
				>
					{title}
				</h1>
				<span className={`mt-2 text-sm font-mont`}>{subtitle}</span>
			</div>
		</div>
	);
};

export default WhyChooseCards;
