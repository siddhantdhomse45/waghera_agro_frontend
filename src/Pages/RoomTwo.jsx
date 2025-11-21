import React,{ useState } from 'react'
import { FaStar, FaStarHalfAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

     const testimonials = [
  {
    message:
      "Choosing Bokinn was one of the best decisions we’ve ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with and expertise. Their commitment to and delivering tailored.",
    name: "Sarah Martinez",
    role: "COO of Apex Solutions",
    rating: 4.5,
  },
  {
    message:
      "We were thoroughly impressed by their dedication to quality and attention to detail. Their support team is fantastic and very responsive.",
    name: "James Carter",
    role: "Founder of Stellar Tech",
    rating: 5,
  },
  {
    message:
      "Their team transformed our digital experience. We highly recommend them for anyone seeking reliable services with creativity.",
    name: "Olivia Rhodes",
    role: "Marketing Lead at Horizon",
    rating: 4,
  },
];

const RoomTwo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonial = testimonials[currentIndex];

  const goPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
 const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={i} className="text-[#a8815e]" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-[#a8815e]" />}
      </>
    );
  };

  return (
    <>
      <div className="font-sans text-gray-800">
      {/* Hero Section */}
     <div
  className="relative bg-cover bg-center h-[800px] flex items-center justify-center"
  style={{
    backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-6 mt-35">Deluxe Room</h1>
          <p className="text-xl">A step up from the standard room, often with better views, more space, and additional amenities.</p>
        </div>
      </div> 
    </div>

    <section className="py-16 px-4 md:px-16 lg:px-24 mt-20 bg-white">
  <div className="flex flex-col lg:flex-row gap-10">
    {/* Left: Rooms Grid (Scroll with hidden scrollbar) */}
    <div className="flex-1 overflow-y-auto max-h-[150vh] pr-2 scrollbar-hide">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
        {[
          {
            name: "Executive Room",
            Amt: "₹12000",
            desc: "Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
          },
          {
            name: "Deluxe Room",
            Amt: "₹3999",
            desc: "Experience comfort and style with a touch of luxury at an affordable price.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/2.webp",
          },
          {
            name: "Double Room",
            Amt: "₹12999",
            desc: "Spacious and elegant, ideal for families or guests who love extra space.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp",
          },
          {
            name: "Connecting Room",
            Amt: "₹12000",
            desc: "Perfect for groups, with the convenience of connecting spaces.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/5.webp",
          },
          {
            name: "Double Room",
            Amt: "₹3999",
            desc: "Ideal for solo travelers seeking cozy comfort.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/4.webp",
          },
          {
            name: "Double  Room",
            Amt: "₹12999",
            desc: "A great option for friends or families with three guests.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/6.webp",
          },
        ].map((member, index) => (
          <div
            key={index}
            onClick={() => navigate("/booknow")}
            className="cursor-pointer font-serif border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
          >
              {/* Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />

            <div className="p-4">
              <h3 className="text-2xl md:text-3xl font-serif mb-2">{member.name}</h3>

              <div className="flex items-center gap-8 mt-2 text-sm md:text-base text-gray-500">
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-house"></i> 35 sqm
                </span>
                <span className="flex items-center gap-2">
                  <i className="fa-solid fa-user"></i> 5 Person
                </span>
              </div>

              <div className="mt-4 text-gray-600 text-base md:text-lg mb-4">{member.Amt}</div>

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
    </div>

    {/* Right: Booking Sidebar */}
    <div className="w-full lg:w-[400px] bg-gray-100 rounded-lg p-6 shadow-md h-fit">
      <h3 className="text-2xl md:text-3xl text-center font-serif text-gray-800 mb-6">
        Book Your Stay
      </h3>

      <form className="space-y-5 text-base md:text-lg text-gray-700">
        {/* Dates */}
        <div>
          <label className="block font-medium mb-2">Check In</label>
          <input type="date" className="w-full border px-3 py-2 rounded bg-white outline-none" />
        </div>
        <div>
          <label className="block font-medium mb-2">Check Out</label>
          <input type="date" className="w-full border px-3 py-2 rounded bg-white outline-none" />
        </div>

        {/* Guests */}
        <div>
          <label className="block font-medium mb-2">Adult</label>
          <input
            type="number"
            defaultValue={1}
            className="w-full border px-3 py-2 rounded bg-white outline-none"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Children</label>
          <input
            type="number"
            defaultValue={1}
            className="w-full border px-3 py-2 rounded bg-white outline-none"
          />
        </div>
        <div>
          <label className="block font-medium mb-2">Extra Bed</label>
          <input
            type="number"
            defaultValue={0}
            className="w-full border px-3 py-2 rounded bg-white outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full mt-4 py-3 bg-[#af7b4f] text-white text-lg md:text-xl font-serif rounded hover:bg-yellow-800 transition"
        >
          <i className="fa-solid fa-magnifying-glass mr-2"></i> Search
        </button>
      </form>
    </div>
  </div>
</section>

<style>{`
/* In your global CSS or Tailwind config */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

`}</style>

<section className="py-20 px-4 md:px-24 bg-white font-serif">
      <div className="flex flex-col md:flex-row justify-between items-start gap-10">
        {/* Left Section */}
        <div className="md:w-1/2">
          <div className="flex items-center gap-2 text-[#a8815e] text-3xl mb-2">
            <div className="h-px w-10 bg-[#a8815e]"></div>
            <span>✦</span>
            <span className="ml-2">Testimonial</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif text-black mb-6">
            What Our Client Say About Us
          </h2>

          {/* Avatar Row */}
          <div className="flex items-center mt-6">
            {[1, 2, 3, 4].map((_, i) => (
              <img
                key={i}
                src={`https://randomuser.me/api/portraits/men/${30 + i}.jpg`}
                alt="client"
                className={`w-12 h-12 rounded-full border-4 border-white -ml-3 ${
                  i === 0 ? "ml-0" : ""
                }`}
              />
            ))}
            <span className="ml-3 text-lg bg-[#a8815e] text-white rounded-full px-2">
              +
            </span>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 space-y-6">
          {/* Star Rating */}
          <div className="flex gap-1 text-[#a8815e] text-4xl mb-4">
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
          <p className="text-gray-600 text-2xl leading-relaxed">{testimonial.message}</p>

          {/* Name & Role */}
          <div>
            <p className="text-gray-900 text-xl font-serif">{testimonial.name}</p>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>

          {/* Nav Buttons */}
          <div className="flex gap-3 mt-4">
            <button
              onClick={goPrevious}
              className="w-10 h-10 flex items-center justify-center border rounded text-lg hover:bg-gray-100"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={goNext}
              className="w-10 h-10 flex items-center justify-center border border-black rounded text-lg hover:bg-gray-100"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default RoomTwo
