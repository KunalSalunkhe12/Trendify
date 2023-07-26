//create a user schema using mongoose
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    image: {
        type: String,
    },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model("User", userSchema, "users")

