// import { FaGoogle, FaFacebookF } from "react-icons/fa";
// import { useState } from "react";

// export default function SignIn({ onSwitchToSignUp }) {
//   const [showForgotPassword, setShowForgotPassword] = useState(false);

//   return (
//     <div className="animate-fadeIn scale-95 animate-scaleUp">
//       <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 border border-gray-200">

//         {/* ---------- Forgot Password Form ---------- */}
//         {showForgotPassword ? (
//           <>
//             <h2 className="text-2xl font-bold mb-6 text-center font-serif text-gray-800">
//               Forgot Password
//             </h2>

//             <form onSubmit={(e) => e.preventDefault()}>
//               <label className="block mb-1 text-gray-700 font-medium">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 required
//                 placeholder="Enter your email"
//                 className="w-full border border-yellow-600 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition"
//               >
//                 Reset Password
//               </button>

//               <p className="text-center text-sm mt-4 text-gray-500">
//                 Remember your password?{" "}
//                 <button
//                   onClick={() => setShowForgotPassword(false)}
//                   className="text-yellow-700 font-semibold hover:underline"
//                 >
//                   Login
//                 </button>
//               </p>
//             </form>
//           </>
//         ) : (
//           /* ---------- Login Form ---------- */
//           <>
//             <h2 className="text-2xl font-bold mb-6 text-center font-serif text-gray-800">
//               Login To Waghera Agro Tourism
//             </h2>

//             {/* Email */}
//             <div className="mb-4">
//               <label className="block mb-1 font-medium text-gray-700">
//                 Your Email
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 
//                 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//               />
//             </div>

//             {/* Password */}
//             <div className="mb-4">
//               <label className="block mb-1 font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full border border-gray-300 rounded-md px-4 py-2 
//                 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//               />
//             </div>

//             {/* Remember + Forgot */}
//             <div className="flex items-center justify-between text-sm mb-6">
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" className="accent-yellow-600" />
//                 Remember me
//               </label>

//               <button
//                 onClick={() => setShowForgotPassword(true)}
//                 className="text-gray-600 hover:text-yellow-700 font-medium"
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             {/* Login Button */}
//             <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-md font-medium mb-4 transition-all">
//               Login
//             </button>

//             {/* Divider */}
//             <div className="flex items-center gap-2 my-4">
//               <hr className="flex-1 border-gray-300" />
//               <span className="text-gray-500">Or</span>
//               <hr className="flex-1 border-gray-300" />
//             </div>

//             {/* Social Buttons */}
//             <div className="flex flex-col sm:flex-row gap-3">
//               <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-100">
//                 <FaGoogle className="text-red-500" /> Continue with Google
//               </button>

//               <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-100">
//                 <FaFacebookF className="text-blue-600" /> Continue with Facebook
//               </button>
//             </div>

//             {/* Switch to Signup */}
//             <p className="text-sm text-center mt-6 text-gray-600">
//               Don’t have an account?{" "}
//               <span
//                 onClick={onSwitchToSignUp}
//                 className="text-yellow-700 hover:underline cursor-pointer font-semibold"
//               >
//                 Sign Up
//               </span>
//             </p>
//           </>
//         )}
//       </div>

//       {/* ANIMATION CSS */}
//       <style>{`
//         .animate-fadeIn {
//           animation: fadeIn 0.3s ease-out forwards;
//         }

//         .animate-scaleUp {
//           animation: scaleUp 0.3s ease-out forwards;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; }
//           to { opacity: 1; }
//         }

//         @keyframes scaleUp {
//           from { transform: scale(0.95); }
//           to { transform: scale(1); }
//         }
//       `}</style>
//     </div>
//   );
// }





import { useState } from "react";

