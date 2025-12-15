import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Trash2, Pencil } from 'lucide-react'; // Import icons

// --- START: Edit Modal Component ---
// This component handles the UI for editing an activity
const EditModal = ({ activity, onClose, onChange, onSubmit }) => (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit Activity</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={activity.title}
                        onChange={onChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={activity.description}
                        onChange={onChange}
                        rows="3"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                    ></textarea>
                </div>
                {/* File change is usually handled separately for simplicity, but we omit the file input here */}
                <div className="flex justify-end space-x-3 mt-6">
                    <button
                        type="button"
                        onClick={onClose}
                        className="py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700"
                    >
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    </div>
);
// --- END: Edit Modal Component ---


const AdminActivity = () => {
    // State for storing the list of activities
    const [activities, setActivities] = useState([]);
    
    // State for the new activity form data
    const [newActivity, setNewActivity] = useState({
        title: '',
        description: '',
        file: null,
    });

    // State for loading and error messages
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    // --- ADDED: State for Edit functionality ---
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentActivity, setCurrentActivity] = useState(null);
    const [statusMessage, setStatusMessage] = useState({ type: '', message: '' }); // Consolidated status

    // --- API Configuration ---
    const API_BASE_URL = 'https://backend-waghera.onrender.com/api/activities'; // Adjust port if necessary
    
    // Helper to display status messages temporarily
    const setTimedStatus = (type, message) => {
        setStatusMessage({ type, message });
        setTimeout(() => setStatusMessage({ type: '', message: '' }), 5000);
    };

    // Function to fetch all activities
    const fetchActivities = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${API_BASE_URL}/all`);
            setActivities(response.data);
            setError(null);
        } catch (err) {
            console.error("Error fetching activities:", err);
            setError('Failed to fetch activities.');
        } finally {
            setLoading(false);
        }
    };

    // Fetch activities on component mount
    useEffect(() => {
        fetchActivities();
    }, []);

    // Handle input changes for the form
    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewActivity(prev => ({ ...prev, [name]: value }));
    };

    // Handle file selection
    const handleFileChange = (e) => {
        setNewActivity(prev => ({ ...prev, file: e.target.files[0] }));
    };

    // Handle form submission for uploading a new activity
    const handleSubmit = async (e) => {
        e.preventDefault();
        setUploading(true);
        setUploadSuccess(false);
        setError(null);
        setStatusMessage({ type: '', message: '' });

        if (!newActivity.title || !newActivity.description || !newActivity.file) {
            setError('All fields and a file are required.');
            setUploading(false);
            return;
        }

        const formData = new FormData();
        formData.append('title', newActivity.title);
        formData.append('description', newActivity.description);
        formData.append('file', newActivity.file);
        
        // ADDED: Include token for POST request if needed
        const token = localStorage.getItem('jwtToken');
        const headers = { 'Content-Type': 'multipart/form-data' };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }


        try {
            const response = await axios.post(`${API_BASE_URL}/upload`, formData, { headers });

            // Add the new activity to the list
            setActivities(prev => [...prev, response.data]);

            // Reset the form
            setNewActivity({ title: '', description: '', file: null });
            
            // Show success message
            setUploadSuccess(true);
            setTimeout(() => setUploadSuccess(false), 3000); 

        } catch (err) {
            console.error("Error uploading activity:", err);
            setError('Failed to upload activity. Check server console.');
        } finally {
            setUploading(false);
        }
    };

    // ===================================================
    // 🛑 ADDED: DELETE LOGIC
    // ===================================================
    const handleDelete = async (id, title) => {
        if (!window.confirm(`Are you sure you want to delete the activity: "${title}"?`)) {
            return;
        }

        try {
            const token = localStorage.getItem('jwtToken'); 
            const headers = token ? { 'Authorization': `Bearer ${token}` } : {};

            // NOTE: Assuming the delete endpoint is at /api/activities/{id}
            await axios.delete(`${API_BASE_URL}/${id}`, { headers });
            
            // Remove the activity from the state
            setActivities(prev => prev.filter(activity => activity.id !== id));
            setTimedStatus('success', `Activity '${title}' deleted successfully.`);

        } catch (err) {
            console.error(`❌ DELETE Request Failed for ID: ${id}. Error:`, err);
            setTimedStatus('error', 'Failed to delete activity. Check console and backend CORS/Security.');
        }
    };

    // ===================================================
    // 📝 ADDED: EDIT LOGIC
    // ===================================================

    // Function to open the modal and set the activity to be edited
    const openEditModal = (activity) => {
        setCurrentActivity(activity);
        setIsEditModalOpen(true);
    };

    // Function to handle the form input changes within the modal
    const handleEditChange = (e) => {
        const { name, value } = e.target;
        setCurrentActivity(prev => ({ ...prev, [name]: value }));
    };

    // Function to submit the edit changes (PUT request)
    const handleEditSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const token = localStorage.getItem('jwtToken'); 
            const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
            
            // PUT request to update the resource. NOTE: Assuming the update endpoint is at /api/activities/{id}
            const response = await axios.put(
                `${API_BASE_URL}/${currentActivity.id}`, 
                currentActivity, // Sends the updated title/description
                { headers }
            );

            // Update the activity list in the state using the response data
            setActivities(prev => 
                prev.map(activity => activity.id === response.data.id ? response.data : activity)
            );

            setTimedStatus('success', `Activity '${response.data.title}' updated successfully!`);
            setIsEditModalOpen(false);
            setCurrentActivity(null);

        } catch (err) {
            console.error("Error updating activity:", err);
            setTimedStatus('error', 'Failed to update activity. Check backend endpoint (PUT method).');
        }
    };

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Admin Activity Management 📝</h2>

            {/* --- Status Messages (Consolidated) --- */}
            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    {error}
                </div>
            )}
            {uploadSuccess && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
                    Activity uploaded successfully!
                </div>
            )}
            {/* ADDED: General success/error status for delete/edit */}
            {statusMessage.message && statusMessage.type !== 'success' && statusMessage.type !== 'error' && (
                <div className={`px-4 py-3 rounded relative mb-4 ${
                    statusMessage.type === 'success' ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'
                }`} role="alert">
                    {statusMessage.message}
                </div>
            )}


            {/* --- 1. Add New Activity Form --- */}
            <div className="bg-white p-6 shadow-xl rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Add New Activity</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* ... (Existing form inputs for title, description, file) ... */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={newActivity.title}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={newActivity.description}
                            onChange={handleChange}
                            rows="3"
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Image File</label>
                        <input
                            type="file"
                            name="file"
                            onChange={handleFileChange}
                            required
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-brown-50 file:text-[#a8815e] hover:file:bg-brown-100"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={uploading}
                        className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
                            uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#a8815e] hover:bg-amber-700'
                        }`}
                    >
                        {uploading ? 'Uploading...' : 'Upload Activity'}
                    </button>
                </form>
            </div>

            {/* --- 2. Activity List Overview --- */}
            <div className="bg-white p-6 shadow-xl rounded-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-700">Existing Activities</h3>
                
                {loading && <p>Loading activities...</p>}
                
                {!loading && activities.length === 0 && <p className="text-gray-500">No activities found.</p>}

                <div className="space-y-4">
                    {activities.map((activity) => (
                        <div key={activity.id} className="flex items-start p-4 border rounded-md hover:bg-gray-50 transition duration-150 relative group">
                            <img 
                                src={activity.imageUrl} 
                                alt={activity.title} 
                                className="w-20 h-20 object-cover rounded-md mr-4 flex-shrink-0" 
                            />
                            <div className="flex-grow">
                                <p className="text-lg font-medium text-gray-900">{activity.title}</p>
                                <p className="text-sm text-gray-600 line-clamp-2">{activity.description}</p>
                                <p className="text-xs text-gray-400 mt-1">ID: {activity.id}</p>
                            </div>
                            
                            {/* --- ADDED: Edit/Delete buttons --- */}
                            <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition duration-300 ml-4 flex-shrink-0">
                                {/* Edit Button */}
                                <button
                                    onClick={() => openEditModal(activity)}
                                    className="p-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition duration-150"
                                    title="Edit Activity"
                                >
                                    <Pencil className="w-4 h-4" />
                                </button>
                                {/* Delete Button */}
                                <button
                                    onClick={() => handleDelete(activity.id, activity.title)}
                                    className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition duration-150"
                                    title="Delete Activity"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                            {/* ------------------------------- */}
                        </div>
                    ))}
                </div>
            </div>

            {/* --- ADDED: Edit Modal Display --- */}
            {isEditModalOpen && currentActivity && (
                <EditModal 
                    activity={currentActivity}
                    onClose={() => setIsEditModalOpen(false)}
                    onChange={handleEditChange}
                    onSubmit={handleEditSubmit}
                />
            )}
        </div>
    );
};

export default AdminActivity;