import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection failed', error);
    }
};

export default connectDB;
