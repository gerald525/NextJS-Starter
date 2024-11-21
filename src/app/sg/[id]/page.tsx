import React, { use } from "react";

type Context = {
	params: Promise<{ id: string }>
}

export const generateStaticParams = async () => {
	return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const SSGIdPage = ({ params }: Context) => {
	const { id } = use(params);

	console.log(`--------SSG ${id} Page generated--------`)
	return <div>static site with dynamic routing: {id}</div>;
};

export default SSGIdPage;
