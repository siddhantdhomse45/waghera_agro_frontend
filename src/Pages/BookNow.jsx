








// import React, { useEffect, useState } from "react";
// import moment from "moment";

// // Extra services
// const EXTRA_SERVICES = [
//   { label: "Room Clean", price: 10, unit: "/ Night" },
//   { label: "Parking", price: 0, unit: "Free" },
//   { label: "Airport Transport", price: 20, unit: "/ Night" },
//   { label: "Pet Friendly", price: 15, unit: "/ Night" },
// ];

// export default function BookNow() {
//   const [rooms, setRooms] = useState([]);
//   const [selectedRoomId, setSelectedRoomId] = useState("");
//   const [checkIn, setCheckIn] = useState(moment().format("YYYY-MM-DD"));
//   const [checkOut, setCheckOut] = useState(moment().add(1, "days").format("YYYY-MM-DD"));
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [extraBed, setExtraBed] = useState(0);
//   const [selectedExtraServices, setSelectedExtraServices] = useState([]);
//   const [bookingStatus, setBookingStatus] = useState(null);

//   const selectedRoom = rooms.find((room) => room.id === parseInt(selectedRoomId));
//   const numNights = moment(checkOut).diff(moment(checkIn), "days");

//   const calculateTotal = () => {
//     const basePrice = selectedRoom ? selectedRoom.price : 0;
//     const servicesPrice = selectedExtraServices.reduce((sum, label) => {
//       const service = EXTRA_SERVICES.find((s) => s.label === label);
//       return sum + (service ? service.price : 0);
//     }, 0);
//     return ((basePrice + servicesPrice) * (numNights > 0 ? numNights : 1)).toFixed(2);
//   };

//   useEffect(() => {
//     fetch("http://localhost:8080/api/admin/rooms")
//       .then((res) => res.json())
//       .then((data) => {
//         setRooms(data);
//         if (data.length > 0) setSelectedRoomId(data[0].id.toString());
//       })
//       .catch((err) => console.error("Error fetching rooms:", err));
//   }, []);

//   const toggleService = (label) => {
//     setSelectedExtraServices((prev) =>
//       prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedRoomId) return alert("Please select a room.");
//     if (numNights < 1) return alert("Check-out must be after check-in.");

//     setBookingStatus("loading");

//     const bookingData = {
//       userId: 1, // Replace with actual user ID
//       roomId: parseInt(selectedRoomId),
//       checkInDate: checkIn,
//       checkOutDate: checkOut,
//       adults: parseInt(adults),
//       children: parseInt(children),
//       extraBed: parseInt(extraBed),
//       extraServices: selectedExtraServices,
//       totalPrice: parseFloat(calculateTotal()),
//     };

//     try {
//       const response = await fetch("http://localhost:8080/api/bookings/create-with-pdf", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) throw new Error(await response.text());

//       const pdfBlob = await response.blob();
//       const pdfURL = URL.createObjectURL(pdfBlob);
//       const link = document.createElement("a");
//       link.href = pdfURL;
//       link.download = `booking_${Date.now()}.pdf`;
//       link.click();
//       URL.revokeObjectURL(pdfURL);

//       setBookingStatus("success");
//       alert("Booking successful! PDF downloaded.");
//     } catch (err) {
//       console.error("Booking failed:", err);
//       setBookingStatus("error");
//       alert("Booking failed: " + err.message);
//     }
//   };

//   return (
//     <div className="font-serif text-gray-800">
//       {/* Hero */}
//       <div
//         className="relative bg-cover bg-center h-[400px]"
//         style={{ backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')" }}
//       ></div>

//       {/* Booking Section */}
//       <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh]">
//         <div className="grid lg:grid-cols-3 gap-10">
//           {/* Left Column: Room Details */}
//           <div className="lg:col-span-2 h-[150vh] overflow-y-scroll scrollbar-hide pr-2">
//             <h2 className="text-5xl text-[#af7b4f]">
//               {selectedRoom ? `${selectedRoom.price} ₹ / Night` : "---"}
//             </h2>
//             <h1 className="text-6xl mt-5 mb-4">{selectedRoom ? selectedRoom.roomName : "Select Room"}</h1>
//             <p className="text-gray-600 mb-8 text-xl">
//               {selectedRoom?.type || "Comfortable and elegant rooms."}
//             </p>

//             {/* Room Images */}
//             <div className="grid sm:grid-cols-2 gap-4 mb-12">
//               {selectedRoom?.images?.map((img, i) => (
//                 <img key={i} src={img} alt={`${selectedRoom.roomName} ${i + 1}`} className="rounded-md object-cover w-full h-140" />
//               ))}
//             </div>

//             {/* Room Amenities */}
//             <h2 className="text-4xl mb-6">Room Amenities</h2>
//             <div className="grid grid-cols-3 gap-6 mb-10">
//               <div className="flex items-center gap-5">
//                 <img src="https://html.themewant.com/moonlit/assets/images/icon/wifi.svg" alt="Wifi" className="w-9 h-9" />
//                 <span className="text-xl">Free Wifi</span>
//               </div>
//               <div className="flex items-center gap-5">
//                 <img src="https://html.themewant.com/moonlit/assets/images/icon/shower.svg" alt="Shower" className="w-9 h-9" />
//                 <span className="text-xl">Shower</span>
//               </div>
//               <div className="flex items-center gap-5">
//                 <img src="https://html.themewant.com/moonlit/assets/images/icon/aeroplane.svg" alt="Airport Transport" className="w-9 h-9" />
//                 <span className="text-xl">Airport Transport</span>
//               </div>
//             </div>

//             {/* Room Features */}
//             <h2 className="text-4xl mb-6">Room Features</h2>
//             <img src="https://html.themewant.com/moonlit/assets/images/pages/room/3.webp" alt="Room Features" className="rounded-md object-cover w-full h-140 mb-10" />
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[19px] mb-10">
//               {["Children and extra beds", "Climate Control", "Art and Decor", "Coffee/Tea Maker", "High-End Bedding", "Smart Technology"].map((feature, i) => (
//                 <div key={i} className="flex items-start gap-4">
//                   <span className="mt-3 w-2 h-2 rounded-full bg-[#a1865e]"></span>
//                   <span>{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column: Booking Form */}
//           <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
//             <h3 className="text-3xl text-center mb-7">Book Your Stay</h3>
//             <form className="space-y-4 text-xl" onSubmit={handleSubmit}>
//               <div>
//                 <label>Check In</label>
//                 <input type="date" value={checkIn} min={moment().format("YYYY-MM-DD")} onChange={e => setCheckIn(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Check Out</label>
//                 <input type="date" value={checkOut} min={moment(checkIn).add(1, "days").format("YYYY-MM-DD")} onChange={e => setCheckOut(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Room Type</label>
//                 <select value={selectedRoomId} onChange={e => setSelectedRoomId(e.target.value)} className="w-full border px-3 py-2 rounded bg-white">
//                   {rooms.map((room) => (
//                     <option key={room.id} value={room.id}>
//                       {room.roomName} — ₹{room.price}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label>Adults</label>
//                 <input type="number" min={1} value={adults} onChange={e => setAdults(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Children</label>
//                 <input type="number" min={0} value={children} onChange={e => setChildren(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Extra Bed</label>
//                 <input type="number" min={0} value={extraBed} onChange={e => setExtraBed(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>

