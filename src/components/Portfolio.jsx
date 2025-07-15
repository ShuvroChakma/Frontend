import React from 'react';
import img1 from '../assets/images/portfolio-image-1.jpg';
import img2 from '../assets/images/portfolio-image-2.jpg';
import img3 from '../assets/images/portfolio-image-3.jpg';
import img4 from '../assets/images/portfolio-image-4.jpg';
const portfolioItems = [
  {
    title: 'Website Design',
    img: img1,
  },
  {
    title: 'Mobile Application',
    img: img2,
  },
  {
    title: 'Corporate Design',
    img: img3,
  },
  {
    title: 'Mobile Application',
    img: img4,
  },
  {
    title: 'Responsive Design',
    img: img2,
  },
  {
    title: 'Digital Product',
    img: img3,
  },
];

const Portfolio = () => {
  return (
    <section className="bg-[#292D33] text-white px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Portfolio</h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-12">
          Quam quisque id diam vel quam elementum. Vestibulum lectus mauris ultrices eros in cursus
          turpis massa tincidunt. Pellentesque habitant morbi tristique senectus et netus.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <div key={index} className="bg-white text-black rounded overflow-hidden shadow-md">
              <img src={item.img} alt={item.title} className="w-full h-60 object-cover" />
              <div className="py-4 text-center font-semibold text-lg">
                {item.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
