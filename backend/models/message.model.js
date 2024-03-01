import mongoose from "mongoose";
import chatUser from "./chatUser.model.js";

const messageSchema = new mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: chatUser,
      requirerd: true,
    },
    receiverId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: chatUser,
      requirerd: true,
    },

    message: {
      type: String,
      requirerd: true,
    },
    //createdAt, UpdatedAt
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

export default Message;
