import { useState } from "react";

// ✅ Use a single API base URL
const API_BASE_URL = "http://localhost:5000/api/auth";

// ✅ Message component with safe fallback
const Message = ({ type = "info", text }) => {
  if (!text) return null;

  const styles = {
    success: "bg-green-100 text-green-800 border-green-500",
    error: "bg-red-100 text-red-800 border-red-500",
    info: "bg-blue-100 text-blue-800 border-blue-500",
  };

  return (
    <div className={`p-3 mb-4 rounded border-l-4 ${styles[type] || styles.info}`}>
      {text}
    </div>
  );
};

export default function SignIn({ onSwitchToSignUp, onLoginSuccess }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setMessage("");
  };

  // ✅ Handle login
  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");
    setMessageType("info");

    try {
      const response = await fetch(`${API_BASE_URL}/signin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Login response:", data);

      if (!response.ok) {
        // ❌ Show error from backend if any
        setMessage(data.message || "Login failed");
        setMessageType("error");
        return;
      }

      // ✅ Adjust based on backend response structure
      // Example: { token, user }
      const token = data.token || data.data?.token;
      const user = data.user || data.data?.user;

      if (!token || !user) {
        setMessage("Invalid server response");
        setMessageType("error");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setMessage("Login successful!");
      setMessageType("success");

      onLoginSuccess && onLoginSuccess(user);
    } catch (error) {
      console.error("LOGIN ERROR:", error);
      setMessage("Network error");
      setMessageType("error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center px-4">
      <div className="animate-fadeIn animate-scaleUp">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 border border-gray-200">
          <form onSubmit={handleSignIn}>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
              Login To Waghera Agro Tourism
            </h2>

            <label className="block mb-1 text-gray-700 font-medium">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-yellow-600"
              required
            />

            <label className="block mb-1 text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md px-4 py-2 mb-4 focus:ring-yellow-600"
              required
            />

            <Message type={messageType} text={message} />

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full bg-yellow-600 text-white py-3 rounded-md font-bold mb-4 transition ${
                isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-700"
              }`}
            >
              {isLoading ? "Logging In..." : "Login"}
            </button>

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
      </div>
    </div>
  );
}
