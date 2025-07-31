import React from 'react'
import TeamMemberCard from '../general/TeamMemberCard'
import directorImage from '../../assets/members/director.jpeg'
import { FaLinkedin } from 'react-icons/fa';
import InstagramIcon from '../../assets/links/instagram-svgrepo-com.svg?react';
import LinkedinIcon from '../../assets/links/linkedin-svgrepo-com.svg?react';

function Team() {
  return (
    <section className="text-black px-8 py-16 md:px-20 flex flex-col md:flex-row items-center justify-around">
      {/* Left Section */}
      <div className="max-w-2xl mb-12 md:mb-0 text-left">
        <h2 className="text-5xl font-bold mb-6">CEO'S Message</h2>
        <p className="text-lg leading-relaxed font-semibold pb-6">Dear Valued Partners and Customers,</p>
        <p className="pb-6">At Rezno Clad, we are dedicated to transforming architectural visions into reality with our premium facade solutions.</p>
        <p className="pb-6">Our diverse range of products, including <span className="font-semibold">Reznoclad Exterior HPL, tiles, terracotta, and pinewood</span>, are designed to meet the highest standards of quality, durability, and aesthetic appeal.</p>
        <p className="pb-6">We believe in innovation, sustainability, and excellence, and our commitment to these principles is reflected in every product we offer. Whether you are designing a modern skyscraper or a cozy residential home, our solutions provide the perfect blend of functionality and beauty.</p>
        <p className="pb-6">Thank you for your continued support and trust in <span className="font-semibold">Rezno Clad Company</span>. Together, we will continue to build a future where architecture and nature coexist harmoniously.</p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center text-center">
        <div className="relative w-52 h-52 rounded-full border-2 border-gray-400 p-1">
          <img
            src={directorImage}
            alt="CEO"
            className="rounded-full object-cover w-full h-full"
          />
          {/* Optional blue arc could be added with SVG if required */}
        </div>
        <p className="mt-6 text-sm text-gray-400">DIRECTOR</p>
        <h3 className="text-2xl font-semibold mb-4">ROHIT CHHILLAR</h3>
        {/* Social Links */}
        <div className="flex gap-5">
          <a href="https://www.facebook.com/share/15f1LBgP5A/" className="text-gray-400 hover:text-black transition-colors">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
              <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
            </svg>
            <span className="sr-only">Facebook page</span>
          </a>
          <a href="https://www.instagram.com/rezno_laminates?igsh=MTk0OGJlajRqcjlodA==" className="text-gray-400 hover:text-black transition-colors">
            <InstagramIcon className="w-4 h-4" />
            <span className="sr-only">Instagram page</span>
          </a>
          <a href="https://www.linkedin.com/company/rezno-laminates-india-pvt-ltd-hpl/about/" className="text-gray-400 hover:text-black transition-colors">
            <LinkedinIcon className="w-4 h-4" />
            <span className="sr-only">Linkedin account</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Team