import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white h-[80px] w-[85%] mx-auto font-medium relative z-50">
      <div className="flex justify-between items-center p-4 h-full">
        {/* Logo */}
        <h2 className="w-[64px] font-bold text-lg text-nowrap">Xpartex Ltd.</h2>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-gray-600 transition-colors duration-200">Home</a>
          <a href="#" className="hover:text-gray-600 transition-colors duration-200">About</a>
          <a href="#" className="hover:text-gray-600 transition-colors duration-200">Contact</a>
        </div>
        
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? 'rotate-45 translate-y-2' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? 'opacity-0' : ''
          }`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
            isMenuOpen ? '-rotate-45 -translate-y-1' : ''
          }`}></span>
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t transition-all duration-300 z-50 ${
        isMenuOpen ? 'opacity-100 visible max-h-96' : 'opacity-0 invisible max-h-0 overflow-hidden'
      }`}>
        <div className="flex flex-col p-4 space-y-4">
          <a 
            href="#" 
            className="py-2 hover:text-gray-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#" 
            className="py-2 hover:text-gray-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#" 
            className="py-2 hover:text-gray-600 transition-colors duration-200"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;