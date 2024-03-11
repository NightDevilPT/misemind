"use client";

import FooterFrame from "@/components/FooterFrame";
import HeaderComponent from "@/components/Header";
import { fetchLanguageAsync } from "@/redux/reducer/fetchLanguageSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store/hooks";
import { RootState } from "@/redux/store/store";
import React, { useEffect } from "react";

export default function ComponentLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<React.Fragment>
			<HeaderComponent />
			{children}
			<FooterFrame />
		</React.Fragment>
	);
}
