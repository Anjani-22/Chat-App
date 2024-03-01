import mongoose from "mongoose";

const chatUserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    profilePic: {
      type: String,
      default: "",
    },
    //createdAt, updatedAt, Member since <CreatedAt>
  },
  { timestamps: true }
);

const chatUser = mongoose.model("chatUser", chatUserSchema);
export default chatUser;
