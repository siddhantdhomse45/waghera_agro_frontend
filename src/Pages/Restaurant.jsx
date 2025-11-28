// Restaurant.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img7 from "../assets/images/img7.png"; // <-- adjust path if needed

/* ---------------------------
  Data (images, categories, items, testimonials)
   You can edit / fetch from API later
   --------------------------- */
const images = [
  "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/1.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/3.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/4.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/5.webp",
];

const categories = [
  "Breakfast",
  "Lunch",
  "Vegetarian",
  "Dinner",
  "Special Menu",
  "Non Vegetarian",
];

const testimonials = [
  {
    name: "Sarah Martinez",
    role: "COO of Apex Solutions",
    message:
      "Choosing Bokinn was one of the best decisions we’ve ever made. They have proven to be a reliable and innovative partner, always ready to tackle new challenges with and expertise. Their commitment to and delivering tailored.",
    image: "https://html.themewant.com/moonlit/assets/images/author/author-2x.webp",
  },
  {
    name: "John Carter",
    role: "CEO of TechSphere",
    message:
      "Working with Bokinn was a seamless experience. They offered tailored services, great communication, and top-notch results. I would highly recommend them to anyone looking for quality and commitment.",
    image: "https://html.themewant.com/moonlit/assets/images/author/author-4.webp",
  },
];

const items = [
  {
    title: "Tuscan Herb-Crusted Chicken",
    description: "Salted caramel, Puff pastry, salad",
    price: "₹120",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXNpdVXT4RgrgDN_51JbFcxgYZJUbFGBZlxA&s",
  },
  {
    title: "Classic Bolognese with Fresh",
    description: "Salted caramel, Puff pastry, salad",
    price: "₹120",
    image: "https://html.themewant.com/moonlit/assets/images/pages/resturant/1.jpg",
  },
  {
    title: "Grilled Paneer Tikka",
    description: "Mint chutney, onions, capsicum",
    price: "₹140",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR05YUuPyqT5AQi5YQwwOv7n20lU7-M6BVj8Q&s",
  },
  {
    title: "Spicy Veg Pulao",
    description: "Rice, fresh vegetables, Indian spices",
    price: "₹100",
    image:
      "https://www.vidhyashomecooking.com/wp-content/uploads/2020/09/InstantPotVegPulavRecipe.jpg",
  },
  {
    title: "Masala Dosa Platter",
    description: "Crispy dosa, coconut chutney, sambar",
    price: "₹90",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQznscbVDAqjbguziuiPLgW4ij1PszP14OZFA&s",
  },
  {
    title: "Chicken Butter Masala",
    description: "Creamy tomato gravy, naan or rice",
    price: "₹160",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrLBVEe6r1T0g-ZwoAeKUzAzQn5ot126jyKg&s",
  },
];

/* ---------------------------
  Premium Combo Data (all images use img7 per your request)
   --------------------------- */
const comboData = [
  {
    title: "Veg Family Combo",
    description: "Paneer Butter Masala + Veg Pulao + 4 Butter Rotis + Gulab Jamun",
    price: "₹399",
    image: img7,
    tag: "Bestseller",
  },
  {
    title: "South Indian Combo",
    description: "Masala Dosa + Idli Sambar + Upma + Filter Coffee",
    price: "₹299",
    image: img7,
    tag: "Chef Pick",
  },
  {
    title: "Non-Veg Special Combo",
    description: "Chicken Biryani + Chicken Curry + Raita + Soft Drink",
    price: "₹499",
    image: img7,
    tag: "Family Pack",
  },
];

