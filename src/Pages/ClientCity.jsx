import React,{ useEffect, useRef, useState } from 'react'
import { FaCalendarAlt, FaUser,FaRulerCombined } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaStar, FaStarHalfAlt, FaArrowLeft, FaArrowRight } from "react-icons/fa";

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
const rooms = [
  {
    name: "Rocky Ridge Room",
    price: "14999₹",
    image: "https://html.themewant.com/moonlit/assets/images/index-4/service/3.webp",
  },
  {
    name: "Timberline Hideaway Hotel",
    price: "2999₹",
    image: "https://html.themewant.com/moonlit/assets/images/index-4/service/1.webp",
  },
  {
    name: "Seaside Breeze Suite",
    price: "18999₹",
    image: "https://html.themewant.com/moonlit/assets/images/index-4/service/2.webp",
  },
  {
    name: "Golden Horizon Room",
    price: "22999₹",
    image: "https://html.themewant.com/moonlit/assets/images/index-4/service/4.webp",
  },
];
const  apartmentData = [
  {
    title: "Elegant Apartment",
    img: "https://html.themewant.com/moonlit/assets/images/index-3/apartment/4.webp",
    size: "35 sqm",
    persons: 5,
    price: "2999₹",
  },
  {
    title: "Stylish Suite",
    img: "https://html.themewant.com/moonlit/assets/images/index-3/apartment/1.webp",
    size: "30 sqm",
    persons: 3,
    price: "15999₹",
  },
  {
    title: "Modern Room",
    img: "https://html.themewant.com/moonlit/assets/images/index-3/apartment/2.webp",
    size: "40 sqm",
    persons: 6,
    price: "2599₹",
  },
  {
    title: "Classic Deluxe",
    img: "https://html.themewant.com/moonlit/assets/images/index-3/apartment/3.webp",
    size: "28 sqm",
    persons: 2,
    price: "12999₹",
  },
];
export default function ClientCity() {
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

          const [showVideo, setShowVideo] = useState(false);
                 const [activeIndex, setActiveIndex] = useState(0);
          
            const containerRef = useRef(null);
          
           const [animateText, setAnimateText] = useState(false);
          
          useEffect(() => {
            setAnimateText(true);
            const timeout = setTimeout(() => setAnimateText(false), 500); // animation lasts 0.5s
            return () => clearTimeout(timeout);
          }, [activeIndex]);

          const scrollRef = useRef();
            const [currentIndex, setCurrentIndex] = useState(0);
            const visibleCount = 2;
          
            const scrollToIndex = (index) => {
              const cardWidth = scrollRef.current.offsetWidth / visibleCount;
              scrollRef.current.scrollTo({
                left: index * cardWidth,
                behavior: "smooth",
              });
            };
          
            const handleScroll = (direction) => {
              const newIndex =
                direction === "right"
                  ? Math.min(currentIndex + 1, Math.floor((rooms.length - visibleCount)))
                  : Math.max(currentIndex - 1, 0);
              setCurrentIndex(newIndex);
              scrollToIndex(newIndex);
            };
          
            // Auto scroll every 4 seconds
            useEffect(() => {
              const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => {
                  const nextIndex =
                    prevIndex + 1 > rooms.length - visibleCount ? 0 : prevIndex + 1;
                  scrollToIndex(nextIndex);
                  return nextIndex;
                });
              }, 4000);
          
              return () => clearInterval(interval);
            }, []);
          
           
  return (
    <div>
     <section
  className="relative w-screen overflow-hidden bg-cover bg-left bg-no-repeat min-h-[120vh] flex items-center mb-20"
  style={{
    backgroundImage:
      "url('https://html.themewant.com/moonlit/assets/images/index-5/banner/banner-bg.webp')",
  }}
>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/30"></div>

  {/* Main Content */}
  <div className="relative z-10 w-full px-6 md:px-20 mr-10 flex flex-col md:flex-row items-center justify-between">
    {/* Left Text */}
    <div className="max-w-xl text-white py-16 md:py-32">
      <h2 className="text-5xl md:text-7xl  leading-tight">
        Discover Luxury in the Heart of the City
      </h2>
    </div>


    {/* Booking Form */}
    <div className="bg-white text-black rounded-xl shadow-xl p-6 md:p-10 w-full mt-30 md:mt-10 mb-20 max-w-md">
      <h3 className="text-2xl mb-6 text-center">Book Your Stay</h3>

      <form className="space-y-4">
        {/* Check In */}
        <div>
          <label className="text-sm font-medium">Check In</label>
          <div className="flex items-center border rounded-md px-4 py-2 mt-1">
            <span className="mr-2 text-gray-500">
              <i className="far fa-calendar-alt"></i>
            </span>
            <input
              type="date"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Check Out */}
        <div>
          <label className="text-sm font-medium">Check Out</label>
          <div className="flex items-center border rounded-md px-4 py-2 mt-1">
            <span className="mr-2 text-gray-500">
              <i className="far fa-calendar-alt"></i>
            </span>
            <input
              type="date"
              className="w-full outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Adult */}
        <div>
          <label className="text-sm font-medium">Adult</label>
          <div className="flex items-center border rounded-md px-4 py-2 mt-1">
            <span className="mr-2 text-gray-500">
              <i className="fas fa-user"></i>
            </span>
            <select className="w-full bg-transparent outline-none">
              <option>1 Person</option>
              <option>2 Persons</option>
              <option>3 Persons</option>
            </select>
          </div>
        </div>

        {/* Child */}
        <div>
          <label className="text-sm font-medium">Child</label>
          <div className="flex items-center border rounded-md px-4 py-2 mt-1">
            <span className="mr-2 text-gray-500">
              <i className="fas fa-child"></i>
            </span>
            <select className="w-full bg-transparent outline-none">
              <option>1 Child</option>
              <option>2 Children</option>
              <option>No Child</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button
          type="submit"
          className="w-full bg-[#a38159] hover:bg-[#916d48] text-white py-2 rounded-md text-lg flex items-center justify-center gap-2"
        >
          <i className="fas fa-search"></i> Search
        </button>
      </form>
    </div>
  </div>

  {/* ✅ Left-to-Right Bottom Curve */}
  <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
    <svg
      className="relative block w-full h-[400px]"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
    >
      <path
        fill="#ffffff"
        d="M0,320 C480,240 960,240 1440,320 L1440,320 L0,320 Z"
      />
    </svg>
  </div>
