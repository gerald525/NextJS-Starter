import React, { use } from "react";

type PropTypes = {
	params: Promise<{ id: number }>;
};

const BlogPost = ({ params }: PropTypes) => {
	const { id } = use(params);

	return <div>BlogPost {id}</div>;
};

export default BlogPost;
