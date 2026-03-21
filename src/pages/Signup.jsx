// import { useState } from "react";

// function Signup(){

// const [user,setUser] = useState({
// name:"",
// email:"",
// password:""
// });

// const handleChange = (e)=>{
// setUser({...user,[e.target.name]:e.target.value});
// };

// const handleSubmit = async (e)=>{
// e.preventDefault();

// try{

// const response = await fetch("http://localhost:5000/register",{

// method:"POST",
// headers:{
// "Content-Type":"application/json"
// },

// body:JSON.stringify(user)

// });

// const data = await response.text();

// alert(data);

import { useState } from "react";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showRules, setShowRules] = useState(false);

    /* ================= HANDLE CHANGE ================= */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });

        if (name === "password") {
            setShowRules(true); // show rules when typing
        }
    };

    /* ================= PASSWORD CHECKS ================= */
    const checks = {
        length: user.password.length >= 8,
        upper: /[A-Z]/.test(user.password),
        number: /[0-9]/.test(user.password),
        special: /[@$!%*?&]/.test(user.password)
    };

    const isValidPassword =
        checks.length && checks.upper && checks.number && checks.special;

    /* ================= PASSWORD STRENGTH ================= */
    const getStrength = () => {
        let strength = Object.values(checks).filter(Boolean).length;

        if (strength <= 2) return "Weak";
        if (strength === 3) return "Medium";
        return "Strong";
    };

    /* ================= SUBMIT ================= */
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isValidPassword) {
            setError("Please enter a strong password");
            return;
        }

        setError("");

        try {
            const response = await fetch("http://localhost:5000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(user)
            });

            const data = await response.json();

            if (data.message === "User Registered Successfully") {
                toast.success(data.message);
            } else {
                toast.error(data.message);
            }

            setUser({ name: "", email: "", password: "" });
            setShowRules(false);

        } catch (error) {
            console.error(error);
            toast.error("Error registering user");
        }
    };

    return (
        <div className="signup-container">
            <h2>Register</h2>

            <form onSubmit={handleSubmit}>
                {/* NAME */}
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={user.name}
                    onChange={handleChange}
                    required
                />

                {/* EMAIL */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />

                {/* PASSWORD */}
                <div className="password-box">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                        onFocus={() => setShowRules(true)}
                        required
                    />

                    <span
                        className="toggle-eye"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                {/* ERROR */}
                {error && <p className="error">{error}</p>}

                {/* STRENGTH */}
                {user.password && (
                    <p className="strength">Strength: {getStrength()}</p>
                )}

                {/* RULES (ONLY WHEN INVALID OR TYPING) */}
                {showRules && !isValidPassword && (
                    <ul className="rules">
                        <li>{checks.length ? "✔" : "❌"} At least 8 characters</li>
                        <li>{checks.upper ? "✔" : "❌"} One uppercase letter</li>
                        <li>{checks.number ? "✔" : "❌"} One number</li>
                        <li>{checks.special ? "✔" : "❌"} One special character</li>
                    </ul>
                )}

                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default Signup;