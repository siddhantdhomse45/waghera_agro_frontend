// import React, { useState } from "react";

// const Gallery = () => {
//   const [images, setImages] = useState([
//     {
//       id: 1,
//       name: "Beach View 1",
//       url: "https://via.placeholder.com/600x400?text=Beach+View+1",
//       category: "Beach",
//     },
//     {
//       id: 2,
//       name: "Pool Area",
//       url: "https://via.placeholder.com/600x400?text=Pool+Area",
//       category: "Facilities",
//     },
//     {
//       id: 3,
//       name: "Restaurant",
//       url: "https://via.placeholder.com/600x400?text=Restaurant",
//       category: "Dining",
//     },
//     {
//       id: 4,
//       name: "Luxury Room",
//       url: "https://via.placeholder.com/600x400?text=Luxury+Room",
//       category: "Rooms",
//     },
//     {
//       id: 5,
//       name: "Garden View",
//       url: "https://via.placeholder.com/600x400?text=Garden+View",
//       category: "Nature",
//     },
//     {
//       id: 6,
//       name: "Spa Facility",
//       url: "https://via.placeholder.com/600x400?text=Spa+Facility",
//       category: "Wellness",
//     },
//   ]);

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [showAddModal, setShowAddModal] = useState(false);
//   const [showEditModal, setShowEditModal] = useState(false);
//   const [newImage, setNewImage] = useState({
//     name: "",
//     file: null,
//     category: "Beach",
//     url: "",
//   });
//   const [editingImage, setEditingImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState("");
//   const [activeMenu, setActiveMenu] = useState(null);

//   const categories = [
//     "Beach",
//     "Rooms",
//     "Facilities",
//     "Dining",
//     "Nature",
//     "Wellness",
//     "Events",
//   ];

