import React from 'react';
import contactImg from '../assets/images/contact.jpg';

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex-1 bg-[#EDE7DF] p-12 flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-4">CONTACT US</h2>
        <p className="mb-6">We are here to meet any business need and to promote your company online!</p>
        <hr className="mb-6" />
        <p><strong>Phone:</strong> 123456789</p>
        <p><strong>Location:</strong>Dhaka, Bangladesh</p>
        <p><strong>Mail:</strong> Xpartex@test.com</p>
       
      </div>
      <div className="flex-1">
        <img src={contactImg} alt="Contact" className="w-full h-full object-cover" />
      </div>
    </section>
  );
};

export default Contact;