</section>
<section className="bg-[#f4f4f4] px-6 md:px-20 py-20 relative">
  <div className="grid md:grid-cols-2 items-start gap-14 relative z-10">

    {/* ✅ Left Column – Text only (facilities grid) */}
    <div className="order-2 md:order-1">
      <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-gray-800 text-[15px]">
        {/* 1 */}
        <div>
          <div className="items-start gap-3 mb-2">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/bed.svg" className="w-12 mb-4" />
            <h4 className="text-3xl mb-4">Rooms and Suites</h4>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.
          </p>
        </div>

        {/* 2 */}
        <div>
          <div className="items-start gap-3 mb-2">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/security.svg" className="w-10 mb-4" />
            <h4 className="text-3xl mb-4">24-Hour Security</h4>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            On-site security personnel and best surveillance. Secure storage for valuables.
          </p>
        </div>

        {/* 3 */}
        <div>
          <div className="items-start gap-3 mb-4 mt-8">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/gym.svg" className="w-12" />
            <h4 className="text-3xl mt-6">Fitness Center</h4>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Equipped with exercise machines and weights. Offering massages, facials, and other treatments.
          </p>
        </div>

        {/* 4 */}
        <div>
          <div className="items-start gap-3 mb-4 mt-8">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/swimming-pool.svg" className="w-12" />
            <h4 className="text-3xl mt-6">Swimming Pool</h4>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed">
            Indoor or outdoor pools for leisure or exercise. Offering massages, facials, and other treatments.
          </p>
        </div>
      </div>
    </div>

    {/* ✅ Right Column – Title + Image */}
    <div className="order-1 md:order-2">
      {/* Title above the image */}
      <h4 className="text-yellow-800 text-base mb-2">
        <span className="flex text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
          <span className="flex items-center">
            <span className="text-sm sm:text-lg">◇</span>
            <span className="w-6 sm:w-10 h-px bg-black"></span>
          </span>
          Facilities
        </span>
      </h4>
      <h2 className="text-4xl md:text-6xl text-gray-900 mb-10">
        Apartment Facilities
      </h2>

      {/* Image below title with reduced height */}
      <img
        src="https://html.themewant.com/moonlit/assets/images/index-3/facility.webp"
        alt="Hotel Room"
        className="rounded-md w-full max-h-[400px] object-cover shadow-md"
      />
    </div>
  </div>

  {/* Optional Decorative Background */}
  <div className="absolute bottom-0 left-0 w-1/3 opacity-5">
    <img src="/your-decorative-circle.png" alt="bg" />
  </div>
</section>

