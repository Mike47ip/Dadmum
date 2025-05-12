import React from 'react';
import AnimatedSection from './AnimatedSection';

const AboutSection = ({ aboutRef }) => {
  return (
    <section ref={aboutRef} className="py-16 bg-white w-full">
      <div className="container mx-auto px-4 w-full max-w-none">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">About DadMum Airlines</h2>
        </AnimatedSection>
        
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <AnimatedSection delay={1} className="w-full md:w-1/2">
            <div className="w-full px-4">
              <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
              <p className="mb-6 text-gray-600">To create a world where distance is no barrier for families to connect, making air travel accessible, comfortable, and secure for everyone.</p>
              
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="mb-6 text-gray-600">We strive to provide exceptional air travel experiences with a focus on family comfort, reliability, and personalized service that makes every journey memorable.</p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={2} className="w-full md:w-1/2">
            <div className="w-full px-4">
              <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
              <p className="text-gray-600 mb-6">
                Founded in 2015, DadMum Airlines emerged from a simple idea: family travels should be as seamless and comfortable as possible. We understand the challenges families face when traveling, which is why we've built our service around their needs.
              </p>
              <p className="text-gray-600">
                With over 50 destinations worldwide and a growing fleet of modern aircraft, we combine cutting-edge technology with warm, personalized service to ensure your journey is as enjoyable as your destination.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;