import React from "react";
// import type { InferGetStaticPropsType, GetStaticProps } from "next";

// export const getStaticProps = async () => {

// }

const SSGPage = () => {
	console.log("--------SSG Page generated--------");
	return (
		<div>
			this is static site generation page. log always displayed in server
			console.
		</div>
	);
};

export default SSGPage;
