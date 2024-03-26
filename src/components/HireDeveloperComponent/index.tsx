import React from "react";
import { contactCards } from "../ContactUsComponent";
import { ContactCards } from "../ContactUsComponent/ContactCards";

interface HireDeveloper {
	description: string;
	title: string;
	tags: string[];
}

const hireDeveloper: HireDeveloper = {
	description:
		"We provide an exceptional service for sourcing high-quality talent to meet your software development requirements. With a team of proficient developers, we cover various domains such as web and mobile app development, AI, machine learning, blockchain, and beyond.",
	title: "Hire Developer",
	tags: [
		"Angular",
		"NextJS",
		"ReactJS",
		"NextJS",
		"ExpressJS",
		"Strapi",
		"PostgreSQL",
		"MongoDB",
		"DocumentDB",
		"Git",
		"Bitbucket",
		"Microsoft",
	],
};

const HireDeveloperComponents = () => {
	return (
		<div
			className={`container h-auto grid gap-5 grid-cols-10 items-start my-10 max-sm:px-5`}
		>
			<div
				className={`col-span-6 max-lg:col-span-full h-auto grid grid-cols-1 gap-3`}
			>
				<h1
					className={`w-full h-auto text-3xl font-bold text-primary-fg font-mont  relative after:w-16 after:h-1 after:content-[''] after:absolute after:rounded-full after:bg-red-500 after:left-0 after:-bottom-1`}
				>
					{hireDeveloper.title}
				</h1>
				<span className={`text-primary-fg w-full font-mont`}>
					{hireDeveloper.description}
				</span>
				<div
					className={`w-full h-auto flex justify-start items-start gap-2 flex-wrap`}
				>
					{hireDeveloper.tags.map((key: string, index: number) => {
						return (
							<SkillsCards
								key={key + "-" + index}
								title={key}
								tags={key}
							/>
						);
					})}
				</div>
				<div
					className={`w-full h-auto mt-5 max-lg:col-span-full grid grid-cols-2 max-sm:grid-cols-1 gap-5 bg-secondary-bg p-5 rounded-md`}
				>
					{contactCards?.map((items: any, index: number) => (
						<ContactCards
							key={items.text + "-" + index}
							text={items.text}
							icons={items.icons}
						/>
					))}
				</div>
			</div>
			<div
				className={`col-span-4 max-lg:col-span-full h-full w-full grid grid-cols-1 gap-1`}
			>
				<h1
					className={`w-full h-auto text-2xl font-bold text-primary-fg font-mont  relative after:w-20 after:h-1 after:content-[''] after:absolute after:rounded-full after:bg-red-500 after:left-0 after:-bottom-1`}
				>
					Tell us About You
				</h1>
				<span className={`text-sm font-mont text-secondary-fg mt-2`}>
					Please provide the details of your project to help us gain a
					clear understanding.
				</span>
				<HireDeveloperForm />
			</div>
		</div>
	);
};

export default HireDeveloperComponents;

export interface IProps {
	title: string;
	tags: string;
}
export const SkillsCards = ({ title, tags }: IProps) => {
	return (
		<span className={`px-3 rounded-full bg-secondary-bg text-primary-fg font-mont`}>
			{tags}
		</span>
	);
};

export const HireDeveloperForm = () => {
	return (
		<form className={`w-full h-auto grid grid-cols-1 gap-3 mt-3`}>
			<input
				type="text"
				className={`w-full h-auto px-4 py-3 text-primary-fg text-sm font-mont rounded placeholder:text-secondary-fg bg-secondary-bg`}
				placeholder="Full Name"
			/>
			<input
				type="email"
				className={`w-full h-auto px-4 py-3 text-primary-fg text-sm font-mont rounded placeholder:text-secondary-fg bg-secondary-bg`}
				placeholder="Email ID"
			/>
			<input
				type="text"
				className={`w-full h-auto px-4 py-3 text-primary-fg text-sm font-mont rounded placeholder:text-secondary-fg bg-secondary-bg`}
				placeholder="Phone No"
			/>
			<input
				type="text"
				className={`w-full h-auto px-4 py-3 text-primary-fg text-sm font-mont rounded placeholder:text-secondary-fg bg-secondary-bg`}
				placeholder="First Name"
			/>
			<select
				className={`w-full h-auto px-4 py-3 text-primary-fg text-sm font-mont rounded placeholder:text-secondary-fg bg-secondary-bg`}
			>
				{[
					"Select for looking hire",
					"Full Time",
					"Part Time",
					"Other",
				].map((items: string, index: number) => {
					return (
						<option value={items} key={items + "-" + index}>
							{items}
						</option>
					);
				})}
			</select>
			<select
				className={`w-full h-auto px-4 py-3 text-primary-fg text-sm font-mont rounded placeholder:text-secondary-fg bg-secondary-bg`}
			>
				{[
					"Select Looking For",
					"Frontend",
					"Backend",
					"FullStack",
					"Other",
				].map((items: string, index: number) => {
					return (
						<option value={items} key={items + "-" + index}>
							{items}
						</option>
					);
				})}
			</select>
			<textarea
				className={`w-full h-20 font-mont text-primary-fg p-3 px-4 rounded outline-none bg-secondary-bg placeholder:text-secondary-fg`}
				placeholder="Project description"
			></textarea>
			<label className="block">
				<span className="sr-only">Choose profile photo</span>
				<input
					type="file"
					className="block w-full bg-secondary-bg h-10 text-sm text-primary-fg font-mont rounded
			file:h-full file:py-2 file:px-4
			file:rounded file:border-0
			file:text-sm file:bg-primary-fg file:text-primary-bg"
				/>
			</label>

			<button
				className={`w-full h-auto flex justify-center items-center bg-primary-fg text-primary-bg p-3 rounded font-bold`}
			>
				Submit
			</button>
		</form>
	);
};
