import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

function AdminDashboard() {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    // Fetch users securely
    const token = localStorage.getItem("accessToken");
    fetch("http://localhost:5000/admin/users", {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(res => {
        if (!res.ok) throw new Error("Not authorized");
        return res.json();
      })
      .then(data => setUserCount(data.length || 0))
      .catch(err => console.error("Error fetching users:", err));

    // Fetch products from JSON server
    fetch("http://localhost:3001/products")
      .then(res => res.json())
      .then(data => setProductCount(data.length || 0))
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>SwitchFit Control Panel</h2>
        <Link to="/" className="back-link">⟵ Back to Store</Link>
      </div>
      
      <div className="admin-stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p>{userCount}</p>
          <Link to="/admin/users">
            <button className="admin-btn">Manage Users</button>
          </Link>
        </div>

        <div className="stat-card">
          <h3>Total Products</h3>
          <p>{productCount}</p>
          <Link to="/admin/products">
            <button className="admin-btn">Manage Products</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
