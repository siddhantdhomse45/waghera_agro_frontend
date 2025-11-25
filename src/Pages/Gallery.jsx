// import React, { useState } from 'react'

// const Gallery = () => {
//     const [showVideo, setShowVideo] = useState(false);

//     const galleryImages = [
//   "https://html.themewant.com/moonlit/assets/images/pages/gallery/1.webp",
//   "https://html.themewant.com/moonlit/assets/images/pages/gallery/2.webp",
//   "https://html.themewant.com/moonlit/assets/images/pages/gallery/3.webp",
//   "https://html.themewant.com/moonlit/assets/images/pages/gallery/4.webp",
//   "https://html.themewant.com/moonlit/assets/images/pages/gallery/5.webp",
//   "https://html.themewant.com/moonlit/assets/images/pages/gallery/6.webp",
//   "https://html.themewant.com/moonlit/assets/images/pages/gallery/7.webp",
//   "https://html.themewant.com/moonlit/assets/images/pages/gallery/8.webp",
// ];

//  const [activeIndex, setActiveIndex] = useState(null);

//   const openModal = (index) => {
//     setActiveIndex(index);
//   };

//   const closeModal = () => {
//     setActiveIndex(null);
//   };

//   const showPrev = () => {
//     setActiveIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));
//   };

//   const showNext = () => {
//     setActiveIndex((prev) => (prev < galleryImages.length - 1 ? prev + 1 : 0));
//   };
    
//   return (
//     <div className="pt-24 ">
//       {/* Hero Section */}
//       <div
//   className="relative bg-cover bg-center h-[700px] flex items-center justify-center"
//   style={{
//     backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
//   }}
// >
//   {/* Overlay */}
//   <div className="absolute inset-0 bg-black/50 z-0" />
//         <div className="absolute inset-0  bg-opacity-50 flex flex-col items-center justify-center text-white text-center">
//           <h1 className="text-4xl md:text-7xl font-serif mb-6">Gallery</h1>
//           <p className="text-lg">Whether you have questions, need answers, or simply want to chat.</p>
//         </div>
//       </div>

//            <section className="py-16 px-4 sm:px-8 lg:px-24 bg-white">
//       <div className="max-w-screen-xl mx-auto space-y-6">

//         {/* ✅ 1st row: 3 images */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryImages.slice(0, 3).map((src, index) => (
//             <div
//               key={index}
//               onClick={() => openModal(index)}
//               className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
//             >
//               <img
//                 src={src}
//                 alt={`Gallery ${index + 1}`}
//                 className="w-full h-auto object-cover rounded-xl"
//               />
//             </div>
//           ))}
//         </div>

//         {/* ✅ 2nd row: only 2 images */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           {galleryImages.slice(3, 5).map((src, index) => (
//             <div
//               key={index + 3}
//               onClick={() => openModal(index + 3)}
//               className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
//             >
//               <img
//                 src={src}
//                 alt={`Gallery ${index + 4}`}
//                 className="w-full h-auto object-cover rounded-xl"
//               />
//             </div>
//           ))}
//         </div>

//         {/* ✅ Remaining images */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {galleryImages.slice(5).map((src, index) => (
//             <div
//               key={index + 5}
//               onClick={() => openModal(index + 5)}
//               className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow"
//             >
//               <img
//                 src={src}
//                 alt={`Gallery ${index + 6}`}
//                 className="w-full h-auto object-cover rounded-xl"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ✅ Modal */}
//       {activeIndex !== null && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
//           <button
//             onClick={closeModal}
//             className="absolute top-6 right-6 text-white text-4xl font-bold z-50"
//           >
//             &times;
//           </button>

//           <button
//             onClick={showPrev}
//             className="absolute left-4 md:left-12 text-white text-4xl z-50"
//           >
//             ‹
//           </button>

//           <img
//             src={galleryImages[activeIndex]}
//             alt={`Modal ${activeIndex + 1}`}
//             className="max-w-4xl w-full h-auto rounded-xl"
//           />

//           <button
//             onClick={showNext}
//             className="absolute right-4 md:right-12 text-white text-4xl z-50"
//           >
//             ›
//           </button>
//         </div>
//       )}
//     </section>

//       <section className="relative h-screen overflow-hidden mt-15 mb-20 px-4 sm:px-24 bg-white">
//          <div className="text-center ">
//         <h4 className="text-yellow-800 text-lg font-serif mb-2">
//           <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-6 sm:mb-5 text-lg sm:text-2xl font-serif">
//   <span className="flex items-center ">
//     <span className="text-sm sm:text-lg">◇</span>
//     <span className="w-6 sm:w-10 h-px bg-black"></span>
//   </span>
//   Our Videos
//   <span className="flex items-center">
//     <span className="w-6 sm:w-10 h-px bg-black"></span>
//     <span className="text-sm sm:text-lg">◇</span>
//   </span>
// </span>
//         </h4>
//         <h2 className="text-6xl font-serif text-gray-900 mb-20">Our Restaurant Overview</h2>
//       </div>

//   {/* Background image (scrolls with page) */}
//   <img
//     src="https://html.themewant.com/moonlit/assets/images/pages/gallery/video.webp"
//     alt="Hotel Background"
//     className="w-full h-full object-cover "
//   />

