import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

// import your car image here
import { assets, dummyCarData } from "../assets/assets";

function Home() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start pt-10">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Luxury cars on Rent
      </h1>

      {/* Search Box */}
      <div className="mt-10 bg-white rounded-full shadow-md px-10 py-6 
flex flex-col md:flex-row items-center justify-center md:justify-between 
gap-8 w-[90%] md:w-[750px] mx-auto">

  {/* Pickup Location */}
  <div className="flex flex-col text-sm text-center md:text-left">
    <span className="flex items-center justify-center md:justify-start gap-1 font-medium text-gray-700">
      Pickup Location <IoIosArrowDown />
    </span>
    <span className="text-gray-400">Please select location</span>
  </div>

  {/* Pick-up Date */}
  <div className="flex flex-col text-sm text-center md:text-left">
    <span className="font-medium text-gray-700">Pick-up Date</span>
    <input type="date" className="outline-none text-gray-400 text-center md:text-left" />
  </div>

  {/* Return Date */}
  <div className="flex flex-col text-sm text-center md:text-left">
    <span className="font-medium text-gray-700">Return Date</span>
    <input type="date" className="outline-none text-gray-400 text-center md:text-left" />
  </div>

  {/* Search Button */}
  <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
    <FiSearch />
    Search
  </button>
</div>

      {/* Car Image */}
      <div className="mt-12 w-full flex justify-center">
        <img
          src={assets.main_car}
          alt="car"
          className="w-[90%] md:w-[900px] object-contain"
        />
      </div>

    </div>

    <div className="bg-gray-100 py-16">

  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">Featured Vehicles</h2>
    <p className="text-gray-500 mt-2">
      Explore our selection of premium vehicles available for your next adventure.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

    {dummyCarData.map((car)=>(
      <div
        key={car.id}
        className="bg-white rounded-2xl shadow-md overflow-hidden"
      >

        {/* Image */}
        <div className="relative">
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-52 object-cover"
          />

          {/* Badge */}
          <span className="absolute top-4 left-4 bg-blue-600 text-white text-sm px-3 py-1 rounded-full">
            Available Now
          </span>

          {/* Price */}
          <span className="absolute bottom-4 right-4 bg-black text-white px-4 py-2 rounded-lg">
            ${car.price} / day
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-lg font-semibold">{car.name}</h3>
          <p className="text-gray-500 text-sm">
            {car.type} • {car.year}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-600">
            <span>👤 {car.seats} Seats</span>
            <span>⛽ {car.fuel}</span>
            <span>⚙️ {car.transmission}</span>
            <span>📍 {car.location}</span>
          </div>
        </div>
      </div>
    ))}

  </div>
</div>
</>
  );
}

export default Home;