import React from "react";

const HeaderLogo = () => {
	return (
		<div className={` px-3 py-2 flex justify-start items-center flex-col`}>
			<span className={`text-3xl text-slate-200`}>
				<span className={`text-green-600`}>M</span>ise
				<span className={`text-green-600`}>M</span>ind
			</span>
			{/* <div className="w-full h-1 bg-green-600 rounded"></div> */}
		</div>
	);
};

export default HeaderLogo;
