// // src/pages/BookNow.jsx
// export default function BookNow() {
//   return (
//     <div className="font-sanserif text-gray-800">
//       {/* Hero Section */}
//      <div
//   className="relative bg-cover bg-center h-[800px] flex items-center justify-center mb-25"
//   style={{
//     backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
//   }}
// >
//     </div>

//     <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh] mt-1 font-serif">
//   <div className="grid lg:grid-cols-3 gap-10">
//     {/* Left Column - Room Content (scrollable) */}
//     <div className="lg:col-span-2 h-[150vh] overflow-y-scroll scrollbar-hide pr-2">
//       <h2 className="text-5xl font-serif text-[#af7b4f]">12999 ₹</h2>
//       <h1 className="text-6xl font-serif mt-5 mb-4">Executive Room</h1>

//       <div className="flex items-center gap-6 text-gray-500 mb-6 text-xl">
//         <span className="flex items-center gap-2">
//           <i className="fa-solid fa-house"></i> 35 sqm
//         </span>
//         <span className="flex items-center gap-2">
//           <i className="fa-solid fa-user"></i> 5 Person
//         </span>
//       </div>

//       <p className="text-gray-600 mb-8 text-xl leading-relaxed">
//         Our elegantly appointed rooms and suites are designed to offer the utmost in comfort and style. Each room features modern amenities, plush furnishings, and thoughtful touches to ensure a relaxing stay.
//         <br /><br />
//         Indulge in a culinary journey at our on-site restaurants, where our talented chefs create mouthwatering dishes using the freshest local ingredients. Start your day with a sumptuous breakfast, enjoy a leisurely lunch, and savor a gourmet dinner in an elegant setting.
//       </p>

//       {/* Room Images */}
//       <div className="grid sm:grid-cols-2 gap-4 mb-12">
//         <img
//           src="https://html.themewant.com/moonlit/assets/images/pages/room/1.webp"
//           alt="Room"
//           className="rounded-md object-cover w-full h-140"
//         />
//         <img
//           src="https://html.themewant.com/moonlit/assets/images/pages/room/r-d-2.webp"
//           alt="Room"
//           className="rounded-md object-cover w-full h-140"
//         />
//       </div>

//       {/* Room Amenities */}
//       <h2 className="text-4xl font-serif mb-8">Room Amenities</h2>
//       <div className="divide-y divide-gray-200 text-7xl mb-10">
//         <div className="grid grid-cols-3 gap-6 py-4">
//           <div className="flex items-center gap-5">
//             <img src="https://html.themewant.com/moonlit/assets/images/icon/wifi.svg" alt="Wifi" className="w-9 h-9 text-[#a1865e]" />
//             <span className="text-2xl font-serif text-gray-800">Free Wifi</span>
//           </div>
//           <div className="flex items-center gap-5">
//             <img src="https://html.themewant.com/moonlit/assets/images/icon/shower.svg" alt="Shower" className="w-9 h-9 text-[#a1865e]" />
//             <span className="text-xl font-serif text-gray-800">Shower</span>
//           </div>
//           <div className="flex items-center gap-5">
//             <img src="https://html.themewant.com/moonlit/assets/images/icon/aeroplane.svg" alt="Airport" className="w-9 h-9 text-[#a1865e]" />
//             <span className="text-xl font-serif text-gray-800">Airport transport</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-6 py-4">
//           <div className="flex items-center gap-5">
//             <img src="https://html.themewant.com/moonlit/assets/images/icon/balcony.svg" alt="Balcony" className="w-9 h-9 text-[#a1865e]" />
//             <span className="text-xl font-serif text-gray-800">Balcony</span>
//           </div>
//           <div className="flex items-center gap-5">
//             <img src="https://html.themewant.com/moonlit/assets/images/icon/refrigerator.svg" alt="Refrigerator" className="w-9 h-9 text-[#a1865e]" />
//             <span className="text-xl font-serif text-gray-800">Refrigerator</span>
//           </div>
//           <div className="flex items-center gap-5">
//             <img src="https://html.themewant.com/moonlit/assets/images/icon/support.svg" alt="24/7 Support" className="w-9 h-9 text-[#a1865e]" />
//             <span className="text-xl font-serif text-gray-800">24/7 Support</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-3 gap-6 py-4">
//           <div className="flex items-center gap-5">
//             <img src="https://html.themewant.com/moonlit/assets/images/icon/desk.svg" alt="Work Desk" className="w-9 h-9 text-[#a1865e]" />
//             <span className="text-xl font-serif text-gray-800">Work Desk</span>
//           </div>
//           <div className="flex items-center gap-5">
//             <img src="https://html.themewant.com/moonlit/assets/images/icon/fitness.svg" alt="Fitness" className="w-9 h-9 text-[#a1865e]" />
//             <span className="text-xl font-serif text-gray-800">Fitness Center</span>
//           </div>
//           <div className="flex items-center gap-5">
//             <img src="https://html.themewant.com/moonlit/assets/images/icon/swimming-pool.svg" alt="Swimming" className="w-9 h-9 text-[#a1865e]" />
//             <span className="text-lg font-serif text-gray-800">Swimming Pool</span>
//           </div>
//         </div>
//       </div>

