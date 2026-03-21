import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {

const [wishlist, setWishlist] = useState([]);

useEffect(() => {
const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
setWishlist(storedWishlist);
}, []);

const removeFromWishlist = (index) => {

const updatedWishlist = [...wishlist];

updatedWishlist.splice(index,1);

setWishlist(updatedWishlist);

localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

toast.error("Removed from wishlist");

};

return(

<WishlistContext.Provider value={{
wishlist,
setWishlist,
removeFromWishlist
}}>

{children}

</WishlistContext.Provider>

);

}

export default WishlistProvider;