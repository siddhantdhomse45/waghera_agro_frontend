import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/contact");
      setMessages(res.data.data);
    } catch (error) {
      console.error("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  const deleteMessage = async (id) => {
    if (!window.confirm("Delete this message?")) return;

    try {
      await axios.delete(`http://localhost:5000/api/contact/${id}`);
      setMessages(messages.filter((msg) => msg._id !== id));
    } catch (error) {
      alert("Delete failed");
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-[#9b6b43] mb-4">
        Contact Messages
      </h2>

      <div className="bg-white rounded-lg shadow">
        <table className="w-full border-collapse">
          <thead className="bg-[#f5f1ec]">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  Loading...
                </td>
              </tr>
            ) : messages.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No messages found.
                </td>
              </tr>
            ) : (
              messages.map((msg) => (
                <tr key={msg._id} className="border-t">
                  <td className="p-3">{msg.name}</td>
                  <td className="p-3">{msg.email}</td>
                  <td className="p-3 max-w-md truncate">
                    {msg.message}
                  </td>
                  <td className="p-3">
                    {new Date(msg.createdAt).toLocaleDateString()}
                  </td>
                  <td className="p-3 text-center">
                    <button
                      onClick={() => deleteMessage(msg._id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={18} />
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
