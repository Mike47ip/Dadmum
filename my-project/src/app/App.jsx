import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import BookingForm from './components/BookingForm';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const App = () => {
  // Refs for scroll sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const bookingRef = useRef(null);
  const contactRef = useRef(null);
  
  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 80,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="font-sans text-gray-800 min-h-screen bg-gray-50">
      <Navbar 
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        bookingRef={bookingRef}
        contactRef={contactRef}
      />
      
      <HeroSection 
        homeRef={homeRef} 
        scrollToSection={scrollToSection} 
        bookingRef={bookingRef} 
      />
      
      <AboutSection aboutRef={aboutRef} />
      
      <ServicesSection servicesRef={servicesRef} />
      
      <BookingForm bookingRef={bookingRef} />
      
      <TestimonialsSection />
      
      <ContactSection contactRef={contactRef} />
      
      <Footer 
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        aboutRef={aboutRef}
        servicesRef={servicesRef}
        bookingRef={bookingRef}
        contactRef={contactRef}
      />
    </div>
  );
};

export default App;