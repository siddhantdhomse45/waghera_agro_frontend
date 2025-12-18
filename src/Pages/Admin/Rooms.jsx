






import React, { useEffect, useState } from "react";

// ✅ API BASE URL (matches your Express setup)
const BASE_URL = "https://backend-waghera.onrender.com/api/admin/rooms";

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
    <div className="p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-3">
        <h1 className="text-2xl font-bold">Rooms Management</h1>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded self-start sm:self-auto"
        >
          + Add Room
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="overflow-x-auto">
        <table className="w-full border min-w-[600px] sm:min-w-full">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2 text-xs sm:text-sm">Room</th>
              <th className="border p-2 text-xs sm:text-sm">Type</th>
              <th className="border p-2 text-xs sm:text-sm">Price</th>
              <th className="border p-2 text-xs sm:text-sm">Status</th>
              <th className="border p-2 text-xs sm:text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr key={room._id}>
                <td className="border p-2 text-xs sm:text-sm">{room.roomName}</td>
                <td className="border p-2 text-xs sm:text-sm">{room.type}</td>
                <td className="border p-2 text-xs sm:text-sm">₹{room.price}</td>
                <td className="border p-2 text-xs sm:text-sm">{room.status}</td>
                <td className="border p-2 space-x-1 sm:space-x-2">
                  <button
                    onClick={() => openEdit(room)}
                    className="px-2 py-1 text-xs sm:text-sm bg-yellow-400 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(room._id)}
                    className="px-2 py-1 text-xs sm:text-sm bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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