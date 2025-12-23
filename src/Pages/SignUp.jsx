import { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SignUp({ onSwitchToSignIn }) {

  // Store form values
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



const handleRegister = async () => {
  if (form.password !== form.confirmPassword) {
    toast.error("Passwords do not match ❌");
    return;
  }

  try {
    const response = await fetch("https://backend-waghera.onrender.com/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        contact: form.contact,
        password: form.password,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      toast.success("Registration successful 🎉");

      // redirect after toast
      setTimeout(() => {
        onSwitchToSignIn();
      }, 2000);
    } else {
      toast.error(data.message || "Registration failed ❌");
    }
  } catch (error) {
    toast.error("Server error. Please try again");
    console.error(error);
  }
};

return (
<>
{/* <div className="flex justify-center bg-gray-100 px-2 sm:px-4 pt-20  pb-10"> */}
  
  <ToastContainer position="top-right" autoClose={3000} />

  <div className="w-full max-w-xs sm:max-w-sm bg-white rounded-xl shadow-lg p-4 sm:p-6">
      <h2 className="text-lg sm:text-xl font-bold mb-4 text-center text-gray-800">
        Create Account
      </h2>

      {/* Name */}
      <div className="mb-2">
        <label className="block text-xs font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-yellow-600 outline-none"
        />
      </div>

      {/* Email */}
      <div className="mb-2">
        <label className="block text-xs font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-yellow-600 outline-none"
        />
      </div>

      {/* Contact */}
      <div className="mb-2">
        <label className="block text-xs font-medium text-gray-700">
          Contact
        </label>
        <input
          type="tel"
          name="contact"
          value={form.contact}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-yellow-600 outline-none"
        />
      </div>

      {/* Password */}
      <div className="mb-2">
        <label className="block text-xs font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-yellow-600 outline-none"
        />
      </div>

      {/* Confirm Password */}
      <div className="mb-3">
        <label className="block text-xs font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          className="w-full border rounded-md px-3 py-1.5 text-sm focus:ring-1 focus:ring-yellow-600 outline-none"
        />
      </div>

      {/* Register Button */}
      <button
        onClick={handleRegister}
        className="w-full py-2 text-sm font-semibold rounded-md bg-blue-100 hover:bg-[#a8815e] hover:text-white transition"
      >
        Register
      </button>

      {/* Divider */}
      <div className="flex items-center gap-2 my-3">
        <hr className="flex-1" />
        <span className="text-xs text-gray-400">OR</span>
        <hr className="flex-1" />
      </div>

      {/* Social */}
      <div className="flex flex-col gap-2">
        <button className="flex items-center justify-center gap-2 border rounded-md py-1.5 text-xs hover:bg-[#a8815e] hover:text-white transition">
          <FaGoogle /> Google
        </button>
        <button className="flex items-center justify-center gap-2 border rounded-md py-1.5 text-xs hover:bg-[#a8815e] hover:text-white transition">
          <FaFacebookF /> Facebook
        </button>
      </div>

      {/* Switch */}
      <p className="text-xs text-center mt-3 text-gray-600">
        Already have an account?{" "}
        <span
          className="text-blue-600 cursor-pointer"
          onClick={onSwitchToSignIn}
        >
          Login
        </span>
      </p>
    </div>
  </>
);

}