//   // convert file to base64 so it always loads
//   const handleImageChange = (e, isEdit = false) => {
//     const file = e.target.files[0];
//     if (!file) return;

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const dataUrl = reader.result;
//       if (isEdit) {
//         setEditingImage((prev) => ({ ...prev, file, url: dataUrl }));
//       } else {
//         setNewImage((prev) => ({ ...prev, file, url: dataUrl }));
//         setPreviewUrl(dataUrl);
//       }
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleAddImage = () => {
//     if (!newImage.name || !newImage.url) return;

//     const image = {
//       id: images.length > 0 ? Math.max(...images.map((img) => img.id)) + 1 : 1,
//       name: newImage.name,
//       url: newImage.url,
//       category: newImage.category,
//     };
//     setImages((prev) => [...prev, image]);
//     setNewImage({ name: "", file: null, category: "Beach", url: "" });
//     setPreviewUrl("");
//     setShowAddModal(false);
//   };

//   const handleUpdateImage = () => {
//     if (!editingImage || !editingImage.name || !editingImage.url) return;

//     setImages((prev) =>
//       prev.map((img) => (img.id === editingImage.id ? editingImage : img))
//     );
//     setEditingImage(null);
//     setShowEditModal(false);
//     setPreviewUrl("");
//     setActiveMenu(null);
//   };

//   const handleDeleteImage = (id) => {
//     setImages((prev) => prev.filter((img) => img.id !== id));
//     if (selectedImage?.id === id) setSelectedImage(null);
//     setActiveMenu(null);
//   };

//   const handleViewImage = (image) => {
//     setSelectedImage(image);
//     setActiveMenu(null);
//   };

//   const handleEditImage = (image) => {
//     setEditingImage({ ...image, file: null });
//     setPreviewUrl("");
//     setShowEditModal(true);
//     setActiveMenu(null);
//   };

//   const toggleMenu = (imageId) => {
//     setActiveMenu((prev) => (prev === imageId ? null : imageId));
//   };

//   return (
//     <div className="p-4">
//       {/* Header */}
//       <div className="mb-6 flex justify-between items-center">
//         <div>
//           <h1 className="text-2xl font-bold text-[#a8815e]">
//             Gallery Management
//           </h1>
//           <p className="text-gray-600">Manage your gallery images</p>
//         </div>
//         <button
//           onClick={() => setShowAddModal(true)}
//           className="bg-[#a8815e] hover:bg-yellow-800 text-white px-4 py-2 rounded-md flex items-center"
//         >
//           <svg
//             className="w-5 h-5 mr-2"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M12 6v6m0 0v6m0-6h6m-6 0H6"
//             ></path>
//           </svg>
//           Add Image
//         </button>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {images.map((image) => (
//           <div
//             key={image.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden relative group"
//           >
//             <div className="relative">
//               <img
//                 src={image.url}
//                 alt={image.name}
//                 className="w-full h-48 object-cover"
//                 onClick={() => handleViewImage(image)}
//               />
//               {/* lighter overlay, never fully hides image */}
//               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center pointer-events-none">
//                 <button
//                   onClick={() => handleViewImage(image)}
//                   className="pointer-events-auto text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 rounded-full p-2"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                     ></path>
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                     ></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>

//             <div className="p-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <h3 className="font-semibold text-gray-800">{image.name}</h3>
//                   <span className="inline-block px-2 py-1 text-xs rounded-full bg-[#a8815e] text-white mt-1">
//                     {image.category}
//                   </span>
//                 </div>
//                 <div className="relative">
//                   <button
//                     onClick={() => toggleMenu(image.id)}
//                     className="text-gray-500 hover:text-gray-700 focus:outline-none"
//                   >
//                     <svg
//                       className="w-5 h-5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
//                     </svg>
//                   </button>

//                   {activeMenu === image.id && (
//                     <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
//                       <div className="py-1" role="menu">
//                         <button
//                           onClick={() => handleViewImage(image)}
//                           className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                         >
//                           View
//                         </button>
//                         <button
//                           onClick={() => handleEditImage(image)}
//                           className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDeleteImage(image.id)}
//                           className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 hover:text-red-900"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Add Image Modal */}
//       {showAddModal && (
//         <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96 max-w-md shadow-xl">
//             <h2 className="text-xl font-bold text-[#a8815e] mb-4">
//               Add New Image
//             </h2>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Image Name
//                 </label>
//                 <input
//                   type="text"
//                   value={newImage.name}
//                   onChange={(e) =>
//                     setNewImage({ ...newImage, name: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//                   placeholder="Enter image name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Upload Image
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => handleImageChange(e)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//                 />
//                 {previewUrl && (
//                   <div className="mt-2">
//                     <img
//                       src={previewUrl}
//                       alt="Preview"
//                       className="w-full h-32 object-cover rounded-md"
//                     />
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Category
//                 </label>
//                 <select
//                   value={newImage.category}
//                   onChange={(e) =>
//                     setNewImage({ ...newImage, category: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//                 >
//                   {categories.map((category) => (
//                     <option key={category} value={category}>
//                       {category}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="flex justify-end space-x-3 mt-6">
//               <button
//                 onClick={() => {
//                   setShowAddModal(false);
//                   setNewImage({
//                     name: "",
//                     file: null,
//                     category: "Beach",
//                     url: "",
//                   });
//                   setPreviewUrl("");
//                 }}
//                 className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleAddImage}
//                 className="px-4 py-2 bg-[#a8815e] text-white rounded-md hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//               >
//                 Add Image
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Edit Image Modal */}
//       {showEditModal && editingImage && (
//         <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg p-6 w-96 max-w-md shadow-xl">
//             <h2 className="text-xl font-bold text-[#a8815e] mb-4">
//               Edit Image
//             </h2>
//             <div className="space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Image Name
//                 </label>
//                 <input
//                   type="text"
//                   value={editingImage.name}
//                   onChange={(e) =>
//                     setEditingImage({ ...editingImage, name: e.target.value })
//                   }
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//                   placeholder="Enter image name"
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Upload New Image
//                 </label>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => handleImageChange(e, true)}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//                 />
//                 {(previewUrl || editingImage.url) && (
//                   <div className="mt-2">
//                     <img
//                       src={previewUrl || editingImage.url}
//                       alt="Preview"
//                       className="w-full h-32 object-cover rounded-md"
//                     />
//                   </div>
//                 )}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Category
//                 </label>
//                 <select
//                   value={editingImage.category}
//                   onChange={(e) =>
//                     setEditingImage({
//                       ...editingImage,
//                       category: e.target.value,
//                     })
//                   }
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//                 >
//                   {categories.map((category) => (
//                     <option key={category} value={category}>
//                       {category}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <div className="flex justify-end space-x-3 mt-6">
//               <button
//                 onClick={() => {
//                   setShowEditModal(false);
//                   setEditingImage(null);
//                   setPreviewUrl("");
//                 }}
//                 className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleUpdateImage}
//                 className="px-4 py-2 bg-[#a8815e] text-white rounded-md hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//               >
//                 Update Image
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* View Image Modal */}
//       {selectedImage && (
//         <div className="fixed inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-lg p-6 max-w-4xl w-full max-h-[90vh] flex flex-col">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-xl font-bold text-[#a8815e]">
//                 {selectedImage.name}
//               </h2>
//               <button
//                 onClick={() => setSelectedImage(null)}
//                 className="text-gray-500 hover:text-gray-700"
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   ></path>
//                 </svg>
//               </button>
//             </div>
//             <div className="flex-grow flex items-center justify-center overflow-hidden">
//               <img
//                 src={selectedImage.url}
//                 alt={selectedImage.name}
//                 className="max-h-[70vh] max-w-full object-contain"
//               />
//             </div>
//             <div className="mt-4 flex justify-between items-center">
//               <span className="inline-block px-2 py-1 text-xs rounded-full bg-[#a8815e] text-white">
//                 {selectedImage.category}
//               </span>
//               <div className="space-x-2">
//                 <button
//                   onClick={() => handleEditImage(selectedImage)}
//                   className="px-4 py-2 bg-[#a8815e] text-white rounded-md hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-[#a8815e]"
//                 >
//                   Edit
//                 </button>
//                 <button
//                   onClick={() => handleDeleteImage(selectedImage.id)}
//                   className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Gallery;



