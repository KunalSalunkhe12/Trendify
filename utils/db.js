import mongoose from "mongoose";
mongoose.set('strictQuery', true);


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database connected");
    } catch (error) {
        throw new Error("Error connecting to database");
    }
}

export default connectDB;