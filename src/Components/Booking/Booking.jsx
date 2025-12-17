


// import React, { useState } from "react";
// import { FaCalendarAlt, FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Booking = () => {
//   const navigate = useNavigate();
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [adults, setAdults] = useState("");
//   const [children, setChildren] = useState("");
//   const [childAges, setChildAges] = useState([]);
//   const [selectedRooms, setSelectedRooms] = useState(null);
//   const [showRoomSelection, setShowRoomSelection] = useState(false);
//   const [error, setError] = useState("");
//   const [showAgeWarning, setShowAgeWarning] = useState(false);

//   const [roomType, setRoomType] = useState("");

//   const handleChildAgeChange = (index, value) => {
//     if (value !== "" && Number(value) > 17) {
//       setShowAgeWarning(true);
//       return;
//     } else if (error) {
//       setError("");
//     }

//     setChildAges((prevAges) => {
//       const newAges = [...prevAges];
//       newAges[index] = value;
//       return newAges;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!checkIn || !checkOut || !adults || children === "" || !roomType) {
//       setError("All fields are required.");
//       return;
//     }

//     if (Number(children) > 0) {
//       const hasEmptyAge = childAges.some(
//         (age) => age === "" || age === undefined
//       );
//       if (hasEmptyAge) {
//         setError("Please enter the age for all children.");
//         return;
//       }

//       const hasInvalidAge = childAges.some((age) => Number(age) >= 18);
//       if (hasInvalidAge) {
//         setError("Child age must be less than 18.");
//         return;
//       }
//     }

//     setError("");
//     setShowRoomSelection(true);
//   };

//   const handleRoomClick = (num) => {
//     setSelectedRooms(num);

//     navigate("/room-detail", {
//       state: {
//         checkIn,
//         checkOut,
//         adults,
//         children,
//         childAges,
//         rooms: num,
//         roomType,
//       },
//     });
//   };

//   const handleChildrenChange = (e) => {
//     const numChildren = Number(e.target.value);
//     setChildren(e.target.value);

//     if (numChildren > 0) {
//       const newAges = [...childAges];
//       if (newAges.length < numChildren) {
//         setChildAges([
//           ...newAges,
//           ...Array(numChildren - newAges.length).fill(""),
//         ]);
//       } else {
//         setChildAges(newAges.slice(0, numChildren));
//       }
//     } else {
//       setChildAges([]);
//     }
//   };

//   return (
//     <div className="px-2 sm:px-4 lg:px-6">
//       {!showRoomSelection ? (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded-[20px] px-6 py-6 w-full max-w-[1330px] mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-5"
//         >
//           {/* Check In */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Check In Date
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaCalendarAlt />
//               <input
//                 type="date"
//                 className="bg-transparent outline-none w-full"
//                 value={checkIn}
//                 min={new Date().toISOString().split("T")[0]}
//                 onChange={(e) => setCheckIn(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Check Out */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Check Out Date
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaCalendarAlt />
//               <input
//                 type="date"
//                 className="bg-transparent outline-none w-full"
//                 value={checkOut}
//                 min={checkIn || new Date().toISOString().split("T")[0]}
//                 onChange={(e) => setCheckOut(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Adults — MANUAL INPUT */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Adults
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaUser />
//               <input
//                 type="number"
//                 min="1"
//                 max="50"
//                 className="bg-transparent outline-none w-full"
//                 value={adults}
//                 onChange={(e) => setAdults(e.target.value)}
//                 placeholder="Enter number of adults"
//                 required
//               />
//             </div>
//           </div>

//           {/* Children — MANUAL INPUT */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Children
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaUser />
//               <input
//                 type="number"
//                 min="0"
//                 max="20"
//                 className="bg-transparent outline-none w-full"
//                 value={children}
//                 onChange={handleChildrenChange}
//                 placeholder="Enter number of children"
//                 required
//               />
//             </div>
//           </div>

