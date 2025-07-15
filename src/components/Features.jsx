import React from 'react';
import mockupImg from '../assets/images/features.jpg';

const Features = () => {
  return (
    <section className="flex flex-col md:flex-row bg-[#EDE7DF] px-4 py-20">
      <div className="flex-1 mb-8 md:mb-0 md:mr-8">
        <img src={mockupImg} alt="Mockup" className="w-full rounded shadow" />
      </div>
      <div className="flex-1 space-y-8">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold text-xl mb-2">Branding strategy</h3>
          <p className="mb-2 text-sm">Sample text. Click to select the text box.</p>
          
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold text-xl mb-2">Designing logos</h3>
          <p className="mb-2 text-sm">Sample text. Click to select the text box.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-bold text-xl mb-2">Brand identity</h3>
          <p className="mb-2 text-sm">Sample text. Click to select the text box.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
