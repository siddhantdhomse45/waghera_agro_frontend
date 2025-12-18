// import React from "react";
// import { Mail, Phone, MapPin, Clock, Users } from "lucide-react";

// export default function ContactPage() {
//   const contactInfo = [
//     { icon: MapPin, title: "Address", text: "Pali t.ategaon, Maharashtra" },
//     { icon: Phone, title: "Phone", text: "+91 9420604657/9421687397" },
//     { icon: Mail, title: "Email", text: "support@gmail.com" },
//     { icon: Clock, title: "Working Hours", text: "9 AM – 9 PM" },
//   ];

//   const highlights = [
//     { title: "Professional Team", icon: Users },
//     { title: "Fast Response", icon: Mail },
//     { title: "Reliable Support", icon: Phone },
//   ];

//   const logos = [
//     { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg", alt: "Google" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", alt: "Facebook" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Adobe_Corporate_logo.svg", alt: "Adobe" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Spotify_logo_with_text.svg", alt: "Spotify" },
//   ];

//   return (
//     <div className="min-h-screen w-full bg-gray-50">

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//         {/* Background Image */}
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091215369-24c0b7487cf9?auto=format&fit=crop&w=1950&q=80')" }}
//         />
//         {/* Subtle Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full bg-white/10" />

//         {/* Hero Content */}
//         <div className="relative z-10 text-center max-w-3xl px-6 py-16 bg-white/70 backdrop-blur-md rounded-3xl shadow-md animate-fadeUp">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-slideUp">
//             Get In Touch
//           </h1>
//           <p className="text-gray-700 text-lg animate-slideUp delay-100">
//             We're here to help with everything — support, business inquiries, or general questions.
//           </p>
//           <div className="mt-6 w-32 h-1 mx-auto bg-indigo-400 rounded-full animate-pulse"></div>
//         </div>
//       </section>

//       {/* ================= CONTACT SECTION ================= */}
//       <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-10 -mt-16 mb-20">
//         {/* Contact Info */}
//         <div className="space-y-6">
//           {contactInfo.map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={idx}
//                 className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transform transition-all hover:-translate-y-1 hover:scale-102 duration-300 animate-fadeUp"
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 <div className="p-3 rounded-lg bg-indigo-100">
//                   <Icon size={26} className="text-indigo-500" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">{item.title}</p>
//                   <p className="text-lg font-medium text-gray-800">{item.text}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white rounded-2xl shadow-sm p-10 animate-fadeUp">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//             />
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//             />
//             <textarea
//               rows="5"
//               placeholder="Your Message"
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//             />
//             <button
//               type="submit"
//               className="w-full py-3 bg-indigo-400 text-white rounded-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* ================= ABOUT SECTION ================= */}
//       <section className="bg-indigo-50 py-20">
//         <div className="max-w-4xl mx-auto text-center px-6">
//           <h2 className="text-4xl font-bold text-indigo-900 mb-4 animate-fadeUp">
//             About Our Team
//           </h2>
//           <p className="text-lg text-indigo-800 animate-fadeUp delay-100">
//             We are a dedicated team delivering clean, modern, and user-friendly web solutions. Our goal is a smooth and enjoyable experience.
//           </p>
//         </div>
//       </section>

//       {/* ================= HIGHLIGHTS SECTION ================= */}
//       <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 py-16">
//         {highlights.map((item, idx) => {
//           const Icon = item.icon;
//           return (
//             <div key={idx} className="bg-white rounded-2xl shadow-sm p-8 text-center hover:shadow-md transform transition duration-300">
//               <Icon size={36} className="mx-auto mb-4 text-indigo-400" />
//               <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
//             </div>
//           );
//         })}
//       </section>

//       {/* ================= MAP SECTION ================= */}
//       <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20">
//         <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Location</h2>
//         <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-sm">
//           <iframe
//             className="w-full h-full"
//             src="https://maps.google.com/maps?q=pune&t=&z=13&ie=UTF8&iwloc=&output=embed"
//             frameBorder="0"
//             allowFullScreen=""
//             aria-hidden="false"F
//             tabIndex="0"
//           ></iframe>
//         </div>
//       </section>

//       {/* ================= LOGOS SECTION ================= */}
//       <section className="relative py-20">
//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1556741533-f6acd647d2fb?auto=format&fit=crop&w=1950&q=80')" }}
//         />
//         {/* Subtle Overlay */}
//         <div className="absolute inset-0 bg-white/15"></div>

