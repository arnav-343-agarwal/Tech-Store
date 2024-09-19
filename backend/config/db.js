import mongoose from 'mongoose'

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect('mongodb://127.0.0.1:27017/reactProducts');
		console.log(`MongoDB Connected`);
	} catch (error) {
		console.error(`Error: ${error.message}`);
		process.exit(1); // Read Documentations bro , process code 1 code means exit with failure, 0 means success
	}
};