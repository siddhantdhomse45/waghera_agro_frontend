// // import React, { useState } from "react";
// // import axios from "axios";

// // const AdminActivity = () => {
// //   const [title, setTitle] = useState("");
// //   const [description, setDescription] = useState("");
// //   const [file, setFile] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [message, setMessage] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     if (!title || !description || !file) {
// //       setMessage("All fields are required");
// //       return;
// //     }

// //     const formData = new FormData();
// //     formData.append("title", title);
// //     formData.append("description", description);
// //     formData.append("file", file);

// //     try {
// //       setLoading(true);
// //       await axios.post(
// //         "http://localhost:5000/api/activities/create",
// //         formData,
// //         { headers: { "Content-Type": "multipart/form-data" } }
// //       );

// //       setMessage("✅ Activity created successfully");
// //       setTitle("");
// //       setDescription("");
// //       setFile(null);
// //     } catch (error) {
// //       setMessage("❌ Failed to create activity");
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div style={styles.page}>
// //       <div style={styles.card}>
// //         <h2 style={styles.heading}>Create Activity</h2>

// //         {message && <p style={styles.message}>{message}</p>}

// //         <form onSubmit={handleSubmit}>
// //           <div style={styles.formGroup}>
// //             <label style={styles.label}>Activity Title</label>
// //             <input
// //               type="text"
// //               value={title}
// //               onChange={(e) => setTitle(e.target.value)}
// //               style={styles.input}
// //               placeholder="Enter activity title"
// //             />
// //           </div>

// //           <div style={styles.formGroup}>
// //             <label style={styles.label}>Description</label>
// //             <textarea
// //               rows="4"
// //               value={description}
// //               onChange={(e) => setDescription(e.target.value)}
// //               style={styles.textarea}
// //               placeholder="Enter activity description"
// //             />
// //           </div>

// //           <div style={styles.formGroup}>
// //             <label style={styles.label}>Upload Image</label>
// //             <input
// //               type="file"
// //               accept="image/*"
// //               onChange={(e) => setFile(e.target.files[0])}
// //               style={styles.file}
// //             />
// //           </div>

// //           <button type="submit" style={styles.button} disabled={loading}>
// //             {loading ? "Uploading..." : "Create Activity"}
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // const styles = {
// //   page: {
// //     backgroundColor: "#f7f7f7",
// //     minHeight: "100vh",
// //     padding: "40px",
// //   },
// //   card: {
// //     maxWidth: "600px",
// //     margin: "0 auto",
// //     backgroundColor: "#ffffff",
// //     borderRadius: "10px",
// //     padding: "30px",
// //     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
// //   },
// //   heading: {
// //     color: "#8b5e3c",
// //     marginBottom: "20px",
// //     textAlign: "center",
// //   },
// //   message: {
// //     textAlign: "center",
// //     marginBottom: "15px",
// //     color: "#8b5e3c",
// //     fontWeight: "500",
// //   },
// //   formGroup: {
// //     marginBottom: "15px",
// //   },
// //   label: {
// //     display: "block",
// //     marginBottom: "6px",
// //     color: "#8b5e3c",
// //     fontWeight: "500",
// //   },
// //   input: {
// //     width: "100%",
// //     padding: "10px",
// //     borderRadius: "6px",
// //     border: "1px solid #ccc",
// //   },
// //   textarea: {
// //     width: "100%",
// //     padding: "10px",
// //     borderRadius: "6px",
// //     border: "1px solid #ccc",
// //   },
// //   file: {
// //     width: "100%",
// //   },
// //   button: {
// //     width: "100%",
// //     backgroundColor: "#b08968",
// //     color: "#fff",
// //     border: "none",
// //     padding: "12px",
// //     borderRadius: "6px",
// //     fontSize: "16px",
// //     cursor: "pointer",
// //     marginTop: "10px",
// //   },
// // };

// // export default AdminActivity;


// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API = "http://localhost:5000/api/activities";
// const IMAGE_BASE_URL = "http://localhost:5000";

