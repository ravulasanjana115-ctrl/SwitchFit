// import React, { useState, useEffect } from "react";

// function Banner() {
//   const banners = [
//     "/images/bann2.jpg",
//     "/images/bann3.jpg",
//     "/images/banner897.jpg",
//     "/images/banner333.jpg"
//   ];

//   const [index, setIndex] = useState(0);

//   // 🔥 Preload images (prevents flash)
//   useEffect(() => {
//     banners.forEach((img) => {
//       const image = new Image();
//       image.src = img;
//     });
//   }, []);

//   // 🔥 Auto slider (NO glitch, NO freeze)
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       const nextIndex = (index + 1) % banners.length;
//       setIndex(nextIndex);
//     }, 3000);

//     return () => clearTimeout(timeout);
//   }, [index, banners.length]);

//   return (
//     <div className="banner-container">

//       <img
//         src={banners[index]}
//         alt="banner"
//         className={`banner-img ${
//           banners[index].includes("banner333.jpg") ? "fix-banner-4" : ""
//         }`}
//       />

//       <div className="banner-text">
//         <h1>Switch Your Style. Train Hard</h1>
//         <p>Premium Gym Wear for Maximum Performance</p>
//         <button className="shop-btn">Shop Now</button>
//       </div>

//     </div>
//   );
// }

// export default Banner;

import React, { useState, useEffect } from "react";

function Banner() {
  const banners = [
    { img: "/images/bann2.jpg", pos: " 100% 20% " },
    { img: "/images/bann3.jpg", pos: "85% 20%" },     // 🔥 fix top cut
    { img: "/images/banner897.jpg", pos: "85% 30%" }, // 🔥 fix height
    { img: "/images/banner333.jpg", pos: "75% 50%" }
  ];

  const [index, setIndex] = useState(0);

  // 🔥 Preload images (prevents flash)
  useEffect(() => {
    banners.forEach((item) => {
      const image = new Image();
      image.src = item.img;
    });
  }, []);

  // 🔥 Auto slider (stable)
  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIndex = (index + 1) % banners.length;
      setIndex(nextIndex);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [index, banners.length]);

  return (
    <div className="banner-container">

      <img
        src={banners[index].img}
        alt="banner"
        className="banner-img"
        style={{ objectPosition: banners[index].pos }} // 🔥 key line
      />

      <div className="banner-text">
        <h1>Switch Your Style. Train Hard</h1>
        <p>Premium Gym Wear for Maximum Performance</p>
        <button className="shop-btn">Shop Now</button>
      </div>

    </div>
  );
}

export default Banner;