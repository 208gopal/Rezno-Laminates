import React, { useEffect, useRef, useState } from 'react';

const ProjectCard = ({ title, images = [] }) => {
  if (!images || images.length === 0) {
    return (
      <div className="group transition-transform duration-300 hover:-translate-y-2">
        <div className="h-64 bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-400">
          {title}
        </div>
        <h3 className="text-xl font-medium text-gray-800 mb-1">{title}</h3>
      </div>
    );
  }

  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true); // controllable autoplay
  const length = images.length;
  const carouselRef = useRef(null);

  const extendedImages = [
    images[images.length - 1],
    ...images,
    images[0]
  ];

  useEffect(() => {
    if (!hovered || !autoplayEnabled) return;

    const interval = setInterval(() => {
      slideTo(index + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [index, hovered, autoplayEnabled]);

  const slideTo = (newIndex) => {
    setIndex(newIndex);
    setTransition(true);
  };

  const handlePrev = () => {
    setAutoplayEnabled(false); // Pause autoplay on interaction
    slideTo(index - 1);
  };

  const handleNext = () => {
    setAutoplayEnabled(false); // Pause autoplay on interaction
    slideTo(index + 1);
  };

  const handleTransitionEnd = () => {
    if (index === 0) {
      setTransition(false);
      setIndex(length);
    } else if (index === length + 1) {
      setTransition(false);
      setIndex(1);
    }
  };

  const handleMouseEnter = () => {
    setAutoplayEnabled(true); // resume autoplay on re-hover
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="group transition-transform duration-300 hover:-translate-y-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="h-64 bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
        <div
          ref={carouselRef}
          className="flex h-full w-full"
          style={{
            width: `${extendedImages.length * 100}%`,
            transform: `translateX(-${index * (100 / extendedImages.length)}%)`,
            transition: transition ? 'transform 0.5s ease-in-out' : 'none'
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {extendedImages.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${title} - ${i}`}
              className="w-full h-full object-cover flex-shrink-0"
              style={{ width: `${100 / extendedImages.length}%` }}
            />
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:scale-105 transition-transform z-10"
        >
          ‹
        </button>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:scale-105 transition-transform z-10"
        >
          ›
        </button>
      </div>

      <h3 className="text-xl font-medium text-gray-800 mb-1">
        {title}
      </h3>
    </div>
  );
};

export default ProjectCard;