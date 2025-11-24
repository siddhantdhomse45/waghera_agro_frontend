// src/pages/BookNow.jsx
export default function BookNow() {
  return (
    <div className="font-sanserif text-gray-800">
      {/* Hero Section */}
     <div
  className="relative bg-cover bg-center h-[800px] flex items-center justify-center mb-25"
  style={{
    backgroundImage: "url('https://html.themewant.com/moonlit/assets/images/pages/header__bg.webp')",
  }}
>
    </div>

    <section className="bg-white px-4 py-10 md:px-24 min-h-[200vh] mt-1 font-serif">
  <div className="grid lg:grid-cols-3 gap-10">
    {/* Left Column - Room Content (scrollable) */}
    <div className="lg:col-span-2 h-[150vh] overflow-y-scroll scrollbar-hide pr-2">
      <h2 className="text-5xl font-serif text-[#af7b4f]">12999 ₹</h2>
      <h1 className="text-6xl font-serif mt-5 mb-4">Executive Room</h1>

      <div className="flex items-center gap-6 text-gray-500 mb-6 text-xl">
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-house"></i> 35 sqm
        </span>
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-user"></i> 5 Person
        </span>
      </div>

      <p className="text-gray-600 mb-8 text-xl leading-relaxed">
        Our elegantly appointed rooms and suites are designed to offer the utmost in comfort and style. Each room features modern amenities, plush furnishings, and thoughtful touches to ensure a relaxing stay.
        <br /><br />
        Indulge in a culinary journey at our on-site restaurants, where our talented chefs create mouthwatering dishes using the freshest local ingredients. Start your day with a sumptuous breakfast, enjoy a leisurely lunch, and savor a gourmet dinner in an elegant setting.
      </p>

      {/* Room Images */}
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        <img
          src="https://html.themewant.com/moonlit/assets/images/pages/room/1.webp"
          alt="Room"
          className="rounded-md object-cover w-full h-140"
        />
        <img
          src="https://html.themewant.com/moonlit/assets/images/pages/room/r-d-2.webp"
          alt="Room"
          className="rounded-md object-cover w-full h-140"
        />
      </div>

      {/* Room Amenities */}
      <h2 className="text-4xl font-serif mb-8">Room Amenities</h2>
      <div className="divide-y divide-gray-200 text-7xl mb-10">
        <div className="grid grid-cols-3 gap-6 py-4">
          <div className="flex items-center gap-5">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/wifi.svg" alt="Wifi" className="w-9 h-9 text-[#a1865e]" />
            <span className="text-2xl font-serif text-gray-800">Free Wifi</span>
          </div>
          <div className="flex items-center gap-5">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/shower.svg" alt="Shower" className="w-9 h-9 text-[#a1865e]" />
            <span className="text-xl font-serif text-gray-800">Shower</span>
          </div>
          <div className="flex items-center gap-5">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/aeroplane.svg" alt="Airport" className="w-9 h-9 text-[#a1865e]" />
            <span className="text-xl font-serif text-gray-800">Airport transport</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 py-4">
          <div className="flex items-center gap-5">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/balcony.svg" alt="Balcony" className="w-9 h-9 text-[#a1865e]" />
            <span className="text-xl font-serif text-gray-800">Balcony</span>
          </div>
          <div className="flex items-center gap-5">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/refrigerator.svg" alt="Refrigerator" className="w-9 h-9 text-[#a1865e]" />
            <span className="text-xl font-serif text-gray-800">Refrigerator</span>
          </div>
          <div className="flex items-center gap-5">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/support.svg" alt="24/7 Support" className="w-9 h-9 text-[#a1865e]" />
            <span className="text-xl font-serif text-gray-800">24/7 Support</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 py-4">
          <div className="flex items-center gap-5">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/desk.svg" alt="Work Desk" className="w-9 h-9 text-[#a1865e]" />
            <span className="text-xl font-serif text-gray-800">Work Desk</span>
          </div>
          <div className="flex items-center gap-5">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/fitness.svg" alt="Fitness" className="w-9 h-9 text-[#a1865e]" />
            <span className="text-xl font-serif text-gray-800">Fitness Center</span>
          </div>
          <div className="flex items-center gap-5">
            <img src="https://html.themewant.com/moonlit/assets/images/icon/swimming-pool.svg" alt="Swimming" className="w-9 h-9 text-[#a1865e]" />
            <span className="text-lg font-serif text-gray-800">Swimming Pool</span>
          </div>
        </div>
      </div>

      {/* Room Features */}
      <h2 className="text-5xl font-serif mb-6">Room Features</h2>
      <img
        src="https://html.themewant.com/moonlit/assets/images/pages/room/3.webp"
        alt="Features"
        className="rounded-md object-cover w-full h-140 mb-11"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[19px] font-serif text-gray-900 mb-10">
        {[
          "Children and extra beds",
          "Climate Control",
          "Art and Decor",
          "Coffee/Tea Maker",
          "High-End Bedding",
          "Smart Technology"
        ].map((feature, i) => (
          <div key={i} className="flex items-start gap-4">
            <span className="mt-3 w-2 h-2 rounded-full bg-[#a1865e]"></span>
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <p className="text-gray-600 text-xl leading-relaxed">
        Our elegantly appointed rooms and suites are designed to offer the
        ultimate in comfort and style. Each room features modern amenities,
        plush furnishings, and thoughtful touches to ensure a relaxing stay.
      </p>
    </div>

    {/* Right Column - Booking Sidebar */}
    <div className="bg-gray-100 rounded-lg p-6 shadow-sm h-fit min-h-[140vh]">
      <h3 className="text-3xl text-center font-serif text-gray-800 mb-7">
        Book Your Stay
      </h3>

      <form className="space-y-4 text-gray-700 text-xl">
        {/* Dates */}
        <div>
          <label className="block font-serif mb-5">Check In</label>
          <input type="date" className="w-full border px-3 py-2 rounded outline-none bg-white" />
        </div>
        <div>
          <label className="block font-medium mb-5 mt-5">Check Out</label>
          <input type="date" className="w-full border px-3 py-2 rounded outline-none bg-white" />
        </div>

        {/* Guest Info */}
        <div className="grid grid-cols-1 gap-3">
          <div>
            <label className="block font-medium mt-5 mb-5">Adult</label>
            <input type="number" defaultValue={1} className="w-full border px-3 py-2 rounded outline-none bg-white" />
          </div>
          <div>
            <label className="block font-medium mb-5 mt-5">Children</label>
            <input type="number" defaultValue={1} className="w-full border px-3 py-2 rounded outline-none bg-white" />
          </div>
          <div>
            <label className="block font-medium mb-5 mt-5">Extra Bed</label>
            <input type="number" defaultValue={1} className="w-full border px-3 py-2 rounded outline-none bg-white" />
          </div>
        </div>

        {/* Extra Services */}
        <h4 className="font-serif text-center text-4xl mt-10 mb-13">Extra Services</h4>
        <div className="space-y-2">
          {[
            { label: "Room Clean", price: "₹10 / Night" },
            { label: "Parking", price: "Free" },
            { label: "Airport Transport", price: "₹20 / Night" },
            { label: "Pet Friendly", price: "₹15 / Night" },
          ].map((item, i) => (
            <label key={i} className="flex justify-between text-2xl mb-9 mt-9">
              <span>
                <input type="checkbox" className="mr-2" />
                {item.label}
              </span>
              <span>{item.price}</span>
            </label>
          ))}
        </div>

        {/* Total */}
       <div className="flex text-2xl border-t pt-6 justify-between items-center font-serif mt-8">
  <span>Total Price</span>
  <span> ₹82</span>
</div>


        <button
          type="submit"
          className="w-full mt-4 py-2 bg-[#af7b4f] text-2xl text-white font-medium rounded hover:bg-yellow-800 transition"
        >
          Book Your Room
        </button>
      </form>
    </div>
  </div>
</section>


<style>{`
/* Hide scrollbar */
.scrollbar-hide {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */
}
.scrollbar-hide::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

`}</style>
    

     <section className="bg-white pt-0 pb-16 px-4 sm:px-6 md:px-24">
  <h4 className="text-yellow-800 text-base font-serif mb-2">
    <span className="flex items-center justify-center text-[#a8815e] gap-2 sm:gap-4 mb-5 sm:mb-10 text-lg sm:text-2xl font-serif">
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

  <h2 className="text-4xl sm:text-5xl font-serif text-center text-gray-900 mb-10">
     Similar Rooms
  </h2>

  {/* Responsive Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-1  lg:grid-cols-3 gap-5">
    {[
      {
        name: "Exectutive Room",
        Amt: "12000₹",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/1.webp",
      },
      {
        name: "Single Room",
        Amt: "3999₹",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/2.webp",
      },
      {
        name: "Triple Room",
        Amt: "12999₹",
        img: "https://html.themewant.com/moonlit/assets/images/pages/room/3.webp",
      },
    ].map((member, index) => (
     <div
  key={index}
  className="font-serif  border border-gray-300 rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
>
  <img
    src={member.img}
    alt={member.name}
    className="w-full h-74 object-cover transition-transform duration-500 hover:scale-105"
  />

  <div className="p-4">
    <h3 className="text-3xl font-serif">{member.name}</h3>

    <div className="flex items-center gap-10 mt-4 text-xl text-gray-500">
      <span className="flex items-center gap-3">
        <i className="fa-solid fa-house"></i> 35 sqm
      </span>
      <span className="flex items-center gap-3">
        <i className="fa-solid fa-user"></i> 5 Person
      </span>
    </div>

    <div className="mt-5 mb-4 text-2xl text-gray-500">{member.Amt}</div>

    <a
      href="#"
      className="text-[#b86e2e] border-b text-lg border-[#b86e2e] w-fit hover:text-[#a15d20] transition"
    >
      Discover More
    </a>
  </div>
</div>
    ))}
  </div>
</section>
</div>
  );
}