// import { useState } from "react";

// function Login(){

// const [loginData,setLoginData] = useState({
// email:"",
// password:""
// });

// const handleChange = (e)=>{
// setLoginData({...loginData,[e.target.name]:e.target.value});
// };

// const handleSubmit = async (e)=>{

// e.preventDefault();

// try{

// const response = await fetch("http://localhost:5000/login",{

// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },

// body:JSON.stringify(loginData)

// });

// const data = await response.json();

// alert(data.message);

// }catch(error){

// console.error(error);
// alert("Login failed");

// }

// };

// return(

// <div className="login-container">

// <h2>Login</h2>

// <form onSubmit={handleSubmit}>

// <input
// type="email"
// name="email"
// placeholder="Email"
// onChange={handleChange}
// required
// />

// <input
// type="password"
// name="password"
// placeholder="Password"
// onChange={handleChange}
// required
// />

// <button type="submit">
// Login
// </button>

// </form>

// </div>

// );

// }

// // export default Login;








// import { useState } from "react";
// import { toast } from "react-toastify";

// function Login(){

// const [user,setUser] = useState({
// email:"",
// password:""
// });

// const handleChange = (e)=>{
// setUser({...user,[e.target.name]:e.target.value});
// };

// const handleSubmit = async (e)=>{
// e.preventDefault();

// try{

// const response = await fetch("http://localhost:5000/login",{
// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },
// body:JSON.stringify(user)
// });

// const data = await response.json();

// // Toast message
// if(data.message === "Login successful"){
// toast.success(data.message);
// }else{
// toast.error(data.message);
// }

// }catch(error){

// console.error(error);
// toast.error("Login failed");

// }

// };

// return(

// <div className="login-container">

// <h2>Login</h2>

// <form onSubmit={handleSubmit}>

// <input
// type="email"
// name="email"
// placeholder="Email"
// value={user.email}
// onChange={handleChange}
// required
// />

// <input
// type="password"
// name="password"
// placeholder="Password"
// value={user.password}
// onChange={handleChange}
// required
// />

// <button type="submit">
// Login
// </button>

// </form>

// </div>

// );

// }

// export default Login;

// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// function Login(){

// const navigate = useNavigate();

// const [user,setUser] = useState({
// email:"",
// password:""
// });

// const handleChange = (e)=>{
// setUser({...user,[e.target.name]:e.target.value});
// };

// const handleSubmit = async (e)=>{
// e.preventDefault();

// try{

// const response = await fetch("http://localhost:5000/login",{
// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },
// body:JSON.stringify(user)
// });

// const data = await response.json();

// if(data.message === "Login successful"){

// toast.success(data.message);


// localStorage.setItem("user", JSON.stringify(data.user));



// navigate("/");


// }else{

// toast.error(data.message);

// }

// }catch(error){

// console.error(error);
// toast.error("Login failed");

// }

// };

// return(

// <div className="login-container">

// <h2>Login</h2>

// <form onSubmit={handleSubmit}>

// <input
// type="email"
// name="email"
// placeholder="Email"
// value={user.email}
// onChange={handleChange}
// required
// />

// <input
// type="password"
// name="password"
// placeholder="Password"
// value={user.password}
// onChange={handleChange}
// required
// />

// <button type="submit">
// Login
// </button>

// </form>

// </div>

// );

// }

// // export default Login;
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// function Login() {

// const navigate = useNavigate();

// const [user, setUser] = useState({
// email: "",
// password: ""
// });

// const handleChange = (e) => {
// setUser({ ...user, [e.target.name]: e.target.value });
// };

// const handleSubmit = async (e) => {

// e.preventDefault();

// try {

// const response = await fetch("http://localhost:5000/login", {
// method: "POST",
// headers: {
// "Content-Type": "application/json"
// },
// body: JSON.stringify(user)
// });

// const data = await response.json();

// if (response.ok) {

// toast.success("Login Successful 🎉");

// // store logged in user
// localStorage.setItem("user", JSON.stringify(data.user));

// // clear form
// setUser({
// email: "",
// password: ""
// });

// // redirect to home
// navigate("/");

// } else {

// toast.error(data.message || "Invalid credentials");

// }

// } catch (error) {

// console.error(error);
// toast.error("Server error. Try again later.");

// }

// };

// return (

// <div className="login-container">

// <h2>Login to SwitchFit</h2>

// <form onSubmit={handleSubmit}>

// <input
// type="email"
// name="email"
// placeholder="Enter Email"
// value={user.email}
// onChange={handleChange}
// required
// />

// <input
// type="password"
// name="password"
// placeholder="Enter Password"
// value={user.password}
// onChange={handleChange}
// required
// />

// <button type="submit">
// Login
// </button>

// </form>

// </div>

// );

// }

