

import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

const API_BASE = "https://backend-waghera.onrender.com/api/contact";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all messages
  const fetchMessages = async () => {
    try {
      const res = await axios.get(API_BASE);
      setMessages(res.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch messages:", error);
      setMessages([]);
    } finally {
      setLoading(false);
    }
  };

  // Delete a message
  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    try {
      await axios.delete(`${API_BASE}/${id}`);
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
    } catch (error) {
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold text-[#9b6b43] mb-4">
        Contact Messages
      </h2>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full border-collapse table-auto min-w-[600px] sm:min-w-full">
          <thead className="bg-[#f5f1ec]">
            <tr>
              <th className="p-2 sm:p-3 text-left text-xs sm:text-sm">Name</th>
              <th className="p-2 sm:p-3 text-left text-xs sm:text-sm">Email</th>
              <th className="p-2 sm:p-3 text-left text-xs sm:text-sm">Mobile</th>
              <th className="p-2 sm:p-3 text-left text-xs sm:text-sm">Message</th>
              <th className="p-2 sm:p-3 text-left text-xs sm:text-sm">Date</th>
              <th className="p-2 sm:p-3 text-center text-xs sm:text-sm">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  Loading...
                </td>
              </tr>
            ) : messages.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4">
                  No messages found.
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg._id} className="border-t hover:bg-gray-50 align-top">
                  <td className="p-2 sm:p-3 break-words max-w-[100px] sm:max-w-xs text-xs sm:text-sm">{msg.name}</td>
                  <td className="p-2 sm:p-3 break-words max-w-[100px] sm:max-w-xs text-xs sm:text-sm">{msg.email}</td>
                  <td className="p-2 sm:p-3 break-words max-w-[100px] sm:max-w-xs text-xs sm:text-sm">{msg.mobile}</td>
                  <td className="p-2 sm:p-3 break-words max-w-[150px] sm:max-w-md text-xs sm:text-sm">{msg.message}</td>
                  <td className="p-2 sm:p-3 text-xs sm:text-sm">{msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : ""}</td>
                  <td className="p-2 sm:p-3 text-center">
                    <button
                      onClick={() => deleteMessage(msg._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} className="sm:w-5 sm:h-5" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactMessages;
