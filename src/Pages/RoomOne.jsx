import React from 'react'
import Booking from '../Components/Booking/Booking'
import { useNavigate } from 'react-router-dom';
import ClientSay from '../Components/ClientSay/ClientSay';

function RoomOne() {
    const navigate = useNavigate();
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
    <div className="mt-15 mb-15 max-w-screen-6xl w-full mx-auto px-2">
  <Booking />
</div>

 <section className="bg-white pt-0 pb-16 px-4 sm:px-6 md:px-24">
  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 gap-5">
    {[
      {
        name: "Exectutive Room",
        Amt: "12000₹",
        desc:"Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
      },
      {
        name: "Deluxe Room",
        Amt: "3999₹",
         desc:"Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/2.webp",
      },
      {
        name: "Single Room",
        Amt: "12999₹",
         desc:"Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp",
      },
      {
        name: "Single Room",
        Amt: "12000₹",
         desc:"Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/5.webp",
      },
      {
        name: "Single Room",
        Amt: "3999₹",
         desc:"Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest.",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/4.webp",
      },
      {
        name: "Single Room",
        Amt: "12999₹",
         desc:"Our rooms offer a harmonious blend of comfort and elegance, designed to provide an exceptional stay for every guest.",
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
    <div className="absolute top-5 left-5 bg-white bg-opacity-80 text-[#b86e2e] text-lg font-semibold px-4 py-2 rounded shadow-sm z-10">
      {member.Amt}
    </div>

    {/* Image */}
    <img
      src={member.img}
      alt={member.name}
      className="w-full h-74 object-cover transition-transform duration-500 hover:scale-105"
    />
  </div>

  <div className="p-4">
    <h3 className="text-3xl font-serif">{member.name}</h3>

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

<div>
  <ClientSay />
</div>

</>
    
  )
}

export default RoomOne
