// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {

//   return (

//     <div className="navbar">

//       <h2 className="logo">SwitchFit</h2>

//       <div className="nav-links">

//         <Link to="/">
//           <button className="nav-button">Home</button>
//         </Link>

//         <Link to="/products">
//           <button className="nav-button">Products</button>
//         </Link>

//         <Link to="/cart">
//           <button className="nav-button">Cart</button>
//         </Link>

//         <Link to="/login">
//           <button className="nav-button">Login</button>
//         </Link>

//         <Link to="/signup">
//           <button className="signup-button">Signup</button>
//         </Link>

//       </div>

//     </div>

//   );

// }

// export default Navbar;
// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./Navbar.css";

// function Navbar() {

//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("user"));
//     setUser(loggedUser);
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//   };

//   return (

//     <div className="navbar">

//       <h2 className="logo">SwitchFit</h2>

//       <div className="nav-links">

//         <Link to="/">
//           <button className="nav-button">Home</button>
//         </Link>

//         <Link to="/products">
//           <button className="nav-button">Products</button>
//         </Link>

//         <Link to="/wishlist">
//           <button className="nav-button">Wishlist</button>
//         </Link>

//         <Link to="/cart">
//           <button className="nav-button">Cart</button>
//         </Link>

//         {user ? (

//           <>
//             <button className="nav-button">
//               {user.name || "Profile"}
//             </button>

//             <button className="logout-button" onClick={handleLogout}>
//               Logout
//             </button>
//           </>

//         ) : (

//           <>
//             <Link to="/login">
//               <button className="nav-button">Login</button>
//             </Link>

//             <Link to="/signup">
//               <button className="signup-button">Signup</button>
//             </Link>
//           </>

//         )}

//       </div>

//     </div>

//   );
// }

// export default Navbar;

// import { Link, useNavigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./Navbar.css";

// function Navbar() {

