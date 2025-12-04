// import React, { useState, useEffect } from 'react';

// // API Endpoints
// // ⭐ UPDATED URL to match your Spring Boot controller (@RequestMapping("/api/menu"))
// const MENU_ITEMS_API_URL = '/api/menu'; 
// const COMBOS_API_URL = '/api/combos'; 
// const CLOUDINARY_UPLOAD_URL = '/api/images/upload'; 

// const Combos = () => {
//     // -------------------------
//     // 1. MENU ITEM STATE
//     // -------------------------
//     const [menuItems, setMenuItems] = useState([]);
//     const [menuItemFormData, setMenuItemFormData] = useState({
//         name: '', description: '', price: '', category: '', isDeal: false, imageUrl: ''
//     });
//     const [editingItemId, setEditingItemId] = useState(null);
    
//     // -------------------------
//     // 2. COMBO STATE
//     // -------------------------
//     const [combos, setCombos] = useState([]);
//     const [comboFormData, setComboFormData] = useState({
//         name: '', description: '', price: '', isDeal: false, imageUrl: ''
//     });
//     const [editingComboId, setEditingComboId] = useState(null);
    
//     // -------------------------
//     // 3. SEPARATE UPLOAD STATES & HANDLERS
//     // -------------------------
//     const [loading, setLoading] = useState(true);
    
//     // Dedicated State for Menu Item Upload
//     const [menuItemSelectedFile, setMenuItemSelectedFile] = useState(null);
//     const [menuItemUploadStatus, setMenuItemUploadStatus] = useState('');
    
//     // Dedicated State for Combo Upload
//     const [comboSelectedFile, setComboSelectedFile] = useState(null);
//     const [comboUploadStatus, setComboUploadStatus] = useState('');

//     useEffect(() => {
//         fetchMenuItems();
//         fetchCombos();
//     }, []);

//     // Generic form change handlers
//     const handleMenuItemChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setMenuItemFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const handleComboChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setComboFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };
    
//     // Handle File Change (separated by target)
//     const handleFileChange = (e, target) => {
//         const file = e.target.files[0];
        
//         if (target === 'menuItem') {
//             setMenuItemSelectedFile(file);
//             setMenuItemUploadStatus(file ? `File selected: ${file.name}` : '');
//             setMenuItemFormData(prev => ({ ...prev, imageUrl: '' }));
            
//             // Clear Combo states to prevent bleed over
//             setComboSelectedFile(null);
//             setComboUploadStatus('');
            
//         } else if (target === 'combo') {
//             setComboSelectedFile(file);
//             setComboUploadStatus(file ? `File selected: ${file.name}` : '');
//             setComboFormData(prev => ({ ...prev, imageUrl: '' }));
            
//             // Clear Menu Item states
//             setMenuItemSelectedFile(null);
//             setMenuItemUploadStatus('');
//         }
//     };

//     // Handle Image Upload (uses dedicated states)
//     const handleImageUpload = async (target) => {
//         let selectedFile, setFile, setStatus, setFormData;

//         if (target === 'menuItem') {
//             selectedFile = menuItemSelectedFile;
//             setFile = setMenuItemSelectedFile;
//             setStatus = setMenuItemUploadStatus;
//             setFormData = setMenuItemFormData;
//         } else if (target === 'combo') {
//             selectedFile = comboSelectedFile;
//             setFile = setComboSelectedFile;
//             setStatus = setComboUploadStatus;
//             setFormData = setComboFormData;
//         } else {
//             return;
//         }

//         if (!selectedFile) {
//             setStatus('Please select an image file first.');
//             return;
//         }

//         setStatus('Uploading...');
//         const data = new FormData();
//         data.append('file', selectedFile); 

//         try {
//             const response = await fetch(CLOUDINARY_UPLOAD_URL, { method: 'POST', body: data });

//             if (!response.ok) { throw new Error(`Upload failed with status ${response.status}.`); }
//             const result = await response.json();
            
//             setFormData(prev => ({ ...prev, imageUrl: result.url }));
//             setStatus('Upload successful! Image URL saved internally. Ready to save item.');

//             setFile(null); // Clear the selected file state

//         } catch (error) {
//             console.error("Cloudinary upload error:", error);
//             setStatus(`Upload failed: ${error.message}`);
//         }
//     };
    
//     // -------------------------
//     // 4. API FETCH & CRUD
//     // -------------------------

//     const fetchMenuItems = async () => {
//         setLoading(true); 
//         try {
//             const response = await fetch(MENU_ITEMS_API_URL);
//             const data = await response.json();
//             if (Array.isArray(data)) { setMenuItems(data); } else { console.warn("API returned non-array data for menu items:", data); setMenuItems([]); }
//         } catch (error) {
//             console.error("Error fetching menu items:", error);
//             setMenuItems([]);
//         } 
//     };
    
//     const fetchCombos = async () => {
//         try {
//             const response = await fetch(COMBOS_API_URL);
//             const data = await response.json();
//              if (Array.isArray(data)) { setCombos(data); } else { console.warn("API returned non-array data for combos:", data); setCombos([]); }
//         } catch (error) {
//             console.error("Error fetching combos:", error);
//             setCombos([]);
//         } finally {
//              setLoading(false); 
//         }
//     };

//     // ⭐ UPDATED: handleMenuItemSave ensures correct URL and handles POST/PUT logic
//     const handleMenuItemSave = async (e) => {
//         e.preventDefault();
        
//         if (!menuItemFormData.imageUrl) { 
//             alert('Please upload an image for the Menu Item before saving.'); 
//             return; 
//         }

//         const payload = { 
//             ...menuItemFormData, 
//             price: parseFloat(menuItemFormData.price) 
//         };
        
//         const method = editingItemId ? 'PUT' : 'POST';
//         // For POST, the URL is just the base API URL; for PUT, include the ID
//         const url = editingItemId ? `${MENU_ITEMS_API_URL}/${editingItemId}` : MENU_ITEMS_API_URL; 
        
//         try {
//             const response = await fetch(url, { 
//                 method: method, 
//                 headers: { 'Content-Type': 'application/json' }, 
//                 body: JSON.stringify(payload) 
//             });

