import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/918668231882?text=Hello! I would like to know about your hotel rooms, resort services, pricing, and available offers."
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-20 sm:bottom-24 md:bottom-28 lg:bottom-22   /* Increased gap */
        right-4 sm:right-5 md:right-8 lg:right-4
        bg-[#25D366]
        text-white
        p-4
        rounded-full
        shadow-lg
        hover:scale-110
        hover:bg-[#1EBE5A]
        transition-all
        duration-300
        z-[9999]
      "
    >
      <FaWhatsapp className="text-3xl" />
    </a>
  );
}

export default WhatsAppFloat;
