import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img 
              src="src/components/images/logo.png" 
              alt="Divine Providence Academy Logo" 
              className="h-20 w-auto"
            />
            <span className="ml-3 text-2xl font-bold text-gray-800">Divine Providence Academy</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-600 hover:text-primary-600">Home</a>
            <a href="#about" className="text-gray-600 hover:text-primary-600">About</a>
            <a href="#values" className="text-gray-600 hover:text-primary-600">Values</a>
            <a href="#gallery" className="text-gray-600 hover:text-primary-600">Gallery</a>
            <a href="#contact" className="text-gray-600 hover:text-primary-600">Contact</a>
            {/* <a
              href="#admissions"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Apply Now
            </a> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              >
                About
              </a>
              <a
                href="#values"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              >
                Values
              </a>
              <a
                href="#gallery"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              >
                Gallery
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-md"
              >
                Contact
              </a>
              {/* <a
                href="#admissions"
                className="block px-3 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700"
              >
                Apply Now
              </a> */}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}