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
export default function RoomThree() {
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
    className="relative bg-cover bg-center h-[800px] flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 z-0" />

    {/* Center Content: Title, Description, Booking */}
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-white text-center px-4">
      <h1 className="text-5xl md:text-7xl font-serif mb-6 mt-10">Deluxe Room</h1>
      <p className="text-xl mb-8 max-w-2xl">
        A step up from the standard room, often with better views, more space, and additional amenities.
      </p>

      <div className="bg-white bg-opacity-90 rounded-xl p-4 w-full max-w-7xl h-auto max-h-[200px] overflow-y-auto">
  <Booking />
</div>
    </div>
  </div>
</div>

<section className="bg-white pt-0 pb-16 px-4 sm:px-6 md:px-24 mt-20">
  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-2 gap-5">
    {[
      {
        name: "Exectutive Room",
        Amt: "12000₹",
        desc:"A step up from the standard room, often with better views, more space, and additional amenities.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
      },
      {
        name: "Deluxe Room",
        Amt: "3999₹",
         desc:"A step up from the standard room, often with better views, more space, and additional amenities.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/2.webp",
      },
      {
        name: "Triple Room",
        Amt: "12999₹",
         desc:"A step up from the standard room, often with better views, more space, and additional amenities.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp",
      },
      {
        name: "Connecting Room",
        Amt: "12000₹",
         desc:"A step up from the standard room, often with better views, more space, and additional amenities.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/5.webp",
      },
      {
        name: "Triple Room",
        Amt: "3999₹",
         desc:"A step up from the standard room, often with better views, more space, and additional amenities.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/4.webp",
      },
      {
        name: "Triple Room",
        Amt: "12999₹",
         desc:"A step up from the standard room, often with better views, more space, and additional amenities.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/6.webp",
      },
    ].map((member, index) => (
     <div
  key={index}
  onClick={() => navigate("/booknow")}
  className="cursor-pointer font-serif border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
>
  <div className="relative">
    {/* Amount badge */}
    <div className="absolute top-5 left-5 bg-white bg-opacity-80 text-[#b86e2e] text-lg font-semibold px-5 py-3 rounded shadow-sm z-10">
      {member.Amt}
    </div>

    {/* Image */}
    <img
      src={member.img}
      alt={member.name}
      className="w-full h-114 object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  <div className="p-4">
    <h3 className="text-4xl mt-5 font-serif">{member.name}</h3>

    <div className="flex items-center gap-10 mt-4 text-xl text-gray-500">
      <span className="flex items-center gap-3">
        <i className="fa-solid fa-house"></i> 35 sqm
      </span>
      <span className="flex items-center gap-3">
        <i className="fa-solid fa-user"></i> 5 Person
      </span>
    </div>

    <div className="mt-5 mb-4 text-lg text-gray-500">{member.desc}</div>

    <span className="text-[#b86e2e] border-b text-lg border-[#b86e2e] w-fit hover:text-[#a15d20] transition">
      Discover More
    </span>
  </div>
</div>
    ))}
  </div>
  <div className="flex justify-center items-center my-10">
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
