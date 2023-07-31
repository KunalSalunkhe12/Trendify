import connectDB from "@/utils/db";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request) {
    const { userEmail, addressData } = await request.json();
    try {
        await connectDB();
        const user = await User.findOne({ email: userEmail });

        if (!user) {
            return NextResponse.json({ error: 'User not found.', status: 404 });
        }

        user.address.pincode = addressData.pincode;
        user.address.city = addressData.city;
        user.address.locality = addressData.locality;
        user.address.state = addressData.state;

        await user.save();

        return NextResponse.json({ message: 'Address updated successfully.', status: 200 });
    }
    catch (error) {
        return NextResponse.json({ error: 'An error occurred while updating the address.', status: 500 });
    }


}