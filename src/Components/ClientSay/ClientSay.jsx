import React, { useState } from "react";
import image1 from "../../assets/images/c1.jpeg";
import image2 from "../../assets/images/c2.jpeg";
const testimonials = [
  {
    name: "Prasad Langhe",
    // role: "COO of Apex Solutions",
    message:
      "Waghera Agro Tourism delivers exceptional hospitality with warmth, innovation, and attention to detail. A truly memorable experience",
    image: image1,
  },
  // {
  //   name: "Sadanand Belote",
  //   // role: "COO of Apex Solutions",
  //   message:
  //     "Waghera Agro Tourism delivers exceptional hospitality with warmth, innovation, and attention to detail. A truly memorable experience",
  //   image: image2,
  // },
  {
    name: "Samir Zagade",
    // role: "COO of Apex Solutions",
    message:
      "Waghera Agro Tourism delivers exceptional hospitality with warmth, innovation, and attention to detail. A truly memorable experience",
    image: "https://i.pinimg.com/736x/7f/bb/2a/7fbb2ae1508485fee8fcec11669fc30e.jpg",
  },
  {
    name: "Suhas Lambe",
    // role: "CEO of TechSphere",
    message:
      "Waghera Agro Tourism offers a perfect blend of comfort and nature. Great hospitality, peaceful surroundings, and a truly authentic rural experience. Highly recommended.",
    image:
      "https://i.pinimg.com/736x/7f/b8/61/7fb861a3d553131346cc57345fd54aca.jpg",
  },
    {
    name: "Sadanand Belote",
    // role: "COO of Apex Solutions",
    message:
      "Waghera Agro Tourism delivers exceptional hospitality with warmth, innovation, and attention to detail. A truly memorable experience",
    image: image2,
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
