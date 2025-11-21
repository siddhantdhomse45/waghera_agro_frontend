import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { useState } from "react";

export default function SignIn({ onSwitchToSignUp }) {
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  return (
    <div className="flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6">

        {showForgotPassword ? (
          <>
            <h2 className="text-2xl font-serif mb-6 text-center">Forgot Password</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label className="block mb-2 text-gray-700 font-medium">Your Email</label>
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-yellow-600 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              <button
                type="submit"
                className="w-full bg-blue-50 text-black py-2 rounded hover:bg-yellow-700 transition"
              >
                Reset Password
              </button>
              <p className="text-center text-sm mt-4 text-gray-500">
                Remember your password?{" "}
                <button
                  onClick={() => setShowForgotPassword(false)}
                  className="text-black hover:underline"
                >
                  Login
                </button>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-semibold mb-6 text-center">Login To Waghera Agro Tourism</h2>

            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Your Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium text-gray-700">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
            </div>

            <div className="flex items-center justify-between text-sm mb-6">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-yellow-600" />
                Remember me
              </label>
              <button
                onClick={() => setShowForgotPassword(true)}
                className="text-gray-500 hover:text-[#a8815e]"
              >
                Forgot Password?
              </button>
            </div>

            <button className="w-full bg-blue-50 hover:bg-[#a8815e] text-black py-2 rounded font-medium mb-4">
              Login
            </button>

            <div className="flex items-center gap-2 my-4">
              <hr className="flex-1 border-gray-300" />
              <span className="text-gray-400">Or</span>
              <hr className="flex-1 border-gray-300" />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-[#a8815e]">
                <FaGoogle /> Continue with Google
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 border border-gray-300 rounded py-2 hover:bg-[#a8815e]">
                <FaFacebookF /> Continue with Facebook
              </button>
            </div>

            <p className="text-sm text-center mt-6">
              Don’t have an account?{" "}
              <span
                onClick={onSwitchToSignUp}
                className="text-blue-600 hover:underline cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}

