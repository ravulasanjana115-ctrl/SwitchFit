import { useParams } from "react-router-dom";
import { useState } from "react";

function CategoryProducts() {

    const { categoryName } = useParams();

    const [wishlist, setWishlist] = useState([]);

    const products = [

        { id: 1, name: "High Waist Gym Leggings", price: 899, category: "leggings" },

        { id: 2, name: "Stretch Fit Leggings", price: 999, category: "leggings" },

        { id: 3, name: "Performance Shorts", price: 699, category: "shorts" },

        { id: 4, name: "Breathable Sports Bra", price: 799, category: "sportsbra" },

        { id: 5, name: "Gym Training T-Shirt", price: 599, category: "tshirts" },

        { id: 6, name: "Track Pants", price: 1099, category: "tracks" }

    ];

    const filteredProducts =
        products.filter(product => product.category === categoryName);

    const toggleWishlist = (id) => {

        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter(item => item !== id));
        } else {
            setWishlist([...wishlist, id]);
        }

    };

    const addToCart = (product) => {
        console.log("Added to cart:", product);
    };

    return (

        <div className="products-page">

            <h2>{categoryName.toUpperCase()} PRODUCTS</h2>

            <div className="products-grid">

                {filteredProducts.map(product => (

                    <div className="product-card" key={product.id}>

                        <div
                            onClick={() => toggleWishlist(product.id)}
                            style={{
                                position: "absolute",
                                top: "10px",
                                right: "15px",
                                fontSize: "22px",
                                cursor: "pointer",
                                color: wishlist.includes(product.id) ? "red" : "white"
                            }}
                        >
                            ♥
                        </div>

                        <img
                            src="https://via.placeholder.com/200"
                            alt="product"
                        />

                        <h3>{product.name}</h3>

                        <p>₹{product.price}</p>

                        <button onClick={() => addToCart(product)}>
                            Add to Cart
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default CategoryProducts;