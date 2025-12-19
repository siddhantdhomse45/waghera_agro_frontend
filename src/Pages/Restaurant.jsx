
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import img7 from "../assets/images/img7.png"; // fallback image

/* --------------------------- DATA --------------------------- */
const images = [
  "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/1.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/3.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/4.webp",
  "https://html.themewant.com/moonlit/assets/images/pages/resturant/gallery/5.webp",
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

const comboData = [
  {
    title: "Veg Family Combo",
    description: "Paneer Butter Masala + Veg Pulao + 4 Butter Rotis + Gulab Jamun",
    price: "399",
    image: img7,
    tag: "Bestseller",
  },
  {
    title: "South Indian Combo",
    description: "Masala Dosa + Idli Sambar + Upma + Filter Coffee",
    price: "299",
    image: img7,
    tag: "Chef Pick",
  },
  {
    title: "Non-Veg Special Combo",
    description: "Chicken Biryani + Chicken Curry + Raita + Soft Drink",
    price: "499",
    image: img7,
    tag: "Family Pack",
  },
];

export default function Restaurant() {
  const [openIndex, setOpenIndex] = useState(null);
  const [items, setItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCombo, setSelectedCombo] = useState(null);
  const [cart, setCart] = useState([]);

  const testimonial = testimonials[selectedIndex];

  // -------------------- FETCH ALL MENU ITEMS --------------------
  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await axios.get("https://backend-waghera.onrender.com/api/menu"); // fetch all items
        setItems(res.data);
      } catch (err) {
        console.error("Error fetching menu items:", err);
        setItems([]);
      }
    };
    fetchMenuItems();
  }, []);

  // -------------------- TESTIMONIAL AUTO ROTATE --------------------
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedIndex((p) => (p === testimonials.length - 1 ? 0 : p + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // -------------------- IMAGE MODAL --------------------
  const closeModal = () => setOpenIndex(null);
  const prevImage = () =>
    setOpenIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  const nextImage = () =>
    setOpenIndex((prev) => (prev === null ? null : (prev + 1) % images.length));

  // -------------------- CART HANDLER --------------------
  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
    const toast = document.createElement("div");
    toast.innerText = `${item.title || item.name} added to cart`;
    toast.className =
      "fixed bottom-8 right-8 bg-[#a1865e] text-white px-5 py-3 rounded-xl shadow-lg z-50 transition-opacity";
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = "0"; }, 1400);
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
        <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-4xl md:text-7xl  mb-6 mt-45">Our Menus</h1>
          <p className="text-xl">Whether you have questions, need answers, or simply want to chat.</p>
        </div>
      </div>

      {/* -------------------- MENU SECTION -------------------- */}
      <section className="mt-20 px-4 sm:px-10 md:px-24 bg-gray-200">
        <div className="flex justify-between flex-col md:flex-row mb-10">
          <div>
            <h4 className="text-[#a1865e]  flex items-center text-3xl mb-2 mt-15">
              <div className="h-px w-10 bg-[#a8815e]" />
              <span className="text-2xl">✦</span>
              <span className="ml-4">Menu</span>
            </h4>
            <h2 className="text-7xl ">Available Menu</h2>
          </div>
          <p className="text-gray-500 text-lg mt-5">
            Explore all our delicious dishes below.
          </p>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="grid sm:grid-cols-2 gap-y-10 gap-x-6"
          >
            {items.length === 0 && (
              <p className="text-gray-500 text-xl col-span-2">No menu items found.</p>
            )}
            {items.map((item) => (
              <div
                key={item._id}
                className="flex justify-between items-start gap-6 pt-8 border-b pb-6"
              >
                <img
                  src={item.imageUrl || img7}
                  className="w-32 h-32 md:w-40 md:h-40 rounded-md object-cover" // increased size
                  alt={item.name}
                />
                <div className="flex-1">
                  <h3 className="text-lg ">{item.name}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                </div>
                {/* <div className="text-lg ">₹{item.price}</div> */}
                {/* <button
                  onClick={() => handleAddToCart(item)}
                  className="px-3 py-1 bg-[#a1865e] text-white rounded-full text-sm ml-2"
                >
                  Add
                </button> */}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* -------------------- COMBO SECTION -------------------- */}
      {/* <section className="py-24 px-4 md:px-24 bg-[#faf7f2] relative overflow-hidden">
        <div className="absolute top-10 right-20 w-32 h-32 bg-[#a1865e]/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#a1865e]/10 rounded-full blur-3xl" />

        <div className="text-center mb-14">
          <span className="flex items-center justify-center text-[#a1865e] gap-4 mb-4 text-2xl ">
            <span className="w-10 h-px bg-black" />
            Premium Combo Deals
            <span className="w-10 h-px bg-black" />
          </span>
          <h2 className="text-6xl ">Chef’s Special Combos</h2>
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
                  className="w-full h-70 object-cover rounded-xl group-hover:scale-105 transition-all duration-500"
                  alt={combo.title}
                />

                <h3 className="text-3xl  mt-5">{combo.title}</h3>
                <p className="text-gray-600 mt-2 text-lg">{combo.description}</p>
                <p className="text-4xl text-[#a1865e] mt-4 ">₹{combo.price}</p>
              </motion.div>

              <div className="p-6 flex justify-between items-center">
                <button
                  onClick={() => setSelectedCombo(combo)}
                  className="px-6 py-2 border border-[#a1865e] text-[#a1865e] rounded-full  hover:bg-[#a1865e] hover:text-white transition-all"
                >
                  View Details
                </button>

                <button
                  onClick={() => handleAddToCart(combo)}
                  className="px-6 py-2 bg-[#a1865e] text-white rounded-full  hover:bg-[#8b6d4c] transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>

       
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
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                className="bg-white rounded-2xl p-10 max-w-3xl z-50"
              >
                <h2 className="text-4xl ">{selectedCombo.title}</h2>
                <p className="mt-4 text-gray-600">{selectedCombo.description}</p>
                <p className="mt-4 text-3xl text-[#a1865e] ">₹{selectedCombo.price}</p>
                <button
                  className="mt-6 px-6 py-2 bg-[#a1865e] text-white rounded-full "
                  onClick={() => {
                    handleAddToCart(selectedCombo);
                    setSelectedCombo(null);
                  }}
                >
                  Add to Cart
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section> */}

      {/* -------------------- TESTIMONIAL SECTION -------------------- */}
      <section className="py-24 px-4 md:px-24 bg-[#faf7f2]">
        <div className="text-center mb-12">
          <span className="text-[#a1865e] text-2xl  mb-4 flex justify-center items-center gap-4">
            <span className="w-10 h-px bg-black" />
            Testimonials
            <span className="w-10 h-px bg-black" />
          </span>
          <h2 className="text-3xl ">What Our Customers Say</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10 items-center justify-center max-w-5xl mx-auto">
          <img
            src={testimonial.image}
            className="w-40 h-40 rounded-full object-cover"
            alt={testimonial.name}
          />
          <div>
            <p className="text-xl text-gray-600 mb-4">{testimonial.message}</p>
            <h4 className="text-2xl ">{testimonial.name}</h4>
            <p className="text-gray-500">{testimonial.role}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
