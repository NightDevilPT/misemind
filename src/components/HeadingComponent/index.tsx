import React from "react";

interface IProps {
	title: string;
	subtitle?: string;
}

const HeadingComponent = ({ title, subtitle }: IProps) => {
	return (
		<React.Fragment>
			<h1
				className={`h-auto font-bold text-4xl max-md:text-3xl text-center text-primary-fg font-mont`}
			>
				{title}
			</h1>
			{subtitle ? (
				<h4
					className={`text-base font-bold text-center max-md:text-sm text-green-600 font-mont`}
				>
					{subtitle}
				</h4>
			) : (
				""
			)}
		</React.Fragment>
	);
};

export default HeadingComponent;
