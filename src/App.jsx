// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Products from "./pages/Products";
// import Cart from "./pages/Cart";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import CategoryProducts from "./pages/CategoryProducts";








// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (

//     <div>
//       <ToastContainer position="top-right" autoclose={3000} />

//       <Navbar />

//       <Routes>

//         <Route path="/" element={<Home />} />

//         <Route path="/signup" element={<Signup />} />

//         <Route path="/login" element={<Login />} />

//         <Route path="/products" element={<Products />} />

//         <Route path="/cart" element={<Cart />} />
//         <Route path="/category/:categoryName" element={<CategoryProducts />} />
//         <Route path="/product/:productId" element={<ProductDetails />} />


//       </Routes>

//     </div>
//   );
// }

// export default App;








// import Navbar from "./components/Navbar";
// import ProtectedRoute from "./components/ProtectedRoute";

// import Home from "./pages/Home";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import Products from "./pages/Products";
// import Cart from "./pages/Cart";
// import CategoryProducts from "./pages/CategoryProducts";
// import ProductDetails from "./pages/ProductDetails";
// import Wishlist from "./pages/Wishlist";

// import "./App.css";

// import { Routes, Route } from "react-router-dom";

// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {

// return ( <div>

// ```
//   <ToastContainer position="top-right" autoClose={3000} />

//   <Navbar />

//   <Routes>

//     <Route path="/" element={<Home />} />

//     <Route path="/signup" element={<Signup />} />

//     <Route path="/login" element={<Login />} />

//     <Route path="/products" element={<Products />} />

//     <Route path="/category/:categoryName" element={<CategoryProducts />} />

//     <Route path="/product/:productId" element={<ProductDetails />} />

//     <Route path="/wishlist" element={<Wishlist />} />

//     {/* Protected Cart Route */}

//     <Route
//       path="/cart"
//       element={
//         <ProtectedRoute>
//           <Cart />
//         </ProtectedRoute>
//       }
//     />

//   </Routes>

// </div>


// );
// }

// export default App;


import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetails from "./pages/ProductDetails";
import Wishlist from "./pages/Wishlist";

import AdminProtectedRoute from "./components/AdminProtectedRoute";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminProducts from "./pages/admin/AdminProducts";

import "./App.css";

import { Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

return (
<div>

  <ToastContainer position="top-right" autoClose={3000} />

  <Navbar />

  <Routes>

    <Route path="/" element={<Home />} />

    <Route path="/signup" element={<Signup />} />

    <Route path="/login" element={<Login />} />


    {/* Protected Products */}

    <Route
      path="/products"
      element={
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      }
    />


    {/* Protected Category Products */}

    <Route
      path="/category/:categoryName"
      element={
        <ProtectedRoute>
          <CategoryProducts />
        </ProtectedRoute>
      }
    />


    {/* Protected Product Details */}

    <Route
      path="/product/:productId"
      element={
        <ProtectedRoute>
          <ProductDetails />
        </ProtectedRoute>
      }
    />


    {/* Protected Wishlist */}

    <Route
      path="/wishlist"
      element={
        <ProtectedRoute>
          <Wishlist />
        </ProtectedRoute>
      }
    />


    {/* Protected Cart */}

    <Route
      path="/cart"
      element={
        <ProtectedRoute>
          <Cart />
        </ProtectedRoute>
      }
    />

    {/* Admin Routes */}
    <Route path="/admin" element={<AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>} />
    <Route path="/admin/users" element={<AdminProtectedRoute><AdminUsers /></AdminProtectedRoute>} />
    <Route path="/admin/products" element={<AdminProtectedRoute><AdminProducts /></AdminProtectedRoute>} />

  </Routes>

</div>
);
}

export default App;