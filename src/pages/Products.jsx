// import ProductCard from "../components/ProductCard";

// import tshirt from "../assets/tshirts.jpg";
// import shorts from "../assets/shorts1.jpg";
// import leggings from "../assets/leggings1.jpg";
// import sportsbra from "../assets/sportsbra.jpg";
// import tracks from "../assets/tracks.jpg";

// function Products() {

// const products = [

// {
// id:1,
// name:"Gym T-Shirt",
// price:799,
// image:tshirt
// },

// {
// id:2,
// name:"Training Shorts",
// price:699,
// image:shorts
// },

// {
// id:3,
// name:"Women's Leggings",
// price:999,
// image:leggings
// },

// {
// id:4,
// name:"Sports Bra",
// price:599,
// image:sportsbra
// },

// {
// id:5,
// name:"Track Pants",
// price:899,
// image:tracks
// }

// ]

// return(

// <div className="products">

// <h2>SwitchFit Products</h2>

// <div className="product-grid">

// {products.map((item)=>(
// <ProductCard key={item.id} product={item}/>
// ))}

// </div>

// </div>

// )

// }

// export default Products
// import { useState } from "react";

// function Products(){

// const [filter,setFilter] = useState("all");

// const products = [

// { id:1, name:"Women Leggings", price:899, gender:"women" },
// { id:2, name:"Sports Bra", price:799, gender:"women" },
// { id:3, name:"Women Shorts", price:699, gender:"women" },

// { id:4, name:"Men Gym T-shirt", price:599, gender:"men" },
// { id:5, name:"Men Training Shorts", price:749, gender:"men" },
// { id:6, name:"Men Track Pants", price:1099, gender:"men" }

// ];

// const filteredProducts =
// filter === "all"
// ? products
// : products.filter(product => product.gender === filter);

// return(

// <div className="products-page">

// <h2>Products</h2>

// <div className="filter-buttons">

// <button onClick={()=>setFilter("all")}>
// All
// </button>

// <button onClick={()=>setFilter("women")}>
// Women
// </button>

// <button onClick={()=>setFilter("men")}>
// Men
// </button>

// </div>

// <div className="products-grid">

// {filteredProducts.map(product => (

// <div className="product-card" key={product.id}>

// <img
// src="https://via.placeholder.com/200"
// alt="product"
// />

// <h3>{product.name}</h3>

// <p>₹{product.price}</p>

// <button>Add to Cart</button>

// </div>

// ))}

// </div>

// </div>

// );

// }

// // export default Products;
// import { useState } from "react";

// function Products(){

// const [filter,setFilter] = useState("all");

// const products = [

// { id:1, name:"Women Leggings", price:899, category:"women" },
// { id:2, name:"Sports Bra", price:799, category:"women" },
// { id:3, name:"Women Gym Shorts", price:699, category:"women" },

// { id:4, name:"Men Gym T-Shirt", price:599, category:"men" },
// { id:5, name:"Men Training Shorts", price:749, category:"men" },
// { id:6, name:"Men Track Pants", price:1099, category:"men" },

// { id:7, name:"Unisex Hoodie", price:1299, category:"unisex" },
// { id:8, name:"Unisex Oversized T-Shirt", price:999, category:"unisex" },

// { id:9, name:"Gym Gloves", price:399, category:"accessories" },
// { id:10, name:"Gym Water Bottle", price:299, category:"accessories" },
// { id:11, name:"Workout Cap", price:349, category:"accessories" }

// ];

// const filteredProducts =
// filter === "all"
// ? products
// : products.filter(product => product.category === filter);

// return(

// <div className="products-page">

// <h2>Products</h2>

// <div className="filter-buttons">

// <button onClick={()=>setFilter("all")}>All</button>

// <button onClick={()=>setFilter("women")}>Women</button>

// <button onClick={()=>setFilter("men")}>Men</button>

// <button onClick={()=>setFilter("unisex")}>Unisex</button>

// <button onClick={()=>setFilter("accessories")}>Accessories</button>

// </div>

// <div className="products-grid">

// {filteredProducts.map(product => (

// <div className="product-card" key={product.id}>

// <img
// src="https://via.placeholder.com/200"
// alt="product"
// />

// <h3>{product.name}</h3>

// <p>₹{product.price}</p>

// <button>Add to Cart</button>

// </div>

// ))}

// </div>

// </div>

// );

// }

// export default Products;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Products(){

// const navigate = useNavigate();

// const [filter,setFilter] = useState("all");
// const [wishlist,setWishlist] = useState([]);

// const products = [

// { id:1,name:"Women Leggings",price:899,category:"women",rating:4 },
// { id:2,name:"Sports Bra",price:799,category:"women",rating:5 },
// { id:3,name:"Women Shorts",price:699,category:"women",rating:3 },

// { id:4,name:"Men Gym T-shirt",price:599,category:"men",rating:4 },
// { id:5,name:"Men Training Shorts",price:749,category:"men",rating:5 },
// { id:6,name:"Men Track Pants",price:1099,category:"men",rating:4 },

// { id:7,name:"Unisex Hoodie",price:1299,category:"unisex",rating:5 },

// { id:8,name:"Gym Gloves",price:399,category:"accessories",rating:4 },
// { id:9,name:"Gym Water Bottle",price:299,category:"accessories",rating:4 }

// ];

// const filteredProducts =
// filter === "all"
// ? products
// : products.filter(product => product.category === filter);

// const toggleWishlist = (id)=>{

// if(wishlist.includes(id)){
// setWishlist(wishlist.filter(item=>item!==id));
// }else{
// setWishlist([...wishlist,id]);
// }

// };

// const addToCart = (product)=>{
// console.log("Added to cart:",product);
// };

// return(

// <div className="products-page">

// <h2>Products</h2>

// <div className="filter-buttons">

// <button onClick={()=>setFilter("all")}>All</button>
// <button onClick={()=>setFilter("women")}>Women</button>
// <button onClick={()=>setFilter("men")}>Men</button>
// <button onClick={()=>setFilter("unisex")}>Unisex</button>
// <button onClick={()=>setFilter("accessories")}>Accessories</button>

// </div>

// <div className="products-grid">

// {filteredProducts.map(product => (

// <div className="product-card" key={product.id}>

// <div
// className="wishlist"
// onClick={()=>toggleWishlist(product.id)}
// style={{color:wishlist.includes(product.id) ? "red":"white"}}
// >
// ♥
// </div>

