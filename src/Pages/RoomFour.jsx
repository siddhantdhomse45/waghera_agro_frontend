import React,{ useEffect, useState } from 'react'
import ClientSay from '../Components/ClientSay/ClientSay'
import Booking from '../Components/Booking/Booking'

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


export default function RoomFour() {
    const [selectedIndex, setSelectedIndex] = useState(0);
  const testimonial = testimonials[selectedIndex];
    
    const goPrevious = () => {
          setSelectedIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
        };
      
        const goNext = () => {
          setSelectedIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
        };
    
        useEffect(() => {
        const timer = setInterval(() => {
          goNext();
        }, 6000); // 6 seconds per slide
        return () => clearInterval(timer);
      }, []);
  return (
     <>
     <div className="font-sans text-gray-800">
  {/* Hero Section */}
  <div
  className="relative bg-cover bg-center min-h-screen flex flex-col justify-start sm:justify-center px-4 sm:px-6 md:px-12 pt-20 sm:pt-32 pb-10"
  style={{
    backgroundImage:
      "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60 z-0" />

  {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto text-white text-center">
    <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif mb-4 sm:mb-6">
      Deluxe Room
    </h1>
    <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 sm:mb-10 leading-relaxed">
      A step up from the standard room, often with better views, more space, and additional amenities.
    </p>

    {/* Booking Form */}
    <div className="bg-white bg-opacity-95 text-black rounded-xl w-full max-w-9xl mx-auto p-4 sm:p-6 max-h-[80vh] overflow-y-auto shadow-lg">
      <Booking />
    </div>
  </div>
</div>

</div>

<section className="bg-white pt-10 pb-16 px-4 md:px-24 mt-20 font-serif">
  <div className="space-y-24">
    {[
      {
        name: " Room",
        amt: "14000₹",
        size: "35 sqm",
        person: "5 Person",
        desc: "Also known as Classic Room or Single Room, this is the most basic type of room, usually featuring essential amenities.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/4.webp",
      },
      {
        name: "Four Rooms",
        amt: "15500₹",
        size: "35 sqm",
        person: "5 Person",
        desc: "Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/6.webp",
      },
      {
        name: "Connecting Room",
        amt: "14000₹",
        size: "35 sqm",
        person: "5 Person",
        desc: "Designed for business travelers, these rooms usually have additional workspaces and business amenities.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/5.webp",
      },
      {
        name: "Accessible Room",
        amt: "12000₹",
        size: "35 sqm",
        person: "5 Person",
        desc: "A larger room or an area of combined room, often with separate living and sleeping zones. Types of suite include...",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp",
      },
      {
        name: "Four Rooms",
        amt: "14000₹",
        size: "35 sqm",
        person: "5 Person",
        desc: "Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
      },
    ].map((room, index) => (
      <div
        key={index}
        className={`flex flex-col lg:flex-row items-center gap-10 ${
          index % 2 !== 0 ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={room.img}
            alt={room.name}
            className="w-full h-[400px] object-cover rounded-xl hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-5xl text-gray-600 mb-4">{room.name}</h3>
          <div className="flex items-center gap-6 text-gray-600 text-xl mb-3">
            <span>
              <i className="fa-solid fa-house mr-1"></i> Size: {room.size}
            </span>
            <span>
              <i className="fa-solid fa-user mr-1"></i> {room.person}
            </span>
          </div>
          <p className="text-gray-700 text-xl mb-4">{room.desc}</p>
          <p className="text-[#b86e2e] text-4xl font-bold mb-4">{room.amt}</p>
          <button className="text-[#b86e2e] border-b text-xl border-[#b86e2e] hover:text-[#a15d20] transition">
            Discover More
          </button>
        </div>
      </div>
    ))}
  </div>

  {/* Load More Button */}
  <div className="flex justify-center items-center mt-16">
    <button className="px-6 py-2 text-black border border-gray-300 rounded-md bg-white hover:bg-gray-100 transition">
      Load More
    </button>
  </div>
</section>


<section className="py-20 bg-white px-4 md:px-24 overflow-hidden transition-all duration-700 ease-in-out">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="flex items-center justify-center text-[#a1865e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
            <span className="flex items-center">
              <span className="text-sm sm:text-lg">◇</span>
              <span className="w-6 sm:w-10 h-px bg-black"></span>
            </span>
            Testimonial
            <span className="flex items-center">
              <span className="w-6 sm:w-10 h-px bg-black"></span>
              <span className="text-sm sm:text-lg">◇</span>
            </span>
          </span>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-900">
            What Our Client Say
          </h2>
        </div>

        {/* Animated Slide */}
        <div className="relative w-full h-full transition-transform duration-700 ease-in-out">
          <div className="flex flex-col md:flex-row justify-between items-start gap-10">
            {/* Left - Text */}
            <div className="md:w-2/3 transform transition-all duration-700 ease-in-out">
              <div className="flex gap-1 text-[#b86e2e] text-4xl mb-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <span key={i}>★</span>
                ))}
                <span className="relative inline-block text-gray-300">
                  ★
                  <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-yellow-800">
                    ★
                  </span>
                </span>
              </div>

              <p className="text-gray-600 text-3xl leading-relaxed mb-6 font-serif">
                {testimonial.message}
              </p>
              <p className="text-gray-900 font-serif text-2xl">{testimonial.name}</p>
              <p className="text-gray-500 text-lg">{testimonial.role}</p>
            </div>

            {/* Right - Image and Navigation */}
            <div className="flex flex-col items-center gap-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-70 h-70 object-cover rounded-md border border-gray-200 transition-all duration-700"
              />
              <div className="flex gap-3">
                <button
                  onClick={goPrevious}
                  className="w-10 h-10 border border-gray-300 rounded-md text-xl text-gray-600 hover:bg-gray-100 transition"
                >
                  ←
                </button>
                <button
                  onClick={goNext}
                  className="w-10 h-10 border border-gray-300 rounded-md text-xl text-gray-600 hover:bg-gray-100 transition"
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

