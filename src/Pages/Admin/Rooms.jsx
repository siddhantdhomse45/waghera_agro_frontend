import React, { useState, useEffect } from "react";

const BASE_URL = "http://localhost:8080/api/admin/rooms";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [editingRoom, setEditingRoom] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newRoom, setNewRoom] = useState({
    roomName: "",
    type: "",
    price: "",
    roomCount: 1,
    status: "Available",
  });

  // Load rooms from backend
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        setLoading(true);
        setError("");
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
      case "Available":
        return "bg-green-100 text-green-800";
      case "Occupied":
        return "bg-yellow-100 text-yellow-800";
      case "Maintenance":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleEdit = (room) => {
    setEditingRoom(room);
    setActiveMenu(null);
  };

  const handleDelete = (roomId) => {
    setShowDeleteModal(roomId);
    setActiveMenu(null);
  };

  const handleView = (room) => {
    alert(
      `Room #${room.id}
Name: ${room.roomName}
Type: ${room.type}
Price: ${room.price}
Count: ${room.roomCount}
Status: ${room.status}`
    );
    setActiveMenu(null);
  };

  const confirmDelete = async () => {
    if (!showDeleteModal) return;
    const id = showDeleteModal;
    try {
      const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Delete failed");
      setRooms((prev) => prev.filter((r) => r.id !== id));
      setShowDeleteModal(null);
    } catch (err) {
      console.error(err);
      alert("Failed to delete room");
    }
  };

  const cancelDelete = () => setShowDeleteModal(null);

  const updateRoom = async (updatedRoom) => {
    try {
      const res = await fetch(`${BASE_URL}/${updatedRoom.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedRoom),
      });
      if (!res.ok) throw new Error("Update failed");
      const saved = await res.json();
      setRooms((prev) => prev.map((r) => (r.id === saved.id ? saved : r)));
      setEditingRoom(null);
    } catch (err) {
      console.error(err);
      alert("Failed to update room");
    }
  };

  const toggleMenu = (roomId) => {
    setActiveMenu(activeMenu === roomId ? null : roomId);
  };

  // Add room handlers
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewRoom((prev) => ({
      ...prev,
      [name]: name === "roomCount" ? Number(value) : value,
    }));
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newRoom),
      });
      if (!res.ok) throw new Error("Create failed");
      const created = await res.json();
      setRooms((prev) => [...prev, created]);
      setShowAddModal(false);
      setNewRoom({
        roomName: "",
        type: "",
        price: "",
        roomCount: 1,
        status: "Available",
      });
    } catch (err) {
      console.error(err);
      alert("Failed to create room");
    }
  };

  return (
    <div className="p-4">
      {/* Header + Add Room button */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#a8815e]">Rooms Management</h1>
          <p className="text-gray-600">Manage hotel rooms and availability</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-[#a8815e] text-white rounded-md hover:bg-yellow-800"
        >
          Add Room
        </button>
      </div>

      {loading && (
        <p className="mb-4 text-sm text-gray-500">Loading rooms...</p>
      )}
      {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Room Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Count
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {rooms.map((room) => (
                <tr key={room.id}>
                  <td className="px-6 py-4 text-sm text-gray-500">#{room.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {room.roomName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {room.type}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {room.price}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {room.roomCount}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(
                        room.status
                      )}`}
                    >
                      {room.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500 relative">
                    <button
                      onClick={() => toggleMenu(room.id)}
                      className="text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </button>

                    {activeMenu === room.id && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1">
                          <button
                            onClick={() => handleView(room)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleEdit(room)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(room.id)}
                            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
              {!loading && rooms.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-6 py-4 text-center text-sm text-gray-500"
                  >
                    No rooms found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Room Modal */}
      {editingRoom && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md shadow-xl">
            <EditRoomForm
              room={editingRoom}
              onUpdate={updateRoom}
              onCancel={() => setEditingRoom(null)}
            />
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 shadow-xl">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Confirm Deletion
            </h3>
            <p className="text-gray-500 mb-6">
              Are you sure you want to delete this room?
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={cancelDelete}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Room Modal */}
      {showAddModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md shadow-xl">
            <h2 className="text-xl font-bold text-[#a8815e] mb-4">
              Add New Room
            </h2>
            <form onSubmit={handleAddSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Room Name
                </label>
                <input
                  type="text"
                  name="roomName"
                  value={newRoom.roomName}
                  onChange={handleAddChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Type
                </label>
                <input
                  type="text"
                  name="type"
                  value={newRoom.type}
                  onChange={handleAddChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price
                </label>
                <input
                  type="text"
                  name="price"
                  value={newRoom.price}
                  onChange={handleAddChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Room Count
                </label>
                <input
                  type="number"
                  min="1"
                  name="roomCount"
                  value={newRoom.roomCount}
                  onChange={handleAddChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={newRoom.status}
                  onChange={handleAddChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                >
                  <option value="Available">Available</option>
                  <option value="Occupied">Occupied</option>
                  <option value="Maintenance">Maintenance</option>
                </select>
              </div>
              <div className="flex justify-end space-x-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#a8815e] text-white rounded-md hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Edit Room Form
const EditRoomForm = ({ room, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({ ...room });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "roomCount" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-[#a8815e] mb-4">
        Edit Room #{room.id}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Room Name
            </label>
            <input
              type="text"
              name="roomName"
              value={formData.roomName}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Type
            </label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              type="text"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Room Count
            </label>
            <input
              type="number"
              min="1"
              name="roomCount"
              value={formData.roomCount}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
            >
              <option value="Available">Available</option>
              <option value="Occupied">Occupied</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#a8815e] text-white rounded-md hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
          >
            Update Room
          </button>
        </div>
      </form>
    </div>
  );
};

export default Rooms;
