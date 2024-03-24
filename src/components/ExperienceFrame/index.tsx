import React from "react";
import ExperienceCard from "./ExperienceCard";

export const experienceCard = {
	title: "",
	subtitle: "",
	card: [
		{
			title: 10,
			subtitle: "projects completed",
		},
		{
			title: 16,
			subtitle: "workers employed",
		},
		{
			title: 3,
			subtitle: "awards winning",
		},
		{
			title: 10,
			subtitle: "satisfied customers",
		},
	],
};

const ExperienceFrame = () => {
	return (
		<section className={`w-full h-auto my-4 text-slate-50`}>
			<div
				className={`container py-12 bg-secondary-bg rounded max-sm:px-5 h-auto flex justify-between items-center gap-16 max-md:flex-col shadow-xl shadow-slate-900/20 max-sm:shadow-none max-lg:flex-col`}
			>
				<div className="w-full h-auto flex justify-center items-center gap-5 flex-col pl-5">
					<h1
						className={`w-full h-auto font-mont text-3xl text-primary-fg`}
					>
						More than 3 years of experience
					</h1>
					<h3
						className={`w-full h-auto font-mont text-base text-secondary-fg`}
					>
						Our commitment to excellence ensures unmatched support
						and customer satisfaction.
					</h3>
				</div>
				<div
					className={`w-full h-auto grid grid-cols-2 grid-rows-2 gap-6 max-[530px]:flex max-[530px]:items-start max-[530px]:justify-start max-[530px]:flex-col max-[530px]:gap-10`}
				>
					{experienceCard.card.map((items: any, index: number) => (
						<ExperienceCard
							key={items.title + "-" + index}
							title={items.title}
							subtitle={items.subtitle}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default ExperienceFrame;
