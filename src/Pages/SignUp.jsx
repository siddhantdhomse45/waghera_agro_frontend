// import { FaGoogle, FaFacebookF } from "react-icons/fa";

// export default function SignUp({ onSwitchToSignIn }) {
//   return (
//     <div className="flex items-center justify-center px-4">
//       <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">
//         <h2 className="text-2xl font-semibold mb-6 text-center">Create Your Account</h2>

//         {/* Name Input */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium text-gray-700">Your Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Email Input */}
//         <div className="mb-4">
//           <label className="block mb-1 font-medium text-gray-700">Your Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         <div className="mb-6">
//           <label className="block mb-1 font-medium text-gray-700">Contact</label>
//           <input
//             type="contact"
//             placeholder="Enter your contact number"
//             className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Password Input */}
//         <div className="mb-6">
//           <label className="block mb-1 font-medium text-gray-700">Password</label>
//           <input
//             type="password"
//             placeholder="Create a password"
//             className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>
//          <div className="mb-6">
//           <label className="block mb-1 font-medium text-gray-700">Confirm Password</label>
//           <input
//             type=" confirm password"
//             placeholder="Confirm a password"
//             className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//           />
//         </div>

//         {/* Sign Up Button */}
//         <button className="w-full bg-blue-50 hover:bg-[#a8815e] text-black py-2 rounded font-medium mb-4">
//           Register
//         </button>

//         {/* Divider */}
//         <div className="flex items-center gap-2 my-4">
//           <hr className="flex-1 border-gray-300" />
//           <span className="text-gray-400">Or</span>
//           <hr className="flex-1 border-gray-300" />
//         </div>

//         {/* Social Buttons */}
//         <div className="flex flex-col sm:flex-row gap-3">
//           <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-[#a8815e]">
//             <FaGoogle /> Continue with Google
//           </button>
//           <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-[#a8815e]">
//             <FaFacebookF /> Continue with Facebook
//           </button>
//         </div>

//         {/* Login Link */}
//         <p className="text-sm text-center mt-6">
//           Already have an account?{" "}
//           <span
//   className="text-blue-600 hover:underline cursor-pointer"
//   onClick={onSwitchToSignIn}
// >
//   Login
// </span>
//         </p>
//       </div>
//     </div>
//   );
// }



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
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           name: form.name,
//           email: form.email,
//           contact: form.contact,
//           password: form.password
//         }),
//       });

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
//   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
//     <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">

//       {/* Title */}
//       <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
//         Create Your Account
//       </h2>

//       {/* Name */}
//       <div className="mb-4">
//         <label className="block mb-1 text-sm font-medium text-gray-600">
//           Your Name
//         </label>
//         <input
//           type="text"
//           placeholder="Enter your name"
//           name="name"
//           value={form.name}
//           onChange={handleChange}
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
//                      focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//         />
//       </div>

//       {/* Email */}
//       <div className="mb-4">
//         <label className="block mb-1 text-sm font-medium text-gray-600">
//           Your Email
//         </label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           name="email"
//           value={form.email}
//           onChange={handleChange}
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
//                      focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//         />
//       </div>

//       {/* Contact */}
//       <div className="mb-4">
//         <label className="block mb-1 text-sm font-medium text-gray-600">
//           Contact Number
//         </label>
//         <input
//           type="tel"
//           placeholder="Enter your contact number"
//           name="contact"
//           value={form.contact}
//           onChange={handleChange}
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
//                      focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//         />
//       </div>

//       {/* Password */}
//       <div className="mb-4">
//         <label className="block mb-1 text-sm font-medium text-gray-600">
//           Password
//         </label>
//         <input
//           type="password"
//           placeholder="Create a password"
//           name="password"
//           value={form.password}
//           onChange={handleChange}
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
//                      focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//         />
//       </div>

//       {/* Confirm Password */}
//       <div className="mb-6">
//         <label className="block mb-1 text-sm font-medium text-gray-600">
//           Confirm Password
//         </label>
//         <input
//           type="password"
//           placeholder="Confirm your password"
//           name="confirmPassword"
//           value={form.confirmPassword}
//           onChange={handleChange}
//           className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
//                      focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//         />
//       </div>

//       {/* Register Button */}
//       <button
//         onClick={handleRegister}
//         className="w-full bg-[#a8815e] text-white py-2.5 rounded-lg font-semibold
//                    hover:bg-[#8f6b4c] transition duration-300 mb-4"
//       >
//         Register
//       </button>

//       {/* Divider */}
//       <div className="flex items-center gap-3 my-5">
//         <hr className="flex-1 border-gray-300" />
//         <span className="text-gray-400 text-sm">OR</span>
//         <hr className="flex-1 border-gray-300" />
//       </div>

//       {/* Social Login */}
//       <div className="flex flex-col sm:flex-row gap-3">
//         <button
//           className="flex-1 flex items-center justify-center gap-2 border border-gray-300
//                      rounded-lg py-2 text-sm hover:bg-[#a8815e] hover:text-white transition"
//         >
//           <FaGoogle /> Google
//         </button>

//         <button
//           className="flex-1 flex items-center justify-center gap-2 border border-gray-300
//                      rounded-lg py-2 text-sm hover:bg-[#a8815e] hover:text-white transition"
//         >
//           <FaFacebookF /> Facebook
//         </button>
//       </div>

