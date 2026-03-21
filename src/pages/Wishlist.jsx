// import { useContext } from "react";
// import { toast } from "react-toastify";
// import { WishlistContext } from "../context/WishlistContext";

// function Wishlist() {

// const { wishlist, setWishlist } = useContext(WishlistContext);

// const removeItem = (index) => {

// const updatedWishlist = [...wishlist];

// updatedWishlist.splice(index, 1);

// setWishlist(updatedWishlist);

// localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

// toast.error("Removed from wishlist");

// };

// return (

// <div style={{ padding: "40px" }}>

// <h2>Your Wishlist</h2>

// {wishlist.length === 0 && <p>No items in wishlist</p>}

// {wishlist.map((item, index) => (

// <div key={index} style={{ marginBottom: "20px" }}>

// <h4>{item.name}</h4>

// <p>Price: ₹{item.price}</p>

// <button onClick={() => removeItem(index)}>
// Remove
// </button>

// </div>

// ))}

// </div>

// );

// }

// export default Wishlist;
import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";

function Wishlist() {

const { wishlist, setWishlist } = useContext(WishlistContext);
const navigate = useNavigate();

const user = JSON.parse(localStorage.getItem("user"));

// 🔒 Protect Wishlist Page + Load user wishlist
useEffect(() => {

if (!user) {
toast.error("Please login to view your wishlist");
navigate("/login");
return;
}

const storedWishlist =
JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

setWishlist(storedWishlist);

}, [navigate]);

// ❌ Remove item
const removeItem = (index) => {

const updatedWishlist = [...wishlist];

updatedWishlist.splice(index, 1);

setWishlist(updatedWishlist);

localStorage.setItem(
`wishlist_${user.id}`,
JSON.stringify(updatedWishlist)
);

toast.error("Removed from wishlist");

};

return (

<div style={{ padding: "40px" }}>

<h2>Your Wishlist</h2>

{wishlist.length === 0 ? (

<p>No items in wishlist</p>

) : (

wishlist.map((item, index) => (

<div
key={item.id}
style={{
display: "flex",
alignItems: "center",
gap: "20px",
marginBottom: "20px",
borderBottom: "1px solid #ddd",
paddingBottom: "15px"
}}
>

<img
src={item.image}
alt={item.name}
style={{ width: "80px", height: "80px", objectFit: "cover" }}
/>

<div>
<h4>{item.name}</h4>
<p>Price: ₹{item.price}</p>
</div>

<button onClick={() => removeItem(index)}>
Remove </button>

</div>

))

)}

</div>

);

}

export default Wishlist;
