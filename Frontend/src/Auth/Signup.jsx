import React, { useState } from "react";
import LoginModal from "./Login";

const SignupModal = ({ close }) => {
  const [showLogin, setShowLogin] = useState(false); // ✅ state

  // 👉 switch to login
  if (showLogin) {
    return <LoginModal close={close} />;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
      onClick={close} // ✅ outside click close
    >
      {/* Modal */}
      <div
        className="bg-white w-[90%] md:w-[30%] max-w-md rounded-2xl shadow-lg p-8 relative"
        onClick={(e) => e.stopPropagation()} // ✅ prevent inside click
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-xl"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6">
          <span className="text-blue-600">User</span>{" "}
          <span className="text-gray-700">Signup</span>
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Name</label>
          <input
            type="text"
            placeholder="type here"
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="type here"
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-gray-600 mb-1">Password</label>
          <input
            type="password"
            placeholder="type here"
            className="w-full border border-gray-300 rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Login Link */}
        <p className="text-sm text-gray-600 mb-6">
          Already have an account?{" "}
          <span
            onClick={() => setShowLogin(true)} // ✅ switch here
            className="text-blue-600 cursor-pointer hover:underline"
          >
            click here
          </span>
        </p>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-md font-medium hover:opacity-90 transition">
          Signup
        </button>
      </div>
    </div>
  );
};

export default SignupModal;