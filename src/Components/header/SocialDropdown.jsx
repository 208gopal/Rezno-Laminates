import React, { useState, useRef, useEffect } from "react";
import { FaLink, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function SocialDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* For medium screens and up (Dropdown) */}
      <div className="relative hidden sm:block" ref={ref}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-8 h-8 border-[0.5px] border-white bg-transparent text-white flex items-center justify-center hover:bg-gray-100 hover:text-black transition"
        >
          <FaLink className="w-3.5 h-3.5" />
        </button>

        <div
          className={`absolute right-0 mt-2 flex flex-col items-center gap-2 transition-all duration-300 transform ${
            open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
          }`}
        >
          <a
            href="https://www.facebook.com/share/15f1LBgP5A/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-white text-white flex items-center justify-center hover:border-gray-200 hover:bg-gray-100 hover:text-black transition"
          >
            <FaFacebookF className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.linkedin.com/company/rezno-laminates-india-pvt-ltd-hpl/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-white text-white flex items-center justify-center hover:border-gray-200 hover:bg-gray-100 hover:text-black transition"
          >
            <FaLinkedinIn className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://www.instagram.com/rezno_laminates?igsh=MTk0OGJlajRqcjlodA=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 border border-white text-white flex items-center justify-center hover:border-gray-200 hover:bg-gray-100 hover:text-black transition"
          >
            <FaInstagram className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* For small screens — show all icons directly */}
      <div className="flex gap-3 sm:hidden">
        <a
          href="https://www.facebook.com/share/15f1LBgP5A/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 border border-white text-white flex items-center justify-center hover:border-gray-200 hover:bg-gray-100 hover:text-black transition"
        >
          <FaFacebookF className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://www.linkedin.com/company/rezno-laminates-india-pvt-ltd-hpl/about/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 border border-white text-white flex items-center justify-center hover:border-gray-200 hover:bg-gray-100 hover:text-black transition"
        >
          <FaLinkedinIn className="w-3.5 h-3.5" />
        </a>
        <a
          href="https://www.instagram.com/rezno_laminates?igsh=MTk0OGJlajRqcjlodA=="
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 border border-white text-white flex items-center justify-center hover:border-gray-200 hover:bg-gray-100 hover:text-black transition"
        >
          <FaInstagram className="w-3.5 h-3.5" />
        </a>
      </div>
    </>
  );
}