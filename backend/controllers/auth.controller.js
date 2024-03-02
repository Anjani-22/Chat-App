import chatUser from "../models/chatUser.model.js";
import bcrypt from "bcryptjs";
import generateJWTToken from "../utils/generateJWTToken.js";

export const signup = async (req, res) => {
  try {
    const { username, fullname, password, confirmPassword, gender } = req.body;

    if (!username || username.trim() === "") {
      return res.status(400).json({ error: "Username is required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "passoword dont match" });
    }

    const chatuser = await chatUser.findOne({ username: username });

    if (chatuser) {
      return res.status(400).json({ error: "Username already exists" });
    }
    //Hash password
    //https://avatar-placeholder.iran.liara.run/

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newchatUser = new chatUser({
      fullname,
      username,
      password: hashPassword,
      gender,
      profilePic: gender === "female" ? girlProfilePic : boyProfilePic,
    });

    if (newchatUser) {
      generateJWTToken(newchatUser._id, res);
      await newchatUser.save();

      //jwt

      res.status(201).json({
        _id: newchatUser.id,
        fullname: newchatUser.fullname,
        username: newchatUser.username,
        profilePic: newchatUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "invalid user data" });
    }
  } catch (error) {
    console.log("😀Error Signup", error.message, error);
    res.status(500).json({ error: "server side error" });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await chatUser.findOne({ username });
    console.log(user);
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );
    console.log("😎", password, isPasswordCorrect);
    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "invalid user or password" });
    }

    generateJWTToken(user._id, res);

    res.status(201).json({
      _id: user.id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (error) {
    console.log("😀Error Login", error.message, error);
    res.status(500).json({ error: "server side error" });
  }
};
export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logout succesfully" });
  } catch (error) {
    console.log("😀Error Logout", error.message, error);
    res.status(500).json({ error: "server side error" });
  }
};
