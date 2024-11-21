import React from "react";
// import type { InferGetStaticPropsType, GetStaticProps } from "next";

// export const getStaticProps = async () => {

// }

const ISRPage = () => {
	console.log("--------SSG Page generated--------");
	return (
		<div>
			this is incremental static regeneration page. log always displayed in server
			console.
		</div>
	);
};

export default ISRPage;
