import React, { useState } from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Vipin Singh',
    quote:
      'Rezno India Laminates Pvt Limited delivers top-notch products and services that are worth every penny. I highly recommend them for anyone looking to enhance their outdoor space with quality tiles and expert installation.',
  },
  {
    name: 'Janvi Chug',
    quote:
      'This office is without question closer than some families,I feel more at home, more comfortable, and more supported than I ever have before.',
  },
  {
    name: 'Gopal Gupta',
    quote:
      'Very deep knowledge of industry and expertise in their field, they execute the projects before timeline.',
  },
  {
    name: 'Komal Tomar',
    quote:
      'Amazing work done by rezno team.',
  },
  {
    name: 'Vivek Malik',
    quote:
      'Provide good quality of HPL and tera Cotta.',
  },
  {
    name: 'Jitendra Kumar Kushwaha',
    quote:
      'Razno cladding best platform doing work.',
  },
];

export default function Testimonials() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 flex flex-col justify-center">
      <h2 className="text-sm md:text-base lg:text-lg font-light mb-3 md:mb-6 text-left tracking-wider">Testimonials</h2>
      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-[10vh] text-left leading-tight">They love us.</h3>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left List */}
        <div className="border border-gray-300 w-full md:max-w-[200px] md:h-[320px] overflow-y-auto">
        {testimonials.map((item, idx) => (
            <div
            key={idx}
            className={`cursor-pointer px-4 py-3 border-l-2 transition-all ${
                selectedIndex === idx
                ? 'border-black text-black font-medium'
                : 'border-transparent text-gray-400'
            }`}
            onClick={() => setSelectedIndex(idx)}
            >
            {item.name}
            </div>
        ))}
        </div>

        {/* Testimonial Card */}
        <div className="flex-1 bg-white p-10 rounded-md shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] transition-all flex flex-col justify-center items-center text-center">
          <div className="flex justify-center mb-6 text-3xl text-gray-600">
            <FaQuoteRight />
          </div>
          <p className="text-center text-gray-600 text-lg leading-relaxed mb-6">
            {testimonials[selectedIndex].quote}
          </p>
          <p className="text-center text-black font-semibold text-lg">
            - {testimonials[selectedIndex].name}
          </p>
        </div>
      </div>
    </div>
  );
}
