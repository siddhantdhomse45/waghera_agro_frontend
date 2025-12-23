import { useNavigate } from "react-router-dom";

const galleryImages = [
  "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/room/r-d-2.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/room/2.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp",
];

const amenities = [
  // { icon: "wifi", label: "Free WiFi" },
  // { icon: "shower", label: "Premium Shower" },
  // { icon: "aeroplane", label: "Airport Transport" },
  // { icon: "balcony", label: "Private Balcony" },
  // { icon: "refrigerator", label: "Mini Bar" },
  // { icon: "support", label: "24/7 Support" },
  // { icon: "desk", label: "Work Desk" },
  // { icon: "fitness", label: "Fitness Center" },
  // { icon: "swimming-pool", label: "Swimming Pool" },
];

const ExecutiveRoom = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 mt-30 font-serif">
      {/* Top heading */}
      <h1 className="text-5xl font-bold text-[#a1865e] mb-6 text-center">
        Tents
      </h1>

      {/* Description + main image */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-3xl mb-3 text-[#ccb28d]">
           Luxury Tent Retreat
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Step into our luxury tent, where nature blends seamlessly with
            comfort. Thoughtfully designed interiors, cozy bedding, and serene
            outdoor views create a perfect escape from the everyday. Enjoy
            modern amenities including comfortable linens, proper lighting,
            seating space, and a peaceful ambiance—ideal for relaxation,
            stargazing, and reconnecting with nature.
          </p>
        </div>
        <div>
          <img
            src="https://html.themewant.com/moonlit/assets/images/pages/room/1.webp"
            alt="Executive Room"
            className="w-full h-96 object-cover rounded-xl shadow"
          />
        </div>
      </div>

      {/* Gallery */}
      <h3 className="text-2xl font-semibold text-[#a1865e] mb-5 text-center">
        Gallery
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {galleryImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Gallery ${i + 1}`}
            className="w-full h-52 object-cover rounded-lg shadow"
          />
        ))}
      </div>

      {/* Amenities */}
      {/* <h3 className="text-2xl font-semibold text-[#a1865e] mb-5 text-center">Amenities Provided</h3> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {amenities.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow group transition hover:shadow-lg hover:bg-[#f9f6f2]"
          >
            <div className="w-14 h-14 mb-3 rounded-full flex items-center justify-center bg-[#f8ebe2] group-hover:bg-[#ccb28d]/20 transition">
              <img
                src={`https://html.themewant.com/moonlit/assets/images/icon/${item.icon}.svg`}
                alt={item.label}
                className="w-8 h-8"
              />
            </div>
            <span className="text-base md:text-lg text-gray-800 font-medium text-center">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* ⭐ Book Now Button */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate("/booknow")}
          className="px-8 py-3 bg-[#a1865e] text-white text-lg rounded-full shadow-md hover:bg-[#8a6f4f] transition-all"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ExecutiveRoom;