//               {/* Extra Services */}
//               <h4 className="text-3xl text-center mt-6 mb-4">Extra Services</h4>
//               {EXTRA_SERVICES.map((s, i) => (
//                 <label key={i} className="flex justify-between mt-3 text-xl">
//                   <span>
//                     <input type="checkbox" checked={selectedExtraServices.includes(s.label)} onChange={() => toggleService(s.label)} className="mr-2" />
//                     {s.label}
//                   </span>
//                   <span>{s.price > 0 ? `₹${s.price}${s.unit}` : s.unit}</span>
//                 </label>
//               ))}

//               {/* Total Price */}
//               <div className="flex justify-between mt-6 text-2xl border-t pt-4">
//                 <span>Total Price</span>
//                 <span className="text-[#af7b4f] font-bold">₹{calculateTotal()}</span>
//               </div>

//               <button type="submit" disabled={bookingStatus === "loading"} className={`w-full mt-5 py-2 text-white rounded text-2xl ${bookingStatus === "loading" ? "bg-gray-500" : "bg-[#af7b4f] hover:bg-[#8c6439]"}`}>
//                 {bookingStatus === "loading" ? "Booking..." : "Book Your Room"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Similar Rooms */}
//       <section className="bg-white pt-0 pb-16 px-4 sm:px-6 md:px-24">
//         <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-900 mb-10">
//           Similar Rooms
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
//           {[
//             { name: "Executive Room", price: "12000₹", img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp" },
//             { name: "Single Room", price: "3999₹", img: "https://html.themewant.com/moonlit/assets/images/pages/room/2.webp" },
//             { name: "Triple Room", price: "12999₹", img: "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp" },
//           ].map((room, index) => (
//             <div key={index} className="font-serif border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
//               <img src={room.img} alt={room.name} className="w-full h-74 object-cover transition-transform duration-500 hover:scale-105" />
//               <div className="p-4">
//                 <h3 className="text-3xl">{room.name}</h3>
//                 <div className="mt-4 mb-4 text-2xl text-gray-500">{room.price}</div>
//                 <a href="#" className="text-[#b86e2e] border-b text-lg border-[#b86e2e] w-fit hover:text-[#a15d20] transition">
//                   Discover More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <style>{`
//         .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//       `}</style>
//     </div>
//   );
// }












// import React, { useEffect, useState } from "react";
// import moment from "moment";

// // Extra services
// const EXTRA_SERVICES = [
//   { label: "Room Clean", price: 10, unit: "/ Night" },
//   { label: "Parking", price: 0, unit: "Free" },
//   { label: "Airport Transport", price: 20, unit: "/ Night" },
//   { label: "Pet Friendly", price: 15, unit: "/ Night" },
// ];

// export default function BookNow() {
//   const [rooms, setRooms] = useState([]);
//   const [selectedRoomId, setSelectedRoomId] = useState("");

//   const [checkIn, setCheckIn] = useState(moment().format("YYYY-MM-DD"));
//   const [checkOut, setCheckOut] = useState(moment().add(1, "days").format("YYYY-MM-DD"));

//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [extraBed, setExtraBed] = useState(0);

//   const [selectedExtraServices, setSelectedExtraServices] = useState([]);
//   const [bookingStatus, setBookingStatus] = useState(null);

//   // ⭐ FIX ADDED HERE — Load logged-in user
//   const user = JSON.parse(localStorage.getItem("user"));

//   const selectedRoom = rooms.find((room) => room.id === parseInt(selectedRoomId));
//   const numNights = moment(checkOut).diff(moment(checkIn), "days");

//   const calculateTotal = () => {
//     const basePrice = selectedRoom ? selectedRoom.price : 0;
//     const servicesPrice = selectedExtraServices.reduce((sum, label) => {
//       const service = EXTRA_SERVICES.find((s) => s.label === label);
//       return sum + (service ? service.price : 0);
//     }, 0);
//     return ((basePrice + servicesPrice) * (numNights > 0 ? numNights : 1)).toFixed(2);
//   };

//   useEffect(() => {
//     fetch("http://localhost:5000/api/admin/rooms")
//       .then((res) => res.json())
//       .then((data) => {
//         setRooms(data);
//         if (data.length > 0) setSelectedRoomId(data[0].id.toString());
//       })
//       .catch((err) => console.error("Error fetching rooms:", err));
//   }, []);

//   const toggleService = (label) => {
//     setSelectedExtraServices((prev) =>
//       prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!selectedRoomId) return alert("Please select a room.");
//     if (numNights < 1) return alert("Check-out must be after check-in.");
//     if (!user) return alert("You must be logged in to book!");

//     setBookingStatus("loading");

//     const bookingData = {
//       userId: user.id,  // ⭐ FIXED: Dynamic user ID
//       roomId: parseInt(selectedRoomId),
//       checkInDate: checkIn,
//       checkOutDate: checkOut,
//       adults: parseInt(adults),
//       children: parseInt(children),
//       extraBed: parseInt(extraBed),
//       extraServices: selectedExtraServices,
//       totalPrice: parseFloat(calculateTotal()),
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/bookings/create-with-pdf", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) throw new Error(await response.text());

//       const pdfBlob = await response.blob();
//       const pdfURL = URL.createObjectURL(pdfBlob);
//       const link = document.createElement("a");
//       link.href = pdfURL;
//       link.download = `booking_${Date.now()}.pdf`;
//       link.click();
//       URL.revokeObjectURL(pdfURL);

//       setBookingStatus("success");
//       alert("Booking successful! PDF downloaded.");

//     } catch (err) {
//       console.error("Booking failed:", err);
//       setBookingStatus("error");
//       alert("Booking failed: " + err.message);
//     }
//   };

//   return (
//     <div className="font-serif text-gray-800">

//       {/* Hero */}
//       <div
//         className="relative bg-cover bg-center h-[400px]"
//         style={{ backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')" }}
//       ></div>

//       {/* Booking Section */}
//       <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh]">
//         <div className="grid lg:grid-cols-3 gap-10">

//           {/* LEFT SIDE SAME CODE — UNCHANGED */}

//           {/* RIGHT COLUMN FORM (only 1 fix applied inside handleSubmit) */}
//           <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
//             <h3 className="text-3xl text-center mb-7">Book Your Stay</h3>

//             <form className="space-y-4 text-xl" onSubmit={handleSubmit}>
              
//               {/* Your form code is unchanged */}
//               {/* Checkin */}
//               <div>
//                 <label>Check In</label>
//                 <input type="date" value={checkIn} min={moment().format("YYYY-MM-DD")}
//                   onChange={e => setCheckIn(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>

