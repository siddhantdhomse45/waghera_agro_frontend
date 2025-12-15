


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Gallery = () => {
//   const [showVideo, setShowVideo] = useState(false);
//   const [galleryImages, setGalleryImages] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(null);

//   // ---------------------------------------
//   // FETCH IMAGES FROM BACKEND
//   // ---------------------------------------
//   useEffect(() => {
//     axios
//       .get("http://localhost:8080/api/gallery/all")
//       .then((res) => {
//         const updatedImages = res.data
//           .filter((img) => img && img.url)   // check correct field
//           .map((img) => img.url);           // cloudinary URL

//         setGalleryImages(updatedImages);
//       })
//       .catch((err) => console.error("Error loading images", err));
//   }, []);

//   // ---------------------------------------
//   // MODAL
//   // ---------------------------------------
//   const openModal = (index) => setActiveIndex(index);
//   const closeModal = () => setActiveIndex(null);

//   const showPrev = () =>
//     setActiveIndex((prev) =>
//       prev > 0 ? prev - 1 : galleryImages.length - 1
//     );

//   const showNext = () =>
//     setActiveIndex((prev) =>
//       prev < galleryImages.length - 1 ? prev + 1 : 0
//     );

//   return (
//     <div className="pt-24">

//       {/* Hero */}
//       <div
//         className="relative bg-cover bg-center h-[700px] flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
//           <h1 className="text-5xl md:text-7xl font-serif mb-4">Gallery</h1>
//           <p className="text-lg">Explore our beautiful image collection</p>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <section className="py-16 px-4 sm:px-8 lg:px-24 bg-white">
//         <div className="max-w-screen-xl mx-auto space-y-6">

//           {galleryImages.length === 0 ? (
//             <p className="text-center text-gray-600 text-xl">
//               Loading images...
//             </p>
//           ) : (
//             <>
//               {/* Grid - All Images */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {galleryImages.map((src, index) => (
//                   <div
//                     key={index}
//                     onClick={() => openModal(index)}
//                     className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition"
//                   >
//                     <img
//                       src={src}
//                       className="w-full h-auto object-cover rounded-xl"
//                       alt={`Gallery ${index}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>

//         {/* Modal */}
//         {activeIndex !== null && (
//           <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
//             <button
//               onClick={closeModal}
//               className="absolute top-6 right-6 text-white text-4xl"
//             >
//               ×
//             </button>

//             <button
//               onClick={showPrev}
//               className="absolute left-6 text-white text-4xl"
//             >
//               ‹
//             </button>

//             <img
//               src={galleryImages[activeIndex]}
//               className="max-w-4xl w-full h-auto rounded-xl"
//               alt=""
//             />

//             <button
//               onClick={showNext}
//               className="absolute right-6 text-white text-4xl"
//             >
//               ›
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Video Section */}
//       <section className="relative h-screen mt-20 px-4 sm:px-24 bg-white overflow-hidden">
//         <div className="text-center mb-20">
//           <h2 className="text-6xl font-serif text-gray-900">
//             Our Restaurant Overview
//           </h2>
//         </div>

//         <img
//           src="https://html.themewant.com/moonlit/assets/images/pages/gallery/video.webp"
//           className="w-full h-full object-cover"
//           alt="Video Background"
//         />

//         <div className="absolute inset-0 flex items-center justify-center">
//           <div
//             className="w-40 h-40 rounded-full bg-[#a8815e]/80 flex items-center justify-center cursor-pointer"
//             onClick={() => setShowVideo(true)}
//           >
//             <svg className="w-10 h-10 text-white" fill="currentColor">
//               <path d="M6 4l10 6-10 6V4z" />
//             </svg>
//           </div>
//         </div>

//         {showVideo && (
//           <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//             <div className="w-full max-w-3xl relative">
//               <button
//                 onClick={() => setShowVideo(false)}
//                 className="absolute top-2 right-2 text-white text-3xl"
//               >
//                 ×
//               </button>

