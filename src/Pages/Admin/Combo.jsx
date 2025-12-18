


import React, { useEffect, useState } from "react";

const MENU_API = "https://backend-waghera.onrender.com/api/menu";

export default function Combo() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    isDeal: false,
  });

  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // ================= FETCH =================
  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const res = await fetch(MENU_API);
      const data = await res.json();
      setMenuItems(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      setMenuItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  // ================= FORM =================
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      category: "",
      price: "",
      isDeal: false,
    });
    setImageFile(null);
    setEditingId(null);
  };

  // ================= SAVE =================
  const saveMenuItem = async (e) => {
    e.preventDefault();

    if (!editingId && !imageFile) {
      alert("Please select an image");
      return;
    }

    const fd = new FormData();
    fd.append("name", form.name);
    fd.append("description", form.description);
    fd.append("category", form.category);
    fd.append("price", form.price);
    fd.append("isDeal", form.isDeal);

    if (imageFile) {
      fd.append("image", imageFile); // ✅ MUST MATCH BACKEND
    }

    const url = editingId ? `${MENU_API}/${editingId}` : MENU_API;
    const method = editingId ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method,
        body: fd,
      });

      if (!res.ok) throw new Error();

      alert(editingId ? "Menu updated ✅" : "Menu created ✅");
      resetForm();
      fetchMenuItems();
    } catch (err) {
      console.error(err);
      alert("Save failed ❌");
    }
  };

  // ================= ACTIONS =================
  const editItem = (item) => {
    setEditingId(item._id);
    setForm({
      name: item.name,
      description: item.description,
      category: item.category,
      price: item.price,
      isDeal: item.isDeal || false,
    });
    setImageFile(null);
  };

  const deleteItem = async (id) => {
    if (!window.confirm("Delete this Menu?")) return;

    try {
      const res = await fetch(`${MENU_API}/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error();

      fetchMenuItems();
    } catch {
      alert("Delete failed ❌");
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-gray-50 min-h-screen">
      <h1 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Menu Management</h1>

      {/* ================= FORM ================= */}
      <form
        onSubmit={saveMenuItem}
        className="bg-white p-3 sm:p-4 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Menu Name"
          className="border p-2 rounded text-sm sm:text-base"
          required
        />

        <input
          name="category"
          value={form.category}
          onChange={handleChange}
          placeholder="Category"
          className="border p-2 rounded text-sm sm:text-base"
          required
        />

        <input
          name="price"
          type="number"
          value={form.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 rounded text-sm sm:text-base"
          required
        />

        <input
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded text-sm sm:text-base"
        />

        <label className="flex items-center gap-2 text-sm sm:text-base">
          <input
            type="checkbox"
            name="isDeal"
            checked={form.isDeal}
            onChange={handleChange}
            className="h-4 w-4"
          />
          Special Deal
        </label>

        <div className="md:col-span-2">
          <input type="file" onChange={handleFileChange} className="text-xs sm:text-sm" />
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            {imageFile ? imageFile.name : "Select image"}
          </p>
        </div>

        <div className="md:col-span-2 flex gap-2">
          <button className="px-3 py-1.5 sm:px-4 sm:py-2 bg-green-600 text-white rounded text-sm sm:text-base">
            {editingId ? "Update Combo" : "Create Combo"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-400 text-white rounded text-sm sm:text-base"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* ================= TABLE ================= */}
      <h2 className="text-lg sm:text-xl font-semibold mb-2">Menu Items</h2>

      {loading ? (
        <p className="text-sm sm:text-base">Loading...</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-2 text-xs sm:text-sm">Image</th>
                <th className="p-2 text-xs sm:text-sm">Name</th>
                <th className="p-2 text-xs sm:text-sm">Category</th>
                <th className="p-2 text-xs sm:text-sm">Price</th>
                <th className="p-2 text-xs sm:text-sm">Deal</th>
                <th className="p-2 text-xs sm:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody>
              {menuItems.map((i) => (
                <tr key={i._id} className="border-t">
                  <td className="p-2">
                    <img
                      src={i.imageUrl}
                      alt={i.name}
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded object-cover"
                    />
                  </td>
                  <td className="p-2 text-xs sm:text-sm">{i.name}</td>
                  <td className="p-2 text-xs sm:text-sm">{i.category}</td>
                  <td className="p-2 text-xs sm:text-sm">₹{i.price}</td>
                  <td className="p-2 text-xs sm:text-sm">{i.isDeal ? "Yes" : "No"}</td>
                  <td className="p-2 space-x-1 sm:space-x-2">
                    {/* <button
                      onClick={() => editItem(i)}
                      className="text-blue-600 text-xs sm:text-sm"
                    >
                      Edit
                    </button> */}
                    <button
                      onClick={() => deleteItem(i._id)}
                      className="text-red-600 text-xs sm:text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
