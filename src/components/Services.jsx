import React from 'react';

const Services = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12 text-yellow-500">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-4">Strategy.</h3>
            <ul className="space-y-2">
              <li>Analytics and Research</li>
              <li>Interactive Workshops</li>
              <li>Brand Strategy</li>
              <li>Content Strategy</li>
              <li>Digital Strategy</li>
              <li><a href="#" className="underline">Conversion Rate Optimization</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-4">Design.</h3>
            <ul className="space-y-2">
              <li>Creative Direction</li>
              <li>Brand Guides</li>
              <li>Prototypes</li>
              <li><a href="#" className="underline">UI/UX & Web Design</a></li>
              <li>Visual Asset Creation</li>
              <li>Motion Design</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-yellow-500 mb-4">Development.</h3>
            <ul className="space-y-2">
              <li>System Architecture Design</li>
              <li>Full-Stack Development</li>
              <li><a href="#" className="underline">3rd Party Integrations</a></li>
              <li>Performance Optimization</li>
              <li>WordPress Development</li>
              <li>Shopify Development</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
