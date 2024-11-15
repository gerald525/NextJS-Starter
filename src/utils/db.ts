import mongoose from "mongoose";

const connect = async () => {
	try {
		await mongoose.connect(<string>(process.env.MONGODB));
	}catch(err) {
		console.log("mongodb connection failed: ", err);
	}
}

export default connect;