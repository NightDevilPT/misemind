import React from "react";

interface IProps {
	title: string;
	subtitle: string;
	icons: any;
}

const CoreValueCards = ({ title, icons, subtitle }: IProps) => {
	return (
		<div className={`w-full h-auto flex justify-start items-start gap-5`}>
			<div className={`w-12 h-12 text-[#22c55e]`}>{icons}</div>
			<div className={`flex-1 grid grid-cols-1 gap-3`}>
				<h1
					className={`text-xl font-mont font-bold text-primary-fg relative after:w-16 after:h-1 after:content-[''] after:absolute after:rounded-full after:bg-red-500 after:left-0 after:-bottom-1`}
				>
					{title}
				</h1>
				<span className={`text-sm font-mont text-secondary-fg`}>
					{subtitle}
				</span>
			</div>
		</div>
	);
};

export default CoreValueCards;
