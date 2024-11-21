import React, { use } from "react";

type Context = {
	params: Promise<{ id: string }>
}

export const generateStaticParams = async () => {
	return [{ id: "1" }, { id: "2" }, { id: "3" }];
};

const ISRIdPage = ({ params }: Context) => {
	const { id } = use(params);

	console.log(`--------ISR ${id} Page generated--------`)
	return <div>incremental static regeneration with dynamic routing: {id}</div>;
};

export default ISRIdPage;
