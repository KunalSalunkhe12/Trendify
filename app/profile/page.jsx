import React from "react";
import { getUser } from "@/utils/user";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]/route";
import AddressForm from "@/components/AddressForm";
import Image from "next/image";

const Profile = async () => {
  const session = await getServerSession(authOptions);

  const user = await getUser(session?.user.email);

  if (user.error) {
    throw new Error(user.error);
  }

  return (
    <div className="p-4 flex flex-col gap-5">
      <div>
        <Image src={user?.image} width={100} height={100} alt="profile image" />
      </div>
      <h2>
        <span className="font-semibold">Username:</span> {user?.username}
      </h2>
      <h2>
        <span className="font-semibold">Email: </span> {user?.email}
      </h2>
      {user.address.pincode ? (
        <h2>
          <span className="font-semibold">Address: </span>
          {`${user.address.locality}, ${user.address.city}, ${user.address.state} - ${user.address.pincode}`}
        </h2>
      ) : (
        <div>
          <AddressForm userEmail={user.email} />
        </div>
      )}
    </div>
  );
};

export default Profile;
