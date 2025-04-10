
import React from 'react';

export default function About() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen my-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">About Prestige Horizons</h1>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Excellence in real estate services since 2010</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="rounded-xl shadow-lg overflow-hidden bg-white">
            <div className="bg-indigo-600 h-2"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                At Prestige Horizons, we envision transforming the real estate experience through innovation, 
                integrity, and personalized attention. We strive to be the premier agency that clients trust
                with their most significant investments and life transitions.
              </p>
            </div>
          </div>
          
          <div className="rounded-xl shadow-lg overflow-hidden bg-white">
            <div className="bg-indigo-600 h-2"></div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Commitment</h2>
              <p className="text-gray-600 leading-relaxed">
                We are committed to providing unparalleled service in luxury properties, residential homes,
                and investment opportunities. Our team of elite professionals guides you through every step
                with expertise and dedication to excellence.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Why Choose Prestige Horizons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Expertise</h3>
              <p className="text-gray-600">Our agents average 12+ years of market experience with specialized knowledge in local trends.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Personalized Service</h3>
              <p className="text-gray-600">We tailor our approach to your unique needs, ensuring a customized and satisfying experience.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">Leveraging cutting-edge technology and marketing strategies to maximize property exposure and value.</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Promise</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Whether you're buying your dream home, selling a property, or building an investment portfolio,
            Prestige Horizons delivers exceptional results through unwavering dedication and professional excellence.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300">
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
}