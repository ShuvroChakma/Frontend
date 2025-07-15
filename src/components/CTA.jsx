import React from 'react';
import heroImg from '../assets/images/cta.jpg';

const CTA = () => {
  return (
    <section className="relative bg-yellow-500 text-white">
      <img src={heroImg} alt="Hero" className="w-full h-full object-cover absolute inset-0 z-0 opacity-40" />
      <div className="relative max-w-5xl mx-auto px-4 py-32 z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Construction and renovation projects</h1>
        <p className="mb-6 max-w-xl">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
        </p>
        <button className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">
          CONTACT US
        </button>
      </div>
    </section>
  );
};

export default CTA;
