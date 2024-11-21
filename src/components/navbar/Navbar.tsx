"use client";

import Link from "next/link";
import React from "react";

import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

type LinkType = {
	id: number;
	title: string;
	url: string;
};

const links: Array<LinkType> = [
	{
		id: 1,
		title: "Client Side Rendering",
		url: "/csr",
	},
	{
		id: 2,
		title: "Server Side Rendering",
		url: "/ssr",
	},
	{
		id: 3,
		title: "Static Site Generation",
		url: "/sg",
	},
	{
		id: 4,
		title: "Incremental Static Site Regeneration",
		url: "/isr",
	},
];

const Navbar = () => {
	return (
		<div className={styles.container}>
			<Link href="/" className={styles.logo}>
				Lamamia
			</Link>
			<div className={styles.links}>
				<DarkModeToggle />
				{links.map((link) => (
					<Link key={link.id} href={link.url} className={styles.link}>
						{link.title}
					</Link>
				))}
				<button
					onClick={() => console.log("logged out")}
					className={styles.logout}
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Navbar;
