import React from "react";
import { notFound } from "next/navigation";

type Item = {
	userId: number;
	id: number;
	title: string;
	body: string;
}

const getData = async () => {
	//default no-store
	const res = await fetch("http://127.0.0.1:3000/api/posts", {
		cache: "no-store",
	});

	if (!res.ok) {
		return notFound();
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
