import React, { useState } from "react";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Booking = () => {
  const navigate = useNavigate();
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [childAges, setChildAges] = useState([]); // Array to store ages for each child
  const [selectedRooms, setSelectedRooms] = useState(null);
  const [showRoomSelection, setShowRoomSelection] = useState(false);
  const [error, setError] = useState("");

  // const [checkInTime, setCheckInTime] = useState("");
  // const [checkOutTime, setCheckOutTime] = useState("");

  const [showAgeWarning, setShowAgeWarning] = useState(false);

  const handleChildAgeChange = (index, value) => {
    if (value !== "" && Number(value) > 17) {
      setShowAgeWarning(true);
      return;
    } else if (error) {
      setError("");
    }

    setChildAges(prevAges => {
      const newAges = [...prevAges];
      newAges[index] = value;
      return newAges;
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if (!checkIn || !checkOut || !adults || children === "") {
      setError("All fields are required.");
      return;
    }

    // Check if children are selected but ages are not provided
    if (Number(children) > 0) {
      const hasEmptyAge = childAges.some(age => age === "" || age === undefined);
      if (hasEmptyAge) {
        setError("Please enter the age for all children.");
        return;
      }

      // Check if any child age is 18 or greater
      const hasInvalidAge = childAges.some(age => Number(age) >= 18);
      if (hasInvalidAge) {
        setError("Child age must be less than 18 years.");
        return;
      }
    }

    setError("");
    setShowRoomSelection(true);
  };

  const handleRoomClick = (num) => {
    setSelectedRooms(num);

    // Navigate to Rooms page and pass search data
    navigate("/room-detail", {
      state: {
        checkIn,
        checkOut,
        adults,
        children,
        childAges,
        rooms: num,
      },
    });
  };

  // Update child ages when number of children changes
  const handleChildrenChange = (e) => {
    const numChildren = Number(e.target.value);
    setChildren(e.target.value);

    // Initialize or adjust childAges array based on number of children
    if (numChildren > 0) {
      setChildAges(prevAges => {
        const newAges = [...prevAges];
        // Extend or shrink array to match number of children
        if (newAges.length < numChildren) {
          // Add empty strings for new children
          return [...newAges, ...Array(numChildren - newAges.length).fill("")];
        } else if (newAges.length > numChildren) {
          // Remove excess ages
          return newAges.slice(0, numChildren);
        }
        return newAges;
      });
    } else {
      setChildAges([]);
    }
  };

  // Update specific child age
  // const handleChildAgeChange = (index, value) => {
  //   // Ensure the value is a number and less than 18
  //   if (value !== "" && Number(value) >= 17) {
  //     setError("Child age must be less than 18 years.");
  //     return;
  //   } else if (error && Number(value) < 18) {
  //     setError(""); // Clear error if age is valid
  //   }

  //   setChildAges(prevAges => {
  //     const newAges = [...prevAges];
  //     newAges[index] = value;
  //     return newAges;
  //   });
  // };

  return (
    <div className="px-2 sm:px-4 lg:px-6">
      {!showRoomSelection ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-[20px] px-6 py-6 w-full max-w-[1330px] mx-auto flex flex-col md:flex-row md:items-center gap-6 md:gap-5"
        >
          {/* Check In */}
          {/* Check In Date and Time */}
          <div className="w-full md:w-auto flex-1">
            <label className="block text-base font-medium text-gray-800 mb-1">Check In Date</label>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
              <FaCalendarAlt />
              <input
                type="date"
                className="bg-transparent outline-none w-full"
                value={checkIn}
                min={new Date().toISOString().split('T')[0]}
                onChange={(e) => setCheckIn(e.target.value)}
                required
              />
            </div>
          </div>

          {/* <div className="w-full md:w-auto flex-1">
            <label className="block text-base font-medium text-gray-800 mb-1">Check In Time</label>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
              <input
                type="time"
                className="bg-transparent outline-none w-full"
                value={checkInTime}
                onChange={(e) => setCheckInTime(e.target.value)}
                required
              />
            </div>
          </div> */}

          {/* Check Out Date and Time */}
          <div className="w-full md:w-auto flex-1">
            <label className="block text-base font-medium text-gray-800 mb-1">Check Out Date</label>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
              <FaCalendarAlt />
              <input
                type="date"
                className="bg-transparent outline-none w-full"
                value={checkOut}
                min={checkIn || new Date().toISOString().split('T')[0]}
                onChange={(e) => setCheckOut(e.target.value)}
                required
              />
            </div>
          </div>

          {/* <div className="w-full md:w-auto flex-1">
            <label className="block text-base font-medium text-gray-800 mb-1">Check Out Time</label>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
              <input
                type="time"
                className="bg-transparent outline-none w-full"
                value={checkOutTime}
                onChange={(e) => setCheckOutTime(e.target.value)}
                required
              />
            </div>
          </div> */}



          {/* Adults */}
          <div className="w-full md:w-auto flex-1">
            <label className="block text-base font-medium text-gray-800 mb-1">Adult</label>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
              <FaUser />
              <select
                className="bg-transparent outline-none w-full"
                value={adults}
                onChange={(e) => setAdults(e.target.value)}
                required
              >
                <option value="">Select</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num} Person{num > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Children */}
          <div className="w-full md:w-auto flex-1">
            <label className="block text-base font-medium text-gray-800 mb-1">Child</label>
            <div className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
              <FaUser />
              <select
                className="bg-transparent outline-none w-full"
                value={children}
                onChange={handleChildrenChange}
                required
              >
                <option value="">Select</option>
                {[0, 1, 2, 3, 4].map((num) => (
                  <option key={num} value={num}>
                    {num} Child{num !== 1 ? "ren" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Child Ages - Show input for each child */}
          {Number(children) > 0 && (
            <div className="w-full md:w-auto flex-1">
              <label className="block text-base font-medium text-gray-800 mb-1">
                Child Age{Number(children) > 1 ? "s" : ""}
              </label>
              <div className="space-y-2">
                {Array.from({ length: Number(children) }).map((_, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700 border border-gray-200 px-3 py-2 rounded-md">
                    <span className="text-sm">Child {index + 1}:</span>
                    <input
                      type="number"
                      min="0"
                      max="17"
                      className="bg-transparent outline-none w-full"
                      value={childAges[index] || ""}
                      onChange={(e) => handleChildAgeChange(index, e.target.value)}
                      placeholder="Age"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        {showAgeWarning && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
    <div className="bg-white rounded-2xl p-8 max-w-sm w-full shadow-2xl text-center mx-4">
      <p className="mb-6 text-red-700 font-semibold text-xl">
        Please select child age up to 17.
      </p>
      <button
        className="px-8 py-3 bg-[#a8815e] text-white rounded-full text-lg font-semibold shadow-md hover:bg-[#916c49] transition-colors duration-300"
        onClick={() => setShowAgeWarning(false)}
      >
        OK
      </button>
    </div>
  </div>
)}




          {/* Search Button */}
          <div className="w-full md:w-auto">
            <button
              type="submit"
              className="w-full md:w-auto bg-[#a8815e] text-white font-serif mt-6 px-6 py-3 rounded-md hover:bg-[#916c49] transition-all"
            >
              Search
            </button>
          </div>

          {/* Error */}
          {error && (
            <div className="w-full text-red-600 text-center text-sm col-span-full mt-2">
              {error}
            </div>
          )}
        </form>
      ) : (
        // Simple Rooms selection step
        <div className="bg-white shadow-xl rounded-[20px] px-6 py-8 w-full max-w-[600px] mx-auto text-center">
          <h2 className="text-2xl font-serif text-gray-800 mb-3">Select Number of Rooms</h2>
          <p className="text-gray-600 mb-6">Choose how many rooms you want to book</p>

          <div className="flex justify-center gap-4 mb-6">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => handleRoomClick(num)}
                className="px-6 py-3 rounded-lg bg-[#f6efe7] text-gray-800 hover:bg-[#a8815e] hover:text-white font-medium transition-all"
              >
                {num} Room{num > 1 ? "s" : ""}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="mt-4 text-sm text-gray-500 underline"
            onClick={() => setShowRoomSelection(false)}
          >
            Change search details
          </button>
        </div>
      )}
    </div>
  );
};

export default Booking;