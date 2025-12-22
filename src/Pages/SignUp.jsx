// import { useState } from "react";
// import { FaGoogle, FaFacebookF } from "react-icons/fa";

// export default function SignUp({ onSwitchToSignIn }) {

//   // Store form values
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     confirmPassword: ""
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Call backend API
//   const handleRegister = async () => {

//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await fetch(
//         "https://backend-waghera.onrender.com/api/auth/signup",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name: form.name,
//             email: form.email,
//             contact: form.contact,
//             password: form.password
//           }),
//         }
//       );

//       const data = await response.text();
//       alert(data);

//       if (response.ok) {
//         onSwitchToSignIn(); // redirect to login
//       }

//     } catch (error) {
//       alert("Something went wrong. Please try again.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 p-8 pb-16">
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6">

//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//           Create Your Account
//         </h2>

//         {/* Name */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium text-gray-700">
//             Your Name
//           </label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium text-gray-700">
//             Your Email
//           </label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Contact */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium text-gray-700">
//             Contact Number
//           </label>
//           <input
//             type="tel"
//             placeholder="Enter your contact number"
//             name="contact"
//             value={form.contact}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             type="password"
//             placeholder="Create a password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-6">
//           <label className="block mb-1 font-medium text-gray-700">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             placeholder="Confirm your password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Register Button */}
//         <button
//           onClick={handleRegister}
//           className="w-full bg-blue-100 hover:bg-[#a8815e] hover:text-white transition py-2 rounded-lg font-semibold text-gray-800 mb-4"
//         >
//           Register
//         </button>

//         {/* Divider */}
//         <div className="flex items-center gap-2 my-4">
//           <hr className="flex-1 border-gray-300" />
//           <span className="text-gray-400 text-sm">Or</span>
//           <hr className="flex-1 border-gray-300" />
//         </div>

//         {/* Social Login */}
//         <div className="flex flex-col sm:flex-row gap-3">
//           <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-[#a8815e] hover:text-white transition">
//             <FaGoogle /> Continue with Google
//           </button>
//           <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-[#a8815e] hover:text-white transition">
//             <FaFacebookF /> Continue with Facebook
//           </button>
//         </div>

//         {/* Switch to Login */}
//         <p className="text-sm text-center mt-6 text-gray-700">
//           Already have an account?{" "}
//           <span
//             className="text-blue-600 hover:underline cursor-pointer"
//             onClick={onSwitchToSignIn}
//           >
//             Login
//           </span>
//         </p>

//       </div>
//     </div>
//   );
// }




// import { useState } from "react";
// import { FaGoogle, FaFacebookF } from "react-icons/fa";

// export default function SignUp({ onSwitchToSignIn }) {

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     confirmPassword: ""
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // const handleRegister = async () => {
//   //   if (form.password !== form.confirmPassword) {
//   //     alert("Passwords do not match!");
//   //     return;
//   //   }

//   //   try {
//   //     const response = await fetch(
//   //       "https://backend-waghera.onrender.com/api/auth/signup",
//   //       {
//   //         method: "POST",
//   //         headers: { "Content-Type": "application/json" },
//   //         body: JSON.stringify({
//   //           name: form.name,
//   //           email: form.email,
//   //           contact: form.contact,
//   //           password: form.password
//   //         }),
//   //       }
//   //     );

//   //     const data = await response.text();
//   //     alert(data);

//   //     if (response.ok) onSwitchToSignIn();
//   //   } catch (error) {
//   //     alert("Something went wrong. Please try again.");
//   //   }
//   // };


//   const handleRegister = async () => {
//   if (form.password !== form.confirmPassword) {
//     alert("Passwords do not match!");
//     return;
//   }

//   try {
//     const response = await fetch(
//   "http://localhost:5000/api/auth/signup",   
// //  "https://backend-waghera.onrender.com/api/auth/signup",
//       {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: form.name,
//           email: form.email,
//           contact: form.contact,
//           password: form.password,
//         }),
//       }
//     );

//     const data = await response.json().catch(() => ({}));

//     console.log("Signup status:", response.status);
//     console.log("Signup response:", data);

//     alert(data.message || "Unknown error");

//     if (response.ok) onSwitchToSignIn();
//   } catch (error) {
//     console.error("Signup error:", error);
//     alert("Something went wrong. Please try again.");
//   }
// };