//           {/* Child Ages */}
//           {Number(children) > 0 && (
//             <div className="w-full md:w-auto flex-1">
//               <label className="block text-base font-medium text-gray-800 mb-1">
//                 Child Age{Number(children) > 1 ? "s" : ""}
//               </label>
//               <div className="space-y-2">
//                 {Array.from({ length: Number(children) }).map((_, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md"
//                   >
//                     <span className="text-sm"> {index + 1}:</span>
//                     <input
//                       type="number"
//                       min="0"
//                       max="17"
//                       className="bg-transparent outline-none w-full"
//                       value={childAges[index] || ""}
//                       onChange={(e) =>
//                         handleChildAgeChange(index, e.target.value)
//                       }
//                       placeholder="Age"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Room Type */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Room Type
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <select
//                 className="bg-transparent outline-none w-full"
//                 value={roomType}
//                 onChange={(e) => setRoomType(e.target.value)}
//                 required
//               >
//                 <option value="">Select Room Type</option>
//                 <option value="Executive Room">Executive Room</option>
//                 <option value="Deluxe Room">Deluxe Room</option>
//                 <option value="Premium Room">Premium Room</option>
//                 <option value="Family Suite">Family Suite</option>
//               </select>
//             </div>
//           </div>

//           {/* SEARCH BUTTON */}
//           <div className="w-full md:w-auto">
//             <button
//               type="submit"
//               className="w-full md:w-auto bg-[#a8815e] text-white font-serif mt-6 px-6 py-3 rounded-md hover:bg-[#916c49] transition-all"
//             >
//               Search
//             </button>
//           </div>

//           {/* ERROR */}
//           {error && (
//             <div className="w-full text-red-600 text-center text-sm col-span-full mt-2">
//               {error}
//             </div>
//           )}
//         </form>
//       ) : (
//         <div className="bg-white shadow-xl rounded-[20px] px-6 py-8 w-full max-w-[600px] mx-auto text-center">
//           <h2 className="text-2xl font-serif text-gray-800 mb-3">
//             Select Number of Rooms
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Choose how many rooms you want to book
//           </p>

//           <div className="flex justify-center gap-4 mb-6">
//             {[1, 2, 3, 4].map((num) => (
//               <button
//                 key={num}
//                 type="button"
//                 onClick={() => handleRoomClick(num)}
//                 className="px-6 py-3 rounded-lg bg-[#f6efe7] text-gray-800 hover:bg-[#a8815e] hover:text-white font-medium transition-all"
//               >
//                 {num} Room { num > 1 ? "s" : ""}
//               </button>
//             ))}
//           </div>

//           <button
//             type="button"
//             className="mt-4 text-sm text-gray-500 underline"
//             onClick={() => setShowRoomSelection(false)}
//           >
//             Change search details
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Booking;



// import React, { useState } from "react";
// import { FaCalendarAlt, FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Booking = () => {
//   const navigate = useNavigate();
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [adults, setAdults] = useState("");
//   const [children, setChildren] = useState("");
//   const [childAges, setChildAges] = useState([]);
//   const [selectedRooms, setSelectedRooms] = useState(null);
//   const [showRoomSelection, setShowRoomSelection] = useState(false);
//   const [error, setError] = useState("");
//   const [showAgeWarning, setShowAgeWarning] = useState(false);

//   const [roomType, setRoomType] = useState("");

//   // 🔥 API CALL TO SPRING BOOT
//   const checkRoomAvailability = async () => {
//     try {
//       const response = await fetch("http://localhost:8080/api/availability", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//           checkIn,
//           checkOut,
//           adults: Number(adults),
//           children: Number(children),
//           childAges: childAges.map((age) => Number(age)),
//           roomType,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("API Error");
//       }

//       const data = await response.json();
//       setSelectedRooms(data); // store room list from backend
//       setShowRoomSelection(true); // show selection screen
//     } catch (err) {
//       console.error("Error fetching availability:", err);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   const handleChildAgeChange = (index, value) => {
//     if (value !== "" && Number(value) > 17) {
//       setShowAgeWarning(true);
//       return;
//     } else if (error) {
//       setError("");
//     }

//     setChildAges((prevAges) => {
//       const newAges = [...prevAges];
//       newAges[index] = value;
//       return newAges;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!checkIn || !checkOut || !adults || children === "" || !roomType) {
//       setError("All fields are required.");
//       return;
//     }

//     if (Number(children) > 0) {
//       const hasEmptyAge =
//         childAges.some((age) => age === "" || age === undefined);
//       if (hasEmptyAge) {
//         setError("Please enter the age for all children.");
//         return;
//       }

//       const hasInvalidAge = childAges.some((age) => Number(age) >= 18);
//       if (hasInvalidAge) {
//         setError("Child age must be less than 18.");
//         return;
//       }
//     }

//     setError("");
//     checkRoomAvailability(); // 🔥 CALL API
//   };

