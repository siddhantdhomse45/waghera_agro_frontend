// import { useRef } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import Booking from "../Booking/Booking";


// export default function HeroSlider() {
//   const swiperRef = useRef(null);

//   const slides = [
//   {
//     title1: "Luxury Stay Hotel Experience",
//     title2: "Comfort & Elegance",
//     subtitle: "Welcome to Our Hotel",
//     description: "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner",
//     image: "https://html.themewant.com/moonlit/assets/images/banner/1.webp",
//   },
//   {
//     title1: "Lavish Getaway A Blend of",
//     title2: "Comfort & Style",
//     subtitle: "Welcome to Our Spa",
//     description: "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner",
//     image: "https://html.themewant.com/moonlit/assets/images/banner/2.webp",
//   },
//   {
//     title1: "A Perfect Fusion of Comfort",
//     title2: "and Elegance",
//     subtitle: "Welcome to Our Spa",
//     description: "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner",
//     image: "https://html.themewant.com/moonlit/assets/images/banner/banner-3.webp",
//   },
// ];


//   return (
//     <div className="relative w-full group">
//     <Swiper
//   modules={[Navigation, Autoplay]}
//   navigation
//   autoplay={{ delay: 5000 }}
//   loop={true}
//   onSwiper={(swiper) => (swiperRef.current = swiper)}
//   className="h-full [&_.swiper-button-next]:hidden [&_.swiper-button-prev]:hidden"
// >
//   {slides.map((slide, index) => (
//     <SwiperSlide key={index}>
//      <div className="relative w-full h-[120vh] group">
//   <img
//     src={slide.image}
//     alt="slide"
//     className="w-full h-full object-cover brightness-50"
//   />

//   {/* Left Arrow (hidden until hover) */}
//   <button
//     onClick={() => swiperRef.current?.slideNext()}
//     className="absolute left-6 top-1/2 -translate-y-1/2 z-20 opacity-0 mt-30 group-hover:opacity-100 transition-opacity duration-300"
//   >
//     <FontAwesomeIcon icon={faArrowLeft} className="text-white w-20 text-4xl" />
//   </button>

//   {/* Right Arrow (hidden until hover) */}
//   <button
//     onClick={() => swiperRef.current?.slidePrev()}
//     className="absolute right-6 top-1/2 -translate-y-1/2 z-20 opacity-0 mt-30 group-hover:opacity-100 transition-opacity duration-300"
//   >
//     <FontAwesomeIcon icon={faArrowRight} className="text-white w-20 text-4xl" />
//   </button>

//               {/* Updated: Slightly transparent black overlay */}
              

//               <div className="absolute inset-0 z-10 flex items-center justify-center">
//                 <div className="text-center text-white px-4">
//                  <span className="flex items-center justify-center text-white gap-2 sm:gap-4 mb-6 mt-40  sm:mb-10 text-lg sm:text-2xl font-serif">
//   <span className="flex items-center">
//     <span className="text-sm sm:text-lg">◇</span>
//     <span className="w-6 sm:w-10 h-px bg-white"></span>
//   </span>

//   Welcome to Our Hotel And Resort

//   <span className="flex items-center">
//     <span className="w-6 sm:w-10 h-px bg-white"></span>
//     <span className="text-sm sm:text-lg">◇</span>
//   </span>
// </span>


//                 <h1
//   className="text-5xl md:text-6xl leading-tight mb-9 text-white opacity-0 animate-[slideUp_1s_ease-out_forwards]"
// >
//    <span className="block">{slide.title1}</span>
//   <span className="block">{slide.title2}</span>
// </h1>
// <style>{`
//     @keyframes slideUp {
//     0% {
//       opacity: 0;
//       transform: translateY(40px);
//     }
//     100% {
//       opacity: 1;
//       transform: translateY(0);
//     }
//   }
//     `
//   }
// </style>

//                   <p className="max-w-2xl mx-auto text-lg mb-8">
//                     {slide.description}
//                   </p>
//                   <a
//                     href="#"
//                     className="inline-block bg-[#a8815e]  text-white px-6 py-3 rounded hover:bg-yellow-800 transition"
//                   >
//                     Discover Room
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {/* ✅ Booking Form Floating at Bottom */}
//      <div className="relative sm:absolute sm:bottom-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-1/2 z-40 w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%] mt-6 sm:mt-0">
//   <div className="bg-white rounded-2xl shadow-lg px-3 py-2 sm:px-6 sm:py-4 w-full">
//     <Booking />
//   </div>
// </div>


//     </div>
    
//   );
// }








import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Booking from "../Booking/Booking";

export default function HeroSlider() {
  const swiperRef = useRef(null);

  const slides = [
    {
      title1: "Luxury Stay Hotel Experience",
      title2: "Comfort & Elegance",
      subtitle: "Welcome to Our Hotel",
      description:
        "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner",
      image: "https://html.themewant.com/moonlit/assets/images/banner/1.webp",
    },
    {
      title1: "Lavish Getaway A Blend of",
      title2: "Comfort & Style",
      subtitle: "Welcome to Our Spa",
      description:
        "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner",
      image: "https://html.themewant.com/moonlit/assets/images/banner/2.webp",
    },
    {
      title1: "A Perfect Fusion of Comfort",
      title2: "and Elegance",
      subtitle: "Welcome to Our Spa",
      description:
        "Choosing Bokinn was one of the best decisions we've ever made. They have proven to be a reliable and innovative partner",
      image:
        "https://html.themewant.com/moonlit/assets/images/banner/banner-3.webp",
    },
  ];

  return (
    <div className="relative w-full group">
      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 5000 }}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[120vh] group">
              <img
                src={slide.image}
                alt="slide"
                className="w-full h-full object-cover brightness-50"
              />

              {/* Content */}
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="text-center text-white px-4">
                  <span className="flex items-center justify-center text-white gap-2 sm:gap-4 mb-6 mt-40 sm:mb-10 text-lg sm:text-2xl font-serif">
                    <span className="flex items-center">
                      <span className="text-sm sm:text-lg">◇</span>
                      <span className="w-6 sm:w-10 h-px bg-white"></span>
                    </span>
                    Welcome to Our Hotel And Resort
                    <span className="flex items-center">
                      <span className="w-6 sm:w-10 h-px bg-white"></span>
                      <span className="text-sm sm:text-lg">◇</span>
                    </span>
                  </span>

                  <h1 className="text-5xl md:text-6xl leading-tight mb-9 text-white opacity-0 animate-[slideUp_1s_ease-out_forwards]">
                    <span className="block">{slide.title1}</span>
                    <span className="block">{slide.title2}</span>
                  </h1>

                  <style>{`
                    @keyframes slideUp {
                      0% {
                        opacity: 0;
                        transform: translateY(40px);
                      }
                      100% {
                        opacity: 1;
                        transform: translateY(0);
                      }
                    }
                  `}</style>

                  <p className="max-w-2xl mx-auto text-lg mb-8">
                    {slide.description}
                  </p>
                  {/* <a
                    href="#"
                    className="inline-block bg-[#a8815e] text-white px-6 py-3 rounded hover:bg-yellow-800 transition"
                  >
                    Discover Room
                  </a> */}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Booking Section */}
      <div className="relative sm:absolute sm:bottom-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:translate-y-1/2 z-40 w-[95%] sm:w-[90%] lg:w-[80%] xl:w-[70%] mt-6 sm:mt-0">
        <div className="bg-white rounded-2xl shadow-lg px-3 py-2 sm:px-6 sm:py-4 w-full">
          <Booking />
        </div>
      </div>
    </div>
  );
}