//       {/* Room Features */}
//       <h2 className="text-5xl font-serif mb-6">Room Features</h2>
//       <img
//         src="https://html.themewant.com/moonlit/assets/images/pages/room/3.webp"
//         alt="Features"
//         className="rounded-md object-cover w-full h-140 mb-11"
//       />
//       <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[19px] font-serif text-gray-900 mb-10">
//         {[
//           "Children and extra beds",
//           "Climate Control",
//           "Art and Decor",
//           "Coffee/Tea Maker",
//           "High-End Bedding",
//           "Smart Technology"
//         ].map((feature, i) => (
//           <div key={i} className="flex items-start gap-4">
//             <span className="mt-3 w-2 h-2 rounded-full bg-[#a1865e]"></span>
//             <span>{feature}</span>
//           </div>
//         ))}
//       </div>

//       <p className="text-gray-600 text-xl leading-relaxed">
//         Our elegantly appointed rooms and suites are designed to offer the
//         ultimate in comfort and style. Each room features modern amenities,
//         plush furnishings, and thoughtful touches to ensure a relaxing stay.
//       </p>
//     </div>

//     {/* Right Column - Booking Sidebar */}
//     <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
//       <h3 className="text-3xl text-center font-serif text-gray-800 mb-7">
//         Book Your Stay
//       </h3>

//       <form className="space-y-4 text-gray-700 text-xl">
//         {/* Dates */}
//         <div>
//           <label className="block font-serif mb-5">Check In</label>
//           <input type="date" className="w-full border px-3 py-2 rounded outline-none bg-white" />
//         </div>
//         <div>
//           <label className="block font-medium mb-5 mt-5">Check Out</label>
//           <input type="date" className="w-full border px-3 py-2 rounded outline-none bg-white" />
//         </div>

//         {/* Guest Info */}
//         <div className="grid grid-cols-1 gap-3">
//           <div>
//             <label className="block font-medium mt-5 mb-5">Adult</label>
//             <input type="number" defaultValue={1} className="w-full border px-3 py-2 rounded outline-none bg-white" />
//           </div>
//           <div>
//             <label className="block font-medium mb-5 mt-5">Children</label>
//             <input type="number" defaultValue={1} className="w-full border px-3 py-2 rounded outline-none bg-white" />
//           </div>
//           <div>
//             <label className="block font-medium mb-5 mt-5">Extra Bed</label>
//             <input type="number" defaultValue={1} className="w-full border px-3 py-2 rounded outline-none bg-white" />
//           </div>
//         </div>

//         {/* Extra Services */}
//         <h4 className="font-serif text-center text-4xl mt-10 mb-13">Extra Services</h4>
//         <div className="space-y-2">
//           {[
//             { label: "Room Clean", price: "₹10 / Night" },
//             { label: "Parking", price: "Free" },
//             { label: "Airport Transport", price: "₹20 / Night" },
//             { label: "Pet Friendly", price: "₹15 / Night" },
//           ].map((item, i) => (
//             <label key={i} className="flex justify-between text-2xl mb-9 mt-9">
//               <span>
//                 <input type="checkbox" className="mr-2" />
//                 {item.label}
//               </span>
//               <span>{item.price}</span>
//             </label>
//           ))}
//         </div>

//         {/* Total */}
//        <div className="flex text-2xl border-t pt-6 justify-between items-center font-serif mt-8">
//   <span>Total Price</span>
//   <span> ₹82</span>
// </div>


//         <button
//           type="submit"
//           className="w-full mt-4 py-2 bg-[#af7b4f] text-2xl text-white font-medium rounded hover:bg-yellow-800 transition"
//         >
//           Book Your Room
//         </button>
//       </form>
//     </div>
//   </div>
// </section>


// <style>{`
// /* Hide scrollbar */
// .scrollbar-hide {
//   scrollbar-width: none; /* Firefox */
//   -ms-overflow-style: none; /* IE/Edge */
// }
// .scrollbar-hide::-webkit-scrollbar {
//   display: none; /* Chrome/Safari */
// }

// `}</style>
    

//      <section className="bg-white pt-0 pb-16 px-4 sm:px-6 md:px-24">
//   <h4 className="text-yellow-800 text-base font-serif mb-2">
//     <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-5 sm:mb-10 text-lg sm:text-2xl font-serif">
//       <span className="flex items-center">
//         <span className="text-sm sm:text-lg">◇</span>
//         <span className="w-6 sm:w-10 h-px bg-black"></span>
//       </span>
//       Similar Rooms
//       <span className="flex items-center">
//         <span className="w-6 sm:w-10 h-px bg-black"></span>
//         <span className="text-sm sm:text-lg">◇</span>
//       </span>
//     </span>
//   </h4>

