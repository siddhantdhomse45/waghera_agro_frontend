



import React, { useState, useEffect } from 'react'; 
import axios from 'axios';
import { Trash2 } from 'lucide-react';

const defaultNewPhoto = {
    title: '',
    description: '',
    file: null,
};

const AdminEvent = () => {
    const [photos, setPhotos] = useState([]);
    const [newPhoto, setNewPhoto] = useState(defaultNewPhoto);
    const [loading, setLoading] = useState(true);
    const [uploading, setUploading] = useState(false);
    const [statusMessage, setStatusMessage] = useState({ type: '', message: '' });

    const API_BASE_URL = 'https://backend-waghera.onrender.com/api/event-photos';

    const setTimedStatus = (type, message) => {
        setStatusMessage({ type, message });
        setTimeout(() => setStatusMessage({ type: '', message: '' }), 5000);
    };

    const fetchPhotos = async () => {
        setLoading(true);
        try {
            const res = await axios.get(API_BASE_URL);
            setPhotos(res.data);
        } catch (err) {
            console.error("Error fetching photos:", err);
            setTimedStatus('error', 'Failed to fetch event photos');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPhotos();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPhoto(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        setNewPhoto(prev => ({ ...prev, file: e.target.files[0] }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!newPhoto.title || !newPhoto.file) {
            setTimedStatus('error', 'Title and image file are required');
            return;
        }

        setUploading(true);
        const formData = new FormData();
        formData.append('title', newPhoto.title);
        formData.append('description', newPhoto.description || '');
        formData.append('file', newPhoto.file);

        try {
            const res = await axios.post(API_BASE_URL, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setPhotos(prev => [res.data.photo, ...prev]);
            setNewPhoto(defaultNewPhoto);
            setTimedStatus('success', `Photo '${res.data.photo.title}' uploaded successfully!`);
            e.target.reset();
        } catch (err) {
            console.error("Upload error:", err);
            setTimedStatus('error', 'Failed to upload photo');
        } finally {
            setUploading(false);
        }
    };

    const handleDelete = async (id, title) => {
        if (!window.confirm(`Delete photo "${title}"?`)) return;

        try {
            const token = localStorage.getItem('jwtToken');
            const headers = token ? { Authorization: `Bearer ${token}` } : {};

            await axios.delete(`${API_BASE_URL}/${id}`, { headers });
            setPhotos(prev => prev.filter(p => p.id !== id));
            setTimedStatus('success', `Photo '${title}' deleted successfully`);
        } catch (err) {
            console.error("Delete error:", err);
            setTimedStatus('error', 'Failed to delete photo');
        }
    };

    return (
        <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Event Photo Gallery Management 📸</h2>

            {statusMessage.message && (
                <div className={`px-3 py-2 sm:px-4 sm:py-3 rounded mb-3 sm:mb-4 text-sm sm:text-base ${statusMessage.type === 'success' ? 'bg-green-100 text-green-700 border-green-400' : 'bg-red-100 text-red-700 border-red-400'}`} role="alert">
                    {statusMessage.message}
                </div>
            )}

            {/* Upload Form */}
            <div className="bg-white p-4 sm:p-6 shadow-lg rounded mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Upload New Event Photo</h3>
                <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                    <input type="text" name="title" placeholder="Title*" onChange={handleChange} className="block w-full p-2 border rounded text-sm sm:text-base" required />
                    <textarea name="description" placeholder="Description (optional)" onChange={handleChange} className="block w-full p-2 border rounded text-sm sm:text-base"></textarea>
                    <input type="file" name="file" onChange={handleFileChange} accept="image/*" className="block w-full mt-2 text-xs sm:text-sm" required />
                    <button type="submit" disabled={uploading} className={`w-full py-2 rounded text-white text-sm sm:text-base ${uploading ? 'bg-gray-400' : 'bg-[#a8815e]'}`}>
                        {uploading ? 'Uploading...' : 'Upload Photo'}
                    </button>
                </form>
            </div>

            {/* Gallery */}
            <div className="bg-white p-4 sm:p-6 shadow-lg rounded">
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Existing Event Photos ({photos.length})</h3>
                {loading ? <p className="text-sm sm:text-base">Loading photos...</p> :
                    photos.length === 0 ? <p className="text-gray-500 text-sm sm:text-base">No photos found.</p> :
                        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
                            {photos.map(photo => (
                                <div key={photo._id} className="border rounded shadow relative group">
                                    <img src={photo.imageUrl} alt={photo.title} className="w-full h-32 sm:h-48 object-cover" />
                                    <div className="p-3 sm:p-4">
                                        <p className="font-medium truncate text-sm sm:text-base">{photo.title}</p>
                                        <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">{photo.description}</p>
                                    </div>
                                    <button onClick={() => handleDelete(photo._id, photo.title)} className="absolute top-1 sm:top-2 right-1 sm:right-2 p-1.5 sm:p-2 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100">
                                        <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                }
            </div>
        </div>
    );
};

export default AdminEvent;
