import chatUser from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    const { username, fullname, password, confirmPassword, gender } = req.body;

    if (!username || username.trim() === "") {
      return res.status(400).json({ error: "Username is required" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "passoword dont match" });
    }

    const chatuser = await chatUser.find({ username: username });
    console.log("funduser ", chatuser);

    if (chatuser && chatuser.length !== 0) {
      return res.status(400).json({ error: "Username already exists" });
    }
    //Hash password
    //https://avatar-placeholder.iran.liara.run/

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newchatUser = new chatUser({
      fullname,
      username,
      password,
      gender,
      profilePic: gender === "female" ? girlProfilePic : boyProfilePic,
    });

    await newchatUser.save();

    res.status(201).json({
      _id: newchatUser.id,
      fullname: newchatUser.fullname,
      username: newchatUser.username,
      profilePic: newchatUser.profilePic,
    });
  } catch (error) {
    console.log("😀Error", error.message, error);
    res.status(500).json({ error: "server side error" });
  }
};
export const login = (req, res) => {
  res.send("Login");
};
export const logout = (req, res) => {
  res.send("Logout");
};
