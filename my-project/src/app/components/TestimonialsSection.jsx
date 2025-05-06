import React from 'react';
import { Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection delay={1}>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Frequent Traveler</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Traveling with my two kids has never been easier. DadMum Airlines truly understands what families need during travel. The extra care their staff provides is remarkable."
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={2}>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Michael Torres</h4>
                  <p className="text-sm text-gray-500">Business Traveler</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The punctuality and reliability of DadMum flights have made my business trips stress-free. Their online booking system is intuitive and the in-flight service is top-notch."
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={3}>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">Emma & David</h4>
                  <p className="text-sm text-gray-500">Honeymoon Trip</p>
                </div>
              </div>
              <p className="text-gray-600">
                "We chose DadMum for our honeymoon trip and couldn't be happier. The special attention they gave us made our journey as memorable as our destination."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;