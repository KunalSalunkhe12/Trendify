import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 50,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: {
            validator: function (value) {
                return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
            },
            message: "Please enter a valid email address",
        },
    },
    image: {
        type: String,
    },
    phone: {
        type: String,
        maxlength: 15,
    },
    address: {
        pincode: {
            type: String,
            maxlength: 10,
        },
        city: {
            type: String,
            maxlength: 100,
        },
        locality: {
            type: String,
            maxlength: 100,
        },
        state: {
            type: String,
            maxlength: 100,
        }
    },
}, { timestamps: true });


export default mongoose.models.User || mongoose.model("User", userSchema, "users");