//   const navigate = useNavigate();
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const checkUser = () => {
//       const loggedUser = JSON.parse(localStorage.getItem("user"));
//       setUser(loggedUser);
//     };

//     checkUser();

//     window.addEventListener("storage", checkUser);

//     return () => {
//       window.removeEventListener("storage", checkUser);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <div className="navbar">

//       <h2 className="logo">SwitchFit</h2>

//       <div className="nav-links">

//         <Link to="/">
//           <button className="nav-button">Home</button>
//         </Link>

//         <Link to="/products">
//           <button className="nav-button">Products</button>
//         </Link>

//         <Link to="/wishlist">
//           <button className="nav-button">Wishlist</button>
//         </Link>

//         <Link to="/cart">
//           <button className="nav-button">Cart</button>
//         </Link>

//         {user ? (
//           <>
//             <span className="nav-button">
//               Welcome {user.name}
//             </span>

//             <button className="logout-button" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">
//               <button className="nav-button">Login</button>
//             </Link>

//             <Link to="/signup">
//               <button className="signup-button">Signup</button>
//             </Link>
//           </>
//         )}

//       </div>

//     </div>
//   );
// }

// // export default Navbar;


// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import "./Navbar.css";

// function Navbar() {

//   const navigate = useNavigate();
//   const location = useLocation();   // 👈 important

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const loggedUser = JSON.parse(localStorage.getItem("user"));
//     setUser(loggedUser);
//   }, [location]);   // 👈 runs whenever page changes

//   const handleLogout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     navigate("/login");
//   };

//   return (
//     <div className="navbar">

//       <h2 className="logo">SwitchFit</h2>

//       <div className="nav-links">

//         <Link to="/">
//           <button className="nav-button">Home</button>
//         </Link>

//         <Link to="/products">
//           <button className="nav-button">Products</button>
//         </Link>

//         <Link to="/wishlist">
//           <button className="nav-button">Wishlist</button>
//         </Link>

//         <Link to="/cart">
//           <button className="nav-button">Cart</button>
//         </Link>

//         {user ? (
//           <>
//             <span className="nav-button">
//               Welcome {user.name}
//             </span>

//             <button className="logout-button" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">
//               <button className="nav-button">Login</button>
//             </Link>

//             <Link to="/signup">
//               <button className="signup-button">Signup</button>
//             </Link>
//           </>
//         )}

//       </div>

//     </div>
//   );
// }

// // export default Navbar;
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import "./Navbar.css";

// function Navbar() {

// const navigate = useNavigate();
// const location = useLocation();

// const [user, setUser] = useState(null);
// const [showProfile, setShowProfile] = useState(false);

// useEffect(() => {
// const loggedUser = JSON.parse(localStorage.getItem("user"));
// setUser(loggedUser);
// }, [location]);

// const toggleProfile = () => {
// setShowProfile(!showProfile);
// };

// const handleLogout = () => {
// localStorage.removeItem("user");
// setUser(null);
// navigate("/login");
// };

// return (


// <div className="navbar">

//   {/* LEFT SIDE */}
//   <div className="logo-section">

//     <h2 className="logo">SwitchFit</h2>

//     {user && (
//       <FaUserCircle
//         className="user-icon"
//         onClick={toggleProfile}
//       />
//     )}

//   </div>

//   {/* RIGHT SIDE NAVIGATION */}
//   <div className="nav-links">

//     <Link to="/">
//       <button className="nav-button">Home</button>
//     </Link>

//     <Link to="/products">
//       <button className="nav-button">Products</button>
//     </Link>

//     <Link to="/wishlist">
//       <button className="nav-button">Wishlist</button>
//     </Link>

//     <Link to="/cart">
//       <button className="nav-button">Cart</button>
//     </Link>

//     {!user && (
//       <>
//         <Link to="/login">
//           <button className="nav-button">Login</button>
//         </Link>

//         <Link to="/signup">
//           <button className="signup-button">Signup</button>
//         </Link>
//       </>
//     )}

//   </div>

//   {/* PROFILE DROPDOWN CARD */}
//   {showProfile && user && (

//     <div className="profile-card">

//       <h4>{user.name}</h4>
//       <p>{user.email}</p>

//       <hr/>

//       <button>Your History</button>
//       <button>Coupons</button>
//       <button>Points</button>

//       <button className="logout-button" onClick={handleLogout}>
//         Logout
//       </button>

//     </div>

//   )}

// </div>


// );

// }

// export default Navbar;




// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { useContext } from "react";
// import { CartContext } from "../context/CartContext";
// import "./Navbar.css";

// function Navbar(){
// const { cart } = useContext(CartContext); 

// const navigate = useNavigate();
// const location = useLocation();

// const [user,setUser] = useState(null);
// const [showProfile,setShowProfile] = useState(false);

// useEffect(()=>{
// const loggedUser = JSON.parse(localStorage.getItem("user"));
// setUser(loggedUser);
// },[location]);

// const toggleProfile = ()=>{
// setShowProfile(!showProfile);
// };

// const handleLogout = ()=>{
// localStorage.removeItem("user");
// setUser(null);
// navigate("/login");
// };

// return(


// <div className="navbar">

//   <div className="left-section">

//     {user && (
//       <div className="profile-wrapper">

//         <FaUserCircle
//           className="user-icon"
//           onClick={toggleProfile}
//         />

//         {showProfile && (

//           <div className="profile-dropdown">

//             <h4>{user.name}</h4>
//             <p>{user.email}</p>

//             <hr/>

//             <button>Your History</button>
//             <button>Coupons</button>
//             <button>Points</button>

//             <button
//               className="logout-button"
//               onClick={handleLogout}
//             >
//               Logout
//             </button>

//           </div>

//         )}

//       </div>
//     )}

//     <h2 className="logo">SwitchFit</h2>

//   </div>

//   <div className="nav-links">

//     <Link to="/">
//       <button className="nav-button">Home</button>
//     </Link>

//     <Link to="/products">
//       <button className="nav-button">Products</button>
//     </Link>

//     <Link to="/wishlist">
//       <button className="nav-button">Wishlist</button>
//     </Link>

//     <Link to="/cart">
//       <button className="nav-button">Cart</button>
//     </Link>

//     {!user && (
//       <>
//         <Link to="/login">
//           <button className="nav-button">Login</button>
//         </Link>

//         <Link to="/signup">
//           <button className="signup-button">Signup</button>
//         </Link>
//       </>
//     )}

//   </div>

// </div>


// );

// }

// export default Navbar;



// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { useState, useEffect, useContext } from "react";
// import { FaUserCircle } from "react-icons/fa";
// import { CartContext } from "../context/CartContext";
// import "./Navbar.css";

// function Navbar() {

//     const { cart } = useContext(CartContext);

//     const navigate = useNavigate();
//     const location = useLocation();

//     const [user, setUser] = useState(null);
//     const [showProfile, setShowProfile] = useState(false);
//     ;
//     useEffect(() => {

//         const token = localStorage.getItem("accessToken");
//         const loggedUser = JSON.parse(localStorage.getItem("user"));

//         if (token && loggedUser) {
//             setUser(loggedUser);
//         } else {
//             setUser(null);
//         }

//     }, [location]);
//     const toggleProfile = () => {
//         setShowProfile(!showProfile);
//     };

//     const handleLogout = () => {

       
//         localStorage.removeItem("user");
//         localStorage.removeItem("accessToken");
//         localStorage.removeItem("refreshToken");

//         setUser(null);
//         setShowProfile(false);

       
//         window.location.href = "/login";

//     };

//     return (

//         <div className="navbar">

            

//             <div className="left-section">
//                 <h2 className="logo">SwitchFit</h2>
//             </div>


           

//             <div className="nav-links">

//                 <Link to="/">
//                     <button className="nav-button">Home</button>
//                 </Link>

//                 <Link to="/products">
//                     <button className="nav-button">Products</button>
//                 </Link>

//                 <Link to="/wishlist">
//                     <button className="nav-button">Wishlist</button>
//                 </Link>

//                 <Link to="/cart">
//                     <button className="nav-button">
//                         Cart {user ? `(${cart.length})` : ""}
//                     </button>
//                 </Link>


                

//                 {!user && (

//                     <>
//                         <Link to="/login">
//                             <button className="nav-button">Login</button>
//                         </Link>

//                         <Link to="/signup">
//                             <button className="signup-button">Signup</button>
//                         </Link>
//                     </>

//                 )}


                

//                 {user && (

//                     <div className="profile-wrapper">

//                         <FaUserCircle
//                             className="user-icon"
//                             onClick={toggleProfile}
//                         />

//                         {showProfile && (

//                             <div className="profile-dropdown">

//                                 <h4>{user.name}</h4>
//                                 <p>{user.email}</p>

//                                 <hr />

//                                 <button onClick={() => navigate("/history")}>
//                                     Your History
//                                 </button>

//                                 <button>Coupons</button>

//                                 <button>Points</button>

//                                 <button
//                                     className="logout-button"
//                                     onClick={handleLogout}
//                                 >
//                                     Logout
//                                 </button>

//                             </div>

//                         )}

//                     </div>

//                 )}

//             </div>

//         </div>

//     );

// }

// export default Navbar;






import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FaUserCircle, FaBars } from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { toast } from "react-toastify";
import "./Navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [user, setUser] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const loggedUser = JSON.parse(localStorage.getItem("user"));

    if (token && loggedUser) {
      setUser(loggedUser);
    } else {
      setUser(null);
    }
  }, [location]);

  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    setShowProfile(false);
    navigate("/login");
  };

  const goToProducts = () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      toast.error("Please log in to view products");
      navigate("/login");
      return;
    }

    navigate("/products");
    setMenuOpen(false); // ✅ close menu
  };

  // ✅ Close menu helper
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="navbar">

      {/* LOGO */}
      <div className="left-section">
        <h2 className="logo">SwitchFit</h2>
      </div>

      {/* 🍔 HAMBURGER */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : <FaBars />}
      </div>

      {/* NAV LINKS */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>

        <Link to="/" onClick={closeMenu}>
          <button className="nav-button">Home</button>
        </Link>

        <button className="nav-button" onClick={goToProducts}>
          Products
        </button>

        <Link to="/wishlist" onClick={closeMenu}>
          <button className="nav-button">Wishlist</button>
        </Link>

        <Link to="/cart" onClick={closeMenu}>
          <button className="nav-button">
            Cart {user ? `(${cart.length})` : ""}
          </button>
        </Link>

        {!user && (
          <>
            <Link to="/login" onClick={closeMenu}>
              <button className="nav-button">Login</button>
            </Link>

            <Link to="/signup" onClick={closeMenu}>
              <button className="signup-button">Signup</button>
            </Link>
          </>
        )}

        {user && (
          <div className="profile-wrapper">
            <FaUserCircle
              className="user-icon"
              onClick={toggleProfile}
            />

            {showProfile && (
              <div className="profile-dropdown">
                <h4>{user.name}</h4>
                <p>{user.email}</p>

                <hr />

                <button onClick={() => { navigate("/history"); closeMenu(); }}>
                  Your History
                </button>

                <button>Coupons</button>
                <button>Points</button>

                <button
                  className="logout-button"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}

export default Navbar;