//         {/* Content */}
//         <div className="relative max-w-6xl mx-auto px-6 text-center">
//           <h2 className="text-3xl font-bold text-gray-800 mb-10">Trusted by Top Companies</h2>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
//             {logos.map((logo, idx) => (
//               <img
//                 key={idx}
//                 src={logo.src}
//                 alt={logo.alt}
//                 className="h-10 object-contain filter brightness-0 invert"
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= ANIMATIONS ================= */}
//       <style>{`
//         @keyframes fadeUp {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeUp { animation: fadeUp 0.8s ease-out forwards; }

//         @keyframes slideUp {
//           0% { opacity: 0; transform: translateY(10px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
//       `}</style>

//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Clock, Users } from "lucide-react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [toastMsg, setToastMsg] = useState("");
//   const [toastType, setToastType] = useState("success");

//   const contactInfo = [
//     { icon: MapPin, title: "Address", text: "Pali t.ategaon, Maharashtra" },
//     { icon: Phone, title: "Phone", text: "+91 9420604657/9421687397" },
//     { icon: Mail, title: "Email", text: "support@gmail.com" },
//     { icon: Clock, title: "Working Hours", text: "9 AM – 9 PM" },
//   ];

//   const highlights = [
//     { title: "Professional Team", icon: Users },
//     { title: "Fast Response", icon: Mail },
//     { title: "Reliable Support", icon: Phone },
//   ];

//   const logos = [
//     { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Google_Logo.svg", alt: "Google" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", alt: "Apple" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg", alt: "Facebook" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Adobe_Corporate_logo.svg", alt: "Adobe" },
//     { src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Spotify_logo_with_text.svg", alt: "Spotify" },
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setToastMsg("");

//     try {
//       const response = await fetch("http://localhost:8080/api/contact/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.text();
//         setToastType("success");
//         setToastMsg(data || "Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         const errorText = await response.text();
//         setToastType("error");
//         setToastMsg(errorText || "Failed to send message.");
//       }
//     } catch (err) {
//       setToastType("error");
//       setToastMsg("Error connecting to server. Try again later.");
//     } finally {
//       setLoading(false);
//       setTimeout(() => setToastMsg(""), 4000);
//     }
//   };

//   // ======== Toast Component (UPDATED WITH z-index) ========
//   const Toast = ({ message, type, onClose }) => {
//     if (!message) return null;

//     return (
//       <div
//         className={`
//           fixed top-5 right-5 z-[9999] px-6 py-4 rounded-lg shadow-lg text-white
//           ${type === "success" ? "bg-green-500" : "bg-red-500"}
//           animate-slideDown
//         `}
//       >
//         <p>{message}</p>
//         <button onClick={onClose} className="ml-4 font-bold hover:text-gray-200">
//           ✕
//         </button>

//         <style>{`
//           @keyframes slideDown {
//             0% { opacity: 0; transform: translateY(-20px); }
//             100% { opacity: 1; transform: translateY(0); }
//           }
//           .animate-slideDown { animation: slideDown 0.5s ease-out forwards; }
//         `}</style>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-50">

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581091215369-24c0b7487cf9?auto=format&fit=crop&w=1950&q=80')" }}
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-white/10" />
//         <div className="relative z-10 text-center max-w-3xl px-6 py-16 bg-white/70 backdrop-blur-md rounded-3xl shadow-md animate-fadeUp">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-slideUp">
//             Get In Touch
//           </h1>
//           <p className="text-gray-700 text-lg animate-slideUp delay-100">
//             We're here to help with everything — support, business inquiries, or general questions.
//           </p>
//           <div className="mt-6 w-32 h-1 mx-auto bg-indigo-400 rounded-full animate-pulse"></div>
//         </div>
//       </section>

//       {/* ================= CONTACT SECTION ================= */}
//       <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-10 -mt-16 mb-20">

//         {/* Contact Info */}
//         <div className="space-y-6">
//           {contactInfo.map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={idx}
//                 className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transform transition-all hover:-translate-y-1 hover:scale-102 duration-300 animate-fadeUp"
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 <div className="p-3 rounded-lg bg-indigo-100">
//                   <Icon size={26} className="text-indigo-500" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">{item.title}</p>
//                   <p className="text-lg font-medium text-gray-800">{item.text}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white rounded-2xl shadow-sm p-10 animate-fadeUp">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//               required
//             />

//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//               required
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 bg-indigo-400 text-white rounded-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* ================= TOAST POPUP ================= */}
//       <Toast message={toastMsg} type={toastType} onClose={() => setToastMsg("")} />

