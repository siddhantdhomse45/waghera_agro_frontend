// import { useState } from "react";

// const API_BASE_URL = "http://localhost:8080/api/auth";

// const signInUser = async (credentials) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/signin`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(credentials),
//         });

//         const data = await response.json();

//         return {
//             success: response.ok,
//             data,
//         };

//     } catch {
//         return {
//             success: false,
//             data: { message: "Network Error: Backend not reachable" },
//         };
//     }
// };

// const Message = ({ type, text }) => {
//     if (!text) return null;

//     const styles = {
//         success: "bg-green-100 text-green-800 border-green-500",
//         error: "bg-red-100 text-red-800 border-red-500",
//         info: "bg-blue-100 text-blue-800 border-blue-500",
//     };

//     return (
//         <div className={`p-3 mb-4 rounded border-l-4 ${styles[type]}`}>
//             {text}
//         </div>
//     );
// };

// export default function SignIn({ onSwitchToSignUp, onLoginSuccess }) {

//     const [formData, setFormData] = useState({ email: "", password: "" });
//     const [message, setMessage] = useState("");
//     const [messageType, setMessageType] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         setMessage("");
//     };

//     const handleSignIn = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         setMessage("Checking credentials...");
//         setMessageType("info");

//         const result = await signInUser(formData);

//         if (result.success && result.data.success) {
//             setMessage("Login successful!");
//             setMessageType("success");

//             // PASS USER DATA TO PARENT (App.jsx)
//             onLoginSuccess({
//                 id: result.data.id,
//                 name: result.data.name,
//                 email: result.data.email,
//             });

//             setFormData({ email: "", password: "" });

//         } else {
//             setMessage(result.data.message || "Login failed");
//             setMessageType("error");
//         }

//         setIsLoading(false);
//     };

//     return (
//         <div className="flex items-center justify-center px-4">
//             <div className="animate-fadeIn animate-scaleUp">

//                 <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 border border-gray-200">

//                     <form onSubmit={handleSignIn}>
//                         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//                             Login To Waghera Agro Tourism
//                         </h2>

//                         <label className="block mb-1 text-gray-700 font-medium">Your Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Enter your email"
//                             className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-yellow-600"
//                             required
//                         />

//                         <label className="block mb-1 text-gray-700 font-medium">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             placeholder="Enter your password"
//                             className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-yellow-600"
//                             required
//                         />

//                         <Message type={messageType} text={message} />

//                         <button
//                             type="submit"
//                             disabled={isLoading}
//                             className={`w-full bg-yellow-600 text-white py-3 rounded-md font-bold mb-4 transition 
//                             ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-700"}`}
//                         >
//                             {isLoading ? "Logging In..." : "Login"}
//                         </button>

//                         <p className="text-sm text-center mt-6 text-gray-600">
//                             Don’t have an account?{" "}
//                             <span
//                                 onClick={onSwitchToSignUp}
//                                 className="text-yellow-700 font-semibold hover:underline cursor-pointer"
//                             >
//                                 Sign Up
//                             </span>
//                         </p>
//                     </form>
//                 </div>

//                 <style>{`
//                     .animate-fadeIn { animation: fadeIn .3s ease-out; }
//                     .animate-scaleUp { animation: scaleUp .3s ease-out; }
//                     @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
//                     @keyframes scaleUp { from{transform:scale(.95);} to{transform:scale(1);} }
//                 `}</style>
//             </div>
//         </div>
//     );
// }


// import { useState } from "react";

// const API_BASE_URL = "http://localhost:8080/api/auth";

// // 🔹 Call Backend API (POST /signin)
// const signInUser = async (credentials) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/signin`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(credentials),
//         });

//         const data = await response.json();

//         return {
//             success: response.ok,
//             data: data,
//         };

//     } catch (error) {
//         return {
//             success: false,
//             data: { message: "Network Error: Backend not reachable" },
//         };
//     }
// };

