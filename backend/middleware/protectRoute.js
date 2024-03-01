import jwt from "jsonwebtoken";
import chatUser from "../models/chatUser.model.js";

const protectRoute = async (req, next, res) => {
  try {
    const token = req.cookies.jwt;
    if (!token)
      res.status(401).json({ error: "Unauthorized No token provided" });

    const decoded = jwt.verify(token, process.env.JWTSECRETROUTE);

    if (!decoded) res.status(401).json({ error: "Unauthirzed Invalid token" });

    const user = await chatUser.findById(decoded.userId).select("-password");

    if (!user) res.status(404).json({ error: "User not found" });

    req.chatUser = user;

    next();
  } catch (error) {
    console.log("protectedRoute", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export default protectRoute;