//       {/* ================= ANIMATIONS ================= */}
//       <style>{`
//         @keyframes fadeUp {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeUp { animation: fadeUp 0.8s ease-out forwards; }

//         @keyframes slideUp {
//           0% { opacity: 0; transform: translateY(10px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
//       `}</style>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Clock, Users } from "lucide-react";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [toastMsg, setToastMsg] = useState("");
//   const [toastType, setToastType] = useState("success");

//   const contactInfo = [
//     { icon: MapPin, title: "Address", text: "Pali t.ategaon, Maharashtra" },
//     { icon: Phone, title: "Phone", text: "+91 9420604657/9421687397" },
//     { icon: Mail, title: "Email", text: "support@gmail.com" },
//     { icon: Clock, title: "Working Hours", text: "9 AM – 9 PM" },
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setToastMsg("");

//     try {
//       const response = await fetch("http://localhost:8080/api/contact/send", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.text();
//         setToastType("success");
//         setToastMsg(data || "Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         const errorText = await response.text();
//         setToastType("error");
//         setToastMsg(errorText || "Failed to send message.");
//       }
//     } catch (err) {
//       setToastType("error");
//       setToastMsg("Error connecting to server. Try again later.");
//     } finally {
//       setLoading(false);
//       setTimeout(() => setToastMsg(""), 4000);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-50">

//       {/* ================= HERO SECTION ================= */}
//       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1581091215369-24c0b7487cf9?auto=format&fit=crop&w=1950&q=80')",
//           }}
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-white/10" />
//         <div className="relative z-10 text-center max-w-3xl px-6 py-16 bg-white/70 backdrop-blur-md rounded-3xl shadow-md animate-fadeUp">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-slideUp">
//             Get In Touch
//           </h1>
//           <p className="text-gray-700 text-lg animate-slideUp delay-100">
//             We're here to help with everything — support, business inquiries, or general questions.
//           </p>
//           <div className="mt-6 w-32 h-1 mx-auto bg-indigo-400 rounded-full animate-pulse"></div>
//         </div>
//       </section>

//       {/* ================= CONTACT SECTION ================= */}
//       <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-10 -mt-16 mb-20">

//         {/* Contact Info Cards */}
//         <div className="space-y-6">
//           {contactInfo.map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={idx}
//                 className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transform transition-all hover:-translate-y-1 hover:scale-102 duration-300 animate-fadeUp"
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 <div className="p-3 rounded-lg bg-indigo-100">
//                   <Icon size={26} className="text-indigo-500" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">{item.title}</p>
//                   <p className="text-lg font-medium text-gray-800">{item.text}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* ================= CONTACT FORM ================= */}
//         <div className="bg-white rounded-2xl shadow-sm p-10 animate-fadeUp">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>

//           <form className="space-y-4" onSubmit={handleSubmit}>

//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//               required
//             />

//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//               required
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 bg-indigo-400 text-white rounded-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>

//             {/* ========== MESSAGE BELOW BUTTON ========== */}
//             {toastMsg && (
//               <p
//                 className={`text-center mt-2 font-medium ${
//                   toastType === "success" ? "text-green-600" : "text-red-600"
//                 }`}
//               >
//                 {toastMsg}
//               </p>
//             )}
//           </form>
//         </div>
//       </section>

//       {/* ================= ANIMATIONS ================= */}
//       <style>{`
//         @keyframes fadeUp {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeUp { animation: fadeUp 0.8s ease-out forwards; }

//         @keyframes slideUp {
//           0% { opacity: 0; transform: translateY(10px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
//       `}</style>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Clock, Contact } from "lucide-react";
// import map from '../../src/assets/images/map.jpg';
// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [toastMsg, setToastMsg] = useState("");
//   const [toastType, setToastType] = useState("success");

//   const contactInfo = [
//     { icon: MapPin, title: "Address", text: "Pali t.ategaon, Maharashtra" },
//     { icon: Phone, title: "Phone", text: "+91 9420604657/9421687397" },
//     { icon: Contact, title: "Mr : DIPAK SHANKAR SHINDE", text: "UPI-ID : ds5705386@okaxis" },
//     { icon: Mail, title: "Email", text: "support@gmail.com" },
//     { icon: Clock, title: "Working Hours", text: "24 X 7 " },

//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setToastMsg("");

