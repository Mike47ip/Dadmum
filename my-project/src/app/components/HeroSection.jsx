import React from 'react';
import { ChevronsRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HeroSection = ({ homeRef, scrollToSection, bookingRef }) => {
  return (
    <section ref={homeRef} className="pt-24 pb-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <AnimatedSection>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Your Journey Begins With Us</h1>
              <p className="text-xl mb-8">Connecting families across the world with comfort and care.</p>
              <button 
                onClick={() => scrollToSection(bookingRef)}
                className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                Book Your Flight <ChevronsRight className="ml-2" />
              </button>
            </AnimatedSection>
          </div>
          <div className="md:w-1/2">
            <AnimatedSection delay={2}>
              <div className="bg-white/20 backdrop-blur-lg p-6 rounded-lg shadow-xl">
                <img src="/images/flight.jpg"  alt="Airplane in the sky" className="rounded w-full h-full object-cover" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;