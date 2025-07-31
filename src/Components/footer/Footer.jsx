import React from 'react';
import footerBg from '../../assets/sectionBg/footerBg.jpg';
import reznoLogo from '../../assets/reznoLogoWhite.png';
import InstagramIcon from '../../assets/links/instagram-svgrepo-com.svg?react';
import LinkedinIcon from '../../assets/links/linkedin-svgrepo-com.svg?react';

function NewFooter() {
  return (
    <div className='w-full flex justify-center items-center bg-black'>
      <footer className='w-full relative bg-cover bg-center px-[10%] py-20 text-white' style={{backgroundImage: `url(${footerBg})`}}>
        {/* Overlay */}
        <div className='absolute inset-0 bg-black bg-opacity-80'></div>

        {/* Content Container */}
        <div className='relative z-10 flex flex-col gap-16'>
          {/* Upper Section */}
          <div className='flex flex-col md:flex-row justify-between gap-10'>
            {/* Left Column */}
            <div className='flex-1'>
              <img src={reznoLogo} alt="Rezno Logo" className='w-48 mb-6' />
              <p className='text-sm text-left font-light text-gray-300 tracking-widest leading-relaxed'>
                The company principle of Architecture-Studio is the collective conception. From the very beginning, 
                the practice has balanced in the virtues of exchange, crossing ideas, common effort, 
                shared knowledge and enthusiasm.
              </p>
            </div>

            {/* Right Column */}
            <div className='flex-1 flex flex-col items-end'>
              <h2 className='text-xl font-light tracking-widest pb-8 pt-10'>GET IN TOUCH</h2>
              <div className='text-right'>
                <p className='text-sm font-light text-gray-300 tracking-widest pb-2'>+91 99115 80106</p>
                <p className='text-sm font-light text-gray-300 tracking-widest pb-2'>
                  <a href="mailto:prague-sichfacts@info.com" className='hover:underline'>
                    rohit@reznoclad.com
                  </a>
                </p>
                <p className='text-sm font-light text-gray-300 tracking-widest'>
                  A5/28, First Floor, Pocket A5, Pocket 3, Sector 16, Rohini, Delhi, 110089
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className='border-t border-gray-700'></div>

          {/* Lower Section */}
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            {/* Copyright */}
            <p className='text-xs font-light text-gray-400 tracking-widest'>
                © 2025 Rezno Laminates. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-5">
              <a href="https://www.facebook.com/share/15f1LBgP5A/" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                  <path fillRule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clipRule="evenodd"/>
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a href="https://www.instagram.com/rezno_laminates?igsh=MTk0OGJlajRqcjlodA==" className="text-gray-400 hover:text-white transition-colors">
                <InstagramIcon className="w-4 h-4" />
                <span className="sr-only">Instagram page</span>
              </a>
              <a href="https://www.linkedin.com/company/rezno-laminates-india-pvt-ltd-hpl/about/" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon className="w-4 h-4" />
                <span className="sr-only">Linkedin account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default NewFooter;