//     try {
//       const response = await fetch("http://localhost:5000/api/contact/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         const data = await response.text();
//         setToastType("success");
//         setToastMsg(data || "Message sent successfully!");
//         setFormData({ name: "", email: "", message: "" });
//       } else {
//         const errorText = await response.text();
//         setToastType("error");
//         setToastMsg(errorText || "Failed to send message.");
//       }
//     } catch (err) {
//       setToastType("error");
//       setToastMsg("Error connecting to server. Try again later.");
//     } finally {
//       setLoading(false);
//       setTimeout(() => setToastMsg(""), 4000);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-50">
//       {/* ================= HERO SECTION ================= */}
//       <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
//         <div
//           className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
//           style={{
//             backgroundImage:
//               "url('https://images.unsplash.com/photo-1581091215369-24c0b7487cf9?auto=format&fit=crop&w=1950&q=80')",
//           }}
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-white/10" />
//         <div className="relative z-10 text-center max-w-3xl px-6 py-16 bg-white/70 backdrop-blur-md rounded-3xl shadow-md animate-fadeUp">
//           <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 animate-slideUp">
//             Get In Touch
//           </h1>
//           <p className="text-gray-700 text-lg animate-slideUp delay-100">
//             We're here to help with everything — support, business inquiries, or general questions.
//           </p>
//           <div className="mt-6 w-32 h-1 mx-auto bg-indigo-400 rounded-full animate-pulse"></div>
//         </div>
//       </section>

//       {/* ================= CONTACT SECTION ================= */}
//       <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-10 -mt-16 mb-20">
//         {/* Contact Info Cards */}
//         <div className="space-y-6">
//           {contactInfo.map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={idx}
//                 className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transform transition-all hover:-translate-y-1 hover:scale-102 duration-300 animate-fadeUp"
//                 style={{ animationDelay: `${idx * 0.1}s` }}
//               >
//                 <div className="p-3 rounded-lg bg-indigo-100">
//                   <Icon size={26} className="text-indigo-500" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">{item.title}</p>
//                   <p className="text-lg font-medium text-gray-800">{item.text}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white rounded-2xl shadow-sm p-10 animate-fadeUp">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//               required
//             />
//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
//               required
//             />
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 bg-indigo-400 text-white rounded-lg hover:bg-indigo-500 hover:scale-105 transition-all duration-300"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>

//             {toastMsg && (
//               <p
//                 className={`text-center mt-2 font-medium ${toastType === "success" ? "text-green-600" : "text-red-600"
//                   }`}
//               >
//                 {toastMsg}
//               </p>
//             )}
//           </form>
//         </div>
//       </section>

//       {/* ================= MAP SECTION ================= */}
//       <section className="w-full h-[600px] mb-20 overflow-hidden rounded-2xl shadow-md">
//         <img
//           src={map} // Local map from public folder
//           alt="Company Location"
//            className="h-[600px] w-auto object-cover rounded-2xl"
//     style={{ marginLeft: "180px", marginRight: "180px" }}
//         />
//       </section>

//       <section className="max-w-6xl mx-auto px-6 md:px-10 mb-20 animate-fadeUp">

//         <h2 className="text-3xl font-semibold text-gray-800 mb-4">Find Us on Map</h2>


//         <div className="rounded-3xl overflow-hidden shadow-lg h-[420px]">

//           <iframe

//             title="Google Map"

//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.7582023265!2d73.7168202!3d17.7745336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc26d07cf581663%3A0xc9501e4c59352d5b!2sWaghera%20Agro-tourism%20Resort!5e0!3m2!1sen!2sin!4v1700000000000"

//             width="100%"

//             height="100%"

//             style={{ border: 0 }}

//             allowFullScreen=""

//             loading="lazy"

//             referrerPolicy="no-referrer-when-downgrade"

//           ></iframe>

//         </div>

//       </section>

//       <style>{`
//         @keyframes fadeUp {
//           0% { opacity: 0; transform: translateY(20px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-fadeUp { animation: fadeUp 0.8s ease-out forwards; }

//         @keyframes slideUp {
//           0% { opacity: 0; transform: translateY(10px); }
//           100% { opacity: 1; transform: translateY(0); }
//         }
//         .animate-slideUp { animation: slideUp 0.8s ease-out forwards; }
//       `}</style>
//     </div>
//   );
// }











// import React, { useState } from "react";
// import { Mail, Phone, MapPin, Clock, Contact } from "lucide-react";
// import map from "../../src/assets/images/map.jpg";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",   // ✅ added
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [toastMsg, setToastMsg] = useState("");
//   const [toastType, setToastType] = useState("success");

