import React, { use } from "react";
import { notFound } from "next/navigation";

type PropTypes = {
	params: Promise<{ id: number }>;
};

type Data = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

const getData = async (id: number): Promise<Data> => {
	//default no-store
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${id}`,
		{
			cache: "force-cache",
		}
	);

	if (!res.ok) {
		return notFound(); // return not found page
	}

	return res.json();
};

const BlogPost = ({ params }: PropTypes) => {
	const { id } = use(params);

	const data: Data = use(getData(id));

	return <div key={data.id}>- {data.title}</div>;
};

export default BlogPost;
