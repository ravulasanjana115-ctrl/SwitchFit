import React from 'react';
import { Navigate } from 'react-router-dom';

function AdminProtectedRoute({ children }) {
  const userString = localStorage.getItem("user");
  const token = localStorage.getItem("accessToken");

  if (!token || !userString) {
    return <Navigate to="/login" replace />;
  }

  try {
    const user = JSON.parse(userString);
    if (user.role !== 'admin') {
      return <Navigate to="/" replace />;
    }
  } catch (error) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default AdminProtectedRoute;