<section className="bg-[#f5f5f5] py-20 px-4 md:px-20 font-serif">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h4 className="text-[#a8815e] text-4xl sm:text-xl mb-2">
        <span className="flex items-center justify-center gap-3 sm:text-xl">
          <span className="flex items-center">
            <span className="text-sm sm:text-lg">◇</span>
            <span className="w-6 sm:w-10 h-px bg-black"></span>
          </span>
           About Us
          <span className="flex items-center">
            <span className="w-6 sm:w-10 h-px bg-black"></span>
            <span className="text-sm sm:text-lg">◇</span>
          </span>
        </span>
      </h4>
        <h2 className="text-4xl md:text-6xl mb-6 leading-tight">
          Welcome To Our Moonlit<br />
          Hotel & Resort
        </h2>
        <p className="text-gray-600 text-xl leading-relaxed">
          Welcome to Bokinn, where luxury meets comfort in the heart of Canada. Since 1999, we have
          been dedicated to providing an exceptional stay for our guests, blending modern amenities with
          timeless elegance. Our beautifully designed rooms and suites offer stunning views and plush
          accommodations, ensuring a restful retreat whether you're here for business or leisure.
        </p>

        {/* Signature */}
        <img
          src="https://html.themewant.com/moonlit/assets/images/index-5/sign.webp"
          alt="Signature"
          className="mx-auto mt-6 w-20"
        />
      </div>

      {/* Image Layout */}
      <div className="relative mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Left Image */}
        <div className="w-[90%] md:w-[50%] z-10">
          <img
            src="https://html.themewant.com/moonlit/assets/images/index-5/about/1.webp"
            alt="Resort Pool"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right Floating Image */}
        <div className="absolute bottom-0 right-10 hidden md:block w-48">
          <img
            src="https://landmarksarchitects.com/wp-content/uploads/2024/06/modern-design-6242024.jpg"
            alt="Modern Building"
            className="object-cover shadow-xl"
          />
        </div>
      </div>
    </section>

<section className="bg-white py-16 px-4 md:px-8  w-full">
  <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Title */}
          <div className="md:max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-px bg-[#a8815e]"></div>
              <span className="text-[#a8815e] text-xl">✦</span>
              <span className="text-[#a8815e] text-xl font-serif">Room</span>
            </div>
            <h2 className="text-4xl md:text-6xl ">Our Rooms</h2>
          </div>

          {/* Right: Paragraph */}
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            Our rooms offer a harmonious blend of comfort and elegance, designed to provide
            an exceptional stay for every guest. Each room features plush bedding, high-quality
            linens, and a selection of pillows to ensure a restful night’s sleep.
          </p>
        </div>
      </div>

  {/* Full-Width Image Cards */}
  <div className="w-full overflow-x-auto scrollbar-hide">
    <div className="flex gap-6 min-w-[1500px] px-2">
      {apartmentData.map((apt, index) => (
        <div
          key={index}
          className={`flex-shrink-0 w-[23%] transition-all duration-500 overflow-hidden rounded shadow-lg cursor-pointer ${
            activeIndex === index ? "scale-105" : "opacity-90"
          }`}
          onClick={() => setActiveIndex(index)}
        >
          <img
  src={apt.img}
  alt={apt.title}
  className="w-123 h-123 object-cover"
/>

        </div>
      ))}
    </div>
  </div>

  {/* Active Apartment Text */}
  <div
  className={`max-w-2xl mx-auto text-center bg-gray-50 shadow-md p-6 rounded mt-10 transition-opacity transform duration-500 ${
    animateText ? "opacity-0 -translate-y-4" : "opacity-100 translate-y-0"
  }`}
>
  <h3 className="text-5xl text-gray-800 mb-2">
    {apartmentData[activeIndex].title}
  </h3>
  <div className="flex justify-center gap-6 text-xl text-gray-600 mb-4">
    <span className="flex items-center gap-2">
      <FaRulerCombined className="text-[#b88d56]" />
      {apartmentData[activeIndex].size}
    </span>
    <span className="flex items-center gap-2">
      <FaUser className="text-[#b88d56]" />
      {apartmentData[activeIndex].persons} Person
    </span>
  </div>
  <p className="text-6xl text-[#b88d56]">
    {apartmentData[activeIndex].price}
  </p>