//   const contactInfo = [
//     { icon: MapPin, title: "Address", text: "Pali t.ategaon, Maharashtra" },
//     { icon: Phone, title: "Phone", text: "+91 9420604657/9421687397" },
//     { icon: Contact, title: "Mr : DIPAK SHANKAR SHINDE", text: "UPI-ID : ds5705386@okaxis" },
//     { icon: Mail, title: "Email", text: "support@gmail.com" },
//     { icon: Clock, title: "Working Hours", text: "24 X 7" },
//   ];

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setToastMsg("");

//     try {
//       const response = await fetch("http://localhost:5000/api/contact/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setToastType("success");
//         setToastMsg("Message sent successfully!");
//         setFormData({ name: "", email: "", mobile: "", message: "" }); // ✅ reset
//       } else {
//         setToastType("error");
//         setToastMsg("Failed to send message.");
//       }
//     } catch (err) {
//       setToastType("error");
//       setToastMsg("Error connecting to server.");
//     } finally {
//       setLoading(false);
//       setTimeout(() => setToastMsg(""), 4000);
//     }
//   };

//   return (
//     <div className="min-h-screen w-full bg-gray-50">
//       {/* CONTACT SECTION */}
//       <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-10 mt-20 mb-20">
//         {/* Contact Info */}
//         <div className="space-y-6">
//           {contactInfo.map((item, idx) => {
//             const Icon = item.icon;
//             return (
//               <div
//                 key={idx}
//                 className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm"
//               >
//                 <div className="p-3 rounded-lg bg-indigo-100">
//                   <Icon size={26} className="text-indigo-500" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">{item.title}</p>
//                   <p className="text-lg font-medium text-gray-800">{item.text}</p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Contact Form */}
//         <div className="bg-white rounded-2xl shadow-sm p-10">
//           <h2 className="text-3xl font-semibold text-gray-800 mb-6">
//             Send Us a Message
//           </h2>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg"
//               required
//             />

//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg"
//               required
//             />

//             {/* ✅ MOBILE NUMBER FIELD */}
//             <input
//               type="tel"
//               name="mobile"
//               placeholder="Your Mobile Number"
//               value={formData.mobile}
//               onChange={handleChange}
//               pattern="[6-9]{1}[0-9]{9}"
//               maxLength="10"
//               className="w-full p-3 border rounded-lg"
//               required
//             />

//             <textarea
//               name="message"
//               rows="5"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full p-3 border rounded-lg"
//               required
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 bg-indigo-400 text-white rounded-lg"
//             >
//               {loading ? "Sending..." : "Send Message"}
//             </button>

//             {toastMsg && (
//               <p
//                 className={`text-center mt-2 ${
//                   toastType === "success"
//                     ? "text-green-600"
//                     : "text-red-600"
//                 }`}
//               >
//                 {toastMsg}
//               </p>
//             )}
//           </form>
//         </div>
//       </section>

//       {/* MAP */}
//       <section className="w-full h-[600px] mb-20">
//         <img
//           src={map}
//           alt="Company Location"
//           className="h-[600px] w-auto object-cover mx-auto rounded-2xl"
//         />
//       </section>
//     </div>
//   );
// }




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
      <section className="relative h-[80vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091215369-24c0b7487cf9?auto=format&fit=crop&w=1950&q=80')",
          }}
        />
        <div className="absolute inset-0 " />
        <div className="relative z-10 text-center max-w-3xl px-6 py-16 bg-white/80 backdrop-blur-md rounded-3xl shadow-md animate-fadeUp">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Get In Touch
          </h1>
          <p className="text-gray-700 text-lg">
            We’re here for support, inquiries & collaborations
          </p>
          <div className="mt-6 w-32 h-1 mx-auto bg-[#AB8A62] rounded-full"></div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 md:px-10 -mt-16 mb-20">

        {/* CONTACT INFO */}
        <div className="space-y-6">
          {contactInfo.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <div className="p-3 rounded-lg bg-[#f0e6d2]">
                  <Icon size={26} className="text-[#AB8A62]" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">{item.title}</p>
                  <p className="text-lg font-medium text-gray-800">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CONTACT FORM */}
        <div className="bg-white rounded-2xl shadow-sm p-10">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#AB8A62] focus:border-transparent transition"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#AB8A62] focus:border-transparent transition"
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
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#AB8A62] focus:border-transparent transition"
              required
            />

            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#AB8A62] focus:border-transparent transition"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#AB8A62] text-white rounded-lg hover:bg-[#a8815e] transition duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {toastMsg && (
              <p
                className={`text-center mt-2 font-medium ${
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
      <section className="w-full h-[600px] mb-20">
        <img
          src={map}
          alt="Company Location"
          className="h-full w-auto mx-auto object-cover rounded-2xl shadow-md"
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
