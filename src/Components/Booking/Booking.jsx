// import React, { useState } from "react";
import React, { useState, useRef } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";



const Booking = () => {
  const navigate = useNavigate();
const checkInRef = useRef(null);
const checkOutRef = useRef(null);
const [childrenWarning, setChildrenWarning] = useState("");

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

      const response = await fetch("https://backend-waghera.onrender.com/api/availability", {
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
  const value = e.target.value;

  // allow empty while typing
  if (value === "") {
    setChildren("");
    setChildAges([]);
    setChildrenWarning("");
    return;
  }

  const num = Number(value);

  // ❌ block invalid numbers
  if (isNaN(num) || num < 0) {
    return;
  }

  // ⚠️ show warning if above 5
  if (num > 5) {
    setChildrenWarning("Maximum 5 children allowed.");
    return;
  }

  // ✅ valid value
  setChildren(num);
  setChildrenWarning("");

  // sync child ages
  if (num > 0) {
    setChildAges(Array(num).fill(""));
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

  <div
    className="flex items-center gap-2 border px-3 py-2 rounded-md cursor-pointer"
    onClick={() => {
      checkInRef.current?.focus();
      checkInRef.current?.showPicker?.();
    }}
  >
    <FaCalendarAlt />

    <input
      ref={checkInRef}
      type="date"
      value={checkIn}
      min={new Date().toISOString().split("T")[0]}
      onChange={(e) => setCheckIn(e.target.value)}
      className="w-full outline-none cursor-pointer"
      required
    />
  </div>
</div>


          {/* Check Out */}
        <div>
  <label className="block font-medium mb-1">Check Out</label>

  <div
    className="flex items-center gap-2 border px-3 py-2 rounded-md cursor-pointer"
    onClick={() => {
      checkOutRef.current?.focus();
      checkOutRef.current?.showPicker?.();
    }}
  >
    <FaCalendarAlt />

    <input
      ref={checkOutRef}
      type="date"
      value={checkOut}
      min={checkIn}
      onChange={(e) => setCheckOut(e.target.value)}
      className="w-full outline-none cursor-pointer"
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
      max="5"
      value={children}
      onChange={handleChildrenChange}
      className="w-full outline-none"
      required
    />
  </div>

  {childrenWarning && (
    <p className="text-red-500 text-sm mt-1">
      {childrenWarning}
    </p>
  )}
</div>


          {/* Search */}
     {/* Child Ages */}
{Number(children) > 0 && (
  <div className="md:col-span-5">
    <label className="block font-medium mb-2">Child Ages</label>
    <div className="flex flex-wrap gap-3">
      {childAges.map((age, index) => (
        <input
          key={index}
          type="number"
          min="1"
          max="17"
          value={age}
          onChange={(e) => handleChildAgeChange(index, e.target.value)}
          className="w-20 border px-3 py-2 rounded-md outline-none"
          placeholder={`Age ${index + 1}`}
        />
      ))}
    </div>
  </div>
)}

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