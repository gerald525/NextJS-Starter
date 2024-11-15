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
	const res = await fetch(`http://127.0.0.1:3000/api/posts/${id}`, {
		cache: "no-store",
	});

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
