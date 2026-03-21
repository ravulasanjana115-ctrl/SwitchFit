// import { useContext, useEffect } from "react";
// import { toast } from "react-toastify";
// import { FaMinus, FaPlus, FaHeart } from "react-icons/fa";
// import { CartContext } from "../context/CartContext";

// function Cart() {
//   const { cart, setCart } = useContext(CartContext);
//   const user = JSON.parse(localStorage.getItem("user"));


//   useEffect(() => {
//     if (!user) return;

//     const storedCart =
//       JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];

//     setCart(storedCart);
//   }, []);


//   const removeItem = (index) => {
//     const updatedCart = [...cart];
//     updatedCart.splice(index, 1);

//     setCart(updatedCart);
//     localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));

//     toast.error("Item removed from cart");
//   };


//   const moveToWishlist = (item, index) => {
//     let wishlistItems =
//       JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

//     wishlistItems.push(item);

//     localStorage.setItem(
//       `wishlist_${user.id}`,
//       JSON.stringify(wishlistItems)
//     );

//     removeItem(index);

//     toast.success("Moved to Wishlist", {
//       icon: <FaHeart color="red" />
//     });
//   };


//   const increaseQty = (index) => {
//     const updatedCart = [...cart];
//     updatedCart[index].quantity =
//       (updatedCart[index].quantity || 1) + 1;

//     setCart(updatedCart);
//     localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));
//   };


//   const decreaseQty = (index) => {
//     const updatedCart = [...cart];

//     if ((updatedCart[index].quantity || 1) > 1) {
//       updatedCart[index].quantity -= 1;
//     }

//     setCart(updatedCart);
//     localStorage.setItem(`cart_${user.id}`, JSON.stringify(updatedCart));
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Your Cart</h2>

//       {cart.length === 0 && <p>No items in cart</p>}

//       {cart.map((item, index) => (
//         <div className="cart-item" key={item.id}>


//           <div className="cart-top">
//             <img
//               src={item.image || "/images/default-product.jpg"}
//               alt={item.name}
//             />

//             <div className="cart-info">
//               <h4>{item.name}</h4>


//               <p>{item.price}</p>


//               <div className="qty-section">
//                 <button onClick={() => decreaseQty(index)}>
//                   <FaMinus />
//                 </button>``

//                 <span>{item.quantity || 1}</span>

//                 <button onClick={() => increaseQty(index)}>
//                   <FaPlus />
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="cart-actions">
//             <button
//               className="remove-btn"
//               onClick={() => removeItem(index)}
//             >
//               Remove
//             </button>

//             <button
//               className="wishlist-btn"
//               onClick={() => moveToWishlist(item, index)}
//             >
//               Move to Wishlist
//             </button>
//           </div>

//         </div>
//       ))}
//     </div>
//   );
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

  /* 💰 CALCULATIONS */
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  return (
    <div className="cart-container">

      {/* LEFT SIDE */}
      <div className="cart-left">

        <h2>Your Cart</h2>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map((item, index) => (
          <div className="cart-item" key={item.id}>

            <img
              src={item.image || "/images/default-product.jpg"}
              alt={item.name}
              className="cart-img"
            />

            <div className="cart-info">
              <h4>{item.name}</h4>
              <p className="price">₹{item.price}</p>

              {/* Quantity */}
              <div className="qty-section">
                <button onClick={() => decreaseQty(index)}>
                  <FaMinus />
                </button>

                <span>{item.quantity || 1}</span>

                <button onClick={() => increaseQty(index)}>
                  <FaPlus />
                </button>
              </div>

              {/* Actions */}
              {/* Actions */}
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

          </div>
        ))}

      </div>

      {/* RIGHT SIDE */}
      <div className="cart-right">

        <h3>Price Details</h3>

        <div className="price-row">
          <span>Total Items</span>
          <span>{cart.length}</span>
        </div>

        <div className="price-row total">
          <span>Total Amount</span>
          <span>{totalPrice}</span>
        </div>

        <button className="checkout-btn">Place Order</button>

      </div>

    </div>
  );
}

export default Cart;