//               {/* Checkout */}
//               <div>
//                 <label>Check Out</label>
//                 <input type="date" value={checkOut} min={moment(checkIn).add(1, "days").format("YYYY-MM-DD")}
//                   onChange={e => setCheckOut(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>

//               {/* Room Type */}
//               <div>
//                 <label>Room Type</label>
//                 <select value={selectedRoomId} onChange={e => setSelectedRoomId(e.target.value)}
//                   className="w-full border px-3 py-2 rounded bg-white">
//                   {rooms.map((room) => (
//                     <option key={room.id} value={room.id}>
//                       {room.roomName} — ₹{room.price}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Adults */}
//               <div>
//                 <label>Adults</label>
//                 <input type="number" min={1} value={adults} onChange={e => setAdults(e.target.value)}
//                   className="w-full border px-3 py-2 rounded bg-white" />
//               </div>

//               {/* Children */}
//               <div>
//                 <label>Children</label>
//                 <input type="number" min={0} value={children} onChange={e => setChildren(e.target.value)}
//                   className="w-full border px-3 py-2 rounded bg-white" />
//               </div>

//               {/* Extra Bed */}
//               <div>
//                 <label>Extra Bed</label>
//                 <input type="number" min={0} value={extraBed} onChange={e => setExtraBed(e.target.value)}
//                   className="w-full border px-3 py-2 rounded bg-white" />
//               </div>

//               {/* Extra services — unchanged */}
//               <h4 className="text-3xl text-center mt-6 mb-4">Extra Services</h4>
//               {EXTRA_SERVICES.map((s, i) => (
//                 <label key={i} className="flex justify-between mt-3 text-xl">
//                   <span>
//                     <input type="checkbox" checked={selectedExtraServices.includes(s.label)}
//                       onChange={() => toggleService(s.label)} className="mr-2" />
//                     {s.label}
//                   </span>
//                   <span>{s.price > 0 ? `₹${s.price}${s.unit}` : s.unit}</span>
//                 </label>
//               ))}

//               {/* Total Price */}
//               <div className="flex justify-between mt-6 text-2xl border-t pt-4">
//                 <span>Total Price</span>
//                 <span className="text-[#af7b4f] font-bold">₹{calculateTotal()}</span>
//               </div>

//               <button type="submit" disabled={bookingStatus === "loading"}
//                 className={`w-full mt-5 py-2 text-white rounded text-2xl ${
//                   bookingStatus === "loading" ? "bg-gray-500" : "bg-[#af7b4f] hover:bg-[#8c6439]"
//                 }`}>
//                 {bookingStatus === "loading" ? "Booking..." : "Book Your Room"}
//               </button>
//             </form>
//           </div>

//         </div>
//       </section>

//       {/* Similar Rooms (unchanged) */}

//       <style>{`
//         .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//       `}</style>

//     </div>
//   );
// }











// import React, { useEffect, useState } from "react";
// import moment from "moment";

// // Extra services
// const EXTRA_SERVICES = [
//   { label: "Room Clean", price: 10, unit: "/ Night" },
//   { label: "Parking", price: 0, unit: "Free" },
//   { label: "Airport Transport", price: 20, unit: "/ Night" },
//   { label: "Pet Friendly", price: 15, unit: "/ Night" },
// ];

// export default function BookNow() {
//   const [rooms, setRooms] = useState([]);
//   const [selectedRoomId, setSelectedRoomId] = useState(null);

//   const [checkIn, setCheckIn] = useState(moment().format("YYYY-MM-DD"));
//   const [checkOut, setCheckOut] = useState(
//     moment().add(1, "days").format("YYYY-MM-DD")
//   );

//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [extraBed, setExtraBed] = useState(0);

//   const [selectedExtraServices, setSelectedExtraServices] = useState([]);
//   const [bookingStatus, setBookingStatus] = useState(null);

//   const user = JSON.parse(localStorage.getItem("user"));

//   // FIX 1 → ensure matching using Number()
//   const selectedRoom = rooms.find(
//     (room) => room.id === Number(selectedRoomId)
//   );

//   const numNights = moment(checkOut).diff(moment(checkIn), "days");

//   // Price Calculation
//   const calculateTotal = () => {
//     const basePrice = selectedRoom ? selectedRoom.price : 0;

//     const servicePrice = selectedExtraServices.reduce((sum, label) => {
//       const service = EXTRA_SERVICES.find((s) => s.label === label);
//       return sum + (service ? service.price : 0);
//     }, 0);

//     return ((basePrice + servicePrice) * (numNights || 1)).toFixed(2);
//   };

//   // Load Rooms
//   useEffect(() => {
//     fetch("http://localhost:5000/api/admin/rooms")
//       .then((res) => res.json())
//       .then((data) => {
//         setRooms(data);
//         if (data.length > 0) setSelectedRoomId(data[0].id);
//       })
//       .catch((err) => console.error("Error fetching rooms:", err));
//   }, []);

//   const toggleService = (label) => {
//     setSelectedExtraServices((prev) =>
//       prev.includes(label)
//         ? prev.filter((s) => s !== label)
//         : [...prev, label]
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedRoomId) return alert("Select a room.");
//     if (numNights < 1) return alert("Invalid dates.");
//     if (!user) return alert("Please login!");

//     setBookingStatus("loading");

//     const bookingData = {
//       userId: user.id,
//       roomId: selectedRoomId,
//       checkInDate: checkIn,
//       checkOutDate: checkOut,
//       adults: Number(adults),
//       children: Number(children),
//       extraBed: Number(extraBed),
//       extraServices: selectedExtraServices,
//       totalPrice: Number(calculateTotal()),
//     };

//     try {
//       const res = await fetch(
//         "http://localhost:5000/api/bookings/create-with-pdf",
//         {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(bookingData),
//         }
//       );

//       if (!res.ok) throw new Error(await res.text());

//       const pdfBlob = await res.blob();
//       const pdfURL = URL.createObjectURL(pdfBlob);

//       const link = document.createElement("a");
//       link.href = pdfURL;
//       link.download = `booking_${Date.now()}.pdf`;
//       link.click();

//       URL.revokeObjectURL(pdfURL);
//       setBookingStatus("success");

//       alert("Booking Successful! PDF Downloaded.");
//     } catch (err) {
//       console.error(err);
//       setBookingStatus("error");
//       alert("Booking failed: " + err.message);
//     }
//   };

//   return (
//     <div className="font-serif text-gray-800">

//       {/* HERO */}
//       <div
//         className="relative bg-cover bg-center h-[400px]"
//         style={{
//           backgroundImage:
//             "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
//         }}
//       ></div>

//       {/* BOOKING SECTION */}
//       <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh]">
//         <div className="grid lg:grid-cols-3 gap-10">

