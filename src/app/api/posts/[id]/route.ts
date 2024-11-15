import Post from "@/models/post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

type ParamType = {
	params: Promise<{ id: string }>;
};

export const GET = async (request: Request, { params }: ParamType) => {
	console.log(request);

	const { id }= await params;
	
	try {
		await connect();

		const post = await Post.findById(id);

		return new NextResponse(JSON.stringify(post), { status: 200 });
	} catch (err) {
		return new NextResponse("Database error", { status: 500 });
	}
};
