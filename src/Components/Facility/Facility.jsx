import React, { useState } from 'react';
import { FaBed, FaUserShield, FaDumbbell, FaSwimmingPool } from 'react-icons/fa';
import { FaPaw } from "react-icons/fa";
import { GiRiver } from "react-icons/gi";
import { FaArrowRight } from 'react-icons/fa';



const facilities = [
  {
    icon: <FaBed className="text-4xl text-[#a8815e] mb-4 block mx-auto" />,
    title: "Rooms and Tents",
    description:
      "Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.",
  },
  {
    icon: <FaUserShield className="text-4xl text-[#a8815e] mb-4 block mx-auto" />,
    title: "24-Hour Security",
    description:
      "On-site security personnel and best surveillance. From standard to luxury suites. Secure storage for valuables.",
  },
  // {
  //   icon: <FaDumbbell className="text-4xl text-[#a8815e] mb-4 block mx-auto"/>,
  //   title: "Fitness Center",
  //   description:
  //     "Equipped with exercise machines and weights. Offering massages, facials, and other treatments.",
  // },
  {
  icon: <FaPaw className="text-4xl text-[#a8815e] mb-4 block mx-auto" />,
  title: "Pet Friendly",
  description:
    "We warmly welcome pets with comfortable spaces, open areas, and special care to ensure a pleasant stay for you and your furry companions.",
}
,

  {
  icon: <GiRiver className="text-4xl text-[#a8815e] mb-4 block mx-auto" />,
  title: "River Swimming",
  description:
    "Enjoy natural river swimming in a serene environment, offering a refreshing and adventurous experience surrounded by nature.",
}
,
];

export default function facility() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (facility) => {
    console.log('Facility clicked:', facility.title);
    // Add your click functionality here (e.g., navigate to detail page, open modal, etc.)
  };

  return (
    <div className="bg-gray-100 py-16 mt-20">
  <div className="text-center mb-12">
    <h4 className="text-yellow-800 text-lg mb-2">
      <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
        <span className="flex items-center">
          <span className="text-sm sm:text-lg">◇</span>
          <span className="w-6 sm:w-10 h-px bg-black"></span>
        </span>
        Facilities
        <span className="flex items-center">
          <span className="w-6 sm:w-10 h-px bg-black"></span>
          <span className="text-sm sm:text-lg">◇</span>
        </span>
      </span>
    </h4>
    <h2 className="text-6xl text-black">Resort Facilities</h2>
  </div>

  <div className="max-w-[1400px] px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
    {facilities.map((facility, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md p-10 min-h-[280px] w-full max-w-[420px] mx-auto text-center hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer group relative overflow-hidden"
        onMouseEnter={() => setHoveredCard(index)}
        onMouseLeave={() => setHoveredCard(null)}
        onClick={() => handleCardClick(facility)}
      >
        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-[#af7b4f] opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
        
        <div className="relative z-10">
          <div className="transform group-hover:scale-110 transition-transform duration-300">
            {facility.icon}
          </div>
          <h3 className="text-xl mt-5 font-medium text-black mb-2 group-hover:text-[#af7b4f] transition-colors duration-300">
            {facility.title}
          </h3>
          <p className="text-gray-600 text-sm mt-5 group-hover:text-gray-700 transition-colors duration-300">
            {facility.description}
          </p>
          
          {/* Learn More button - appears on hover */}
          {/* <div className={`mt-6 transform transition-all duration-300 ${hoveredCard === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <button className="inline-flex items-center gap-2 text-[#af7b4f] font-medium hover:text-[#8b6240] transition-colors duration-200">
              Learn More
              <FaArrowRight className="text-sm" />
            </button>
          </div> */}
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