// <img
// src="https://via.placeholder.com/200"
// alt="product"
// onClick={()=>navigate(`/product/${product.id}`)}
// />

// <h3>{product.name}</h3>

// <p>₹{product.price}</p>

// <div className="rating">

// {"⭐".repeat(product.rating)}

// </div>

// <button onClick={()=>addToCart(product)}>
// Add to Cart
// </button>

// </div>

// ))}

// </div>

// </div>

// );

// }

// export default Products;
// import { useState } from "react";

// import { FaHeart } from "react-icons/fa";
// import { FaShoppingCart } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";
// import { FaBox } from "react-icons/fa";

// function Products(){

// const [wishlist,setWishlist] = useState([]);

// const products = [

// { id:1,name:"Women Leggings",price:899,rating:4 },
// { id:2,name:"Sports Bra",price:799,rating:5 },
// { id:3,name:"Gym Shorts",price:699,rating:3 },
// { id:4,name:"Men Gym T-Shirt",price:599,rating:4 }

// ];

// const toggleWishlist = (id)=>{

// if(wishlist.includes(id)){
// setWishlist(wishlist.filter(item=>item!==id));
// }else{
// setWishlist([...wishlist,id]);
// }

// };

// return(

// <div className="products-grid">

// {products.map(product => (

// <div className="product-card" key={product.id}>

// <div
// className="wishlist"
// onClick={()=>toggleWishlist(product.id)}
// style={{color:wishlist.includes(product.id) ? "red":"white"}}
// >
// <FaHeart />
// </div>

// <div className="product-placeholder">
// <FaBox size={60} />
// </div>

// <h3>{product.name}</h3>

// <p>₹{product.price}</p>

// <div className="rating">

// {[...Array(product.rating)].map((_,i)=>(
// <FaStar key={i} color="gold" />
// ))}

// </div>

// <button>
// <FaShoppingCart /> Add to Cart
// </button>

// </div>

// ))}

// </div>

// );

// }

// // export default Products;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// import { FaHeart, FaShoppingCart, FaStar, FaBox } from "react-icons/fa";

// function Products(){

// const navigate = useNavigate();

// const [wishlist,setWishlist] = useState([]);
// const [filter,setFilter] = useState("all");

// const products = [

// { id:1,name:"Women Leggings",price:899,rating:4,category:"women" },
// { id:2,name:"Sports Bra",price:799,rating:5,category:"women" },
// { id:3,name:"Gym Shorts",price:699,rating:3,category:"unisex" },
// { id:4,name:"Men Gym T-Shirt",price:599,rating:4,category:"men" },
// { id:5,name:"Gym Gloves",price:399,rating:4,category:"accessories" }

// ];


// // filter products
// const filteredProducts =
// filter === "all"
// ? products
// : products.filter(p => p.category === filter);


// // ❤️ wishlist
// const toggleWishlist = (product)=>{

// let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// wishlistItems.push(product);

// localStorage.setItem("wishlist",JSON.stringify(wishlistItems));

// setWishlist([...wishlist,product.id]);

// toast.success("Added to Wishlist Faheart");

// setTimeout(()=>{
// navigate("/cart");
// },1000);

// };


// // 🛒 cart
// const addToCart = (product)=>{

// let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// cartItems.push(product);

// localStorage.setItem("cart",JSON.stringify(cartItems));

// toast.success("Added to Cart 🛒");

// };


// return(

// <div>

// <h2 style={{textAlign:"center"}}>Products</h2>


// {/* Filter Buttons */}

// <div className="filter-buttons">

// <button onClick={()=>setFilter("all")}>All</button>

// <button onClick={()=>setFilter("men")}>Men</button>

// <button onClick={()=>setFilter("women")}>Women</button>

// <button onClick={()=>setFilter("unisex")}>Unisex</button>

// <button onClick={()=>setFilter("accessories")}>Accessories</button>

// </div>


// <div className="products-grid">

// {filteredProducts.map(product => (

// <div className="product-card" key={product.id}>

// <div
// className="wishlist"
// onClick={()=>toggleWishlist(product)}
// style={{color:wishlist.includes(product.id) ? "red":"white"}}
// >
// <FaHeart />
// </div>

// <img 
// className="product-image"
// src={product.image || ""}
// alt={product.name}
// />

// <h3>{product.name}</h3>

// <p>₹{product.price}</p>

// <div className="rating">
// {[...Array(product.rating)].map((_,i)=>(
// <FaStar key={i} color="gold" />
// ))}
// </div>

// <button onClick={()=>addToCart(product)}>
// <FaShoppingCart /> Add to Cart
// </button>

// </div>

// ))}

// </div>

// </div>

// );

// }

// export default Products;








// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// import { FaHeart, FaShoppingCart, FaStar, FaBox } from "react-icons/fa";

// function Products() {

//     const navigate = useNavigate();

//     const [wishlist, setWishlist] = useState([]);
//     const [filter, setFilter] = useState("all");

//     const products = [

//         { id: 1, name: "Women Leggings", price: 899, rating: 4, category: "women" },
//         { id: 2, name: "Sports Bra", price: 799, rating: 5, category: "women" },
//         { id: 3, name: "Gym Shorts", price: 699, rating: 3, category: "unisex" },
//         { id: 4, name: "Men Gym T-Shirt", price: 599, rating: 4, category: "men" },
//         { id: 5, name: "Gym Gloves", price: 399, rating: 4, category: "accessories" }

//     ];


//     // filter products
//     const filteredProducts =
//         filter === "all"
//             ? products
//             : products.filter(p => p.category === filter);


//     // ❤️ wishlist
//     const toggleWishlist = (product) => {

//         let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

//         wishlistItems.push(product);

//         localStorage.setItem("wishlist", JSON.stringify(wishlistItems));

//         setWishlist([...wishlist, product.id]);

//         // toast.success("Added to Wishlist Faheart");
//         toast.success("Added to Wishlist", {
//             icon: <FaHeart color="red" />
//         });

//         setTimeout(() => {
//             navigate("/cart");
//         }, 1000);

//     };


//     // 🛒 cart
//     const addToCart = (product) => {

//         let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

//         cartItems.push(product);

//         localStorage.setItem("cart", JSON.stringify(cartItems));

//         toast.success("Added to Cart 🛒");

//     };


//     return (

//         <div>

//             <h2 style={{ textAlign: "center" }}>Products</h2>


//             {/* Filter Buttons */}

//             <div className="filter-buttons">