export default function Restaurant() {
  // existing states
  const [openIndex, setOpenIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Dips & Spreads");
  const [selectedIndex, setSelectedIndex] = useState(0);

  // new states for combos/cart/modal
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [cart, setCart] = useState([]);

  // testimonial state
  const testimonial = testimonials[selectedIndex];

  // testimonial auto rotate
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // image modal helpers (use functional updates)
  const closeModal = () => setOpenIndex(null);
  const prevImage = () =>
    setOpenIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  const nextImage = () =>
    setOpenIndex((prev) => (prev === null ? null : (prev + 1) % images.length));

  // Add to cart function + toast
  const handleAddToCart = (combo) => {
    setCart((prev) => [...prev, combo]);

    // simple toast popup (DOM) — quick visual feedback
    const toast = document.createElement("div");
    toast.innerText = `${combo.title} added to cart`;
    toast.className =
      "fixed bottom-8 right-8 bg-[#a1865e] text-white px-5 py-3 rounded-xl shadow-lg z-50 transition-opacity";
    document.body.appendChild(toast);

    // fade after short time
    setTimeout(() => {
      toast.style.opacity = "0";
    }, 1400);
    setTimeout(() => toast.remove(), 1800);
  };

  return (
    <div className="font-sans text-gray-800">
      {/* -------------------- HERO SECTION -------------------- */}
      <div
        className="relative bg-cover bg-center h-[800px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 z-0" />
        <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-7xl font-serif mb-6 mt-45">The Restaurant</h1>
          <p className="text-xl">Whether you have questions, need answers, or simply want to chat.</p>
        </div>
      </div>

      {/* -------------------- ABOUT SECTION -------------------- */}
      <section className="py-20 px-4 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Images */}
          <div className="flex w-full md:w-1/2 overflow-visible relative gap-x-10">
            <div className="w-1/2 -ml-44">
              <img
                src="https://html.themewant.com/moonlit/assets/images/pages/resturant/1.webp"
                className="w-full h-[650px] object-cover rounded-lg"
                alt="hero-1"
              />
            </div>

            <div className="w-2/3">
              <img
                src="https://html.themewant.com/moonlit/assets/images/pages/resturant/2.webp"
                className="w-full h-[650px] object-cover rounded-lg shadow-lg"
                alt="hero-2"
              />
            </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="flex items-center text-[#a1865e] text-xl font-serif mb-3">
              <div className="h-px w-10 bg-[#a8815e]" />
              <span className="text-xl ml-2">✦</span>
              <span className="ml-4">Hotel Experience</span>
            </h4>
            <h2 className="text-5xl font-serif text-gray-900 leading-tight mb-6">
              From Farm to Fork: Enjoy Fresh, Seasonal Dishes at Bokinn
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Welcome to Bokinn, where luxury meets comfort in the heart of Canada...
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <div className="border border-gray-300 p-5 w-full sm:w-64 text-center rounded-md shadow-sm hover:bg-[#a1865e]">
                <h4 className="text-gray-700 text-lg font-medium mb-2">Reservation By Phone</h4>
                <div className="flex items-center justify-center text-gray-800 gap-2">
                  <i className="fa-solid fa-phone" />
                  <span className="text-base font-semibold">+12505550199</span>
                </div>
              </div>

              <div className="border border-gray-300 p-5 w-full sm:w-64 text-center rounded-md shadow-sm hover:bg-[#a1865e]">
                <h4 className="text-gray-700 text-lg font-medium mb-2">Opening Hours</h4>
                <div className="flex items-center justify-center text-gray-800 gap-2">
                  <i className="fa-regular fa-clock" />
                  <span className="text-base font-semibold">10 AM - 12 PM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- GALLERY SECTION -------------------- */}
      <section className="mt-10 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-29">
        <div>
          <span className="flex items-center justify-center text-[#a1865e] gap-4 mb-10 text-2xl font-serif">
            <span className="flex items-center">
              <span className="text-lg">◇</span>
              <span className="w-10 h-px bg-black"></span>
            </span>
            Gallery
            <span className="flex items-center">
              <span className="w-10 h-px bg-black"></span>
              <span className="text-lg">◇</span>
            </span>
          </span>

          <h4 className="flex justify-center text-6xl">Our Restaurant Gallery</h4>
          <p className="text-center mt-7 leading-relaxed">
            Our rooms offer a harmonious blend of comfort and elegance…
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-6 gap-4 mt-10 max-w-7xl mx-auto">
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                className={`cursor-pointer rounded-md object-cover h-[500px] w-full ${
                  index <= 2 ? "sm:col-span-2" : "sm:col-span-3"
                }`}
                onClick={() => setOpenIndex(index)}
                alt={`gallery-${index}`}
              />
            ))}
          </div>

          {/* Modal */}
          {openIndex !== null && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
              <button className="absolute top-5 right-5 text-white text-3xl" onClick={closeModal}>
                &times;
              </button>
              <button className="absolute left-5 text-white text-3xl" onClick={prevImage}>
                &#8592;
              </button>
              <img src={images[openIndex]} className="max-h-[80vh] max-w-[90vw] rounded-lg" alt="modal" />
              <button className="absolute right-5 text-white text-3xl" onClick={nextImage}>
                &#8594;
              </button>
            </div>
          )}
        </div>
      </section>

      {/* -------------------- MENU SECTION -------------------- */}
      <section className="mt-20 px-4 sm:px-10 md:px-24 bg-gray-200">
        <div className="flex justify-between flex-col md:flex-row mb-10">
          <div>
            <h4 className="text-[#a1865e] font-serif flex items-center text-3xl mb-2 mt-15">
              <div className="h-px w-10 bg-[#a8815e]" />
              <span className="text-2xl">✦</span>
              <span className="ml-4">Menu</span>
            </h4>
            <h2 className="text-7xl font-serif">Restaurant Menu</h2>
          </div>
          <p className="text-gray-500 text-lg mt-5">Our rooms offer a harmonious blend of comfort and elegance…</p>
        </div>

        <div className="flex flex-wrap gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-12 py-2 border rounded-md font-serif ${
                activeCategory === cat ? "bg-[#a1865e] text-white" : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 gap-y-10 gap-x-6"
          >
            {items.map((item, index) => (
              <div key={index} className="flex justify-between items-start gap-4 pt-8 border-b pb-6">
                <img src={item.image} className="w-20 h-20 rounded-md object-cover" alt={item.title} />
                <div className="flex-1">
                  <h3 className="text-lg font-serif">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                </div>
                <div className="text-lg font-serif">{item.price}</div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* -------------------- COMBO SECTION (PREMIUM) -------------------- */}
      <section className="py-24 px-4 md:px-24 bg-[#faf7f2] relative overflow-hidden">
        {/* floating background shapes */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#a1865e]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#a1865e]/10 rounded-full blur-3xl" />

        <div className="text-center mb-14">
          <span className="flex items-center justify-center text-[#a1865e] gap-4 mb-4 text-2xl font-serif">
            <span className="w-10 h-px bg-black" />
            Premium Combo Deals
            <span className="w-10 h-px bg-black" />
          </span>
          <h2 className="text-6xl font-serif">Chef’s Special Combos</h2>
          <p className="mt-4 text-gray-600 text-xl">Exclusive combinations crafted for families, food lovers & celebrations.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {comboData.map((combo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-white border shadow-xl rounded-2xl overflow-hidden"
            >
              {/* 3D tilt wrapper */}
              <motion.div
                whileHover={{ rotateX: 3, rotateY: -3 }}
                transition={{ type: "spring", stiffness: 160 }}
                className="p-6"
              >
                <div className="absolute top-4 left-4 bg-[#a1865e] text-white px-3 py-1 text-sm rounded-r-lg shadow-md">
                  {combo.tag}
                </div>

                <img
                  src={combo.image}
                  className="w-full h-60 object-cover rounded-xl group-hover:scale-105 transition-all duration-500"
                  alt={combo.title}
                />

                <h3 className="text-3xl font-serif mt-5">{combo.title}</h3>
                <p className="text-gray-600 mt-2 text-lg">{combo.description}</p>
                <p className="text-4xl text-[#a1865e] mt-4 font-serif">{combo.price}</p>
              </motion.div>

              <div className="p-6 flex justify-between items-center">
                <button
                  onClick={() => setSelectedCombo(combo)}
                  className="px-6 py-2 border border-[#a1865e] text-[#a1865e] rounded-full font-serif hover:bg-[#a1865e] hover:text-white transition-all"
                >
                  View Details
                </button>

                <button
                  onClick={() => handleAddToCart(combo)}
                  className="px-6 py-2 bg-[#a1865e] text-white rounded-full font-serif hover:bg-[#8b6d4c] transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for detailed combo view */}
        <AnimatePresence>
          {selectedCombo && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedCombo(null)} />
              <motion.div
                initial={{ y: 40, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 20, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                className="relative bg-white max-w-3xl w-full mx-4 md:mx-0 rounded-2xl p-8 shadow-2xl z-10"
              >
                <button className="absolute top-4 right-4 text-3xl" onClick={() => setSelectedCombo(null)}>
                  &times;
                </button>

                <img src={selectedCombo.image} className="w-full h-64 object-cover rounded-xl" alt="combo-detail" />

                <h3 className="text-4xl font-serif mt-5">{selectedCombo.title}</h3>
                <p className="text-gray-700 text-lg mt-3">{selectedCombo.description}</p>

                <div className="mt-6">
                  <h4 className="text-2xl font-serif mb-3">Included Items</h4>
                  <ul className="list-disc ml-5 text-gray-600 leading-loose text-lg">
                    {selectedCombo.description.split("+").map((part, i) => (
                      <li key={i}>{part.trim()}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-4xl text-[#a1865e] mt-6 font-serif">{selectedCombo.price}</p>

                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => {
                      handleAddToCart(selectedCombo);
                      setSelectedCombo(null);
                    }}
                    className="flex-1 py-3 bg-[#a1865e] text-white rounded-xl text-xl font-serif hover:bg-[#8b6d4c]"
                  >
                    Add to Cart
                  </button>
                  <button onClick={() => setSelectedCombo(null)} className="flex-1 py-3 border rounded-xl text-xl font-serif hover:bg-gray-50">
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* -------------------- TESTIMONIAL SECTION -------------------- */}
      <section className="py-20 bg-white px-4 md:px-24">
        <div className="text-center mb-16">
          <span className="flex items-center justify-center text-[#a1865e] gap-4 mb-10 text-2xl font-serif">
            <span className="w-10 h-px bg-black" />
            Testimonial
            <span className="w-10 h-px bg-black" />
          </span>

          <h2 className="text-5xl font-serif">What Our Client Say</h2>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="md:w-2/3">
            <div className="flex gap-1 text-yellow-800 text-4xl mb-4">
              {[1, 2, 3, 4].map((i) => (
                <span key={i}>★</span>
              ))}
              <span className="relative inline-block text-gray-300">
                ★
                <span className="absolute left-0 top-0 w-1/2 overflow-hidden text-yellow-800">★</span>
              </span>
            </div>

            <p className="text-gray-600 text-2xl leading-relaxed mb-6 font-serif">{testimonial.message}</p>
            <p className="text-gray-900 font-serif text-2xl">{testimonial.name}</p>
            <p className="text-gray-500 text-lg">{testimonial.role}</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <img src={testimonial.image} className="w-70 h-70 object-cover rounded-md border border-gray-200" alt="testimonial" />
            <div className="flex gap-3">
              <button
                onClick={() => setSelectedIndex((p) => (p === 0 ? testimonials.length - 1 : p - 1))}
                className="w-10 h-10 border rounded-md text-xl hover:bg-gray-100"
              >
                ←
              </button>
              <button
                onClick={() => setSelectedIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1))}
                className="w-10 h-10 border rounded-md text-xl hover:bg-gray-100"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
