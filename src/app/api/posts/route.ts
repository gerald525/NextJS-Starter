import Post from "@/models/post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async () => {
	try {
		await connect();

		const list = await Post.find();

		return new NextResponse(JSON.stringify(list), { status: 200 });
	} catch (err) {
		console.log(err);
		return new NextResponse("Database error", { status: 500 });
	}
};
