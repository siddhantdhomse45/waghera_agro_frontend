import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowUpLong } from "react-icons/fa6";
import React, { useState, useEffect } from "react";

export default function Footer() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      setScrollProgress(scrollPercentage);
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f5f5f5] pt-16 pb-10 px-4 sm:px-8 md:px-16 lg:px-24 font-serif text-base text-black">
      {/* Top Section: Newsletter */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-16">
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-900">
          Join Our Newsletter
        </h2>
        <form className="flex flex-col sm:flex-row w-full max-w-lg shadow-lg rounded overflow-hidden">
          <input
            type="email"
            placeholder="Enter your mail"
            className="flex-grow px-4 py-4 bg-white text-base outline-none"
          />
          <button
            type="submit"
            className="bg-[#a8815e] text-white px-6 py-4 text-base font-semibold w-full sm:w-auto"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Info Columns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-base">
        {/* Column 1: Logo */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            {/* <img
              src="https://html.themewant.com/moonlit/assets/images/logo/logo.svg"
              alt="Logo"
              className="h-12 w-auto"
            /> */}
            <h1>Waghera Agro Tourism</h1>
          </div>
          <p>
            Each room features plush bedding, high-quality linens, and a
            selection of amenities to ensure a restful night’s sleep.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>Rooms & Suites</li>
            <li>Dining</li>
            <li>Spa & Wellness</li>
            <li>Special Offers</li>
          </ul>
        </div>

        {/* Column 3: Guest Services */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Guest Service</h4>
          <ul className="space-y-3">
            <li>24/7 Front Desk</li>
            <li>Parking</li>
            <li>Room Service</li>
            <li>Free Wi-Fi</li>
            <li>Concierge Service</li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#a8815e]" />
              +1 250-555-0199
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#a8815e]" />
              wagheraagrotourism@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#a8815e]" />
              M5T 2L9 Mahabaleshwar
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-14 border-t pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-600 gap-4">
        <p className="text-center sm:text-left">
          © 2025 Waghera Agro Tourism. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#a8815e]">Facebook</a>
          <a href="#" className="hover:text-[#a8815e]">LinkedIn</a>
          <a href="#" className="hover:text-[#a8815e]">Twitter</a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div
        style={{
          position: "fixed",
          bottom: "15px",
          right: "15px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#a8815e",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
          cursor: "pointer",
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? "visible" : "hidden",
          transition: "opacity 0.3s ease, visibility 0.3s ease",
          zIndex: 50,
        }}
        onClick={scrollToTop}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
          style={{ position: "absolute", top: 0, left: 0 }}
        >
          <path
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            style={{
              strokeDasharray: "307.919, 307.919",
              strokeDashoffset: `${(1 - scrollProgress / 100) * 307.919}px`,
              fill: "none",
              stroke: "black",
              strokeWidth: "2",
              transition: "stroke-dashoffset 50ms linear",
            }}
          />
        </svg>
        <FaArrowUpLong
          style={{ color: "white", fontSize: "20px", zIndex: 10 }}
        />
      </div>
    </footer>
  );
}