//   <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-900 mb-10">
//      Similar Rooms
//   </h2>

//   {/* Responsive Grid */}
//   <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 gap-5">
//     {[
//       {
//         name: "Exectutive Room",
//         Amt: "12000₹",
//         img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
//       },
//       {
//         name: "Single Room",
//         Amt: "3999₹",
//         img: "https://html.themewant.com/moonlit/assets/images/pages/room/2.webp",
//       },
//       {
//         name: "Triple Room",
//         Amt: "12999₹",
//         img: "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp",
//       },
//     ].map((member, index) => (
//      <div
//   key={index}
//   className="font-serif  border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
// >
//   <img
//     src={member.img}
//     alt={member.name}
//     className="w-full h-74 object-cover transition-transform duration-500 hover:scale-105"
//   />

//   <div className="p-4">
//     <h3 className="text-3xl font-serif">{member.name}</h3>

//     <div className="flex items-center gap-10 mt-4 text-xl text-gray-500">
//       <span className="flex items-center gap-3">
//         <i className="fa-solid fa-house"></i> 35 sqm
//       </span>
//       <span className="flex items-center gap-3">
//         <i className="fa-solid fa-user"></i> 5 Person
//       </span>
//     </div>

//     <div className="mt-5 mb-4 text-2xl text-gray-500">{member.Amt}</div>

//     <a
//       href="#"
//       className="text-[#b86e2e] border-b text-lg border-[#b86e2e] w-fit hover:text-[#a15d20] transition"
//     >
//       Discover More
//     </a>
//   </div>
// </div>
//     ))}
//   </div>
// </section>
// </div>
//   );
// }




// // src/pages/BookNow.jsx
// import React, { useEffect, useState } from "react";
// import moment from "moment";

// // Define the extra services available, including their base prices
// const EXTRA_SERVICES = [
//   { label: "Room Clean", price: 10, unit: "/ Night" },
//   { label: "Parking", price: 0, unit: "Free" },
//   { label: "Airport Transport", price: 20, unit: "/ Night" },
//   { label: "Pet Friendly", price: 15, unit: "/ Night" },
// ];

// export default function BookNow() {
//   const [roomTypes, setRoomTypes] = useState([]);
//   const [selectedRoomTypeId, setSelectedRoomTypeId] = useState("");
//   const [checkIn, setCheckIn] = useState(moment().format("YYYY-MM-DD"));
//   const [checkOut, setCheckOut] = useState(moment().add(1, "days").format("YYYY-MM-DD"));
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [extraBed, setExtraBed] = useState(0);
//   const [selectedExtraServices, setSelectedExtraServices] = useState([]);
//   const [bookingStatus, setBookingStatus] = useState(null); // 'success', 'error', 'loading'

//   // Helper to find the currently selected room type object
//   const selectedRoomType = roomTypes.find(
//     (room) => room.id === parseInt(selectedRoomTypeId)
//   );

//   // Calculate the number of nights
//   const numNights = moment(checkOut).diff(moment(checkIn), 'days');

//   // Calculate the total price
//   const calculateTotal = () => {
//     let basePrice = selectedRoomType ? selectedRoomType.price : 0;
    
//     // Total price for extra services
//     const servicesPrice = selectedExtraServices.reduce((total, serviceLabel) => {
//       const service = EXTRA_SERVICES.find(s => s.label === serviceLabel);
//       return total + (service ? service.price : 0);
//     }, 0);

//     // Ensure numNights is at least 1 for calculation if a valid date range is selected
//     const totalNights = numNights > 0 ? numNights : 1; 

//     const total = (basePrice * totalNights) + (servicesPrice * totalNights);
//     return total.toFixed(2); // Keep two decimal places
//   };


//   // Fetch room types
//   useEffect(() => {
//     fetch("http://localhost:8080/admin/roomtype/all") // Updated endpoint
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error(`HTTP error! status: ${res.status}`);
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setRoomTypes(data);
//         // Automatically select the first room type if data is available
//         if (data.length > 0) {
//           setSelectedRoomTypeId(data[0].id.toString());
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching room types:", err);
//         setBookingStatus('error fetching room types');
//       });
//   }, []);

//   // Handle room type change
//   const handleRoomTypeChange = (e) => {
//     setSelectedRoomTypeId(e.target.value);
//   };
  
