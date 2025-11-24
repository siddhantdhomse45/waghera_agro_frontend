import React from "react";
import { useNavigate } from "react-router-dom"

export default function Rooms() {
    const navigate = useNavigate(); 
    const cards = [
        {
            name: "Executive Room ",
            subtitle: "Echoes of Tradition in Wada Vintage Rooms",
            description:
                "Step into the past at Heritage Wada, our Wada Vintage Rooms, where the essence of Junnar’s heritage is meticulously preserved. These rooms harmoniously blend historic charm with modern comforts, boasting antique furnishings alongside contemporary amenities.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
            button: "Explore",
            link: "/room-detail/executive-room"
        },
        {
            name: "Traditional Cottages",
            subtitle: "The Futuristic Retreat in Cosmo Capsules",
            description:
                "Embark on a journey to the stars at Cosmo Capsule, our futuristic retreats designed for solo adventurers. As the pioneers of this innovative lodging concept in Junnar, our Cosmo Capsules offer unparalleled privacy and a window to the celestial wonders above.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/r-d-2.webp",
            button: "Explore",
            link: "/room-detail/traditional-cottage"},
        {
            name: "Family Suites",
            subtitle: "Echoes of Tradition in Wada Vintage Rooms",
            description:
                "Step into the past at Heritage Wada, our Wada Vintage Rooms, where the essence of Junnar’s heritage is meticulously preserved. These rooms harmoniously blend historic charm with modern comforts, boasting antique furnishings alongside contemporary amenities.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
            button: "Explore",
            link: "/room-detail/family-suites"
        },
        {
            name: "Family Suites",
            subtitle: "Echoes of Tradition in Wada Vintage Rooms",
            description:
                "Step into the past at Heritage Wada, our Wada Vintage Rooms, where the essence of Junnar’s heritage is meticulously preserved. These rooms harmoniously blend historic charm with modern comforts, boasting antique furnishings alongside contemporary amenities.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
            button: "Explore",
            link: "/room-detail/family-room"
        },
        {
            name: "Luxury Suite",
            subtitle: "Echoes of Tradition in Wada Vintage Rooms",
            description:
                "Step into the past at Heritage Wada, our Wada Vintage Rooms, where the essence of Junnar’s heritage is meticulously preserved. These rooms harmoniously blend historic charm with modern comforts, boasting antique furnishings alongside contemporary amenities.",
            img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
            button: "Explore",
            link: "/room-detail/luxury-suites"
        },
    ];
    return (
        <div className="bg-white min-h-screen  px-4 pt-16 pb-20 mt-30 flex flex-col items-center">
            <span className="text-[#ccb28d] text-xl tracking-wide mb-2">STAYCATION</span>
            <h1 className="text-4xl sm:text-5xl font-serif font-black mb-4 text-center text-black">
                Experience the Harmony of Nature at Waghero Agro Tourism
            </h1>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto text-center mb-14 leading-relaxed">
                Welcome to Waghero Agro Tourism, where rustic charm meets modern comfort. From the nostalgic allure of our traditional cottages to the eco-friendly serenity of our bamboo grove rooms, each accommodation offers a unique retreat. Discover the future of rural stays in our innovative capsule cottages, or escape to tranquility in our treetop and garden view rooms. Join us on a journey of relaxation and discovery amidst the scenic beauty of Mahabaleshwar.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 w-full max-w-7xl mx-auto">
                {cards.map((card, idx) => (
                    <div
                        key={card.name}
                        className="bg-white rounded-2xl shadow border flex flex-col overflow-hidden transition hover:shadow-lg"
                    >
                        <img
                            src={card.img}
                            alt={card.name}
                            className="w-full object-cover h-80"
                        />
                        <div className="p-7 flex flex-col flex-1">
                            <h2 className="text-3xl font-serif font-bold mb-2 text-black">{card.name}</h2>
                            <div className="text-xl text-[#ccb28d] font-serif mb-3">{card.subtitle}</div>
                            <p className="text-gray-800 text-base mb-5 flex-1">{card.description}</p>

              <button
                onClick={() => card.link && navigate(card.link)}
                className="px-6 py-2 bg-[#ccb28d] text-white text-lg font-semibold rounded shadow hover:bg-[#b6a06c] w-fit"
              >
                {card.button}
              </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
