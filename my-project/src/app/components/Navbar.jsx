import React, { useState } from 'react';
import { Menu, X, Plane } from 'lucide-react';

const Navbar = ({ scrollToSection, homeRef, aboutRef, servicesRef, bookingRef, contactRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleNavClick = (ref) => {
    setIsMenuOpen(false);
    scrollToSection(ref);
  };
  
  return (
    <header className="fixed w-full bg-white shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Plane className="h-8 w-8 text-blue-600" />
          <span className="text-2xl font-bold text-blue-600">DadMum</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button onClick={() => handleNavClick(homeRef)} className="font-medium hover:text-blue-600 transition-colors">Home</button>
          <button onClick={() => handleNavClick(aboutRef)} className="font-medium hover:text-blue-600 transition-colors">About</button>
          <button onClick={() => handleNavClick(servicesRef)} className="font-medium hover:text-blue-600 transition-colors">Services</button>
          <button onClick={() => handleNavClick(bookingRef)} className="font-medium hover:text-blue-600 transition-colors">Book Now</button>
          <button onClick={() => handleNavClick(contactRef)} className="font-medium hover:text-blue-600 transition-colors">Contact</button>
        </nav>
        
        {/* Mobile Navigation Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-2 flex flex-col">
            <button onClick={() => handleNavClick(homeRef)} className="py-3 border-b hover:text-blue-600 transition-colors">Home</button>
            <button onClick={() => handleNavClick(aboutRef)} className="py-3 border-b hover:text-blue-600 transition-colors">About</button>
            <button onClick={() => handleNavClick(servicesRef)} className="py-3 border-b hover:text-blue-600 transition-colors">Services</button>
            <button onClick={() => handleNavClick(bookingRef)} className="py-3 border-b hover:text-blue-600 transition-colors">Book Now</button>
            <button onClick={() => handleNavClick(contactRef)} className="py-3 hover:text-blue-600 transition-colors">Contact</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;