//   const handleRoomClick = (room) => {
//     navigate("/room-detail", {
//       state: {
//         checkIn,
//         checkOut,
//         adults,
//         children,
//         childAges,
//         roomType,
//         selectedRoom: room,
//       },
//     });
//   };

//   const handleChildrenChange = (e) => {
//     const numChildren = Number(e.target.value);
//     setChildren(e.target.value);

//     if (numChildren > 0) {
//       const newAges = [...childAges];
//       if (newAges.length < numChildren) {
//         setChildAges([
//           ...newAges,
//           ...Array(numChildren - newAges.length).fill(""),
//         ]);
//       } else {
//         setChildAges(newAges.slice(0, numChildren));
//       }
//     } else {
//       setChildAges([]);
//     }
//   };

//   return (
//     <div className="px-2 sm:px-4 lg:px-6">
//       {!showRoomSelection ? (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded-[20px] px-6 py-6 w-full max-w-[1330px] mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-5"
//         >

//           {/* Check In */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Check In Date
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaCalendarAlt />
//               <input
//                 type="date"
//                 className="bg-transparent outline-none w-full"
//                 value={checkIn}
//                 min={new Date().toISOString().split("T")[0]}
//                 onChange={(e) => setCheckIn(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Check Out */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Check Out Date
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaCalendarAlt />
//               <input
//                 type="date"
//                 className="bg-transparent outline-none w-full"
//                 value={checkOut}
//                 min={checkIn || new Date().toISOString().split("T")[0]}
//                 onChange={(e) => setCheckOut(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Adults */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Adults
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaUser />
//               <input
//                 type="number"
//                 min="1"
//                 max="50"
//                 className="bg-transparent outline-none w-full"
//                 value={adults}
//                 onChange={(e) => setAdults(e.target.value)}
//                 placeholder="Enter number of adults"
//                 required
//               />
//             </div>
//           </div>

//           {/* Children */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Children
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaUser />
//               <input
//                 type="number"
//                 min="0"
//                 max="20"
//                 className="bg-transparent outline-none w-full"
//                 value={children}
//                 onChange={handleChildrenChange}
//                 placeholder="Enter number of children"
//                 required
//               />
//             </div>
//           </div>

//           {/* Child Ages */}
//           {Number(children) > 0 && (
//             <div className="w-full md:w-auto flex-1">
//               <label className="block text-base font-medium text-gray-800 mb-1">
//                 Child Age{Number(children) > 1 ? "s" : ""}
//               </label>
//               <div className="space-y-2">
//                 {Array.from({ length: Number(children) }).map((_, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md"
//                   >
//                     <span className="text-sm"> {index + 1}:</span>
//                     <input
//                       type="number"
//                       min="0"
//                       max="17"
//                       className="bg-transparent outline-none w-full"
//                       value={childAges[index] || ""}
//                       onChange={(e) =>
//                         handleChildAgeChange(index, e.target.value)
//                       }
//                       placeholder="Age"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Room Type */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Room Type
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <select
//                 className="bg-transparent outline-none w-full"
//                 value={roomType}
//                 onChange={(e) => setRoomType(e.target.value)}
//                 required
//               >
//                 <option value="">Select Room Type</option>
//                 <option value="Executive Room">Executive Room</option>
//                 <option value="Deluxe Room">Deluxe Room</option>
//                 <option value="Premium Room">Premium Room</option>
//                 <option value="Family Suite">Family Suite</option>
//               </select>
//             </div>
//           </div>

//           {/* Search Button */}
//           <div className="w-full md:w-auto">
//             <button
//               type="submit"
//               className="w-full md:w-auto bg-[#a8815e] text-white font-serif mt-6 px-6 py-3 rounded-md hover:bg-[#916c49] transition-all"
//             >
//               Search
//             </button>
//           </div>

//           {/* ERROR */}
//           {error && (
//             <div className="w-full text-red-600 text-center text-sm col-span-full mt-2">
//               {error}
//             </div>
//           )}
//         </form>
//       ) : (
//         <div className="bg-white shadow-xl rounded-[20px] px-6 py-8 w-full max-w-[600px] mx-auto text-center">
//           <h2 className="text-2xl font-serif text-gray-800 mb-3">
//             Select Number of Rooms
//           </h2>
//           <p className="text-gray-600 mb-6">Choose how many rooms you want to book</p>

