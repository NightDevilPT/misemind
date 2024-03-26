import React from "react";
import Image from "next/image";
import service from "../../assets/empowering.jpg";
import Link from "next/link";
interface IProps {
	title: string;
}

const PageBanner = ({ title }: IProps) => {
	return (
		<div className={`w-full h-96 overflow-hidden relative`}>
			<Image src={service} alt="page-banner" className="absolute left-0 top-0 w-full h-full object-cover" />
			<div className={`w-full h-full bg-slate-950/80 absolute left-0 top-0`}></div>
			<div className={`w-full h-full bg-gradient-to-b from-transparent to-slate-950 absolute left-0 top-0`}>
				<div className={`container w-full h-full flex justify-center items-center flex-col`}>
					<h1 className={`text-3xl font-bold font-mont text-slate-300 capitalize`}>{title}</h1>
					<span className={`text-base text-slate-300 flex justify-center items-center gap-2 capitalize`}>
						<Link className={` hover:text-highlight transition-all duration-300 font-mont`} href={'/'}>Home</Link>
						<span>{'>>'}</span>
						<span className=" font-mont">{title}</span>
					</span>
				</div>
			</div>
			<div
				className={`absolute left-0 bottom-0 h-3 w-full z-40 gradient-bg`}
			></div>
		</div>
	);
};

export default PageBanner;
