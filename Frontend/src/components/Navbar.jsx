import React, { useState, useContext } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import LoginModal from "../Auth/Login";
import { userDataContext } from "../Context/Current_user";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const navigate = useNavigate();
  const { userData, setUserData } = useContext(userDataContext);

  // ✅ First letter avatar
  const getInitial = () => {
    return userData?.userName?.charAt(0).toUpperCase() || "U";
  };

  // ✅ Logout
  const handleLogout = () => {
    setUserData(null);
    localStorage.removeItem("user");
    setShowDropdown(false);
    navigate("/");
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-12 py-4">

        {/* Logo */}
        <div className="flex cursor-pointer" onClick={() => navigate("/")}>
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

          {/* Right Section */}
          <div className="hidden md:flex items-center gap-6">
            <p className="cursor-pointer text-gray-700 hover:text-blue-600">
              List cars
            </p>

            {/* ✅ PROFILE OR LOGIN */}
            {userData ? (
              <div className="relative">

                {/* Avatar */}
                <div
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold cursor-pointer"
                >
                  {getInitial()}
                </div>

                {/* Dropdown */}
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg">

                    {/* User Info */}
                    <div className="px-4 py-2 border-b">
                      <p className="font-medium">
                        {userData.userName}
                      </p>
                    </div>

                    <p
                      onClick={() => {
                        navigate("/profile");
                        setShowDropdown(false);
                      }}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      Profile
                    </p>

                    <p
                      onClick={handleLogout}
                      className="px-4 py-2 hover:bg-gray-100 text-red-500 cursor-pointer"
                    >
                      Logout
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setOpenLogin(true)}
                className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </button>
            )}
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

          {userData ? (
            <>
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-semibold">
                {getInitial()}
              </div>

              <p className="font-medium">{userData.userName}</p>

              <p onClick={() => navigate("/profile")}>Profile</p>
              <p onClick={handleLogout} className="text-red-500">Logout</p>
            </>
          ) : (
            <button
              onClick={() => setOpenLogin(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Login
            </button>
          )}
        </div>
      )}

      {/* Login Modal */}
      {openLogin && <LoginModal close={() => setOpenLogin(false)} />}
    </nav>
  );
};

export default Navbar;