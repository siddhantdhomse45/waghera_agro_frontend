// import { FaGoogle, FaFacebookF } from "react-icons/fa";
// import { useState } from "react";

// export default function SignIn({ onSwitchToSignUp }) {
//   const [showForgotPassword, setShowForgotPassword] = useState(false);

//   return (
//     <div className="flex items-center justify-center px-4">
//       <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">

//         {showForgotPassword ? (
//           <>
//             <h2 className="text-2xl font-serif mb-6 text-center">Forgot Password</h2>
//             <form onSubmit={(e) => e.preventDefault()}>
//               <label className="block mb-2 text-gray-700 font-medium">Your Email</label>
//               <input
//                 type="email"
//                 required
//                 placeholder="Enter your email"
//                 className="w-full border border-yellow-600 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-blue-50 text-black py-2 rounded hover:bg-yellow-700 transition"
//               >
//                 Reset Password
//               </button>
//               <p className="text-center text-sm mt-4 text-gray-500">
//                 Remember your password?{" "}
//                 <button
//                   onClick={() => setShowForgotPassword(false)}
//                   className="text-black hover:underline"
//                 >
//                   Login
//                 </button>
//               </p>
//             </form>
//           </>
//         ) : (
//           <>
//             <h2 className="text-2xl font-semibold mb-6 text-center">Login To Waghera Agro Tourism</h2>

//             <div className="mb-4">
//               <label className="block mb-1 font-medium text-gray-700">Your Email</label>
//               <input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//               />
//             </div>

//             <div className="mb-4">
//               <label className="block mb-1 font-medium text-gray-700">Password</label>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
//               />
//             </div>

//             <div className="flex items-center justify-between text-sm mb-6">
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" className="accent-yellow-600" />
//                 Remember me
//               </label>
//               <button
//                 onClick={() => setShowForgotPassword(true)}
//                 className="text-gray-500 hover:text-[#a8815e]"
//               >
//                 Forgot Password?
//               </button>
//             </div>

//             <button className="w-full bg-blue-50 hover:bg-[#a8815e] text-black py-2 rounded font-medium mb-4">
//               Login
//             </button>

//             <div className="flex items-center gap-2 my-4">
//               <hr className="flex-1 border-gray-300" />
//               <span className="text-gray-400">Or</span>
//               <hr className="flex-1 border-gray-300" />
//             </div>

//             <div className="flex flex-col sm:flex-row gap-3">
//               <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-[#a8815e]">
//                 <FaGoogle /> Continue with Google
//               </button>
//               <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-[#a8815e]">
//                 <FaFacebookF /> Continue with Facebook
//               </button>
//             </div>

//             <p className="text-sm text-center mt-6">
//               Don’t have an account?{" "}
//               <span
//                 onClick={onSwitchToSignUp}
//                 className="text-blue-600 hover:underline cursor-pointer"
//               >
//                 Sign Up
//               </span>
//             </p>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }






import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

export default function SignIn({ onSwitchToSignUp }) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className="animate-fadeIn scale-95 animate-scaleUp">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 border border-gray-200">

        {/* ---------- Forgot Password Form ---------- */}
        {showForgotPassword ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center font-serif text-gray-800">
              Forgot Password
            </h2>

            <form onSubmit={(e) => e.preventDefault()}>
              <label className="block mb-1 text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-yellow-600 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />

              <button
                type="submit"
                className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700 transition"
              >
                Reset Password
              </button>

              <p className="text-center text-sm mt-4 text-gray-500">
                Remember your password?{" "}
                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="text-yellow-700 font-semibold hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          </>
        ) : (
          /* ---------- Login Form ---------- */
          <>
            <h2 className="text-2xl font-bold mb-6 text-center font-serif text-gray-800">
              Login To Waghera Agro Tourism
            </h2>

            {/* Email */}
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 
                focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            {/* Password */}
            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded-md px-4 py-2 
                focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-yellow-600" />
                Remember me
              </label>

              <button
                onClick={() => setShowForgotPassword(true)}
                className="text-gray-600 hover:text-yellow-700 font-medium"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-md font-medium mb-4 transition-all">
              Login
            </button>

            {/* Divider */}
            <div className="flex items-center gap-2 my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-500">Or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            {/* Social Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-100">
                <FaGoogle className="text-red-500" /> Continue with Google
              </button>

              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-gray-100">
                <FaFacebookF className="text-blue-600" /> Continue with Facebook
              </button>
            </div>

            {/* Switch to Signup */}
            <p className="text-sm text-center mt-6 text-gray-600">
              Don’t have an account?{" "}
              <span
                onClick={onSwitchToSignUp}
                className="text-yellow-700 hover:underline cursor-pointer font-semibold"
              >
                Sign Up
              </span>
            </p>
          </>
        )}
      </div>

      {/* ANIMATION CSS */}
      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }

        .animate-scaleUp {
          animation: scaleUp 0.3s ease-out forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scaleUp {
          from { transform: scale(0.95); }
          to { transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
