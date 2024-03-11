import Link from "next/link";
import React from "react";

import {
	FaFacebookF,
	FaInstagram,
	FaYoutube,
	FaGithub,
	FaLinkedin,
} from "react-icons/fa6";

import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import HeaderLogo from "../Header/Logo";


const FooterFrame = () => {
	return (
		<section className={`w-full pt-16 bg-slate-950`}>
			<div className={`container relative h-auto grid grid-cols-[repeat(auto-fit,_minmax(220px,1fr))] max-lg:grid-cols-[repeat(auto-fit,_minmax(300px,1fr))] gap-5 max-sm:px-5 pb-24`}>

				<div className={`w-full h-auto flex justify-start items-start flex-col gap-4`} >
					<HeaderLogo />
					<div
						className={`w-full h-auto flex justify-start items-center flex-wrap gap-2`}
					>
						<Link href={"/"} className={`w-6 h-6 p-1 rounded hover:bg-green-500 hover:text-slate-900 transition-all duration-300 text-slate-50`}>
							<FaFacebookF className={`w-full h-full`} />
						</Link>
						<Link href={"/"} className={`w-6 h-6 p-1 rounded hover:bg-green-500 hover:text-slate-900 transition-all duration-300 text-slate-50`}>
							<FaInstagram className={`w-full h-full`} />
						</Link>
						<Link href={"/"} className={`w-6 h-6 p-1 rounded hover:bg-green-500 hover:text-slate-900 transition-all duration-300 text-slate-50`}>
							<FaGithub className={`w-full h-full`} />
						</Link>
						<Link href={"/"} className={`w-6 h-6 p-1 rounded hover:bg-green-500 hover:text-slate-900 transition-all duration-300 text-slate-50`}>
							<FaLinkedin className={`w-full h-full`} />
						</Link>
						<Link href={"/"} className={`w-6 h-6 p-1 rounded hover:bg-green-500 hover:text-slate-900 transition-all duration-300 text-slate-50`}>
							<FaYoutube className={`w-full h-full`} />
						</Link>
					</div>
				</div>

				<div className={`w-full h-auto flex justify-start items-start flex-col gap-10`} >
					<h3 className={`text-xl text-slate-50 font-bold`}>
						Quick Links
					</h3>
					<div className={`w-full h-auto flex-col flex justify-start items-start gap-2`} >
						<Link
							href={"/"}
							className={`text-xs text-slate-100 hover:text-green-500 transition-all duration-300`}
						>
							Company Overview
						</Link>
						<Link
							href={"/"}
							className={`text-xs text-slate-100 hover:text-green-500 transition-all duration-300`}
						>
							Company History
						</Link>
						<Link
							href={"/"}
							className={`text-xs text-slate-100 hover:text-green-500 transition-all duration-300`}
						>
							Our Approach
						</Link>
						<Link
							href={"/"}
							className={`text-xs text-slate-100 hover:text-green-500 transition-all duration-300`}
						>
							Apply As Developer
						</Link>
					</div>
				</div>

				<div className={`w-full h-auto flex justify-start items-start flex-col gap-10`} >
					<h3 className={`text-xl text-slate-50 font-bold`}>
						Information
					</h3>
					<div
						className={`w-full h-auto flex-col flex justify-start items-start gap-2`}
					>
						<Link
							href={"/"}
							className={`text-xs text-slate-100 hover:text-green-500 transition-all duration-300`}
						>
							Hire Developer
						</Link>
					</div>
				</div>

				<div className={`w-full h-auto flex justify-start items-start flex-col gap-10`} >
					<h3 className={`text-xl text-slate-50 font-bold`}>
						Contact Details
					</h3>

					<div
						className={`w-full h-auto flex-col flex justify-start items-start gap-2`}
					>
						<div className={`w-full h-auto flex justify-start items-start cursor-pointer gap-2`}>
							<MdLocationPin className={`w-6 min-w-[24px] h-6 text-green-500`} />
							<span className={`text-xs text-slate-50`}>1105 A 11th Floor Pearls  Best Heights 2 NSP,  DELHI 110034 INDIA</span>
						</div>
						<div className={`w-full h-auto flex justify-start items-center cursor-pointer gap-2`}>
							<MdPhone className={`w-5 min-w-[20px] h-6 text-green-500`} />
							<span className={`text-xs text-slate-50`}>+91 -98689-08193</span>
						</div>
						<div className={`w-full h-auto flex justify-start items-center cursor-pointer gap-2`}>
							<MdEmail className={`w-5 min-w-[20px] h-6 text-green-500`} />
							<span className={`text-xs text-slate-50`}>info@misemind.com</span>
						</div>
					</div>
				</div>

				<div className={`absolute bottom-0 left-0 w-full text-center mt-16 bg-slate-950 text-slate-50 border-t-[1px] py-3 border-t-slate-700 text-xs`}>
					<span className={`text-green-500`}>Copyright © 2023</span> MISEMIND TECHNOLOGIES I POWERED BY MISEMIND TECHNOLOGIES
				</div>
			</div>
		</section>
	);
};

export default FooterFrame;
