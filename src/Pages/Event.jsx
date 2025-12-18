


import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Events() {

  const [events, setEvents] = useState([]);

  const facilities = [
    {
      icon: "https://html.themewant.com/moonlit/assets/images/icon/security.svg",
      title: "24-Hour Security",
      desc: "A 24-hour security service provides safety and protection around the clock.",
    },
    {
      icon: "https://html.themewant.com/moonlit/assets/images/icon/wifi.svg",
      title: "Free Wifi",
      desc: "Free Wi-Fi helps people stay connected with fast internet access.",
    },
    {
      icon: "https://html.themewant.com/moonlit/assets/images/icon/fitness.svg",
      title: "Fitness Center",
      desc: "A fitness center promotes health and well-being with multiple facilities.",
    },
    {
      icon: "https://html.themewant.com/moonlit/assets/images/icon/home-theater.svg",
      title: "Airport transport",
      desc: "Airport transport offers comfortable and fast travel services.",
    },
  ];

  useEffect(() => {
    axios.get("https://backend-waghera.onrender.com/api/event-photos")
      .then(res => {
        console.log("API Data:", res.data);
        setEvents(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className=" text-gray-800">

      {/* HERO SECTION */}
      <div
        className="relative bg-cover bg-center h-[800px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-7xl  mb-6">Events</h1>
          <p className="text-xl">Whether you have questions or want to join the event.</p>
        </div>
      </div>

      {/* EVENT SECTIONS */}
      <section className="bg-white py-20 px-4 md:px-24">
        {Array.isArray(events) && events.map((ev, index) => (

          <div
            key={index}
            className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24"
          >

            {/* LEFT SIDE OR RIGHT SIDE IMAGE BASED ON INDEX */}
            <div
              className={`${
                index % 2 === 0
                  ? "order-2 md:order-1"  // Even → Text Left, Image Right
                  : "order-1 md:order-2"  // Odd → Image Left, Text Right
              }`}
            >
              <h2 className="text-4xl md:text-5xl  mb-4">{ev.title}</h2>
              <p className="text-gray-600 text-lg mb-8">{ev.description}</p>

              <div className="flex flex-wrap gap-10 text-gray-900 text-lg font-medium">
                <div><span className="text-[#a8815e] text-4xl">100+</span><br />Guest Dinner</div>
                <div><span className="text-[#a8815e] text-4xl">20+</span><br />Service Man</div>
                <div><span className="text-[#a8815e] text-4xl">10+</span><br />Special Room</div>
              </div>
            </div>

            <div
              className={`${
                index % 2 === 0
                  ? "order-1 md:order-2"  // Even → Image Right
                  : "order-2 md:order-1"  // Odd → Image Left
              }`}
            >
              <img
                src={ev.imageUrl}
                alt={ev.title}
                className="w-full h-[500px] object-cover rounded-lg shadow-md"
              />
            </div>

          </div>
        ))}
      </section>

      {/* FACILITIES */}
      <section className="bg-white py-20 px-4 md:px-24">
        <h4 className="flex justify-center text-4xl mb-16 mt-[-200px]">Why Choose Our Events</h4>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {facilities.map((item, index) => (
            <div key={index} className="text-center">
              <img src={item.icon} alt={item.title} className="mx-auto mb-6 w-12 h-12" />
              <h3 className="text-3xl  mb-4">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}