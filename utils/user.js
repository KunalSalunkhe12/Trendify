import connectDB from '@/utils/db'
import User from '@/models/user'

export async function getUser(email) {

    try {
        await connectDB()

        const user = await User.findOne({ email: email })
        if (!user) {
            return { error: "User not found" }
        }
        return user;

    } catch (error) {
        return { error: "Failed to get User Data" }
    }
}