</div>


  {/* Dots */}
  <div className="mt-6 flex justify-center gap-3">
    {apartmentData.map((_, i) => (
      <button
        key={i}
        onClick={() => setActiveIndex(i)}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
          activeIndex === i ? "bg-[#b88d56] scale-125" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</section>
<style>{`
/* In your global CSS (e.g., index.css or App.css) */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

.scrollbar-hide {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
}
`}</style>


<section className="bg-gray-300 py-14 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-8">
    {/* Section Title */}
    <div className="text-center mb-14">
      <h4 className="text-[#a8815e] text-base sm:text-lg mb-2">
        <span className="flex items-center justify-center gap-3 sm:text-xl">
          <span className="flex items-center">
            <span className="text-sm sm:text-lg">◇</span>
            <span className="w-6 sm:w-10 h-px bg-black"></span>
          </span>
           Services
          <span className="flex items-center">
            <span className="w-6 sm:w-10 h-px bg-black"></span>
            <span className="text-sm sm:text-lg">◇</span>
          </span>
        </span>
      </h4>
      <h2 className="text-4xl sm:text-6xl font-light text-black">
        Our Services
      </h2>
    </div>

    {/* Horizontal Card Scroll */}
    <div
      ref={scrollRef}
      className="flex overflow-x-scroll scroll-smooth gap-6 no-scrollbar pb-2"
    >
      {rooms.map((room, idx) => (
        <div
          key={idx}
          className="w-[31%] flex-shrink-0 bg-white text-black rounded-xl shadow-lg px-4 py-6"
        >
          <img
            src={room.image}
            alt={room.name}
            className="w-full h-[440px] object-cover rounded-xl"
          />

          <div className="mt-6 text-left">
            <h3 className="text-3xl sm:text-2xl  mb-2 text-[#111]">
              {room.name}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 mb-3">
              {room.description}
            </p>
            <div className="text-2xl sm:text-3xl text-[#a8815e]">
              {room.price}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Hide Scrollbar */}
  <style>{`
    .no-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .no-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `}</style>
</section>

<section className="px-6 md:px-20 py-16 bg-white text-gray-800 font-serif">
      {/* Header Section */}
      <div className="mb-12">
         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Left: Title */}
          <div className="md:max-w-md">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-px bg-[#a8815e]"></div>
              <span className="text-[#a8815e] text-xl">✦</span>
              <span className="text-[#a8815e] text-xl font-serif">Room</span>
            </div>
            <h2 className="text-4xl md:text-6xl ">Our Rooms</h2>
          </div>

          {/* Right: Paragraph */}
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            Our rooms offer a harmonious blend of comfort and elegance, designed to provide
            an exceptional stay for every guest. Each room features plush bedding, high-quality
            linens, and a selection of pillows to ensure a restful night’s sleep.
          </p>
        </div>
      </div>


      {/* Offers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Top Left Image */}
        <div className="h-full">
          <img
            src="https://html.themewant.com/moonlit/assets/images/index-5/offer/mask_group-1.webp"
            alt="Wine Pouring"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Right Text Card */}
        <div className="bg-black text-white text-serif p-10 flex flex-col justify-center">
          <h3 className="text-4xl mb-4">Room Service Delight</h3>
          <p className="mb-6 text-lg  leading-relaxed">
            Indulge in a vibrant and nutritious medley of the season’s freshest vegetables.
            <span className=" text-white"> Our Garden Fresh Vegetable Salad features crisp lettuce, juicy cherry tomatoes, crunchy cucumbers.</span>
          </p>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-2xl font-semibold">22299₹</span>
            <span className="line-through text-gray-400 text-xl">23899₹</span>
          </div>
          <a href="#" className="text-white underline text-lg ">Book Now</a>
        </div>

        {/* Bottom Left Text Card */}
        <div className="bg-black text-white p-10 flex flex-col justify-center">
          <h3 className="text-4xl mb-4 text-yellow-100">Velvet Red Reserve</h3>
          <p className="mb-6 text-sm leading-relaxed">
            Indulge in a vibrant and nutritious medley of the season’s freshest vegetables.
            <span className="font-semibold text-white"> Our Garden Fresh Vegetable Salad features crisp lettuce, juicy cherry tomatoes, crunchy cucumbers.</span>
          </p>
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-2xl font-semibold">12999₹</span>
            <span className="line-through text-gray-400 text-xl">20899₹</span>
          </div>
          <a href="#" className="text-white underline text-lg font-semibold">Book Now</a>
        </div>

        {/* Bottom Right Image */}
        <div className="h-full">
          <img
            src="https://html.themewant.com/moonlit/assets/images/index-5/offer/mask_group.webp"
            alt="Breakfast in Bed"
            className="w-full h-full object-cover"
          />
        </div>
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
          <h2 className="text-4xl md:text-5xl text-gray-900">
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
              <p className="text-gray-900 text-2xl">{testimonial.name}</p>
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

    </div>
  )
}