//                 <button onClick={() => setFilter("all")}>All</button>

//                 <button onClick={() => setFilter("men")}>Men</button>

//                 <button onClick={() => setFilter("women")}>Women</button>

//                 <button onClick={() => setFilter("unisex")}>Unisex</button>

//                 <button onClick={() => setFilter("accessories")}>Accessories</button>

//             </div>


//             <div className="products-grid">

//                 {filteredProducts.map(product => (

//                     <div className="product-card" key={product.id}>

//                         <div
//                             className="wishlist"
//                             onClick={() => toggleWishlist(product)}
//                             style={{ color: wishlist.includes(product.id) ? "red" : "white" }}
//                         >
//                             <FaHeart />
//                         </div>

//                         <img
//                             className="product-image"
//                             src={product.image || ""}
//                             alt={product.name}
//                         />

//                         <h3>{product.name}</h3>

//                         <p>₹{product.price}</p>

//                         <div className="rating">
//                             {[...Array(product.rating)].map((_, i) => (
//                                 <FaStar key={i} color="gold" />
//                             ))}
//                         </div>

//                         <button onClick={() => addToCart(product)}>
//                             <FaShoppingCart /> Add to Cart
//                         </button>

//                     </div>

//                 ))}

//             </div>

//         </div>

//     );

// }

// export default Products;
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

// function Products() {

// const navigate = useNavigate();

// const [wishlist, setWishlist] = useState([]);
// const [cart, setCart] = useState([]);
// const [filter, setFilter] = useState("all");

// const products = [

// { id: 1, name: "Women Leggings", price: 899, rating: 4, category: "women" },
// { id: 2, name: "Sports Bra", price: 799, rating: 5, category: "women" },
// { id: 3, name: "Gym Shorts", price: 699, rating: 3, category: "unisex" },
// { id: 4, name: "Men Gym T-Shirt", price: 599, rating: 4, category: "men" },
// { id: 5, name: "Gym Gloves", price: 399, rating: 4, category: "accessories" }

// ];


// // Load wishlist & cart from localStorage
// useEffect(() => {

// const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
// const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

// setWishlist(storedWishlist);
// setCart(storedCart);

// }, []);


// // Filter products
// const filteredProducts =
// filter === "all"
// ? products
// : products.filter(p => p.category === filter);


// // ❤️ Toggle Wishlist
// const toggleWishlist = (product) => {

// let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// // check if product already exists
// const exists = wishlistItems.some(item => item.id === product.id);

// if (exists) {

// wishlistItems = wishlistItems.filter(item => item.id !== product.id);

// toast.error("Removed from Wishlist");

// } else {

// // add only if it doesn't exist
// wishlistItems = [...wishlistItems, product];

// toast.success("Added to Wishlist", {
// icon: <FaHeart color="red" />
// });

// }

// localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
// setWishlist(wishlistItems);

// };

// // 🛒 Add to Cart
// const addToCart = (product) => {

// const existingProduct = cart.find(item => item.id === product.id);

// let updatedCart;

// if (existingProduct) {

// updatedCart = cart.map(item =>
// item.id === product.id
// ? { ...item, quantity: (item.quantity || 1) + 1 }
// : item
// );

// toast.info("Product quantity updated in cart");

// } else {

// updatedCart = [...cart, { ...product, quantity: 1 }];

// toast.success("Product added to cart");

// }

// setCart(updatedCart);
// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };

// return (

// <div>

// <h2 style={{ textAlign: "center" }}>Products</h2>


// {/* Filter Buttons */}

// <div className="filter-buttons">

// <button onClick={() => setFilter("all")}>All</button>

// <button onClick={() => setFilter("men")}>Men</button>

// <button onClick={() => setFilter("women")}>Women</button>

// <button onClick={() => setFilter("unisex")}>Unisex</button>

// <button onClick={() => setFilter("accessories")}>Accessories</button>

// </div>


// <div className="products-grid">

// {filteredProducts.map(product => {

// const isWishlisted = wishlist.some(item => item.id === product.id);
// const isInCart = cart.some(item => item.id === product.id);

// return (

// <div className="product-card" key={product.id}>


// {/* Wishlist Heart */}

// <div
// className="wishlist"
// onClick={() => toggleWishlist(product)}
// style={{ color: isWishlisted ? "red" : "white", cursor: "pointer" }}
// >
// <FaHeart />
// </div>


// {/* Product Image */}

// <img
// className="product-image"
// src={product.image || ""}
// alt={product.name}
// />


// <h3>{product.name}</h3>

// <p>₹{product.price}</p>


// {/* Rating */}

// <div className="rating">
// {[...Array(product.rating)].map((_, i) => (
// <FaStar key={i} color="gold" />
// ))}
// </div>


// {/* Cart Button */}

// {isInCart ? (

// <button onClick={() => navigate("/cart")}>
// <FaShoppingCart /> Go to Cart
// </button>

// ) : (

// <button onClick={() => addToCart(product)}>
// <FaShoppingCart /> Add to Cart
// </button>

// )}

// </div>

// );

// })}

// </div>

// </div>

// );

// }

// // export default Products;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

// function Products() {

//     const navigate = useNavigate();

//     const [products, setProducts] = useState([]);
//     const [wishlist, setWishlist] = useState([]);
//     const [cart, setCart] = useState([]);
//     const [filter, setFilter] = useState("all");


//     // Load products from Fake API
//     useEffect(() => {

//         fetch("http://localhost:5001/products")
//             .then(res => res.json())
//             .then(data => setProducts(data))
//             .catch(error => console.log(error));

//     }, []);


//     // Load wishlist & cart from localStorage
//     useEffect(() => {

//         const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

//         setWishlist(storedWishlist);
//         setCart(storedCart);

//     }, []);


//     // Filter products
//     const filteredProducts =
//         filter === "all"
//             ? products
//             : products.filter(p => p.category === filter);


//     // ❤️ Toggle Wishlist
//     const toggleWishlist = (product) => {

//         let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

//         const exists = wishlistItems.some(item => item.id === product.id);

//         if (exists) {

//             wishlistItems = wishlistItems.filter(item => item.id !== product.id);

//             toast.error("Removed from Wishlist");

//         } else {

//             wishlistItems = [...wishlistItems, product];

//             toast.success("Added to Wishlist", {
//                 icon: <FaHeart color="red" />
//             });

//         }

//         localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
//         setWishlist(wishlistItems);

//     };


