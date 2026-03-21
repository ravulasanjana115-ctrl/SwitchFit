// import { useNavigate } from "react-router-dom";

// const categories = [
//   {
//     name: "Women",
//     image: "/images/leggings1.jpg"
//   },
//   {
//     name: "Men",
//     image: "/images/mentshirt.jpg"
//   },
//   {
//     name: "Unisex",
//     image: "/images/gymshorts.jpg"
//   },
//   {
//     name: "Accessories",
//     image: "/images/gloves.jpg"
//   }
// ];
// function Categories() {

//   const navigate = useNavigate();

//   return (

//     <div className="categories">

//       <h2>Shop by Category</h2>

//       <div className="category-grid">

//         <div className="category-card" onClick={() => navigate("/category/leggings")}>
//           <img src={leggings} alt="leggings" />
//           <h3>Leggings (Women)</h3>
//         </div>

//         <div className="category-card" onClick={() => navigate("/category/shorts")}>
//           <img src={shorts} alt="shorts" />
//           <h3>Shorts (Men & Women)</h3>
//         </div>

//         <div className="category-card" onClick={() => navigate("/category/sportsbra")}>
//           <img src={sportsbra} alt="sportsbra" />
//           <h3>Sports Bra (Women)</h3>
//         </div>

//         <div className="category-card" onClick={() => navigate("/category/tshirts")}>
//           <img src={tshirts} alt="tshirts" />
//           <h3>T-Shirts (Men & Women)</h3>
//         </div>

//         <div className="category-card" onClick={() => navigate("/category/tracks")}>
//           <img src={tracks} alt="tracks" />
//           <h3>Tracks (Men & Women)</h3>
//         </div>

//       </div>

//     </div>

//   );

// }

// export default Categories;
// import { useNavigate } from "react-router-dom";

// function Categories() {

// const navigate = useNavigate();

// return (

// <div className="categories">

// <h2>Shop by Category</h2>

// <div className="category-grid">

// <div className="category-card" onClick={() => navigate("/category/leggings")}>
// <img src="/images/leggings1.jpg" alt="leggings" />
// <h3>Leggings (Women)</h3>
// </div>

// <div className="category-card" onClick={() => navigate("/category/shorts")}>
// <img src="/images/gymshorts.jpg" alt="shorts" />
// <h3>Shorts (Men & Women)</h3>
// </div>

// <div className="category-card" onClick={() => navigate("/category/sportsbra")}>
// <img src="/images/sportsbra.jpg" alt="sportsbra" />
// <h3>Sports Bra (Women)</h3>
// </div>

// <div className="category-card" onClick={() => navigate("/category/tshirts")}>
// <img src="/images/mentshirt.jpg" alt="tshirts" />
// <h3>T-Shirts (Men & Women)</h3>
// </div>

// <div className="category-card" onClick={() => navigate("/category/tracks")}>
// <img src="/images/tracks.jpg" alt="tracks" />
// <h3>Tracks (Men & Women)</h3>
// </div>

// </div>

// </div>

// );

// }

// export default Categories;
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Categories() {

const navigate = useNavigate();
const [categories, setCategories] = useState([]);

useEffect(() => {

fetch("http://localhost:3001/categories")
.then(res => res.json())
.then(data => setCategories(data));

}, []);

return (

<div className="categories">

<h2>Shop by Category</h2>

<div className="category-grid">

{categories.map((cat) => (

<div
className="category-card"
key={cat.id}
onClick={() => navigate(`/products?category=${cat.category}`)}
>

<img src={cat.image} alt={cat.name} />

<h3>{cat.name}</h3>

</div>

))}

</div>

</div>

);

}

export default Categories;
