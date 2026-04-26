import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Auth/Login";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false); // ✅ FIX
  const navigate = useNavigate();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-12 py-4">

        {/* Logo */}
        <div className="flex">
          <img src={assets.logo} alt="" className="w-44" />
        </div>

        <div className="flex items-center justify-center gap-8">

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <li onClick={() => navigate("/")} className="cursor-pointer hover:text-blue-600">Home</li>
            <li onClick={() => navigate('/cars')} className="cursor-pointer hover:text-blue-600">Cars</li>
            <li onClick={() => navigate("/bookings")} className="cursor-pointer hover:text-blue-600">My Bookings</li>
          </ul>

          {/* Search */}
          <div className="hidden md:flex items-center border rounded-full px-4 py-2 w-64">
            <input
              type="text"
              placeholder="Search cars"
              className="outline-none flex-1 text-sm"
            />
            <FiSearch className="text-gray-500" />
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-6">
            <p className="cursor-pointer text-gray-700 hover:text-blue-600">
              List cars
            </p>

            {/* ✅ Open Modal instead of navigate */}
            <button
              onClick={() => setOpenLogin(true)}
              className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700"
            >
              Login
            </button>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden text-3xl cursor-pointer">
            {open ? (
              <HiOutlineX onClick={() => setOpen(false)} />
            ) : (
              <HiOutlineMenu onClick={() => setOpen(true)} />
            )}
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-white border-t">
          <p onClick={() => navigate("/")}>Home</p>
          <p onClick={() => navigate("/cars")}>Cars</p>
          <p onClick={() => navigate("/bookings")}>My Bookings</p>
          <p>List cars</p>

          {/* ✅ Mobile Login */}
          <button
            onClick={() => setOpenLogin(true)}
            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Login
          </button>
        </div>
      )}

      {/* ✅ Login Modal */}
      {openLogin && <LoginModal close={() => setOpenLogin(false)} />}
    </nav>
  );
};

export default Navbar;