//           <div className="flex justify-center gap-4 mb-6">
//             {selectedRooms?.map((room) => (
//               <button
//                 key={room.id}
//                 type="button"
//                 onClick={() => handleRoomClick(room)}
//                 className="px-6 py-3 rounded-lg bg-[#f6efe7] text-gray-800 hover:bg-[#a8815e] hover:text-white font-medium transition-all"
//               >
//                 {room.roomName} – Rs {room.price}
//               </button>
//             ))}
//           </div>

//           <button
//             type="button"
//             className="mt-4 text-sm text-gray-500 underline"
//             onClick={() => setShowRoomSelection(false)}
//           >
//             Change search details
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Booking;




// import React, { useState } from "react";
// import { FaCalendarAlt, FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Booking = () => {
//   const navigate = useNavigate();
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [adults, setAdults] = useState("");
//   const [children, setChildren] = useState("");
//   const [childAges, setChildAges] = useState([]);
//   const [selectedRooms, setSelectedRooms] = useState(null);
//   const [showRoomSelection, setShowRoomSelection] = useState(false);
//   const [error, setError] = useState("");
//   const [showAgeWarning, setShowAgeWarning] = useState(false);

//   // 🔥 API CALL TO SPRING BOOT WITHOUT roomType
//   const checkRoomAvailability = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/availability/", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },

//         body: JSON.stringify({
//           checkIn,
//           checkOut,
//           adults: Number(adults),
//           children: Number(children),
//           childAges: childAges.map((age) => Number(age)),
//         }),
//       });

//       if (!response.ok) throw new Error("API Error");

//       const data = await response.json();
//       setSelectedRooms(data);
//       setShowRoomSelection(true);
//     } catch (err) {
//       console.error("Error fetching availability:", err);
//       setError("Something went wrong. Please try again.");
//     }
//   };

//   const handleChildAgeChange = (index, value) => {
//     if (value !== "" && Number(value) > 17) {
//       setShowAgeWarning(true);
//       return;
//     } else if (error) {
//       setError("");
//     }

//     setChildAges((prevAges) => {
//       const newAges = [...prevAges];
//       newAges[index] = value;
//       return newAges;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!checkIn || !checkOut || !adults || children === "") {
//       setError("All fields are required.");
//       return;
//     }

//     if (Number(children) > 0) {
//       const hasEmptyAge =
//         childAges.some((age) => age === "" || age === undefined);
//       if (hasEmptyAge) {
//         setError("Please enter the age for all children.");
//         return;
//       }

//       const hasInvalidAge = childAges.some((age) => Number(age) >= 18);
//       if (hasInvalidAge) {
//         setError("Child age must be less than 18.");
//         return;
//       }
//     }

//     setError("");
//     checkRoomAvailability(); // 🔥 CALL API
//   };

//   const handleRoomClick = (room) => {
//     navigate("/room-detail", {
//       state: {
//         checkIn,
//         checkOut,
//         adults,
//         children,
//         childAges,
//         selectedRoom: room,
//       },
//     });
//   };

//   const handleChildrenChange = (e) => {
//     const numChildren = Number(e.target.value);
//     setChildren(e.target.value);

//     if (numChildren > 0) {
//       const newAges = [...childAges];
//       if (newAges.length < numChildren) {
//         setChildAges([
//           ...newAges,
//           ...Array(numChildren - newAges.length).fill(""),
//         ]);
//       } else {
//         setChildAges(newAges.slice(0, numChildren));
//       }
//     } else {
//       setChildAges([]);
//     }
//   };

//   return (
//     <div className="px-2 sm:px-4 lg:px-6">
//       {!showRoomSelection ? (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded-[20px] px-6 py-6 w-full max-w-[1330px] mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-5"
//         >

//           {/* Check In */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Check In Date
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaCalendarAlt />
//               <input
//                 type="date"
//                 className="bg-transparent outline-none w-full"
//                 value={checkIn}
//                 min={new Date().toISOString().split("T")[0]}
//                 onChange={(e) => setCheckIn(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Check Out */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Check Out Date
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaCalendarAlt />
//               <input
//                 type="date"
//                 className="bg-transparent outline-none w-full"
//                 value={checkOut}
//                 min={checkIn || new Date().toISOString().split("T")[0]}
//                 onChange={(e) => setCheckOut(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           {/* Adults */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Adults
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaUser />
//               <input
//                 type="number"
//                 min="1"
//                 max="50"
//                 className="bg-transparent outline-none w-full"
//                 value={adults}
//                 onChange={(e) => setAdults(e.target.value)}
//                 placeholder="Enter number of adults"
//                 required
//               />
//             </div>
//           </div>

