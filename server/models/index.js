import mongoose from "mongoose";
import User from "./user.js";

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URI);
};

const models = { User };

export { connectDB };

export default models;
