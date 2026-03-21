const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

/* ================= CORS ================= */

app.use(cors({
  origin: ["http://localhost:5173", "http://localhost:3000"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));



app.use(express.json());
app.use(cookieParser());

/* ================= MYSQL CONNECTION ================= */

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Myravul@135",
  database: "switchfit"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection error:", err);
  } else {
    console.log("MySQL Connected");
  }
});

/* ================= JWT SECRETS ================= */

const ACCESS_SECRET = "switchfit_access_secret";
const REFRESH_SECRET = "switchfit_refresh_secret";

let refreshTokens = [];

/* ================= GENERATE TOKENS ================= */

function generateAccessToken(user) {
  return jwt.sign(user, ACCESS_SECRET, { expiresIn: "1m" }); // testing expiry
}

function generateRefreshToken(user) {
  return jwt.sign(user, REFRESH_SECRET, { expiresIn: "2m" });
}

/* ================= REGISTER USER ================= */

app.post("/register", async (req, res) => {

  const { name, email, password } = req.body;

  const checkUser = "SELECT * FROM users WHERE email=?";

  db.query(checkUser, [email], async (err, result) => {

    if (err) {
      return res.status(500).json({ message: "Database error" });
    }

    if (result.length > 0) {
      return res.json({ message: "User already exists with this email" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertUser =
      "INSERT INTO users (name,email,password) VALUES (?,?,?)";

    db.query(insertUser, [name, email, hashedPassword], (err) => {

      if (err) {
        return res.status(500).json({ message: "Registration failed" });
      }

      res.json({
        message: "User Registered Successfully"
      });

    });

  });

});

/* ================= LOGIN ================= */

app.post("/login", (req, res) => {

  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email=?";

  db.query(sql, [email], async (err, result) => {

    if (err) {
      return res.status(500).json({ message: "Login error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const user = result[0];

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const payload = {
      id: user.id,
      email: user.email
    };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    refreshTokens.push(refreshToken);

    res.json({
      message: "Login successful",
      accessToken,
      refreshToken,
      user
    });

  });

});

/* ================= REFRESH TOKEN ================= */

app.post("/refresh", (req, res) => {

  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token missing" });
  }

  if (!refreshTokens.includes(refreshToken)) {
    return res.status(403).json({ message: "Invalid refresh token" });
  }

  jwt.verify(refreshToken, REFRESH_SECRET, (err, user) => {

    if (err) {
      return res.status(403).json({ message: "Refresh token expired" });
    }

    const accessToken = generateAccessToken({
      id: user.id,
      email: user.email
    });

    res.json({ accessToken });

  });

});

/* ================= VERIFY TOKEN ================= */

function verifyToken(req, res, next) {

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access token required" });
  }

  jwt.verify(token, ACCESS_SECRET, (err, user) => {

    if (err) {
      console.log("Access token expired");
      return res.status(403).json({ message: "Access token expired" });
    }

    req.user = user;
    next();

  });

}

/* ================= PRODUCTS API ================= */

app.get("/products", verifyToken, (req, res) => {

  const sql = "SELECT * FROM products";

  db.query(sql, (err, result) => {

    if (err) {
      console.log(err);
      return res.status(500).json({ message: "Database error" });
    }

    res.json(result);

  });

});

/* ================= PROTECTED PROFILE ================= */

app.get("/profile", verifyToken, (req, res) => {

  res.json({
    message: "Protected Profile Data",
    user: req.user
  });

});

/* ================= LOGOUT ================= */

app.post("/logout", (req, res) => {

  const { refreshToken } = req.body;

  refreshTokens = refreshTokens.filter(token => token !== refreshToken);

  res.json({ message: "Logged out successfully" });

});

/* ================= SERVER ================= */

app.listen(5000, () => {
  console.log("Server running on port 5000");
});