//     // 🛒 Add to Cart
//     const addToCart = (product) => {

//         const existingProduct = cart.find(item => item.id === product.id);

//         let updatedCart;

//         if (existingProduct) {

//             updatedCart = cart.map(item =>
//                 item.id === product.id
//                     ? { ...item, quantity: (item.quantity || 1) + 1 }
//                     : item
//             );

//             toast.info("Product quantity updated in cart");

//         } else {

//             updatedCart = [...cart, { ...product, quantity: 1 }];

//             toast.success("Product added to cart");

//         }

//         setCart(updatedCart);
//         localStorage.setItem("cart", JSON.stringify(updatedCart));

//     };


//     return (

//         <div>

//             <h2 style={{ textAlign: "center" }}>Products</h2>


//             {/* Filter Buttons */}

//             <div className="filter-buttons">

//                 <button onClick={() => setFilter("all")}>All</button>
//                 <button onClick={() => setFilter("men")}>Men</button>
//                 <button onClick={() => setFilter("women")}>Women</button>
//                 <button onClick={() => setFilter("unisex")}>Unisex</button>
//                 <button onClick={() => setFilter("accessories")}>Accessories</button>

//             </div>


//             <div className="products-grid">

//                 {filteredProducts.map(product => {

//                     const isWishlisted = wishlist.some(item => item.id === product.id);
//                     const isInCart = cart.some(item => item.id === product.id);

//                     return (

//                         <div className="product-card" key={product.id}>

//                             {/* Wishlist */}

//                             <div
//                                 className="wishlist"
//                                 onClick={() => toggleWishlist(product)}
//                                 style={{ color: isWishlisted ? "red" : "white", cursor: "pointer" }}
//                             >
//                                 <FaHeart />
//                             </div>


//                             {/* Product Image */}

//                             <img
//                                 className="product-image"
//                                 src={product.image}
//                                 alt={product.name}
//                             />


//                             <h3>{product.name}</h3>

//                             <p>₹{product.price}</p>


//                             {/* Rating */}

//                             <div className="rating">

//                                 {[...Array(product.rating)].map((_, i) => (
//                                     <FaStar key={i} color="gold" />
//                                 ))}

//                             </div>


//                             {/* Cart Button */}

//                             {isInCart ? (

//                                 <button onClick={() => navigate("/cart")}>
//                                     <FaShoppingCart /> Go to Cart
//                                 </button>

//                             ) : (

//                                 <button onClick={() => addToCart(product)}>
//                                     <FaShoppingCart /> Add to Cart
//                                 </button>

//                             )}

//                         </div>

//                     );

//                 })}

//             </div>

//         </div>

//     );

// }

// export default Products;
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

// function Products() {
//      alert("Products component loaded");

// const navigate = useNavigate();

// const [products, setProducts] = useState([]);
// const [wishlist, setWishlist] = useState([]);
// const [cart, setCart] = useState([]);
// const [filter, setFilter] = useState("all");


// // 🔹 Load products from Fake API
// useEffect(() => {

// fetch("http://localhost:5001/products")
// .then(res => res.json())
// .then(data => {
// console.log("Products from API:", data);
// setProducts(data);
// })
// .catch(error => console.log(error));

// }, []);


// // 🔹 Load wishlist & cart from localStorage
// useEffect(() => {

// const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
// const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

// setWishlist(storedWishlist);
// setCart(storedCart);

// }, []);


// // 🔹 Filter products
// const filteredProducts =
// filter === "all"
// ? products
// : products.filter(p => p.category === filter);


// // ❤️ Toggle Wishlist
// const toggleWishlist = (product) => {

// let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// const exists = wishlistItems.some(item => item.id === product.id);

// if (exists) {

// wishlistItems = wishlistItems.filter(item => item.id !== product.id);

// toast.error("Removed from Wishlist");

// } else {

// wishlistItems = [...wishlistItems, product];

// toast.success("Added to Wishlist", {
// icon: <FaHeart color="red" />
// });

// }

// localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
// setWishlist(wishlistItems);

// };


// // 🛒 Add to Cart
// const addToCart = (product) => {

// const existingProduct = cart.find(item => item.id === product.id);

// let updatedCart;

// if (existingProduct) {

// updatedCart = cart.map(item =>
// item.id === product.id
// ? { ...item, quantity: (item.quantity || 1) + 1 }
// : item
// );

// toast.info("Product quantity updated in cart");

// } else {

// updatedCart = [...cart, { ...product, quantity: 1 }];

// toast.success("Product added to cart");

// }

// setCart(updatedCart);
// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };
// console.log("Products component loaded");


// return (

// <div>

// <h2 style={{ textAlign: "center" }}>Products</h2>


// {/* 🔹 Loading Message */}

// {products.length === 0 && (
// <p style={{ textAlign: "center" }}>Loading products...</p>
// )}


// {/* 🔹 Filter Buttons */}

// <div className="filter-buttons">

// <button onClick={() => setFilter("all")}>All</button>
// <button onClick={() => setFilter("men")}>Men</button>
// <button onClick={() => setFilter("women")}>Women</button>
// <button onClick={() => setFilter("unisex")}>Unisex</button>
// <button onClick={() => setFilter("accessories")}>Accessories</button>

// </div>


// <div className="products-grid">

// {filteredProducts.map(product => {

// const isWishlisted = wishlist.some(item => item.id === product.id);
// const isInCart = cart.some(item => item.id === product.id);

// return (

// <div className="product-card" key={product.id}>


// {/* ❤️ Wishlist */}

// <div
// className="wishlist"
// onClick={() => toggleWishlist(product)}
// style={{ color: isWishlisted ? "red" : "white", cursor: "pointer" }}
// >
// <FaHeart />
// </div>


// {/* 🖼 Product Image */}

// <img
// className="product-image"
// src={product.image}
// alt={product.name}
// />


// <h3>{product.name}</h3>

// <p>₹{product.price}</p>


// {/* ⭐ Rating */}

// <div className="rating">

// {[...Array(Math.floor(product.rating || 0))].map((_, i) => (
// <FaStar key={i} color="gold" />
// ))}

// </div>


// {/* 🛒 Cart Button */}

// {isInCart ? (

// <button onClick={() => navigate("/cart")}>
// <FaShoppingCart /> Go to Cart
// </button>

// ) : (

// <button onClick={() => addToCart(product)}>
// <FaShoppingCart /> Add to Cart
// </button>

// )}

// </div>

// );

// })}

