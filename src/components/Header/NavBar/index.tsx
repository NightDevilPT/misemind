import { useOutsideClick } from "@/hooks/clickOutside";
import { useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";

interface IProps {
	showNav: boolean;
	setShow:React.Dispatch<React.SetStateAction<boolean>>;
}

const NavbarFrame = ({ showNav,setShow }: IProps) => {
	const { data } = useAppSelector((state: RootState) => state.changeLanguage);
	const pathParams = usePathname();
	const navRef = useRef<HTMLDivElement | null>(null);

	useOutsideClick(navRef, () => setShow(false));

	return (
		<div
			className={`w-auto h-auto max-lg:fixed right-5 top-16 max-lg:w-[calc(100%-40px)] text-slate-300
			 transition-all duration-300 ${
					showNav
						? "max-lg:h-60 max-lg:py-5 max-lg:text-slate-900"
						: "max-lg:h-0 max-lg:py-0"
				} max-lg:bg-slate-200 max-lg:shadow-xl max-lg:shadow-slate-950/30 max-lg:text-primary-bg rounded overflow-hidden`}
			ref={navRef}
		>
			<nav
				className={`w-auto h-auto flex justify-center items-center gap-5 max-lg:flex-col`}
			>
				<Link href={"/"}>
					<button
						className={`w-auto h-auto text-base font-mont ${
							pathParams === "/"
								? "text-green-600 font-bold"
								: "hover:text-green-600"
						} transition-all duration-300`}
						onClick={()=>setShow(false)}
					>
						{data?.header?.navbar?.home}
					</button>
				</Link>
				<Link href={"/about-us"}>
					<button
						className={`w-auto h-auto text-base font-mont ${
							pathParams === "/about-us"
								? "text-green-600 font-bold"
								: "hover:text-green-600"
						} transition-all duration-300`}
						onClick={()=>setShow(false)}
					>
						{data?.header?.navbar?.aboutus}
					</button>
				</Link>
				<Link href={"/contact-us"}>
					<button
						className={`w-auto h-auto text-base font-mont ${
							pathParams === "/contact-us"
								? "text-green-600 font-bold"
								: "hover:text-green-600"
						} transition-all duration-300`}
						onClick={()=>setShow(false)}
					>
						{data?.header?.navbar?.contactus}
					</button>
				</Link>
				<Link href={"/services"}>
					<button
						className={`w-auto h-auto text-base font-mont ${
							pathParams === "/services"
								? "text-green-600 font-bold"
								: "hover:text-green-600"
						} transition-all duration-300`}
						onClick={()=>setShow(false)}
					>
						{data?.header?.navbar?.service}
					</button>
				</Link>
				<Link href={'/hire-developer'}>
					<button
						className={`w-auto h-auto text-base font-mont ${
							pathParams === "/hire-developer"
								? "text-green-600 font-bold"
								: "hover:text-green-600"
						} transition-all duration-300`}
						onClick={()=>setShow(false)}
					>
						{data?.header?.navbar?.hiredeveloper}
					</button>
				</Link>
			</nav>
		</div>
	);
};

export default NavbarFrame;
