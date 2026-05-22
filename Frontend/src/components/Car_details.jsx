import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { assets, dummyCarData } from "../assets/assets";

// Icons
import { MdBluetooth, MdOutlineGpsFixed } from "react-icons/md";
import { IoCameraOutline } from "react-icons/io5";
import { TbAirConditioning } from "react-icons/tb";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = dummyCarData[Number(id)];

  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  if (!car) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-2xl font-semibold">Car not found</h2>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          Go Back
        </button>
      </div>
    );
  }

  // ================= BOOKING FUNCTION =================
  const handleBooking = () => {
    if (!pickupDate || !returnDate) {
      alert("Please select pickup and return dates");
      return;
    }

    const days =
      (new Date(returnDate) - new Date(pickupDate)) /
      (1000 * 60 * 60 * 24);

    if (days <= 0) {
      alert("Return date must be after pickup date");
      return;
    }

    const booking = {
      carId: id,
      brand: car.brand,
      model: car.model,
      image: car.image,
      year: car.year,
      category: car.category,
      location: car.location,
      pickupDate,
      returnDate,
      totalPrice: days * car.pricePerDay,
      status: "confirmed",
      bookedAt: new Date().toISOString().split("T")[0],
    };

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    localStorage.setItem(
      "bookings",
      JSON.stringify([...existingBookings, booking])
    );

    alert("Booking successful ✅");

    navigate("/bookings");
  };

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 mb-28">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-gray-600 hover:text-black mt-16"
      >
        ← Back to all cars
      </button>

      <div className="grid md:grid-cols-3 gap-10">

        {/* LEFT SIDE */}
        <div className="md:col-span-2">

          <img
            src={car.image}
            alt={car.model}
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />

          <h1 className="text-3xl font-bold mt-6">
            {car.brand} {car.model}
          </h1>

          <p className="text-gray-500">
            {car.category} • {car.year}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">

            <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
              <img src={assets.users_icon} className="w-5 h-5" />
              {car.seating_capacity} Seats
            </div>

            <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
              <img src={assets.fuel_icon} className="w-5 h-5" />
              {car.fuel_type}
            </div>

            <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
              <img src={assets.car_icon} className="w-5 h-5" />
              {car.transmission}
            </div>

            <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3">
              <img src={assets.location_icon} className="w-5 h-5" />
              {car.location}
            </div>

          </div>

          {/* Description */}
          <h2 className="text-xl font-semibold mt-8">Description</h2>
          <p className="text-gray-600 mt-2 leading-relaxed">
            Premium {car.brand} {car.model} designed for comfort and luxury.
            Perfect for city drives, business trips, or weekend getaways.
          </p>

          {/* Features */}
          <h2 className="text-xl font-semibold mt-8">Features</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex items-center gap-2 text-gray-700">
              <MdOutlineGpsFixed className="text-blue-600" /> GPS
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <MdBluetooth className="text-blue-600" /> Bluetooth
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <TbAirConditioning className="text-blue-600" /> Air Conditioning
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <IoCameraOutline className="text-blue-600" /> Rear Camera
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (BOOKING) */}
        <div className="bg-white shadow-lg rounded-xl p-6 h-fit sticky top-24">

          <h2 className="text-2xl font-bold">
            ${car.pricePerDay}
            <span className="text-gray-500 text-sm"> / day</span>
          </h2>

          {/* Dates */}
          <div className="mt-6 space-y-4">

            <input
              type="date"
              value={pickupDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => setPickupDate(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />

            <input
              type="date"
              value={returnDate}
              min={pickupDate || new Date().toISOString().split("T")[0]}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />

          </div>

          {/* Button */}
          <button
            onClick={handleBooking}
            className="w-full mt-6 bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg"
          >
            Book Now
          </button>

          <p className="text-gray-500 text-sm mt-3 text-center">
            No credit card required to reserve
          </p>
        </div>

      </div>
    </div>
  );
};

export default CarDetails;