//       {/* Switch to Login */}
//       <p className="text-sm text-center mt-6 text-gray-600">
//         Already have an account?{" "}
//         <span
//           className="text-[#a8815e] font-medium hover:underline cursor-pointer"
//           onClick={onSwitchToSignIn}
//         >
//           Login
//         </span>
//       </p>

//     </div>
//   </div>
// );

// }


// import { useState, useEffect } from "react";
// import { FaGoogle, FaFacebookF } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";


// export default function SignUp({ onSwitchToSignIn, onClose }) {

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const navigate = useNavigate();


//   // Disable background scroll
//   useEffect(() => {
//     document.body.style.overflow = "hidden";
//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, []);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleRegister = async () => {
//     if (form.password !== form.confirmPassword) {
//       alert("Passwords do not match!");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/auth/signup", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({
//           name: form.name,
//           email: form.email,
//           contact: form.contact,
//           password: form.password,
//         }),
//       });

//       const data = await response.text();
//       alert(data);

//       if (response.ok) {
//         onSwitchToSignIn();
//       }
//     } catch (error) {
//       alert("Something went wrong.");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 rounded-2xl">
      
//       {/* Modal Card */}
//       <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 animate-scaleIn">

//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
//         >
//           ✕
//         </button>

//         <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
//           Create Your Account
//         </h2>

//         {/* Name */}
//         <div className="mb-4">
//           <label className="block mb-1 text-sm font-medium text-gray-600">
//             Your Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="Enter your name"
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
//                        focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//           />
//         </div>

//         {/* Email */}
//         <div className="mb-4">
//           <label className="block mb-1 text-sm font-medium text-gray-600">
//             Your Email
//           </label>
//           <input
//             type="email"
//             name="email"
//             value={form.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
//                        focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//           />
//         </div>

//         {/* Contact */}
//         <div className="mb-4">
//           <label className="block mb-1 text-sm font-medium text-gray-600">
//             Contact Number
//           </label>
//           <input
//             type="tel"
//             name="contact"
//             value={form.contact}
//             onChange={handleChange}
//             placeholder="Enter your contact number"
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
//                        focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//           />
//         </div>

//         {/* Password */}
//         <div className="mb-4">
//           <label className="block mb-1 text-sm font-medium text-gray-600">
//             Password
//           </label>
//           <input
//             type="password"
//             name="password"
//             value={form.password}
//             onChange={handleChange}
//             placeholder="Create a password"
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
//                        focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//           />
//         </div>

//         {/* Confirm Password */}
//         <div className="mb-6">
//           <label className="block mb-1 text-sm font-medium text-gray-600">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={form.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm your password"
//             className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm
//                        focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//           />
//         </div>

//         <button
//           onClick={handleRegister}
//           className="w-full bg-[#a8815e] text-white py-2.5 rounded-lg font-semibold
//                      hover:bg-[#8f6b4c] transition mb-4"
//         >
//           Register
//         </button>

//         <div className="flex items-center gap-3 my-5">
//           <hr className="flex-1 border-gray-300" />
//           <span className="text-gray-400 text-sm">OR</span>
//           <hr className="flex-1 border-gray-300" />
//         </div>

//         <div className="flex flex-col sm:flex-row gap-3">
//           <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-[#a8815e] hover:text-white transition">
//             <FaGoogle /> Google
//           </button>
//           <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-[#a8815e] hover:text-white transition">
//             <FaFacebookF /> Facebook
//           </button>
//         </div>

//         {/* <p className="text-sm text-center mt-6 text-gray-600">
//           Already have an account?{" "}
//           <span
//             className="text-[#a8815e] font-medium hover:underline cursor-pointer"
//             onClick={onSwitchToSignIn}
//           >
//             Login
//           </span>
//         </p> */}

//         <p className="text-sm text-center mt-6 text-gray-600">
//   Already have an account?{" "}
//   <span
//     className="text-[#a8815e] font-medium hover:underline cursor-pointer"
//     onClick={() => navigate("/SignIn")}
//   >
//     Login
//   </span>
// </p>

//       </div>
//     </div>
//   );
//}


import { useState, useEffect } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";

export default function SignUp({ onSwitchToSignIn, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          contact: form.contact,
          password: form.password,
        }),
      });

      const data = await response.text();
      alert(data);

      if (response.ok) {
        // Close SignUp modal and open SignIn modal
        onClose && onClose();           // Close current modal
        onSwitchToSignIn && onSwitchToSignIn(); // Open SignIn modal
      }
    } catch (error) {
      alert("Something went wrong.");
      console.error(error);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
          Create Your Account
        </h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Your Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
          />
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Contact Number
          </label>
          <input
            type="tel"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Create a password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block mb-1 text-sm font-medium text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
          />
        </div>

        <button
          onClick={handleRegister}
          className="w-full bg-[#a8815e] text-white py-2.5 rounded-lg font-semibold hover:bg-[#8f6b4c] transition mb-4"
        >
          Register
        </button>

        <div className="flex items-center gap-3 my-5">
          <hr className="flex-1 border-gray-300" />
          <span className="text-gray-400 text-sm">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-[#a8815e] hover:text-white transition">
            <FaGoogle /> Google
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-[#a8815e] hover:text-white transition">
            <FaFacebookF /> Facebook
          </button>
        </div>

        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <span
            className="text-[#a8815e] font-medium hover:underline cursor-pointer"
            onClick={() => {
              onClose && onClose();
              onSwitchToSignIn && onSwitchToSignIn();
            }}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