//   return (
//     <div className="min-h-[85vh] flex items-center justify-center bg-gray-100 px-4">

//       <div className="
//         bg-white 
//         w-full 
//         max-w-xl 
//         rounded-2xl 
//         shadow-lg 
//         p-5
//       ">

//         <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
//           Create Your Account
//         </h2>

//         {/* Name */}
//         <div className="mb-2">
//           <label className="block mb-1 text-sm font-medium text-gray-700">Your Name</label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-2">
//           <label className="block mb-1 text-sm font-medium text-gray-700">Your Email</label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Contact */}
//         <div className="mb-2">
//           <label className="block mb-1 text-sm font-medium text-gray-700">Contact Number</label>
//           <input
//             type="tel"
//             name="contact"
//             value={form.contact}
//             onChange={handleChange}
//             placeholder="Enter contact number"
//             className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-2">
//           <label className="block mb-1 text-sm font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Create password"
//             className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-3">
//           <label className="block mb-1 text-sm font-medium text-gray-700">Confirm Password</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm password"
//             className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         <button
//           onClick={handleRegister}
//           className="w-full py-2 rounded-md font-semibold bg-blue-100 hover:bg-[#a8815e] hover:text-white transition mb-2"
//         >
//           Register
//         </button>

//         <div className="flex items-center gap-2 my-2">
//           <hr className="flex-1" />
//           <span className="text-xs text-gray-400">OR</span>
//           <hr className="flex-1" />
//         </div>

//         <div className="flex gap-2">
//           <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-[#a8815e] hover:text-white transition text-sm">
//             <FaGoogle /> Google
//           </button>
//           <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2 hover:bg-[#a8815e] hover:text-white transition text-sm">
//             <FaFacebookF /> Facebook
//           </button>
//         </div>

//         <p className="text-xs text-center mt-3">
//           Already have an account?{" "}
//           <span
//             className="text-blue-600 cursor-pointer hover:underline"
//             onClick={onSwitchToSignIn}
//           >
//             Login
//           </span>
//         </p>

//       </div>
//     </div>
//   );
// }






import { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function SignUp({ onSwitchToSignIn }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    message: "",
    type: "success", // success | error
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const showPopup = (message, type = "success") => {
    setPopup({ show: true, message, type });
    setTimeout(() => {
      setPopup({ show: false, message: "", type });
    }, 3000);
  };

  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      showPopup("Passwords do not match", "error");
      return;
    }

    try {
      const response = await fetch(
        // "http://localhost:5000/api/auth/signup",
        "https://backend-waghera.onrender.com/api/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            contact: form.contact,
            password: form.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        showPopup(data.message || "Signup failed", "error");
        return;
      }

      showPopup("Registration successful! Please login.", "success");

      setTimeout(() => {
        onSwitchToSignIn();
      }, 2000);
    } catch (error) {
      console.error("Signup error:", error);
      showPopup("Server error. Please try again later.", "error");
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center bg-gray-100 px-4 relative">
      
      {/* ✅ POPUP */}
      {popup.show && (
        <div
          className={`fixed top-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg text-white text-sm
            ${popup.type === "success" ? "bg-green-600" : "bg-red-600"}
          `}
        >
          {popup.message}
        </div>
      )}

      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-5">
        <h2 className="text-xl font-bold mb-4 text-center text-gray-800">
          Create Your Account
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border rounded-md px-3 py-2 mb-2"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border rounded-md px-3 py-2 mb-2"
        />

        {/* Contact */}
        <input
          type="tel"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          placeholder="Contact Number"
          className="w-full border rounded-md px-3 py-2 mb-2"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full border rounded-md px-3 py-2 mb-2"
        />

        {/* Confirm Password */}
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          className="w-full border rounded-md px-3 py-2 mb-3"
        />

        <button
          onClick={handleRegister}
          className="w-full py-2 rounded-md font-semibold bg-blue-100 hover:bg-[#a8815e] hover:text-white transition mb-2"
        >
          Register
        </button>

        <div className="flex items-center gap-2 my-2">
          <hr className="flex-1" />
          <span className="text-xs text-gray-400">OR</span>
          <hr className="flex-1" />
        </div>

        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2">
            <FaGoogle /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border rounded-md py-2">
            <FaFacebookF /> Facebook
          </button>
        </div>

        <p className="text-xs text-center mt-3">
          Already have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={onSwitchToSignIn}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}