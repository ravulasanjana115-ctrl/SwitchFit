import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

function AdminUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    fetch("http://localhost:5000/admin/users", {
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setUsers(Array.isArray(data) ? data : []))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="admin-container">
      <div className="admin-header">
        <h2>User Management</h2>
        <Link to="/admin" className="back-link">⟵ Back to Dashboard</Link>
      </div>
      
      <div className="admin-table-container">
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td style={{ fontWeight: "bold" }}>#{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td style={{ 
                  color: u.role === "admin" ? "#ff416c" : "#aaa", 
                  fontWeight: u.role === "admin" ? "bold" : "normal" 
                }}>
                  {u.role.toUpperCase()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminUsers;