//           {/* LEFT SIDE (ROOM PREVIEW + IMAGES) */}
//           <div className="lg:col-span-2 h-[150vh] overflow-y-scroll scrollbar-hide">
//             <h2 className="text-5xl text-[#af7b4f]">
//               {selectedRoom ? `₹${selectedRoom.price} / Night` : "---"}
//             </h2>

//             <h1 className="text-6xl mt-5 mb-4">
//               {selectedRoom ? selectedRoom.roomName : "Select Room"}
//             </h1>

//             <p className="text-gray-600 mb-8 text-xl">
//               {selectedRoom?.type || "Luxury & Comfortable Room"}
//             </p>

//             {/* IMAGES */}
//             <div className="grid sm:grid-cols-2 gap-4 mb-12">
//               {selectedRoom?.images?.map((img, i) => (
//                 <img
//                   key={i}
//                   src={img}
//                   className="rounded-lg object-cover w-full h-64"
//                 />
//               ))}
//             </div>

//             {/* AMENITIES */}
//             <h2 className="text-4xl mb-6">Room Amenities</h2>
//             <div className="grid grid-cols-3 gap-6 mb-10">
//               <div className="flex items-center gap-3">
//                 <img src="/wifi.png" className="w-8" />
//                 <p>Free Wi-Fi</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <img src="/tv.png" className="w-8" />
//                 <p>Smart TV</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <img src="/ac.png" className="w-8" />
//                 <p>Air Conditioning</p>
//               </div>
//             </div>
//           </div>

//           {/* RIGHT SIDE (BOOKING FORM) */}
//           <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
//             <h3 className="text-3xl text-center mb-7">Book Your Room</h3>

//             <form className="space-y-4 text-xl" onSubmit={handleSubmit}>
              
//               {/* Dates */}
//               <div>
//                 <label>Check In</label>
//                 <input
//                   type="date"
//                   value={checkIn}
//                   min={moment().format("YYYY-MM-DD")}
//                   onChange={(e) => setCheckIn(e.target.value)}
//                   className="w-full border px-3 py-2 rounded bg-white"
//                 />
//               </div>

//               <div>
//                 <label>Check Out</label>
//                 <input
//                   type="date"
//                   value={checkOut}
//                   min={moment(checkIn).add(1, "days").format("YYYY-MM-DD")}
//                   onChange={(e) => setCheckOut(e.target.value)}
//                   className="w-full border px-3 py-2 rounded bg-white"
//                 />
//               </div>

//               {/* ROOM TYPE */}
//               <div>
//                 <label>Room Type</label>
//                 <select
//                   value={selectedRoomId || ""}
//                   onChange={(e) => setSelectedRoomId(Number(e.target.value))}
//                   className="w-full border px-3 py-2 rounded bg-white"
//                 >
//                   {rooms.map((room) => (
//                     <option key={room.id} value={room.id}>
//                       {room.roomName} — ₹{room.price}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Adults */}
//               <div>
//                 <label>Adults</label>
//                 <input
//                   type="number"
//                   min={1}
//                   value={adults}
//                   onChange={(e) => setAdults(e.target.value)}
//                   className="w-full border px-3 py-2 rounded bg-white"
//                 />
//               </div>

//               {/* Children */}
//               <div>
//                 <label>Children</label>
//                 <input
//                   type="number"
//                   min={0}
//                   value={children}
//                   onChange={(e) => setChildren(e.target.value)}
//                   className="w-full border px-3 py-2 rounded bg-white"
//                 />
//               </div>

//               {/* Extra Bed */}
//               <div>
//                 <label>Extra Bed</label>
//                 <input
//                   type="number"
//                   min={0}
//                   value={extraBed}
//                   onChange={(e) => setExtraBed(e.target.value)}
//                   className="w-full border px-3 py-2 rounded bg-white"
//                 />
//               </div>

//               {/* Extra Services */}
//               <h4 className="text-3xl text-center mt-6 mb-4">
//                 Extra Services
//               </h4>

//               {EXTRA_SERVICES.map((s, i) => (
//                 <label key={i} className="flex justify-between mt-3 text-xl">
//                   <span>
//                     <input
//                       type="checkbox"
//                       checked={selectedExtraServices.includes(s.label)}
//                       onChange={() => toggleService(s.label)}
//                       className="mr-2"
//                     />
//                     {s.label}
//                   </span>
//                   <span>
//                     {s.price > 0 ? `₹${s.price}${s.unit}` : s.unit}
//                   </span>
//                 </label>
//               ))}

//               {/* TOTAL PRICE */}
//               <div className="flex justify-between mt-6 text-2xl border-t pt-4">
//                 <span>Total Price</span>
//                 <span className="text-[#af7b4f] font-bold">
//                   ₹{calculateTotal()}
//                 </span>
//               </div>

//               <button
//                 type="submit"
//                 disabled={bookingStatus === "loading"}
//                 className={`w-full mt-5 py-2 text-white rounded text-2xl ${
//                   bookingStatus === "loading"
//                     ? "bg-gray-500"
//                     : "bg-[#af7b4f] hover:bg-[#8c6439]"
//                 }`}
//               >
//                 {bookingStatus === "loading" ? "Booking..." : "Book Now"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }








// import React, { useEffect, useState } from "react";
// import moment from "moment";

// // Extra services
// const EXTRA_SERVICES = [
//   { label: "Room Clean", price: 10, unit: "/ Night" },
//   { label: "Parking", price: 0, unit: "Free" },
//   { label: "Airport Transport", price: 20, unit: "/ Night" },
//   { label: "Pet Friendly", price: 15, unit: "/ Night" },
// ];

// export default function BookNow() {
//   const [rooms, setRooms] = useState([]);
//   const [selectedRoomId, setSelectedRoomId] = useState("");
//   const [checkIn, setCheckIn] = useState(moment().format("YYYY-MM-DD"));
//   const [checkOut, setCheckOut] = useState(moment().add(1, "days").format("YYYY-MM-DD"));
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [extraBed, setExtraBed] = useState(0);
//   const [selectedExtraServices, setSelectedExtraServices] = useState([]);
//   const [bookingStatus, setBookingStatus] = useState(null);

//   const selectedRoom = rooms.find((room) => room.id === parseInt(selectedRoomId));
//   const numNights = moment(checkOut).diff(moment(checkIn), "days");

//   const calculateTotal = () => {
//     const basePrice = selectedRoom ? selectedRoom.price : 0;
//     const servicesPrice = selectedExtraServices.reduce((sum, label) => {
//       const service = EXTRA_SERVICES.find((s) => s.label === label);
//       return sum + (service ? service.price : 0);
//     }, 0);
//     return ((basePrice + servicesPrice) * (numNights > 0 ? numNights : 1)).toFixed(2);
//   };

//   useEffect(() => {
//     fetch("http://localhost:8080/api/admin/rooms")
//       .then((res) => res.json())
//       .then((data) => {
//         setRooms(data);
//         if (data.length > 0) setSelectedRoomId(data[0].id.toString());
//       })
//       .catch((err) => console.error("Error fetching rooms:", err));
//   }, []);

