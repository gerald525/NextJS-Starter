"use client"

import React from 'react'
import useSWR from 'swr';
import axios from 'axios';

// const getData = async () => {
// 	const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
// 		cache: "no-store",
// 	});

// 	if (!res.ok) {
// 		return notFound();
// 	}

// 	return res.json();
// }

const fetcher = (...args: [string, unknown?]) => {
	console.log(args);
	return axios(...args).then(res => res.data).catch(err => err.message);
}

const Dashboard = () => {
	// const [data, setData] = useState([]);
	// const [error, setError] = useState(false);
	// const [isLoading, setIsLoading] = useState(false);

	const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

	console.log(data, error, isLoading);

	return (
		<div>Dashboard</div>
	)
}

export default Dashboard;