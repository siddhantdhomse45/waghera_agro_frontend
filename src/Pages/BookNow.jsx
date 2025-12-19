


import React, { useEffect, useState } from "react";
import moment from "moment";

// Extra services
const EXTRA_SERVICES = [
  { label: "Room Clean", price: 10, unit: "/ Night" },
  { label: "Parking", price: 0, unit: "Free" },
  { label: "Airport Transport", price: 20, unit: "/ Night" },
  { label: "Pet Friendly", price: 15, unit: "/ Night" },
];

export default function BookNow() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [checkIn, setCheckIn] = useState(moment().format("YYYY-MM-DD"));
  const [checkOut, setCheckOut] = useState(moment().add(1, "days").format("YYYY-MM-DD"));
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [extraBed, setExtraBed] = useState(0);
  const [selectedExtraServices, setSelectedExtraServices] = useState([]);
  const [bookingStatus, setBookingStatus] = useState(null);
  const [user, setUser] = useState(null);

  // Logic from Node version: Check for logged in user
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const selectedRoom = rooms.find((room) => room._id === selectedRoomId);
  const numNights = moment(checkOut).diff(moment(checkIn), "days");

  const calculateTotal = () => {
    const basePrice = selectedRoom ? selectedRoom.price : 0;
    const servicesPrice = selectedExtraServices.reduce((sum, label) => {
      const service = EXTRA_SERVICES.find((s) => s.label === label);
      return sum + (service ? service.price : 0);
    }, 0);
    const totalNights = numNights > 0 ? numNights : 1;
    return ((basePrice + servicesPrice) * totalNights).toFixed(2);
  };

  // Logic from Node version: Fetch rooms from Port 5000
  useEffect(() => {
    fetch("https://backend-waghera.onrender.com/api/admin/rooms")
      .then((res) => res.json())
      .then((data) => {
        setRooms(data);
        if (data.length > 0) setSelectedRoomId(data[0]._id);
      })
      .catch((err) => {
        console.error("Error fetching rooms:", err);
        setBookingStatus("error-fetch");
      });
  }, []);

  const handleRoomTypeChange = (e) => setSelectedRoomId(e.target.value);

  const handleServiceChange = (label) => {
    setSelectedExtraServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user || !user.id) return alert("Please log in first to book a room.");
    if (!selectedRoomId) return alert("Please select a room type.");
    if (numNights <= 0) return alert("Check-out must be after check-in.");

    setBookingStatus("loading");

    const bookingData = {
      userId: user.id,
      roomId: selectedRoomId,
      checkInDate: checkIn,
      checkOutDate: checkOut,
      totalPrice: parseFloat(calculateTotal()),
      adults: parseInt(adults),
      children: parseInt(children),
      extraBed: parseInt(extraBed),
      extraServices: selectedExtraServices, // Node backend expects array based on your 2nd file
    };

    try {
      const response = await fetch("https://backend-waghera.onrender.com/api/bookings/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const contentType = response.headers.get("content-type");

      // Handle PDF response logic from Node backend
      if (contentType?.includes("application/pdf")) {
        const pdfBlob = await response.blob();
        const fileURL = URL.createObjectURL(pdfBlob);
        const link = document.createElement("a");
        link.href = fileURL;
        link.download = `booking_${Date.now()}.pdf`;
        link.click();
        URL.revokeObjectURL(fileURL);
        setBookingStatus("success");
        alert("Booking Successful! PDF Downloaded.");
      } else {
        const data = await response.json();
        if (!response.ok) throw new Error(data.message || "Error creating booking");
        setBookingStatus("success");
        alert(data.message || "Booking successful!");
      }
    } catch (error) {
      console.error("Booking Error:", error);
      setBookingStatus("error");
      alert(`Booking failed: ${error.message}`);
    }
  };

  return (
    <div className=" text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center mb-25"
        style={{ backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')" }}
      ></div>

      {/* Booking & Room Info */}
      <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh] mt-1 ">
        {!user ? (
          <div className="text-center py-20">
            <h2 className="text-3xl text-red-600">Please log in first to book a room.</h2>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left Column: Room Details */}
            <div className="lg:col-span-2 h-[150vh] overflow-y-scroll scrollbar-hide pr-2">
              <h2 className="text-5xl  text-[#af7b4f]">
                {selectedRoom ? `${selectedRoom.price} ₹ / Night` : "---"}
              </h2>
              <h1 className="text-6xl  mt-5 mb-4">
                {selectedRoom ? selectedRoom.roomName : "Select a Room Type"}
              </h1>

              {/* Room Images - Using logic from first file if data exists */}
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {selectedRoom?.images?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selectedRoom.roomName} ${i + 1}`}
                    className="rounded-md object-cover w-full h-140"
                  />
                ))}
              </div>

              {/* Room Description */}
              <p className="text-gray-600 mb-8 text-xl leading-relaxed">
                {selectedRoom?.description || "Elegant and comfortable rooms with all amenities."}
              </p>

              {/* Amenities */}
              <h2 className="text-4xl  mb-8">Room Amenities</h2>
              <div className="divide-y divide-gray-200 text-7xl mb-10">
                <div className="grid grid-cols-3 gap-6 py-4">
                  <div className="flex items-center gap-5">
                    <img src="https://html.themewant.com/moonlit/assets/images/icon/wifi.svg" alt="Wifi" className="w-9 h-9" />
                    <span className="text-2xl  text-gray-800">Free Wifi</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://html.themewant.com/moonlit/assets/images/icon/shower.svg" alt="Shower" className="w-9 h-9" />
                    <span className="text-xl  text-gray-800">Shower</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://html.themewant.com/moonlit/assets/images/icon/aeroplane.svg" alt="Airport" className="w-9 h-9" />
                    <span className="text-xl  text-gray-800">Airport Transport</span>
                  </div>
                </div>
              </div>

              {/* Room Features */}
              <h2 className="text-5xl  mb-6">Room Features</h2>
              <img
                src="https://html.themewant.com/moonlit/assets/images/pages/room/3.webp"
                alt="Features"
                className="rounded-md object-cover w-full h-140 mb-11"
              />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[19px]  text-gray-900 mb-10">
                {["Children and extra beds", "Climate Control", "Art and Decor", "Coffee/Tea Maker", "High-End Bedding", "Smart Technology"].map((feature, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <span className="mt-3 w-2 h-2 rounded-full bg-[#a1865e]"></span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Booking Sidebar */}
            <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
              <h3 className="text-3xl text-center  text-gray-800 mb-7">
                Book Your Stay
              </h3>

              <form className="space-y-4 text-gray-700 text-xl" onSubmit={handleSubmit}>
                {/* Dates */}
                <div>
                  <label className="block  mb-5">Check In</label>
                  <input
                    type="date"
                    value={checkIn}
                    min={moment().format("YYYY-MM-DD")}
                    className="w-full border px-3 py-2 rounded outline-none bg-white"
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block font-medium mb-5 mt-5">Check Out</label>
                  <input
                    type="date"
                    value={checkOut}
                    min={moment(checkIn).add(1, "days").format("YYYY-MM-DD")}
                    className="w-full border px-3 py-2 rounded outline-none bg-white"
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>

                {/* Room Selection */}
                <div className="mt-5">
                  <label className="block font-medium mb-5">Room Type</label>
                  <select
                    value={selectedRoomId}
                    onChange={handleRoomTypeChange}
                    className="w-full border px-3 py-2 rounded outline-none bg-white text-xl"
                  >
                    <option value="">-- Choose Room Type --</option>
                    {rooms.map((room) => (
                      <option key={room._id} value={room._id}>
                        {room.roomName} (₹{room.price})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Guests */}
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="block font-medium mt-5 mb-5">Adults</label>
                    <input type="number" min={1} value={adults} onChange={(e) => setAdults(e.target.value)} className="w-full border px-3 py-2 rounded outline-none bg-white" />
                  </div>
                  <div>
                    <label className="block font-medium mb-5 mt-5">Children</label>
                    <input type="number" min={0} value={children} onChange={(e) => setChildren(e.target.value)} className="w-full border px-3 py-2 rounded outline-none bg-white" />
                  </div>
                  <div>
                    <label className="block font-medium mb-5 mt-5">Extra Bed</label>
                    <input type="number" min={0} value={extraBed} onChange={(e) => setExtraBed(e.target.value)} className="w-full border px-3 py-2 rounded outline-none bg-white" />
                  </div>
                </div>

                {/* Extra Services */}
                <h4 className=" text-center text-3xl mt-10 mb-5">Extra Services</h4>
                <div className="space-y-2">
                  {EXTRA_SERVICES.map((item, i) => (
                    <label key={i} className="flex justify-between text-xl mt-5">
                      <span>
                        <input
                          type="checkbox"
                          checked={selectedExtraServices.includes(item.label)}
                          onChange={() => handleServiceChange(item.label)}
                          className="mr-2 w-4 h-4 align-middle"
                        />
                        {item.label}
                      </span>
                      <span>{item.price > 0 ? `₹${item.price}${item.unit}` : item.unit}</span>
                    </label>
                  ))}
                </div>

                {/* Total Price */}
                <div className="flex text-2xl border-t pt-6 justify-between items-center  mt-8">
                  <span>Total Price</span>
                  <span className="text-[#af7b4f] font-bold">₹{calculateTotal()}</span>
                </div>

                <button
                  type="submit"
                  disabled={bookingStatus === "loading" || !selectedRoomId || numNights <= 0}
                  className={`w-full mt-4 py-2 text-2xl text-white font-medium rounded transition ${
                    bookingStatus === "loading" ? "bg-gray-500 cursor-not-allowed" : "bg-[#af7b4f] hover:bg-yellow-800"
                  }`}
                >
                  {bookingStatus === "loading" ? "Booking..." : "Book Your Room"}
                </button>

                {bookingStatus === "success" && <p className="text-green-600 text-center mt-2">Booking confirmed!</p>}
                {bookingStatus === "error" && <p className="text-red-600 text-center mt-2">Booking failed. Try again.</p>}
              </form>
            </div>
          </div>
        )}
      </section>

      {/* Similar Rooms Section */}
      {/* <section className="bg-white pt-0 pb-16 px-4 sm:px-6 md:px-24">
        <h4 className="text-yellow-800 text-base  mb-2">
          <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-5 sm:mb-10 text-lg sm:text-2xl ">
            <span className="flex items-center">
              <span className="text-sm sm:text-lg">◇</span>
              <span className="w-6 sm:w-10 h-px bg-black"></span>
            </span>
            Similar Rooms
            <span className="flex items-center">
              <span className="w-6 sm:w-10 h-px bg-black"></span>
              <span className="text-sm sm:text-lg">◇</span>
            </span>
          </span>
        </h4>

        <h2 className="text-4xl sm:text-5xl  text-center text-gray-900 mb-10">
          Similar Rooms
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-5">
          {[
            { name: "Executive Room", Amt: "12000₹", img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp" },
            { name: "Single Room", Amt: "3999₹", img: "https://html.themewant.com/moonlit/assets/images/pages/room/2.webp" },
            { name: "Triple Room", Amt: "12999₹", img: "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp" },
          ].map((member, index) => (
            <div key={index} className=" border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
              <img src={member.img} alt={member.name} className="w-full h-74 object-cover transition-transform duration-500 hover:scale-105" />
              <div className="p-4">
                <h3 className="text-3xl ">{member.name}</h3>
                <div className="flex items-center gap-10 mt-4 text-xl text-gray-500">
                  <span className="flex items-center gap-3"><i className="fa-solid fa-house"></i> 35 sqm</span>
                  <span className="flex items-center gap-3"><i className="fa-solid fa-user"></i> 5 Person</span>
                </div>
                <div className="mt-5 mb-4 text-2xl text-gray-500">{member.Amt}</div>
                <a href="#" className="text-[#b86e2e] border-b text-lg border-[#b86e2e] w-fit hover:text-[#a15d20] transition">
                  Discover More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <style>{`
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}