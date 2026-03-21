// function Cart() {
//   return (
//     <div>
//       <h2>Your Cart</h2>
//       <p>No items in cart</p>
//     </div>
//   );
// }

// // export default Cart;
// // 
// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { FaMinus, FaPlus, FaHeart } from "react-icons/fa";

// function Cart() {

// const [cart, setCart] = useState([]);
// const [wishlist, setWishlist] = useState([]);

// useEffect(() => {

// const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
// const wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// const cartWithQty = cartItems.map(item => ({
//   ...item,
//   quantity: item.quantity || 1
// }));

// setCart(cartWithQty);
// setWishlist(wishlistItems);

// }, []);



// const removeItem = (index) => {

// const updatedCart = [...cart];
// updatedCart.splice(index, 1);

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// toast.error("Item removed");

// };


// const moveToWishlist = (item, index) => {

// let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// wishlistItems.push(item);

// localStorage.setItem("wishlist", JSON.stringify(wishlistItems));

// setWishlist(wishlistItems);

// removeItem(index);

// toast.success("Added to Wishlist Faheart");

// };



// const increaseQty = (index) => {

// const updatedCart = [...cart];

// updatedCart[index].quantity += 1;

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };


// const decreaseQty = (index) => {

// const updatedCart = [...cart];

// if (updatedCart[index].quantity > 1) {
//   updatedCart[index].quantity -= 1;
// }

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };

// const removeWishlistItem = (index) => {

// const updatedWishlist = [...wishlist];

// updatedWishlist.splice(index, 1);

// setWishlist(updatedWishlist);

// localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

// toast.error("Item removed from Wishlist");

// };

// return (

// <div style={{ padding: "40px" }}>

// <h2> Your  Cart Products</h2>

// {cart.length === 0 && <p>No cart items</p>}

// {cart.map((item, index) => (

// <div key={index} style={{ marginBottom: "20px" }}>

// <h3>{item.name}</h3>

// <p>₹{item.price}</p>



// <button onClick={() => decreaseQty(index)}>
// <FaMinus />
// </button>

// <span style={{ margin: "0 10px", fontWeight: "bold" }}>
// {item.quantity}
// </span>

// <button onClick={() => increaseQty(index)}>
// <FaPlus />
// </button>

// <br /><br />

// <button onClick={() => removeItem(index)}>
// Remove
// </button>

// <button
// onClick={() => moveToWishlist(item, index)}
// style={{ marginLeft: "10px" }}
// >
// Move to Wishlist <FaHeart />
// </button>

// </div>

// ))}

// <hr />

// <h2>Wishlist Products</h2>

// {wishlist.length === 0 && <p>No wishlist items</p>}

// {wishlist.map((item, index) => (

// <div key={index}>
// <h3>{item.name}</h3>
// <p>₹{item.price}</p>
// </div>

// ))}

// </div>

// );

// }

// export default Cart;




// import { useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { FaMinus, FaPlus, FaHeart } from "react-icons/fa";

// function Cart() {

// const [cart, setCart] = useState([]);

// useEffect(() => {

// const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

// const cartWithQty = cartItems.map(item => ({
//   ...item,
//   quantity: item.quantity || 1
// }));

// setCart(cartWithQty);

// }, []);



// const removeItem = (index) => {

// const updatedCart = [...cart];
// updatedCart.splice(index, 1);

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// toast.error("Item removed from cart");

// };



// const moveToWishlist = (item, index) => {

// let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// wishlistItems.push(item);

// localStorage.setItem("wishlist", JSON.stringify(wishlistItems));

// removeItem(index);

// toast.success("Added to Wishlist ❤️");

// };



// const increaseQty = (index) => {

// const updatedCart = [...cart];

// updatedCart[index].quantity += 1;

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };



// const decreaseQty = (index) => {

// const updatedCart = [...cart];

// if (updatedCart[index].quantity > 1) {
//   updatedCart[index].quantity -= 1;
// }

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };

// return (

// <div style={{ padding: "40px" }}>

// <h2>Your Cart Products</h2>

// {cart.length === 0 && <p>No cart items</p>}

// {cart.map((item, index) => (

// <div key={index} style={{ marginBottom: "20px" }}>

// <h3>{item.name}</h3>

// <p>₹{item.price}</p>

