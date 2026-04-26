import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
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
    <BrowserRouter>
      <Navbar/>

      {/* Add padding-top to avoid navbar overlap */}
      <div className="pt-16">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cars' element={<Car/>} />
           <Route path="/car/:id" element={<CarDetails />} />
           <Route path="/bookings" element={<MyBookings />} />
           <Route path="/login" element={<LoginModal />} />
           <Route path="/signup" element={<SignupModal />} />
        </Routes>
      </div>
<Footer/>
    </BrowserRouter>
  )
}

export default App;