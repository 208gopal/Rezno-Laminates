import React, { useState, useEffect, forwardRef } from 'react';
import SocialDropdown from './SocialDropdown';
import logo from '../../assets/ReznoLogoWhite.png';
import { useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi';

const Header = forwardRef((props, ref) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Scroll behavior with offset
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element && ref?.current) {
      const navbarHeight = ref.current.offsetHeight || 0;
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });

      // Close mobile menu on click
      if (menuOpen) setMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, []);

  return (
    <header>
      <nav
        ref={ref}
        className={`flex justify-between items-center px-6 py-2 fixed top-0 left-0 right-0 z-50 
        transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled ? 'bg-black text-white shadow-lg' : 'bg-transparent text-white'
        }`}
      >
        {/* Logo */}
        <a href="#" onClick={(e) => handleSmoothScroll(e, 'home')}>
          <img className="w-36 md:w-40 lg:w-48" src={logo} alt="Rezno Laminates Logo" />
        </a>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex sm:justify-between sm:items-center gap-10">
          <li><a href="#" onClick={(e) => handleSmoothScroll(e, 'home')} className="font-sans tracking-widest uppercase text-[#d6dadb] hover:text-white text-xs">HOME</a></li>
          <li><a href="#" onClick={(e) => handleSmoothScroll(e, 'about')} className="font-sans tracking-widest uppercase text-[#d6dadb] hover:text-white text-xs">About</a></li>
          <li><a href="#" onClick={(e) => handleSmoothScroll(e, 'products')} className="font-sans tracking-widest uppercase text-[#d6dadb] hover:text-white text-xs">Products</a></li>
          <li><a href="#" onClick={(e) => handleSmoothScroll(e, 'contact')} className="font-sans tracking-widest uppercase text-[#d6dadb] hover:text-white text-xs">Contact</a></li>
          <li><SocialDropdown /></li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="sm:hidden z-50">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiOutlineX className="text-white text-2xl" />
            ) : (
              <HiOutlineMenuAlt3 className="text-white text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full bg-black text-white px-6 z-40 overflow-hidden transition-all duration-500 ease-in-out ${
          menuOpen ? 'max-h-screen pt-24 opacity-100' : 'max-h-0 pt-0 opacity-0'
        }`}
      >
        <div
          className={`flex flex-col items-center transition-opacity duration-500 ease-in-out ${
            menuOpen ? 'opacity-100 delay-150' : 'opacity-0 delay-0'
          }`}
        >
          {/* 2x2 Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-y-4 gap-x-8 text-center text-base font-normal tracking-wide py-4">
            <a href="#" onClick={(e) => handleSmoothScroll(e, 'home')}>HOME</a>
            <a href="#" onClick={(e) => handleSmoothScroll(e, 'about')}>ABOUT</a>
            <a href="#" onClick={(e) => handleSmoothScroll(e, 'products')}>PRODUCTS</a>
            <a href="#" onClick={(e) => handleSmoothScroll(e, 'contact')}>CONTACT</a>
          </div>

          {/* Social Icons Row */}
          <div className="my-6">
            <SocialDropdown />
          </div>
        </div>
      </div>
    </header>
  );
});

export default Header;