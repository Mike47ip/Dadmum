import React from 'react';
import { Plane, Shield, Clock } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const ServicesSection = ({ servicesRef }) => {
  return (
    <section ref={servicesRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection delay={1}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Plane className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Global Destinations</h3>
              <p className="text-gray-600">
                Explore over 50 destinations across 6 continents with our extensive flight network. Whether it's for business or leisure, we'll take you there safely.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={2}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Shield className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Family Comfort</h3>
              <p className="text-gray-600">
                Travel with peace of mind knowing we prioritize the comfort of families. Enjoy special amenities for children and extra legroom for parents.
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={3}>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Clock className="text-blue-600 h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Timely Departures</h3>
              <p className="text-gray-600">
                We value your time. With our commitment to punctuality, you can rely on us for on-time departures and arrivals, minimizing travel stress.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;