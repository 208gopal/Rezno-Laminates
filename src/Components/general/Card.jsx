import React from 'react';
import Button from './ProjectButton';

function Card({ bg, title, description, navbarRef }) {

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

  const handleDownloadOrNavigate = async (e) => {
    e.preventDefault();
    const fileName = `${title} Brochure.pdf`;
    const filePath = `/assets/Brochures/${fileName}`;

    try {
      const response = await fetch(filePath);

      // Check if response is ok and is a valid PDF
      const contentType = response.headers.get('content-type');
      if (!response.ok || !contentType?.includes('application/pdf')) {
        handleSmoothScroll('contact');
        return;
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Fetch failed:', err);
      handleSmoothScroll('contact');
    }
  };

  return (
    <div
      className="relative rounded-lg shadow-lg w-full h-full overflow-hidden text-center"
      style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      <div className="relative z-20 p-4 sm:p-6 lg:p-8 flex flex-col h-full">
        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-4 text-white">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-white font-normal leading-relaxed tracking-normal mb-4 sm:mb-6 flex-grow">
          {description}
        </p>

        <div className="border-t border-white/40 pt-3 sm:pt-4">
          <Button
            text="LEARN MORE"
            onClick={handleDownloadOrNavigate}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;