// </div>

// </div>

// );

// }

// export default Products;


// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

// function Products() {

//     const navigate = useNavigate();

//     const [products, setProducts] = useState([]);
//     const [wishlist, setWishlist] = useState([]);
//     const [cart, setCart] = useState([]);
//     const [filter, setFilter] = useState("all");
//     const [loading, setLoading] = useState(true);


//     // 🔹 Load products from Fake API
//     useEffect(() => {

//         const loadProducts = async () => {

//             try {

//                 const response = await fetch("http://localhost:5001/products");

//                 const data = await response.json();

//                 console.log("Products fetched:", data);

//                 setProducts(data);

//             } catch (error) {

//                 console.error("API Error:", error);

//             } finally {

//                 setLoading(false);

//             }

//         };

//         loadProducts();

//     }, []);


//     // 🔹 Load wishlist & cart from localStorage
//     useEffect(() => {

//         const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
//         const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

//         setWishlist(storedWishlist);
//         setCart(storedCart);

//     }, []);


//     // 🔹 Filter products
//     const filteredProducts =
//         filter === "all"
//             ? products
//             : products.filter(p => p.category === filter);


//     // ❤️ Toggle Wishlist
//     const toggleWishlist = (product) => {

//         let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

//         const exists = wishlistItems.some(item => String(item.id) === String(product.id));

//         if (exists) {

//             wishlistItems = wishlistItems.filter(item => String(item.id) !== String(product.id));

//             toast.error("Removed from Wishlist");

//         } else {

//             wishlistItems = [...wishlistItems, product];

//             toast.success("Added to Wishlist", {
//                 icon: <FaHeart color="red" />
//             });

//         }

//         localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
//         setWishlist(wishlistItems);

//     };


//     // 🛒 Add to Cart
//     const addToCart = (product) => {

//         const existingProduct = cart.find(item => String(item.id) === String(product.id));

//         let updatedCart;

//         if (existingProduct) {

//             updatedCart = cart.map(item =>
//                 String(item.id) === String(product.id)
//                     ? { ...item, quantity: (item.quantity || 1) + 1 }
//                     : item
//             );

//             toast.info("Product quantity updated in cart");

//         } else {

//             updatedCart = [...cart, { ...product, quantity: 1 }];

//             toast.success("Product added to cart");

//         }

//         setCart(updatedCart);
//         localStorage.setItem("cart", JSON.stringify(updatedCart));

//     };


//     return (

//         <div>

//             <h2 style={{ textAlign: "center" }}>Products</h2>


//             {/* 🔹 Loading Message */}

//             {loading && (
//                 <p style={{ textAlign: "center" }}>Loading products...</p>
//             )}


//             {/* 🔹 Filter Buttons */}

//             <div className="filter-buttons">

//                 <button onClick={() => setFilter("all")}>All</button>
//                 <button onClick={() => setFilter("men")}>Men</button>
//                 <button onClick={() => setFilter("women")}>Women</button>
//                 <button onClick={() => setFilter("unisex")}>Unisex</button>
//                 <button onClick={() => setFilter("accessories")}>Accessories</button>

//             </div>


//             <div className="products-grid">

//                 {filteredProducts.map(product => {

//                     const isWishlisted = wishlist.some(item => String(item.id) === String(product.id));
//                     const isInCart = cart.some(item => String(item.id) === String(product.id));

//                     return (

//                         <div className="product-card" key={product.id}>

//                             {/* ❤️ Wishlist */}
//                             <div
//                                 className="wishlist"
//                                 onClick={() => toggleWishlist(product)}
//                                 style={{ color: isWishlisted ? "red" : "white", cursor: "pointer" }}
//                             >
//                                 <FaHeart />
//                             </div>


//                             {/* 🖼 Product Image */}
//                             <img
//                                 className="product-image"
//                                 src={product.image}
//                                 alt={product.name}
//                             />


//                             <h3>{product.name}</h3>

//                             <p>₹{product.price}</p>


//                             {/* ⭐ Rating */}
//                             <div className="rating">
//                                 {[...Array(Math.floor(product.rating || 0))].map((_, i) => (
//                                     <FaStar key={i} color="gold" />
//                                 ))}
//                             </div>


//                             {/* 🛒 Cart Button */}
//                             {isInCart ? (

//                                 <button onClick={() => navigate("/cart")}>
//                                     <FaShoppingCart /> Go to Cart
//                                 </button>

//                             ) : (

//                                 <button onClick={() => addToCart(product)}>
//                                     <FaShoppingCart /> Add to Cart
//                                 </button>

//                             )}

//                         </div>

//                     );

//                 })}

//             </div>

//         </div>

//     );

// }

// export default Products;





// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

// function Products() {

// const navigate = useNavigate();

// const [products, setProducts] = useState([]);
// const [wishlist, setWishlist] = useState([]);
// const [cart, setCart] = useState([]);
// const [filter, setFilter] = useState("all");
// const [loading, setLoading] = useState(true);


// // 🔹 Load products from JSON Server
// useEffect(() => {

// const loadProducts = async () => {

// try {

// const response = await fetch("http://localhost:3000/products");

// const data = await response.json();

// setProducts(data);

// } catch (error) {

// console.error("API Error:", error);
// toast.error("Failed to load products");

// } finally {

// setLoading(false);

// }

// };

// loadProducts();

// }, []);


// // 🔹 Load wishlist & cart
// useEffect(() => {

// const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
// const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

// setWishlist(storedWishlist);
// setCart(storedCart);

// }, []);


// // 🔹 Filter products
// const filteredProducts =
// filter === "all"
// ? products
// : products.filter(p => p.category === filter);


// // ❤️ Toggle Wishlist
// const toggleWishlist = (product) => {

// let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// const exists = wishlistItems.some(item => item.id === product.id);

// if (exists) {

// wishlistItems = wishlistItems.filter(item => item.id !== product.id);
// toast.error("Removed from Wishlist");

// } else {

// wishlistItems.push(product);
// toast.success("Added to Wishlist", { icon: <FaHeart color="red"/> });

// }

// localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
// setWishlist(wishlistItems);

// };


// // 🛒 Add to Cart
// const addToCart = (product) => {

// const existingProduct = cart.find(item => item.id === product.id);

// let updatedCart;

// if (existingProduct) {

// updatedCart = cart.map(item =>
// item.id === product.id
// ? { ...item, quantity: (item.quantity || 1) + 1 }
// : item
// );

