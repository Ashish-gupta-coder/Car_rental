import React, { useState } from "react";
import { assets, dummyCarData } from "../assets/assets.js";
import { useNavigate } from "react-router-dom";

function Car() {
  const [search, setSearch] = useState("");

  // Filter Logic
  const filteredCars = dummyCarData.filter((car) =>
    `${car.brand} ${car.model} ${car.category} ${car.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );
const navigate = useNavigate();
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* ================= HEADER ================= */}
      <div className="py-16 px-4 sm:px-6">

        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Available Cars
          </h2>
          <p className="text-gray-500 mt-3">
            Browse our selection of premium vehicles available for your next adventure
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center bg-white shadow-md rounded-full px-5 py-3 w-full max-w-2xl">

            {/* Search Icon */}
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>

            {/* Input */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by make, model, or features"
              className="flex-1 px-4 outline-none text-sm text-gray-600"
            />

            {/* Filter Icon */}
            <svg className="w-5 h-5 text-gray-400 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polygon points="3 4 21 4 14 12 14 20 10 18 10 12 3 4" />
            </svg>

          </div>
        </div>
      </div>

      {/* ================= CAR LIST ================= */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {filteredCars.length > 0 ? (
            filteredCars.map((car,index) => (
               <div
    key={index}
  onClick={() => navigate(`/car/${index}`)} 
    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
  >
                {/* Image */}
                <div className="relative">
                  <img
                    src={car.image}
                    alt=""
                    className="w-full h-48 sm:h-52 object-cover"
                  />

                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                    Available Now
                  </span>

                  <span className="absolute bottom-3 right-3 bg-black text-white px-3 py-1 rounded-lg text-sm">
                    ${car.pricePerDay} / day
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold">
                    {car.brand} {car.model}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {car.category} • {car.year}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-600">

                    <span className="flex items-center gap-2">
                      <img src={assets.users_icon} className="w-4 h-4" />
                      {car.seating_capacity}
                    </span>

                    <span className="flex items-center gap-2">
                      <img src={assets.fuel_icon} className="w-4 h-4" />
                      {car.fuel_type}
                    </span>

                    <span className="flex items-center gap-2">
                      <img src={assets.car_icon} className="w-4 h-4" />
                      {car.transmission}
                    </span>

                    <span className="flex items-center gap-2">
                      <img src={assets.location_icon} className="w-4 h-4" />
                      {car.location}
                    </span>

                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No cars found 😢
            </p>
          )}

        </div>
      </div>
    </div>
  );
}

export default Car;