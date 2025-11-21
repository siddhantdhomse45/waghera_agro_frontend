import React from 'react';
import { useEffect, useRef } from "react";
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

export default function Hotel() {
    const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const image = imageRef.current;
      if (!image) return;

      const container = image.parentElement;
      const rect = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visibleTop = Math.max(0, windowHeight - rect.top);
      const totalScrollable = rect.height + windowHeight;

      const scrollProgress = Math.min(Math.max(visibleTop / totalScrollable, 0), 1);

      // Zoom from scale 1.3 to 1.0
      const scale = 1.3 - scrollProgress * 0.3;

      image.style.transform = `scale(${scale})`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col md:flex-row mt-40 items-center md:items-start max-w-7xl mx-auto p-4 sm:p-8 relative">
  {/* Image Section */}
  <div className="relative w-full md:w-1/2 p-4">
    {/* Main Image */}
    <div className="relative w-full h-[600px] overflow-hidden rounded-xl shadow-lg mx-auto max-w-[500px]">
      <img
        ref={imageRef}
        src="https://html.themewant.com/moonlit/assets/images/about/about-1.webp"
        alt="Main Room"
        className="w-full h-[800px] object-cover transition-transform duration-200 ease-out will-change-transform"
      />
    </div>

    {/* Top-right small image */}
    <div className="hidden sm:block absolute top-[-30px] right-[-10px] md:right-[-40px] w-64 sm:w-80 md:w-96 h-40 sm:h-52 md:h-64 rounded-xl overflow-hidden shadow-lg border-[6px] border-white">
      <img
        src="https://html.themewant.com/moonlit/assets/images/about/about-main.webp"
        alt="Secondary Room"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Experience Info Box */}
    <div className="absolute bottom-20 right-4 sm:right-10 md:right-90 bg-white bg-opacity-90 p-4 sm:p-6 rounded-lg shadow-lg flex items-center space-x-3 w-48 sm:w-60">
      <div className="bg-gray-200 p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
      </div>
      <div className="px-2 sm:px-5">
        <div className="text-lg sm:text-xl font-semibold text-gray-700">50+</div>
        <div className="text-sm sm:text-base text-gray-500">Experience Staff</div>
      </div>
    </div>
  </div>

  {/* Text Content */}
  <div className="w-full md:w-1/2 mt-10 md:mt-0 md:ml-20">
    {/* About Label */}
    <div className="flex items-center gap-4 mb-4">
      <div className="flex items-center text-[#a8815e] gap-0">
        <div className="h-px w-10 bg-[#a8815e]"></div>
        <span className="text-xl">✦</span>
      </div>
      <p className="text-lg text-[#b86e2e]">About Us</p>
    </div>

    {/* Heading */}
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold py-6 mb-4 leading-snug">
      <span className="block mb-2">Welcome To Our</span>
      <span className="block">Waghera Agro Hotel & Resort</span>
    </h2>

    {/* Paragraph */}
    <p className="text-gray-600 text-sm sm:text-base mb-6">
      Welcome to Bokinn, where luxury meets comfort in the heart of Canada. Since 1999, we have been dedicated to providing an exceptional stay for our guests, blending modern amenities with timeless elegance. Our beautifully designed rooms and suites offer stunning views and plush accommodations, ensuring a restful retreat whether you’re here for business or leisure.
    </p>

    {/* Button */}
    <button className="bg-[#a8815e] text-white px-6 py-3 rounded-md hover:bg-[#edb88a] transition duration-300">
      Learn More
    </button>
  </div>
</div>

  );
}