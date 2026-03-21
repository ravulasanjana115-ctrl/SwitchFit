import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import CartProvider from "./context/CartContext";
import WishlistProvider from "./context/WishlistContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartProvider>
      <WishlistProvider>

    <App />
    </WishlistProvider>
    </CartProvider>
  </BrowserRouter>
);