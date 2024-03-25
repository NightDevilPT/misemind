import HeadingComponent from "@/components/HeadingComponent";
import PageBanner from "@/components/PageBanner";
import aboutus from "../../assets/aboutus.jpg";
import React from "react";
import Image from "next/image";
import WhyChoseComponent from "@/components/WhyChoseComponent";
import OurCoreValueComponent from "@/components/OurCoreValuesComponent";

const page = () => {
	return (
		<div className={`w-full h-auto`}>
			<PageBanner title="About us" />
			<AboutUs />
			<WhyChoseComponent />
			<OurCoreValueComponent />
		</div>
	);
};

export default page;

const AboutUs = () => {
	return (
		<div className={`w-full h-auto my-10`}>
			<div className={`container h-auto grid grid-cols-1 gap-5 max-sm:px-5`}>
				<div
					className={`w-full flex justify-start items-start max-lg:grid max-lg:grid-cols-1 gap-5`}
				>
					<div
						className={`w-80 max-lg:w-full max-h-72 max-lg:overflow-hidden h-auto border-2 border-[#22c55e] rounded`}
					>
						<Image
							src={aboutus}
							alt="about-us"
							className={`w-full h-full object-contain max-lg:object-cover rounded`}
						/>
					</div>
					<div className={`flex-1 h-auto grid grid-cols-1 gap-5`}>
						<span
							className={`text-base font-mont italic text-primary-fg`}
						>
							“Welcome to MISEMIND, where technology meets
							innovation to shape the future of businesses. With a
							relentless passion for technology, we are a
							dedicated team of experts on a mission to empower
							organizations with transformative IT solutions. Our
							journey is fueled by a commitment to excellence, a
							deep understanding of industry dynamics, and a
							vision to lead businesses towards unparalleled
							success in the digital era. Join us on this
							exhilarating voyage of innovation, collaboration,
							and technological empowerment.”
						</span>
						<span
							className={`w-full h-auto p-4 border-l-4 bg-secondary-bg text-primary-fg border-[#22c55e] italic font-mont text-base`}
						>
							Misemind continues to grow everyday thanks to the
							confidence our clients have in us. We cover many
							industries such as financial, energy, business
							services, consumer products.
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};
