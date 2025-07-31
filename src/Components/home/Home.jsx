import React, { useRef, useLayoutEffect } from 'react';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import Projects from './Projects';
import Services from './Services';
import Team from './Team';
import Clients from './Clients';
import Testimonials from './Testimonials';
import Contact from './Contact';
import WhatsAppButton from './WhatsAppButton';
import { useLocation, useNavigate } from 'react-router-dom';

function Home({ navbarRef }) {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);
  const productsRef = useRef(null);
  const projectsRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  // Reset URL on reload
  useLayoutEffect(() => {
    if (window.performance.navigation.type === 1) {
      navigate('/', { replace: true });
      window.scrollTo(0, 0);
    }
  }, [navigate]);

  const scrollWithDynamicOffset = (ref) => {
    const navbarHeight = navbarRef?.current?.offsetHeight || 151; // default fallback
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  useLayoutEffect(() => {
    const scrollToHash = (hash, ref) => {
      if (location.hash === hash && ref.current) {
        setTimeout(() => scrollWithDynamicOffset(ref), 0);
      }
    };

    scrollToHash("#about", aboutRef);
    scrollToHash("#contact", contactRef);
    scrollToHash("#home", homeRef);
    scrollToHash("#products", productsRef);
    scrollToHash("#projects", projectsRef);
  }, [location]);

  return (
    <div>
      <div ref={homeRef} id="home"><HeroSection navbarRef={navbarRef} /></div>
      <StatsSection />
      <div ref={projectsRef} id='projects'><Projects /></div>
      <div ref={productsRef} id='products'><Services navbarRef={navbarRef} /></div>
      <div ref={aboutRef} id="about"><Team /></div>
      <Clients />
      <Testimonials />
      <div ref={contactRef} id="contact"><Contact /></div>
      <WhatsAppButton />
    </div>
  );
}

export default Home;