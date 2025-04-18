import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    email: { type: String, unique: true, required: true },
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
