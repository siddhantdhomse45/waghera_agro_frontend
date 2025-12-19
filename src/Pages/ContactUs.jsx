


import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock, Contact } from "lucide-react";
import map from "../../src/assets/images/map.jpg";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "", // ✅ added
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState("success");

  const contactInfo = [
    { icon: MapPin, title: "Address", text: "Pali t.ategaon, Maharashtra" },
    { icon: Phone, title: "Phone", text: "+91 9420604657 / 9421687397" },
    { icon: Contact, title: "Mr : DIPAK SHANKAR SHINDE", text: "UPI-ID : ds5705386@okaxis" },
    { icon: Mail, title: "Email", text: "support@gmail.com" },
    { icon: Clock, title: "Working Hours", text: "24 X 7" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setToastMsg("");

    try {
      const response = await fetch("https://backend-waghera.onrender.com/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // ✅ mobile included
      });

      if (response.ok) {
        setToastType("success");
        setToastMsg("Message sent successfully!");
        setFormData({ name: "", email: "", mobile: "", message: "" });
      } else {
        setToastType("error");
        setToastMsg("Failed to send message.");
      }
    } catch (error) {
      setToastType("error");
      setToastMsg("Server error. Try again later.");
    } finally {
      setLoading(false);
      setTimeout(() => setToastMsg(""), 4000);
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091215369-24c0b7487cf9?auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 " />
        <div className="relative z-10 text-center max-w-3xl px-4 sm:px-6 py-12 sm:py-16 bg-white/80 backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-md animate-fadeUp">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-lg px-2">
            We’re here for support, inquiries & collaborations
          </p>
          <div className="mt-4 sm:mt-6 w-24 sm:w-32 h-1 mx-auto bg-[#AB8A62] rounded-full"></div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 px-4 sm:px-6 md:px-10 -mt-12 sm:-mt-16 mb-16 sm:mb-20">

        {/* CONTACT INFO */}
        <div className="space-y-4 sm:space-y-6">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="p-2 sm:p-3 rounded-lg bg-[#f0e6d2]">
                  <Icon size={20} className="sm:text-[#AB8A62] text-[#AB8A62]" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-500">{item.title}</p>
                  <p className="text-sm sm:text-lg font-medium text-gray-800">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#AB8A62] focus:border-transparent transition text-sm sm:text-base"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#AB8A62] focus:border-transparent transition text-sm sm:text-base"
              required
            />

            {/* ✅ MOBILE NUMBER FIELD */}
            <input
              type="tel"
              name="mobile"
              placeholder="Your Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              pattern="[6-9]{1}[0-9]{9}"
              maxLength="10"
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#AB8A62] focus:border-transparent transition text-sm sm:text-base"
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2.5 sm:p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#AB8A62] focus:border-transparent transition text-sm sm:text-base"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2.5 sm:py-3 bg-[#AB8A62] text-white rounded-lg hover:bg-[#a8815e] transition duration-300 text-sm sm:text-base"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {toastMsg && (
              <p
                className={`text-center mt-2 font-medium text-sm ${
                  toastType === "success"
                    ? "text-[#AB8A62]"
                    : "text-red-600"
                }`}
              >
                {toastMsg}
              </p>
            )}
          </form>
        </div>
      </section>

      {/* ================= IMAGE MAP ================= */}
      <section className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] mb-16 sm:mb-20">
        <img
          src={map}
          alt="Company Location"
          className="h-full w-auto mx-auto object-cover rounded-xl sm:rounded-2xl shadow-md"
        />
      </section>

      {/* ================= GOOGLE MAP ================= */}
      {/* <section className="max-w-6xl mx-auto px-6 mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Find Us on Map
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-lg h-[420px]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7582023265!2d73.7168202!3d17.7745336"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </section> */}







    <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20 animate-fadeUp">

       <h2 className="text-3xl font-semibold text-gray-800 mb-4">Find Us on Map</h2>


        <div className="rounded-3xl overflow-hidden shadow-lg h-[420px]">

         <iframe

            title="Google Map"

            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7582023265!2d73.7168202!3d17.7745336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc26d07cf581663%3A0xc9501e4c59352d5b!2sWaghera%20Agro-tourism%20Resort!5e0!3m2!1sen!2sin!4v1700000000000"

            width="100%"

            height="100%"

            style={{ border: 0 }}

            allowFullScreen=""

            loading="lazy"

            referrerPolicy="no-referrer-when-downgrade"

          ></iframe>

        </div>

     </section>






      {/* ================= ANIMATIONS ================= */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
