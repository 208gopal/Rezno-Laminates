import React from 'react';
import servicesBg from '../../assets/sectionBg/servicesBg.jpg';
import Card from '../general/Card';
import pergolaBg from '../../assets/productCardBg/pergolaBg.jpg'
import terracottaBg from '../../assets/productCardBg/terracottaBg.jpg'
import cubiclesBg from '../../assets/productCardBg/cubiclesBg.jpg'
import porcelatoBg from '../../assets/productCardBg/porcelatoBg.jpg'
import pineBg from '../../assets/productCardBg/pineBg.jpg'
import hplBg from '../../assets/productCardBg/hplBg.jpg'

function Services({ navbarRef }) {
  return (
    // height is what makes it responsive
    <div className="relative h-[170vh] sm:h-[195vh] md:h-[120vh] lg:h-[110vh] xl:h-[110vh] mt-20">
      {/* Background Container */}
      <div className="relative w-full h-[40vh] min-h-[300px] sm:h-[50vh] lg:h-[60vh] ">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${servicesBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
      </div>

      {/* Content Section */}
      <section className="absolute inset-0 z-20 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col">
        <div className="text-left mb-8 sm:mb-12 lg:mb-16 mt-12 sm:mt-16 lg:mt-20 flex-grow">
          <h2 className="text-xs sm:text-sm lg:text-base font-light mb-2 sm:mb-4 lg:mb-6 tracking-wider text-white">
            PRODUCTS
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 sm:mb-9 lg:mb-12 leading-tight text-white">
            This is what we do.
          </p>
          
          {/* Cards Container */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-12">
            <Card  
              bg={pergolaBg}
              title="Pergola & Decking"
              description="Elevate your outdoor spaces with our weather-resistant pergola and decking solutions, crafted for beauty and durability."
              navbarRef={navbarRef}
            />
            <Card  
              bg={terracottaBg}
              title="Terracotta"
              description="Add earthy elegance to your architecture with our sustainable terracotta cladding, known for its charm and thermal insulation."
              navbarRef={navbarRef}
            />
            <Card  
              bg={hplBg}
              title="HPL"
              description="High-Pressure Laminates that merge form and function—perfect for robust, stylish exterior and interior applications."
              navbarRef={navbarRef}
            />
            <Card  
              bg={cubiclesBg}
              title="Toilet Cubicles"
              description="Designed for hygiene and privacy, our modular toilet cubicles are ideal for high-traffic commercial and public spaces."
              navbarRef={navbarRef}
            />
            <Card  
              bg={porcelatoBg}
              title="Porcelato Tiles"
              description="Luxurious, stain-resistant Porcelato tiles that bring sophistication and lasting shine to any floor or wall."
              navbarRef={navbarRef}
            />
            <Card  
              bg={pineBg}
              title="Pinewood"
              description="Versatile and naturally beautiful, our pinewood panels offer rustic charm and structural integrity for all environments."
              navbarRef={navbarRef}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
