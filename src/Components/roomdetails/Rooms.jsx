
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Rooms() {
    const navigate = useNavigate();
    const cards = [
        {
            name: "Tent ",
            subtitle: "Echoes of Tradition in Wada Vintage Rooms",
            description:
                "Step into the past at Heritage Wada, our Wada Vintage Rooms, where the essence of Junnar’s heritage is meticulously preserved. These rooms harmoniously blend historic charm with modern comforts, boasting antique furnishings alongside contemporary amenities.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
            button: "Explore",
            link: "/room-detail/executive-room"
        },
      
        {
            name: "Family Rooms",
            subtitle: "Echoes of Tradition in Wada Vintage Rooms",
            description:
                "Step into the past at Heritage Wada, our Wada Vintage Rooms, where the essence of Junnar’s heritage is meticulously preserved. These rooms harmoniously blend historic charm with modern comforts, boasting antique furnishings alongside contemporary amenities.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
            button: "Explore",
            link: "/room-detail/family-suites"
        },
        // {
        //     name: "Family Suites",
        //     subtitle: "Echoes of Tradition in Wada Vintage Rooms",
        //     description:
        //         "Step into the past at Heritage Wada, our Wada Vintage Rooms, where the essence of Junnar’s heritage is meticulously preserved. These rooms harmoniously blend historic charm with modern comforts, boasting antique furnishings alongside contemporary amenities.",
        //     img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
        //     button: "Explore",
        //     link: "/room-detail/family-room"
        // },
        // {
        //     name: "Luxury Suite",
        //     subtitle: "Echoes of Tradition in Wada Vintage Rooms",
        //     description:
        //         "Step into the past at Heritage Wada, our Wada Vintage Rooms, where the essence of Junnar’s heritage is meticulously preserved. These rooms harmoniously blend historic charm with modern comforts, boasting antique furnishings alongside contemporary amenities.",
        //     img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
        //     button: "Explore",
        //     link: "/room-detail/luxury-suites"
        // },
    ];

    return (
        <div className="bg-white min-h-screen px-4 pt-16 pb-20 mt-10 flex flex-col items-center mt-30">
            <span className="text-[#ccb28d] text-xl tracking-wide mb-2">STAYCATION</span>

            <h1 className="text-4xl sm:text-5xl font-serif font-black mb-4 text-center text-black">
                Experience the Harmony of Nature at Waghero Agro Tourism
            </h1>

            <p className="text-gray-700 text-lg max-w-2xl mx-auto text-center mb-14 leading-relaxed">
                Welcome to Waghero Agro Tourism, where rustic charm meets modern comfort.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl mx-auto px-4 sm:px-0">
                {cards.map((card) => (
                    <div
                        key={card.name}
                        className="bg-white rounded-3xl shadow-lg border border-gray-200 flex flex-col overflow-hidden transition-transform transform hover:scale-[1.03] hover:shadow-2xl duration-300"
                    >
                        <div className="relative h-80 overflow-hidden rounded-t-3xl">
                            <img
                                src={card.img}
                                alt={card.name}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                            />
                        </div>

                        <div className="p-8 flex flex-col flex-1">
                            <h2 className="text-3xl font-serif font-extrabold mb-3 text-gray-900">{card.name}</h2>

                            <p className="text-gray-700 text-base mb-6 flex-1 leading-relaxed">
                                {card.description}
                            </p>

                            {/* Explore + Book Now Buttons */}
                            <div className="flex gap-4 mt-auto">
                                <button
                                    onClick={() => card.link && navigate(card.link)}
                                    className="px-8 py-3 bg-[#ccb28d] text-white text-lg font-semibold rounded-full shadow-md hover:bg-[#b69961] active:scale-95 transition duration-300"
                                >
                                    {card.button}
                                </button>

                                <button
                                    onClick={() => navigate("/booknow")}
                                    className="px-8 py-3 bg-[#ccb28d] text-white text-lg font-semibold rounded-full shadow-md hover:bg-[#b69961] active:scale-95 transition duration-300"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
