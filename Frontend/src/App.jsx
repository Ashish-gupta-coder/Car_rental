import React from 'react'
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './main_page/Home';
import Footer from './components/Footer';
import Car from './main_page/Car';
import CarDetails from './components/Car_details';
import MyBookings from './main_page/MyBooking';
import LoginModal from './Auth/Login';
import SignupModal from './Auth/Signup';

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-16">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cars' element={<Car />} />
          <Route path="/car/:id" element={<CarDetails />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/login" element={<LoginModal />} />
          <Route path="/signup" element={<SignupModal />} />
        </Routes>
      </div>

      <Footer />
    </>
  )
}

export default App;