// toast.info("Product quantity updated");

// } else {

// updatedCart = [...cart, { ...product, quantity: 1 }];
// toast.success("Product added to cart");

// }

// setCart(updatedCart);
// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };


// return (

// <div>

// <h2 style={{ textAlign: "center" }}>Products</h2>


// {/* Loading */}

// {loading && <p style={{ textAlign:"center" }}>Loading products...</p>}


// {/* Filter Buttons */}

// <div className="filter-buttons">

// <button onClick={() => setFilter("all")}>All</button>
// <button onClick={() => setFilter("men")}>Men</button>
// <button onClick={() => setFilter("women")}>Women</button>
// <button onClick={() => setFilter("unisex")}>Unisex</button>

// </div>


// {/* Products */}

// <div className="products-grid">

// {filteredProducts.map(product => {

// const isWishlisted = wishlist.some(item => item.id === product.id);
// const isInCart = cart.some(item => item.id === product.id);

// return (

// <div className="product-card" key={product.id}>


// {/* Wishlist */}

// <div
// className="wishlist"
// onClick={() => toggleWishlist(product)}
// style={{ color: isWishlisted ? "red" : "white", cursor:"pointer" }}
// >
// <FaHeart />
// </div>


// {/* Product Image */}

// <img
// className="product-image"
// src={product.image}
// alt={product.name}
// />


// <h3>{product.name}</h3>

// <p>₹{product.price}</p>


// {/* Rating */}

// <div className="rating">

// {[...Array(Math.floor(product.rating || 0))].map((_,i)=>(
// <FaStar key={i} color="gold"/>
// ))}

// </div>


// {/* Cart Button */}

// {isInCart ? (

// <button onClick={() => navigate("/cart")}>
// <FaShoppingCart/> Go to Cart
// </button>

// ) : (

// <button onClick={() => addToCart(product)}>
// <FaShoppingCart/> Add to Cart
// </button>

// )}

// </div>

// );

// })}

// </div>

// </div>

// );

// }

// export default Products;

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

// function Products() {

// const navigate = useNavigate();

// const [products, setProducts] = useState([]);
// const [wishlist, setWishlist] = useState([]);
// const [cart, setCart] = useState([]);
// const [filter, setFilter] = useState("all");
// const [loading, setLoading] = useState(true);

// // 🔹 Load products
// useEffect(() => {

// const loadProducts = async () => {

// try {

// const response = await fetch("http://localhost:3000/products");
// const data = await response.json();
// setProducts(data);

// } catch (error) {

// console.error("API Error:", error);
// toast.error("Failed to load products");

// } finally {

// setLoading(false);

// }

// };

// loadProducts();

// }, []);

// // 🔹 Load wishlist & cart
// useEffect(() => {

// const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
// const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

// setWishlist(storedWishlist);
// setCart(storedCart);

// }, []);

// // 🔹 Filter products
// const filteredProducts =
// filter === "all"
// ? products
// : products.filter(p => p.category === filter);

// // 🔒 Check login helper
// const checkLogin = () => {

// const user = JSON.parse(localStorage.getItem("user"));

// if (!user) {

// toast.error("Please login to add items");
// navigate("/login");

// return false;

// }

// return true;

// };

// // ❤️ Toggle Wishlist
// const toggleWishlist = (product) => {

// if (!checkLogin()) return;

// let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// const exists = wishlistItems.some(item => item.id === product.id);

// if (exists) {

// wishlistItems = wishlistItems.filter(item => item.id !== product.id);
// toast.error("Removed from Wishlist");

// } else {

// wishlistItems.push(product);
// toast.success("Added to Wishlist", { icon: <FaHeart color="red"/> });

// }

// localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
// setWishlist(wishlistItems);

// };

// // 🛒 Add to Cart
// const addToCart = (product) => {

// if (!checkLogin()) return;

// const existingProduct = cart.find(item => item.id === product.id);

// let updatedCart;

// if (existingProduct) {

// updatedCart = cart.map(item =>
// item.id === product.id
// ? { ...item, quantity: (item.quantity || 1) + 1 }
// : item
// );

// toast.info("Product quantity updated");

// } else {

// updatedCart = [...cart, { ...product, quantity: 1 }];
// toast.success("Product added to cart");

// }

// setCart(updatedCart);
// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };

// return (

// <div>

// <h2 style={{ textAlign: "center" }}>Products</h2>

// {loading && <p style={{ textAlign:"center" }}>Loading products...</p>}

// {/* Filter Buttons */}

// <div className="filter-buttons">

// <button onClick={() => setFilter("all")}>All</button>
// <button onClick={() => setFilter("men")}>Men</button>
// <button onClick={() => setFilter("women")}>Women</button>
// <button onClick={() => setFilter("unisex")}>Unisex</button>

// </div>

// {/* Products */}

// <div className="products-grid">

// {filteredProducts.map(product => {

// const isWishlisted = wishlist.some(item => item.id === product.id);
// const isInCart = cart.some(item => item.id === product.id);

// return (

// <div className="product-card" key={product.id}>

// <div
// className="wishlist"
// onClick={() => toggleWishlist(product)}
// style={{ color: isWishlisted ? "red" : "white", cursor:"pointer" }}
// >
// <FaHeart />
// </div>

// <img
// className="product-image"
// src={product.image}
// alt={product.name}
// />

// <h3>{product.name}</h3>

// <p>₹{product.price}</p>

// <div className="rating">
// {[...Array(Math.floor(product.rating || 0))].map((_,i)=>(
// <FaStar key={i} color="gold"/>
// ))}
// </div>

// {isInCart ? (

// <button onClick={() => navigate("/cart")}> <FaShoppingCart/> Go to Cart </button>

// ) : (

// <button onClick={() => addToCart(product)}> <FaShoppingCart/> Add to Cart </button>

// )}

// </div>

// );

// })}

// </div>

// </div>

// );

// }

// export default Products;













// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

// function Products() {

// const navigate = useNavigate();

// const [products, setProducts] = useState([]);
// const [wishlist, setWishlist] = useState([]);
// const [cart, setCart] = useState([]);
// const [filter, setFilter] = useState("all");
// const [loading, setLoading] = useState(true);


// // 🔹 Load products
// useEffect(() => {

// const loadProducts = async () => {

// try {

// const response = await fetch("http://localhost:3001/products");
// const data = await response.json();

// setProducts(data);

// } catch (error) {

// console.error("API Error:", error);
// toast.error("Failed to load products");

