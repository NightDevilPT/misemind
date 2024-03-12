"use client";

import FooterFrame from "@/components/FooterFrame";
import HeaderComponent from "@/components/Header";
import { fetchLanguageAsync } from "@/redux/reducer/fetchLanguageSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";
import React, { useEffect, useState } from "react";
import LoadingLayout from "./LoadingLayout";

export default function ComponentLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const { data } = useAppSelector((state: RootState) => state.changeLanguage);
	const [loading, setLoading] = useState<boolean>(true);

	setTimeout(() => {
		setLoading(false);
	}, 2000);

	return loading ? (
		<LoadingLayout />
	) : (
		<React.Fragment>
			<HeaderComponent />
			{children}
			<FooterFrame />
		</React.Fragment>
	);
}
