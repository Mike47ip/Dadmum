import React, { useState } from 'react';
import { MapPin, Calendar, Users, Plane, Cpu, Headphones, Phone, Mail } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const BookingForm = ({ bookingRef }) => {
  // Formspree endpoint - replace with your actual Formspree form ID
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mpwdeeda"; 
  
  const [activeTab, setActiveTab] = useState('airlineTicketing');
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  
  const [formData, setFormData] = useState({
    service: 'Airline Ticketing',
    from: '',
    to: '',
    departDate: '',
    returnDate: '',
    passengers: 1,
    name: '',
    email: '',
    phone: '',
    message: '',
    heliType: '', // For helicopter services
    charterDuration: '', // For charter services
    ambulanceDetails: '', // For air ambulance
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleServiceChange = (service) => {
    setActiveTab(service);
    setFormData({
      ...formData,
      service: getServiceTitle(service)
    });
  };
  
  const getServiceTitle = (serviceKey) => {
    const services = {
      airlineTicketing: 'Airline Ticketing',
      airAmbulance: 'Air Ambulance Booking',
      heliAerial: 'Helicopter Aerial Booking',
      charterOperators: 'Aircraft Charter Operators Booking',
      heliTour: 'Helicopter Tour Booking',
      vipHeliTransfer: 'VIP Helicopter Transfer Services Booking'
    };
    return services[serviceKey];
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitted: false, submitting: true, info: { error: false, msg: null } });
    
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Thank you! Your booking request has been submitted." }
        });
        
        // Reset form after successful submission
        setFormData({
          service: getServiceTitle(activeTab),
          from: '',
          to: '',
          departDate: '',
          returnDate: '',
          passengers: 1,
          name: '',
          email: '',
          phone: '',
          message: '',
          heliType: '',
          charterDuration: '',
          ambulanceDetails: '',
        });
        
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: "There was a problem submitting your booking. Please try again." }
      });
    }
  };
  
  const renderServiceFields = () => {
    switch (activeTab) {
      case 'airlineTicketing':
        return (
          <>
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
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Return (optional)</label>
              </div>
              
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="number"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  min="1"
                  max="100"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Passengers</label>
              </div>
            </div>
          </>
        );
        
      case 'airAmbulance':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  placeholder="Patient pickup location"
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
                  placeholder="Destination hospital/facility"
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
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Required Date</label>
              </div>
              
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
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Total Passengers (incl. patient)</label>
              </div>
              
              <div className="md:col-span-2">
                <textarea
                  name="ambulanceDetails"
                  value={formData.ambulanceDetails}
                  onChange={handleInputChange}
                  placeholder="Please provide details about the patient's condition and any special requirements"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
            </div>
          </>
        );
        
      case 'heliAerial':
      case 'heliTour':
      case 'vipHeliTransfer':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  placeholder="Pickup location"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              
              {activeTab !== 'heliAerial' && (
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={handleInputChange}
                    placeholder="Destination"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              )}
              
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
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Date</label>
              </div>
              
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="number"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  min="1"
                  max={activeTab === 'vipHeliTransfer' ? 6 : 10}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Passengers</label>
              </div>
              
              <div className="relative">
                <Cpu className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select
                  name="heliType"
                  value={formData.heliType}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Helicopter Type</option>
                  <option value="light">Light (3-4 passengers)</option>
                  <option value="medium">Medium (5-8 passengers)</option>
                  <option value="heavy">Heavy (9+ passengers)</option>
                  {activeTab === 'vipHeliTransfer' && <option value="vip">VIP/Executive Configuration</option>}
                </select>
              </div>
              
              {activeTab === 'heliAerial' && (
                <div className="relative">
                  <input
                    type="text"
                    name="to"
                    value={formData.to}
                    onChange={handleInputChange}
                    placeholder="Area to survey/photograph"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              )}
            </div>
          </>
        );
        
      case 'charterOperators':
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  name="from"
                  value={formData.from}
                  onChange={handleInputChange}
                  placeholder="Departure location"
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
                  placeholder="Destination"
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
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Departure Date</label>
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Return Date (if needed)</label>
              </div>
              
              <div className="relative">
                <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="number"
                  name="passengers"
                  value={formData.passengers}
                  onChange={handleInputChange}
                  min="1"
                  max="150"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <label className="absolute -top-2 left-2 bg-white px-1 text-xs text-gray-500">Passengers</label>
              </div>
              
              <div className="relative">
                <Plane className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <select
                  name="charterDuration"
                  value={formData.charterDuration}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Charter Type</option>
                  <option value="one-way">One-way Charter</option>
                  <option value="round-trip">Round-trip Charter</option>
                  <option value="multi-city">Multi-city Charter</option>
                  <option value="hourly">Hourly Charter</option>
                </select>
              </div>
            </div>
          </>
        );
        
      default:
        return null;
    }
  };
  
  const renderContactFields = () => {
    return (
      <div className="border-t border-gray-200 mt-6 pt-6">
        <h3 className="text-lg font-medium mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Phone Number"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="md:col-span-2">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Additional requirements or questions"
              rows="3"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
        </div>
      </div>
    );
  };
  
  return (
    <section ref={bookingRef} className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <h2 className="text-3xl font-bold text-center mb-6">Book Your Service</h2>
          <p className="text-center text-blue-100 mb-10 max-w-2xl mx-auto">
            Select from our range of flight services and complete the form below for a quick quote. Our team will contact you shortly with the best options.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={1}>
          <div className="bg-white rounded-lg shadow-lg p-6 text-gray-800 max-w-4xl mx-auto">
            {/* Service Selection Tabs */}
            <div className="flex flex-wrap mb-6 border-b overflow-x-auto hide-scrollbar pb-1">
              <button
                className={`px-3 py-2 whitespace-nowrap font-medium mr-1 ${
                  activeTab === 'airlineTicketing'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
                onClick={() => handleServiceChange('airlineTicketing')}
              >
                <Plane className="inline mr-1 h-4 w-4" /> Airline Ticketing
              </button>
              <button
                className={`px-3 py-2 whitespace-nowrap font-medium mr-1 ${
                  activeTab === 'airAmbulance'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
                onClick={() => handleServiceChange('airAmbulance')}
              >
                <Plane className="inline mr-1 h-4 w-4" /> Air Ambulance
              </button>
              <button
                className={`px-3 py-2 whitespace-nowrap font-medium mr-1 ${
                  activeTab === 'heliAerial'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
                onClick={() => handleServiceChange('heliAerial')}
              >
                <Cpu className="inline mr-1 h-4 w-4" /> Helicopter Aerial
              </button>
              <button
                className={`px-3 py-2 whitespace-nowrap font-medium mr-1 ${
                  activeTab === 'charterOperators'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
                onClick={() => handleServiceChange('charterOperators')}
              >
                <Plane className="inline mr-1 h-4 w-4" /> Charter Operators
              </button>
              <button
                className={`px-3 py-2 whitespace-nowrap font-medium mr-1 ${
                  activeTab === 'heliTour'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
                onClick={() => handleServiceChange('heliTour')}
              >
                <Cpu className="inline mr-1 h-4 w-4" /> Helicopter Tour
              </button>
              <button
                className={`px-3 py-2 whitespace-nowrap font-medium ${
                  activeTab === 'vipHeliTransfer'
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500'
                }`}
                onClick={() => handleServiceChange('vipHeliTransfer')}
              >
                <Headphones className="inline mr-1 h-4 w-4" /> VIP Heli Transfer
              </button>
            </div>
            
            {/* Status Messages */}
            {status.info.msg && (
              <div className={`mb-4 p-4 rounded-md ${status.info.error ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {status.info.msg}
              </div>
            )}
            
            {/* Booking Form */}
            <form onSubmit={handleSubmit}>
              {renderServiceFields()}
              {renderContactFields()}
              
              <button 
                type="submit"
                disabled={status.submitting}
                className={`mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors w-full ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {status.submitting ? 'Submitting...' : 'Request Booking'}
              </button>
              
              <div className="mt-4 text-center text-sm text-gray-500">
                <p>You can also contact us directly:</p>
                <p className="mt-1">
                  <a href="tel:+233560672809" className="text-blue-600 hover:underline">+233-56-067-2809</a> | 
                  <a href="tel:+233249768534" className="text-blue-600 hover:underline ml-2">+233-24-976-8534</a>
                </p>
                <p className="mt-1">
                  <a href="mailto:dadmumticketingandchaterdfli@gmail.com" className="text-blue-600 hover:underline">
                    dadmumticketingandchaterdfli@gmail.com
                  </a>
                </p>
              </div>
            </form>
          </div>
        </AnimatedSection>
      </div>
      
      {/* Custom styling for tab scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default BookingForm;