//   const toggleService = (label) => {
//     setSelectedExtraServices((prev) =>
//       prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedRoomId) return alert("Please select a room.");
//     if (numNights < 1) return alert("Check-out must be after check-in.");

//     setBookingStatus("loading");

//     const bookingData = {
//       userId: 1, // Replace with actual user ID
//       roomId: parseInt(selectedRoomId),
//       checkInDate: checkIn,
//       checkOutDate: checkOut,
//       adults: parseInt(adults),
//       children: parseInt(children),
//       extraBed: parseInt(extraBed),
//       extraServices: selectedExtraServices,
//       totalPrice: parseFloat(calculateTotal()),
//     };

//     try {
//       const response = await fetch("http://localhost:8080/api/bookings/create-with-pdf", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) throw new Error(await response.text());

//       const pdfBlob = await response.blob();
//       const pdfURL = URL.createObjectURL(pdfBlob);
//       const link = document.createElement("a");
//       link.href = pdfURL;
//       link.download = `booking_${Date.now()}.pdf`;
//       link.click();
//       URL.revokeObjectURL(pdfURL);

//       setBookingStatus("success");
//       alert("Booking successful! PDF downloaded.");
//     } catch (err) {
//       console.error("Booking failed:", err);
//       setBookingStatus("error");
//       alert("Booking failed: " + err.message);
//     }
//   };

//   return (
//     <div className="font-serif text-gray-800">
//       {/* Hero */}
//       <div
//         className="relative bg-cover bg-center h-[400px]"
//         style={{ backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')" }}
//       ></div>

//       {/* Booking Section */}
//       <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh]">
//         <div className="grid lg:grid-cols-3 gap-10">
//           {/* Left Column: Room Details */}
//           <div className="lg:col-span-2 h-[150vh] overflow-y-scroll scrollbar-hide pr-2">
//             <h2 className="text-5xl text-[#af7b4f]">
//               {selectedRoom ? `${selectedRoom.price} ₹ / Night` : "---"}
//             </h2>
//             <h1 className="text-6xl mt-5 mb-4">{selectedRoom ? selectedRoom.roomName : "Select Room"}</h1>
//             <p className="text-gray-600 mb-8 text-xl">
//               {selectedRoom?.type || "Comfortable and elegant rooms."}
//             </p>

//             {/* Room Images */}
//             <div className="grid sm:grid-cols-2 gap-4 mb-12">
//               {selectedRoom?.images?.map((img, i) => (
//                 <img key={i} src={img} alt={`${selectedRoom.roomName} ${i + 1}`} className="rounded-md object-cover w-full h-140" />
//               ))}
//             </div>

//             {/* Room Amenities */}
//             <h2 className="text-4xl mb-6">Room Amenities</h2>
//             <div className="grid grid-cols-3 gap-6 mb-10">
//               <div className="flex items-center gap-5">
//                 <img src="https://html.themewant.com/moonlit/assets/images/icon/wifi.svg" alt="Wifi" className="w-9 h-9" />
//                 <span className="text-xl">Free Wifi</span>
//               </div>
//               <div className="flex items-center gap-5">
//                 <img src="https://html.themewant.com/moonlit/assets/images/icon/shower.svg" alt="Shower" className="w-9 h-9" />
//                 <span className="text-xl">Shower</span>
//               </div>
//               <div className="flex items-center gap-5">
//                 <img src="https://html.themewant.com/moonlit/assets/images/icon/aeroplane.svg" alt="Airport Transport" className="w-9 h-9" />
//                 <span className="text-xl">Airport Transport</span>
//               </div>
//             </div>

//             {/* Room Features */}
//             <h2 className="text-4xl mb-6">Room Features</h2>
//             <img src="https://html.themewant.com/moonlit/assets/images/pages/room/3.webp" alt="Room Features" className="rounded-md object-cover w-full h-140 mb-10" />
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[19px] mb-10">
//               {["Children and extra beds", "Climate Control", "Art and Decor", "Coffee/Tea Maker", "High-End Bedding", "Smart Technology"].map((feature, i) => (
//                 <div key={i} className="flex items-start gap-4">
//                   <span className="mt-3 w-2 h-2 rounded-full bg-[#a1865e]"></span>
//                   <span>{feature}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column: Booking Form */}
//           <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
//             <h3 className="text-3xl text-center mb-7">Book Your Stay</h3>
//             <form className="space-y-4 text-xl" onSubmit={handleSubmit}>
//               <div>
//                 <label>Check In</label>
//                 <input type="date" value={checkIn} min={moment().format("YYYY-MM-DD")} onChange={e => setCheckIn(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Check Out</label>
//                 <input type="date" value={checkOut} min={moment(checkIn).add(1, "days").format("YYYY-MM-DD")} onChange={e => setCheckOut(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Room Type</label>
//                 <select value={selectedRoomId} onChange={e => setSelectedRoomId(e.target.value)} className="w-full border px-3 py-2 rounded bg-white">
//                   {rooms.map((room) => (
//                     <option key={room.id} value={room.id}>
//                       {room.roomName} — ₹{room.price}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label>Adults</label>
//                 <input type="number" min={1} value={adults} onChange={e => setAdults(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Children</label>
//                 <input type="number" min={0} value={children} onChange={e => setChildren(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Extra Bed</label>
//                 <input type="number" min={0} value={extraBed} onChange={e => setExtraBed(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>

//               {/* Extra Services */}
//               <h4 className="text-3xl text-center mt-6 mb-4">Extra Services</h4>
//               {EXTRA_SERVICES.map((s, i) => (
//                 <label key={i} className="flex justify-between mt-3 text-xl">
//                   <span>
//                     <input type="checkbox" checked={selectedExtraServices.includes(s.label)} onChange={() => toggleService(s.label)} className="mr-2" />
//                     {s.label}
//                   </span>
//                   <span>{s.price > 0 ? `₹${s.price}${s.unit}` : s.unit}</span>
//                 </label>
//               ))}

//               {/* Total Price */}
//               <div className="flex justify-between mt-6 text-2xl border-t pt-4">
//                 <span>Total Price</span>
//                 <span className="text-[#af7b4f] font-bold">₹{calculateTotal()}</span>
//               </div>

//               <button type="submit" disabled={bookingStatus === "loading"} className={`w-full mt-5 py-2 text-white rounded text-2xl ${bookingStatus === "loading" ? "bg-gray-500" : "bg-[#af7b4f] hover:bg-[#8c6439]"}`}>
//                 {bookingStatus === "loading" ? "Booking..." : "Book Your Room"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       {/* Similar Rooms */}
//       <section className="bg-white pt-0 pb-16 px-4 sm:px-6 md:px-24">
//         <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-900 mb-10">
//           Similar Rooms
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
//           {[
//             { name: "Executive Room", price: "12000₹", img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp" },
//             { name: "Single Room", price: "3999₹", img: "https://html.themewant.com/moonlit/assets/images/pages/room/2.webp" },
//             { name: "Triple Room", price: "12999₹", img: "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp" },
//           ].map((room, index) => (
//             <div key={index} className="font-serif border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
//               <img src={room.img} alt={room.name} className="w-full h-74 object-cover transition-transform duration-500 hover:scale-105" />
//               <div className="p-4">
//                 <h3 className="text-3xl">{room.name}</h3>
//                 <div className="mt-4 mb-4 text-2xl text-gray-500">{room.price}</div>
//                 <a href="#" className="text-[#b86e2e] border-b text-lg border-[#b86e2e] w-fit hover:text-[#a15d20] transition">
//                   Discover More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <style>{`
//         .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//       `}</style>
//     </div>
//   );
// }