// // 🔹 Message Component
// const Message = ({ type, text }) => {
//     if (!text) return null;

//     const styles = {
//         success: "bg-green-100 text-green-800 border-green-500",
//         error: "bg-red-100 text-red-800 border-red-500",
//         info: "bg-blue-100 text-blue-800 border-blue-500",
//     };

//     return (
//         <div className={`p-3 mb-4 rounded border-l-4 ${styles[type]}`}>
//             {text}
//         </div>
//     );
// };

// export default function SignIn({ onSwitchToSignUp, onLoginSuccess }) {

//     const [formData, setFormData] = useState({ email: "", password: "" });
//     const [message, setMessage] = useState("");
//     const [messageType, setMessageType] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     // 🔹 Input Change Handler
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         setMessage("");
//     };

//     // 🔹 Login Submit
//     const handleSignIn = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);

//         setMessage("Checking credentials...");
//         setMessageType("info");

//         const result = await signInUser(formData);

//         // if (result.success && result.data.success) {
//         //     setMessage("Login successful!");
//         //     setMessageType("success");

//         //     // 🔥 Passing user details to App.jsx
//         //     onLoginSuccess({
//         //         id: result.data.id,
//         //         name: result.data.name,
//         //         email: result.data.email,
//         //     });

//         //     setFormData({ email: "", password: "" });

//         // }
        
        
//         if (result.success && result.data.success) {
//     setMessage("Login successful!");
//     setMessageType("success");

//     // 🔥 Store user in localStorage (NEEDED FOR BOOKING)
//     localStorage.setItem("user", JSON.stringify({
//         id: result.data.id,
//         name: result.data.name,
//         email: result.data.email,
//     }));

//     // 🔥 Passing user details to App.jsx
//     onLoginSuccess({
//         id: result.data.id,
//         name: result.data.name,
//         email: result.data.email,
//     });

//     setFormData({ email: "", password: "" });
// }

//         else {
//             setMessage(result.data.message || "Login failed");
//             setMessageType("error");
//         }

//         setIsLoading(false);
//     };

//     return (
//         <div className="flex items-center justify-center px-4">
//             <div className="animate-fadeIn animate-scaleUp">

//                 <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 border border-gray-200">

//                     <form onSubmit={handleSignIn}>
//                         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//                             Login To Waghera Agro Tourism
//                         </h2>

//                         {/* Email */}
//                         <label className="block mb-1 text-gray-700 font-medium">Your Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Enter your email"
//                             className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-yellow-600"
//                             required
//                         />

//                         {/* Password */}
//                         <label className="block mb-1 text-gray-700 font-medium">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             placeholder="Enter your password"
//                             className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-yellow-600"
//                             required
//                         />

//                         {/* Message */}
//                         <Message type={messageType} text={message} />

//                         {/* Login Button */}
//                         <button
//                             type="submit"
//                             disabled={isLoading}
//                             className={`w-full bg-yellow-600 text-white py-3 rounded-md font-bold mb-4 transition 
//                                 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-700"}`}
//                         >
//                             {isLoading ? "Logging In..." : "Login"}
//                         </button>

//                         {/* Switch to Signup */}
//                         <p className="text-sm text-center mt-6 text-gray-600">
//                             Don’t have an account?{" "}
//                             <span
//                                 onClick={onSwitchToSignUp}
//                                 className="text-yellow-700 font-semibold hover:underline cursor-pointer"
//                             >
//                                 Sign Up
//                             </span>
//                         </p>
//                     </form>
//                 </div>

//                 {/* Animations */}
//                 <style>{`
//                     .animate-fadeIn { animation: fadeIn .3s ease-out; }
//                     .animate-scaleUp { animation: scaleUp .3s ease-out; }
//                     @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
//                     @keyframes scaleUp { from{transform:scale(.95);} to{transform:scale(1);} }
//                 `}</style>
//             </div>
//         </div>
//     );
// }





















