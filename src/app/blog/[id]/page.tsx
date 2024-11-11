import React from "react";

type PropTypes = {
	params: Promise<{ id: number }>;
};

const BlogPost = async ({ params }: PropTypes) => {
	const { id } = await params;

	return <div>BlogPost {id}</div>;
};

export default BlogPost;
