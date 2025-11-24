import React from "react";

export default function SpecialOffer() {
  const offers = [
    {
      id: 1,
      title: "Family Package",
      image: "https://html.themewant.com/moonlit/assets/images/offer/5.webp",
      price: "₹5999",
      features: [
        "20% off on family suites",
        "Free meals for kids under 12",
        "Complimentary tickets to amusement park",
        "Flexible check-in/out",
      ],
      type: "Family",
    },
    {
      id: 2,
      title: "Couple Package",
      image: "https://html.themewant.com/moonlit/assets/images/offer/6.webp",
      price: "₹4999",
      features: [
        "Two-night stay in suite",
        "Romantic dinner setup",
        "Breakfast in bed",
        "Late checkout for couples",
      ],
      type: "Couple",
    },
    {
      id: 3,
      title: "Honeymoon Package",
      image: "https://html.themewant.com/moonlit/assets/images/offer/7.webp",
      price: "₹6999",
      features: [
        "Luxury suite accommodation",
        "Rose petal room decor",
        "Couple spa session",
        "Special honeymoon cake & welcome drinks",
      ],
      type: "Honeymoon",
    },
    {
      id: 4,
      title: "Corporate Package",
      image: "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      price: "₹8999",
      features: [
        "Conference hall access",
        "Team-building activities",
        "Buffet lunch/dinner",
        "Free high-speed WiFi",
      ],
      type: "Corporate",
    },
    {
      id: 5,
      title: "Group Package",
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      price: "₹14999",
      features: [
        "Special rates for groups (8+)",
        "Private activity guide",
        "Bonfire & music night",
        "Transport included",
      ],
      type: "Group",
    },
  ];

  // Colors for different package types
  const typeColors = {
    Family: "bg-[#FFB347] text-[#7a521c]",
    Couple: "bg-[#FF69B4] text-[#75334d]",
    Honeymoon: "bg-[#b889fc] text-[#443c62]",
    Corporate: "bg-[#72e4ec] text-[#257276]",
    Group: "bg-[#76da8c] text-[#285e39]"
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 px-4 md:px-24">
      {/* Header */}
      <div className="text-center mb-14">
        <h4 className="text-yellow-800 text-base font-serif mb-2">
          <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
            <span className="flex items-center">
              <span className="text-sm sm:text-lg">◇</span>
              <span className="w-6 sm:w-10 h-px bg-black"></span>
            </span>
            Exclusive Deals
            <span className="flex items-center">
              <span className="w-6 sm:w-10 h-px bg-black"></span>
              <span className="text-sm sm:text-lg">◇</span>
            </span>
          </span>
        </h4>
        <h2 className="text-3xl sm:text-5xl font-serif text-gray-900 mb-4">
          Special Offers
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our exclusive packages designed to make your stay unforgettable
        </p>
      </div>

      {/* Offer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="relative">
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-56 object-cover"
              />
              <div
                className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold
                  ${typeColors[offer.type] || "bg-[#a8815e] text-white"}`}
              >
                {offer.type}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif text-gray-900 mb-3">
                {offer.title}
              </h3>
              <ul className="space-y-2 mb-6">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    {/* <span className="material-icons text-[#a8815e] mt-1 mr-2">
                      check_circle
                    </span> */}
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center">
                <p className="text-3xl font-serif text-[#a8815e] font-bold">
                  {offer.price}
                </p>
                <button className="bg-[#a8815e] hover:bg-[#8a6a4e] text-white px-6 py-2 rounded-full transition-colors duration-300">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Offers */}
      <div className="text-center mt-12">
        <button className="border-2 border-[#a8815e] text-[#a8815e] hover:bg-[#a8815e] hover:text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300">
          View All Offers
        </button>
      </div>
    </section>
  );
}
