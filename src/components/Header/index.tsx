import React, { useEffect, useState } from "react";
import HeaderLogo from "./Logo";
import NavbarFrame from "./NavBar";
import { TbMenu2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { changeTheme } from "@/services/changeTheme";

const HeaderComponent = () => {
	const [showNav, setShowNav] = useState<boolean>(false);
	const [color, setColor] = useState<string>("bg-transparent");

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			setColor(scrollY > 100?"bg-slate-950":"bg-transparent");
		};

		// Attach the event listener when the component mounts
		window.addEventListener("scroll", handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<header
			className={`w-full h-20 fixed left-0 top-0 z-50 backdrop-blur-md ${color} transition-all duration-300`}
		>
			<div className=" container h-full flex justify-between items-center bg-transparent max-sm:px-5 text-slate-300">
				<HeaderLogo />
				<NavbarFrame showNav={showNav} />
				<div
					className={`w-auto h-auto flex justify-center items-center gap-3`}
				>
					<button
						className={`w-auto h-auto rounded p-1 text-slate-200 hover:bg-slate-200 hover:text-slate-900 transition-all duration-300`}
						onClick={() => {
							changeTheme("light");
						}}
					>
						<MdOutlineWbSunny className={`w-5 h-5`} />
					</button>
					<button
						className={`hidden max-lg:flex w-auto h-auto justify-center items-center`}
						onClick={() => setShowNav(!showNav)}
					>
						{!showNav ? (
							<TbMenu2 className="w-6 h-6 text-slate-300" />
						) : (
							<MdClose className="w-6 h-6 text-slate-300" />
						)}
					</button>
				</div>
			</div>
		</header>
	);
};

export default HeaderComponent;
