import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import ReviewComponent from './ReviewComponent';

const Testimonials = () => {
  return (
    <section className="max-w-7xl mx-auto  text-center py-20">
      <h2 className="text-white">Testimonials</h2>
      <h1 className="text-white">
        What our customers say
      </h1>

      <ReviewComponent/>
    </section>
  );
};

export default Testimonials;
