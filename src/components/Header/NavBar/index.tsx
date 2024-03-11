import { useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";
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
			className={`w-auto h-auto max-lg:fixed right-5 top-20 max-lg:w-[calc(100%-40px)] text-slate-300
			 transition-all duration-300 ${showNav?"max-lg:h-60 max-lg:py-5":"max-lg:h-0 max-lg:py-0"} max-lg:bg-primary-fg max-lg:text-primary-bg rounded overflow-hidden`}
		>
			<nav
				className={`w-auto h-auto flex justify-center items-center gap-5 max-md:flex-col`}
			>
				<button
					className={`w-auto h-auto text-base ${
						pathParams === "/"
							? "text-green-600 font-bold"
							: "hover:text-green-600"
					} transition-all duration-300`}
				>
					{data?.header?.navbar?.home}
				</button>
				<button
					className={`w-auto h-auto text-base ${
						pathParams === "/about-us"
							? "text-green-600 font-bold"
							: "hover:text-green-600"
					} transition-all duration-300`}
				>
					{data?.header?.navbar?.aboutus}
				</button>
				<button
					className={`w-auto h-auto text-base ${
						pathParams === "/contact-us"
							? "text-green-600 font-bold"
							: "hover:text-green-600"
					} transition-all duration-300`}
				>
					{data?.header?.navbar?.contactus}
				</button>
				<button
					className={`w-auto h-auto text-base ${
						pathParams === "/service"
							? "text-green-600 font-bold"
							: "hover:text-green-600"
					} transition-all duration-300`}
				>
					{data?.header?.navbar?.service}
				</button>
				<button
					className={`w-auto h-auto text-base ${
						pathParams === "/hire-developers"
							? "text-green-600 font-bold"
							: "hover:text-green-600"
					} transition-all duration-300`}
				>
					{data?.header?.navbar?.hiredeveloper}
				</button>
			</nav>
		</div>
	);
};

export default NavbarFrame;