//   // Handle extra service checkbox change
//   const handleServiceChange = (label) => {
//     setSelectedExtraServices((prevServices) =>
//       prevServices.includes(label)
//         ? prevServices.filter((s) => s !== label)
//         : [...prevServices, label]
//     );
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedRoomTypeId) {
//       alert("Please select a room type.");
//       return;
//     }
    
//     if (numNights <= 0) {
//       alert("Please select valid Check In and Check Out dates.");
//       return;
//     }

//     setBookingStatus('loading');

//     const bookingData = {
//       // Assuming 'roomId' is the foreign key reference in your Booking model
//       roomTypeId: selectedRoomType.id, 
//       checkInDate: checkIn,
//       checkOutDate: checkOut,
//       totalPrice: calculateTotal(),
//       adults: parseInt(adults),
//       children: parseInt(children),
//       extraBed: parseInt(extraBed),
//       // Map selected services to a simple array of service labels/names
//       extraServices: selectedExtraServices.join(', '), 
      
//       // The Booking model in your backend requires a 'roomType' object,
//       // which we will simplify for a basic booking process. 
//       // For a more robust solution, you would pass the roomTypeId, 
//       // and your backend would fetch the RoomType object to attach to the Booking.
//       // For now, let's assume the backend model can handle a simple ID or is flexible.
//       // If your backend Booking model requires a full RoomType object, this part needs adjustment.
//       // For the provided backend, let's stick to the minimal data the service should process.
//     };
    
//     // In your BookingController, the `createBooking` method expects a `Booking` object.
//     // The structure of `bookingData` must match the fields of your `Booking` model.
//     // If your Booking model has fields like `guestName`, `email`, etc., you need to add them.
//     // Assuming your Booking model has fields matching the keys in `bookingData` above (plus an ID).
    
//     try {
//       const response = await fetch("http://localhost:8080/api/booking/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const result = await response.json();
//       console.log("Booking successful:", result);
//       setBookingStatus('success');
//       alert(`Booking Successful! Your Total is ₹${calculateTotal()} for ${numNights} nights.`);
//       // Optionally reset form fields here
//       // setCheckIn(moment().format("YYYY-MM-DD")); etc.

//     } catch (error) {
//       console.error("Error creating booking:", error);
//       setBookingStatus('error');
//       alert(`Booking failed: ${error.message}. Check console for details.`);
//     }
//   };

//   // Default values for display if no room type is selected yet
//   const displayPrice = selectedRoomType ? selectedRoomType.price : "---";
//   const displayTitle = selectedRoomType ? selectedRoomType.typeName : "Select a Room Type";


//   return (
//     <div className="font-sanserif text-gray-800">
//       {/* Hero Section */}
//       <div
//         className="relative bg-cover bg-center h-[400px] flex items-center justify-center mb-25"
//         style={{
//           backgroundImage:
//             "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
//         }}
//       ></div>

//       <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh] mt-1 font-serif">
//         <div className="grid lg:grid-cols-3 gap-10">
//           {/* Left Column - Room Content (scrollable) */}
//           <div className="lg:col-span-2 h-[150vh] overflow-y-scroll scrollbar-hide pr-2">
//             <h2 className="text-5xl font-serif text-[#af7b4f]">
//               {/* Dynamic Price */}
//               {displayPrice} ₹ / Night 
//             </h2>
//             <h1 className="text-6xl font-serif mt-5 mb-4">
//               {/* Dynamic Title */}
//               {displayTitle}
//             </h1>

//             {/* ... Rest of the static room details content (amenities, images, etc.) ... */}

//             <div className="flex items-center gap-6 text-gray-500 mb-6 text-xl">
//               <span className="flex items-center gap-2">
//                 <i className="fa-solid fa-house"></i> 35 sqm
//               </span>
//               <span className="flex items-center gap-2">
//                 <i className="fa-solid fa-user"></i> 5 Person
//               </span>
//             </div>

//             <p className="text-gray-600 mb-8 text-xl leading-relaxed">
//               Our elegantly appointed rooms and suites are designed to offer the utmost in comfort and style. Each room features modern amenities, plush furnishings, and thoughtful touches to ensure a relaxing stay.
//               <br />
//               <br />
//               Indulge in a culinary journey at our on-site restaurants, where our talented chefs create mouthwatering dishes using the freshest local ingredients. Start your day with a sumptuous breakfast, enjoy a leisurely lunch, and savor a gourmet dinner in an elegant setting.
//             </p>

//             {/* Room Images */}
//             <div className="grid sm:grid-cols-2 gap-4 mb-12">
//               <img
//                 src="https://html.themewant.com/moonlit/assets/images/pages/room/1.webp"
//                 alt="Room"
//                 className="rounded-md object-cover w-full h-140"
//               />
//               <img
//                 src="https://html.themewant.com/moonlit/assets/images/pages/room/r-d-2.webp"
//                 alt="Room"
//                 className="rounded-md object-cover w-full h-140"
//               />
//             </div>

//             {/* Room Amenities */}
//             <h2 className="text-4xl font-serif mb-8">Room Amenities</h2>
//             <div className="divide-y divide-gray-200 text-7xl mb-10">
//               <div className="grid grid-cols-3 gap-6 py-4">
//                 <div className="flex items-center gap-5">
//                   <img src="https://html.themewant.com/moonlit/assets/images/icon/wifi.svg" alt="Wifi" className="w-9 h-9 text-[#a1865e]" />
//                   <span className="text-2xl font-serif text-gray-800">Free Wifi</span>
//                 </div>
//                 <div className="flex items-center gap-5">
//                   <img src="https://html.themewant.com/moonlit/assets/images/icon/shower.svg" alt="Shower" className="w-9 h-9 text-[#a1865e]" />
//                   <span className="text-xl font-serif text-gray-800">Shower</span>
//                 </div>
//                 <div className="flex items-center gap-5">
//                   <img src="https://html.themewant.com/moonlit/assets/images/icon/aeroplane.svg" alt="Airport" className="w-9 h-9 text-[#a1865e]" />
//                   <span className="text-xl font-serif text-gray-800">Airport transport</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-3 gap-6 py-4">
//                 <div className="flex items-center gap-5">
//                   <img src="https://html.themewant.com/moonlit/assets/images/icon/balcony.svg" alt="Balcony" className="w-9 h-9 text-[#a1865e]" />
//                   <span className="text-xl font-serif text-gray-800">Balcony</span>
//                 </div>
//                 <div className="flex items-center gap-5">
//                   <img src="https://html.themewant.com/moonlit/assets/images/icon/refrigerator.svg" alt="Refrigerator" className="w-9 h-9 text-[#a1865e]" />
//                   <span className="text-xl font-serif text-gray-800">Refrigerator</span>
//                 </div>
//                 <div className="flex items-center gap-5">
//                   <img src="https://html.themewant.com/moonlit/assets/images/icon/support.svg" alt="24/7 Support" className="w-9 h-9 text-[#a1865e]" />
//                   <span className="text-xl font-serif text-gray-800">24/7 Support</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-3 gap-6 py-4">
//                 <div className="flex items-center gap-5">
//                   <img src="https://html.themewant.com/moonlit/assets/images/icon/desk.svg" alt="Work Desk" className="w-9 h-9 text-[#a1865e]" />
//                   <span className="text-xl font-serif text-gray-800">Work Desk</span>
//                 </div>
//                 <div className="flex items-center gap-5">
//                   <img src="https://html.themewant.com/moonlit/assets/images/icon/fitness.svg" alt="Fitness" className="w-9 h-9 text-[#a1865e]" />
//                   <span className="text-xl font-serif text-gray-800">Fitness Center</span>
//                 </div>
//                 <div className="flex items-center gap-5">
//                   <img src="https://html.themewant.com/moonlit/assets/images/icon/swimming-pool.svg" alt="Swimming" className="w-9 h-9 text-[#a1865e]" />
//                   <span className="text-lg font-serif text-gray-800">Swimming Pool</span>
//                 </div>
//               </div>
//             </div>

//             {/* Room Features */}
//             <h2 className="text-5xl font-serif mb-6">Room Features</h2>
//             <img
//               src="https://html.themewant.com/moonlit/assets/images/pages/room/3.webp"
//               alt="Features"
//               className="rounded-md object-cover w-full h-140 mb-11"
//             />
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[19px] font-serif text-gray-900 mb-10">
//               {[
//                 "Children and extra beds",
//                 "Climate Control",
//                 "Art and Decor",
//                 "Coffee/Tea Maker",
//                 "High-End Bedding",
//                 "Smart Technology",
//               ].map((feature, i) => (
//                 <div key={i} className="flex items-start gap-4">
//                   <span className="mt-3 w-2 h-2 rounded-full bg-[#a1865e]"></span>
//                   <span>{feature}</span>
//                 </div>
//               ))}
//             </div>

//             <p className="text-gray-600 text-xl leading-relaxed">
//               Our elegantly appointed rooms and suites are designed to offer the
//               ultimate in comfort and style. Each room features modern amenities,
//               plush furnishings, and thoughtful touches to ensure a relaxing stay.
//             </p>
//           </div>

//           {/* Right Column - Booking Sidebar */}
//           <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
//             <h3 className="text-3xl text-center font-serif text-gray-800 mb-7">
//               Book Your Stay
//             </h3>

//             <form className="space-y-4 text-gray-700 text-xl" onSubmit={handleSubmit}>
//               {/* Dates */}
//               <div>
//                 <label className="block font-serif mb-5">Check In</label>
//                 <input
//                   type="date"
//                   className="w-full border px-3 py-2 rounded outline-none bg-white"
//                   value={checkIn}
//                   onChange={(e) => setCheckIn(e.target.value)}
//                   min={moment().format("YYYY-MM-DD")} // Prevent selecting past dates
//                 />
//               </div>
//               <div>
//                 <label className="block font-medium mb-5 mt-5">Check Out</label>
//                 <input
//                   type="date"
//                   className="w-full border px-3 py-2 rounded outline-none bg-white"
//                   value={checkOut}
//                   onChange={(e) => setCheckOut(e.target.value)}
//                   min={moment(checkIn).add(1, 'days').format("YYYY-MM-DD")} // Must be at least one day after check-in
//                 />
//               </div>
              
//               {/* Room Type Selection */}
//               <div className="mt-5">
//                 <label className="block font-medium mb-5">Room Type</label>
//                 <select
//                   value={selectedRoomTypeId}
//                   onChange={handleRoomTypeChange}
//                   style={{
//                     width: "100%",
//                     padding: "12px",
//                     borderRadius: "6px",
//                     border: "1px solid #ccc",
//                   }}
//                   className="outline-none bg-white text-xl"
//                 >
//                   <option value="">-- Choose Room Type --</option>
//                   {roomTypes.map((room) => (
//                     <option key={room.id} value={room.id}>
//                       {room.typeName} (₹{room.price})
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Guest Info */}
//               <div className="grid grid-cols-1 gap-3">
//                 <div>
//                   <label className="block font-medium mt-5 mb-5">Adults</label>
//                   <input
//                     type="number"
//                     value={adults}
//                     onChange={(e) => setAdults(e.target.value)}
//                     min={1} // At least one adult
//                     className="w-full border px-3 py-2 rounded outline-none bg-white"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-medium mb-5 mt-5">Children</label>
//                   <input
//                     type="number"
//                     value={children}
//                     onChange={(e) => setChildren(e.target.value)}
//                     min={0}
//                     className="w-full border px-3 py-2 rounded outline-none bg-white"
//                   />
//                 </div>
//                 <div>
//                   <label className="block font-medium mb-5 mt-5">Extra Bed</label>
//                   <input
//                     type="number"
//                     value={extraBed}
//                     onChange={(e) => setExtraBed(e.target.value)}
//                     min={0}
//                     className="w-full border px-3 py-2 rounded outline-none bg-white"
//                   />
//                 </div>
//               </div>

