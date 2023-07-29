import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import User from "@/models/user";
import connectDB from "@/utils/db";


const options = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async signIn({ profile }) {
            try {
                await connectDB();

                const userExists = await User.findOne({ email: profile.email });
                if (!userExists) {
                    await User.create({
                        email: profile.email,
                        username: profile.name,
                        image: profile.picture,
                    });
                }

                return true;

            } catch (error) {
                console.log("Error checking if user exists: ", error.message);
                return false;
            }
        }
    }
};

const handler = NextAuth(options);

export { handler as GET, handler as POST, options as authOptions };
