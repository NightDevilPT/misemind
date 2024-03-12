export const changeTheme = (theme: string) => {
	const check = document.querySelector("html")?.getAttribute("data-theme")
	document.querySelector("html")?.setAttribute("data-theme", check==="dark"?"light":"dark");
};