//               {/* Extra Services */}
//               <h4 className="font-serif text-center text-3xl mt-10 mb-5">Extra Services</h4>
//               <div className="space-y-2">
//                 {EXTRA_SERVICES.map((item, i) => (
//                   <label key={i} className="flex justify-between text-xl mt-5">
//                     <span>
//                       <input
//                         type="checkbox"
//                         className="mr-2 w-4 h-4 align-middle"
//                         checked={selectedExtraServices.includes(item.label)}
//                         onChange={() => handleServiceChange(item.label)}
//                       />
//                       {item.label}
//                     </span>
//                     <span>
//                       {item.price > 0 ? `₹${item.price}` : item.unit} {item.price > 0 && item.unit}
//                     </span>
//                   </label>
//                 ))}
//               </div>
              
//               {/* Summary */}
//               <div className="font-serif text-xl border-t pt-6 mt-8">
//                 <div className="flex justify-between items-center mb-2">
//                     <span>Base Price ({numNights > 0 ? numNights : 0} Nights)</span>
//                     <span>₹{selectedRoomType ? (selectedRoomType.price * (numNights > 0 ? numNights : 0)).toFixed(2) : '0.00'}</span>
//                 </div>
//                 <div className="flex justify-between items-center mb-4">
//                     <span>Extra Services (Total)</span>
//                     <span>₹{(calculateTotal() - (selectedRoomType ? selectedRoomType.price * (numNights > 0 ? numNights : 0) : 0)).toFixed(2)}</span>
//                 </div>
//               </div>