//           {/* Children */}
//           <div className="w-full md:w-auto flex-1">
//             <label className="block text-base font-medium text-gray-800 mb-1">
//               Children
//             </label>
//             <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
//               <FaUser />
//               <input
//                 type="number"
//                 min="0"
//                 max="20"
//                 className="bg-transparent outline-none w-full"
//                 value={children}
//                 onChange={handleChildrenChange}
//                 placeholder="Enter number of children"
//                 required
//               />
//             </div>
//           </div>

//           {/* Child Ages */}
//           {Number(children) > 0 && (
//             <div className="w-full md:w-auto flex-1">
//               <label className="block text-base font-medium text-gray-800 mb-1">
//                 Child Age{Number(children) > 1 ? "s" : ""}
//               </label>
//               <div className="space-y-2">
//                 {Array.from({ length: Number(children) }).map((_, index) => (
//                   <div
//                     key={index}
//                     className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md"
//                   >
//                     <span className="text-sm"> {index + 1}:</span>
//                     <input
//                       type="number"
//                       min="0"
//                       max="17"
//                       className="bg-transparent outline-none w-full"
//                       value={childAges[index] || ""}
//                       onChange={(e) =>
//                         handleChildAgeChange(index, e.target.value)
//                       }
//                       placeholder="Age"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {/* Search Button */}
//           <div className="w-full md:w-auto">
//             <button
//               type="submit"
//               className="w-full md:w-auto bg-[#a8815e] text-white font-serif mt-6 px-6 py-3 rounded-md hover:bg-[#916c49] transition-all"
//             >
//               Search
//             </button>
//           </div>

//           {/* Error */}
//           {error && (
//             <div className="w-full text-red-600 text-center text-sm col-span-full mt-2">
//               {error}
//             </div>
//           )}
//         </form>
//       ) : (
//         <div className="bg-white shadow-xl rounded-[20px] px-6 py-8 w-full max-w-[600px] mx-auto text-center">
//           <h2 className="text-2xl font-serif text-gray-800 mb-3">
//             Select Number of Rooms
//           </h2>
//           <p className="text-gray-600 mb-6">Choose how many rooms you want to book</p>

//           <div className="flex justify-center gap-4 mb-6">
//             {selectedRooms?.map((room) => (
//               <button
//                 key={room.id}
//                 type="button"
//                 onClick={() => handleRoomClick(room)}
//                 className="px-6 py-3 rounded-lg bg-[#f6efe7] text-gray-800 hover:bg-[#a8815e] hover:text-white font-medium transition-all"
//               >
//                 {room.roomName} – Rs {room.price}
//               </button>
//             ))}
//           </div>

//           <button
//             type="button"
//             className="mt-4 text-sm text-gray-500 underline"
//             onClick={() => setShowRoomSelection(false)}
//           >
//             Change search details
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Booking;


















// import React, { useState } from "react";
// import { FaCalendarAlt, FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Booking = () => {
//   const navigate = useNavigate();

//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [adults, setAdults] = useState("");
//   const [children, setChildren] = useState("");
//   const [childAges, setChildAges] = useState([]);

//   const [selectedRooms, setSelectedRooms] = useState([]);
//   const [showRoomSelection, setShowRoomSelection] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ✅ API CALL (NODE + EXPRESS)
//   const checkRoomAvailability = async () => {
//     try {
//       setLoading(true);

//       const response = await fetch("http://localhost:5000/api/availability", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           checkInDate: checkIn,
//           checkOutDate: checkOut,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch availability");
//       }

//       const data = await response.json();

//       setSelectedRooms(data.rooms || []);
//       setShowRoomSelection(true);
//     } catch (err) {
//       console.error(err);
//       setError("Unable to fetch available rooms. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!checkIn || !checkOut || !adults || children === "") {
//       setError("All fields are required.");
//       return;
//     }

//     if (Number(children) > 0) {
//       const hasEmptyAge = childAges.some(
//         (age) => age === "" || age === undefined
//       );
//       if (hasEmptyAge) {
//         setError("Please enter age for all children.");
//         return;
//       }

//       const invalidAge = childAges.some((age) => Number(age) >= 18);
//       if (invalidAge) {
//         setError("Child age must be below 18.");
//         return;
//       }
//     }

//     setError("");
//     checkRoomAvailability();
//   };

