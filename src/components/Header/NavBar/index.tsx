import { useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IProps {
	showNav: boolean;
}

const NavbarFrame = ({ showNav }: IProps) => {
	const { data } = useAppSelector((state: RootState) => state.changeLanguage);
	const pathParams = usePathname();
	return (
		<div
			className={`w-auto h-auto max-lg:fixed right-5 top-16 max-lg:w-[calc(100%-40px)] text-slate-300
			 transition-all duration-300 ${
					showNav
						? "max-lg:h-60 max-lg:py-5 max-lg:text-slate-900"
						: "max-lg:h-0 max-lg:py-0"
				} max-lg:bg-slate-200 max-lg:shadow-xl max-lg:shadow-slate-950/30 max-lg:text-primary-bg rounded overflow-hidden`}
		>
			<nav
				className={`w-auto h-auto flex justify-center items-center gap-5 max-lg:flex-col`}
			>
				<Link href={"/"}>
					<button
						className={`w-auto h-auto text-base ${
							pathParams === "/"
								? "text-green-600 font-bold"
								: "hover:text-green-600"
						} transition-all duration-300`}
					>
						{data?.header?.navbar?.home}
					</button>
				</Link>
				<Link href={"/about-us"}>
					<button
						className={`w-auto h-auto text-base ${
							pathParams === "/about-us"
								? "text-green-600 font-bold"
								: "hover:text-green-600"
						} transition-all duration-300`}
					>
						{data?.header?.navbar?.aboutus}
					</button>
				</Link>
				<Link href={"/contact-us"}>
					<button
						className={`w-auto h-auto text-base ${
							pathParams === "/contact-us"
								? "text-green-600 font-bold"
								: "hover:text-green-600"
						} transition-all duration-300`}
					>
						{data?.header?.navbar?.contactus}
					</button>
				</Link>
				<Link href={"/services"}>
					<button
						className={`w-auto h-auto text-base ${
							pathParams === "/services"
								? "text-green-600 font-bold"
								: "hover:text-green-600"
						} transition-all duration-300`}
					>
						{data?.header?.navbar?.service}
					</button>
				</Link>
				<Link href={'/hire-developer'}>
					<button
						className={`w-auto h-auto text-base ${
							pathParams === "/hire-developer"
								? "text-green-600 font-bold"
								: "hover:text-green-600"
						} transition-all duration-300`}
					>
						{data?.header?.navbar?.hiredeveloper}
					</button>
				</Link>
			</nav>
		</div>
	);
};

export default NavbarFrame;
