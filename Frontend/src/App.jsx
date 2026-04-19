import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './main_page/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>

      {/* Add padding-top to avoid navbar overlap */}
      <div className="pt-16">
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App;