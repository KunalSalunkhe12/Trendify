import mongoose from "mongoose";
mongoose.set('strictQuery', true);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch (error) {
        throw new Error("Error connecting to database");
    }
}

export default connectDB;