// <button onClick={() => decreaseQty(index)}>
// <FaMinus />
// </button>

// <span style={{ margin: "0 10px", fontWeight: "bold" }}>
// {item.quantity}
// </span>

// <button onClick={() => increaseQty(index)}>
// <FaPlus />
// </button>

// <br /><br />

// <button onClick={() => removeItem(index)}>
// Remove
// </button>

// <button
// onClick={() => moveToWishlist(item, index)}
// style={{ marginLeft: "10px" }}
// >
// Move to Wishlist <FaHeart />
// </button>

// </div>

// ))}

// </div>

// );

// }

// export default Cart;



// import { useContext } from "react";
// import { toast } from "react-toastify";
// import { FaMinus, FaPlus, FaHeart } from "react-icons/fa";
// import { CartContext } from "../context/CartContext";

// function Cart() {

// const { cart, setCart } = useContext(CartContext);

// const removeItem = (index) => {

// const updatedCart = [...cart];
// updatedCart.splice(index, 1);

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// toast.error("Item removed from cart");

// };

// const moveToWishlist = (item, index) => {
// e.preventDefault();

// e.stopPropagation();  

// let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// wishlistItems.push(item);

// localStorage.setItem("wishlist", JSON.stringify(wishlistItems));

// removeItem(index);

// toast.success("Added to Wishlist ❤️");

// };

// const increaseQty = (index) => {

// const updatedCart = [...cart];

// updatedCart[index].quantity =
// (updatedCart[index].quantity || 1) + 1;

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };

// const decreaseQty = (index) => {

// const updatedCart = [...cart];

// if ((updatedCart[index].quantity || 1) > 1) {
// updatedCart[index].quantity -= 1;
// }

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };

// return (

// <div style={{ padding: "40px" }}>

// <h2>Your Cart Products</h2>

// {cart.length === 0 && <p>No cart items</p>}

// {cart.map((item, index) => (

// <div key={index} style={{ marginBottom: "20px" }}>

// <h3>{item.name}</h3>

// <p>₹{item.price}</p>

// <button onClick={() => decreaseQty(index)}>
// <FaMinus />
// </button>

// <span style={{ margin: "0 10px", fontWeight: "bold" }}>
// {item.quantity || 1}
// </span>

// <button onClick={() => increaseQty(index)}>
// <FaPlus />
// </button>

// <br /><br />

// <button onClick={() => removeItem(index)}>
// Remove
// </button>

// <button 
// type="button"
// onClick={(e) => moveToWishlist(e,item, index)}
// style={{ marginLeft: "10px" }}
// >
// Move to Wishlist
// <FaHeart />
// </button>

// </div>

// ))}

// </div>

// );

// }

// export default Cart;
// import { useContext } from "react";
// import { toast } from "react-toastify";
// import { FaMinus, FaPlus, FaHeart } from "react-icons/fa";
// import { CartContext } from "../context/CartContext";

// function Cart() {

// const { cart, setCart } = useContext(CartContext);

// const removeItem = (index) => {

// const updatedCart = [...cart];
// updatedCart.splice(index, 1);

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// toast.error("Item removed from cart");

// };

// const moveToWishlist = (e, item, index) => {

// e.preventDefault();
// e.stopPropagation();

// let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// wishlistItems.push(item);

// localStorage.setItem("wishlist", JSON.stringify(wishlistItems));

// removeItem(index);

// toast.success(
// "Added to Wishlist ❤️"
// );

// };

// const increaseQty = (index) => {

// const updatedCart = [...cart];

// updatedCart[index].quantity =
// (updatedCart[index].quantity || 1) + 1;

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };

// const decreaseQty = (index) => {

// const updatedCart = [...cart];

// if ((updatedCart[index].quantity || 1) > 1) {
// updatedCart[index].quantity -= 1;
// }

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };

// return (

// <div style={{ padding: "40px" }}>

// <h2>Your Cart Products</h2>

// {cart.length === 0 && <p>No cart items</p>}

// {cart.map((item, index) => (

// <div key={index} style={{ marginBottom: "20px" }}>

// <h3>{item.name}</h3>

// <p>₹{item.price}</p>

// <button onClick={() => decreaseQty(index)}>
// <FaMinus />
// </button>

