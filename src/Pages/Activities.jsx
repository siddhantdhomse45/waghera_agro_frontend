
import React, { useState, useEffect } from "react";
import ScrollToTop from "../Components/ScrollToTop";
import ClientSay from "../Components/ClientSay/ClientSay";
import activities1 from "../../src/assets/images/activities.jpeg"

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch("https://backend-waghera.onrender.com/api/activities/all")
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.log("Error:", err));
  }, []);

  return (
    <div className="text-gray-800">
      <ScrollToTop />
      {/* ================= HERO SECTION ================= */}
      <div
        className="relative bg-cover bg-center h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center"
        style={{
           backgroundImage: `url(${activities1})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4">
            Activities
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
            Experience nature, adventure, and unforgettable moments at Waghera
            Agro Tourism.
          </p>
        </div>
      </div>

      {/* ================= ACTIVITIES SECTION ================= */}
      <section className="bg-white py-12 sm:py-16 px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900">
            Our Activities
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 sm:gap-16 md:gap-20 max-w-screen-xl mx-auto">
          {activities.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center"
              >
                {/* IMAGE */}
                <div
                  className={`w-full ${
                    isReverse ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
                  />
                </div>

                {/* CONTENT */}
                <div
                  className={`w-full flex flex-col justify-center px-0 sm:px-4 ${
                    isReverse ? "md:order-1" : "md:order-2"
                  }`}
                >
                  <div className="flex items-center gap-3 text-[#a8815e] mb-3">
                    <span className="h-px w-8 bg-[#a8815e]" />
                    <span className="text-lg sm:text-xl font-medium">
                      {item.title}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
                    {item.title}
                  </h3>

                  <p className="text-gray-700 mb-4 sm:mb-6 text-base sm:text-lg leading-relaxed">
                    {item.description}
                  </p>

                  <a
                    href="#"
                    className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition-all text-base sm:text-lg"
                  >
                    Read More
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= CLIENT SAY SECTION ================= */}
      <section>
        <ClientSay />
      </section>
    </div>
  );
};

export default Activities;



