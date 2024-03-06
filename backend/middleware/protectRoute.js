import jwt from "jsonwebtoken";
import chatUser from "../models/chatUser.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token)
      return res.status(401).json({ error: "Unauthorized No token provided" });

    const decoded = jwt.verify(token, process.env.JWTSECRETKEY);

    if (!decoded)
      return res.status(401).json({ error: "Unauthirzed Invalid token" });

    const user = await chatUser.findById(decoded.userId).select("-password");

    if (!user) return res.status(404).json({ error: "User not found" });

    req.chatUser = user;

    next();
  } catch (error) {
    console.log("protectRoute", error.message);
    res.status(500).json({ error: "Internal Server error" });
  }
};

export default protectRoute;
