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

  // Fetch rooms from backend
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

      if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Create failed: ${errorText}`);
      }

      const created = await res.json();
      setRooms((prev) => [...prev, created]);
      setShowAddModal(false);
      setNewRoom({
        roomName: "",
        type: "",
        price: 0,
        status: "AVAILABLE",
      });
    } catch (err) {
      console.error("Error creating room:", err);
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
    <div className="p-4">
      <div className="mb-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Rooms Management</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Room
        </button>
      </div>

      {loading && <p>Loading rooms...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="bg-white shadow rounded overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th>ID</th>
              <th>Room Name</th>
              <th>Type</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room.id}>
                <td className="px-6 py-4">{room.id}</td>
                <td className="px-6 py-4">{room.roomName}</td>
                <td className="px-6 py-4">{room.type}</td>
                <td className="px-6 py-4">{room.price}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                      room.status
                    )}`}
                  >
                    {room.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 mr-2"
                    onClick={() => setEditingRoom(room)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(room.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {rooms.length === 0 && !loading && (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No rooms found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Add Room Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Add Room</h2>
            <form onSubmit={handleAddSubmit} className="space-y-3">
              <input
                type="text"
                name="roomName"
                value={newRoom.roomName}
                onChange={handleAddChange}
                placeholder="Room Name"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="type"
                value={newRoom.type}
                onChange={handleAddChange}
                placeholder="Type"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="number"
                name="price"
                value={newRoom.price}
                onChange={handleAddChange}
                placeholder="Price"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <select
                name="status"
                value={newRoom.status}
                onChange={handleAddChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="AVAILABLE">Available</option>
                <option value="OCCUPIED">Occupied</option>
                <option value="MAINTENANCE">Maintenance</option>
              </select>
              <div className="flex justify-end space-x-2 mt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Room Modal */}
      {editingRoom && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Edit Room</h2>
            <form onSubmit={handleEditSubmit} className="space-y-3">
              <input
                type="text"
                name="roomName"
                value={editingRoom.roomName}
                onChange={handleEditChange}
                placeholder="Room Name"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="text"
                name="type"
                value={editingRoom.type}
                onChange={handleEditChange}
                placeholder="Type"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <input
                type="number"
                name="price"
                value={editingRoom.price}
                onChange={handleEditChange}
                placeholder="Price"
                required
                className="w-full px-3 py-2 border rounded"
              />
              <select
                name="status"
                value={editingRoom.status}
                onChange={handleEditChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="AVAILABLE">Available</option>
                <option value="OCCUPIED">Occupied</option>
                <option value="MAINTENANCE">Maintenance</option>
              </select>
              <div className="flex justify-end space-x-2 mt-2">
                <button
                  type="button"
                  onClick={() => setEditingRoom(null)}
                  className="px-4 py-2 border rounded"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Update
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
