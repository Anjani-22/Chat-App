export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.chatUser._id;
  } catch (error) {
    console.log("getUsersForSidebar", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
