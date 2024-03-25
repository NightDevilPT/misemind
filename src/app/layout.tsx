import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ParentLayout from "@/layouts/ParentLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Home",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html data-theme="dark">
			<body
				className={` bg-primary-bg font-mont w-full h-[100vh] overflow-y-auto overflow-x-hidden transition-all duration-300`}
			>
				<ParentLayout>{children}</ParentLayout>
			</body>
		</html>
	);
}