//               <iframe
//                 className="w-full h-[500px] rounded"
//                 src="https://www.dailymotion.com/embed/video/x9ffs6w"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         )}
//       </section>

//     </div>
//   );
// };

// export default Gallery;


// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Gallery = () => {
//   const [showVideo, setShowVideo] = useState(false);
//   const [galleryImages, setGalleryImages] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(null);

//   // ---------------------------------------
//   // FETCH IMAGES FROM BACKEND (UPDATED)
//   // ---------------------------------------
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/gallery/all")
//       .then((res) => {
//         const updatedImages = res.data
//           .filter((img) => img && img.url)
//           .map((img) => `http://localhost:5000/${img.url}`); // FULL URL

//         setGalleryImages(updatedImages);
//       })
//       .catch((err) => console.error("Error loading images", err));
//   }, []);

//   // ---------------------------------------
//   // MODAL HANDLERS
//   // ---------------------------------------
//   const openModal = (index) => setActiveIndex(index);
//   const closeModal = () => setActiveIndex(null);

//   const showPrev = () =>
//     setActiveIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));

//   const showNext = () =>
//     setActiveIndex((prev) =>
//       prev < galleryImages.length - 1 ? prev + 1 : 0
//     );

//   return (
//     <div className="pt-24">

//       {/* Hero Section */}
//       <div
//         className="relative bg-cover bg-center h-[700px] flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
//           <h1 className="text-5xl md:text-7xl font-serif mb-4">Gallery</h1>
//           <p className="text-lg">Explore our beautiful image collection</p>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <section className="py-16 px-4 sm:px-8 lg:px-24 bg-white">
//         <div className="max-w-screen-xl mx-auto space-y-6">

//           {galleryImages.length === 0 ? (
//             <p className="text-center text-gray-600 text-xl">
//               Loading images...
//             </p>
//           ) : (
//             <>
//               {/* Image Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {galleryImages.map((src, index) => (
//                   <div
//                     key={index}
//                     onClick={() => openModal(index)}
//                     className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition"
//                   >
//                     <img
//                       src={src}
//                       className="w-full h-auto object-cover rounded-xl"
//                       alt={`Gallery ${index}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>

//         {/* Modal */}
//         {activeIndex !== null && (
//           <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
//             <button
//               onClick={closeModal}
//               className="absolute top-6 right-6 text-white text-4xl"
//             >
//               ×
//             </button>

//             <button
//               onClick={showPrev}
//               className="absolute left-6 text-white text-4xl"
//             >
//               ‹
//             </button>

//             <img
//               src={galleryImages[activeIndex]}
//               className="max-w-4xl w-full h-auto rounded-xl"
//               alt=""
//             />

//             <button
//               onClick={showNext}
//               className="absolute right-6 text-white text-4xl"
//             >
//               ›
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Video Section */}
//       <section className="relative h-screen mt-20 px-4 sm:px-24 bg-white overflow-hidden">
//         <div className="text-center mb-20">
//           <h2 className="text-6xl font-serif text-gray-900">
//             Our Restaurant Overview
//           </h2>
//         </div>

//         <img
//           src="https://html.themewant.com/moonlit/assets/images/pages/gallery/video.webp"
//           className="w-full h-full object-cover"
//           alt="Video Background"
//         />

//         <div className="absolute inset-0 flex items-center justify-center">
//           <div
//             className="w-40 h-40 rounded-full bg-[#a8815e]/80 flex items-center justify-center cursor-pointer"
//             onClick={() => setShowVideo(true)}
//           >
//             <svg className="w-10 h-10 text-white" fill="currentColor">
//               <path d="M6 4l10 6-10 6V4z" />
//             </svg>
//           </div>
//         </div>

//         {showVideo && (
//           <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//             <div className="w-full max-w-3xl relative">
//               <button
//                 onClick={() => setShowVideo(false)}
//                 className="absolute top-2 right-2 text-white text-3xl"
//               >
//                 ×
//               </button>

