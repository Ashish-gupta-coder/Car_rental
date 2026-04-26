import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className="bg-gray-50 px-6 py-16">
  
      {/* Top Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-16">
        
        {/* Left Side */}
        <div className="md:w-1/3">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <img src={assets.logo} alt="" className="h-10" />
          </h2>

          <p className="text-gray-500 mt-4 text-sm leading-relaxed">
            Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-500 text-lg">
            <i className="ri-facebook-line"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-line"></i>
            <i className="ri-mail-line"></i>
          </div>
        </div>

        {/* Right Side (All 3 in ONE div) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:w-2/3">
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Home</li>
              <li>Browse Cars</li>
              <li>List Your Car</li>
              <li>About Us</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">RESOURCES</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Help Center</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Insurance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">CONTACT</h3>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>1234 Luxury Drive</li>
              <li>San Francisco, CA 94107</li>
              <li>+1234 567890</li>
              <li>info@example.com</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Divider */}
      <div className="max-w-6xl mx-auto border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        
        <p>© 2026 Brand. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <span>Privacy</span>
          <span>Terms</span>
          <span>Cookies</span>
        </div>

      </div>

    </div>
  )
}

export default Footer