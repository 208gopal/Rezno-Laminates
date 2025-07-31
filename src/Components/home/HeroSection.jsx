import React, { useState, useEffect } from 'react';
import heroImg from '../../assets/sectionBg/hero.jpg';
import { useLocation } from 'react-router-dom';

export default function HeroSection({ navbarRef }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  const handleSmoothScroll = (targetId) => {
    const element = document.getElementById(targetId);
    if (element && navbarRef?.current) {
      const navbarHeight = navbarRef.current.offsetHeight || 0;
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - navbarHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
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
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center text-white"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="text-center z-10">
        <p className="tracking-widest text-sm md:text-base uppercase">Create stunning exteriors beyond imagination with</p>
        <h1 className="text-3xl sm:text-6xl font-bold mt-2 my-8">REZNO LAMINATES</h1>
        <button
          className="mt-6 px-8 py-3 border border-white uppercase tracking-widest hover:bg-white hover:text-black transition"
          onClick={(e) => handleSmoothScroll('projects')}
        >
          View Projects
        </button>
      </div>
    </section>
  );
}