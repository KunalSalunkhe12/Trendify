"use client";
import { useState } from "react";

const AddressForm = () => {
  const [address, setAddress] = useState({
    pincode: "",
    city: "",
    locality: "",
    state: "",
  });

  const handleChange = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="font-bold my-3">Add Address</h2>
      <form onSubmit={handleSubmit} className="">
        <div className="bg-gray-100 flex flex-col gap-4 text-black p-4 rounded-md">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <label className="font-medium" htmlFor="pincode">
              PIN code:
            </label>
            <input
              type="text"
              id="pincode"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              required
              className="border-2  rounded-md p-1 outline-none text-black w-full"
            />
            <label className="font-medium" htmlFor="city">
              City:
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={address.city}
              onChange={handleChange}
              required
              className="border-2  rounded-md p-1 outline-none text-black w-full"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4 items-center ">
            <label className="font-medium" htmlFor="locality">
              Locality:
            </label>
            <input
              type="text"
              id="locality"
              name="locality"
              value={address.locality}
              onChange={handleChange}
              required
              className="border-2  rounded-md p-1 outline-none text-black w-full"
            />

            <label className="font-medium" htmlFor="state">
              State:
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={address.state}
              onChange={handleChange}
              required
              className="border-2 rounded-md p-1 outline-none text-black w-full"
            />
          </div>
          <input
            className="btn_primary p-2 cursor-pointer"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </>
  );
};

export default AddressForm;
