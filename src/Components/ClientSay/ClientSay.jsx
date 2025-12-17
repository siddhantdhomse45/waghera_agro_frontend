import React, { useState } from "react";

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "COO of Apex Solutions",
    message:
      "Choosing Bokinn was one of the best decisions we’ve ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with and expertise. Their commitment to and delivering tailored.",
    image:
      "https://html.themewant.com/moonlit/assets/images/author/author-2x.webp",
  },
  {
    name: "John Carter",
    role: "CEO of TechSphere",
    message:
      "Working with Bokinn was a seamless experience. They offered tailored services, great communication, and top-notch results. I would highly recommend them to anyone looking for quality and commitment.",
    image:
      "https://html.themewant.com/moonlit/assets/images/author/author-4.webp",
  },
];

export default function ClientSay() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const testimonial = testimonials[selectedIndex];

  const goPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goNext = () => {
    setSelectedIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
    <section className="py-16 bg-white px-4 md:px-29">
  <div className="max-w-[1800px] mx-auto">
    {/* Header */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between mb-10">
      <div>
        <div className="flex items-center gap-1 text-yellow-800  text-lg mb-2">
          <div className="h-px w-10 bg-yellow-800"></div>
          <span className="text-xl">✦</span>
          <span className="px-4">Testimonial</span>
        </div>
        <h2 className="text-4xl md:text-4xl text-black">What Our Client Say</h2>
      </div>

      <div className="flex gap-4 mt-6 sm:mt-0">
        <button onClick={goNext} className="w-10 h-10 border rounded-md text-xl hover:bg-yellow-100">
          ←
        </button>
        <button onClick={goPrevious} className="w-10 h-10 border rounded-md text-xl hover:bg-yellow-100">
          →
        </button>
      </div>
    </div>

    {/* Main Content */}
    <div className="flex flex-col md:flex-row items-center gap-10">
      {/* Left - Image */}
      <div className="flex-shrink-0">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-60 h-60 rounded-full object-cover"
        />
      </div>

      {/* Right - Text Content */}
      <div className="flex-1 ">
        {/* Star Rating */}
        <div className="flex gap-1 text-yellow-700 text-3xl mb-4">
          {[1, 2, 3, 4].map((_, i) => (
            <span key={i}>★</span>
          ))}
          <span className="relative inline-block text-gray-300">
            ★
            <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-yellow-700">
              ★
            </span>
          </span>
        </div>

        {/* Message */}
        <p className="text-gray-600 text-2xl leading-relaxed mb-6">
          {testimonial.message}
        </p>

        {/* Name & Role */}
        <p className="text-gray-900  text-2xl">{testimonial.name}</p>
        <p className="text-gray-500 text-xl">{testimonial.role}</p>
      </div>
    </div>
  </div>
</section>

    </>
  );
}
