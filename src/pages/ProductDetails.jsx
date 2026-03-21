import { useParams, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { toast } from "react-toastify";

function ProductDetails() {
    const { productId } = useParams();
    const navigate = useNavigate();

    const [selectedSize, setSelectedSize] = useState("");

    // ✅ SCROLL FIX
    const scrollRef = useRef();

    const scrollLeft = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft -= 200;
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollLeft += 200;
        }
    };

    // 🔥 PRODUCTS
    const products = [
        
   { id: "1", name: "Women Leggings", category: "women", price: "₹899", image: "/images/leggings1.jpg", description: "Comfortable stretchable leggings for gym and yoga.", rating: 4.5 },
        { id: "2", name: "Sports Bra", category: "women", price: "₹799", image: "/images/sportsbra.jpg", description: "Breathable sports bra with strong support.", rating: 4.4 },
        { id: "3", name: "Gym Shorts", category: "women", price: "₹699", image: "/images/shorts1.jpg", description: "Lightweight gym shorts for intense workouts.", rating: 4.2 },
        { id: "4", name: "Men Gym T-Shirt", category: "men", price: "₹599", image: "/images/mtshirts.jpg", description: "Sweat-absorbing t-shirt perfect for training.", rating: 4.3 },
        { id: "5", name: "Gym Tank Top", category: "men", price: "₹549", image: "/images/gymtanktop.jpg", description: "Sleeveless tank top for maximum mobility.", rating: 4.1 },
        { id: "6", name: "Compression Tights", category: "women", price: "₹999", image: "/images/comptights1.jpg", description: "High performance compression tights.", rating: 4.6 },
        { id: "7", name: "Women Gym Jacket", category: "women", price: "₹1299", image: "/images/womengym.jpg", description: "Lightweight gym jacket.", rating: 4.5 },
        { id: "8", name: "Gym Hoodie", category: "unisex", price: "₹1499", image: "/images/gymhoodie.jpg", description: "Warm hoodie suitable for gym.", rating: 4.4 },
        { id: "9", name: "Training Shorts", category: "men", price: "₹699", image: "/images/trainingshorts.jpg", description: "Lightweight training shorts.", rating: 4.2 },
        { id: "10", name: "Yoga Pants", category: "women", price: "₹899", image: "/images/yogapants.jpg", description: "Flexible yoga pants.", rating: 4.3 },
        { id: "11", name: "Gym Joggers", category: "men", price: "₹1099", image: "/images/gymjoggers.jpg", description: "Comfortable joggers.", rating: 4.4 },
        { id: "12", name: "Running Shorts", category: "women", price: "₹699", image: "/images/runningshorts2.jpg", description: "Lightweight running shorts.", rating: 4.2 },
        { id: "13", name: "Gym Cap", category: "accessories", price: "₹399", image: "/images/gymcap.jpg", description: "Sweat resistant cap.", rating: 4.1 },
        { id: "14", name: "Gym Gloves", category: "accessories", price: "₹499", image: "/images/gymgloves2.jpg", description: "Weightlifting gloves.", rating: 4.3 },
        { id: "34", name: "Yoga Mat", category: "accessories", price: "₹799", image: "/images/yogamat.jpg", description: "Non-slip yoga mat.", rating: 4.4 },
        { id: "35", name: "Gym Towel", category: "accessories", price: "₹299", image: "/images/gymtowel.jpg", description: "Soft towel.", rating: 4.2 },
        { id: "51", name: "Gym Bag", category: "accessories", price: "₹1299", image: "/images/gymbag.jpg", description: "Spacious bag.", rating: 4.5 },
        { id: "52", name: "Water Bottle", category: "accessories", price: "₹399", image: "/images/waterbottle.jpg", description: "Durable bottle.", rating: 4.3 },
        { id: "53", name: "Wrist Sweat Band", category: "accessories", price: "₹299", image: "/images/wristband.jpg", description: "Comfortable wrist band.", rating: 4.0 },
    ]

    const product = products.find((p) => p.id === productId);
    if (!product) return <h2>Product not found</h2>;

    const similarProducts = products.filter(
        (p) => p.category === product.category && p.id !== product.id
    );

    const reviews = [
        { id: 1, user: "Rahul", comment: "Very comfortable!", rating: 5 },
        { id: 2, user: "Anjali", comment: "Nice quality!", rating: 4 },
    ];

    // 🔥 ADD TO CART
    const addToCart = (product, size) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            toast.error("Please login first");
            return;
        }

        let items = JSON.parse(localStorage.getItem(`cart_${user.id}`)) || [];

        const exists = items.find(
            (item) => item.id === product.id && item.size === size
        );

        if (exists) {
            items = items.map((item) =>
                item.id === product.id && item.size === size
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            toast.info("Quantity updated");
        } else {
            items.push({ ...product, size, quantity: 1 });
            toast.success("Added to cart 🛒");
        }

        localStorage.setItem(`cart_${user.id}`, JSON.stringify(items));
    };

    // 🔥 WISHLIST
    const addToWishlist = (product) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            toast.error("Please login first");
            return;
        }

        let items = JSON.parse(localStorage.getItem(`wishlist_${user.id}`)) || [];

        if (!items.some((item) => item.id === product.id)) {
            items.push(product);
            toast.success("Added to wishlist ❤️");
        } else {
            toast.info("Already in wishlist");
        }

        localStorage.setItem(`wishlist_${user.id}`, JSON.stringify(items));
    };

    const handleAddToCart = () => {
        if (!selectedSize) {
            toast.error("Please select a size!");
            return;
        }

        addToCart(product, selectedSize);
    };

    return (
        <div style={{ maxWidth: "1100px", margin: "auto", padding: "20px" }}>

            {/* 🔥 TOP */}
            <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>

                <img
                    src={product.image}
                    alt={product.name}
                    style={{
                        width: "260px",
                        height: "260px",
                        objectFit: "contain", // ✅ no blur
                        background: "#fff",
                        padding: "10px",
                        borderRadius: "10px",
                    }}
                />

                <div>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3>{product.price}</h3>
                    <p>⭐ {product.rating}</p>

                    <h3>Select Size</h3>

                    <div style={{ display: "flex", gap: "10px" }}>
                        {["S", "M", "L", "XL"].map((size) => (
                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                style={{
                                    padding: "8px 12px",
                                    border: selectedSize === size ? "2px solid black" : "1px solid gray",
                                    background: selectedSize === size ? "black" : "white",
                                    color: selectedSize === size ? "white" : "black",
                                }}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    {!selectedSize && (
                        <p style={{ color: "red" }}>Please select size</p>
                    )}

                    <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                        <button
                            onClick={handleAddToCart}
                            disabled={!selectedSize}
                            style={{
                                padding: "10px 15px",
                                background: selectedSize ? "#ff7a00" : "gray",
                                color: "white",
                                border: "none",
                                borderRadius: "6px",
                                cursor: selectedSize ? "pointer" : "not-allowed",
                            }}
                        >
                            Add to Cart
                        </button>

                        <button
                            onClick={() => addToWishlist(product)}
                            style={{
                                padding: "10px 15px",
                                background: "#ffc0cb",
                                border: "none",
                                borderRadius: "6px",
                            }}
                        >
                            ❤️ Wishlist
                        </button>
                    </div>
                </div>
            </div>

            {/* 🔥 REVIEWS */}
            <div style={{ marginTop: "40px" }}>
                <h3>Customer Reviews</h3>
                {reviews.map((r) => (
                    <div key={r.id} style={{
                        background: "#111",
                        color: "white",
                        padding: "10px",
                        marginBottom: "10px",
                        borderRadius: "8px"
                    }}>
                        <p><strong>{r.user}</strong> ⭐ {r.rating}</p>
                        <p>{r.comment}</p>
                    </div>
                ))}
            </div>

            {/* 🔥 SIMILAR PRODUCTS SLIDER */}
            <div style={{ marginTop: "40px" }}>
                <h3>Similar Products</h3>

                <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
                    <button onClick={scrollLeft}>⬅</button>
                    <button onClick={scrollRight}>➡</button>
                </div>

                <div
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        gap: "20px",
                        overflowX: "auto",
                        scrollBehavior: "smooth"
                    }}
                >
                    {similarProducts.map((item) => (
                        <div
                            key={item.id}
                            style={{
                                minWidth: "160px",
                                background: "#111",
                                color: "white",
                                padding: "10px",
                                borderRadius: "10px",
                                cursor: "pointer"
                            }}
                            onClick={() => navigate(`/product/${item.id}`)}
                        >
                            <img
                                src={item.image}
                                style={{
                                    width: "100%",
                                    height: "140px",
                                    objectFit: "cover",
                                    borderRadius: "8px"
                                }}
                            />
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default ProductDetails;