import React from "react";
import { BiCog } from "react-icons/bi";
import profile from "../../assets/profile.webp"

import type { RegisterFormData } from "../../utils/Interfaces"

interface DashboardProps {
  user: RegisterFormData;
}
const Dashboard: React.FC<DashboardProps> = ({ user }) => {
    const storedUser = localStorage.getItem("user");
    console.log(storedUser)
    console.log(user)
    const userData = user ? user : storedUser ? JSON.parse(storedUser) : {};
  return (
    <div className="flex justify-center items-center h-screen w-screen px-4 bg-gray-100">
      <main className="max-w-3xl w-full p-6 bg-white shadow-md rounded-xl">
        {/* Account Settings */}
        <div className="flex justify-between items-center border-b pb-4">
          <h1 className="text-xl font-bold text-gray-700">Account Settings</h1>
          <BiCog className="text-2xl text-gray-500 cursor-pointer" />
        </div>

        {/* Profile Info */}
        <div className="text-center mt-6">
          <img
            src={profile}
            alt="Profile"
            className="w-24 h-24 mx-auto rounded-full border"
          />
          <h2 className="text-2xl font-semibold mt-3">{userData.name}</h2>
          <p className="text-gray-500 text-md">{userData.email}</p>
        </div>

        {/* Description */}
        <div className="mt-6 text-center text-gray-600 leading-relaxed">
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
