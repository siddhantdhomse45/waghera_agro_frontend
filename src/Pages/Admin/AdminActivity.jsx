

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
