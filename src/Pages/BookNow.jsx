









import React, { useEffect, useState } from "react";
import moment from "moment";
import ScrollToTop from "../Components/ScrollToTop";
import tentImage from "../assets/images/t.jpeg";
import roomImage from "../assets/images/fr.jpeg";
import mainImage from "../assets/images/main.jpeg";
import rmainImage from "../assets/images/rmain.jpeg";




// Extra services
const EXTRA_SERVICES = [
  // { label: "Room Clean", price: 10, unit: "/ Night" },
  // { label: "Parking", price: 0, unit: "Free" },
  // { label: "Airport Transport", price: 20, unit: "/ Night" },
  // { label: "Pet Friendly", price: 15, unit: "/ Night" },
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
  // const [checkOut, setCheckOut] = useState("");
const [isCheckOutSelected, setIsCheckOutSelected] = useState(false);
// const [isCheckInSelected, setIsCheckInSelected] = useState(false);
const [isCheckInSelected, setIsCheckInSelected] = useState(false);
const [isRoomSelected, setIsRoomSelected] = useState(false);
const [isAdultsSelected, setIsAdultsSelected] = useState(false);
const [isChildrenSelected, setIsChildrenSelected] = useState(false);
const [isExtraBedSelected, setIsExtraBedSelected] = useState(false);





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
  // useEffect(() => {
  //   fetch("http://localhost:5000/api/admin/rooms")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRooms(data);
  //       if (data.length > 0) setSelectedRoomId(data[0]._id);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching rooms:", err);
  //       setBookingStatus("error-fetch");
  //     });
  // }, []);



  useEffect(() => {
  if (checkIn && checkOut) {
    fetchAvailableRooms(checkIn, checkOut);
  }
}, [checkIn, checkOut]);
 

const fetchAvailableRooms = async (checkInDate, checkOutDate) => {
  try {
    const response = await fetch("https://backend-waghera.onrender.com/api/availability", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        checkInDate,
        checkOutDate,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch availability");
    }

    const data = await response.json();
    setRooms(data);

    // auto select first available room
    if (data.length > 0) {
      // Don't auto-select, let user choose manually
      // setSelectedRoomId(data[0]._id);
    } else {
      setSelectedRoomId("");
    }
  } catch (error) {
    console.error("Availability Error:", error);
    setRooms([]);
  }
};





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
    <div className="font-sanserif text-gray-800">
      <ScrollToTop />
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] flex items-center justify-center mb-4"
        style={{ backgroundImage: `url(${rmainImage})` }}
      ></div>

      {/* Booking & Room Info */}
      <section className="bg-white px-2 py-2 sm:px-4 sm:py-4 md:px-24 font-serif">
        {!user ? (
          <div className="text-center py-8 sm:py-12">
            <h2 className="text-3xl text-red-600 mb-6">Please log in first to book a room.</h2>
            <button
              onClick={() => window.location.href = '/'}  // or use navigate('/') if using useNavigate
              className="bg-yellow-700 text-2xl text-white px-10 py-5 rounded-lg font-semibold hover:bg-yellow-700 transition duration-200"
            >
              Login
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
            {/* Left Column: Room Details */}
            <div className="lg:col-span-2 pr-1 sm:pr-2">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#af7b4f]">
                {selectedRoom ? `${selectedRoom.price} ₹ / Night` : "---"}
              </h2>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif mt-2 sm:mt-3 mb-2 sm:mb-3">
                {selectedRoom ? selectedRoom.roomName : "Select a Room Type"}
              </h1>

              {/* Room Images - Using logic from first file if data exists */}
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {selectedRoom?.images?.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${selectedRoom.roomName} ${i + 1}`}
                    className="rounded-md object-cover w-full h-32 sm:h-48 md:h-64 lg:h-140"
                  />
                ))}
              </div>

              {/* Room Description */}
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
                {selectedRoom?.description || "Elegant and comfortable rooms with all amenities."}
              </p>

              {/* Amenities */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-4 sm:mb-6">Room Amenities</h2>
              <div className="divide-y divide-gray-200 mb-4 sm:mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 py-2 sm:py-3">
                  <div className="flex items-center gap-5">
                    <img src="https://html.themewant.com/moonlit/assets/images/icon/wifi.svg" alt="Wifi" className="w-9 h-9" />
                    <span className="text-base sm:text-lg md:text-2xl font-serif text-gray-800">Free Wifi</span>
                  </div>
                  <div className="flex items-center gap-5">
                    <img src="https://html.themewant.com/moonlit/assets/images/icon/shower.svg" alt="Shower" className="w-9 h-9" />
                    <span className="text-base sm:text-lg md:text-xl font-serif text-gray-800">Shower</span>
                  </div>
                  {/* <div className="flex items-center gap-5">
                    <img src="https://html.themewant.com/moonlit/assets/images/icon/aeroplane.svg" alt="Airport" className="w-9 h-9" />
                    <span className="text-xl font-serif text-gray-800">Airport Transport</span>
                  </div> */}
                </div>
              </div>

              {/* Room Features */}
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif mb-3 sm:mb-4">Room Features</h2>
              <img
                src={mainImage}
                alt="Features"
                className="rounded-md object-cover w-full h-40 sm:h-48 md:h-64 lg:h-100 mb-4 sm:mb-6"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm sm:text-base lg:text-[15px] font-serif text-gray-900 mb-4 sm:mb-6">
                {["Children and extra beds", "Climate Control", "Coffee/Tea Maker"].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors">
                    <div className="w-3 h-3 rounded-full bg-[#a1865e] flex-shrink-0"></div>
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Booking Sidebar */}
            <div className="bg-gray-100 rounded-lg p-3 sm:p-4 md:p-6 shadow-sm h-fit">
              <h3 className="text-xl sm:text-2xl md:text-3xl text-center font-serif text-gray-800 mb-4 sm:mb-5">
                Book Your Stay
              </h3>

              <form className="space-y-2 sm:space-y-3 text-gray-700 text-base sm:text-lg md:text-xl" onSubmit={handleSubmit}>
                {/* Dates */}
                <div>
  <label className="block font-serif mb-2 sm:mb-3">Check In</label>
  <input
    type="date"
    value={checkIn}
    min={moment().format("YYYY-MM-DD")}
    onFocus={(e) => e.target.showPicker && e.target.showPicker()}
    className={`w-full border px-3 py-2 rounded outline-none bg-white text-base cursor-pointer
      ${isCheckInSelected ? "font-bold text-black" : "font-normal text-gray-400"}
    `}
    onChange={(e) => {
      setCheckIn(e.target.value);
      setIsCheckInSelected(true);
    }}
  />
</div>


               <div>
  <label className="block font-medium mb-2 sm:mb-3 mt-2 sm:mt-3">Check Out</label>
  <input
    type="date"
    value={checkOut}
    min={moment(checkIn).add(1, "days").format("YYYY-MM-DD")}
    onFocus={(e) => e.target.showPicker && e.target.showPicker()}
    className={`w-full border px-3 py-2 rounded outline-none bg-white text-base cursor-pointer
      ${isCheckOutSelected ? "font-bold text-black" : "font-normal text-gray-400"}
    `}
    onChange={(e) => {
      setCheckOut(e.target.value);
      setIsCheckOutSelected(true);
    }}
  />
</div>


                {/* Room Selection */}
                <div className="mt-2 sm:mt-3">
  <label className="block font-medium mb-2 sm:mb-3">Room Type</label>

  <select
    value={selectedRoomId}
    onChange={(e) => {
      setSelectedRoomId(e.target.value);
      setIsRoomSelected(true);
      handleRoomTypeChange(e); // keep your existing logic
    }}
    className={`w-full border px-3 py-2 rounded outline-none bg-white text-xl
      ${isRoomSelected ? "font-bold text-black" : "font-normal text-gray-400"}
    `}
  >
    {rooms.length === 0 ? (
      <option value="">No rooms available for selected dates</option>
    ) : (
      <>
        <option value="">-- Choose Room Type --</option>
        {rooms.map((room) => (
          <option key={room._id} value={room._id}>
            {room.roomName} (₹{room.price})
          </option>
        ))}
      </>
    )}
  </select>
</div>


                {/* Guests */}
                <div className="grid grid-cols-1 gap-3">

  {/* Adults */}
  <div>
    <label className="block font-medium mt-2 sm:mt-3 mb-2 sm:mb-3">Adults</label>
    <input
      type="number"
      min={1}
      max={5}
      value={isAdultsSelected ? adults : ""}
      placeholder="Enter number of adults"
      onChange={(e) => {
        const inputValue = e.target.value;
        if (inputValue === "") {
          setAdults("");
          setIsAdultsSelected(true);
          return;
        }
        const numValue = parseInt(inputValue) || 0;
        if (numValue > 5) {
          alert("Maximum 5 adults are allowed");
          return;
        }
        if (numValue < 1) {
          setAdults(1);
        } else {
          setAdults(numValue);
        }
        setIsAdultsSelected(true);
      }}
      className={`w-full border px-3 py-2 rounded outline-none bg-white text-base
        ${isAdultsSelected ? "font-bold text-black" : "font-normal text-gray-400"}
      `}
    />
  </div>

  {/* Children */}
  <div>
    <label className="block font-medium mb-2 sm:mb-3 mt-2 sm:mt-3">Children</label>
    <input
      type="number"
      min={0}
      max={5}
      value={isChildrenSelected ? children : ""}
      placeholder="Enter number of children"
      onChange={(e) => {
        const inputValue = parseInt(e.target.value) ;
        if (inputValue > 5) {
          alert("Maximum 5 children are allowed");
          return;
        }
        const value = Math.min(5, Math.max(0, inputValue));
        setChildren(value);
        setIsChildrenSelected(true);
      }}
      className={`w-full border px-3 py-2 rounded outline-none bg-white text-base
        ${isChildrenSelected ? "font-bold text-black" : "font-normal text-gray-400"}
      `}
    />
  </div>

  {/* Extra Bed */}
  {/* <div>
    <label className="block font-medium mb-2 sm:mb-3 mt-2 sm:mt-3">Extra Bed</label>
    <input
      type="number"
      min={0}
      value={extraBed}
      onChange={(e) => {
        setExtraBed(e.target.value);
        setIsExtraBedSelected(true);
      }}
      className={`w-full border px-3 py-2 rounded outline-none bg-white text-base
        ${isExtraBedSelected ? "font-bold text-black" : "font-normal text-gray-400"}
      `}
    />
  </div> */}

</div>


                {/* Extra Services */}
                {/* <h4 className="font-serif text-center text-3xl mt-10 mb-5">Extra Services</h4> */}
                <div className="space-y-2">
                  {EXTRA_SERVICES.map((item, i) => (
                    <label key={i} className="flex justify-between text-base sm:text-lg md:text-xl mt-3 sm:mt-4">
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
                <div className="flex text-lg sm:text-xl md:text-2xl border-t pt-4 sm:pt-6 justify-between items-center font-serif mt-6 sm:mt-8">
                  <span>Total Price</span>
                  <span className="text-[#af7b4f] font-bold">₹{calculateTotal()}</span>
                </div>

                <button
                  type="submit"
                  disabled={bookingStatus === "loading" || !selectedRoomId || numNights <= 0}
                  className={`w-full mt-3 sm:mt-4 py-2 text-lg sm:text-xl md:text-2xl text-white font-medium rounded transition ${
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
      <section className="bg-white pt-2 sm:pt-4 pb-6 sm:pb-8 px-2 sm:px-4 md:px-24">
        <h4 className="text-yellow-800 text-base font-serif mb-2">
          <span className="flex items-center justify-center text-[#a8815e] gap-1 sm:gap-2 md:gap-4 mb-3 sm:mb-5 md:mb-10 text-base sm:text-lg md:text-2xl font-serif">
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

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif text-center text-gray-900 mb-6 sm:mb-8 md:mb-10">
          Similar Rooms
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-15">
          {[
            { name: "Family Room",  img:roomImage },
            { name: "Tent", img: tentImage },
            // { name: "Triple Room", Amt: "12999₹", img: "https://html.themewant.com/moonlit/assets/images/t" },
          ].map((member, index) => (
            <div key={index} className="font-serif border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition duration-300">
              <img src={member.img} alt={member.name} className="w-full h-48 sm:h-64 md:h-74 object-cover transition-transform duration-500 hover:scale-105" />
              <div className="p-3 sm:p-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif">{member.name}</h3>
                <div className="flex items-center gap-6 sm:gap-8 md:gap-10 mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-500">
                  {/* <span className="flex items-center gap-3"><i className="fa-solid fa-house"></i> 35 sqm</span> */}
                  {/* <span className="flex items-center gap-3"><i className="fa-solid fa-user"></i> 5 Person</span> */}
                </div>
                <div className="mt-3 sm:mt-4 md:mt-5 mb-3 sm:mb-4 text-lg sm:text-xl md:text-2xl text-gray-500">{member.Amt}</div>
                <a href="#" className="text-[#b86e2e] border-b text-sm sm:text-base md:text-lg border-[#b86e2e] w-fit hover:text-[#a15d20] transition">
                  Discover More
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <style>{`
        .scrollbar-hide { scrollbar-width: none; -ms-overflow-style: none; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}