// Button.jsx
import React from 'react';

const Button = ({ 
  text, 
  onClick, 
  className = '', 
  disabled = false 
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`relative border border-black px-10 py-4 font-bold tracking-widest uppercase text-sm text-black hover:bg-black hover:text-white transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;