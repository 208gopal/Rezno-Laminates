import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({ phoneNumber = '+919911580106' }) => {
  const formattedNumber = String(phoneNumber).replace(/\D/g, '');
  const whatsappLink = `https://wa.me/${formattedNumber}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="p-4 rounded-full bg-gradient-to-tr from-green-500 to-emerald-600 shadow-xl transition-transform duration-300 transform group-hover:scale-110 group-hover:shadow-2xl">
        <FaWhatsapp size={28} className="text-white drop-shadow" />
      </div>
    </a>
  );
};

export default WhatsAppButton;