// } finally {

// setLoading(false);

// }

// };

// loadProducts();

// }, []);


// // 🔹 Load wishlist & cart
// useEffect(() => {

// const user = JSON.parse(localStorage.getItem("user"));

// if (!user) return;

// const storedWishlist =
// JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

// const storedCart =
// JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];

// setWishlist(storedWishlist);
// setCart(storedCart);

// }, []);


// // 🔹 Filter products
// const filteredProducts =
// filter === "all"
// ? products
// : products.filter(p => p.category === filter);


// // 🔒 Login check
// const checkLogin = () => {

// const user = JSON.parse(localStorage.getItem("user"));

// if (!user) {

// toast.error("Please login to add items");
// navigate("/login");

// return null;

// }

// return user;

// };


// // ❤️ Toggle wishlist
// const toggleWishlist = (product) => {

// const user = checkLogin();
// if (!user) return;

// let wishlistItems =
// JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

// const exists = wishlistItems.some(item => item.id === product.id);

// if (exists) {

// wishlistItems = wishlistItems.filter(item => item.id !== product.id);
// toast.error("Removed from Wishlist");

// } else {

// wishlistItems.push({
// ...product,
// image: product.image || "/images/default-product.jpg"
// });

// toast.success("Added to Wishlist", {
// icon: <FaHeart color="red"/>
// });

// }

// localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(wishlistItems));
// setWishlist(wishlistItems);

// };


// // 🛒 Add to cart
// const addToCart = (product) => {

// const user = checkLogin();
// if (!user) return;

// let cartItems =
// JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];

// const existingProduct = cartItems.find(item => item.id === product.id);

// if (existingProduct) {

// cartItems = cartItems.map(item =>
// item.id === product.id
// ? { ...item, quantity: (item.quantity || 1) + 1 }
// : item
// );

// toast.info("Product quantity updated");

// } else {

// cartItems.push({
// ...product,
// image: product.image || "/images/default-product.jpg",
// quantity: 1
// });

// toast.success("Product added to cart");

// }

// localStorage.setItem(`cart_${user.id}`, JSON.stringify(cartItems));
// setCart(cartItems);

// };


// return (

// <div className="products-section">

// {/* Section Title */}
// <h2 className="products-title">Products</h2>


// {loading && (
// <p style={{ textAlign:"center" }}>Loading products...</p>
// )}


// {/* Filter Buttons */}
// <div className="filter-buttons">

// <button onClick={() => setFilter("all")}>All</button>
// <button onClick={() => setFilter("men")}>Men</button>
// <button onClick={() => setFilter("women")}>Women</button>
// <button onClick={() => setFilter("unisex")}>Unisex</button>

// </div>


// {/* Product Grid */}
// <div className="products-grid">

// {filteredProducts.map(product => {

// const isWishlisted = wishlist.some(item => item.id === product.id);
// const isInCart = cart.some(item => item.id === product.id);

// return (

// <div className="product-card" key={product.id}>

// {/* Wishlist Icon */}
// <div
// className="wishlist"
// onClick={() => toggleWishlist(product)}
// style={{
// color: isWishlisted ? "red" : "white",
// cursor:"pointer"
// }}
// >
// <FaHeart />
// </div>


// {/* Product Image */}
// <img
// className="product-image"
// src={product.image || "/images/default-product.jpg"}
// alt={product.name}
// />


// <h3>{product.name}</h3>

// <p>₹{product.price}</p>


// {/* Rating */}
// <div className="rating">

// {[...Array(Math.floor(product.rating || 0))].map((_,i)=>(
// <FaStar key={i} color="gold"/>
// ))}

// </div>


// {/* Cart Button */}
// {isInCart ? (

// <button onClick={() => navigate("/cart")}>
// <FaShoppingCart/> Go to Cart
// </button>

// ) : (

// <button onClick={() => addToCart(product)}>
// <FaShoppingCart/> Add to Cart
// </button>

// )}

// </div>

// );

// })}

// </div>

// </div>

// );

// }

// export default Products;






// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
// import API from "../services/api"; // ✅ axios service
// import axios from "axios";

// function Products() {

//     const navigate = useNavigate();

//     const [products, setProducts] = useState([]);
//     const [wishlist, setWishlist] = useState([]);
//     const [cart, setCart] = useState([]);
//     const [filter, setFilter] = useState("all");
//     const [loading, setLoading] = useState(true);
//     const token = localStorage.getItem("accessToken");


//     /* ================= LOAD PRODUCTS ================= */

// useEffect(() => {

//     const token = localStorage.getItem("accessToken");

//     if (!token) {
//         toast.error("Please log in to view products");
//         navigate("/login");
//         return;
//     }

//     const loadProducts = async () => {

//         try {

//             const res = await axios.get("http://localhost:3001/products");
//             setProducts(res.data);

//         } catch (error) {

//             console.error("API Error:", error);
//             toast.error("Failed to load products");

//         } finally {

//             setLoading(false);

//         }

//     };

//     loadProducts();

// }, []);


//     /* ================= LOAD WISHLIST & CART ================= */

//     useEffect(() => {

//         const user = JSON.parse(localStorage.getItem("user"));

//         if (!user) return;

//         const storedWishlist =
//             JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

//         const storedCart =
//             JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];

//         setWishlist(storedWishlist);
//         setCart(storedCart);

//     }, []);


//     /* ================= FILTER PRODUCTS ================= */

//     const filteredProducts =
//         filter === "all"
//             ? products
//             : products.filter(p => p.category === filter);


//     /* ================= LOGIN CHECK ================= */

//     const checkLogin = () => {

//         const token = localStorage.getItem("accessToken");

//         if (!token) {

//             toast.error("Please log in to use wishlist");
//             navigate("/login");
//             return null;

//         }

//         return true;

//     };

//     /* ================= TOGGLE WISHLIST ================= */

//     const toggleWishlist = (product) => {

//         const logged = checkLogin();
//         if (!logged) return;

//         const user = JSON.parse(localStorage.getItem("user"));

//         let wishlistItems =
//             JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

//         const exists = wishlistItems.some(item => item.id === product.id);

//         if (exists) {

//             wishlistItems = wishlistItems.filter(item => item.id !== product.id);
//             toast.error("Removed from Wishlist");

//         } else {

//             wishlistItems.push({
//                 ...product,
//                 image: product.image || "/images/default-product.jpg"
//             });

