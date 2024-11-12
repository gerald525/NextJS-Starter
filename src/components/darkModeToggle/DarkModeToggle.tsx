"use client"

import React, { useContext } from "react";

import styles from "./darkModeToggle.module.css";
import { ThemeContext } from "@/context/ThemeContext";

type ContextType = {
	toggleTheme: () => void;
	theme: string
}

const DarkModeToggle = () => {
	const { toggleTheme, theme } = useContext<ContextType>(ThemeContext);

	return (
		<div className={styles.container} onClick={toggleTheme}>
			<div className={styles.icon}>🌙</div>
			<div className={styles.icon}>☀️</div>
			<div
				className={styles.ball}
				style={theme === "dark" ? { left: "4px" } : { right: "4px" }}
			/>
		</div>
	);
};

export default DarkModeToggle;
