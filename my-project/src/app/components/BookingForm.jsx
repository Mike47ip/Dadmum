import React, { useState } from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const BookingForm = ({ bookingRef }) => {
  const [activeTab, setActiveTab] = useState('roundTrip');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: 1,
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Flight booking submitted!\nFrom: ${formData.from}\nTo: ${formData.to}\nDepart: ${formData.departDate}\nReturn: ${formData.returnDate}\nPassengers: ${formData.passengers}`);
  };
  
  return (
    <section ref={bookingRef} className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-12">Book Your Flight</h2>
        </AnimatedSection>
        
        <AnimatedSection delay={1}>
          <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800 max-w-4xl mx-auto">
            {/* Tab Selection */}
            <div className="flex mb-6 border-b">
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === 'roundTrip'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('roundTrip')}
              >
                Round Trip
              </button>
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === 'oneWay'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('oneWay')}
              >
                One Way
              </button>
              <button
                className={`px-4 py-2 font-medium ${
                  activeTab === 'multiCity'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab('multiCity')}
              >
                Multi-City
              </button>
            </div>
            
            {/* Booking Form */}
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="from"
                    value={formData.from}
                    onChange={handleInputChange}
                    placeholder="From where?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={handleInputChange}
                    placeholder="To where?"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="date"
                    name="departDate"
                    value={formData.departDate}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Depart</label>
                </div>
                
                {activeTab === 'roundTrip' && (
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="date"
                      name="returnDate"
                      value={formData.returnDate}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required={activeTab === 'roundTrip'}
                    />
                    <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Return</label>
                  </div>
                )}
                
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="number"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleInputChange}
                    min="1"
                    max="10"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Passengers</label>
                </div>
              </div>
              
              <button 
                type="submit"
                className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full"
              >
                Search Flights
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BookingForm;