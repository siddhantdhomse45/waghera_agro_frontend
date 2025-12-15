// import React from 'react'

// export default function Events() {
//   const facilities = [
//     {
//     icon: "https://html.themewant.com/moonlit/assets/images/icon/security.svg",
//     title: "24-Hour Security",
//     desc: "A 24-hour security service provides and surveillance, properties, or sensitive information around the clock.",
//   },
//   {
//     icon: "https://html.themewant.com/moonlit/assets/images/icon/wifi.svg",
//     title: "Free Wifi",
//     desc: "Free Wi-Fi has become an essential service in our increasingly connected world. It helps people to access the internet.",
//   },
//   {
//     icon: "https://html.themewant.com/moonlit/assets/images/icon/fitness.svg",
//     title: "Fitness Center",
//     desc: "A fitness center is a vibrant and dynamic environment designed to promote health and well-being.",
//   },
//   {
//     icon: "https://html.themewant.com/moonlit/assets/images/icon/home-theater.svg",
//     title: "Airport transport",
//     desc: "Airport transportation plays a crucial role in travel experiences for passengers, including taxis and ride-sharing.",
//   },
// ];
//   return (
//     <div className="font-serif text-gray-800">
//       {/* Hero Section */}
//      <div
//   className="relative bg-cover bg-center h-[800px] flex items-center justify-center"
//   style={{
//     backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
//   }}
// >
//   {/* Overlay */}
//   <div className="absolute inset-0 bg-black/50 z-0" />
//         <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
//           <h1 className="text-4xl md:text-7xl font-serif mb-6 mt-25">Events</h1>
//           <p className="text-xl">Whether you have questions, need answers, or simply want to chat.</p>
//         </div>
//       </div>

//       <section className="bg-white py-20 px-4 md:px-24">
//   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
//     {/* Left Image */}
//     <div>
//       <img
//         src="https://html.themewant.com/moonlit/assets/images/pages/event/1.webp"
//         alt="Gala Dinner"
//         className="w-full h-[500px] object-cover rounded-lg shadow-md"
//       />
//     </div>

//     {/* Right Content */}
//     <div>
//       <h2 className="text-6xl md:text-5xl font-serif mb-4 leading-snug">
//         A Night of Hope: <br className="hidden md:block" />
//         <span className=" font-serif">Our Charity Gala Room.</span>
//       </h2>
//       <p className="text-gray-600 text-lg mb-8">
//         At our Fitness & Yoga Services, we are dedicated to helping you achieve your
//         health and wellness goals. Our comprehensive program offers a variety of classes 
//         designed to suit all levels, from beginners to advanced practitioners.
//       </p>
//       <div className="flex flex-wrap gap-10 text-gray-900 text-lg font-medium">
//         <div><span className="text-[#a8815e] text-4xl">1000+</span><br />Guest Dinner</div>
//         <div><span className="text-[#a8815e] text-4xl">100+</span><br />Service Man</div>
//         <div><span className="text-[#a8815e] text-4xl">10+</span><br />Special Room</div>
//       </div>
//     </div>
//   </div>

//   {/* Second Section */}
//   <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//     {/* Right Content First */}
//     <div>
//       <h2 className="text-6xl md:text-5xl font-serif mb-4 leading-snug">
//         Taste of Luxury: <br className="hidden md:block" />
//         <span className="">Food & Wine Festival Event</span>
//       </h2>
//       <p className="text-gray-600 text-lg mb-8">
//         At our Fitness & Yoga Services, we are dedicated to helping you achieve your
//         health and wellness goals. Our comprehensive program offers a variety of classes 
//         designed to suit all levels, from beginners to advanced practitioners.
//       </p>
//       <div className="flex flex-wrap gap-10 text-gray-900 text-lg font-medium">
//         <div><span className="text-[#a8815e] text-4xl">800+</span><br />Guest Dinner</div>
//         <div><span className="text-[#a8815e] text-4xl">70+</span><br />Service Man</div>
//         <div><span className="text-[#a8815e] text-4xl">16+</span><br />Special Room</div>
//       </div>
//     </div>

//     {/* Right Image */}
//     <div>
//       <img
//         src="https://html.themewant.com/moonlit/assets/images/pages/event/2.webp"
//         alt="Wine Festival"
//         className="w-full h-[500px] object-cover rounded-lg shadow-md"
//       />
//     </div>
//   </div>
// </section>

// <section className="relative py-20 px-4 md:px-24 overflow-hidden text-white">
//   {/* Background Image + Overlay */}
//   <div
//     className="absolute inset-0 bg-cover bg-center z-0"
//     style={{
//       backgroundImage: `url('https://images.unsplash.com/photo-1560347876-aeef00ee58a1?auto=format&fit=crop&w=1470&q=80')`,
//     }}
//   >
//     <div className="absolute inset-0 bg-[#0c1f3a]/70"></div>
//   </div>

//   {/* Content Wrapper */}
//   <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
//     {/* Left Heading */}
//     <div className="lg:col-span-1 text-center lg:text-left">
//       <h2 className="text-5xl md:text-5xl font-serif leading-tight">
//         We're Here to Help 
//         Reach Out to Us Today 
//         And Join Our Event
//       </h2>
//     </div>

//     {/* Right Side: Contact Boxes */}
//     <div className="lg:col-span-2 flex flex-col md:flex-row gap-6 ml-30 justify-end">
//       {/* Phone Box */}
//       <div className="bg-white/10 m border border-white rounded-xl p-6 w-full md:w-1/2 text-left">
//         <h4 className="text-lg font-serif mb-2 text-white">Reservation By Phone</h4>
//         <div className="flex items-center gap-3 text-white/90">
//           <i class="fa-solid fa-phone"></i>
//           +12505550199
//         </div>
//       </div>

//       {/* Email Box */}
//       <div className="bg-white/10 m border border-white rounded-xl p-6 w-full md:w-1/2 text-left">
//         <h4 className="text-lg font-serif mb-2 text-white">Reservation By Email</h4>
//         <div className="flex items-center gap-3 text-white/90">
//          <i class="fa-regular fa-envelope"></i>
//           moonlit@gmail.com
//         </div>
//       </div>
//     </div>
//   </div>
// </section>


//       <section className="bg-white py-20 px-4 md:px-24">
//         <h4 className='flex justify-center text-6xl mb-25'>why choose our events</h4>
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
//         {facilities.map((item, index) => (
//           <div key={index} className="text-center">
//             <img src={item.icon} alt={item.title} className="mx-auto mb-6 w-12 h-12" />
//             <h3 className="text-3xl font-serif mb-4">{item.title}</h3>
//             <p className="text-gray-600 text-lg">{item.desc}</p>
//           </div>
//         ))}
//       </div>
//     </section> 
//       </div>
      
//   )
// }




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
    axios.get("http://localhost:5000/api/event-photos")
      .then(res => {
        console.log("API Data:", res.data);
        setEvents(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="font-serif text-gray-800">

      {/* HERO SECTION */}
      <div
        className="relative bg-cover bg-center h-[800px] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-7xl font-serif mb-6">Events</h1>
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
              <h2 className="text-4xl md:text-5xl font-serif mb-4">{ev.title}</h2>
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
        <h4 className="flex justify-center text-6xl mb-16">Why Choose Our Events</h4>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {facilities.map((item, index) => (
            <div key={index} className="text-center">
              <img src={item.icon} alt={item.title} className="mx-auto mb-6 w-12 h-12" />
              <h3 className="text-3xl font-serif mb-4">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}