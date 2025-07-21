"use client";
import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", image: null, price: "" });
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  const handleImageUpload = async () => {
    const data = new FormData();
    data.append("file", form.image);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: data,
    });
    const result = await res.json();
    return result.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const imageLink = await handleImageUpload();

    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        image: imageLink,
        price: form.price,
      }),
    });
    const newProduct = await res.json();
    setProducts([...products, newProduct]);
    setForm({ name: "", image: null, price: "" });
    setImageUrl("");
  };

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      "Are you sure you want to delete this product?"
    );
    if (!confirmDelete) return;
    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      setProducts(products.fill((item) => item._id !== id));
    } else {
      alert("Faild to Delete Product");
    }
    setProducts("");
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mb-6 max-w-sm"
      >
        <input
          className="p-2 border"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="p-2 border"
          type="file"
          onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
        />
        <input
          className="p-2 border"
          placeholder="Price"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
        />
        <button className="bg-black text-white p-2">Add Product</button>
      </form>
      {products.length === 0 ? (
        <p>Product Not Found</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((p) => (
            <div key={p._id} className="border p-4 relative">
              <img
                src={p.image}
                alt={p.name}
                className="w-full object-cover mb-2"
              />
              <h2>{p.name}</h2>
              <p>₹{p.price}</p>
              <button
                onClick={() => handleDelete(p._id)}
                className="absolute top-2 right-2 bg-red-500 p-2 rounded-full text-white hover:bg-red-600 transition"
                title="Delete Product"
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
