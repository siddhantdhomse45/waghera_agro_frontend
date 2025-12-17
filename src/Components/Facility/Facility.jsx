import React from 'react';
import { FaBed, FaUserShield, FaDumbbell, FaSwimmingPool } from 'react-icons/fa';

const facilities = [
  {
    icon: <FaBed className="text-4xl text-[#a8815e] mb-4 block mx-auto" />,
    title: "Rooms and Suites",
    description:
      "Varied types of rooms, from standard to luxury suites, equipped with essentials like beds.",
  },
  {
    icon: <FaUserShield className="text-4xl text-[#a8815e] mb-4 block mx-auto" />,
    title: "24-Hour Security",
    description:
      "On-site security personnel and best surveillance. From standard to luxury suites. Secure storage for valuables.",
  },
  {
    icon: <FaDumbbell className="text-4xl text-[#a8815e] mb-4 block mx-auto"/>,
    title: "Fitness Center",
    description:
      "Equipped with exercise machines and weights. Offering massages, facials, and other treatments.",
  },
  {
    icon: <FaSwimmingPool className="text-4xl text-[#a8815e] mb-4 block mx-auto" />,
    title: "Swimming Pool",
    description:
      "Indoor or outdoor pools for leisure or exercise. Offering massages, facials, and other treatments.",
  },
];

export default function facility() {
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
    <h2 className="text-6xl text-black">Hotel Facilities</h2>
  </div>

  <div className="max-w-[1400px] px-4 sm:px-6 lg:px-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
    {facilities.map((facility, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md p-10 min-h-[280px] w-full max-w-[420px] mx-auto text-center hover:shadow-xl transition-shadow duration-300"
      >
        {facility.icon}
        <h3 className="text-xl mt-5 font-medium text-black mb-2">
          {facility.title}
        </h3>
        <p className="text-gray-600 text-sm mt-5">
          {facility.description}
        </p>
      </div>
    ))}
  </div>
</div>

  );
}