//   const handleRoomClick = (room) => {
//     navigate("/room-detail", {
//       state: {
//         checkIn,
//         checkOut,
//         adults,
//         children,
//         childAges,
//         selectedRoom: room,
//       },
//     });
//   };

//   const handleChildrenChange = (e) => {
//     const value = Number(e.target.value);
//     setChildren(e.target.value);

//     if (value > 0) {
//       setChildAges(Array(value).fill(""));
//     } else {
//       setChildAges([]);
//     }
//   };

//   return (
//     <div className="px-2 sm:px-4 lg:px-6">
//       {!showRoomSelection ? (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded-[20px] px-6 py-6 w-full max-w-[1330px] mx-auto flex flex-col md:flex-row md:items-center gap-6"
//         >
//           {/* Check In */}
//           <div className="flex-1">
//             <label className="block font-medium mb-1">Check In</label>
//             <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
//               <FaCalendarAlt />
//               <input
//                 type="date"
//                 value={checkIn}
//                 min={new Date().toISOString().split("T")[0]}
//                 onChange={(e) => setCheckIn(e.target.value)}
//                 className="w-full outline-none"
//                 required
//               />
//             </div>
//           </div>

//           {/* Check Out */}
//           <div className="flex-1">
//             <label className="block font-medium mb-1">Check Out</label>
//             <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
//               <FaCalendarAlt />
//               <input
//                 type="date"
//                 value={checkOut}
//                 min={checkIn}
//                 onChange={(e) => setCheckOut(e.target.value)}
//                 className="w-full outline-none"
//                 required
//               />
//             </div>
//           </div>

//           {/* Adults */}
//           <div className="flex-1">
//             <label className="block font-medium mb-1">Adults</label>
//             <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
//               <FaUser />
//               <input
//                 type="number"
//                 min="1"
//                 value={adults}
//                 onChange={(e) => setAdults(e.target.value)}
//                 className="w-full outline-none"
//                 required
//               />
//             </div>
//           </div>

//           {/* Children */}
//           <div className="flex-1">
//             <label className="block font-medium mb-1">Children</label>
//             <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
//               <FaUser />
//               <input
//                 type="number"
//                 min="0"
//                 value={children}
//                 onChange={handleChildrenChange}
//                 className="w-full outline-none"
//                 required
//               />
//             </div>
//           </div>

//           {/* Search */}
//           <div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#a8815e] text-white px-6 py-3 rounded-md mt-6 hover:bg-[#916c49]"
//             >
//               {loading ? "Searching..." : "Search"}
//             </button>
//           </div>

//           {error && (
//             <p className="text-red-600 text-sm w-full text-center">{error}</p>
//           )}
//         </form>
//       ) : (
//         <div className="bg-white shadow-xl rounded-[20px] px-6 py-8 max-w-[700px] mx-auto text-center">
//           <h2 className="text-2xl font-serif mb-4">
//             Available Rooms
//           </h2>

//           <div className="flex flex-wrap justify-center gap-4">
//             {selectedRooms.length > 0 ? (
//               selectedRooms.map((room) => (
//                 <button
//                   key={room._id}
//                   onClick={() => handleRoomClick(room)}
//                   className="px-6 py-3 rounded-lg bg-[#f6efe7] hover:bg-[#a8815e] hover:text-white"
//                 >
//                   Room {room.roomNumber} – ₹{room.price}
//                 </button>
//               ))
//             ) : (
//               <p className="text-gray-500">No rooms available</p>
//             )}
//           </div>

//           <button
//             className="mt-6 text-sm underline text-gray-500"
//             onClick={() => setShowRoomSelection(false)}
//           >
//             Change search
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Booking;





























// import React, { useState } from "react";
// import { FaCalendarAlt, FaUser } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Booking = () => {
//   const navigate = useNavigate();

//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [adults, setAdults] = useState("");
//   const [children, setChildren] = useState("");
//   const [childAges, setChildAges] = useState([]);

//   const [selectedRooms, setSelectedRooms] = useState([]);
//   const [showRoomSelection, setShowRoomSelection] = useState(false);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   // ✅ API CALL (FIXED)
//   const checkRoomAvailability = async () => {
//     try {
//       setLoading(true);

//       const response = await fetch("http://localhost:5000/api/availability", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           checkInDate: checkIn,
//           checkOutDate: checkOut,
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to fetch availability");
//       }

//       const data = await response.json();