//               <iframe
//                 className="w-full h-[500px] rounded"
//                 src="https://www.dailymotion.com/embed/video/x9ffs6w"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         )}
//       </section>

//     </div>
//   );
// };

// export default Gallery;
 




// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const Gallery = () => {
//   const [showVideo, setShowVideo] = useState(false);
//   const [galleryImages, setGalleryImages] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(null);

//   // --------------------- Fetch Images ---------------------
//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/gallery/all")
//       .then((res) => {
//         const formatted = res.data
//           .filter((img) => img && img.url)
//           .map((img) => img.url); // USE CLOUDINARY URL DIRECTLY

//         setGalleryImages(formatted);
//       })
//       .catch((err) => console.error("Error loading images:", err));
//   }, []);

//   // --------------------- Modal Controls ---------------------
//   const openModal = (index) => setActiveIndex(index);
//   const closeModal = () => setActiveIndex(null);

//   const showPrev = () =>
//     setActiveIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));

//   const showNext = () =>
//     setActiveIndex((prev) =>
//       prev < galleryImages.length - 1 ? prev + 1 : 0
//     );

//   return (
//     <div className="pt-24">

//       {/* Hero Section */}
//       <div
//         className="relative bg-cover bg-center h-[700px] flex items-center justify-center"
//         style={{
//           backgroundImage:
//             "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
//         }}
//       >
//         <div className="absolute inset-0 bg-black/50" />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
//           <h1 className="text-5xl md:text-7xl font-serif mb-4">Gallery</h1>
//           <p className="text-lg">Explore our beautiful image collection</p>
//         </div>
//       </div>

//       {/* Gallery Section */}
//       <section className="py-16 px-4 sm:px-8 lg:px-24 bg-white">
//         <div className="max-w-screen-xl mx-auto space-y-6">

