import React, { useRef } from 'react';
import clientsBg from '../../assets/sectionBg/clientsBackground.jpg';
import hyundaiLogo from '../../assets/clients/hyundai-logo.png';
import ambujaLogo from '../../assets/clients/ambuja-cement.png';
import daburLogo from '../../assets/clients/Dabur-Logo.png';
import cityParkLogo from '../../assets/clients/hotel-city-park-logo.png';
import mahagunLogo from '../../assets/clients/MAHAGUN-logo.png';
import prestigeGroupLogo from '../../assets/clients/PRESTIGE-GROUP-logo.png';
import shalimarLogo from '../../assets/clients/shalimar-logo.png';

const logos = [
  hyundaiLogo,
  ambujaLogo,
  daburLogo,
  cityParkLogo,
  mahagunLogo,
  prestigeGroupLogo,
  shalimarLogo,
];

function Clients() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -330, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 330, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-20 h-[65vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh] overflow-hidden">
      {/* Background */}
      <div className="w-full h-[40vh] sm:h-[50vh] lg:h-[60vh] relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${clientsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />
      </div>

      {/* Content */}
      <section className="absolute inset-0 z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
        <div className="text-left mb-8 sm:mb-12 lg:mb-16 mt-12 sm:mt-16 lg:mt-20">
          <h2 className="text-xs sm:text-sm lg:text-base font-light mb-2 sm:mb-4 lg:mb-6 tracking-wider text-white">
            AMBITIOUS CLIENTS
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-8 sm:mb-9 lg:mb-12 leading-tight text-white">
            We have worked with great people.
          </p>

          {/* Scrollable Cards Section */}
          <div className="relative">
            {/* Left Button */}
            <button 
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all -ml-4"
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Cards Container */}
            <div
              ref={scrollRef}
              className="overflow-x-auto scroll-smooth hide-scrollbar px-12 py-10"
            >
              <div className="flex gap-6 justify-start w-max">
                {logos.map((logo, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-6 h-[35vh] min-w-[300px] max-w-[300px] rounded-xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] transition-shadow duration-300 ease-in-out flex items-center justify-center"
                  >
                    <img
                      src={logo}
                      alt={`client-${idx}`}
                      className="h-20 sm:h-24 max-w-[180px] object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Button */}
            <button 
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all -mr-4"
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Scrollbar hide (can also be handled via plugin) */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Clients;