//             if (response.ok) { 
//                 resetMenuItemForm(); 
//                 fetchMenuItems(); 
//                 alert(`Menu Item ${editingItemId ? 'updated' : 'created'} successfully!`);
//             } else { 
//                 const errorText = await response.text();
//                 alert(`Failed to save menu item. Error: ${errorText || response.statusText}`); 
//             }
//         } catch (error) { 
//             console.error("Error saving menu item:", error); 
//             alert("An unknown network error occurred."); 
//         }
//     };

//     const handleComboSave = async (e) => {
//         e.preventDefault();
//         if (!comboFormData.imageUrl) { alert('Please upload an image for the Combo before saving.'); return; }
//         const payload = { ...comboFormData, price: parseFloat(comboFormData.price) };
//         const method = editingComboId ? 'PUT' : 'POST';
//         const url = editingComboId ? `${COMBOS_API_URL}/${editingComboId}` : COMBOS_API_URL;
//         try {
//             const response = await fetch(url, { method: method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
//             if (response.ok) { resetComboForm(); fetchCombos(); } else { alert(`Failed to save combo. Error: ${await response.text()}`); }
//         } catch (error) { console.error("Error saving combo:", error); alert("An unknown error occurred."); }
//     };

//     // Reset functions
//     const resetMenuItemForm = () => { 
//         setEditingItemId(null); 
//         setMenuItemFormData({ name: '', description: '', price: '', category: '', isDeal: false, imageUrl: '' }); 
//         setMenuItemSelectedFile(null); 
//         setMenuItemUploadStatus(''); 
//     };
    
//     const resetComboForm = () => { 
//         setEditingComboId(null); 
//         setComboFormData({ name: '', description: '', price: '', isDeal: false, imageUrl: '' }); 
//         setComboSelectedFile(null); 
//         setComboUploadStatus(''); 
//     };

//     // Edit functions
//     const startEditMenuItem = (item) => { 
//         setEditingItemId(item.id); 
//         setMenuItemFormData({ ...item, price: String(item.price), category: item.category || '' }); 
//         setEditingComboId(null); 
//         resetComboForm(); 
//         setMenuItemUploadStatus(''); 
//     };
//     const startEditCombo = (combo) => { 
//         setEditingComboId(combo.id); 
//         setComboFormData({ ...combo, price: String(combo.price) }); 
//         setEditingItemId(null); 
//         resetMenuItemForm(); 
//         setComboUploadStatus(''); 
//     };
    
//     // Delete functions (omitted for brevity)
//     const handleDeleteMenuItem = async (id) => { /* ... */ };
//     const handleDeleteCombo = async (id) => { /* ... */ };


//     // -------------------------
//     // 5. RENDER UI
//     // -------------------------
//     return (
//         <div className="p-6 bg-gray-50 min-h-screen">
//             <h1 className="text-3xl font-bold mb-6 text-[#a8815e]">🍴 Menu Management</h1>
            
//             <hr/>
            
//             {/* =========================================================================
//                 SECTION 1: CREATE MENU ITEM (Uses dedicated upload states, No 'isDeal')
//             ========================================================================= */}
//             <div className="bg-white p-6 rounded-lg shadow-xl mb-8 border-t-4 border-blue-500">
//                 <h2 className="text-xl font-semibold mb-4 text-blue-700">{editingItemId ? 'Edit Menu Item' : 'Create Menu Item'}</h2>
//                 <form onSubmit={handleMenuItemSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
//                     <input type="text" name="name" placeholder="Menu Name" value={menuItemFormData.name} onChange={handleMenuItemChange} className="p-3 border rounded" required />
//                     <input type="text" name="description" placeholder="Description" value={menuItemFormData.description} onChange={handleMenuItemChange} className="p-3 border rounded" required />
//                     <input type="number" name="price" placeholder="Price (e.g., 550)" value={menuItemFormData.price} onChange={handleMenuItemChange} className="p-3 border rounded" required />
//                     <input type="text" name="category" placeholder="Category (e.g., Appetizer, Main)" value={menuItemFormData.category} onChange={handleMenuItemChange} className="p-3 border rounded" required />
//                     <div className="md:col-span-2"></div> 
                    
//                     {/* UI: Menu Item Image Upload uses Menu Item states */}
//                     <div className="md:col-span-2 border p-3 rounded bg-gray-50">
//                         <label className="block text-gray-700 font-medium mb-2">Image Upload</label>
//                         <div className="flex space-x-2 mb-2">
//                             <input type="file" id="menu-item-file-input" accept="image/*" onChange={(e) => handleFileChange(e, 'menuItem')} style={{ display: 'none' }} />
//                             <button type="button" onClick={() => document.getElementById('menu-item-file-input').click()}
//                                 className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-150">Select Image</button>
//                             <button type="button" onClick={() => handleImageUpload('menuItem')} disabled={!menuItemSelectedFile || menuItemUploadStatus.includes('Uploading')}
//                                 className={`py-2 px-4 rounded-lg text-white transition duration-150 ${menuItemSelectedFile ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}>
//                                 {menuItemUploadStatus.includes('Uploading') ? 'Uploading...' : 'Upload to Cloudinary'}
//                             </button>
//                         </div>
//                         <p className={`text-sm ${menuItemUploadStatus.includes('successful') ? 'text-green-600' : menuItemUploadStatus.includes('failed') ? 'text-red-600' : 'text-blue-600'}`}>
//                             {menuItemUploadStatus || (menuItemFormData.imageUrl ? `Current URL set: ${menuItemFormData.imageUrl.substring(0, 30)}...` : 'Ready to select and upload an image.')}
//                         </p>
//                     </div>
                    
//                     <div className="md:col-span-2 flex space-x-4">
//                         <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">{editingItemId ? 'Update Menu Item' : 'Create Menu Item'}</button>
//                         {editingItemId && (<button type="button" onClick={resetMenuItemForm} className="bg-gray-400 text-white py-3 px-6 rounded-lg">Cancel Edit</button>)}
//                     </div>
//                 </form>
//             </div>
            
//             <hr className="my-8"/>

