// import React, { useState, useEffect } from "react";

// const BASE_URL = "http://localhost:8080/api/admin/rooms";

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [editingRoom, setEditingRoom] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [newRoom, setNewRoom] = useState({
//     roomName: "",
//     type: "",
//     price: 0,
//     status: "AVAILABLE",
//   });

//   // Fetch rooms
//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(BASE_URL);
//         if (!res.ok) throw new Error("Failed to load rooms");
//         const data = await res.json();
//         setRooms(data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load rooms");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRooms();
//   }, []);

//   const getStatusClass = (status) => {
//     switch (status) {
//       case "AVAILABLE":
//         return "bg-green-100 text-green-800";
//       case "OCCUPIED":
//         return "bg-yellow-100 text-yellow-800";
//       case "MAINTENANCE":
//         return "bg-red-100 text-red-800";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const handleAddChange = (e) => {
//     const { name, value } = e.target;
//     setNewRoom((prev) => ({
//       ...prev,
//       [name]: name === "price" ? Number(value) : value.toUpperCase(),
//     }));
//   };

//   const handleAddSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       roomName: newRoom.roomName.trim(),
//       type: newRoom.type.trim(),
//       price: Number(newRoom.price),
//       status: newRoom.status,
//     };
//     try {
//       const res = await fetch(BASE_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       if (!res.ok) throw new Error(await res.text());
//       const created = await res.json();
//       setRooms((prev) => [...prev, created]);
//       setShowAddModal(false);
//       setNewRoom({ roomName: "", type: "", price: 0, status: "AVAILABLE" });
//     } catch (err) {
//       console.error(err);
//       alert(`Failed to create room: ${err.message}`);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this room?")) return;
//     try {
//       const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Delete failed");
//       setRooms((prev) => prev.filter((room) => room.id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete room");
//     }
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditingRoom((prev) => ({
//       ...prev,
//       [name]: name === "price" ? Number(value) : value.toUpperCase(),
//     }));
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${BASE_URL}/${editingRoom.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(editingRoom),
//       });
//       if (!res.ok) throw new Error("Update failed");
//       const updated = await res.json();
//       setRooms((prev) =>
//         prev.map((room) => (room.id === updated.id ? updated : room))
//       );
//       setEditingRoom(null);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update room");
//     }
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-800">
//           🏨 Rooms Management
//         </h1>
//         <button
//           onClick={() => setShowAddModal(true)}
//           className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all"
//         >
//           + Add Room
//         </button>
//       </div>

//       {loading && <p className="text-gray-500">Loading rooms...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded shadow-lg overflow-hidden">
//           <thead className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
//             <tr>
//               <th className="px-6 py-3 text-left">ID</th>
//               <th className="px-6 py-3 text-left">Room Name</th>
//               <th className="px-6 py-3 text-left">Type</th>
//               <th className="px-6 py-3 text-left">Price</th>
//               <th className="px-6 py-3 text-left">Status</th>
//               <th className="px-6 py-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {rooms.map((room) => (
//               <tr
//                 key={room.id}
//                 className="hover:bg-gray-100 transition-colors"
//               >
//                 <td className="px-6 py-4">{room.id}</td>
//                 <td className="px-6 py-4 font-semibold">{room.roomName}</td>
//                 <td className="px-6 py-4">{room.type}</td>
//                 <td className="px-6 py-4">${room.price}</td>
//                 <td className="px-6 py-4">
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(
//                       room.status
//                     )}`}
//                   >
//                     {room.status}
//                   </span>
//                 </td>
//                 <td className="px-6 py-4 flex gap-2">
//                   <button
//                     className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded hover:bg-yellow-300 transition"
//                     onClick={() => setEditingRoom(room)}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="px-3 py-1 bg-red-200 text-red-800 rounded hover:bg-red-300 transition"
//                     onClick={() => handleDelete(room.id)}
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//             {rooms.length === 0 && !loading && (
//               <tr>
//                 <td colSpan={6} className="text-center py-6 text-gray-400">
//                   No rooms found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Modal Overlay */}
//       {(showAddModal || editingRoom) && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl w-96 p-6 animate-fadeIn">
//             <h2 className="text-xl font-bold mb-4">
//               {showAddModal ? "Add Room" : "Edit Room"}
//             </h2>
//             <form
//               onSubmit={showAddModal ? handleAddSubmit : handleEditSubmit}
//               className="space-y-3"
//             >
//               <input
//                 type="text"
//                 name="roomName"
//                 value={showAddModal ? newRoom.roomName : editingRoom.roomName}
//                 onChange={showAddModal ? handleAddChange : handleEditChange}
//                 placeholder="Room Name"
//                 required
//                 className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <input
//                 type="text"
//                 name="type"
//                 value={showAddModal ? newRoom.type : editingRoom.type}
//                 onChange={showAddModal ? handleAddChange : handleEditChange}
//                 placeholder="Type"
//                 required
//                 className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <input
//                 type="number"
//                 name="price"
//                 value={showAddModal ? newRoom.price : editingRoom.price}
//                 onChange={showAddModal ? handleAddChange : handleEditChange}
//                 placeholder="Price"
//                 required
//                 className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <select
//                 name="status"
//                 value={showAddModal ? newRoom.status : editingRoom.status}
//                 onChange={showAddModal ? handleAddChange : handleEditChange}
//                 className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
//               >
//                 <option value="AVAILABLE">Available</option>
//                 <option value="OCCUPIED">Occupied</option>
//                 <option value="MAINTENANCE">Maintenance</option>
//               </select>
//               <div className="flex justify-end gap-2 mt-2">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowAddModal(false);
//                     setEditingRoom(null);
//                   }}
//                   className="px-4 py-2 border rounded hover:bg-gray-100 transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
//                 >
//                   {showAddModal ? "Save" : "Update"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rooms;





// import React, { useState, useEffect } from "react";

// const BASE_URL = "http://localhost:5000/api/admin/rooms";

// const Rooms = () => {
//   const [rooms, setRooms] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [editingRoom, setEditingRoom] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [newRoom, setNewRoom] = useState({
//     roomName: "",
//     type: "",
//     price: 0,
//     status: "AVAILABLE",
//   });

//   // Fetch rooms
//   useEffect(() => {
//     const fetchRooms = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(BASE_URL);
//         if (!res.ok) throw new Error("Failed to load rooms");
//         const data = await res.json();
//         setRooms(data);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to load rooms");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRooms();
//   }, []);

//   const getStatusClass = (status) => {
//     switch (status) {
//       case "AVAILABLE":
//         return "bg-[#e8f3e8] text-[#2e7d32]";
//       case "OCCUPIED":
//         return "bg-[#fff8e1] text-[#f57f17]";
//       case "MAINTENANCE":
//         return "bg-[#ffebee] text-[#c62828]";
//       default:
//         return "bg-gray-100 text-gray-800";
//     }
//   };

//   const handleAddChange = (e) => {
//     const { name, value } = e.target;
//     setNewRoom((prev) => ({
//       ...prev,
//       [name]: name === "price" ? Number(value) : value,
//     }));
//   };

//   const handleAddSubmit = async (e) => {
//     e.preventDefault();
//     const payload = {
//       roomName: newRoom.roomName.trim(),
//       type: newRoom.type.trim(),
//       price: Number(newRoom.price),
//       status: newRoom.status,
//     };
//     try {
//       const res = await fetch(BASE_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });
//       if (!res.ok) throw new Error(await res.text());
//       const created = await res.json();
//       setRooms((prev) => [...prev, created]);
//       setShowAddModal(false);
//       setNewRoom({ roomName: "", type: "", price: 0, status: "AVAILABLE" });
//     } catch (err) {
//       console.error(err);
//       alert(`Failed to create room: ${err.message}`);
//     }
//   };

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this room?")) return;
//     try {
//       const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
//       if (!res.ok) throw new Error("Delete failed");
//       setRooms((prev) => prev.filter((room) => room.id !== id));
//     } catch (err) {
//       console.error(err);
//       alert("Failed to delete room");
//     }
//   };

//   const handleEditChange = (e) => {
//     const { name, value } = e.target;
//     setEditingRoom((prev) => ({
//       ...prev,
//       [name]: name === "price" ? Number(value) : value,
//     }));
//   };

//   const handleEditSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch(`${BASE_URL}/${editingRoom.id}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(editingRoom),
//       });
//       if (!res.ok) throw new Error("Update failed");
//       const updated = await res.json();
//       setRooms((prev) =>
//         prev.map((room) => (room.id === updated.id ? updated : room))
//       );
//       setEditingRoom(null);
//     } catch (err) {
//       console.error(err);
//       alert("Failed to update room");
//     }
//   };

//   return (
//     <div className="p-6 bg-[#f8f5f0] min-h-screen">
//       <div className="flex justify-between items-center mb-6">
//         <div>
//           <h1 className="text-3xl font-bold text-[#5a4a3f]">
//             Rooms Management
//           </h1>
//           <p className="text-[#8a7a6f]">Manage hotel rooms and availability</p>
//         </div>
//         <button
//           onClick={() => setShowAddModal(true)}
//           className="px-5 py-2 bg-[#a8815e] text-white font-semibold rounded-lg shadow-md hover:bg-[#916c49] transition-all duration-300"
//         >
//           + Add Room
//         </button>
//       </div>

//       {loading && <p className="text-[#8a7a6f]">Loading rooms...</p>}
//       {error && <p className="text-red-500">{error}</p>}

//       <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full">
//             <thead className="bg-[#e8e0d4]">
//               <tr>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-[#5a4a3f] uppercase tracking-wider">ID</th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-[#5a4a3f] uppercase tracking-wider">Room Name</th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-[#5a4a3f] uppercase tracking-wider">Type</th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-[#5a4a3f] uppercase tracking-wider">Price</th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-[#5a4a3f] uppercase tracking-wider">Status</th>
//                 <th className="px-6 py-4 text-left text-sm font-semibold text-[#5a4a3f] uppercase tracking-wider">Actions</th>
//               </tr>
//             </thead>
//             <tbody className="divide-y divide-[#e8e0d4]">
//               {rooms.map((room) => (
//                 <tr
//                   key={room.id}
//                   className="hover:bg-[#f9f6f2] transition-colors"
//                 >
//                   <td className="px-6 py-4 text-[#5a4a3f] font-medium">#{room.id}</td>
//                   <td className="px-6 py-4 text-[#5a4a3f] font-semibold">{room.roomName}</td>
//                   <td className="px-6 py-4 text-[#8a7a6f]">{room.type}</td>
//                   <td className="px-6 py-4 text-[#5a4a3f] font-medium">${room.price}</td>
//                   <td className="px-6 py-4">
//                     <span
//                       className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusClass(
//                         room.status
//                       )}`}
//                     >
//                       {room.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 flex gap-2">
//                     <button
//                       className="px-3 py-1 bg-[#d6c2a8] text-[#5a4a3f] rounded-lg hover:bg-[#c5b095] transition"
//                       onClick={() => setEditingRoom(room)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="px-3 py-1 bg-[#e8b4b4] text-[#c62828] rounded-lg hover:bg-[#e0a0a0] transition"
//                       onClick={() => handleDelete(room.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//               {rooms.length === 0 && !loading && (
//                 <tr>
//                   <td colSpan={6} className="text-center py-8 text-[#8a7a6f]">
//                     No rooms found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* Modal Overlay */}
//       {(showAddModal || editingRoom) && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
//           <div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6 animate-fadeIn">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-[#5a4a3f]">
//                 {showAddModal ? "Add Room" : "Edit Room"}
//               </h2>
//               <button
//                 onClick={() => {
//                   setShowAddModal(false);
//                   setEditingRoom(null);
//                 }}
//                 className="text-[#8a7a6f] hover:text-[#5a4a3f]"
//               >
//                 ✕
//               </button>
//             </div>
//             <form
//               onSubmit={showAddModal ? handleAddSubmit : handleEditSubmit}
//               className="space-y-4"
//             >
//               <div>
//                 <label className="block text-sm font-medium text-[#5a4a3f] mb-1">Room Name</label>
//                 <input
//                   type="text"
//                   name="roomName"
//                   value={showAddModal ? newRoom.roomName : editingRoom.roomName}
//                   onChange={showAddModal ? handleAddChange : handleEditChange}
//                   placeholder="Room Name"
//                   required
//                   className="w-full px-4 py-2 border border-[#d6c2a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8815e] focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-[#5a4a3f] mb-1">Type</label>
//                 <input
//                   type="text"
//                   name="type"
//                   value={showAddModal ? newRoom.type : editingRoom.type}
//                   onChange={showAddModal ? handleAddChange : handleEditChange}
//                   placeholder="Type"
//                   required
//                   className="w-full px-4 py-2 border border-[#d6c2a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8815e] focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-[#5a4a3f] mb-1">Price</label>
//                 <input
//                   type="number"
//                   name="price"
//                   value={showAddModal ? newRoom.price : editingRoom.price}
//                   onChange={showAddModal ? handleAddChange : handleEditChange}
//                   placeholder="Price"
//                   required
//                   className="w-full px-4 py-2 border border-[#d6c2a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8815e] focus:border-transparent"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-[#5a4a3f] mb-1">Status</label>
//                 <select
//                   name="status"
//                   value={showAddModal ? newRoom.status : editingRoom.status}
//                   onChange={showAddModal ? handleAddChange : handleEditChange}
//                   className="w-full px-4 py-2 border border-[#d6c2a8] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a8815e] focus:border-transparent"
//                 >
//                   <option value="AVAILABLE">Available</option>
//                   <option value="OCCUPIED">Occupied</option>
//                   <option value="MAINTENANCE">Maintenance</option>
//                 </select>
//               </div>
//               <div className="flex justify-end gap-3 pt-2">
//                 <button
//                   type="button"
//                   onClick={() => {
//                     setShowAddModal(false);
//                     setEditingRoom(null);
//                   }}
//                   className="px-4 py-2 border border-[#d6c2a8] rounded-lg text-[#5a4a3f] hover:bg-[#f8f5f0] transition"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-[#a8815e] text-white rounded-lg shadow hover:bg-[#916c49] transition"
//                 >
//                   {showAddModal ? "Save" : "Update"}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Rooms;







import React, { useEffect, useState } from "react";

// ✅ API BASE URL (matches your Express setup)
const BASE_URL = "http://localhost:5000/api/admin/rooms";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);

  const emptyRoom = {
    roomName: "",
    type: "",
    price: "",
    status: "AVAILABLE",
  };

  const [formData, setFormData] = useState(emptyRoom);

  // ----------------------------
  // FETCH ALL ROOMS
  // ----------------------------
  const fetchRooms = async () => {
    try {
      setLoading(true);
      const res = await fetch(BASE_URL);
      if (!res.ok) throw new Error("Failed to fetch rooms");
      const data = await res.json();
      setRooms(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  // ----------------------------
  // HANDLE FORM CHANGE
  // ----------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ----------------------------
  // ADD ROOM
  // ----------------------------
  const handleAddRoom = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomName: formData.roomName,
          type: formData.type,
          price: Number(formData.price),
          status: formData.status,
        }),
      });

      if (!res.ok) throw new Error("Room creation failed");

      const result = await res.json();

      // 👇 backend returns { message, data }
      setRooms((prev) => [...prev, result.data]);
      setShowAddModal(false);
      setFormData(emptyRoom);
    } catch (err) {
      alert(err.message);
    }
  };

  // ----------------------------
  // UPDATE ROOM
  // ----------------------------
  const handleUpdateRoom = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/${editingRoom._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          roomName: formData.roomName,
          type: formData.type,
          price: Number(formData.price),
          status: formData.status,
        }),
      });

      if (!res.ok) throw new Error("Update failed");

      const updated = await res.json();

      setRooms((prev) =>
        prev.map((r) => (r._id === updated._id ? updated : r))
      );

      setEditingRoom(null);
      setFormData(emptyRoom);
    } catch (err) {
      alert(err.message);
    }
  };

  // ----------------------------
  // DELETE ROOM
  // ----------------------------
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this room?")) return;

    try {
      const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");

      setRooms((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  // ----------------------------
  // OPEN EDIT MODAL
  // ----------------------------
  const openEdit = (room) => {
    setEditingRoom(room);
    setFormData({
      roomName: room.roomName,
      type: room.type,
      price: room.price,
      status: room.status,
    });
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Rooms Management</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          + Add Room
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <table className="w-full border">
        <thead className="bg-gray-100">
          <tr>
            <th className="border p-2">Room</th>
            <th className="border p-2">Type</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map((room) => (
            <tr key={room._id}>
              <td className="border p-2">{room.roomName}</td>
              <td className="border p-2">{room.type}</td>
              <td className="border p-2">₹{room.price}</td>
              <td className="border p-2">{room.status}</td>
              <td className="border p-2 space-x-2">
                <button
                  onClick={() => openEdit(room)}
                  className="px-2 py-1 bg-yellow-400 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(room._id)}
                  className="px-2 py-1 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL */}
      {(showAddModal || editingRoom) && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <form
            onSubmit={editingRoom ? handleUpdateRoom : handleAddRoom}
            className="bg-white p-6 rounded w-96 space-y-3"
          >
            <h2 className="text-xl font-bold">
              {editingRoom ? "Edit Room" : "Add Room"}
            </h2>

            <input
              name="roomName"
              placeholder="Room Name"
              value={formData.roomName}
              onChange={handleChange}
              required
              className="w-full border p-2"
            />

            <input
              name="type"
              placeholder="Type"
              value={formData.type}
              onChange={handleChange}
              required
              className="w-full border p-2"
            />

            <input
              type="number"
              name="price"
              placeholder="Price"
              value={formData.price}
              onChange={handleChange}
              required
              className="w-full border p-2"
            />

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full border p-2"
            >
              <option value="AVAILABLE">AVAILABLE</option>
              <option value="OCCUPIED">OCCUPIED</option>
              <option value="MAINTENANCE">MAINTENANCE</option>
            </select>

            <div className="flex justify-end gap-2">
              <button
                type="button"
                onClick={() => {
                  setShowAddModal(false);
                  setEditingRoom(null);
                  setFormData(emptyRoom);
                }}
                className="px-3 py-1 border"
              >
                Cancel
              </button>
              <button type="submit" className="px-3 py-1 bg-blue-600 text-white">
                {editingRoom ? "Update" : "Save"}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Rooms;