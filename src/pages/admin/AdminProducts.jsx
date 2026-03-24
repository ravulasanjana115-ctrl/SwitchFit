import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", category: "", image: "" });

  const fetchProducts = () => {
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3001/products/${id}`, { method: "DELETE" })
      .then(() => fetchProducts())
      .catch(err => console.error(err));
  };

  const handeAdd = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newProduct,
        price: Number(newProduct.price),
        id: String(Date.now())
      })
    })
      .then(() => {
        setNewProduct({ name: "", price: "", category: "", image: "" });
        fetchProducts();
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>Product Catalog</h2>
        <Link to="/admin" className="back-link">⟵ Back to Dashboard</Link>
      </div>

      <form onSubmit={handeAdd} className="admin-form">
        <input placeholder="Name (e.g. Gym Bag)" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} required />
        <input placeholder="Price (₹)" type="number" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} required />
        <input placeholder="Category (e.g. men)" value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} />
        <input placeholder="Image URL (e.g /images/bag.jpg)" value={newProduct.image} onChange={e => setNewProduct({...newProduct, image: e.target.value})} style={{ flex: "2" }} />
        <button type="submit" className="admin-btn">+ Add Product</button>
      </form>

      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p.id}>
                <td>
                  <img src={p.image || "https://via.placeholder.com/50"} alt="pic" width="60" height="60" />
                </td>
                <td style={{ fontWeight: "bold" }}>{p.name}</td>
                <td style={{ color: "#4caf50", fontWeight: "bold" }}>₹{p.price}</td>
                <td>
                  <button onClick={() => handleDelete(p.id)} className="delete-btn">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminProducts;