//             {/* =========================================================================
//                 SECTION 2: CREATE NEW COMBO (Uses dedicated upload states, Has 'isDeal')
//             ========================================================================= */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//                 <h2 className="text-xl font-semibold mb-4">{editingComboId ? 'Edit Combo' : 'Create New Combo'}</h2>
//                 <form onSubmit={handleComboSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
//                     <input type="text" name="name" placeholder="Combo Name" value={comboFormData.name} onChange={handleComboChange} className="p-3 border rounded" required />
//                     <input type="text" name="description" placeholder="Description" value={comboFormData.description} onChange={handleComboChange} className="p-3 border rounded" required />
//                     <input type="number" name="price" placeholder="Price (e.g., 550)" value={comboFormData.price} onChange={handleComboChange} className="p-3 border rounded" required />
//                     <label className="flex items-center space-x-2 p-3"><input type="checkbox" name="isDeal" checked={comboFormData.isDeal} onChange={handleComboChange} className="mr-2"/><span>Mark as Special Deal</span></label>
                    
//                     {/* UI: Combo Image Upload uses Combo states */}
//                     <div className="md:col-span-2 border p-3 rounded bg-gray-50">
//                         <label className="block text-gray-700 font-medium mb-2">Image Upload</label>
//                         <div className="flex space-x-2 mb-2">
//                             <input type="file" id="combo-file-input" accept="image/*" onChange={(e) => handleFileChange(e, 'combo')} style={{ display: 'none' }} />
//                             <button type="button" onClick={() => document.getElementById('combo-file-input').click()}
//                                 className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-150">Select Image</button>
//                             <button type="button" onClick={() => handleImageUpload('combo')} disabled={!comboSelectedFile || comboUploadStatus.includes('Uploading')}
//                                 className={`py-2 px-4 rounded-lg text-white transition duration-150 ${comboSelectedFile ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}>
//                                 {comboUploadStatus.includes('Uploading') ? 'Uploading...' : 'Upload to Cloudinary'}
//                             </button>
//                         </div>
//                         <p className={`text-sm ${comboUploadStatus.includes('successful') ? 'text-green-600' : comboUploadStatus.includes('failed') ? 'text-red-600' : 'text-blue-600'}`}>
//                             {comboUploadStatus || (comboFormData.imageUrl ? `Current URL set: ${comboFormData.imageUrl.substring(0, 30)}...` : 'Ready to select and upload an image.')}
//                         </p>
//                     </div>

//                     <div className="md:col-span-2 flex space-x-4">
//                         <button type="submit" className="bg-[#a8815e] text-white py-3 px-6 rounded-lg hover:bg-[#8d6c4d]">{editingComboId ? 'Update Combo' : 'Create Combo'}</button>
//                         {editingComboId && (<button type="button" onClick={resetComboForm} className="bg-gray-400 text-white py-3 px-6 rounded-lg">Cancel Edit</button>)}
//                     </div>
//                 </form>
//             </div>

//             <hr className="my-8"/>

