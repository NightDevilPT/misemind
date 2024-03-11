"use client";

import { store } from "@/redux/store/store";
import { useEffect } from "react";
import { Provider } from "react-redux";
import LanguageLayout from "./LanguageLayout";

export default function ParentLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<Provider store={store}>
			<LanguageLayout>{children}</LanguageLayout>
		</Provider>
	);
}