// import React, { useEffect, useState } from "react";
// import moment from "moment";

// // Extra services
// const EXTRA_SERVICES = [
//   { label: "Room Clean", price: 10, unit: "/ Night" },
//   { label: "Parking", price: 0, unit: "Free" },
//   { label: "Airport Transport", price: 20, unit: "/ Night" },
//   { label: "Pet Friendly", price: 15, unit: "/ Night" },
// ];

// export default function BookNow() {
//   const [rooms, setRooms] = useState([]);
//   const [selectedRoomId, setSelectedRoomId] = useState("");
//   const [checkIn, setCheckIn] = useState(moment().format("YYYY-MM-DD"));
//   const [checkOut, setCheckOut] = useState(moment().add(1, "days").format("YYYY-MM-DD"));
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [extraBed, setExtraBed] = useState(0);
//   const [selectedExtraServices, setSelectedExtraServices] = useState([]);
//   const [bookingStatus, setBookingStatus] = useState(null);

//   const selectedRoom = rooms.find((room) => room._id === selectedRoomId);
//   const numNights = moment(checkOut).diff(moment(checkIn), "days");

//   const calculateTotal = () => {
//     const basePrice = selectedRoom ? selectedRoom.price : 0;
//     const servicesPrice = selectedExtraServices.reduce((sum, label) => {
//       const service = EXTRA_SERVICES.find((s) => s.label === label);
//       return sum + (service ? service.price : 0);
//     }, 0);
//     const total = ((basePrice + servicesPrice + extraBed * 300) * (numNights > 0 ? numNights : 1));
//     return total.toFixed(2);
//   };

//   useEffect(() => {
//     fetch("http://localhost:5000/api/admin/rooms")
//       .then((res) => res.json())
//       .then((data) => {
//         setRooms(data);
//         if (data.length > 0) setSelectedRoomId(data[0]._id);
//       })
//       .catch((err) => console.error("Error fetching rooms:", err));
//   }, []);

//   const toggleService = (label) => {
//     setSelectedExtraServices((prev) =>
//       prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedRoomId) return alert("Please select a room.");
//     if (numNights < 1) return alert("Check-out must be after check-in.");

//     setBookingStatus("loading");

//     const bookingData = {
//       userId: "YOUR_USER_ID_HERE", // Replace with actual user ID from auth
//       roomId: selectedRoomId,
//       checkInDate: checkIn,
//       checkOutDate: checkOut,
//       adults: parseInt(adults),
//       children: parseInt(children),
//       extraBed: parseInt(extraBed),
//       serviceIds: selectedExtraServices, // Send labels; backend should map to ExtraService IDs
//       totalPrice: parseFloat(calculateTotal()),
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/bookings/book", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) throw new Error(await response.text());

//       const result = await response.json();
//       console.log("Booking successful:", result);
//       setBookingStatus("success");
//       alert("Booking successful!");
//     } catch (err) {
//       console.error("Booking failed:", err);
//       setBookingStatus("error");
//       alert("Booking failed: " + err.message);
//     }
//   };

//   return (
//     <div className="font-serif text-gray-800">
//       <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh]">
//         <div className="grid lg:grid-cols-3 gap-10">
//           {/* Left Column: Room Details */}
//           <div className="lg:col-span-2 h-[150vh] overflow-y-scroll scrollbar-hide pr-2">
//             <h2 className="text-5xl text-[#af7b4f]">
//               {selectedRoom ? `${selectedRoom.price} ₹ / Night` : "---"}
//             </h2>
//             <h1 className="text-6xl mt-5 mb-4">{selectedRoom ? selectedRoom.roomName : "Select Room"}</h1>
//             <p className="text-gray-600 mb-8 text-xl">
//               {selectedRoom?.type || "Comfortable and elegant rooms."}
//             </p>
//           </div>

//           {/* Right Column: Booking Form */}
//           <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
//             <h3 className="text-3xl text-center mb-7">Book Your Stay</h3>
//             <form className="space-y-4 text-xl" onSubmit={handleSubmit}>
//               <div>
//                 <label>Check In</label>
//                 <input type="date" value={checkIn} min={moment().format("YYYY-MM-DD")} onChange={e => setCheckIn(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Check Out</label>
//                 <input type="date" value={checkOut} min={moment(checkIn).add(1, "days").format("YYYY-MM-DD")} onChange={e => setCheckOut(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Room Type</label>
//                 <select value={selectedRoomId} onChange={e => setSelectedRoomId(e.target.value)} className="w-full border px-3 py-2 rounded bg-white">
//                   {rooms.map((room) => (
//                     <option key={room._id} value={room._id}>
//                       {room.roomName} — ₹{room.price}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label>Adults</label>
//                 <input type="number" min={1} value={adults} onChange={e => setAdults(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Children</label>
//                 <input type="number" min={0} value={children} onChange={e => setChildren(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Extra Bed</label>
//                 <input type="number" min={0} value={extraBed} onChange={e => setExtraBed(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>

//               {/* Extra Services */}
//               <h4 className="text-3xl text-center mt-6 mb-4">Extra Services</h4>
//               {EXTRA_SERVICES.map((s, i) => (
//                 <label key={i} className="flex justify-between mt-3 text-xl">
//                   <span>
//                     <input type="checkbox" checked={selectedExtraServices.includes(s.label)} onChange={() => toggleService(s.label)} className="mr-2" />
//                     {s.label}
//                   </span>
//                   <span>{s.price > 0 ? `₹${s.price}${s.unit}` : s.unit}</span>
//                 </label>
//               ))}

//               {/* Total Price */}
//               <div className="flex justify-between mt-6 text-2xl border-t pt-4">
//                 <span>Total Price</span>
//                 <span className="text-[#af7b4f] font-bold">₹{calculateTotal()}</span>
//               </div>

//               <button type="submit" disabled={bookingStatus === "loading"} className={`w-full mt-5 py-2 text-white rounded text-2xl ${bookingStatus === "loading" ? "bg-gray-500" : "bg-[#af7b4f] hover:bg-[#8c6439]"}`}>
//                 {bookingStatus === "loading" ? "Booking..." : "Book Your Room"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <style>{`
//         .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//       `}</style>
//     </div>
//   );
// }




// import React, { useEffect, useState } from "react";
// import moment from "moment";

