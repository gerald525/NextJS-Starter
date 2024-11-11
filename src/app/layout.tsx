import localFont from "next/font/local";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

import "./globals.css";

const geistMono = localFont({
	variable: "--font-geist-mono",
	src: "./fonts/GeistMonoVF.woff",
	weight: "100 900",
});

const geistSans = localFont({
	variable: "--font-geist-sans",
	src: "./fonts/GeistVF.woff",
	weight: "100 900",
});

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app"
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<div className="container">
				<Navbar />
				{children}
				<Footer />
				</div>
			</body>
		</html>
	);
}
