import mongoose from "mongoose";

const connectDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb+srv://rathnatejachidrala:9603738550@dataa.gzktlrb.mongodb.net/?retryWrites=true&w=majority&appName=Dataa', {
			// To avoid warnings in the console
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log(`MongoDB Connected: ${conn.connection.host}`);
	} catch (error) {
		console.error(`Error is this: ${error.message}`);
		process.exit(1);
	}
};

export default connectDB;