// // Extra services
// const EXTRA_SERVICES = [
//   { label: "Room Clean", price: 10, unit: "/ Night" },
//   { label: "Parking", price: 0, unit: "Free" },
//   { label: "Airport Transport", price: 20, unit: "/ Night" },
//   { label: "Pet Friendly", price: 15, unit: "/ Night" },
// ];

// export default function BookNow() {
//   const [rooms, setRooms] = useState([]);
//   const [selectedRoomId, setSelectedRoomId] = useState("");
//   const [checkIn, setCheckIn] = useState(moment().format("YYYY-MM-DD"));
//   const [checkOut, setCheckOut] = useState(moment().add(1, "days").format("YYYY-MM-DD"));
//   const [adults, setAdults] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [extraBed, setExtraBed] = useState(0);
//   const [selectedExtraServices, setSelectedExtraServices] = useState([]);
//   const [bookingStatus, setBookingStatus] = useState(null);
//   const [testUser, setTestUser] = useState(null); // Logged-in test user

//   const selectedRoom = rooms.find((room) => room._id === selectedRoomId);
//   const numNights = moment(checkOut).diff(moment(checkIn), "days");

//   const calculateTotal = () => {
//     const basePrice = selectedRoom ? selectedRoom.price : 0;
//     const servicesPrice = selectedExtraServices.reduce((sum, label) => {
//       const service = EXTRA_SERVICES.find((s) => s.label === label);
//       return sum + (service ? service.price : 0);
//     }, 0);
//     return ((basePrice + servicesPrice + extraBed * 300) * (numNights > 0 ? numNights : 1)).toFixed(2);
//   };

//   // Fetch rooms
//   useEffect(() => {
//     fetch("http://localhost:5000/api/admin/rooms")
//       .then((res) => res.json())
//       .then((data) => {
//         setRooms(data);
//         if (data.length > 0) setSelectedRoomId(data[0]._id);
//       })
//       .catch((err) => console.error("Error fetching rooms:", err));
//   }, []);

//   // Automatically login or create test user
//   useEffect(() => {
//     const testEmail = "testuser@example.com";
//     const testPassword = "123456";

//     fetch("http://localhost:5000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email: testEmail, password: testPassword }),
//     })
//       .then(async (res) => {
//         if (res.ok) return res.json();
//         // If login fails, register user
//         const regRes = await fetch("http://localhost:5000/api/auth/register", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({
//             name: "Test User",
//             email: testEmail,
//             password: testPassword,
//           }),
//         });
//         return regRes.json();
//       })
//       .then((data) => {
//         setTestUser(data.userId || data.user?._id);
//       })
//       .catch((err) => console.error("Error creating/fetching test user:", err));
//   }, []);

//   const toggleService = (label) => {
//     setSelectedExtraServices((prev) =>
//       prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
//     );
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!selectedRoomId) return alert("Please select a room.");
//     if (!testUser) return alert("User not ready yet, try again.");
//     if (numNights < 1) return alert("Check-out must be after check-in.");

//     setBookingStatus("loading");

//     const bookingData = {
//       userId: testUser,
//       roomId: selectedRoomId,
//       checkInDate: checkIn,
//       checkOutDate: checkOut,
//       adults: parseInt(adults),
//       children: parseInt(children),
//       extraBed: parseInt(extraBed),
//       serviceIds: selectedExtraServices,
//       totalPrice: parseFloat(calculateTotal()),
//     };

//     try {
//       const response = await fetch("http://localhost:5000/api/bookings/book", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       if (!response.ok) throw new Error(await response.text());

//       const result = await response.json();
//       console.log("Booking successful:", result);
//       setBookingStatus("success");
//       alert("Booking successful!");
//     } catch (err) {
//       console.error("Booking failed:", err);
//       setBookingStatus("error");
//       alert("Booking failed: " + err.message);
//     }
//   };

//   return (
//     <div className="font-serif text-gray-800">
//       <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh]">
//         <div className="grid lg:grid-cols-3 gap-10">
//           {/* Left Column */}
//           <div className="lg:col-span-2 h-[150vh] overflow-y-scroll scrollbar-hide pr-2">
//             {selectedRoom?.images?.[0] && (
//               <img
//                 src={selectedRoom.images[0]}
//                 alt={selectedRoom.roomName}
//                 className="w-full h-96 object-cover rounded mb-6"
//               />
//             )}
//             <h2 className="text-5xl text-[#af7b4f]">
//               {selectedRoom ? `${selectedRoom.price} ₹ / Night` : "---"}
//             </h2>
//             <h1 className="text-6xl mt-5 mb-4">{selectedRoom ? selectedRoom.roomName : "Select Room"}</h1>
//             <p className="text-gray-600 mb-8 text-xl">
//               {selectedRoom?.type || "Comfortable and elegant rooms."}
//             </p>
//           </div>

//           {/* Right Column: Booking Form */}
//           <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
//             <h3 className="text-3xl text-center mb-7">Book Your Stay</h3>
//             <form className="space-y-4 text-xl" onSubmit={handleSubmit}>
//               <div>
//                 <label>Check In</label>
//                 <input type="date" value={checkIn} min={moment().format("YYYY-MM-DD")} onChange={e => setCheckIn(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Check Out</label>
//                 <input type="date" value={checkOut} min={moment(checkIn).add(1, "days").format("YYYY-MM-DD")} onChange={e => setCheckOut(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Room Type</label>
//                 <select value={selectedRoomId} onChange={e => setSelectedRoomId(e.target.value)} className="w-full border px-3 py-2 rounded bg-white">
//                   {rooms.map((room) => (
//                     <option key={room._id} value={room._id}>
//                       {room.roomName} — ₹{room.price}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label>Adults</label>
//                 <input type="number" min={1} value={adults} onChange={e => setAdults(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Children</label>
//                 <input type="number" min={0} value={children} onChange={e => setChildren(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>
//               <div>
//                 <label>Extra Bed</label>
//                 <input type="number" min={0} value={extraBed} onChange={e => setExtraBed(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
//               </div>

//               <h4 className="text-3xl text-center mt-6 mb-4">Extra Services</h4>
//               {EXTRA_SERVICES.map((s, i) => (
//                 <label key={i} className="flex justify-between mt-3 text-xl">
//                   <span>
//                     <input type="checkbox" checked={selectedExtraServices.includes(s.label)} onChange={() => toggleService(s.label)} className="mr-2" />
//                     {s.label}
//                   </span>
//                   <span>{s.price > 0 ? `₹${s.price}${s.unit}` : s.unit}</span>
//                 </label>
//               ))}

//               <div className="flex justify-between mt-6 text-2xl border-t pt-4">
//                 <span>Total Price</span>
//                 <span className="text-[#af7b4f] font-bold">₹{calculateTotal()}</span>
//               </div>

