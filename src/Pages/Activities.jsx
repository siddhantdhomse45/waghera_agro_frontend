import React from "react";
import ClientSay from "../Components/ClientSay/ClientSay";

const Activities = () => {
  const images = [
    {
      src: "https://html.themewant.com/moonlit/assets/images/pages/activities/3.webp",
      title: "Cultural Tours",
    },
    {
      src: "https://html.themewant.com/moonlit/assets/images/pages/activities/4.webp",
      title: "Cooking Classes",
    },
    {
      src: "https://html.themewant.com/moonlit/assets/images/pages/activities/5.webp",
      title: "Spa & Wellness",
    },
  ];
  return (
    <div className="font-serif text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[800px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-7xl font-serif mb-6 mt-45">
            Activities
          </h1>
          <p className="text-xl">
            Whether you have questions, need answers, or simply want to chat.
          </p>
        </div>
      </div>

      <section className="bg-white py-16 px-4 md:px-24">
        <div className="text-center mb-14">
          <h4 className="text-yellow-800 text-base font-serif mb-2">
            <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl font-serif">
              <span className="flex items-center">
                <span className="text-sm sm:text-lg">◇</span>
                <span className="w-6 sm:w-10 h-px bg-black"></span>
              </span>
              Our Activity
              <span className="flex items-center">
                <span className="w-6 sm:w-10 h-px bg-black"></span>
                <span className="text-sm sm:text-lg">◇</span>
              </span>
            </span>
          </h4>
          <h2 className="text-3xl sm:text-5xl font-serif text-gray-900">
            Our Activities
          </h2>
        </div>

        {/* Wider Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-screen-xl mx-auto">
          {/* Image 1 */}
          <div>
            <img
              src="https://i.pinimg.com/736x/da/d2/dc/dad2dc9bf548dc7dabea3cf68823546b.jpg"
              alt="Kayaking"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Text Block 1 */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#a8815e] mb-2">
              <span className="h-px w-6 bg-[#a8815e]"></span>
              <span className="text-2xl">Kayaking</span>
            </div>
            <h3 className="text-5xl font-serif mb-6">Kayaking</h3>
            <p className="text-gray-700 mb-4 text-lg">
              Kayaking is an adventurous and recreational water sport in which a
              person navigates through water using a slender, lightweight boat
              known as a kayak. The kayak is propelled with the help of a
              double-bladed paddle, allowing smooth and efficient movement.
              Unlike other paddling sports, the paddler sits low inside the
              kayak with their legs extended forward, providing stability and
              control over the watercraft.
            </p>
            <a
              href="#"
              className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition"
            >
              Read More
            </a>
          </div>

          {/* Text Block 2 */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#a8815e] mb-2">
              <span className="h-px w-6 bg-[#a8815e]"></span>
              <span className="text-2xl">Swimming in River</span>
            </div>
            <h3 className="text-5xl font-serif mb-6">Swimming in River</h3>
            <p className="text-gray-700 mb-4 text-lg">
              Swimming in a river is an outdoor water activity where individuals
              enjoy floating, wading, or swimming in naturally flowing
              freshwater. Unlike swimming in a pool or lake, river swimming
              involves moving water, which creates a unique experience
              influenced by the river’s current, depth, temperature, and
              surroundings.
            </p>
            <a
              href="#"
              className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition"
            >
              Read More
            </a>
          </div>

          {/* Image 2 */}
          <div>
            <img
              src="https://i.pinimg.com/736x/95/68/a0/9568a0f1b2525ac0c65aec95ff474e87.jpg"
              alt="Romantic Getaway"
              className="w-full h-auto mt-0 object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/fa/31/5f/fa315fa73a956a440d27ec8a7acb0ed3.jpg"
              alt="Visit Strawberry Garden"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Text Block 1 */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#a8815e] mb-2">
              <span className="h-px w-6 bg-[#a8815e]"></span>
              <span className="text-2xl">Visit Strawberry Garden</span>
            </div>
            <h3 className="text-5xl font-serif mb-6">
              Visit Strawberry Garden
            </h3>
            <p className="text-gray-700 mb-4 text-lg">
              Step into the refreshing world of lush greenery and vibrant red
              berries at the Strawberry Garden, a perfect retreat for nature
              lovers and families alike. Wander through beautifully maintained
              fields where ripe strawberries grow in abundance, filling the air
              with a naturally sweet aroma. Here, you can pick fresh
              strawberries, enjoy the scenic landscapes, and experience the joy
              of harvesting your own basket of juicy, organic fruit. The garden
              also features relaxing seating areas, photo-friendly corners, and
              guided tours that let you learn about strawberry farming and
              cultivation.
            </p>
            <a
              href="#"
              className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition"
            >
              Read More
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#a8815e] mb-2">
              <span className="h-px w-6 bg-[#a8815e]"></span>
              <span className="text-2xl">Camp Fire</span>
            </div>
            <h3 className="text-5xl font-serif mb-6">Camp Fire</h3>
            <p className="text-gray-700 mb-4 text-lg">
              Experience the magic of a warm camp fire as the sun sets and the
              night sky comes alive. Gather around the crackling flames with
              friends and family, share stories, enjoy music, or simply relax in
              the peaceful outdoor atmosphere. Our campfire setup offers
              comfortable seating, safe surroundings, and a beautiful natural
              backdrop, creating the perfect environment for unforgettable
              evenings. Whether you want to unwind after a long day or make
              memories with your loved ones, a cozy camp fire brings warmth,
              joy, and togetherness to your stay.
            </p>
            <a
              href="#"
              className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition"
            >
              Read More
            </a>
          </div>

          {/* Image 2 */}
          <div>
            <img
              src="	https://i.pinimg.com/736x/1b/62/3e/1b623ebde1130f3aafe8d92cc75841e5.jpg"
              alt="Camp Fire"
              className="w-full h-auto mt-0 object-cover rounded-lg"
            />
          </div>
          <div>
            <img
              src="	https://i.pinimg.com/736x/98/a6/30/98a630bc73d61efee13e3fe6de6c28ec.jpg"
              alt="Kayaking"
              className="w-full h-[500px] object-cover rounded-lg"
            />
          </div>

          {/* Text Block 1 */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#a8815e] mb-2">
              <span className="h-px w-6 bg-[#a8815e]"></span>
              <span className="text-2xl">Grilled BBQ</span>
            </div>
            <h3 className="text-5xl font-serif mb-6">Grilled BBQ</h3>
            <p className="text-gray-700 mb-4 text-lg">
              Grilled BBQ is all about the perfect blend of smoky aroma,
              sizzling heat, and rich flavors. Freshly marinated ingredients are
              cooked slowly over a charcoal or flame grill, allowing the natural
              juices to lock in while creating a deliciously crispy outer layer.
              Each bite is tender, flavorful, and infused with that unmistakable
              BBQ smokiness.
            </p>
            <a
              href="#"
              className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition"
            >
              Read More
            </a>
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 text-[#a8815e] mb-2">
              <span className="h-px w-6 bg-[#a8815e]"></span>
              <span className="text-2xl">Bonfire with Music</span>
            </div>
            <h3 className="text-5xl font-serif mb-6">Bonfire with Music</h3>
            <p className="text-gray-700 mb-4 text-lg">
              A bonfire with music creates the perfect atmosphere for relaxation
              and togetherness. As the flames crackle and glow under the night
              sky, the air fills with melodies that make the moment magical.
              Whether it’s soft acoustic tunes, lively beats, or friends singing
              along, the music blends beautifully with the warmth of the fire.
              It’s the ideal setting for stories, laughter, bonding, and
              unforgettable memories, making every night feel special and full
              of life.
            </p>
            <a
              href="#"
              className="text-[#b86e2e] border-b border-[#b86e2e] w-fit hover:text-[#a15d20] transition"
            >
              Read More
            </a>
          </div>

          {/* Image 2 */}
          <div>
            <img
              src="	https://i.pinimg.com/736x/ea/55/49/ea5549f5fe6af0b51d6644262bc35fa9.jpg"
              alt="Romantic Getaway"
              className="w-full h-auto mt-0 object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      <section className="px-4 py-12 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-[600px] object-cover"
                />
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/40 z-10" />

                <div className="absolute bottom-0 left-0 w-full p-4 z-20 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="text-4xl mb-20 font-serif">{image.title}</h3>
                  <button className="cursor-pointer absolute bottom-4 left-4  font-bold rounded border border-white  text-white px-4 py-2 hover:bg-yellow-800 transition duration-300">
                    View More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        {" "}
        <ClientSay />
      </section>
    </div>
  );
};

export default Activities;