//       // 🔥 IMPORTANT FIX (Backend returns ARRAY)
//       setSelectedRooms(Array.isArray(data) ? data : []);
//       setShowRoomSelection(true);
//     } catch (err) {
//       console.error(err);
//       setError("Unable to fetch available rooms. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!checkIn || !checkOut || !adults || children === "") {
//       setError("All fields are required.");
//       return;
//     }

//     setError("");
//     checkRoomAvailability();
//   };

//   const handleRoomClick = (room) => {
//     navigate("/room-detail", {
//       state: {
//         checkIn,
//         checkOut,
//         adults,
//         children,
//         childAges,
//         selectedRoom: room,
//       },
//     });
//   };

//   const handleChildrenChange = (e) => {
//     const value = Number(e.target.value);
//     setChildren(e.target.value);

//     if (value > 0) {
//       setChildAges(Array(value).fill(""));
//     } else {
//       setChildAges([]);
//     }
//   };

//   return (
//     <div className="px-2 sm:px-4 lg:px-6">
//       {!showRoomSelection ? (
//         <form
//           onSubmit={handleSubmit}
//           className="bg-white shadow-md rounded-[20px] px-6 py-6 w-full max-w-[1330px] mx-auto flex flex-col md:flex-row md:items-center gap-6"
//         >
//           {/* Check In */}
//           <div className="flex-1">
//             <label className="block font-medium mb-1">Check In</label>
//             <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
//               <FaCalendarAlt />
//               <input
//                 type="date"
//                 value={checkIn}
//                 min={new Date().toISOString().split("T")[0]}
//                 onChange={(e) => setCheckIn(e.target.value)}
//                 className="w-full outline-none"
//                 required
//               />
//             </div>
//           </div>

//           {/* Check Out */}
//           <div className="flex-1">
//             <label className="block font-medium mb-1">Check Out</label>
//             <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
//               <FaCalendarAlt />
//               <input
//                 type="date"
//                 value={checkOut}
//                 min={checkIn}
//                 onChange={(e) => setCheckOut(e.target.value)}
//                 className="w-full outline-none"
//                 required
//               />
//             </div>
//           </div>

//           {/* Adults */}
//           <div className="flex-1">
//             <label className="block font-medium mb-1">Adults</label>
//             <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
//               <FaUser />
//               <input
//                 type="number"
//                 min="1"
//                 value={adults}
//                 onChange={(e) => setAdults(e.target.value)}
//                 className="w-full outline-none"
//                 required
//               />
//             </div>
//           </div>

//           {/* Children */}
//           <div className="flex-1">
//             <label className="block font-medium mb-1">Children</label>
//             <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
//               <FaUser />
//               <input
//                 type="number"
//                 min="0"
//                 value={children}
//                 onChange={handleChildrenChange}
//                 className="w-full outline-none"
//                 required
//               />
//             </div>
//           </div>

//           {/* Search */}
//           <div>
//             <button
//               type="submit"
//               disabled={loading}
//               className="bg-[#a8815e] text-white px-6 py-3 rounded-md mt-6 hover:bg-[#916c49]"
//             >
//               {loading ? "Searching..." : "Search"}
//             </button>
//           </div>

//           {error && (
//             <p className="text-red-600 text-sm w-full text-center">{error}</p>
//           )}
//         </form>
//       ) : (
//         <div className="bg-white shadow-xl rounded-[20px] px-6 py-8 max-w-[700px] mx-auto text-center">
//           <h2 className="text-2xl font-serif mb-4">Available Rooms</h2>

//           <div className="flex flex-wrap justify-center gap-4">
//             {selectedRooms.length > 0 ? (
//               selectedRooms.map((room) => (
//                 <button
//                   key={room._id}
//                   onClick={() => handleRoomClick(room)}
//                   className="px-6 py-3 rounded-lg bg-[#f6efe7] hover:bg-[#a8815e] hover:text-white"
//                 >
//                   Room {room.roomNumber} – ₹{room.price}
//                 </button>
//               ))
//             ) : (
//               <p className="text-gray-500">No rooms available</p>
//             )}
//           </div>

//           <button
//             className="mt-6 text-sm underline text-gray-500"
//             onClick={() => setShowRoomSelection(false)}
//           >
//             Change search
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Booking;









