//   <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-transparent"></div>

//   {/* Rotating circle with play button */}
//   <div className="absolute inset-0 flex border-green items-center justify-center  mt-50">
//     <div
//       className="relative w-40 h-40 rounded-full bg-[#a8815e]/80 flex items-center justify-center cursor-pointer"
//       onClick={() => setShowVideo(true)}
//     >
//       {/* Rotating text */}
//       <div className="absolute w-82 h-82 border-black flex items-center  justify-center">
//   <svg className="w-40 h-40 text-white" viewBox="0 0 100 100">
//     <defs>
//       <path
//         id="circlePath"
//         d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
//       />
//     </defs>
//     <g>
//       <text fontSize="9" fill="white">
//         <textPath href="#circlePath" startOffset="0%">
//           ★ Watch Full Video ★ Watch Now ★ Watch Full Video ★
//         </textPath>
//       </text>
//       <animateTransform
//         attributeName="transform"
//         attributeType="XML"
//         type="rotate"
//         from="0 50 50"
//         to="360 50 50"
//         dur="10s"
//         repeatCount="indefinite"
//       />
//     </g>
//   </svg>
// </div>

// {/* Play Icon */}
// <svg
//   className="w-8 h-8 text-white z-10"
//   fill="currentColor"
//   viewBox="0 0 20 20"
// >
//   <path d="M6 4l10 6-10 6V4z" />
// </svg>
// </div>
// </div>

//   {/* Modal Video */}
//   {showVideo && (
//     <div className="fixed inset-0 bg-black/50 bg-opacity-80 flex items-center justify-center z-50">
//       <div className="w-full max-w-3xl relative">
//         <button
//           onClick={() => setShowVideo(false)}
//           className="absolute top-0 right-0 mt-2 mr-2 text-white text-3xl"
//         >
//           &times;
//         </button>
//         <div className="w-full h-[500px]">
//           <iframe
//             className="w-full h-full rounded"
//             src="https://www.dailymotion.com/embed/video/x9ffs6w"
//             title="Hotel Intro Video"
//             frameBorder="0"
//             allow="autoplay; encrypted-media"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </div>
//     </div>
//   )}
// </section>
//       </div>
//   )
// }

// export default Gallery







import React, { useState } from "react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const [showVideo, setShowVideo] = useState(false);

  // -------------------------------------------------------
  // IMAGE CATEGORIES
  // -------------------------------------------------------

  const allImages = [
    "/mnt/data/d0437aeb-7f7c-4fca-8f8e-b46d5a6537e2.png", // Your uploaded screenshot
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/1.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/2.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/3.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/4.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/5.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/6.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/7.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/8.webp",
  ];

  const activitiesImages = [
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/6.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/7.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/8.webp",
  ];

  const propertyImages = [
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/1.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/2.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/3.webp",
  ];

  const roomsImages = [
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/4.webp",
    "https://html.themewant.com/moonlit/assets/images/pages/gallery/5.webp",
  ];

  // -------------------------------------------------------
  // SHOW IMAGES BASED ON ACTIVE TAB
  // -------------------------------------------------------

  const galleryImages =
    activeTab === "activities"
      ? activitiesImages
      : activeTab === "property"
      ? propertyImages
      : activeTab === "rooms"
      ? roomsImages
      : allImages;

  // -------------------------------------------------------
  // MODAL HANDLERS
  // -------------------------------------------------------

  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const showPrev = () =>
    setActiveIndex((prev) =>
      prev > 0 ? prev - 1 : galleryImages.length - 1
    );

  const showNext = () =>
    setActiveIndex((prev) =>
      prev < galleryImages.length - 1 ? prev + 1 : 0
    );

  return (
    <div className="pt-40"> {/* FIXED SPACING BELOW NAVBAR */}
      
      {/* ---------------- FILTER BUTTONS ---------------- */}
      <div className="px-4 sm:px-8 lg:px-24 flex flex-wrap justify-center gap-4 mb-14">
        {[
          { key: "all", label: "All Photos" },
          { key: "activities", label: "Activities Photos" },
          { key: "property", label: "Property Photos" },
          { key: "rooms", label: "Rooms Photos" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2.5 text-sm sm:text-base border rounded-lg shadow 
              transition-all duration-200 
              ${
                activeTab === tab.key
                  ? "bg-red-500 text-white shadow-lg"
                  : "bg-white text-gray-800 hover:bg-gray-100"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ---------------- IMAGE GRID ---------------- */}
      <div className="px-4 sm:px-8 lg:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div
            key={index}
            className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition"
            onClick={() => openModal(index)}
          >
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        ))}
      </div>

      {/* ---------------- IMAGE MODAL ---------------- */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-white text-4xl font-bold"
          >
            ×
          </button>

          <button
            onClick={showPrev}
            className="absolute left-8 text-white text-5xl"
          >
            ‹
          </button>

          <img
            src={galleryImages[activeIndex]}
            className="max-w-4xl w-full rounded-xl"
          />

          <button
            onClick={showNext}
            className="absolute right-8 text-white text-5xl"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );    
};

export default Gallery;