import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE = "http://localhost:5000/api/gallery";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const [newImage, setNewImage] = useState({
    name: "",
    file: null,
    category: "Beach",
  });

  const [editingImage, setEditingImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const categories = [
    "Beach",
    "Rooms",
    "Facilities",
    "Dining",
    "Nature",
    "Wellness",
    "Events",
  ];

  // ---------------- FETCH IMAGES ----------------
  const fetchImages = async () => {
    try {
      const res = await axios.get(`${API_BASE}/all`);
      setImages(res.data);
    } catch (err) {
      console.error("Fetch gallery error", err);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  // ---------------- IMAGE CHANGE ----------------
  const handleImageChange = (e, isEdit = false) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreviewUrl(URL.createObjectURL(file));

    if (isEdit) {
      setEditingImage((prev) => ({ ...prev, file }));
    } else {
      setNewImage((prev) => ({ ...prev, file }));
    }
  };

  // ---------------- ADD IMAGE ----------------
  const handleAddImage = async () => {
    if (!newImage.file) return;

    const formData = new FormData();
    formData.append("file", newImage.file);
    formData.append("category", newImage.category);

    try {
      await axios.post(`${API_BASE}/upload`, formData);
      fetchImages();
      setShowAddModal(false);
      setNewImage({ name: "", file: null, category: "Beach" });
      setPreviewUrl("");
    } catch (err) {
      console.error("Upload error", err);
    }
  };

  // ---------------- EDIT IMAGE ----------------
  const handleEditImage = (image) => {
    setEditingImage(image);
    setPreviewUrl("");
    setShowEditModal(true);
    setActiveMenu(null);
  };

  // ---------------- UPDATE IMAGE ----------------
  const handleUpdateImage = async () => {
    if (!editingImage) return;

    const formData = new FormData();
    formData.append("category", editingImage.category);

    if (editingImage.file) {
      formData.append("file", editingImage.file);
    }

    try {
      await axios.put(
        `${API_BASE}/update/${editingImage._id}`,
        formData
      );
      fetchImages();
      setShowEditModal(false);
      setEditingImage(null);
      setPreviewUrl("");
    } catch (err) {
      console.error("Update error", err);
    }
  };

  // ---------------- DELETE IMAGE ----------------
  const handleDeleteImage = async (id) => {
    try {
      await axios.delete(`${API_BASE}/delete/${id}`);
      fetchImages();
      setSelectedImage(null);
      setActiveMenu(null);
    } catch (err) {
      console.error("Delete error", err);
    }
  };

  const toggleMenu = (id) => {
    setActiveMenu(activeMenu === id ? null : id);
  };

  return (
    <div className="p-4">
      {/* HEADER */}
      <div className="mb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#a8815e]">
            Gallery Management
          </h1>
          <p className="text-gray-600">Manage your gallery images</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-[#a8815e] text-white px-4 py-2 rounded-md"
        >
          Add Image
        </button>
      </div>

      {/* GALLERY GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <div
            key={image._id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={image.url}
              alt="gallery"
              className="w-full h-48 object-cover cursor-pointer"
              onClick={() => setSelectedImage(image)}
            />

            <div className="p-4 flex justify-between items-center">
              <span className="text-sm bg-[#a8815e] text-white px-2 py-1 rounded">
                {image.category}
              </span>
              <button onClick={() => toggleMenu(image._id)}>⋮</button>
            </div>

            {activeMenu === image._id && (
              <div className="p-2 border-t">
                <button
                  onClick={() => handleEditImage(image)}
                  className="block w-full text-left text-sm"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteImage(image._id)}
                  className="block w-full text-left text-sm text-red-600"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ADD MODAL */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-96">
            <h2 className="text-xl font-bold mb-4">Add Image</h2>

            <input
              type="file"
              onChange={handleImageChange}
              className="mb-3"
            />

            {previewUrl && (
              <img
                src={previewUrl}
                alt="preview"
                className="h-32 w-full object-cover mb-3"
              />
            )}

            <select
              value={newImage.category}
              onChange={(e) =>
                setNewImage({ ...newImage, category: e.target.value })
              }
              className="w-full mb-4"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <div className="flex justify-end gap-2">
              <button onClick={() => setShowAddModal(false)}>Cancel</button>
              <button
                onClick={handleAddImage}
                className="bg-[#a8815e] text-white px-4 py-2 rounded"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {showEditModal && editingImage && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
          <div className="bg-white p-6 rounded w-96">
            <h2 className="text-xl font-bold mb-4">Edit Image</h2>

            <input
              type="file"
              onChange={(e) => handleImageChange(e, true)}
              className="mb-3"
            />

            <img
              src={previewUrl || editingImage.url}
              alt="preview"
              className="h-32 w-full object-cover mb-3"
            />

            <select
              value={editingImage.category}
              onChange={(e) =>
                setEditingImage({
                  ...editingImage,
                  category: e.target.value,
                })
              }
              className="w-full mb-4"
            >
              {categories.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <div className="flex justify-end gap-2">
              <button onClick={() => setShowEditModal(false)}>Cancel</button>
              <button
                onClick={handleUpdateImage}
                className="bg-[#a8815e] text-white px-4 py-2 rounded"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
