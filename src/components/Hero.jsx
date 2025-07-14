import React from 'react';
import heroLayer1 from "../assets/images/hero-layer1.jpg";
import heroLayer2 from "../assets/images/hero-layer2.png";

const Hero = () => {
  return (
    <section className="bg-[#DDCFC6] px-4 py-8 lg:py-16 min-h-screen relative overflow-hidden">
      
      {/* Yellow accent block - now better for mobile */}
      <div className="hidden lg:block absolute top-10 right-20 bg-[#F0AA00] w-[400px] h-[620px] transform translate-x-10 z-0"></div>

      <div className="w-full max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 pt-8 lg:pt-20">
          
          {/* Left text/content block */}
          <div className="w-full lg:w-[70%]">
            <div className="bg-white rounded-lg shadow-md p-4 lg:p-8 flex flex-col justify-center h-full">
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight text-center lg:text-left">
                  We Create Websites
                </h2>
                
                <p className="text-gray-600 text-base leading-relaxed text-center lg:text-left">
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                  fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                  culpa qui officia deserunt.
                </p>
                
                <p className="text-sm text-gray-500 text-center lg:text-left">
                  Image from <span className="text-blue-600 underline">Freepik</span>
                </p>
                
                <div className="text-center lg:text-left">
                  <button className="px-6 py-3 lg:px-8 lg:py-4 bg-black text-white rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300 uppercase tracking-wide">
                    VIEW PORTFOLIO
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right image container */}
          <div className="w-full lg:w-[50%] relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] lg:max-w-none">
              {/* Back tablet */}
              <div className="absolute -top-6 -left-0 lg:-top-10 lg:left-50 z-0 w-full">
                <img 
                  className="w-full h-auto object-cover rounded-md shadow-lg" 
                  src={heroLayer1} 
                  alt="Website design example 1" 
                />
              </div>

              {/* Front tablet */}
              <div className="relative -z-10 hidden lg:block lg:left-20">
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    className="w-full h-120 object-cover" 
                    src={heroLayer2} 
                    alt="Website design example 2" 
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;