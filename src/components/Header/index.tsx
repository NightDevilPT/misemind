import React, { useState } from "react";
import HeaderLogo from "./Logo";
import NavbarFrame from "./NavBar";
import { TbMenu2 } from "react-icons/tb";
import { MdClose } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";
import { changeTheme } from "@/services/changeTheme";

const HeaderComponent = () => {
	const [showNav, setShowNav] = useState<boolean>(false);
	return (
		<header
			className={`w-full h-20 fixed left-0 top-0 z-50 backdrop-blur-md bg-transparent`}
		>
			<div className=" container h-full flex justify-between items-center bg-transparent max-sm:px-5">
				<HeaderLogo />
				<NavbarFrame showNav={showNav} />
				<button
					className={`w-auto h-auto rounded p-1 text-primary-fg hover:bg-primary-fg hover:text-primary-bg transition-all duration-300`}
					onClick={()=>{changeTheme("light")}}
				>
					<MdOutlineWbSunny className={`w-5 h-5`} />
				</button>
				<button
					className={`hidden max-md:flex w-auto h-auto justify-center items-center`}
					onClick={() => setShowNav(!showNav)}
				>
					{!showNav ? (
						<TbMenu2 className="w-6 h-6 text-primary-fg" />
					) : (
						<MdClose className="w-6 h-6 text-primary-fg" />
					)}
				</button>
			</div>
		</header>
	);
};

export default HeaderComponent;
