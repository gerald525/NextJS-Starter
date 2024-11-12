import React from "react";

type Item = {
	userId: number;
	id: number;
	title: string;
	body: string;
}

const getData = async () => {
	//default no-store
	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
		cache: "no-store",
	});

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	return res.json();
};

const Blog = async () => {
	const data = await getData();

	return (
		<div>
			{data.map((item: Item) => (
				<div key={item.id}>- {item.title}</div>
			))}
		</div>
	);
};

export default Blog;