//               {/* Total */}
//               <div className="flex text-2xl border-t pt-6 justify-between items-center font-serif mt-8">
//                 <span>Total Price</span>
//                 <span className="text-[#af7b4f] font-bold">₹{calculateTotal()}</span>
//               </div>

//               <button
//                 type="submit"
//                 className={`w-full mt-4 py-2 text-2xl text-white font-medium rounded transition ${
//                     bookingStatus === 'loading'
//                     ? 'bg-gray-500 cursor-not-allowed'
//                     : 'bg-[#af7b4f] hover:bg-yellow-800'
//                 }`}
//                 disabled={bookingStatus === 'loading' || !selectedRoomTypeId || numNights <= 0}
//               >
//                 {bookingStatus === 'loading' ? 'Booking...' : 'Book Your Room'}
//               </button>
              
//               {bookingStatus === 'success' && <p className="text-green-600 text-center mt-2">Booking confirmed!</p>}
//               {bookingStatus === 'error' && <p className="text-red-600 text-center mt-2">Booking failed. Try again.</p>}
//             </form>
//           </div>
//         </div>
//       </section>

//       <style>{`
// /* Hide scrollbar */
// .scrollbar-hide {
//   scrollbar-width: none; /* Firefox */
//   -ms-overflow-style: none; /* IE/Edge */
// }
// .scrollbar-hide::-webkit-scrollbar {
//   display: none; /* Chrome/Safari */
// }
// `}</style>

//       {/* Similar Rooms Section (Unchanged) */}
//       <section className="bg-white pt-0 pb-16 px-4 sm:px-6 md:px-24">
//         <h4 className="text-yellow-800 text-base font-serif mb-2">
//           <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-5 sm:mb-10 text-lg sm:text-2xl font-serif">
//             <span className="flex items-center">
//               <span className="text-sm sm:text-lg">◇</span>
//               <span className="w-6 sm:w-10 h-px bg-black"></span>
//             </span>
//             Similar Rooms
//             <span className="flex items-center">
//               <span className="w-6 sm:w-10 h-px bg-black"></span>
//               <span className="text-sm sm:text-lg">◇</span>
//             </span>
//           </span>
//         </h4>

