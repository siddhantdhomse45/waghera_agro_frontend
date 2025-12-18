


import React, { useEffect, useState } from "react";

const API_BASE = "https://backend-waghera.onrender.com/api";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 🔹 Fetch ALL bookings (ADMIN)
  const fetchBookings = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API_BASE}/bookings`);
      const data = await res.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid response format");
      }

      const formatted = data.map((b) => ({
        id: b._id,
        customer: b.user?.name || "N/A",
        contact: b.user?.contact || "N/A",
        email: b.user?.email || "N/A",
        room: b.room?.roomName || "N/A",
        checkIn: new Date(b.checkInDate).toLocaleDateString(),
        checkOut: new Date(b.checkOutDate).toLocaleDateString(),
        adults: b.adults || 0,
        children: b.children || 0,
        extraBed: b.extraBed || 0,
        totalPrice: b.totalPrice || 0,
        status: "Confirmed",
      }));

      setBookings(formatted);
    } catch (err) {
      console.error(err);
      setError("Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const getStatusClass = () =>
    "bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs";

  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-2xl font-bold text-[#a8815e] mb-4">
        Bookings Management
      </h1>

      {loading && <p className="text-gray-500">Loading bookings...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && bookings.length === 0 && (
        <p className="text-gray-500">No bookings found.</p>
      )}

      {!loading && bookings.length > 0 && (
        <div className="overflow-x-auto bg-white shadow rounded-lg">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-2 sm:px-4 sm:py-2 text-left text-xs sm:text-sm">ID</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 text-left text-xs sm:text-sm">Customer</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 text-left text-xs sm:text-sm">Contact</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 text-left text-xs sm:text-sm">Email</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 text-left text-xs sm:text-sm">Room</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 text-left text-xs sm:text-sm">Check In</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 text-left text-xs sm:text-sm">Check Out</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 text-left text-xs sm:text-sm">Guests</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 text-left text-xs sm:text-sm">Price</th>
                <th className="px-2 py-2 sm:px-4 sm:py-2 text-left text-xs sm:text-sm">Status</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b) => (
                <tr key={b.id} className="border-t">
                  <td className="px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm">#{b.id.slice(-6)}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium">{b.customer}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm">{b.contact}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm">{b.email}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm">{b.room}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm">{b.checkIn}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm">{b.checkOut}</td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm">
                    <span className="inline-block sm:hidden">{b.adults}A/{b.children}C</span>
                    <span className="hidden sm:inline-block">{b.adults}A / {b.children}C</span>
                  </td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold">
                    ₹{b.totalPrice}
                  </td>
                  <td className="px-2 py-2 sm:px-4 sm:py-2">
                    <span className={`text-xs ${getStatusClass()}`}>{b.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Bookings;
