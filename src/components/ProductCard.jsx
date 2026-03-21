// function ProductCard({name, price, image}){

//   return(

//     <div className="product-card">

//       <img src={image} alt={name}/>

//       <h3>{name}</h3>

//       <p>₹{price}</p>

//       <button>Add to Cart</button>

//     </div>

//   )

// }

// export default ProductCard
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "./ProductCard.css";
import { FaHeart } from "react-icons/fa";

function ProductCard({ name, price, image }) {

  const { cart, setCart } = useContext(CartContext);

  const addToCart = () => {

    const newItem = { name, price, image };

    setCart([...cart, newItem]);

  };

  return (

    <div className="product-card">

      <img src={image} alt={name} />

      <h3>{name}</h3>

      <p>₹{price}</p>

      <button onClick={addToCart}>
        Add to Cart
      </button>

    </div>

  );

}

export default ProductCard;