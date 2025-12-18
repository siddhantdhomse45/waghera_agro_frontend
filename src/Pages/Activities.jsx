







import React, { useState, useEffect } from "react";
import ClientSay from "../Components/ClientSay/ClientSay";

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("https://backend-waghera.onrender.com/api/activities/all")
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.log("Error:", err));
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
          <h1 className="text-4xl md:text-7xl  mb-6 mt-45">
            Activities
          </h1>
          <p className="text-xl">
            Whether you have questions, need answers, or simply want to chat.
          </p>
        </div>
      </div>

      {/* Activities Section */}
      <section className="bg-white py-16 px-4 md:px-24">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-5xl  text-gray-900">
            Our Activities
          </h2>
        </div>

        {/* Alternating Layout */}
        <div className="grid grid-cols-1 gap-20 max-w-screen-xl mx-auto">
          {activities.map((item, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              style={{
                display: "flex",
                flexDirection: index % 2 === 1 ? "row-reverse" : "row",
              }}
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-[500px] object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Text Section */}
              <div className="w-full md:w-1/2 flex flex-col justify-center px-4">
                <div className="flex items-center gap-2 text-[#a8815e] mb-2">
                  <span className="h-px w-8 bg-[#a8815e]"></span>
                  <span className="text-xl">{item.title}</span>
                </div>

                <h3 className="text-4xl md:text-5xl  mb-6">
                  {item.title}
                </h3>

                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {item.description}
                </p>

                <a
                  href="#"
                  className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition-all"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Say Section */}
      <section>
        <ClientSay />
      </section>
    </div>
  );
};

export default Activities;
