import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../assets/images/room1.jpeg";
import img2 from "../../assets/images/room2.jpeg";
import img3 from "../../assets/images/room3.jpeg";
import img4 from "../../assets/images/room4.jpeg";
import img5 from "../../assets/images/room5.jpeg";
import img6 from "../../assets/images/room6.jpeg";
import img7 from "../../assets/images/room7.jpeg";
import img8 from "../../assets/images/room1.jpeg";
import img9 from "../../assets/images/room9.jpeg";
import img10 from "../../assets/images/room10.jpeg";
import instagramIcon from "../../assets/icons/instagram.svg";

const images = [
  img1, img2, img3, img4, img5,
  img6, img7, img8, img9, img10
];

export default function FollowInstagram() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* SECTION */}
      <div className="rts__section is__home__main py-16 bg-white">
        <div className="container mx-auto px-4">

          {/* HEADER */}
          <div className="text-center mb-14">
            <h4 className="text-[#a8815e] mb-6 text-lg sm:text-2xl">
              ◇ Instagram Post ◇
            </h4>
            <h2 className="text-3xl sm:text-5xl text-gray-900">
              Follow On Instagram
            </h2>
          </div>

          {/* SWIPER */}
          <Swiper
            modules={[Autoplay, Navigation]}
            loop
            autoplay={{ delay: 2000 }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="relative group overflow-hidden rounded-xl mx-auto max-w-[320px]">
                  
                  <img
                    src={img}
                    alt={`Instagram ${index + 1}`}
                    className="w-full h-[220px] object-cover rounded-xl"
                  />

                  {/* HOVER OVERLAY */}
                  <button
                    onClick={() => setSelectedImage(img)}
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition"
                  >
                    <img
                      src={instagramIcon}
                      alt="Instagram"
                      className="h-10 w-10 filter invert"
                    />
                  </button>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </div>

      {/* MODAL PREVIEW */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)} // ✅ close on side click
        >

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold z-50"
          >
            ✕
          </button>

          {/* IMAGE */}
          <img
            src={selectedImage}
            alt="Preview"
            onClick={(e) => e.stopPropagation()} // ❌ prevent close
            // className="max-w-[90%] max-h-[90%] rounded-lg"
          />

        </div>
      )}
    </>
  );
}