import jwt from "jsonwebtoken";

export const generateToken = (payload, res) => {
  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "1h" });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600000, // 1 hour
  });
  return token;
};

export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.SECRET_KEY);
  } catch (error) {
    throw new Error("Invalid token");
  }
};
