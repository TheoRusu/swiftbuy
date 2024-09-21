import mongoose from "mongoose";

const connectDB = () => {
  return mongoose.connect(process.env.MONGO_URI);
};

const models = {};

export { connectDB };

export default models;