// import { useState } from "react";

// const API_BASE_URL = "https://backend-waghera.onrender.com/api/auth";

// // 🔹 Call Backend API (POST /signin)
// const signInUser = async (credentials) => {
//     try {
//         const response = await fetch(`${API_BASE_URL}/signin`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(credentials),
//         });

//         const data = await response.json();

//         return {
//             success: response.ok,
//             data: data,
//         };

//     } catch (error) {
//         return {
//             success: false,
//             data: { message: "Network Error: Backend not reachable" },
//         };
//     }
// };

// // 🔹 Message Component
// const Message = ({ type, text }) => {
//     if (!text) return null;

//     const styles = {
//         success: "bg-green-100 text-green-800 border-green-500",
//         error: "bg-red-100 text-red-800 border-red-500",
//         info: "bg-blue-100 text-blue-800 border-blue-500",
//     };

//     return (
//         <div className={`p-3 mb-4 rounded border-l-4 ${styles[type]}`}>
//             {text}
//         </div>
//     );
// };

// export default function SignIn({ onSwitchToSignUp, onLoginSuccess }) {

//     const [formData, setFormData] = useState({ email: "", password: "" });
//     const [message, setMessage] = useState("");
//     const [messageType, setMessageType] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     // 🔹 Input Change Handler
//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//         setMessage("");
//     };

//     // 🔹 Login Submit
//     const handleSignIn = async (e) => {
//         e.preventDefault();
//         setIsLoading(true);

//         setMessage("Checking credentials...");
//         setMessageType("info");

//         const result = await signInUser(formData);

//         if (result.success && result.data.success) {
//             setMessage("Login successful!");
//             setMessageType("success");

//             // 🔥 Store user in localStorage (IMPORTANT for Booking)
//             localStorage.setItem("user", JSON.stringify({
//                 id: result.data.id,
//                 name: result.data.name,
//                 email: result.data.email,
//             }));

//             // 🔥 Notify parent component
//             onLoginSuccess({
//                 id: result.data.id,
//                 name: result.data.name,
//                 email: result.data.email,
//             });

//             // Reset Form
//             setFormData({ email: "", password: "" });
//         }

//         else {
//             setMessage(result.data.message || "Login failed");
//             setMessageType("error");
//         }

//         setIsLoading(false);
//     };

//     return (
//         <div className="flex items-center justify-center px-4">
//             <div className="animate-fadeIn animate-scaleUp">

//                 <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 border border-gray-200">

//                     <form onSubmit={handleSignIn}>
//                         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//                             Login To Waghera Agro Tourism
//                         </h2>

//                         {/* Email */}
//                         <label className="block mb-1 text-gray-700 font-medium">Your Email</label>
//                         <input
//                             type="email"
//                             name="email"
//                             value={formData.email}
//                             onChange={handleChange}
//                             placeholder="Enter your email"
//                             className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-yellow-600"
//                             required
//                         />

//                         {/* Password */}
//                         <label className="block mb-1 text-gray-700 font-medium">Password</label>
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             placeholder="Enter your password"
//                             className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-yellow-600"
//                             required
//                         />

//                         {/* Message */}
//                         <Message type={messageType} text={message} />

//                         {/* Login Button */}
//                         <button
//                             type="submit"
//                             disabled={isLoading}
//                             className={`w-full bg-yellow-600 text-white py-3 rounded-md font-bold mb-4 transition 
//                                 ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-700"}`}
//                         >
//                             {isLoading ? "Logging In..." : "Login"}
//                         </button>

//                         {/* Switch to Signup */}
//                         <p className="text-sm text-center mt-6 text-gray-600">
//                             Don’t have an account?{" "}
//                             <span
//                                 onClick={onSwitchToSignUp}
//                                 className="text-yellow-700 font-semibold hover:underline cursor-pointer"
//                             >
//                                 Sign Up
//                             </span>
//                         </p>
//                     </form>
//                 </div>

