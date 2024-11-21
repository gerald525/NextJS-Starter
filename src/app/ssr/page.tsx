import React, { use } from "react";

import Post from "@/models/post";
import connect from "@/utils/db";

type Item = {
	title: string;
};

const getData = async () => {
	await connect();

  // Fetch data from the database
  const data = await Post.find().then((result) =>
    result.map((item) => ({ title: item.title }))
  );

	return data;
}

const SSRPage = () => {
	console.log("--------SSR Page generated--------");

	const data = use(getData());

	return (
		<div>
			this is server side rendering page. log always displayed in server
			console.
			{data.map((item: Item) => (
				<div key={item.title}>{item.title}</div>
			))}
		</div>
	);
};

export default SSRPage;