//         <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-900 mb-10">
//           Similar Rooms
//         </h2>

//         {/* Responsive Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
//           {[
//             {
//               name: "Exectutive Room",
//               Amt: "12000₹",
//               img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
//             },
//             {
//               name: "Single Room",
//               Amt: "3999₹",
//               img: "https://html.themewant.com/moonlit/assets/images/pages/room/2.webp",
//             },
//             {
//               name: "Triple Room",
//               Amt: "12999₹",
//               img: "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp",
//             },
//           ].map((member, index) => (
//             <div
//               key={index}
//               className="font-serif border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
//             >
//               <img
//                 src={member.img}
//                 alt={member.name}
//                 className="w-full h-74 object-cover transition-transform duration-500 hover:scale-105"
//               />

//               <div className="p-4">
//                 <h3 className="text-3xl font-serif">{member.name}</h3>

//                 <div className="flex items-center gap-10 mt-4 text-xl text-gray-500">
//                   <span className="flex items-center gap-3">
//                     <i className="fa-solid fa-house"></i> 35 sqm
//                   </span>
//                   <span className="flex items-center gap-3">
//                     <i className="fa-solid fa-user"></i> 5 Person
//                   </span>
//                 </div>

//                 <div className="mt-5 mb-4 text-2xl text-gray-500">{member.Amt}</div>

//                 <a
//                   href="#"
//                   className="text-[#b86e2e] border-b text-lg border-[#b86e2e] w-fit hover:text-[#a15d20] transition"
//                 >
//                   Discover More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// }






// src/pages/BookNow.jsx
import React, { useEffect, useState } from "react";
import moment from "moment";

// Extra services
const EXTRA_SERVICES = [
  { label: "Room Clean", price: 10, unit: "/ Night" },
  { label: "Parking", price: 0, unit: "Free" },
  { label: "Airport Transport", price: 20, unit: "/ Night" },
  { label: "Pet Friendly", price: 15, unit: "/ Night" },
];