//                 {/* Animations */}
//                 <style>{`
//                     .animate-fadeIn { animation: fadeIn .3s ease-out; }
//                     .animate-scaleUp { animation: scaleUp .3s ease-out; }
//                     @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
//                     @keyframes scaleUp { from{transform:scale(.95);} to{transform:scale(1);} }
//                 `}</style>
//             </div>
//         </div>
//     );
// }


// import { useState } from "react";

// const API_BASE_URL = "http://localhost:5000/api/auth";

// const signInUser = async (credentials) => {
//   try {
//     const response = await fetch(`${API_BASE_URL}/signin`, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(credentials),
//     });

//     const data = await response.json();
//     return { success: response.ok, data };
//   } catch (error) {
//     return { success: false, data: { message: "Network Error" } };
//   }
// };

// const Message = ({ type, text }) => {
//   if (!text) return null;
//   const styles = {
//     success: "bg-green-100 text-green-800 border-green-500",
//     error: "bg-red-100 text-red-800 border-red-500",
//     info: "bg-blue-100 text-blue-800 border-blue-500",
//   };
//   return <div className={`p-3 mb-4 rounded border-l-4 ${styles[type]}`}>{text}</div>;
// };

// export default function SignIn({ onSwitchToSignUp, onLoginSuccess }) {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [message, setMessage] = useState("");
//   const [messageType, setMessageType] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setMessage("");
//   };

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage("Checking credentials...");
//     setMessageType("info");

//     const result = await signInUser(formData);

//     if (result.success && result.data.success) {
//       setMessage("Login successful!");
//       setMessageType("success");

//       const loggedUser = {
//         id: result.data.user.id,  // ✅ Correct
//         name: result.data.user.name,
//         email: result.data.user.email,
//       };
//       localStorage.setItem("user", JSON.stringify(loggedUser));
//       onLoginSuccess && onLoginSuccess(loggedUser);
//       setFormData({ email: "", password: "" });
//     } else {
//       setMessage(result.data.message || "Login failed");
//       setMessageType("error");
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div className="flex items-center justify-center px-4">
//       <div className="animate-fadeIn animate-scaleUp">
//         <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 border border-gray-200">
//           <form onSubmit={handleSignIn}>
//             <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
//               Login To Waghera Agro Tourism
//             </h2>

//             <label className="block mb-1 text-gray-700 font-medium">Your Email</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               placeholder="Enter your email"
//               className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-yellow-600"
//               required
//             />

//             <label className="block mb-1 text-gray-700 font-medium">Password</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               placeholder="Enter your password"
//               className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-yellow-600"
//               required
//             />

//             <Message type={messageType} text={message} />

//             <button
//               type="submit"
//               disabled={isLoading}
//               className={`w-full bg-yellow-600 text-white py-3 rounded-md font-bold mb-4 transition ${
//                 isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-700"
//               }`}
//             >
//               {isLoading ? "Logging In..." : "Login"}
//             </button>

//             <p className="text-sm text-center mt-6 text-gray-600">
//               Don’t have an account?{" "}
//               <span
//                 onClick={onSwitchToSignUp}
//                 className="text-yellow-700 font-semibold hover:underline cursor-pointer"
//               >
//                 Sign Up
//               </span>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

export default function SignIn({ onSwitchToSignUp, onLoginSuccess }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        onLoginSuccess && onLoginSuccess(data.user);
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="w-full">
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6">
        <form onSubmit={handleSignIn}>
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
            Login
          </h2>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full mb-3 px-4 py-2 border rounded-lg"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-[#a8815e] text-white py-2.5 rounded-lg font-semibold hover:bg-[#8f6b4c]"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            Don’t have an account?{" "}
            <span
              onClick={onSwitchToSignUp}
              className="text-[#a8815e] font-medium hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
