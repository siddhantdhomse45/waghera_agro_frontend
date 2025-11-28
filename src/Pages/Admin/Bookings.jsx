import React, { useState } from "react";

const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customer: "John Doe",
      contactNumber: "9876543210",
      email: "john@example.com",
      room: "Deluxe Room",
      checkIn: "2023-06-15",
      checkOut: "2023-06-20",
      status: "Confirmed",
    },
    {
      id: 2,
      customer: "Jane Smith",
      contactNumber: "9123456780",
      email: "jane@example.com",
      room: "Executive Suite",
      checkIn: "2023-06-18",
      checkOut: "2023-06-25",
      status: "Pending",
    },
  ]);

  const [editingBooking, setEditingBooking] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newBooking, setNewBooking] = useState({
    customer: "",
    contactNumber: "",
    email: "",
    room: "",
    checkIn: "",
    checkOut: "",
    status: "Confirmed",
  });

  const getStatusClass = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-green-100 text-green-800";
      case "Pending":
        return "bg-yellow-100 text-yellow-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleEdit = (booking) => {
    setEditingBooking(booking);
    setActiveMenu(null);
  };

  const handleDelete = (bookingId) => {
    setShowDeleteModal(bookingId);
    setActiveMenu(null);
  };

  const handleView = (booking) => {
    alert(
      `Booking #${booking.id}
Customer: ${booking.customer}
Phone: ${booking.contactNumber}
Email: ${booking.email}
Room: ${booking.room}
Check-in: ${booking.checkIn}
Check-out: ${booking.checkOut}
Status: ${booking.status}`
    );
    setActiveMenu(null);
  };

  const confirmDelete = () => {
    if (!showDeleteModal) return;
    const id = showDeleteModal;
    setBookings((prev) => prev.filter((b) => b.id !== id));
    setShowDeleteModal(null);
  };

  const cancelDelete = () => setShowDeleteModal(null);

  const updateBooking = (updatedBooking) => {
    setBookings((prev) =>
      prev.map((b) => (b.id === updatedBooking.id ? updatedBooking : b))
    );
    setEditingBooking(null);
  };

  const toggleMenu = (bookingId) => {
    setActiveMenu((prev) => (prev === bookingId ? null : bookingId));
  };

  const handleAddBookingChange = (e) => {
    const { name, value } = e.target;
    setNewBooking((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddBookingSubmit = (e) => {
    e.preventDefault();
    const nextId = bookings.length
      ? Math.max(...bookings.map((b) => b.id)) + 1
      : 1;
    const bookingToAdd = { id: nextId, ...newBooking };
    setBookings((prev) => [...prev, bookingToAdd]);
    setNewBooking({
      customer: "",
      contactNumber: "",
      email: "",
      room: "",
      checkIn: "",
      checkOut: "",
      status: "Confirmed",
    });
    setShowAddModal(false);
  };

  return (
    <div className="p-4">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#a8815e]">
            Bookings Management
          </h1>
          <p className="text-gray-600">
            Admin can create, edit and cancel bookings for guests
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2 bg-[#a8815e] text-white rounded-md hover:bg-yellow-800"
        >
          New Booking
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  ID
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Customer
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Phone
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Email
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Room
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Check In
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Check Out
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    #{booking.id}
                  </td>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    {booking.customer}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {booking.contactNumber}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {booking.email}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {booking.room}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {booking.checkIn}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500">
                    {booking.checkOut}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(
                        booking.status
                      )}`}
                    >
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 relative">
                    <button
                      onClick={() => toggleMenu(booking.id)}
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

                    {activeMenu === booking.id && (
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                        <div className="py-1">
                          <button
                            onClick={() => handleView(booking)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            View
                          </button>
                          <button
                            onClick={() => handleEdit(booking)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(booking.id)}
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
              {bookings.length === 0 && (
                <tr>
                  <td
                    colSpan={9}
                    className="px-4 py-4 text-center text-sm text-gray-500"
                  >
                    No bookings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Booking Modal */}
      {editingBooking && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md shadow-xl">
            <EditBookingForm
              booking={editingBooking}
              onUpdate={updateBooking}
              onCancel={() => setEditingBooking(null)}
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
              Are you sure you want to delete this booking? This action cannot
              be undone.
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

      {/* Add Booking Modal */}
      {showAddModal && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-md shadow-xl">
            <h2 className="text-xl font-bold text-[#a8815e] mb-4">
              New Booking (Admin)
            </h2>
            <form onSubmit={handleAddBookingSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="customer"
                  value={newBooking.customer}
                  onChange={handleAddBookingChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={newBooking.contactNumber}
                  onChange={handleAddBookingChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email (optional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={newBooking.email}
                  onChange={handleAddBookingChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Room
                </label>
                <input
                  type="text"
                  name="room"
                  value={newBooking.room}
                  onChange={handleAddBookingChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check In
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={newBooking.checkIn}
                    onChange={handleAddBookingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check Out
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={newBooking.checkOut}
                    onChange={handleAddBookingChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <select
                  name="status"
                  value={newBooking.status}
                  onChange={handleAddBookingChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
                >
                  <option value="Confirmed">Confirmed</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
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
                  Add Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

// Edit Booking Form Component
const EditBookingForm = ({ booking, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({ ...booking });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-[#a8815e] mb-4">
        Edit Booking #{booking.id}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Customer
            </label>
            <input
              type="text"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Room
            </label>
            <input
              type="text"
              name="room"
              value={formData.room}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check In
            </label>
            <input
              type="date"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Check Out
            </label>
            <input
              type="date"
              name="checkOut"
              value={formData.checkOut}
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
              <option value="Confirmed">Confirmed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
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
            Update Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default Bookings;