// const AdminActivity = () => {
//   const [activities, setActivities] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // ================= FETCH ACTIVITIES =================
//   const fetchActivities = async () => {
//     try {
//       const res = await axios.get(`${API}/all`);
//       setActivities(res.data);
//     } catch (error) {
//       console.error("Failed to fetch activities", error);
//     }
//   };

//   useEffect(() => {
//     fetchActivities();
//   }, []);

//   // ================= CREATE / UPDATE =================
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !description) {
//       setMessage("❌ Title & Description required");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     if (file) formData.append("file", file);

//     try {
//       setLoading(true);

//       if (editingId) {
//         await axios.put(`${API}/update/${editingId}`, formData);
//         setMessage("✅ Activity updated successfully");
//       } else {
//         await axios.post(`${API}/create`, formData);
//         setMessage("✅ Activity created successfully");
//       }

//       resetForm();
//       fetchActivities();
//     } catch (error) {
//       setMessage("❌ Operation failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================= EDIT =================
//   const handleEdit = (activity) => {
//     setEditingId(activity._id);
//     setTitle(activity.title);
//     setDescription(activity.description);
//     setFile(null);

//     // Scroll to top smoothly
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // ================= DELETE =================
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this activity?")) return;

//     try {
//       await axios.delete(`${API}/delete/${id}`);
//       fetchActivities();
//     } catch (error) {
//       alert("Delete failed");
//     }
//   };

//   const resetForm = () => {
//     setEditingId(null);
//     setTitle("");
//     setDescription("");
//     setFile(null);
//   };

//   return (
//     <div style={styles.page}>
//       {/* ================= FORM ================= */}
//       <div style={styles.formCard}>
//         <h2 style={styles.heading}>
//           {editingId ? "Edit Activity" : "Create Activity"}
//         </h2>

//         {message && <p style={styles.message}>{message}</p>}

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Activity Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             style={styles.input}
//           />

//           <textarea
//             placeholder="Activity Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             style={styles.textarea}
//           />

//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files[0])}
//             style={styles.file}
//           />

//           <button type="submit" style={styles.primaryBtn} disabled={loading}>
//             {loading
//               ? "Saving..."
//               : editingId
//               ? "Update Activity"
//               : "Create Activity"}
//           </button>

//           {editingId && (
//             <button type="button" onClick={resetForm} style={styles.cancelBtn}>
//               Cancel Edit
//             </button>
//           )}
//         </form>
//       </div>

//       {/* ================= LIST ================= */}
//       <div style={styles.grid}>
//         {activities.map((a) => (
//           <div key={a._id} style={styles.card}>
//             {/* ✅ IMAGE DISPLAY FIX */}
//             <img
//               src={`${IMAGE_BASE_URL}/${a.image}`}
//               alt={a.title}
//               style={styles.image}
//               onError={(e) => {
//                 e.target.src =
//                   "https://via.placeholder.com/300x180?text=No+Image";
//               }}
//             />

//             <h4>{a.title}</h4>
//             <p>{a.description}</p>

//             <div style={styles.actions}>
//               <button onClick={() => handleEdit(a)} style={styles.editBtn}>
//                 ✏ Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(a._id)}
//                 style={styles.deleteBtn}
//               >
//                 🗑 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminActivity;

// // ================= STYLES =================
// const styles = {
//   page: {
//     padding: "30px",
//     backgroundColor: "#f5f5f5",
//     minHeight: "100vh",
//   },
//   formCard: {
//     maxWidth: "600px",
//     margin: "0 auto 30px",
//     backgroundColor: "#ffffff",
//     padding: "25px",
//     borderRadius: "12px",
//     boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "15px",
//     color: "#8b5e3c",
//   },
//   message: {
//     textAlign: "center",
//     marginBottom: "10px",
//     color: "#8b5e3c",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//   },
//   textarea: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     resize: "none",
//   },
//   file: {
//     marginBottom: "10px",
//   },
//   primaryBtn: {
//     width: "100%",
//     padding: "12px",
//     backgroundColor: "#8b5e3c",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
//   cancelBtn: {
//     width: "100%",
//     padding: "10px",
//     marginTop: "8px",
//     backgroundColor: "#999",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//     gap: "20px",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "15px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//   },
//   image: {
//     width: "100%",
//     height: "180px",
//     objectFit: "cover",
//     borderRadius: "8px",
//   },
//   actions: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "10px",
//   },
//   editBtn: {
//     backgroundColor: "#b08968",
//     color: "#fff",
//     border: "none",
//     padding: "6px 10px",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   deleteBtn: {
//     backgroundColor: "#c0392b",
//     color: "#fff",
//     border: "none",
//     padding: "6px 10px",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };











// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const API = "http://localhost:5000/api/activities";
// const IMAGE_BASE_URL = "http://localhost:5000";

// const AdminActivity = () => {
//   const [activities, setActivities] = useState([]);
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [file, setFile] = useState(null);
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   // ================= FETCH ACTIVITIES =================
//   const fetchActivities = async () => {
//     try {
//       const res = await axios.get(`${API}/all`);
//       setActivities(res.data);
//     } catch (error) {
//       console.error("Failed to fetch activities", error);
//     }
//   };

//   useEffect(() => {
//     fetchActivities();
//   }, []);

//   // ================= CREATE / UPDATE =================
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !description) {
//       setMessage("❌ Title & Description are required");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("description", description);
//     if (file) formData.append("file", file);

//     try {
//       setLoading(true);

//       if (editingId) {
//         await axios.put(`${API}/update/${editingId}`, formData);
//         setMessage("✅ Activity updated successfully");
//       } else {
//         await axios.post(`${API}/create`, formData);
//         setMessage("✅ Activity created successfully");
//       }

//       resetForm();
//       fetchActivities();
//     } catch (error) {
//       setMessage("❌ Operation failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ================= EDIT =================
//   const handleEdit = (activity) => {
//     setEditingId(activity._id);
//     setTitle(activity.title);
//     setDescription(activity.description);
//     setFile(null);

//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // ================= DELETE =================
//   const handleDelete = async (id) => {
//     if (!window.confirm("Delete this activity?")) return;

//     try {
//       await axios.delete(`${API}/delete/${id}`);
//       fetchActivities();
//     } catch (error) {
//       alert("Delete failed");
//     }
//   };

//   const resetForm = () => {
//     setEditingId(null);
//     setTitle("");
//     setDescription("");
//     setFile(null);
//   };

//   return (
//     <div style={styles.page}>
//       {/* ================= FORM ================= */}
//       <div style={styles.formCard}>
//         <h2 style={styles.heading}>
//           {editingId ? "Edit Activity" : "Create Activity"}
//         </h2>

//         {message && <p style={styles.message}>{message}</p>}

//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="Activity Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             style={styles.input}
//           />

//           <textarea
//             placeholder="Activity Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             style={styles.textarea}
//           />

//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setFile(e.target.files[0])}
//             style={styles.file}
//           />

//           <button type="submit" style={styles.primaryBtn} disabled={loading}>
//             {loading
//               ? "Saving..."
//               : editingId
//               ? "Update Activity"
//               : "Create Activity"}
//           </button>

//           {editingId && (
//             <button type="button" onClick={resetForm} style={styles.cancelBtn}>
//               Cancel Edit
//             </button>
//           )}
//         </form>
//       </div>

//       {/* ================= ACTIVITY LIST ================= */}
//       <div style={styles.grid}>
//         {activities.map((a) => (
//           <div key={a._id} style={styles.card}>
//             {/* ✅ CORRECT IMAGE FETCHING LOGIC */}
//             <img
//               src={
//                 a.image
//                   ? `${IMAGE_BASE_URL}/${a.image}`
//                   : "https://via.placeholder.com/300x180?text=No+Image"
//               }
//               alt={a.title}
//               style={styles.image}
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src =
//                   "https://via.placeholder.com/300x180?text=Image+Not+Found";
//               }}
//             />

//             <h4>{a.title}</h4>
//             <p>{a.description}</p>

//             <div style={styles.actions}>
//               <button onClick={() => handleEdit(a)} style={styles.editBtn}>
//                 ✏ Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(a._id)}
//                 style={styles.deleteBtn}
//               >
//                 🗑 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminActivity;

// // ================= STYLES =================
// const styles = {
//   page: {
//     padding: "30px",
//     backgroundColor: "#f5f5f5",
//     minHeight: "100vh",
//   },
//   formCard: {
//     maxWidth: "600px",
//     margin: "0 auto 30px",
//     backgroundColor: "#ffffff",
//     padding: "25px",
//     borderRadius: "12px",
//     boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
//   },
//   heading: {
//     textAlign: "center",
//     marginBottom: "15px",
//     color: "#8b5e3c",
//   },
//   message: {
//     textAlign: "center",
//     marginBottom: "10px",
//     color: "#8b5e3c",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//   },
//   textarea: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "6px",
//     border: "1px solid #ccc",
//     resize: "none",
//   },
//   file: {
//     marginBottom: "10px",
//   },
//   primaryBtn: {
//     width: "100%",
//     padding: "12px",
//     backgroundColor: "#8b5e3c",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     fontSize: "16px",
//     cursor: "pointer",
//   },
//   cancelBtn: {
//     width: "100%",
//     padding: "10px",
//     marginTop: "8px",
//     backgroundColor: "#999",
//     color: "#fff",
//     border: "none",
//     borderRadius: "6px",
//     cursor: "pointer",
//   },
//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
//     gap: "20px",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "15px",
//     borderRadius: "12px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//   },
//   image: {
//     width: "100%",
//     height: "180px",
//     objectFit: "cover",
//     borderRadius: "8px",
//   },
//   actions: {
//     display: "flex",
//     justifyContent: "space-between",
//     marginTop: "10px",
//   },
//   editBtn: {
//     backgroundColor: "#b08968",
//     color: "#fff",
//     border: "none",
//     padding: "6px 10px",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   deleteBtn: {
//     backgroundColor: "#c0392b",
//     color: "#fff",
//     border: "none",
//     padding: "6px 10px",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
// };






// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const defaultNewActivity = {
//   title: "",
//   description: "",
//   file: null,
// };

// const API_BASE_URL = "https://backend-waghera.onrender.com/api/activities";

// const AdminActivity = () => {
//   const [activities, setActivities] = useState([]);
//   const [newActivity, setNewActivity] = useState(defaultNewActivity);
//   const [editingId, setEditingId] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [statusMessage, setStatusMessage] = useState({ type: "", message: "" });

//   // --- Status helper ---
//   const setTimedStatus = (type, message) => {
//     setStatusMessage({ type, message });
//     setTimeout(() => setStatusMessage({ type: "", message: "" }), 5000);
//   };

//   // --- FETCH ACTIVITIES ---
//   const fetchActivities = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(API_BASE_URL + "/all");
//       setActivities(res.data);
//     } catch (err) {
//       console.error("Error fetching activities:", err);
//       setTimedStatus("error", "Failed to fetch activities.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchActivities();
//   }, []);

//   // --- HANDLE FORM CHANGE ---
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewActivity((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e) => {
//     setNewActivity((prev) => ({ ...prev, file: e.target.files[0] }));
//   };

//   // --- SUBMIT CREATE / UPDATE ---
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!newActivity.title || !newActivity.description) {
//       setTimedStatus("error", "Title & Description are required.");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", newActivity.title);
//     formData.append("description", newActivity.description);
//     if (newActivity.file) formData.append("file", newActivity.file);

//     try {
//       setLoading(true);
//       if (editingId) {
//         await axios.put(`${API_BASE_URL}/update/${editingId}`, formData);
//         setTimedStatus("success", "Activity updated successfully!");
//       } else {
//         await axios.post(`${API_BASE_URL}/create`, formData);
//         setTimedStatus("success", "Activity created successfully!");
//       }

//       resetForm();
//       fetchActivities();
//     } catch (err) {
//       console.error("Error saving activity:", err);
//       setTimedStatus("error", "Operation failed.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // --- EDIT ACTIVITY ---
//   const handleEdit = (activity) => {
//     setEditingId(activity._id);
//     setNewActivity({
//       title: activity.title,
//       description: activity.description,
//       file: null,
//     });
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // --- DELETE ACTIVITY ---
//   const handleDelete = async (id, title) => {
//     if (!window.confirm(`Delete activity "${title}"?`)) return;
//     try {
//       await axios.delete(`${API_BASE_URL}/delete/${id}`);
//       setTimedStatus("success", `Activity "${title}" deleted successfully.`);
//       fetchActivities();
//     } catch (err) {
//       console.error("Delete failed:", err);
//       setTimedStatus("error", "Delete operation failed.");
//     }
//   };

//   const resetForm = () => {
//     setEditingId(null);
//     setNewActivity(defaultNewActivity);
//   };

//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       <h2 className="text-3xl font-bold mb-6 text-gray-800">Activity Management ⚡</h2>

//       {/* --- STATUS MESSAGE --- */}
//       {statusMessage.message && (
//         <div
//           className={`px-4 py-3 rounded mb-4 ${
//             statusMessage.type === "success"
//               ? "bg-green-100 border border-green-400 text-green-700"
//               : "bg-red-100 border border-red-400 text-red-700"
//           }`}
//           role="alert"
//         >
//           {statusMessage.message}
//         </div>
//       )}

//       {/* --- FORM --- */}
//       <div className="bg-white p-6 shadow-xl rounded-lg mb-8 max-w-lg mx-auto">
//         <h3 className="text-xl font-semibold mb-4 text-gray-700">
//           {editingId ? "Edit Activity" : "Create Activity"}
//         </h3>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={newActivity.title}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//           <textarea
//             name="description"
//             placeholder="Description"
//             value={newActivity.description}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//             rows={3}
//           />
//           <input
//             type="file"
//             name="file"
//             onChange={handleFileChange}
//             accept="image/*"
//             className="w-full"
//           />
//           <button
//             type="submit"
//             disabled={loading}
//             className={`w-full py-2 rounded text-white ${
//               loading ? "bg-gray-400" : "bg-[#a8815e] hover:bg-amber-700"
//             }`}
//           >
//             {loading ? "Saving..." : editingId ? "Update Activity" : "Create Activity"}
//           </button>
//           {editingId && (
//             <button
//               type="button"
//               onClick={resetForm}
//               className="w-full py-2 mt-2 bg-gray-500 text-white rounded"
//             >
//               Cancel Edit
//             </button>
//           )}
//         </form>
//       </div>

//       {/* --- ACTIVITY LIST --- */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {activities.map((a) => (
//           <div key={a._id} className="bg-white rounded-lg shadow relative group overflow-hidden">
//             <img
//               src={
//                 a.image
//                   ? `https://backend-waghera.onrender.com/${a.image}`
//                   : "https://via.placeholder.com/300x180?text=No+Image"
//               }
//               alt={a.title}
//               className="w-full h-48 object-cover"
//               onError={(e) => {
//                 e.target.onerror = null;
//                 e.target.src = "https://via.placeholder.com/300x180?text=Image+Not+Found";
//               }}
//             />
//             <div className="p-4">
//               <p className="font-medium text-gray-900 truncate">{a.title}</p>
//               <p className="text-sm text-gray-600 line-clamp-2">{a.description}</p>
//             </div>
//             <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
//               <button
//                 onClick={() => handleEdit(a)}
//                 className="bg-yellow-500 text-white p-1 rounded"
//               >
//                 ✏
//               </button>
//               <button
//                 onClick={() => handleDelete(a._id, a.title)}
//                 className="bg-red-600 text-white p-1 rounded"
//               >
//                 🗑
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AdminActivity;






















import React, { useState, useEffect } from "react";
import axios from "axios";

const defaultNewActivity = {
  title: "",
  description: "",
  file: null,
};

const API_BASE_URL = "https://backend-waghera.onrender.com/api/activities";

const AdminActivity = () => {
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState(defaultNewActivity);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", message: "" });

  const setTimedStatus = (type, message) => {
    setStatusMessage({ type, message });
    setTimeout(() => setStatusMessage({ type: "", message: "" }), 5000);
  };

  // Fetch Activities
  const fetchActivities = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_BASE_URL + "/all");
      setActivities(res.data);
    } catch (err) {
      console.error("Error fetching activities:", err);
      setTimedStatus("error", "Failed to fetch activities.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchActivities();
  }, []);

  // Form Handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewActivity((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setNewActivity((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newActivity.title || !newActivity.description) {
      setTimedStatus("error", "Title & Description are required.");
      return;
    }

    const formData = new FormData();
    formData.append("title", newActivity.title);
    formData.append("description", newActivity.description);
    if (newActivity.file) formData.append("file", newActivity.file);

    try {
      setLoading(true);
      if (editingId) {
        await axios.put(`${API_BASE_URL}/update/${editingId}`, formData);
        setTimedStatus("success", "Activity updated successfully!");
      } else {
        await axios.post(`${API_BASE_URL}/create`, formData);
        setTimedStatus("success", "Activity created successfully!");
      }
      resetForm();
      fetchActivities();
    } catch (err) {
      console.error("Error saving activity:", err);
      setTimedStatus("error", "Operation failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (activity) => {
    setEditingId(activity._id);
    setNewActivity({
      title: activity.title,
      description: activity.description,
      file: null,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id, title) => {
    if (!window.confirm(`Delete activity "${title}"?`)) return;
    try {
      await axios.delete(`${API_BASE_URL}/delete/${id}`);
      setTimedStatus("success", `Activity "${title}" deleted successfully.`);
      fetchActivities();
    } catch (err) {
      console.error("Delete failed:", err);
      setTimedStatus("error", "Delete operation failed.");
    }
  };

  const resetForm = () => {
    setEditingId(null);
    setNewActivity(defaultNewActivity);
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">Activity Management ⚡</h2>

      {/* Status */}
      {statusMessage.message && (
        <div
          className={`px-3 py-2 sm:px-4 sm:py-3 rounded mb-3 sm:mb-4 text-sm sm:text-base ${
            statusMessage.type === "success"
              ? "bg-green-100 border border-green-400 text-green-700"
              : "bg-red-100 border border-red-400 text-red-700"
          }`}
        >
          {statusMessage.message}
        </div>
      )}

      {/* Form */}
      <div className="bg-white p-4 sm:p-6 shadow-xl rounded-lg mb-6 sm:mb-8 max-w-lg mx-auto">
        <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-700">
          {editingId ? "Edit Activity" : "Create Activity"}
        </h3>
        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newActivity.title}
            onChange={handleChange}
            className="w-full border p-2 rounded text-sm sm:text-base"
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newActivity.description}
            onChange={handleChange}
            className="w-full border p-2 rounded text-sm sm:text-base"
            rows={3}
          />
          <input
            type="file"
            name="file"
            onChange={handleFileChange}
            accept="image/*"
            className="w-full text-xs sm:text-sm"
          />
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded text-white text-sm sm:text-base ${
              loading ? "bg-gray-400" : "bg-[#a8815e] hover:bg-amber-700"
            }`}
          >
            {loading ? "Saving..." : editingId ? "Update Activity" : "Create Activity"}
          </button>
          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="w-full py-2 mt-2 bg-gray-500 text-white rounded text-sm sm:text-base"
            >
              Cancel Edit
            </button>
          )}
        </form>
      </div>

      {/* Activities List */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
        {activities.map((a) => (
          <div key={a._id} className="bg-white rounded-lg shadow relative group overflow-hidden">
            {/* ✅ Use imageUrl instead of image */}
            <img
              src={a.imageUrl || "https://via.placeholder.com/300x180?text=No+Image"}
              alt={a.title}
              className="w-full h-32 sm:h-48 object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/300x180?text=Image+Not+Found";
              }}
            />
            <div className="p-3 sm:p-4">
              <p className="font-medium text-gray-900 truncate text-sm sm:text-base">{a.title}</p>
              <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{a.description}</p>
            </div>
            <div className="absolute top-1 sm:top-2 right-1 sm:right-2 flex space-x-1 sm:space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={() => handleEdit(a)}
                className="bg-yellow-500 text-white p-1 rounded text-xs sm:text-sm"
              >
                ✏
              </button>
              <button
                onClick={() => handleDelete(a._id, a.title)}
                className="bg-red-600 text-white p-1 rounded text-xs sm:text-sm"
              >
                🗑
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminActivity;
