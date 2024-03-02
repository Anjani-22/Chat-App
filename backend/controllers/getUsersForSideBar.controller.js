import chatUser from "../models/chatUser.model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.chatUser._id;

    const filteredChatUsers = await chatUser
      .find({
        _id: { $ne: loggedInUserId },
      })
      .select("-password");

    res.status(200).json(filteredChatUsers);
  } catch (error) {
    console.log("getUsersForSidebar", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