//           {galleryImages.length === 0 ? (
//             <p className="text-center text-gray-600 text-xl">Loading images...</p>
//           ) : (
//             <>
//               {/* Image Grid */}
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {galleryImages.map((src, index) => (
//                   <div
//                     key={index}
//                     onClick={() => openModal(index)}
//                     className="cursor-pointer overflow-hidden rounded-xl shadow-md hover:scale-105 transition"
//                   >
//                     <img
//                       src={src}
//                       className="w-full h-auto object-cover rounded-xl"
//                       alt={`Gallery ${index}`}
//                     />
//                   </div>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>

//         {/* Modal */}
//         {activeIndex !== null && (
//           <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
//             <button
//               onClick={closeModal}
//               className="absolute top-6 right-6 text-white text-4xl"
//             >
//               ×
//             </button>

//             <button
//               onClick={showPrev}
//               className="absolute left-6 text-white text-4xl"
//             >
//               ‹
//             </button>

//             <img
//               src={galleryImages[activeIndex]}
//               className="max-w-4xl w-full h-auto rounded-xl"
//               alt=""
//             />

//             <button
//               onClick={showNext}
//               className="absolute right-6 text-white text-4xl"
//             >
//               ›
//             </button>
//           </div>
//         )}
//       </section>

//       {/* Video Section */}
//       <section className="relative h-screen mt-20 px-4 sm:px-24 bg-white overflow-hidden">
//         <div className="text-center mb-20">
//           <h2 className="text-6xl font-serif text-gray-900">
//             Our Restaurant Overview
//           </h2>
//         </div>

//         <img
//           src="https://html.themewant.com/moonlit/assets/images/pages/gallery/video.webp"
//           className="w-full h-full object-cover"
//           alt="Video Background"
//         />

//         <div className="absolute inset-0 flex items-center justify-center">
//           <div
//             className="w-40 h-40 rounded-full bg-[#a8815e]/80 flex items-center justify-center cursor-pointer"
//             onClick={() => setShowVideo(true)}
//           >
//             <svg className="w-10 h-10 text-white" fill="currentColor">
//               <path d="M6 4l10 6-10 6V4z" />
//             </svg>
//           </div>
//         </div>

//         {showVideo && (
//           <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
//             <div className="w-full max-w-3xl relative">
//               <button
//                 onClick={() => setShowVideo(false)}
//                 className="absolute top-2 right-2 text-white text-3xl"
//               >
//                 ×
//               </button>

//               <iframe
//                 className="w-full h-[500px] rounded"
//                 src="https://www.dailymotion.com/embed/video/x9ffs6w"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         )}
//       </section>

//     </div>
//   );
// };

// export default Gallery;





import React, { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);

  // --------------------- Fetch Images ---------------------
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/gallery/all")
      .then((res) => {
        const formatted = res.data
          .filter((img) => img && img.url)
          .map((img) => img.url);
        setGalleryImages(formatted);
      })
      .catch((err) => console.error("Error loading images:", err));
  }, []);

  const openModal = (index) => setActiveIndex(index);
  const closeModal = () => setActiveIndex(null);

  const showPrev = () =>
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : galleryImages.length - 1));

  const showNext = () =>
    setActiveIndex((prev) =>
      prev < galleryImages.length - 1 ? prev + 1 : 0
    );

  return (
    <div className="pt-24">

      {/* ---------------- HERO ---------------- */}
      <div
        className="relative bg-cover bg-center h-[700px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl md:text-7xl font-serif mb-4">Gallery</h1>
          <p className="text-lg">Explore our beautiful image collection</p>
        </div>
      </div>

      {/* ---------------- GALLERY GRID ---------------- */}
      <section className="py-16 px-4 sm:px-8 lg:px-24 bg-white">
        <div className="max-w-screen-xl mx-auto space-y-6">

          {galleryImages.length === 0 ? (
            <p className="text-center text-gray-600 text-xl">Loading images...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((src, index) => (
                <div
                  key={index}
                  onClick={() => openModal(index)}
                  className="cursor-pointer overflow-hidden rounded-xl shadow-lg 
                             hover:scale-[1.03] transition-transform duration-300"
                >
                  {/* FIXED HEIGHT TO MAKE ALL IMAGES EQUAL */}
                  <img
                    src={src}
                    loading="lazy"
                    className="w-full h-64 md:h-72 lg:h-80 object-cover object-center rounded-xl"
                    alt={`Gallery ${index}`}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ---------------- MODAL ---------------- */}
        {activeIndex !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm animate-fadeIn">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-white text-4xl"
            >
              ×
            </button>

            <button
              onClick={showPrev}
              className="absolute left-6 text-white text-4xl"
            >
              ‹
            </button>

            <img
              src={galleryImages[activeIndex]}
              className="max-w-4xl w-full h-auto rounded-xl shadow-2xl animate-zoomIn"
              alt=""
            />

            <button
              onClick={showNext}
              className="absolute right-6 text-white text-4xl"
            >
              ›
            </button>
          </div>
        )}
      </section>

      {/* ---------------- VIDEO SECTION ---------------- */}
      {/* <section className="relative h-screen mt-20 px-4 sm:px-24 bg-white overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-serif text-gray-900">
            Our Restaurant Overview
          </h2>
        </div>

        <img
          src="https://html.themewant.com/moonlit/assets/images/pages/gallery/video.webp"
          className="w-full h-full object-cover"
          alt="Video Background"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-40 h-40 rounded-full bg-[#a8815e]/80 flex items-center justify-center cursor-pointer hover:scale-110 transition"
            onClick={() => setShowVideo(true)}
          >
            <svg className="w-10 h-10 text-white" fill="currentColor">
              <path d="M6 4l10 6-10 6V4z" />
            </svg>
          </div>
        </div>

        {showVideo && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
            <div className="w-full max-w-3xl relative">
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-2 right-2 text-white text-3xl"
              >
                ×
              </button>

              <iframe
                className="w-full h-[500px] rounded"
                src="https://www.dailymotion.com/embed/video/x9ffs6w"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </section> */}

    </div>
  );
};

export default Gallery;