export default function BookNow() {
  const [roomTypes, setRoomTypes] = useState([]);
  const [selectedRoomTypeId, setSelectedRoomTypeId] = useState("");
  const [checkIn, setCheckIn] = useState(moment().format("YYYY-MM-DD"));
  const [checkOut, setCheckOut] = useState(moment().add(1, "days").format("YYYY-MM-DD"));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [extraBed, setExtraBed] = useState(0);
  const [selectedExtraServices, setSelectedExtraServices] = useState([]);
  const [bookingStatus, setBookingStatus] = useState(null); // 'success', 'error', 'loading'

  const selectedRoomType = roomTypes.find(room => room.id === parseInt(selectedRoomTypeId));
  const numNights = moment(checkOut).diff(moment(checkIn), 'days');

  const calculateTotal = () => {
    const basePrice = selectedRoomType ? selectedRoomType.price : 0;
    const servicesPrice = selectedExtraServices.reduce((total, label) => {
      const service = EXTRA_SERVICES.find(s => s.label === label);
      return total + (service ? service.price : 0);
    }, 0);
    const totalNights = numNights > 0 ? numNights : 1;
    return ((basePrice + servicesPrice) * totalNights).toFixed(2);
  };

  // Fetch room types
  useEffect(() => {
    fetch("http://localhost:8080/admin/roomtype/all")
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setRoomTypes(data);
        if (data.length > 0) setSelectedRoomTypeId(data[0].id.toString());
      })
      .catch(err => {
        console.error("Error fetching room types:", err);
        setBookingStatus('error fetching room types');
      });
  }, []);

  const handleRoomTypeChange = (e) => setSelectedRoomTypeId(e.target.value);

  const handleServiceChange = (label) => {
    setSelectedExtraServices(prev =>
      prev.includes(label) ? prev.filter(s => s !== label) : [...prev, label]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedRoomTypeId) return alert("Please select a room type.");
    if (numNights <= 0) return alert("Please select valid Check In and Check Out dates.");

    setBookingStatus('loading');

    const bookingData = {
      userId: 1, // Replace with logged-in user ID
      roomTypeId: selectedRoomType.id,
      checkIn,
      checkOut,
      totalPrice: parseFloat(calculateTotal()),
      adults: parseInt(adults),
      children: parseInt(children),
      extraBed: parseInt(extraBed),
      extraServices: selectedExtraServices.join(', ')
    };

    try {
      const response = await fetch("http://localhost:8080/api/booking/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const text = await response.text();
      let result = {};
      try {
        result = JSON.parse(text);
      } catch {
        console.warn("Response is not valid JSON, using raw text:", text);
        result = { message: text };
      }

      if (!response.ok) throw new Error(result.message || `HTTP error! status: ${response.status}`);

      console.log("Booking successful:", result);
      setBookingStatus('success');
      alert(`Booking Successful! Total: ₹${calculateTotal()} for ${numNights} nights.`);
      
    } catch (error) {
      console.error("Error creating booking:", error);
      setBookingStatus('error');
      alert(`Booking failed: ${error.message}. Check console for details.`);
    }
  };

  const displayPrice = selectedRoomType ? selectedRoomType.price : "---";
  const displayTitle = selectedRoomType ? selectedRoomType.typeName : "Select a Room Type";

  return (
    <div className="font-sanserif text-gray-800">
      <div className="relative bg-cover bg-center h-[400px] flex items-center justify-center mb-25"
        style={{ backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')" }}
      ></div>

      <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh] mt-1 font-serif">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 h-[150vh] overflow-y-scroll scrollbar-hide pr-2">
            <h2 className="text-5xl font-serif text-[#af7b4f]">{displayPrice} ₹ / Night</h2>
            <h1 className="text-6xl font-serif mt-5 mb-4">{displayTitle}</h1>

            {/* Add images, amenities, and room features here if needed */}
          </div>

          <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
            <h3 className="text-3xl text-center font-serif text-gray-800 mb-7">Book Your Stay</h3>

            <form className="space-y-4 text-gray-700 text-xl" onSubmit={handleSubmit}>
              <div>
                <label className="block font-serif mb-5">Check In</label>
                <input type="date" value={checkIn} min={moment().format("YYYY-MM-DD")}
                  className="w-full border px-3 py-2 rounded outline-none bg-white"
                  onChange={(e) => setCheckIn(e.target.value)} />
              </div>
              <div>
                <label className="block font-medium mb-5 mt-5">Check Out</label>
                <input type="date" value={checkOut} min={moment(checkIn).add(1, 'days').format("YYYY-MM-DD")}
                  className="w-full border px-3 py-2 rounded outline-none bg-white"
                  onChange={(e) => setCheckOut(e.target.value)} />
              </div>

              <div className="mt-5">
                <label className="block font-medium mb-5">Room Type</label>
                <select value={selectedRoomTypeId} onChange={handleRoomTypeChange}
                  className="w-full border px-3 py-2 rounded outline-none bg-white text-xl">
                  <option value="">-- Choose Room Type --</option>
                  {roomTypes.map(room => <option key={room.id} value={room.id}>{room.typeName} (₹{room.price})</option>)}
                </select>
              </div>

              <div className="grid grid-cols-1 gap-3">
                <div>
                  <label className="block font-medium mt-5 mb-5">Adults</label>
                  <input type="number" min={1} value={adults} onChange={(e) => setAdults(e.target.value)}
                    className="w-full border px-3 py-2 rounded outline-none bg-white" />
                </div>
                <div>
                  <label className="block font-medium mb-5 mt-5">Children</label>
                  <input type="number" min={0} value={children} onChange={(e) => setChildren(e.target.value)}
                    className="w-full border px-3 py-2 rounded outline-none bg-white" />
                </div>
                <div>
                  <label className="block font-medium mb-5 mt-5">Extra Bed</label>
                  <input type="number" min={0} value={extraBed} onChange={(e) => setExtraBed(e.target.value)}
                    className="w-full border px-3 py-2 rounded outline-none bg-white" />
                </div>
              </div>

              <h4 className="font-serif text-center text-3xl mt-10 mb-5">Extra Services</h4>
              <div className="space-y-2">
                {EXTRA_SERVICES.map((item, i) => (
                  <label key={i} className="flex justify-between text-xl mt-5">
                    <span>
                      <input type="checkbox" checked={selectedExtraServices.includes(item.label)}
                        onChange={() => handleServiceChange(item.label)} className="mr-2 w-4 h-4 align-middle" />
                      {item.label}
                    </span>
                    <span>{item.price > 0 ? `₹${item.price}${item.unit}` : item.unit}</span>
                  </label>
                ))}
              </div>

              <div className="flex text-2xl border-t pt-6 justify-between items-center font-serif mt-8">
                <span>Total Price</span>
                <span className="text-[#af7b4f] font-bold">₹{calculateTotal()}</span>
              </div>

              <button type="submit" disabled={bookingStatus === 'loading' || !selectedRoomTypeId || numNights <= 0}
                className={`w-full mt-4 py-2 text-2xl text-white font-medium rounded transition ${
                  bookingStatus === 'loading' ? 'bg-gray-500 cursor-not-allowed' : 'bg-[#af7b4f] hover:bg-yellow-800'
                }`}>
                {bookingStatus === 'loading' ? 'Booking...' : 'Book Your Room'}
              </button>

              {bookingStatus === 'success' && <p className="text-green-600 text-center mt-2">Booking confirmed!</p>}
              {bookingStatus === 'error' && <p className="text-red-600 text-center mt-2">Booking failed. Try again.</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
