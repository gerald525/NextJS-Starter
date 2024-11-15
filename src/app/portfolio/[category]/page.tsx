import React, { use } from "react";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat: string) => {
	const data: Array<unknown> | undefined = items[cat];

	if (data) return data;

	return notFound();
};

const Category = ({ params }) => {
	const { category } = use(params);
	const data = getData(category);
	return (
		<div>
			{data.map((item) => (
				<div key={item.id}>
					<div>{item.title}</div>
					<div>{item.desc}</div>
				</div>
			))}
		</div>
	);
};

export default Category;