//             toast.success("Added to Wishlist", {
//                 icon: <FaHeart color="red" />
//             });

//         }

//         localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(wishlistItems));
//         setWishlist(wishlistItems);

//     };


//     /* ================= ADD TO CART ================= */

//     const addToCart = (product) => {

//         const logged = checkLogin();
//         if (!logged) return;

//         const user = JSON.parse(localStorage.getItem("user"));

//         let cartItems =
//             JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];

//         const existingProduct = cartItems.find(item => item.id === product.id);

//         if (existingProduct) {

//             cartItems = cartItems.map(item =>
//                 item.id === product.id
//                     ? { ...item, quantity: (item.quantity || 1) + 1 }
//                     : item
//             );

//             toast.info("Product quantity updated");

//         } else {

//             cartItems.push({
//                 ...product,
//                 image: product.image || "/images/default-product.jpg",
//                 quantity: 1
//             });

//             toast.success("Product added to cart");

//         }

//         localStorage.setItem(`cart_${user.id}`, JSON.stringify(cartItems));
//         setCart(cartItems);

//     };

//     if (!token) {
//         return null;
//     }

//     /* ================= UI ================= */

//     return (

//         <div className="products-section">

//             <h2 className="products-title">Products</h2>

//             {loading && (
//                 <p style={{ textAlign: "center" }}>Loading products...</p>
//             )}




//             <div className="filter-buttons">

//                 <button onClick={() => setFilter("all")}>All</button>
//                 <button onClick={() => setFilter("men")}>Men</button>
//                 <button onClick={() => setFilter("women")}>Women</button>
//                 <button onClick={() => setFilter("unisex")}>Unisex</button>
//                 <button onClick={() => setFilter("accessories")}>Accessories</button>   
//             </div>


//             <div className="products-grid">

//                 {filteredProducts.map(product => {

//                     const isWishlisted = wishlist.some(item => item.id === product.id);
//                     const isInCart = cart.some(item => item.id === product.id);

//                     return (

//                         <div className="product-card" key={product.id}>

//                             <div
//                                 className="wishlist"
//                                 onClick={() => toggleWishlist(product)}
//                                 style={{
//                                     color: isWishlisted ? "red" : "white",
//                                     cursor: "pointer"
//                                 }}
//                             >
//                                 <FaHeart />
//                             </div>

//                             <img
//                                 className="product-image"
//                                 src={product.image || "/images/default-product.jpg"}
//                                 alt={product.name}
//                             />

//                             <h3>{product.name}</h3>

//                             <p>₹{product.price}</p>

//                             <div className="rating">

//                                 {[...Array(Math.floor(product.rating || 0))].map((_, i) => (
//                                     <FaStar key={i} color="gold" />
//                                 ))}

//                             </div>


//                             {isInCart ? (

//                                 <button onClick={() => navigate("/cart")}>
//                                     <FaShoppingCart /> Go to Cart
//                                 </button>

//                             ) : (

//                                 <button onClick={() => addToCart(product)}>
//                                     <FaShoppingCart /> Add to Cart
//                                 </button>

//                             )}

//                         </div>

//                     );

//                 })}

//             </div>

//         </div>

//     );

// }

// export default Products;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import axios from "axios";

function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("accessToken");

  /* ================= LOAD PRODUCTS ================= */
  useEffect(() => {
    if (!token) {
      toast.error("Please log in to view products");
      navigate("/login");
      return;
    }

    const loadProducts = async () => {
      try {
        const res = await axios.get("http://localhost:3001/products");
        setProducts(res.data);
      } catch (error) {
        toast.error("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  /* ================= LOAD STORAGE ================= */
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) return;

    setWishlist(JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || []);
    setCart(JSON.parse(localStorage.getItem(`cart_${user.id}`)) || []);
  }, []);

  /* ================= FILTER ================= */
  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((p) => p.category === filter);

  /* ================= LOGIN CHECK ================= */
  const checkLogin = () => {
    if (!token) {
      toast.error("Please log in first");
      navigate("/login");
      return false;
    }
    return true;
  };

  /* ================= WISHLIST ================= */
  const toggleWishlist = (product) => {
    if (!checkLogin()) return;

    const user = JSON.parse(localStorage.getItem("user"));
    let items =
      JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

    const exists = items.some((item) => item.id === product.id);

    if (exists) {
      items = items.filter((item) => item.id !== product.id);
      toast.error("Removed from Wishlist");
    } else {
      items.push(product);
      toast.success("Added to Wishlist ❤️");
    }

    localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(items));
    setWishlist(items);
  };

  if (!token) return null;

  /* ================= UI ================= */
  return (
    <div className="products-section">
      <h2 className="products-title">🔥Products</h2>

      {loading && <p className="loading">Loading products...</p>}

      {/* FILTER */}
      <div className="filter-buttons">
        {["all", "men", "women", "unisex", "accessories"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active-filter" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat.toUpperCase()}
          </button>
        ))}
      </div>

      {/* PRODUCTS GRID */}
      <div className="products-grid">
        {filteredProducts.map((product) => {
          const isWishlisted = wishlist.some(
            (item) => item.id === product.id
          );
          const isInCart = cart.some((item) => item.id === product.id);

          return (
            <div className="product-card" key={product.id}>
              {/* SALE BADGE */}
              <span className="badge">SALE</span>

              {/* Wishlist */}
              <div
                className="wishlist-icon"
                onClick={() => toggleWishlist(product)}
              >
                <FaHeart color={isWishlisted ? "red" : "gray"} />
              </div>

              {/* IMAGE CLICK → PRODUCT PAGE */}
              <div
                className="image-wrapper"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.image || "/images/default-product.jpg"}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              {/* Info */}
              <h3 className="product-name">{product.name}</h3>

              <p className="product-price">
                ₹{product.price}{" "}
                <span className="old-price">
                  ₹{product.price + 200}
                </span>
              </p>

              {/* Rating */}
              <div className="rating">
                {[...Array(Math.floor(product.rating || 4))].map((_, i) => (
                  <FaStar key={i} color="gold" />
                ))}
              </div>

              {/* BUTTON */}
              {isInCart ? (
                <button
                  className="cart-btn"
                  onClick={() => navigate("/cart")}
                >
                  Go to Cart
                </button>
              ) : (
                <button
                  className="cart-btn"
                  onClick={() => {
                    toast.info("Please select size on product page");
                    navigate(`/product/${product.id}`);
                  }}
                >
                  <FaShoppingCart /> View Product
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;