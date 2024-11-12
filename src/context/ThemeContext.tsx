"use client";

import { createContext, useState } from "react";

type ContextType = {
	toggleTheme: () => void;
	theme: string;
};

type PropTypes = {
	children: React.ReactNode;
};

export const ThemeContext = createContext<ContextType>({
	toggleTheme: () => {},
	theme: "dark",
});

export const ThemeProvider = ({ children }: PropTypes) => {
	const [theme, setTheme] = useState("light");

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ toggleTheme, theme }}>
			<div className={`theme ${theme}`}>{children}</div>
		</ThemeContext.Provider>
	);
};
