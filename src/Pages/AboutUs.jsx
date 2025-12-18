

import React, { useEffect, useState } from "react";
import axios from "axios";
import ClientSay from "../Components/ClientSay/ClientSay";

export default function AboutUs() {
  const [team, setTeam] = useState([]);

  // Fetch team members from backend
  useEffect(() => {
    axios
      .get("https://backend-waghera.onrender.com/api/team")
      .then((res) => setTeam(res.data))
      .catch((err) => console.error("Team API Error:", err));
  }, []);

  return (
    <div className=" text-gray-800">

      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[800px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-7xl  mb-6 mt-45">About Us</h1>
          <p className="text-xl">
            Whether you have questions, need answers, or simply want to chat.
          </p>
        </div>
      </div>

      {/* Welcome Section */}
      <section className="bg-white py-20 px-4 sm:px-6 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">

          {/* Left Images */}
          <div className="relative flex justify-center items-center">
            <img
              src="https://html.themewant.com/moonlit/assets/images/index-4/about/1.webp"
              alt="Landscape"
              className="w-[90%] sm:w-[500px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-xl shadow-lg object-cover"
            />

            <img
              src="https://html.themewant.com/moonlit/assets/images/index-4/about/2.webp"
              alt="Hiker"
              className="absolute bottom-[-70px] left-1/2 sm:left-[60%] w-[250px] sm:w-[300px] md:w-[280px] border-4 border-white rounded-xl shadow-xl transform -translate-x-1/2 sm:translate-x-0"
            />
          </div>

          {/* Right Text */}
          <div className="text-center md:text-left mt-28 md:mt-0">
            <h4 className="text-[#a1865e] text-xl sm:text-2xl font-semibold tracking-wide mb-3">
              ―⟡ About Us
            </h4>
            <h2 className="text-3xl sm:text-4xl md:text-5xl  text-gray-900 leading-tight mb-6">
              Welcome To Our Waghera Agro Tourism Hotel & Resort
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-10">
              Welcome to Bokinn, where luxury meets comfort in the heart of
              Canada. Since 1999, we have been dedicated to providing an
              exceptional stay for our guests, blending modern amenities with
              timeless elegance.
            </p>
            <img
              src="https://html.themewant.com/moonlit/assets/images/index-4/about/sign.webp"
              alt="Signature"
              className="mx-auto md:mx-0 w-40 sm:w-56 mt-6"
            />
          </div>

        </div>
      </section>

      {/* Facilities Section */}
      <section className="bg-[#f4f4f4] px-6 md:px-21 py-15 relative">
        <div className="grid md:grid-cols-2 items-center gap-13 relative z-10">

          <div className="mb-5">
            <p className="text-[#a1865e] text-3xl mb-5 ">―◇ Facilities</p>
            <h2 className="text-4xl md:text-6xl  text-gray-900 mb-20">
              Hotel Facilities
            </h2>

            <div className="grid grid-cols-2 gap-y-10 gap-x-6 text-gray-800 text-[15px]">

              {/* 1 */}
              <div>
                <div className="items-start gap-3 mb-2">
                  <span className="text-[#b88d56] text-7xl">
                    <img src="https://html.themewant.com/moonlit/assets/images/icon/bed.svg" />
                  </span>
                  <h4 className="font-medium text-3xl mt-7 mb-7">Rooms and Suites</h4>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Varied types of rooms, from standard to luxury suites.
                </p>
              </div>

              {/* 2 */}
              <div>
                <div className=" items-start gap-3 mb-2">
                  <span className="text-[#b88d56] text-7xl">
                    <img src="https://html.themewant.com/moonlit/assets/images/icon/security.svg" />
                  </span>
                  <h4 className="font-medium text-3xl mt-7 mb-7">24-Hour Security</h4>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Security personnel and surveillance.
                </p>
              </div>

              {/* 3 */}
              <div>
                <div className=" items-start gap-3 mb-6 mt-10">
                  <span className="text-[#b88d56] text-4xl ">
                    <img src="https://html.themewant.com/moonlit/assets/images/icon/gym.svg" />
                  </span>
                  <h4 className="font-medium text-3xl mt-10">Fitness Center</h4>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Well-equipped gym & spa treatments.
                </p>
              </div>

              {/* 4 */}
              <div>
                <div className=" items-start gap-3 mb-6 mt-10">
                  <span className="text-[#b88d56] text-7xl">
                    <img src="https://html.themewant.com/moonlit/assets/images/icon/swimming-pool.svg" />
                  </span>
                  <h4 className="font-medium text-3xl mt-10">Swimming Pool</h4>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Beautiful indoor & outdoor pools.
                </p>
              </div>

            </div>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="https://html.themewant.com/moonlit/assets/images/index-3/facility.webp"
              alt="Hotel"
              className="rounded-md w-full shadow-md"
            />
          </div>

        </div>
      </section>

      {/* Meet The Team – BACKEND CONNECTED */}
      <section className="bg-white py-16 px-4 sm:px-6 md:px-24 text-center">
        <h4 className="text-yellow-800 text-base  mb-2">
          <span className="flex items-center justify-center text-[#a8815e] gap-2 text-lg sm:text-2xl ">
            <span className="flex items-center">
              <span className="text-sm sm:text-lg">◇</span>
              <span className="w-6 sm:w-10 h-px bg-black"></span>
            </span>
            Our Team
            <span className="flex items-center">
              <span className="w-6 sm:w-10 h-px bg-black"></span>
              <span className="text-sm sm:text-lg">◇</span>
            </span>
          </span>
        </h4>

        <h2 className="text-3xl sm:text-5xl  text-gray-900 mb-10">
          Meet The Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {team.length === 0 ? (
            <p className="text-gray-500 text-xl">Loading team...</p>
          ) : (
            team.map((member) => (
              <div key={member.id} className="text-center">
                <img
                  src={member.imageUrl}
                  className="mx-auto w-64 h-64 object-cover rounded-lg shadow-lg mb-4"
                  alt={member.name}
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>

                {/* Social Icons */}
                <div className="flex justify-center gap-3 mt-5">
                  <a className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-400 hover:bg-blue-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M22 12a10 10 0 10-11.6 9.87v-6.99h-2.5V12h2.5V9.8c0-2.46 1.47-3.82 3.72-3.82 1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.61.76-1.61 1.54V12h2.74l-.44 2.88h-2.3v6.99A10 10 0 0022 12z" />
                    </svg>
                  </a>

                  <a className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-400 hover:bg-blue-800 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-4 h-4">
                      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.6v2.2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.5 3 5.5 6.9V24h-5v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.8-2.8 3.7V24h-5V8z" />
                    </svg>
                  </a>

                  <a className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-400 hover:bg-green-600 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 32 32" className="w-4 h-4">
                      <path d="M16.004 2.667C8.636 2.667 2.67 8.633 2.67 16.001a13.3 13.3 0 001.76 6.602L2.28 29.72l7.291-2.073a13.299 13.299 0 006.432 1.646h.001c7.368 0 13.334-5.966 13.334-13.334S23.372 2.667 16.004 2.667zm7.833 18.944c-.333.933-1.95 1.797-2.677 1.917-.68.107-1.56.153-2.509-.16a18.05 18.05 0 01-3.073-1.349c-5.408-3.33-5.907-6.114-5.751-7.134.147-.987.874-1.5 1.34-1.727.36-.174.837-.253 1.12-.253.213 0 .4.01.563.018.183.008.426-.068.667.51.253.6.857 2.071.933 2.22.08.147.133.32.026.507-.106.187-.16.3-.313.467-.16.173-.334.387-.477.52-.16.147-.327.313-.14.613.187.293.84 1.393 1.807 2.259 1.24 1.104 2.284 1.453 2.58 1.613.28.147.44.133.6-.08.16-.214.693-.8.88-1.08.187-.28.373-.233.626-.14.253.093 1.6.76 1.867.893.28.133.467.2.534.313.066.107.066.987-.267 1.92z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      <section>
        <ClientSay />
      </section>

    </div>
  );
}