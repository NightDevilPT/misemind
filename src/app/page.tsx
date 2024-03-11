import BannerFrame from "@/components/Banner";
import ServiceComponent from "@/components/ServiceComponent";
import React from "react";

const page = () => {
	return (
		<div className="relative">
			<BannerFrame />
      <ServiceComponent />
		</div>
	);
};

export default page;