// <span style={{ margin: "0 10px", fontWeight: "bold" }}>
// {item.quantity || 1}
// </span>

// <button onClick={() => increaseQty(index)}>
// <FaPlus />
// </button>

// <br /><br />

// <button onClick={() => removeItem(index)}>
// Remove
// </button>

// <button
// type="button"
// onClick={(e) => moveToWishlist(e, item, index)}
// style={{ marginLeft: "10px" }}
// >
// Move to Wishlist <FaHeart />
// </button>

// </div>

// ))}

// </div>

// );

// }

// export default Cart;



// import { useContext } from "react";
// import { toast } from "react-toastify";
// import { FaMinus, FaPlus, FaHeart } from "react-icons/fa";
// import { CartContext } from "../context/CartContext";

// function Cart() {

// const { cart, setCart } = useContext(CartContext);

// const removeItem = (index) => {

// const updatedCart = [...cart];
// updatedCart.splice(index, 1);

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// toast.error("Item removed from cart");

// };

// const moveToWishlist = (e, item, index) => {

// e.preventDefault();
// e.stopPropagation();

// let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// /* prevent duplicates */
// useEffect(() => {

// const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

// const mergedCart = [];

// storedCart.forEach(product => {

// const existing = mergedCart.find(item => item.id === product.id);

// if (existing) {
// existing.quantity += product.quantity || 1;
// } else {
// mergedCart.push({ ...product, quantity: product.quantity || 1 });
// }

// });

// setCart(mergedCart);
// localStorage.setItem("cart", JSON.stringify(mergedCart));

// }, []);
// toast.success("Added to Wishlist", {
//   icon: <FaHeart color="red" />
// });
// };

// const increaseQty = (index) => {

// const updatedCart = [...cart];

// updatedCart[index].quantity =
// (updatedCart[index].quantity || 1) + 1;

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };

// const decreaseQty = (index) => {

// const updatedCart = [...cart];

// if ((updatedCart[index].quantity || 1) > 1) {
// updatedCart[index].quantity -= 1;
// }

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };

// return (

// <div style={{ padding: "40px" }}>

// <h2>Your Cart Products</h2>

// {cart.length === 0 && <p>No cart items</p>}

// {cart.map((item, index) => (

// <div key={index} style={{ marginBottom: "25px", borderBottom:"1px solid #ddd", paddingBottom:"15px" }}>

// <h3>{item.name}</h3>

// <p>₹{item.price}</p>

// <div>

// <button onClick={() => decreaseQty(index)}>
// <FaMinus />
// </button>

// <span style={{ margin: "0 10px", fontWeight: "bold" }}>
// {item.quantity || 1}
// </span>

// <button onClick={() => increaseQty(index)}>
// <FaPlus />
// </button>

// </div>

// <br />

// <button onClick={() => removeItem(index)}>
// Remove
// </button>

// <button
// type="button"
// onClick={(e) => moveToWishlist(e, item, index)}
// style={{ marginLeft: "10px" }}
// >
// Move to Wishlist <FaHeart />
// </button>

// </div>

// ))}

// </div>

// );

// }

// export default Cart;




// import { useContext, useEffect } from "react";
// import { toast } from "react-toastify";
// import { FaMinus, FaPlus, FaHeart } from "react-icons/fa";
// import { CartContext } from "../context/CartContext";

// function Cart() {

// const { cart, setCart } = useContext(CartContext);


// /* 🔥 MERGE DUPLICATE PRODUCTS WHEN CART LOADS */
// useEffect(() => {

// const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

// const mergedCart = [];

// storedCart.forEach(product => {

// const existing = mergedCart.find(item => item.id === product.id);

// if (existing) {
// existing.quantity += product.quantity || 1;
// } else {
// mergedCart.push({ ...product, quantity: product.quantity || 1 });
// }

// });

// setCart(mergedCart);
// localStorage.setItem("cart", JSON.stringify(mergedCart));

// }, []);



// const removeItem = (index) => {

// const updatedCart = [...cart];
// updatedCart.splice(index, 1);

// setCart(updatedCart);
// localStorage.setItem("cart", JSON.stringify(updatedCart));

// toast.error("Item removed from cart");

// };



// const moveToWishlist = (e, item, index) => {

// e.preventDefault();
// e.stopPropagation();

