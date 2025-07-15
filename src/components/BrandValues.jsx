import React from 'react';
import img1 from '../assets/images/brand-1.jpg'; 
import img2 from '../assets/images/brand-2.jpg'; 
import img3 from '../assets/images/brand-3.jpg'; 
import img4 from '../assets/images/brand-2.jpg'; // make sure it's distinct

const BrandValues = () => {
  return (
    <section className="bg-[#E9DED7] px-4 py-16">
      <div className="max-w-7xl mx-auto relative w-[90%]">
        
        {/* Responsive Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="col-span-1 md:row-span-2">
            <img src={img1} alt="Brand 1" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
          <div className="col-span-1">
            <img src={img2} alt="Brand 2" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
          <div className="col-span-1">
            <img src={img3} alt="Brand 3" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
          <div className="col-span-1 md:row-span-2">
            <img src={img4} alt="Brand 4" className="w-full h-full object-cover rounded-lg shadow" />
          </div>
        </div>

        {/* Centered Branding Box */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="bg-black text-white text-center p-6 md:p-8 rounded shadow-lg max-w-xs md:max-w-sm z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Brand Values</h2>
            <p className="text-sm md:text-base mb-4">
              Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo
              sagittis suscipit ultrices.
            </p>
            
            <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-black transition">
              LEARN MORE
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BrandValues;
