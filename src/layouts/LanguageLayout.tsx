"use client";

import { fetchLanguageAsync } from "@/redux/reducer/fetchLanguageSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";
import React, { useEffect } from "react";
import ComponentLayout from "./ComponentLayout";

export default function LanguageLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const dispatch = useAppDispatch();
	const { language } = useAppSelector((state: RootState) => state.language);
	useEffect(() => {
		console.log("done");
		dispatch(fetchLanguageAsync(language));
	}, [language]);

	return (
		<React.Fragment>
			<ComponentLayout>{children}</ComponentLayout>
		</React.Fragment>
	);
}
