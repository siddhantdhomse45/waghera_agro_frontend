// import React, { useState, useEffect } from "react";

// const BASE_URL = "http://localhost:8080/api/admin/rooms";

// const Rooms = () => {
//   const [rooms] = useState([
//     { id: 1, name: 'Deluxe Room', type: 'Double Bed', price: '$120/night', status: 'Available' },
//     { id: 2, name: 'Executive Suite', type: 'King Bed', price: '$200/night', status: 'Occupied' },
//     { id: 3, name: 'Family Cottage', type: 'Multiple Beds', price: '$180/night', status: 'Available' },
//     { id: 4, name: 'Luxury Villa', type: 'King Bed', price: '$300/night', status: 'Maintenance' },
//     { id: 5, name: 'Standard Room', type: 'Single Bed', price: '$80/night', status: 'Available' },
//   ]);

//   const getStatusClass = (status) => {
//     switch (status) {
//       case 'Available':
//         return 'bg-green-100 text-green-800';
//       case 'Occupied':
//         return 'bg-yellow-100 text-yellow-800';
//       case 'Maintenance':
//         return 'bg-red-100 text-red-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };

//   return (
//     <div className="p-4">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-gray-800">Rooms Management</h1>
//         <p className="text-gray-600">Manage hotel rooms and availability</p>
//       </div>

//       <div className="bg-white rounded-lg shadow overflow-hidden">
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   ID
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Room Name
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Type
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Price
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Actions
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {rooms.map((room) => (
//                 <tr key={room.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     #{room.id}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {room.name}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {room.type}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     {room.price}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(room.status)}`}>
//                       {room.status}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <button className="text-indigo-600 hover:text-indigo-900 mr-3">Edit</button>
//                     <button className="text-red-600 hover:text-red-900">Delete</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Rooms;
import React, { useState, useEffect } from "react";

const BASE_URL = "http://localhost:8080/api/admin/rooms";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [editingRoom, setEditingRoom] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newRoom, setNewRoom] = useState({
    roomName: "",
    type: "",
    price: 0,
    status: "AVAILABLE",
  });

  // Fetch rooms
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        const res = await fetch(BASE_URL);
        if (!res.ok) throw new Error("Failed to load rooms");
        const data = await res.json();
        setRooms(data);
      } catch (err) {
        console.error(err);
        setError("Failed to load rooms");
      } finally {
        setLoading(false);
      }
    };
    fetchRooms();
  }, []);

  const getStatusClass = (status) => {
    switch (status) {
      case "AVAILABLE":
        return "bg-green-100 text-green-800";
      case "OCCUPIED":
        return "bg-yellow-100 text-yellow-800";
      case "MAINTENANCE":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value.toUpperCase(),
    }));
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      roomName: newRoom.roomName.trim(),
      type: newRoom.type.trim(),
      price: Number(newRoom.price),
      status: newRoom.status,
    };
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      const created = await res.json();
      setRooms((prev) => [...prev, created]);
      setShowAddModal(false);
      setNewRoom({ roomName: "", type: "", price: 0, status: "AVAILABLE" });
    } catch (err) {
      console.error(err);
      alert(`Failed to create room: ${err.message}`);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this room?")) return;
    try {
      const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setRooms((prev) => prev.filter((room) => room.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete room");
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingRoom((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value.toUpperCase(),
    }));
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${BASE_URL}/${editingRoom.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editingRoom),
      });
      if (!res.ok) throw new Error("Update failed");
      const updated = await res.json();
      setRooms((prev) =>
        prev.map((room) => (room.id === updated.id ? updated : room))
      );
      setEditingRoom(null);
    } catch (err) {
      console.error(err);
      alert("Failed to update room");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          🏨 Rooms Management
        </h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all"
        >
          + Add Room
        </button>
      </div>

      {loading && <p className="text-gray-500">Loading rooms...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded shadow-lg overflow-hidden">
          <thead className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Room Name</th>
              <th className="px-6 py-3 text-left">Type</th>
              <th className="px-6 py-3 text-left">Price</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr
                key={room.id}
                className="hover:bg-gray-100 transition-colors"
              >
                <td className="px-6 py-4">{room.id}</td>
                <td className="px-6 py-4 font-semibold">{room.roomName}</td>
                <td className="px-6 py-4">{room.type}</td>
                <td className="px-6 py-4">${room.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusClass(
                      room.status
                    )}`}
                  >
                    {room.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button
                    className="px-3 py-1 bg-yellow-200 text-yellow-800 rounded hover:bg-yellow-300 transition"
                    onClick={() => setEditingRoom(room)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-200 text-red-800 rounded hover:bg-red-300 transition"
                    onClick={() => handleDelete(room.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {rooms.length === 0 && !loading && (
              <tr>
                <td colSpan={6} className="text-center py-6 text-gray-400">
                  No rooms found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal Overlay */}
      {(showAddModal || editingRoom) && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-96 p-6 animate-fadeIn">
            <h2 className="text-xl font-bold mb-4">
              {showAddModal ? "Add Room" : "Edit Room"}
            </h2>
            <form
              onSubmit={showAddModal ? handleAddSubmit : handleEditSubmit}
              className="space-y-3"
            >
              <input
                type="text"
                name="roomName"
                value={showAddModal ? newRoom.roomName : editingRoom.roomName}
                onChange={showAddModal ? handleAddChange : handleEditChange}
                placeholder="Room Name"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="text"
                name="type"
                value={showAddModal ? newRoom.type : editingRoom.type}
                onChange={showAddModal ? handleAddChange : handleEditChange}
                placeholder="Type"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="number"
                name="price"
                value={showAddModal ? newRoom.price : editingRoom.price}
                onChange={showAddModal ? handleAddChange : handleEditChange}
                placeholder="Price"
                required
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <select
                name="status"
                value={showAddModal ? newRoom.status : editingRoom.status}
                onChange={showAddModal ? handleAddChange : handleEditChange}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                <option value="AVAILABLE">Available</option>
                <option value="OCCUPIED">Occupied</option>
                <option value="MAINTENANCE">Maintenance</option>
              </select>
              <div className="flex justify-end gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddModal(false);
                    setEditingRoom(null);
                  }}
                  className="px-4 py-2 border rounded hover:bg-gray-100 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
                >
                  {showAddModal ? "Save" : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rooms;
