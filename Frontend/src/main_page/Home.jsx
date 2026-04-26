import React from "react";
import { FiSearch } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

// import your car image here
import { assets, dummyCarData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-start pt-10">

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
        Luxury cars on Rent
      </h1>

      {/* Search Box */}
      <div className="mt-10 bg-white md:rounded-full rounded-xl shadow-md px-6 md:px-10 py-6 
flex flex-col md:flex-row md:items-center items-start 
gap-5 md:gap-8 w-[90%] md:w-[750px] mx-auto">

  {/* Pickup Location */}
  <div className="flex flex-col text-sm w-full">
    <span className="flex items-center gap-1 font-medium text-gray-700">
      Pickup Location <IoIosArrowDown />
    </span>
    <span className="text-gray-400">Please select location</span>
  </div>

  {/* Pick-up Date */}
  <div className="flex flex-col text-sm w-full">
    <span className="font-medium text-gray-700">Pick-up Date</span>
    <input 
      type="date" 
      className="outline-none text-gray-400 mt-1"
    />
  </div>

  {/* Return Date */}
  <div className="flex flex-col text-sm w-full">
    <span className="font-medium text-gray-700">Return Date</span>
    <input 
      type="date" 
      className="outline-none text-gray-400 mt-1"
    />
  </div>

  {/* Search Button */}
  <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
    <FiSearch />
    Search
  </button>
</div>

{/* Car Image */}
<div className="mt-12 w-full flex justify-center">
  <img
    src={assets.main_car}
    alt="car"
    className="w-[100%] md:w-[900px] object-contain"
  />
</div>

    </div>

    <div className=" py-16">

  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-4xl font-bold">Featured Vehicles</h2>
    <p className="text-gray-500 mt-2">
      Explore our selection of premium vehicles available for your next adventure.
    </p>
  </div>

  {/* Cards */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">

{dummyCarData.map((car, index) => (
  <div
    key={index}
  onClick={() => navigate(`/car/${index}`)} 
    className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
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
        ${car.pricePerDay} / day
      </span>
    </div>

    {/* Content */}
    <div className="p-5">
      <h3 className="text-xl font-semibold">
        {car.brand} <span>{car.model}</span>
      </h3>

      <p className="text-sm text-gray-500">
        {car.category} • {car.year}
      </p>

      {/* Features */}
      <div className="grid grid-cols-2 gap-3 mt-4 text-sm text-gray-600">
        
        <span className="flex items-center gap-2">
          <img src={assets.users_icon} className="w-4 h-4" alt="" />
          {car.seating_capacity} Seats
        </span>

        <span className="flex items-center gap-2">
          <img src={assets.fuel_icon} className="w-4 h-4" alt="" />
          {car.fuel_type}
        </span>

        <span className="flex items-center gap-2">
          <img src={assets.car_icon} className="w-4 h-4" alt="" />
          {car.transmission}
        </span>

        <span className="flex items-center gap-2">
          <img src={assets.location_icon} className="w-4 h-4" alt="" />
          {car.location}
        </span>

      </div>
    </div>
  </div>
))}


  </div>
   <button className="px-6 py-2 border border-gray-300 rounded-lg font-medium hover:bg-gray-100 transition flex items-center gap-2 text-center mx-auto mt-24">
    Explore all cars <span><img src={assets.arrow_icon} alt="" /></span>
  </button>
</div>

<div className="w-full flex justify-center items-center py-10 md:py-16">
  <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between 
  max-w-6xl w-[90%] bg-gradient-to-r from-blue-600 to-blue-300 
  rounded-2xl px-6 md:px-10 py-10 md:py-16 overflow-hidden">

    {/* Left Content */}
    <div className="max-w-md text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Do You Own a Luxury Car?
      </h2>

      <p className="text-sm leading-relaxed mb-6 opacity-90 font-semibold">
        Monetize your vehicle effortlessly by listing it on CarRental.
        We take care of insurance, driver verification and secure payments —
        so you can earn passive income, stress-free.
      </p>

      <button className="bg-white text-blue-500 px-5 py-2 rounded-lg font-medium hover:bg-gray-100 transition">
        List your car
      </button>
    </div>

    {/* Right Image */}
    <div className="mt-8 md:mt-0 flex justify-center w-full md:w-auto">
      <img
        src={assets.banner_car_image}
        alt="car"
        className="w-[250px] md:w-96 object-contain"
      />
    </div>

  </div>
</div>
<div className="bg-gray-50">

  {/* ================= Testimonials ================= */}
  <div className="py-16 px-6">
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold">
        What Our Customers Say
      </h2>
      <p className="text-gray-500 mt-4">
        Discover why discerning travelers choose StayVenture for their luxury accommodations
        around the world.
      </p>
    </div>

    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      
  {/* Card 1 */}
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <div className="flex items-center gap-4">
      <img src="https://randomuser.me/api/portraits/women/44.jpg" className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-semibold">Emma Rodriguez</h3>
        <p className="text-sm text-gray-500">Barcelona, Spain</p>
      </div>
    </div>

    {/* Stars */}
    <div className="flex gap-1 mt-4">
      {Array(5).fill(0).map((_, i) => (
        <img key={i} src={assets.star_icon} className="w-4 h-4" alt="star" />
      ))}
    </div>

    <p className="text-gray-500 mt-4 text-sm leading-2">
      "I've rented cars from various companies, but the experience with CarRental was exceptional."
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <div className="flex items-center gap-4">
      <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-semibold">John Smith</h3>
        <p className="text-sm text-gray-500">New York, USA</p>
      </div>
    </div>

    {/* Stars */}
    <div className="flex gap-1 mt-4">
      {Array(5).fill(0).map((_, i) => (
        <img key={i} src={assets.star_icon} className="w-4 h-4" alt="star" />
      ))}
    </div>

    <p className="text-gray-500 mt-4 text-sm leading-2">
      "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!"
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <div className="flex items-center gap-4">
      <img src="https://randomuser.me/api/portraits/women/68.jpg" className="w-12 h-12 rounded-full" />
      <div>
        <h3 className="font-semibold">Ava Johnson</h3>
        <p className="text-sm text-gray-500">Sydney, Australia</p>
      </div>
    </div>

    {/* Stars */}
    <div className="flex gap-1 mt-4">
      {Array(5).fill(0).map((_, i) => (
        <img key={i} src={assets.star_icon} className="w-4 h-4" alt="star" />
      ))}
    </div>

    <p className="text-gray-500 mt-4 text-sm leading-2">
      "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service."
    </p>
  </div>

</div>
  </div>

  {/* ================= Newsletter ================= */}
  <div className="py-28 px-6">
    <div className="max-w-3xl mx-auto text-center">
      
      <h2 className="text-4xl font-bold">
        Never Miss a Deal!
      </h2>

      <p className="text-gray-500 mt-4">
        Subscribe to get the latest offers, new arrivals, and exclusive discounts
      </p>

      <div className="mt-8 flex items-center bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
        
        <input
          type="email"
          placeholder="Enter your email id"
          className="flex-1 px-5 py-4 outline-none text-sm"
        />

        <button className="bg-blue-600 text-white px-8 py-4 hover:bg-blue-700 transition">
          Subscribe
        </button>

      </div>

    </div>
  </div>

</div>
</>
  );
}

export default Home;