// --- START: Inline SVG Icons (Replace react-icons) ---
const GoogleIcon = ({ className = "w-5 h-5 text-red-500" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0c-6.63 0-12 5.37-12 12s5.37 12 12 12 12-5.37 12-12-5.37-12-12-12zm.45 19.34c-3.15 0-5.71-2.56-5.71-5.71s2.56-5.71 5.71-5.71c1.5 0 2.87.56 3.92 1.5l-1.99 1.99c-.52-.5-1.16-.76-1.93-.76-1.89 0-3.44 1.55-3.44 3.44s1.55 3.44 3.44 3.44c2.09 0 3.12-1.35 3.25-2.61h-3.25v-2.19h5.68c.08.38.12.79.12 1.25.01 3.51-2.45 6-5.83 6z"/>
    </svg>
);

const FacebookIcon = ({ className = "w-5 h-5 text-blue-600" }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385h-3.45v-3.469h3.45l-.001-2.378c0-3.445 2.083-5.352 5.195-5.352 1.472 0 2.448.109 2.76.157v3.136h-1.879c-1.815 0-2.072.86-2.072 2.036v2.607h3.699l-.608 3.469h-3.091v8.385c5.736-.9 10.124-5.864 10.124-11.854z"/>
    </svg>
);
// --- END ICONS ---

// --- API SERVICE ---
const API_BASE_URL = "http://localhost:8080/api/auth";

const apiCall = async (endpoint, options) => {
    const maxRetries = 3;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            const response = await fetch(`${API_BASE_URL}/${endpoint}`, options);
            const responseText = await response.text();

            if (response.ok) {
                return { success: true, message: responseText };
            } else {
                return { success: false, message: responseText || `Error: ${response.status}` };
            }
        } catch (error) {
            const delay = Math.pow(2, attempt) * 1000;
            if (attempt < maxRetries - 1) {
                await new Promise(resolve => setTimeout(resolve, delay));
            }
        }
    }

    return {
        success: false,
        message: "Network Error: Could not reach backend API. Check server & CORS."
    };
};

const signInUser = (credentials) => {
    return apiCall("signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
    });
};

// --- Message Component ---
const Message = ({ type, text }) => {
    if (!text) return null;

    const styles = {
        success: "bg-green-100 text-green-800 border-green-500",
        error: "bg-red-100 text-red-800 border-red-500",
        info: "bg-blue-100 text-blue-800 border-blue-500",
    };

    return (
        <div className={`p-3 mb-4 rounded border-l-4 ${styles[type]}`}>
            {text}
        </div>
    );
};

// --- MAIN COMPONENT ---
export default function SignIn({ onSwitchToSignUp }) {
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setMessage("");
    };

    const handleSignIn = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setMessage("Attempting login...");
        setMessageType("info");

        const result = await signInUser(formData);

        if (result.success) {
            setMessage(`✅ ${result.message}`);
            setMessageType("success");
            setFormData({ email: "", password: "" });

        } else {
            setMessage(`❌ ${result.message}`);
            setMessageType("error");
        }

        setIsLoading(false);
    };

    return (
        <div className="flex items-center justify-center px-4">
            <div className="animate-fadeIn animate-scaleUp">

                <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 border border-gray-200">

                    {/* LOGIN FORM */}
                    <form onSubmit={handleSignIn}>
                        <h2 className="text-2xl font-bold mb-6 text-center font-serif text-gray-800">
                            Login To Waghera Agro Tourism
                        </h2>

                        {/* Email */}
                        <label className="block mb-1 text-gray-700 font-medium">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            required
                        />

                        {/* Password */}
                        <label className="block mb-1 text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
                            required
                        />

                        {/* Message */}
                        <Message type={messageType} text={message} />

                        {/* Login Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-yellow-600 text-white py-3 rounded-md font-bold mb-4 transition transform hover:scale-105 shadow-md 
                            ${isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-700"}`}
                        >
                            {isLoading ? "Logging In..." : "Login"}
                        </button>

                        {/* Divider */}
                        <div className="flex items-center gap-2 my-4">
                            <hr className="flex-1 border-gray-300" />
                            <span className="text-gray-500">Or</span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        {/* Social Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
                                <GoogleIcon /> Continue with Google
                            </button>

                            <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition">
                                <FacebookIcon /> Continue with Facebook
                            </button>
                        </div>

                        {/* Switch to Signup */}
                        <p className="text-sm text-center mt-6 text-gray-600">
                            Don’t have an account?{" "}
                            <span
                                onClick={onSwitchToSignUp}
                                className="text-yellow-700 font-semibold hover:underline cursor-pointer"
                            >
                                Sign Up
                            </span>
                        </p>
                    </form>
                </div>

                {/* Animations */}
                <style>{`
                    .animate-fadeIn { animation: fadeIn .3s ease-out; }
                    .animate-scaleUp { animation: scaleUp .3s ease-out; }
                    @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
                    @keyframes scaleUp { from{transform:scale(.95);} to{transform:scale(1);} }
                `}</style>
            </div>
        </div>
    );
}