// export default Login;
// import { Link } from "react-router-dom";
// import { useState } from "react";

// function Navbar() {

// const [showProfile, setShowProfile] = useState(false);

// const user = JSON.parse(localStorage.getItem("user"));

// const toggleProfile = () => {
// setShowProfile(!showProfile);
// };

// const handleLogout = () => {
// localStorage.removeItem("user");
// window.location.reload();
// };

// return (

// <>
// <div className="navbar">

// <h2 className="logo">SwitchFit</h2>

// <div className="nav-links">

// <Link to="/products">
// <button className="nav-button">Products</button>
// </Link>

// <Link to="/wishlist">
// <button className="nav-button">Wishlist</button>
// </Link>

// <Link to="/cart">
// <button className="nav-button">Cart</button>
// </Link>

// {user ? (

// <button className="nav-button" onClick={toggleProfile}>
// Profile
// </button>

// ) : (

// <>
// <Link to="/login">
// <button className="nav-button">Login</button>
// </Link>

// <Link to="/signup">
// <button className="signup-button">Signup</button>
// </Link>
// </>

// )}

// </div>

// </div>

// {/* Profile Sidebar */}

// {showProfile && (

// <div className="profile-sidebar">

// <h3>User Profile</h3>

// <p><b>Email:</b> {user?.email}</p>

// <hr />

// <button className="profile-btn">Orders History</button>

// <button className="profile-btn">Coupons</button>

// <button className="profile-btn">Points</button>

// <button className="logout-btn" onClick={handleLogout}>
// Logout
// </button>

// </div>

// )}

// </>

// );

// }

// export default Navbar;
// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// function Login(){

// const navigate = useNavigate();

// const [user,setUser] = useState({
// email:"",
// password:""
// });

// const handleChange = (e)=>{
// setUser({...user,[e.target.name]:e.target.value});
// };

// const handleSubmit = async (e)=>{
// e.preventDefault();

// try{

// const response = await fetch("http://localhost:5000/login",{
// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },
// body:JSON.stringify(user)
// });

// const data = await response.json();

// if(data.message === "Login successful"){

// toast.success(data.message);

// localStorage.setItem("user", JSON.stringify(data.user));

// navigate("/");

// }else{

// toast.error(data.message);

// }

// }catch(error){

// console.error(error);
// toast.error("Login failed");

// }

// };

// return(

// <div className="login-container">

// <h2>Login</h2>

// <form onSubmit={handleSubmit}>

// <input
// type="email"
// name="email"
// placeholder="Email"
// value={user.email}
// onChange={handleChange}
// required
// />

// <input
// type="password"
// name="password"
// placeholder="Password"
// value={user.password}
// onChange={handleChange}
// required
// />

// <button type="submit">
// Login
// </button>

// </form>

// </div>

// );

// }

// export default Login;





// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// function Login() {

//     const navigate = useNavigate();

