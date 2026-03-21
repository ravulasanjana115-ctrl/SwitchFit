const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/generateToken");

let refreshTokens = [];

exports.login = (req, res) => {

  const user = {
    id: 1,
    email: req.body.email
  };

  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  refreshTokens.push(refreshToken);

  res.json({
    accessToken,
    refreshToken
  });
};

exports.refresh = (req, res) => {

  const { refreshToken } = req.body;

  if (!refreshToken) return res.sendStatus(401);
  if (!refreshTokens.includes(refreshToken)) return res.sendStatus(403);

  jwt.verify(refreshToken, "REFRESH_SECRET", (err, user) => {

    if (err) return res.sendStatus(403);

    const accessToken = generateAccessToken({
      id: user.id,
      email: user.email
    });

    res.json({ accessToken });

  });
};