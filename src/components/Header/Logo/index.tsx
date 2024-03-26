import React from "react";

const HeaderLogo = () => {
	return (
		<div className={` px-3 py-2 flex justify-start items-center flex-col`}>
			<span className={`text-3xl text-slate-200 relative`}>
				<span className={`text-green-600 font-mont`}>M</span>ise
				<span className={`text-green-600 font-mont`}>M</span>ind
				<div className="pulse absolute top-1 left-[1.6rem] font-mont"></div>
				<div className="pulse absolute top-1 right-[2.08rem] font-mont"></div>
			</span>
		</div>
	);
};

export default HeaderLogo;
