import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import instagramIcon from "../../assets/icons/instagram.svg";

const images = [img1, img2, img3, img4, img5, img6, img1];

export default function FollowInstagram() {
  return (
    <div className="rts__section is__home__main py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
        <h4 className="text-yellow-800 text-base  mb-2">
          <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-10 text-lg sm:text-2xl ">
            <span className="flex items-center">
              <span className="text-sm sm:text-lg">◇</span>
              <span className="w-6 sm:w-10 h-px bg-black"></span>
            </span>
            Instagram Post
            <span className="flex items-center">
              <span className="w-6 sm:w-10 h-px bg-black"></span>
              <span className="text-sm sm:text-lg">◇</span>
            </span>
          </span>
        </h4>
        <h2 className="text-3xl sm:text-5xl  text-gray-900">
          Follow On Instagram
        </h2>
          
        </div>

        {/* Swiper Gallery */}
        <div className="insta__gallery__slider overflow-hidden">
          <Swiper
  modules={[Autoplay, Navigation]}
  spaceBetween={0}
  loop={true}
  autoplay={{ delay: 2000 }}
  breakpoints={{
    0: { slidesPerView: 1 },         // ✅ Mobile: 1 image per view
    640: { slidesPerView: 2 },       // Tablet portrait
    768: { slidesPerView: 3 },       // Tablet landscape
    1024: { slidesPerView: 4 },      // Desktop
  }}
>
  {images.map((img, index) => (
    <SwiperSlide key={index}>
  <div className="gallery__item relative group overflow-hidden rounded-xl mx-auto max-w-[320px]">
    <img
      src={img}
      alt={`Instagram ${index + 1}`}
      className="w-full h-[220px]  object-cover rounded-xl"
    />
    <a
      href={img}
      className="gallery__popup absolute inset-0 flex items-center justify-center bg-black/50 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    >
      <img
  src={instagramIcon}
  alt="Instagram"
  className="h-10 w-10 transform -translate-y-16 group-hover:translate-y-0 transition-all duration-500 ease-in-out filter invert"
  // 'filter invert' makes dark icons appear white
/>
    </a>
  </div>
</SwiperSlide>
  ))}
</Swiper>

        </div>
      </div>
    </div>
  );
}
