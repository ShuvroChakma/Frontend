import React from 'react';
import heroLayer1 from "../assets/images/hero-layer1.jpg";
import heroLayer2 from "../assets/images/hero-layer2.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#DDCFC6] px-4 py-12 lg:py-20 min-h-screen">
      
      <div className="max-w-6xl mx-auto relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-xl shadow-lg p-6 lg:p-10">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                We Create Websites
              </h2>

              <p className="text-gray-600 text-base text-center lg:text-left leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
              </p>

              <p className="text-sm text-gray-500 text-center lg:text-left">
                Image from <a href="#" className="text-blue-600 underline">Freepik</a>
              </p>

              <div className="text-center lg:text-left">
                <button className="px-6 py-3 lg:px-8 lg:py-4 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition duration-300 uppercase tracking-wide">
                  View Portfolio
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
          <div className="relative w-[300px] sm:w-[350px] lg:w-[450px]">
            
            {/* Diagonal Line Pattern */}
            <img 
              src={heroLayer2} 
              alt="Diagonal Pattern" 
              className="absolute -top-1 -left-2 w-full h-full object-cover z-0 scale-125 opacity-50"
            />

            {/* Device Mockup */}
            <img 
              src={heroLayer1} 
              alt="Website mockup" 
              className="relative w-full h-auto object-cover rounded-md shadow-2xl z-10"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