//             {/* =========================================================================
//                 SECTION 3 & 4: EXISTING ITEMS TABLES
//             ========================================================================= */}
//             <h2 className="text-2xl font-semibold mb-4 text-blue-700">Existing Menu Items ({menuItems.length})</h2>
//             {loading ? (<p>Loading Menu Items...</p>) : (
//                 <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-12">
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {menuItems.map((item) => ( 
//                                 <tr key={item.id}>
//                                     <td className="px-6 py-4"><img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded-md" /></td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">₹{item.price}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <button onClick={() => startEditMenuItem(item)} className="text-blue-500 mr-3">Edit</button>
//                                         <button onClick={() => handleDeleteMenuItem(item.id)} className="text-red-600">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}

//             <hr className="my-8"/>

//             <h2 className="text-2xl font-semibold mb-4 text-[#a8815e]">Existing Combos ({combos.length})</h2>
//             {loading ? (<p>Loading Combos...</p>) : (
//                 <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {combos.map((combo) => (
//                                 <tr key={combo.id}>
//                                     <td className="px-6 py-4"><img src={combo.imageUrl} alt={combo.name} className="w-12 h-12 object-cover rounded-md" /></td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{combo.name}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">₹{combo.price}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <button onClick={() => startEditCombo(combo)} className="text-[#a8815e] mr-3">Edit</button>
//                                         <button onClick={() => handleDeleteCombo(combo.id)} className="text-red-600">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };
// export default Combos;




// import React, { useState, useEffect } from 'react';

// // API Endpoints - These paths rely on your proxy being set up correctly
// const MENU_ITEMS_API_URL = 'http://localhost:8080/api/menu'; 
// const COMBOS_API_URL = 'http://localhost:8080/api/combos'; 
// const CLOUDINARY_UPLOAD_URL = 'http://localhost:8080/api/images/upload'; 

// const Combos = () => {
//     // -------------------------
//     // 1. MENU ITEM STATE
//     // -------------------------
//     const [menuItems, setMenuItems] = useState([]);
//     const [menuItemFormData, setMenuItemFormData] = useState({
//         name: '', description: '', price: '', category: '', isDeal: false, imageUrl: ''
//     });
//     const [editingItemId, setEditingItemId] = useState(null);
    
//     // -------------------------
//     // 2. COMBO STATE
//     // -------------------------
//     const [combos, setCombos] = useState([]);
//     const [comboFormData, setComboFormData] = useState({
//         name: '', description: '', price: '', isDeal: false, imageUrl: ''
//     });
//     const [editingComboId, setEditingComboId] = useState(null);
    
//     // -------------------------
//     // 3. SEPARATE UPLOAD STATES & HANDLERS
//     // -------------------------
//     const [loading, setLoading] = useState(true);
    
//     // Dedicated State for Menu Item Upload
//     const [menuItemSelectedFile, setMenuItemSelectedFile] = useState(null);
//     const [menuItemUploadStatus, setMenuItemUploadStatus] = useState('');
    
//     // Dedicated State for Combo Upload
//     const [comboSelectedFile, setComboSelectedFile] = useState(null);
//     const [comboUploadStatus, setComboUploadStatus] = useState('');

//     useEffect(() => {
//         fetchMenuItems();
//         fetchCombos();
//     }, []);

//     // Generic form change handlers
//     const handleMenuItemChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setMenuItemFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };

//     const handleComboChange = (e) => {
//         const { name, value, type, checked } = e.target;
//         setComboFormData(prev => ({
//             ...prev,
//             [name]: type === 'checkbox' ? checked : value
//         }));
//     };
    
//     // Handle File Change (separated by target)
//     const handleFileChange = (e, target) => {
//         const file = e.target.files[0];
        
//         if (target === 'menuItem') {
//             setMenuItemSelectedFile(file);
//             setMenuItemUploadStatus(file ? `File selected: ${file.name}` : '');
//             setMenuItemFormData(prev => ({ ...prev, imageUrl: '' }));
            
//             setComboSelectedFile(null);
//             setComboUploadStatus('');
            
//         } else if (target === 'combo') {
//             setComboSelectedFile(file);
//             setComboUploadStatus(file ? `File selected: ${file.name}` : '');
//             setComboFormData(prev => ({ ...prev, imageUrl: '' }));
            
//             setMenuItemSelectedFile(null);
//             setMenuItemUploadStatus('');
//         }
//     };

//     // Handle Image Upload (uses dedicated states)
//     const handleImageUpload = async (target) => {
//         let selectedFile, setFile, setStatus, setFormData;

//         if (target === 'menuItem') {
//             selectedFile = menuItemSelectedFile;
//             setFile = setMenuItemSelectedFile;
//             setStatus = setMenuItemUploadStatus;
//             setFormData = setMenuItemFormData;
//         } else if (target === 'combo') {
//             selectedFile = comboSelectedFile;
//             setFile = setComboSelectedFile;
//             setStatus = setComboUploadStatus;
//             setFormData = setComboFormData;
//         } else {
//             return;
//         }

//         if (!selectedFile) {
//             setStatus('Please select an image file first.');
//             return;
//         }

//         setStatus('Uploading...');
//         const data = new FormData();
//         data.append('file', selectedFile); 

//         try {
//             const response = await fetch(CLOUDINARY_UPLOAD_URL, { method: 'POST', body: data });

//             if (!response.ok) { throw new Error(`Upload failed with status ${response.status}.`); }
//             const result = await response.json();
            
//             setFormData(prev => ({ ...prev, imageUrl: result.url }));
//             setStatus('Upload successful! Image URL saved internally. Ready to save item.');

//             setFile(null); 

//         } catch (error) {
//             console.error("Cloudinary upload error:", error);
//             setStatus(`Upload failed: ${error.message}`);
//         }
//     };
    
//     // -------------------------
//     // 4. API FETCH & CRUD
//     // -------------------------

//     const fetchMenuItems = async () => {
//         setLoading(true); 
//         try {
//             const response = await fetch(MENU_ITEMS_API_URL);
//             const data = await response.json();
//             if (Array.isArray(data)) { setMenuItems(data); } else { console.warn("API returned non-array data for menu items:", data); setMenuItems([]); }
//         } catch (error) {
//             // This is the error handler that catches the SyntaxError
//             console.error("Error fetching menu items:", error);
//             setMenuItems([]);
//         } 
//     };
    
//     const fetchCombos = async () => {
//         try {
//             const response = await fetch(COMBOS_API_URL);
//             const data = await response.json();
//              if (Array.isArray(data)) { setCombos(data); } else { console.warn("API returned non-array data for combos:", data); setCombos([]); }
//         } catch (error) {
//             // This is the error handler that catches the SyntaxError
//             console.error("Error fetching combos:", error);
//             setCombos([]);
//         } finally {
//              setLoading(false); 
//         }
//     };

//     // Save/Update Menu Item (POST/PUT)
//     const handleMenuItemSave = async (e) => {
//         e.preventDefault();
        
//         if (!menuItemFormData.imageUrl) { 
//             alert('Please upload an image for the Menu Item before saving.'); 
//             return; 
//         }

//         const payload = { 
//             ...menuItemFormData, 
//             price: parseFloat(menuItemFormData.price) 
//         };
        
//         const method = editingItemId ? 'PUT' : 'POST';
//         const url = editingItemId ? `${MENU_ITEMS_API_URL}/${editingItemId}` : MENU_ITEMS_API_URL; 
        
//         try {
//             const response = await fetch(url, { 
//                 method: method, 
//                 headers: { 'Content-Type': 'application/json' }, 
//                 body: JSON.stringify(payload) 
//             });

//             if (response.ok) { 
//                 resetMenuItemForm(); 
//                 fetchMenuItems(); 
//                 alert(`Menu Item ${editingItemId ? 'updated' : 'created'} successfully!`);
//             } else { 
//                 const errorText = await response.text();
//                 alert(`Failed to save menu item. Error: ${errorText || response.statusText}`); 
//             }
//         } catch (error) { 
//             console.error("Error saving menu item:", error); 
//             alert("An unknown network error occurred."); 
//         }
//     };

//     // Save/Update Combo (POST/PUT)
//     const handleComboSave = async (e) => {
//         e.preventDefault();
//         if (!comboFormData.imageUrl) { alert('Please upload an image for the Combo before saving.'); return; }
//         const payload = { ...comboFormData, price: parseFloat(comboFormData.price) };
//         const method = editingComboId ? 'PUT' : 'POST';
//         const url = editingComboId ? `${COMBOS_API_URL}/${editingComboId}` : COMBOS_API_URL;
//         try {
//             const response = await fetch(url, { method: method, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
//             if (response.ok) { 
//                 resetComboForm(); 
//                 fetchCombos(); 
//                 alert(`Combo ${editingComboId ? 'updated' : 'created'} successfully!`);
//             } else { 
//                 alert(`Failed to save combo. Error: ${await response.text()}`); 
//             }
//         } catch (error) { 
//             console.error("Error saving combo:", error); 
//             alert("An unknown error occurred."); 
//         }
//     };

//     // Reset functions
//     const resetMenuItemForm = () => { 
//         setEditingItemId(null); 
//         setMenuItemFormData({ name: '', description: '', price: '', category: '', isDeal: false, imageUrl: '' }); 
//         setMenuItemSelectedFile(null); 
//         setMenuItemUploadStatus(''); 
//     };
    
//     const resetComboForm = () => { 
//         setEditingComboId(null); 
//         setComboFormData({ name: '', description: '', price: '', isDeal: false, imageUrl: '' }); 
//         setComboSelectedFile(null); 
//         setComboUploadStatus(''); 
//     };

//     // Edit functions
//     const startEditMenuItem = (item) => { 
//         setEditingItemId(item.id); 
//         setMenuItemFormData({ ...item, price: String(item.price), category: item.category || '' }); 
//         setEditingComboId(null); 
//         resetComboForm(); 
//         setMenuItemUploadStatus(''); 
//     };
//     const startEditCombo = (combo) => { 
//         setEditingComboId(combo.id); 
//         setComboFormData({ ...combo, price: String(combo.price) }); 
//         setEditingItemId(null); 
//         resetMenuItemForm(); 
//         setComboUploadStatus(''); 
//     };
    
//     // Delete functions (requires DELETE endpoints in Spring Boot to work)
//     const handleDeleteMenuItem = async (id) => {
//         if (!window.confirm(`Are you sure you want to delete Menu Item ID: ${id}?`)) return;
//         try {
//             const response = await fetch(`${MENU_ITEMS_API_URL}/${id}`, { method: 'DELETE' });
//             if (response.ok) {
//                 fetchMenuItems(); 
//                 alert('Menu Item deleted successfully.');
//             } else {
//                 alert(`Failed to delete menu item. Error: ${response.statusText}`);
//             }
//         } catch (error) {
//             console.error("Error deleting menu item:", error);
//             alert("An unknown network error occurred during deletion.");
//         }
//     };

//     const handleDeleteCombo = async (id) => {
//         if (!window.confirm(`Are you sure you want to delete Combo ID: ${id}?`)) return;
//         try {
//             const response = await fetch(`${COMBOS_API_URL}/${id}`, { method: 'DELETE' });
//             if (response.ok) {
//                 fetchCombos(); 
//                 alert('Combo deleted successfully.');
//             } else {
//                 alert(`Failed to delete combo. Error: ${response.statusText}`);
//             }
//         } catch (error) {
//             console.error("Error deleting combo:", error);
//             alert("An unknown network error occurred during deletion.");
//         }
//     };


//     // -------------------------
//     // 5. RENDER UI
//     // -------------------------
//     return (
//         <div className="p-6 bg-gray-50 min-h-screen">
//             <h1 className="text-3xl font-bold mb-6 text-[#a8815e]">🍴 Menu Management</h1>
            
//             <hr/>
            
//             {/* =========================================================================
//                 SECTION 1: CREATE/EDIT MENU ITEM 
//             ========================================================================= */}
//             <div className="bg-white p-6 rounded-lg shadow-xl mb-8 border-t-4 border-blue-500">
//                 <h2 className="text-xl font-semibold mb-4 text-blue-700">{editingItemId ? 'Edit Menu Item' : 'Create Menu Item'}</h2>
//                 <form onSubmit={handleMenuItemSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
//                     <input type="text" name="name" placeholder="Menu Name" value={menuItemFormData.name} onChange={handleMenuItemChange} className="p-3 border rounded" required />
//                     <input type="text" name="description" placeholder="Description" value={menuItemFormData.description} onChange={handleMenuItemChange} className="p-3 border rounded" required />
//                     <input type="number" name="price" placeholder="Price (e.g., 550)" value={menuItemFormData.price} onChange={handleMenuItemChange} className="p-3 border rounded" required />
//                     <input type="text" name="category" placeholder="Category (e.g., Appetizer, Main)" value={menuItemFormData.category} onChange={handleMenuItemChange} className="p-3 border rounded" required />
//                     <div className="md:col-span-2"></div> 
                    
//                     {/* UI: Menu Item Image Upload */}
//                     <div className="md:col-span-2 border p-3 rounded bg-gray-50">
//                         <label className="block text-gray-700 font-medium mb-2">Image Upload</label>
//                         <div className="flex space-x-2 mb-2">
//                             <input type="file" id="menu-item-file-input" accept="image/*" onChange={(e) => handleFileChange(e, 'menuItem')} style={{ display: 'none' }} />
//                             <button type="button" onClick={() => document.getElementById('menu-item-file-input').click()}
//                                 className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-150">Select Image</button>
//                             <button type="button" onClick={() => handleImageUpload('menuItem')} disabled={!menuItemSelectedFile || menuItemUploadStatus.includes('Uploading')}
//                                 className={`py-2 px-4 rounded-lg text-white transition duration-150 ${menuItemSelectedFile ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}>
//                                 {menuItemUploadStatus.includes('Uploading') ? 'Uploading...' : 'Upload to Cloudinary'}
//                             </button>
//                         </div>
//                         <p className={`text-sm ${menuItemUploadStatus.includes('successful') ? 'text-green-600' : menuItemUploadStatus.includes('failed') ? 'text-red-600' : 'text-blue-600'}`}>
//                             {menuItemUploadStatus || (menuItemFormData.imageUrl ? `Current URL set: ${menuItemFormData.imageUrl.substring(0, 30)}...` : 'Ready to select and upload an image.')}
//                         </p>
//                     </div>
                    
//                     <div className="md:col-span-2 flex space-x-4">
//                         <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">{editingItemId ? 'Update Menu Item' : 'Create Menu Item'}</button>
//                         {editingItemId && (<button type="button" onClick={resetMenuItemForm} className="bg-gray-400 text-white py-3 px-6 rounded-lg">Cancel Edit</button>)}
//                     </div>
//                 </form>
//             </div>
            
//             <hr className="my-8"/>

//             {/* =========================================================================
//                 SECTION 2: CREATE/EDIT NEW COMBO 
//             ========================================================================= */}
//             <div className="bg-white p-6 rounded-lg shadow-md mb-8">
//                 <h2 className="text-xl font-semibold mb-4">{editingComboId ? 'Edit Combo' : 'Create New Combo'}</h2>
//                 <form onSubmit={handleComboSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    
//                     <input type="text" name="name" placeholder="Combo Name" value={comboFormData.name} onChange={handleComboChange} className="p-3 border rounded" required />
//                     <input type="text" name="description" placeholder="Description" value={comboFormData.description} onChange={handleComboChange} className="p-3 border rounded" required />
//                     <input type="number" name="price" placeholder="Price (e.g., 550)" value={comboFormData.price} onChange={handleComboChange} className="p-3 border rounded" required />
//                     <label className="flex items-center space-x-2 p-3"><input type="checkbox" name="isDeal" checked={comboFormData.isDeal} onChange={handleComboChange} className="mr-2"/><span>Mark as Special Deal</span></label>
                    
//                     {/* UI: Combo Image Upload */}
//                     <div className="md:col-span-2 border p-3 rounded bg-gray-50">
//                         <label className="block text-gray-700 font-medium mb-2">Image Upload</label>
//                         <div className="flex space-x-2 mb-2">
//                             <input type="file" id="combo-file-input" accept="image/*" onChange={(e) => handleFileChange(e, 'combo')} style={{ display: 'none' }} />
//                             <button type="button" onClick={() => document.getElementById('combo-file-input').click()}
//                                 className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-150">Select Image</button>
//                             <button type="button" onClick={() => handleImageUpload('combo')} disabled={!comboSelectedFile || comboUploadStatus.includes('Uploading')}
//                                 className={`py-2 px-4 rounded-lg text-white transition duration-150 ${comboSelectedFile ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}>
//                                 {comboUploadStatus.includes('Uploading') ? 'Uploading...' : 'Upload to Cloudinary'}
//                             </button>
//                         </div>
//                         <p className={`text-sm ${comboUploadStatus.includes('successful') ? 'text-green-600' : comboUploadStatus.includes('failed') ? 'text-red-600' : 'text-blue-600'}`}>
//                             {comboUploadStatus || (comboFormData.imageUrl ? `Current URL set: ${comboFormData.imageUrl.substring(0, 30)}...` : 'Ready to select and upload an image.')}
//                         </p>
//                     </div>

//                     <div className="md:col-span-2 flex space-x-4">
//                         <button type="submit" className="bg-[#a8815e] text-white py-3 px-6 rounded-lg hover:bg-[#8d6c4d]">{editingComboId ? 'Update Combo' : 'Create Combo'}</button>
//                         {editingComboId && (<button type="button" onClick={resetComboForm} className="bg-gray-400 text-white py-3 px-6 rounded-lg">Cancel Edit</button>)}
//                     </div>
//                 </form>
//             </div>

//             <hr className="my-8"/>

//             {/* =========================================================================
//                 SECTION 3: EXISTING MENU ITEMS TABLE
//             ========================================================================= */}
//             <h2 className="text-2xl font-semibold mb-4 text-blue-700">Existing Menu Items ({menuItems.length})</h2>
//             {loading ? (<p>Loading Menu Items...</p>) : (
//                 <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-12">
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {menuItems.map((item) => ( 
//                                 <tr key={item.id}>
//                                     <td className="px-6 py-4"><img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded-md" /></td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{item.category}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">₹{item.price}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <button onClick={() => startEditMenuItem(item)} className="text-blue-500 mr-3">Edit</button>
//                                         <button onClick={() => handleDeleteMenuItem(item.id)} className="text-red-600">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}

//             <hr className="my-8"/>

//             {/* =========================================================================
//                 SECTION 4: EXISTING COMBOS TABLE
//             ========================================================================= */}
//             <h2 className="text-2xl font-semibold mb-4 text-[#a8815e]">Existing Combos ({combos.length})</h2>
//             {loading ? (<p>Loading Combos...</p>) : (
//                 <div className="overflow-x-auto bg-white rounded-lg shadow-md">
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {combos.map((combo) => (
//                                 <tr key={combo.id}>
//                                     <td className="px-6 py-4"><img src={combo.imageUrl} alt={combo.name} className="w-12 h-12 object-cover rounded-md" /></td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{combo.name}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">₹{combo.price}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <button onClick={() => startEditCombo(combo)} className="text-[#a8815e] mr-3">Edit</button>
//                                         <button onClick={() => handleDeleteCombo(combo.id)} className="text-red-600">Delete</button>
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             )}
//         </div>
//     );
// };
// export default Combos;




import React, { useState, useEffect } from 'react';

// API Endpoints
const MENU_ITEMS_API_URL = 'http://localhost:8080/api/menu';
const COMBOS_API_URL = 'http://localhost:8080/api/combos';
const CLOUDINARY_UPLOAD_URL = 'http://localhost:8080/api/images/upload';

const Combos = () => {
    // -------------------------
    // 1. MENU ITEM STATE
    // -------------------------
    const [menuItems, setMenuItems] = useState([]);
    const [menuItemFormData, setMenuItemFormData] = useState({
        name: '', description: '', price: '', category: '', imageUrl: '', isDeal: false
    });
    const [editingItemId, setEditingItemId] = useState(null);
    
    // -------------------------
    // 2. COMBO STATE
    // -------------------------
    const [combos, setCombos] = useState([]);
    const [comboFormData, setComboFormData] = useState({
        name: '', description: '', price: '', imageUrl: '', isDeal: false
    });
    const [editingComboId, setEditingComboId] = useState(null);
    
    // -------------------------
    // 3. FILE UPLOAD STATE
    // -------------------------
    const [loading, setLoading] = useState(true);
    const [menuItemSelectedFile, setMenuItemSelectedFile] = useState(null);
    const [menuItemUploadStatus, setMenuItemUploadStatus] = useState('');
    const [comboSelectedFile, setComboSelectedFile] = useState(null);
    const [comboUploadStatus, setComboUploadStatus] = useState('');

    // -------------------------
    // FETCH DATA
    // -------------------------
    useEffect(() => {
        fetchMenuItems();
        fetchCombos();
    }, []);

    const fetchMenuItems = async () => {
        setLoading(true);
        try {
            const response = await fetch(MENU_ITEMS_API_URL);
            const data = await response.json();
            setMenuItems(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching menu items:", error);
            setMenuItems([]);
        }
    };

    const fetchCombos = async () => {
        try {
            const response = await fetch(COMBOS_API_URL);
            const data = await response.json();
            setCombos(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error("Error fetching combos:", error);
            setCombos([]);
        } finally {
            setLoading(false);
        }
    };

    // -------------------------
    // FORM CHANGE HANDLERS
    // -------------------------
    const handleMenuItemChange = (e) => {
        const { name, value, type, checked } = e.target;
        setMenuItemFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleComboChange = (e) => {
        const { name, value, type, checked } = e.target;
        setComboFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    const handleFileChange = (e, target) => {
        const file = e.target.files[0];
        if (target === 'menuItem') {
            setMenuItemSelectedFile(file);
            setMenuItemUploadStatus(file ? `File selected: ${file.name}` : '');
            setMenuItemFormData(prev => ({ ...prev, imageUrl: '' }));
            setComboSelectedFile(null);
            setComboUploadStatus('');
        } else if (target === 'combo') {
            setComboSelectedFile(file);
            setComboUploadStatus(file ? `File selected: ${file.name}` : '');
            setComboFormData(prev => ({ ...prev, imageUrl: '' }));
            setMenuItemSelectedFile(null);
            setMenuItemUploadStatus('');
        }
    };

    const handleImageUpload = async (target) => {
        let selectedFile, setFile, setStatus, setFormData;
        if (target === 'menuItem') {
            selectedFile = menuItemSelectedFile;
            setFile = setMenuItemSelectedFile;
            setStatus = setMenuItemUploadStatus;
            setFormData = setMenuItemFormData;
        } else if (target === 'combo') {
            selectedFile = comboSelectedFile;
            setFile = setComboSelectedFile;
            setStatus = setComboUploadStatus;
            setFormData = setComboFormData;
        } else return;

        if (!selectedFile) {
            setStatus('Please select an image file first.');
            return;
        }

        setStatus('Uploading...');
        const data = new FormData();
        data.append('file', selectedFile);

        try {
            const response = await fetch(CLOUDINARY_UPLOAD_URL, { method: 'POST', body: data });
            if (!response.ok) throw new Error(`Upload failed with status ${response.status}`);
            const result = await response.json();
            setFormData(prev => ({ ...prev, imageUrl: result.url }));
            setStatus('Upload successful! Ready to save.');
            setFile(null);
        } catch (error) {
            console.error("Upload error:", error);
            setStatus(`Upload failed: ${error.message}`);
        }
    };

    // -------------------------
    // SAVE / UPDATE HANDLERS
    // -------------------------
    const handleMenuItemSave = async (e) => {
        e.preventDefault();
        if (!menuItemFormData.imageUrl) { alert('Please upload an image first'); return; }
        const payload = { ...menuItemFormData, price: parseFloat(menuItemFormData.price) };
        const method = editingItemId ? 'PUT' : 'POST';
        const url = editingItemId ? `${MENU_ITEMS_API_URL}/${editingItemId}` : MENU_ITEMS_API_URL;

        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (response.ok) {
                resetMenuItemForm();
                fetchMenuItems();
                alert(`Menu Item ${editingItemId ? 'updated' : 'created'} successfully!`);
            } else {
                const errorText = await response.text();
                alert(`Failed to save menu item: ${errorText}`);
            }
        } catch (error) {
            console.error(error);
            alert("Network error while saving menu item.");
        }
    };

    const handleComboSave = async (e) => {
        e.preventDefault();
        if (!comboFormData.imageUrl) { alert('Please upload an image first'); return; }
        const payload = { ...comboFormData, price: parseFloat(comboFormData.price) };
        const method = editingComboId ? 'PUT' : 'POST';
        const url = editingComboId ? `${COMBOS_API_URL}/${editingComboId}` : COMBOS_API_URL;

        try {
            const response = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });
            if (response.ok) { resetComboForm(); fetchCombos(); } 
            else { alert(`Failed to save combo: ${await response.text()}`); }
        } catch (error) {
            console.error(error);
            alert("Network error while saving combo.");
        }
    };

    // -------------------------
    // RESET FORMS
    // -------------------------
    const resetMenuItemForm = () => {
        setEditingItemId(null);
        setMenuItemFormData({ name: '', description: '', price: '', category: '', imageUrl: '', isDeal: false });
        setMenuItemSelectedFile(null);
        setMenuItemUploadStatus('');
    };

    const resetComboForm = () => {
        setEditingComboId(null);
        setComboFormData({ name: '', description: '', price: '', imageUrl: '', isDeal: false });
        setComboSelectedFile(null);
        setComboUploadStatus('');
    };

    // -------------------------
    // EDIT HANDLERS
    // -------------------------
    const startEditMenuItem = (item) => {
        setEditingItemId(item.id);
        setMenuItemFormData({ ...item, price: String(item.price), category: item.category || '' });
        setEditingComboId(null);
        resetComboForm();
        setMenuItemUploadStatus('');
    };

    const startEditCombo = (combo) => {
        setEditingComboId(combo.id);
        setComboFormData({ ...combo, price: String(combo.price) });
        setEditingItemId(null);
        resetMenuItemForm();
        setComboUploadStatus('');
    };

    // -------------------------
    // DELETE HANDLERS
    // -------------------------
    const handleDeleteMenuItem = async (id) => {
        if (!window.confirm("Are you sure you want to delete this menu item?")) return;
        try {
            const response = await fetch(`${MENU_ITEMS_API_URL}/${id}`, { method: 'DELETE' });
            if (response.ok) fetchMenuItems();
            else alert("Failed to delete menu item.");
        } catch (error) { console.error(error); }
    };

    const handleDeleteCombo = async (id) => {
        if (!window.confirm("Are you sure you want to delete this combo?")) return;
        try {
            const response = await fetch(`${COMBOS_API_URL}/${id}`, { method: 'DELETE' });
            if (response.ok) fetchCombos();
            else alert("Failed to delete combo.");
        } catch (error) { console.error(error); }
    };

    // -------------------------
    // RENDER
    // -------------------------
    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-[#a8815e]">🍴 Menu & Combo Management</h1>

            {/* ===== MENU ITEM FORM ===== */}
            <div className="bg-white p-6 rounded-lg shadow-xl mb-8 border-t-4 border-blue-500">
                <h2 className="text-xl font-semibold mb-4 text-blue-700">{editingItemId ? 'Edit Menu Item' : 'Create Menu Item'}</h2>
                <form onSubmit={handleMenuItemSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Menu Name" value={menuItemFormData.name} onChange={handleMenuItemChange} className="p-3 border rounded" required />
                    <input type="text" name="description" placeholder="Description" value={menuItemFormData.description} onChange={handleMenuItemChange} className="p-3 border rounded" required />
                    <input type="number" name="price" placeholder="Price" value={menuItemFormData.price} onChange={handleMenuItemChange} className="p-3 border rounded" required />
                    <input type="text" name="category" placeholder="Category" value={menuItemFormData.category} onChange={handleMenuItemChange} className="p-3 border rounded" required />
                    <label className="flex items-center space-x-2 p-3">
                        <input type="checkbox" name="isDeal" checked={menuItemFormData.isDeal} onChange={handleMenuItemChange} className="mr-2" />
                        <span>Mark as Special Deal</span>
                    </label>

                    {/* IMAGE UPLOAD */}
                    <div className="md:col-span-2 border p-3 rounded bg-gray-50">
                        <label className="block text-gray-700 font-medium mb-2">Image Upload</label>
                        <div className="flex space-x-2 mb-2">
                            <input type="file" id="menu-item-file-input" accept="image/*" onChange={(e) => handleFileChange(e, 'menuItem')} style={{ display: 'none' }} />
                            <button type="button" onClick={() => document.getElementById('menu-item-file-input').click()} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-150">Select Image</button>
                            <button type="button" onClick={() => handleImageUpload('menuItem')} disabled={!menuItemSelectedFile || menuItemUploadStatus.includes('Uploading')} className={`py-2 px-4 rounded-lg text-white transition duration-150 ${menuItemSelectedFile ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}>
                                {menuItemUploadStatus.includes('Uploading') ? 'Uploading...' : 'Upload'}
                            </button>
                        </div>
                        <p className={`text-sm ${menuItemUploadStatus.includes('successful') ? 'text-green-600' : menuItemUploadStatus.includes('failed') ? 'text-red-600' : 'text-blue-600'}`}>
                            {menuItemUploadStatus || (menuItemFormData.imageUrl ? `Current URL: ${menuItemFormData.imageUrl.substring(0,30)}...` : 'Ready to select and upload an image.')}
                        </p>
                    </div>

                    <div className="md:col-span-2 flex space-x-4">
                        <button type="submit" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700">{editingItemId ? 'Update Menu Item' : 'Create Menu Item'}</button>
                        {editingItemId && <button type="button" onClick={resetMenuItemForm} className="bg-gray-400 text-white py-3 px-6 rounded-lg">Cancel Edit</button>}
                    </div>
                </form>
            </div>

            {/* ===== COMBO FORM ===== */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold mb-4">{editingComboId ? 'Edit Combo' : 'Create New Combo'}</h2>
                <form onSubmit={handleComboSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input type="text" name="name" placeholder="Combo Name" value={comboFormData.name} onChange={handleComboChange} className="p-3 border rounded" required />
                    <input type="text" name="description" placeholder="Description" value={comboFormData.description} onChange={handleComboChange} className="p-3 border rounded" required />
                    <input type="number" name="price" placeholder="Price" value={comboFormData.price} onChange={handleComboChange} className="p-3 border rounded" required />
                    <label className="flex items-center space-x-2 p-3">
                        <input type="checkbox" name="isDeal" checked={comboFormData.isDeal} onChange={handleComboChange} className="mr-2" />
                        <span>Mark as Special Deal</span>
                    </label>

                    {/* IMAGE UPLOAD */}
                    <div className="md:col-span-2 border p-3 rounded bg-gray-50">
                        <label className="block text-gray-700 font-medium mb-2">Image Upload</label>
                        <div className="flex space-x-2 mb-2">
                            <input type="file" id="combo-file-input" accept="image/*" onChange={(e) => handleFileChange(e, 'combo')} style={{ display: 'none' }} />
                            <button type="button" onClick={() => document.getElementById('combo-file-input').click()} className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-150">Select Image</button>
                            <button type="button" onClick={() => handleImageUpload('combo')} disabled={!comboSelectedFile || comboUploadStatus.includes('Uploading')} className={`py-2 px-4 rounded-lg text-white transition duration-150 ${comboSelectedFile ? 'bg-[#a8815e] hover:bg-[#8d6c4d]' : 'bg-gray-400 cursor-not-allowed'}`}>
                                {comboUploadStatus.includes('Uploading') ? 'Uploading...' : 'Upload'}
                            </button>
                        </div>
                        <p className={`text-sm ${comboUploadStatus.includes('successful') ? 'text-green-600' : comboUploadStatus.includes('failed') ? 'text-red-600' : 'text-blue-600'}`}>
                            {comboUploadStatus || (comboFormData.imageUrl ? `Current URL: ${comboFormData.imageUrl.substring(0,30)}...` : 'Ready to select and upload an image.')}
                        </p>
                    </div>

                    <div className="md:col-span-2 flex space-x-4">
                        <button type="submit" className="bg-[#a8815e] text-white py-3 px-6 rounded-lg hover:bg-[#8d6c4d]">{editingComboId ? 'Update Combo' : 'Create Combo'}</button>
                        {editingComboId && <button type="button" onClick={resetComboForm} className="bg-gray-400 text-white py-3 px-6 rounded-lg">Cancel Edit</button>}
                    </div>
                </form>
            </div>

            {/* ===== EXISTING MENU ITEMS ===== */}
            <h2 className="text-2xl font-semibold mb-4 text-blue-700">Existing Menu Items ({menuItems.length})</h2>
            {loading ? <p>Loading Menu Items...</p> : (
                <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-12">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deal</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {menuItems.map(item => (
                                <tr key={item.id}>
                                    <td className="px-6 py-4"><img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded" /></td>
                                    <td className="px-6 py-4">{item.name}</td>
                                    <td className="px-6 py-4">{item.category}</td>
                                    <td className="px-6 py-4">{item.price}</td>
                                    <td className="px-6 py-4">{item.isDeal ? '✅' : '❌'}</td>
                                    <td className="px-6 py-4 space-x-2">
                                        <button onClick={() => startEditMenuItem(item)} className="text-blue-600 hover:text-blue-900">Edit</button>
                                        <button onClick={() => handleDeleteMenuItem(item.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* ===== EXISTING COMBOS ===== */}
            <h2 className="text-2xl font-semibold mb-4 text-[#a8815e]">Existing Combos ({combos.length})</h2>
            {loading ? <p>Loading Combos...</p> : (
                <div className="overflow-x-auto bg-white rounded-lg shadow-md mb-12">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deal</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {combos.map(combo => (
                                <tr key={combo.id}>
                                    <td className="px-6 py-4"><img src={combo.imageUrl} alt={combo.name} className="w-16 h-16 object-cover rounded" /></td>
                                    <td className="px-6 py-4">{combo.name}</td>
                                    <td className="px-6 py-4">{combo.price}</td>
                                    <td className="px-6 py-4">{combo.isDeal ? '✅' : '❌'}</td>
                                    <td className="px-6 py-4 space-x-2">
                                        <button onClick={() => startEditCombo(combo)} className="text-blue-600 hover:text-blue-900">Edit</button>
                                        <button onClick={() => handleDeleteCombo(combo.id)} className="text-red-600 hover:text-red-900">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default Combos;
