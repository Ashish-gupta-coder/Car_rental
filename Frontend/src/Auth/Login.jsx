import React, { useState } from "react";
import SignupModal from "./Signup";

const LoginModal = ({ close }) => {
  const [showSignup, setShowSignup] = useState(false); // ✅ state added

  // 👉 switch to signup
  if (showSignup) {
    return <SignupModal close={close} />;
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
      onClick={close}
    >
      {/* Modal */}
      <div
        className="bg-white w-[90%] md:w-[30%] max-w-md rounded-2xl shadow-lg p-8 relative"
        onClick={(e) => e.stopPropagation()} // ✅ prevent close inside
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
          <span className="text-gray-700">Login</span>
        </h2>

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

        {/* Signup Link */}
        <p className="text-sm text-gray-600 mb-6">
          Create an account?{" "}
          <span
            onClick={() => setShowSignup(true)} // ✅ switch here
            className="text-blue-600 cursor-pointer hover:underline"
          >
            click here
          </span>
        </p>

        {/* Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-md font-medium hover:opacity-90 transition">
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginModal;