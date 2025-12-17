// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Trash2 } from "lucide-react";

// const ContactMessages = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchMessages = async () => {
//     try {
//       const res = await axios.get("http://localhost:5000/api/contact");
//       setMessages(res.data.data);
//     } catch (error) {
//       console.error("Failed to fetch messages");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteMessage = async (id) => {
//     if (!window.confirm("Delete this message?")) return;

//     try {
//       await axios.delete(`http://localhost:5000/api/contact/${id}`);
//       setMessages(messages.filter((msg) => msg._id !== id));
//     } catch (error) {
//       alert("Delete failed");
//     }
//   };

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold text-[#9b6b43] mb-4">
//         Contact Messages
//       </h2>

//       <div className="bg-white rounded-lg shadow">
//         <table className="w-full border-collapse">
//           <thead className="bg-[#f5f1ec]">
//             <tr>
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Message</th>
//               <th className="p-3 text-left">Date</th>
//               <th className="p-3 text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan="5" className="text-center p-4">
//                   Loading...
//                 </td>
//               </tr>
//             ) : messages.length === 0 ? (
//               <tr>
//                 <td colSpan="5" className="text-center p-4">
//                   No messages found.
//                 </td>
//               </tr>
//             ) : (
//               messages.map((msg) => (
//                 <tr key={msg._id} className="border-t">
//                   <td className="p-3">{msg.name}</td>
//                   <td className="p-3">{msg.email}</td>
//                   <td className="p-3 max-w-md truncate">
//                     {msg.message}
//                   </td>
//                   <td className="p-3">
//                     {new Date(msg.createdAt).toLocaleDateString()}
//                   </td>
//                   <td className="p-3 text-center">
//                     <button
//                       onClick={() => deleteMessage(msg._id)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ContactMessages;








// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Trash2 } from "lucide-react";

// const API_BASE = "http://localhost:5000/api/contact";

// const ContactMessages = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchMessages = async () => {
//     try {
//       const res = await axios.get(API_BASE);

//       // ✅ SAFE RESPONSE HANDLING
//       const data = Array.isArray(res.data)
//         ? res.data
//         : res.data.data || [];

//       setMessages(data);
//     } catch (error) {
//       console.error("Failed to fetch messages", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteMessage = async (id) => {
//     if (!window.confirm("Delete this message?")) return;

//     try {
//       await axios.delete(`${API_BASE}/${id}`);
//       setMessages((prev) => prev.filter((msg) => msg._id !== id));
//     } catch (error) {
//       alert("Delete failed");
//     }
//   };

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold text-[#9b6b43] mb-4">
//         Contact Messages
//       </h2>

//       <div className="bg-white rounded-lg shadow overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead className="bg-[#f5f1ec]">
//             <tr>
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Mobile</th> {/* ✅ ADDED */}
//               <th className="p-3 text-left">Message</th>
//               <th className="p-3 text-left">Date</th>
//               <th className="p-3 text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan="6" className="text-center p-4">
//                   Loading...
//                 </td>
//               </tr>
//             ) : messages.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="text-center p-4">
//                   No messages found.
//                 </td>
//               </tr>
//             ) : (
//               messages.map((msg) => (
//                 <tr key={msg._id} className="border-t hover:bg-gray-50">
//                   <td className="p-3">{msg.name}</td>
//                   <td className="p-3">{msg.email}</td>
//                   <td className="p-3 font-medium text-gray-700">
//                     {msg.mobile || "-"} {/* ✅ SAFE */}
//                   </td>
//                   <td className="p-3 max-w-md truncate">
//                     {msg.message}
//                   </td>
//                   <td className="p-3">
//                     {msg.createdAt
//                       ? new Date(msg.createdAt).toLocaleDateString()
//                       : "-"}
//                   </td>
//                   <td className="p-3 text-center">
//                     <button
//                       onClick={() => deleteMessage(msg._id)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ContactMessages;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import { Trash2 } from "lucide-react";

// const API_BASE = "http://localhost:5000/api/contact";

// const ContactMessages = () => {
//   const [messages, setMessages] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch all messages from backend
//   const fetchMessages = async () => {
//     try {
//       const res = await axios.get(API_BASE);
//       // Ensure we get the array from res.data.data
//       setMessages(res.data?.data || []);
//     } catch (error) {
//       console.error("Failed to fetch messages:", error);
//       setMessages([]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Delete a message
//   const deleteMessage = async (id) => {
//     if (!window.confirm("Delete this message?")) return;

//     try {
//       await axios.delete(`${API_BASE}/${id}`);
//       // Remove deleted message from state
//       setMessages((prev) => prev.filter((msg) => msg._id !== id));
//     } catch (error) {
//       alert("Delete failed");
//     }
//   };

//   useEffect(() => {
//     fetchMessages();
//   }, []);

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-semibold text-[#9b6b43] mb-4">
//         Contact Messages
//       </h2>

//       <div className="bg-white rounded-lg shadow overflow-x-auto">
//         <table className="w-full border-collapse">
//           <thead className="bg-[#f5f1ec]">
//             <tr>
//               <th className="p-3 text-left">Name</th>
//               <th className="p-3 text-left">Email</th>
//               <th className="p-3 text-left">Mobile</th>
//               <th className="p-3 text-left">Message</th>
//               <th className="p-3 text-left">Date</th>
//               <th className="p-3 text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {loading ? (
//               <tr>
//                 <td colSpan="6" className="text-center p-4">
//                   Loading...
//                 </td>
//               </tr>
//             ) : messages.length === 0 ? (
//               <tr>
//                 <td colSpan="6" className="text-center p-4">
//                   No messages found.
//                 </td>
//               </tr>
//             ) : (
//               messages.map((msg) => (
//                 <tr key={msg._id} className="border-t hover:bg-gray-50">
//                   <td className="p-3">{msg.name}</td>
//                   <td className="p-3">{msg.email}</td>
//                   <td className="p-3 font-medium">{msg.mobile}</td>
//                   <td className="p-3 max-w-md truncate">{msg.message}</td>
//                   <td className="p-3">
//                     {msg.createdAt
//                       ? new Date(msg.createdAt).toLocaleDateString()
//                       : ""}
//                   </td>
//                   <td className="p-3 text-center">
//                     <button
//                       onClick={() => deleteMessage(msg._id)}
//                       className="text-red-600 hover:text-red-800"
//                     >
//                       <Trash2 size={18} />
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default ContactMessages;


import { useEffect, useState } from "react";
import axios from "axios";
import { Trash2 } from "lucide-react";

const API_BASE = "http://localhost:5000/api/contact";

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
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-[#9b6b43] mb-4">
        Contact Messages
      </h2>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full border-collapse table-auto">
          <thead className="bg-[#f5f1ec]">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Mobile</th>
              <th className="p-3 text-left">Message</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-center">Action</th>
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
                  <td className="p-3 break-words max-w-xs">{msg.name}</td>
                  <td className="p-3 break-words max-w-xs">{msg.email}</td>
                  <td className="p-3 break-words max-w-xs">{msg.mobile}</td>
                  <td className="p-3 break-words max-w-md">{msg.message}</td>
                  <td className="p-3">{msg.createdAt ? new Date(msg.createdAt).toLocaleDateString() : ""}</td>
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
