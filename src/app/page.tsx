import BannerFrame from "@/components/Banner";
import ExperienceFrame from "@/components/ExperienceFrame";
import HowItWorksComponent from "@/components/HowItWorksComponent";
import ServiceComponent from "@/components/ServiceComponent";
import TechnologyComponent from "@/components/TechnologyComponent";
import React from "react";

const page = () => {
	return (
		<div className="relative">
			<BannerFrame />
			<TechnologyComponent />
			<ServiceComponent />
			<HowItWorksComponent />
			<ExperienceFrame />
		</div>
	);
};

export default page;