// let wishlistItems = JSON.parse(localStorage.getItem("wishlist")) || [];

// wishlistItems.push(item);

// localStorage.setItem("wishlist", JSON.stringify(wishlistItems));

// removeItem(index);

// toast.success("Added to Wishlist", {
// icon: <FaHeart color="red" />
// });

// };



// const increaseQty = (index) => {

// const updatedCart = [...cart];

// updatedCart[index].quantity =
// (updatedCart[index].quantity || 1) + 1;

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };



// const decreaseQty = (index) => {

// const updatedCart = [...cart];

// if ((updatedCart[index].quantity || 1) > 1) {
// updatedCart[index].quantity -= 1;
// }

// setCart(updatedCart);

// localStorage.setItem("cart", JSON.stringify(updatedCart));

// };



// return (

// <div style={{ padding: "40px" }}>

// <h2>Your Cart Products</h2>

// {cart.length === 0 && <p>No cart items</p>}

// {cart.map((item, index) => (

// <div
// key={item.id}
// style={{
// marginBottom: "25px",
// borderBottom:"1px solid #ddd",
// paddingBottom:"15px"
// }}
// >

// <h3>{item.name}</h3>

// <p>₹{item.price}</p>

// <div>

// <button onClick={() => decreaseQty(index)}>
// <FaMinus />
// </button>

// <span style={{ margin: "0 10px", fontWeight: "bold" }}>
// {item.quantity || 1}
// </span>

// <button onClick={() => increaseQty(index)}>
// <FaPlus />
// </button>

// </div>

// <br />

// <button onClick={() => removeItem(index)}>
// Remove
// </button>

// <button
// type="button"
// onClick={(e) => moveToWishlist(e, item, index)}
// style={{ marginLeft: "10px" }}
// >
// Move to Wishlist <FaHeart />
// </button>

// </div>

// ))}

// </div>

// );

// }

// export default Cart;






import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { FaMinus, FaPlus, FaHeart } from "react-icons/fa";
import { CartContext } from "../context/CartContext";

function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const user = JSON.parse(localStorage.getItem("user"));

  /* 🔹 LOAD CART */
  useEffect(() => {
    if (!user) return;

    const storedCart =
      JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];

    setCart(storedCart);
  }, []);

  /* ❌ REMOVE ITEM */
  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

    setCart(updatedCart);
    localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));

    toast.error("Item removed from cart");
  };

  /* ❤️ MOVE TO WISHLIST */
  const moveToWishlist = (item, index) => {
    let wishlistItems =
      JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

    wishlistItems.push(item);

    localStorage.setItem(
      `wishlist_${user.id}`,
      JSON.stringify(wishlistItems)
    );

    removeItem(index);

    toast.success("Moved to Wishlist", {
      icon: <FaHeart color="red" />
    });
  };

  /* ➕ INCREASE */
  const increaseQty = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity =
      (updatedCart[index].quantity || 1) + 1;

    setCart(updatedCart);
    localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));
  };

  /* ➖ DECREASE */
  const decreaseQty = (index) => {
    const updatedCart = [...cart];

    if ((updatedCart[index].quantity || 1) > 1) {
      updatedCart[index].quantity -= 1;
    }

    setCart(updatedCart);
    localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>No items in cart</p>}

      {cart.map((item, index) => (
        <div className="cart-item" key={item.id}>

          {/* 🔥 TOP */}
          <div className="cart-top">
            <img
              src={item.image || "/images/default-product.jpg"}
              alt={item.name}
            />

            <div className="cart-info">
              <h4>{item.name}</h4>

              {/* ✅ FIX ₹ ISSUE */}
              <p>{item.price}</p>

              {/* Quantity */}
              <div className="qty-section">
                <button onClick={() => decreaseQty(index)}>
                  <FaMinus />
                </button>``

                <span>{item.quantity || 1}</span>

                <button onClick={() => increaseQty(index)}>
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          {/* 🔥 BOTTOM BUTTONS */}
          <div className="cart-actions">
            <button
              className="remove-btn"
              onClick={() => removeItem(index)}
            >
              Remove
            </button>

            <button
              className="wishlist-btn"
              onClick={() => moveToWishlist(item, index)}
            >
              Move to Wishlist
            </button>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Cart;
