import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const loadBookings = () => {
      const data = JSON.parse(localStorage.getItem("bookings")) || [];
      setBookings(data);
    };

    loadBookings();

    // update if localStorage changes in another tab
    window.addEventListener("storage", loadBookings);

    return () => window.removeEventListener("storage", loadBookings);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold">My Bookings</h1>
        <p className="text-gray-500 mt-1">
          View and manage your all car bookings
        </p>
      </div>

      {/* Empty state */}
      {bookings.length === 0 && (
        <div className="text-center text-gray-500 mt-20">
          No bookings found 🚗
          <div className="mt-4">
            <button
              onClick={() => navigate("/")}
              className="px-5 py-2 bg-blue-600 text-white rounded-lg"
            >
              Browse Cars
            </button>
          </div>
        </div>
      )}

      {/* Booking List */}
      <div className="space-y-6">

        {bookings.map((b, index) => (
          <div
            key={index}
            className="bg-white shadow-sm border rounded-xl p-5 flex flex-col md:flex-row gap-6"
          >

            {/* Image */}
            <img
              src={b.image}
              alt={b.model}
              className="w-full md:w-56 h-40 object-cover rounded-lg"
            />

            {/* Middle */}
            <div className="flex-1">

              {/* Title + Status */}
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">
                  Booking #{index + 1}
                </h2>

                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    b.status === "confirmed"
                      ? "bg-green-100 text-green-600"
                      : "bg-yellow-100 text-yellow-600"
                  }`}
                >
                  {b.status || "pending"}
                </span>
              </div>

              <h3 className="text-lg font-semibold mt-2">
                {b.brand} {b.model}
              </h3>

              <p className="text-sm text-gray-500">
                {b.year} • {b.category} • {b.location}
              </p>

              {/* Dates */}
              <div className="mt-4 text-sm text-gray-600 space-y-2">

                <div className="flex items-center gap-2">
                  <img
                    src={assets.calendar_icon_colored}
                    className="w-4 h-4"
                    alt=""
                  />
                  <span>
                    {b.pickupDate} → {b.returnDate}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src={assets.location_icon}
                    className="w-4 h-4"
                    alt=""
                  />
                  <span>Pick-up Location: {b.location}</span>
                </div>

              </div>
            </div>

            {/* Right Price */}
            <div className="text-right min-w-[120px]">
              <p className="text-sm text-gray-500">Total Price</p>
              <h2 className="text-2xl font-bold text-blue-600">
                ${b.totalPrice}
              </h2>

              <p className="text-xs text-gray-400 mt-2">
                Booked on {b.bookedAt}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default MyBookings;