import React, { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [childAges, setChildAges] = useState([]);

  const [selectedRooms, setSelectedRooms] = useState([]);
  const [showRoomSelection, setShowRoomSelection] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // ✅ API CALL
  const checkRoomAvailability = async () => {
    try {
      setLoading(true);

      const response = await fetch("http://localhost:5000/api/availability", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          checkInDate: checkIn,
          checkOutDate: checkOut,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch availability");
      }

      const data = await response.json();

      // ✅ BACKEND RETURNS ARRAY
      setSelectedRooms(Array.isArray(data) ? data : []);
      setShowRoomSelection(true);
    } catch (err) {
      console.error(err);
      setError("Unable to fetch available rooms. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut || !adults || children === "") {
      setError("All fields are required.");
      return;
    }

    if (Number(children) > 0) {
      const hasEmptyAge = childAges.some(
        (age) => age === "" || age === undefined
      );
      if (hasEmptyAge) {
        setError("Please enter age for all children.");
        return;
      }

      const invalidAge = childAges.some((age) => Number(age) >= 18);
      if (invalidAge) {
        setError("Child age must be below 18.");
        return;
      }
    }

    setError("");
    checkRoomAvailability();
  };

  const handleRoomClick = (room) => {
    navigate("/room-detail", {
      state: {
        checkIn,
        checkOut,
        adults,
        children,
        childAges,
        selectedRoom: room,
      },
    });
  };

  const handleChildrenChange = (e) => {
    const value = Number(e.target.value);
    setChildren(e.target.value);

    if (value > 0) {
      setChildAges(Array(value).fill(""));
    } else {
      setChildAges([]);
    }
  };

  const handleChildAgeChange = (index, value) => {
    const updatedAges = [...childAges];
    updatedAges[index] = value;
    setChildAges(updatedAges);
  };

  return (
    <div className="px-2 sm:px-4 lg:px-6">
      {!showRoomSelection ? (
        /* ================= SEARCH FORM ================= */
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-[20px] px-6 py-6 w-full max-w-[1330px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-6"
        >
          {/* Check In */}
          <div>
            <label className="block font-medium mb-1">Check In</label>
            <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
              <FaCalendarAlt />
              <input
                type="date"
                value={checkIn}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Check Out */}
          <div>
            <label className="block font-medium mb-1">Check Out</label>
            <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
              <FaCalendarAlt />
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Adults */}
          <div>
            <label className="block font-medium mb-1">Adults</label>
            <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
              <FaUser />
              <input
                type="number"
                min="1"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Children */}
          <div>
            <label className="block font-medium mb-1">Children</label>
            <div className="flex items-center gap-2 border px-3 py-2 rounded-md">
              <FaUser />
              <input
                type="number"
                min="0"
                value={children}
                onChange={handleChildrenChange}
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Search */}
          <div className="flex items-end">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#a8815e] text-white px-6 py-3 rounded-md hover:bg-[#916c49]"
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>

          {/* Child Ages */}
          {Number(children) > 0 && (
            <div className="md:col-span-5">
              <label className="block font-medium mb-2">Child Ages</label>
              <div className="flex flex-wrap gap-3">
                {childAges.map((age, index) => (
                  <input
                    key={index}
                    type="number"
                    min="0"
                    max="17"
                    value={age}
                    onChange={(e) =>
                      handleChildAgeChange(index, e.target.value)
                    }
                    className="w-20 border px-3 py-2 rounded-md outline-none"
                    placeholder={`Age ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          )}

          {error && (
            <p className="text-red-600 text-sm md:col-span-5 text-center">
              {error}
            </p>
          )}
        </form>
      ) : (
        /* ================= ROOM RESULTS ================= */
        <div className="bg-white shadow-xl rounded-[20px] px-6 py-8 max-w-[900px] mx-auto text-center">
          <h2 className="text-2xl font-serif mb-6">Available Rooms</h2>

          <div className="flex flex-wrap justify-center gap-4">
            {selectedRooms.length > 0 ? (
              selectedRooms.map((room) => (
                <button
                  key={room._id}
                  onClick={() => handleRoomClick(room)}
                  className="px-6 py-4 rounded-lg bg-[#f6efe7] hover:bg-[#a8815e] hover:text-white transition"
                >
                  <div className="font-semibold text-lg">
                    {room.roomName || room.name || "Room"}
                  </div>
                  <div className="text-sm mt-1">
                    ₹{room.price} / night
                  </div>
                </button>
              ))
            ) : (
              <p className="text-gray-500">No rooms available</p>
            )}
          </div>

          <button
            className="mt-6 text-sm underline text-gray-500"
            onClick={() => setShowRoomSelection(false)}
          >
            Change search
          </button>
        </div>
      )}
    </div>
  );
};

export default Booking;