//               <button type="submit" disabled={bookingStatus === "loading"} className={`w-full mt-5 py-2 text-white rounded text-2xl ${bookingStatus === "loading" ? "bg-gray-500" : "bg-[#af7b4f] hover:bg-[#8c6439]"}`}>
//                 {bookingStatus === "loading" ? "Booking..." : "Book Your Room"}
//               </button>
//             </form>
//           </div>
//         </div>
//       </section>

//       <style>{`
//         .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
//         .scrollbar-hide::-webkit-scrollbar { display: none; }
//       `}</style>
//     </div>
//   );
// }


import React, { useEffect, useState } from "react";
import moment from "moment";

const EXTRA_SERVICES = [
  { label: "Room Clean", price: 10, unit: "/ Night" },
  { label: "Parking", price: 0, unit: "Free" },
  { label: "Airport Transport", price: 20, unit: "/ Night" },
  { label: "Pet Friendly", price: 15, unit: "/ Night" },
];

export default function BookNow() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [checkIn, setCheckIn] = useState(moment().format("YYYY-MM-DD"));
  const [checkOut, setCheckOut] = useState(moment().add(1, "days").format("YYYY-MM-DD"));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [extraBed, setExtraBed] = useState(0);
  const [selectedExtraServices, setSelectedExtraServices] = useState([]);
  const [bookingStatus, setBookingStatus] = useState(null);

  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const selectedRoom = rooms.find((room) => room._id === selectedRoomId);
  const numNights = moment(checkOut).diff(moment(checkIn), "days");

  const calculateTotal = () => {
    const basePrice = selectedRoom ? selectedRoom.price : 0;
    const servicesPrice = selectedExtraServices.reduce((sum, label) => {
      const service = EXTRA_SERVICES.find((s) => s.label === label);
      return sum + (service ? service.price : 0);
    }, 0);
    return ((basePrice + servicesPrice) * (numNights > 0 ? numNights : 1)).toFixed(2);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/admin/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        if (data.length > 0) setSelectedRoomId(data[0]._id);
      })
      .catch((err) => console.error("Error fetching rooms:", err));
  }, []);

  const toggleService = (label) => {
    setSelectedExtraServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.id) return alert("Please log in first to book a room.");
    if (!selectedRoomId) return alert("Please select a room.");
    if (numNights < 1) return alert("Check-out must be after check-in.");

    setBookingStatus("loading");

    const bookingData = {
      userId: user.id,
      roomId: selectedRoomId,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      adults: parseInt(adults),
      children: parseInt(children),
      extraBed: parseInt(extraBed),
      extraServices: selectedExtraServices,
      totalPrice: parseFloat(calculateTotal()),
    };

    try {
      const response = await fetch("http://localhost:5000/api/bookings/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const contentType = response.headers.get("content-type");

      if (contentType?.includes("application/pdf")) {
        const pdfBlob = await response.blob();
        const pdfURL = URL.createObjectURL(pdfBlob);
        const link = document.createElement("a");
        link.href = pdfURL;
        link.download = `booking_${Date.now()}.pdf`;
        link.click();
        URL.revokeObjectURL(pdfURL);
        setBookingStatus("success");
        alert("Booking successful! PDF downloaded.");
      } else {
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Booking failed");
        setBookingStatus("success");
        alert(data.message || "Booking successful!");
      }
    } catch (err) {
      console.error("Booking failed:", err);
      setBookingStatus("error");
      alert("Booking failed: " + err.message);
    }
  };

  return (
    <div className="font-serif text-gray-800">
      {!user ? (
        <div className="text-center mt-10 text-2xl text-red-600">
          Please log in first to book a room.
        </div>
      ) : (
        <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh]">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 h-[150vh] overflow-y-scroll scrollbar-hide pr-2">
              <h2 className="text-5xl text-[#af7b4f]">
                {selectedRoom ? `${selectedRoom.price} ₹ / Night` : "---"}
              </h2>
              <h1 className="text-6xl mt-5 mb-4">{selectedRoom ? selectedRoom.roomName : "Select Room"}</h1>
              <p className="text-gray-600 mb-8 text-xl">{selectedRoom?.type || "Comfortable and elegant rooms."}</p>
            </div>

            <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
              <h3 className="text-3xl text-center mb-7">Book Your Stay</h3>
              <form className="space-y-4 text-xl" onSubmit={handleSubmit}>
                {/* Check-in / Check-out */}
                <div>
                  <label>Check In</label>
                  <input
                    type="date"
                    value={checkIn}
                    min={moment().format("YYYY-MM-DD")}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full border px-3 py-2 rounded bg-white"
                  />
                </div>
                <div>
                  <label>Check Out</label>
                  <input
                    type="date"
                    value={checkOut}
                    min={moment(checkIn).add(1, "days").format("YYYY-MM-DD")}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full border px-3 py-2 rounded bg-white"
                  />
                </div>

                {/* Room Selection */}
                <div>
                  <label>Room Type</label>
                  <select
                    value={selectedRoomId}
                    onChange={(e) => setSelectedRoomId(e.target.value)}
                    className="w-full border px-3 py-2 rounded bg-white"
                  >
                    {rooms.map((room) => (
                      <option key={room._id} value={room._id}>
                        {room.roomName} — ₹{room.price}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guests & Extra Bed */}
                <div>
                  <label>Adults</label>
                  <input type="number" min={1} value={adults} onChange={(e) => setAdults(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
                </div>
                <div>
                  <label>Children</label>
                  <input type="number" min={0} value={children} onChange={(e) => setChildren(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
                </div>
                <div>
                  <label>Extra Bed</label>
                  <input type="number" min={0} value={extraBed} onChange={(e) => setExtraBed(e.target.value)} className="w-full border px-3 py-2 rounded bg-white" />
                </div>

                {/* Extra Services */}
                <h4 className="text-3xl text-center mt-6 mb-4">Extra Services</h4>
                {EXTRA_SERVICES.map((s, i) => (
                  <label key={i} className="flex justify-between mt-3 text-xl">
                    <span>
                      <input
                        type="checkbox"
                        checked={selectedExtraServices.includes(s.label)}
                        onChange={() => toggleService(s.label)}
                        className="mr-2"
                      />
                      {s.label}
                    </span>
                    <span>{s.price > 0 ? `₹${s.price}${s.unit}` : s.unit}</span>
                  </label>
                ))}

                {/* Total & Submit */}
                <div className="flex justify-between mt-6 text-2xl border-t pt-4">
                  <span>Total Price</span>
                  <span className="text-[#af7b4f] font-bold">₹{calculateTotal()}</span>
                </div>

                <button
                  type="submit"
                  disabled={bookingStatus === "loading"}
                  className={`w-full mt-5 py-2 text-white rounded text-2xl ${
                    bookingStatus === "loading" ? "bg-gray-500" : "bg-[#af7b4f] hover:bg-[#8c6439]"
                  }`}
                >
                  {bookingStatus === "loading" ? "Booking..." : "Book Your Room"}
                </button>
              </form>
            </div>
          </div>
        </section>
      )}

      <style>{`
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