//     const [user, setUser] = useState({
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {

//             const response = await fetch("http://localhost:5000/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(user)
//             });

//             const data = await response.json();

//             if (data.message === "Login successful") {

//                 toast.success(data.message);

//                 localStorage.setItem("user", JSON.stringify(data.user));

//                 navigate("/");

//             } else {

//                 toast.error(data.message);

//             }

//         } catch (error) {

//             console.error(error);
//             toast.error("Login failed");

//         }

//     };

//     return (

//         <div className="login-container">

//             <h2>Login</h2>

//             <form onSubmit={handleSubmit}>

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={user.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={user.password}
//                     onChange={handleChange}
//                     required
//                 />

//                 <button type="submit">Login</button>

//             </form>

//         </div>

//     );

// }

// export default Login;


// import { useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// function Login() {

//     const navigate = useNavigate();

//     const [user, setUser] = useState({
//         email: "",
//         password: ""
//     });

//     const handleChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {

//             const response = await fetch("http://localhost:5000/login", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(user)
//             });

//             const data = await response.json();

//             if (data.message === "Login successful") {

//                 toast.success(data.message);

//                 // Clear previous user session
//                 localStorage.removeItem("user");

//                 // Store logged in user
//                 const loggedUser = {
//                     name: data.user.name,
//                     email: data.user.email,
//                     id: data.user.id
//                 };

//                 localStorage.setItem("user", JSON.stringify(loggedUser));

//                 navigate("/");

//             } else {

//                 toast.error(data.message);

//             }

//         } catch (error) {

//             console.error(error);
//             toast.error("Login failed");

//         }

//     };

//     return (

//         <div className="login-container">

//             <h2>Login</h2>

//             <form onSubmit={handleSubmit}>

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={user.email}
//                     onChange={handleChange}
//                     required
//                 />

//                 <input
//                     type="password"
//                     name="password"
//                     placeholder="Password"
//                     value={user.password}
//                     onChange={handleChange}
//                     required
//                 />

//                 <button type="submit">Login</button>

//             </form>

//         </div>

//     );

// }

// export default Login;






// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// function Login() {

// const navigate = useNavigate();

// const [user, setUser] = useState({
// email: "",
// password: ""
// });


// // 🔒 Redirect if already logged in
// useEffect(() => {

// const loggedUser = localStorage.getItem("user");

// if (loggedUser) {
// navigate("/");
// }

// }, [navigate]);


// // Handle input change
// const handleChange = (e) => {
// setUser({ ...user, [e.target.name]: e.target.value });
// };


// // Handle login
// const handleSubmit = async (e) => {

// e.preventDefault();

// try {

// const response = await fetch("http://localhost:5000/login", {
// method: "POST",
// headers: {
// "Content-Type": "application/json"
// },
// body: JSON.stringify(user)
// });

// const data = await response.json();

// if (data.message === "Login successful") {

// toast.success("Login successful");

// // Protected user object
// const loggedUser = {
// id: data.user.id,
// name: data.user.name,
// email: data.user.email
// };

// // Save session
// localStorage.setItem("user", JSON.stringify(loggedUser));

// navigate("/");

// } else {

// toast.error(data.message);

// }

// } catch (error) {

// console.error(error);
// toast.error("Login failed");

// }

// };


// return (

// <div className="login-container">

// <h2>Login</h2>

// <form onSubmit={handleSubmit}>

// <input
// type="email"
// name="email"
// placeholder="Email"
// value={user.email}
// onChange={handleChange}
// required
// />

// <input
// type="password"
// name="password"
// placeholder="Password"
// value={user.password}
// onChange={handleChange}
// required
// />

// <button type="submit">Login</button>

// </form>

// </div>

// );

// }

// export default Login;


// import { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// function Login() {

// const navigate = useNavigate();

// const [user, setUser] = useState({
// email: "",
// password: ""
// });

// /* 🔒 Redirect if already logged in */

// useEffect(() => {

// const token = localStorage.getItem("accessToken");

// if (token) {
// navigate("/");
// }

// }, [navigate]);

// /* ================= HANDLE INPUT ================= */

// const handleChange = (e) => {

// setUser({
// ...user,
// [e.target.name]: e.target.value
// });

// };

// /* ================= HANDLE LOGIN ================= */

// const handleSubmit = async (e) => {

// e.preventDefault();

// try {

// const response = await fetch("http://localhost:5000/login", {
// method: "POST",
// headers: {
// "Content-Type": "application/json"
// },
// body: JSON.stringify(user)
// });

// const data = await response.json();

// if (data.accessToken) {

// toast.success("Login successful");

// /* Save tokens */

// localStorage.setItem("accessToken", data.accessToken);
// localStorage.setItem("refreshToken", data.refreshToken);

// /* Save user */

// const loggedUser = {
// id: data.user.id,
// name: data.user.name,
// email: data.user.email
// };

// localStorage.setItem("user", JSON.stringify(loggedUser));

// navigate("/");

// } else {

// toast.error(data.message);

// }

// } catch (error) {

// console.error(error);
// toast.error("Server error");

// }

// };

// /* ================= UI ================= */

// return (

// <div className="login-container">

// <h2>Login</h2>

// <form onSubmit={handleSubmit}>

// <input
// type="email"
// name="email"
// placeholder="Email"
// value={user.email}
// onChange={handleChange}
// required
// />

// <input
// type="password"
// name="password"
// placeholder="Password"
// value={user.password}
// onChange={handleChange}
// required
// />

// <button type="submit">Login</button>

// </form>

// </div>

// );

// }

// export default Login;
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    /* 🔒 Redirect if already logged in */

    useEffect(() => {

        const token = localStorage.getItem("accessToken");

        if (token) {
            navigate("/", { replace: true });
        }

    }, []);

    /* ================= HANDLE INPUT ================= */

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    };

    /* ================= HANDLE LOGIN ================= */

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await fetch("http://localhost:5000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();

            /* login success */

            if (data.accessToken) {

                toast.success("Login successful");

                /* save tokens */

                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem("refreshToken", data.refreshToken);

                /* save user */

                localStorage.setItem(
                    "user",
                    JSON.stringify({
                        id: data.user.id,
                        name: data.user.name,
                        email: data.user.email
                    })
                );

                /* redirect to home */

                navigate("/", { replace: true });

            } else {

                toast.error(data.message || "Invalid email or password");

            }

        } catch (error) {

            console.error("Login Error:", error);
            toast.error("Server error. Please try again.");

        }

    };

    /* ================= UI ================= */

    return (

        <div className="login-container">

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />

                <button type="submit">Login</button>

            </form>

        </div>

    );

}

export default Login;
